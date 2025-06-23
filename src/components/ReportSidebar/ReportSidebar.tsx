import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GreendashLogo from '@components/GreendashLogo/GreendashLogo.tsx';
import greendashLogoImg from '../../../public/greendashLogo.png';
import collapseIcon from './icons/collapse-icon.svg';

import SidebarSection from './components/SidebarSection/SidebarSection.tsx';
import sidebarItems from './components/SidebarData/SidebarData.ts';
import './ReportSidebar.css';

const ReportSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    let foundActiveItem = false;

    sidebarItems.forEach((section) => {
      section.items.forEach((item) => {
        if (item.path && currentPath.startsWith(item.path)) {
          setActiveItem(item.label);
          setActiveSubItem(null);
          foundActiveItem = true;

          // Also expand parent if it's a dropdown item
          if (item.items && item.items.length > 0) {
            setExpandedItems((prev) => new Set(prev).add(item.label));
          }
        }

        if (item.items && item.items.length > 0) {
          item.items.forEach((subItem) => {
            if (subItem.path && currentPath.startsWith(subItem.path)) {
              setActiveItem(item.label);
              setActiveSubItem(subItem.label);
              foundActiveItem = true;

              setExpandedItems((prev) => new Set(prev).add(item.label));
            }
          });
        }
      });
    });

    if (!foundActiveItem) {
      setActiveItem(null);
      setActiveSubItem(null);
    }
  }, [location.pathname]);

  const expandSidebar = () => {
    setCollapsed(false);
  };

  const toggleItemExpansion = (label: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) newSet.delete(label);
      else newSet.add(label);
      return newSet;
    });
  };

  const handleItemClick = (itemLabel: string, itemPath?: string) => {
    setActiveItem(itemLabel);
    setActiveSubItem(null);

    //navigation logic

    console.log('Navigate to:', itemPath);
  };

  const handleSubItemClick = (parentLabel: string, subItemLabel: string, subItemPath?: string) => {
    setActiveItem(parentLabel);
    setActiveSubItem(subItemLabel);

    // navigation logic

    console.log('Navigate to subitem:', subItemPath);
  };

  return (
    <div className={`report-sidebar ${collapsed ? 'collapsed' : 'expanded'}`}>
      <div className='sidebar-header'>
        <div className='sidebar-greendash-logo'>
          <img src={greendashLogoImg} alt='GreenDash Logo' />
          {!collapsed && <GreendashLogo />}
        </div>
        {!collapsed && (
          <div
            className='sidebar-toggle'
            onClick={() => setCollapsed((prev) => !prev)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <img src={collapseIcon} alt='toggle' />
          </div>
        )}
      </div>
      <nav className='sidebar-nav'>
        {sidebarItems.map((section, index) => (
          <React.Fragment key={section.section}>
            <SidebarSection
              section={section}
              collapsed={collapsed}
              expandedItems={expandedItems}
              onToggle={toggleItemExpansion}
              onExpandSidebar={expandSidebar}
              activeItem={activeItem}
              activeSubItem={activeSubItem}
              onItemClick={handleItemClick}
              onSubItemClick={handleSubItemClick}
            />
            {collapsed && index < sidebarItems.length - 1 && (
              <div className='sidebar-section-divider-container'>
                <div className='sidebar-section-divider' />
              </div>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default ReportSidebar;
