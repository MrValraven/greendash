import React from 'react';
import arrowDropdownIcon from './icons/sidebar-arrow-drop-icon.svg';
import { SidebarItemType } from '../../types.ts';

import './SidebarItem.css';

interface Props {
  item: SidebarItemType;
  collapsed: boolean;
  expandedItems: Set<string>;
  onToggle: (label: string) => void;
  onExpandSidebar?: () => void;
  isActive: boolean;
  activeSubItem: string | null;
  onItemClick: (itemLabel: string, itemPath?: string) => void;
  onSubItemClick: (parentLabel: string, subItemLabel: string, subItemPath?: string) => void;
}

const SidebarItem: React.FC<Props> = ({
  item,
  collapsed,
  expandedItems,
  onToggle,
  onExpandSidebar,
  isActive,
  activeSubItem,
  onItemClick,
  onSubItemClick,
}) => {
  const isExpanded = expandedItems.has(item.label);
  const hasChildren = item.items && item.items.length > 0;

  const handleItemClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (collapsed && onExpandSidebar) {
      onExpandSidebar();

      if (hasChildren) {
        onToggle(item.label);
      }

      onItemClick(item.label, item.path);
    } else {
      if (hasChildren) onToggle(item.label);

      onItemClick(item.label, item.path);
    }
  };

  return (
    <>
      <div
        className={`sidebar-item ${collapsed ? 'collapsed' : 'expanded'} ${
          isActive ? 'active' : ''
        }`}
        onClick={handleItemClick}
      >
        <img src={item.icon} alt={item.label} className='sidebar-icon' />
        {!collapsed && (
          <>
            <div className='sidebar-label'>{item.label}</div>
            {hasChildren && (
              <img
                src={arrowDropdownIcon}
                alt='expand'
                className='dropdown-arrow'
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(item.label);
                }}
              />
            )}
          </>
        )}
      </div>
      {!collapsed && hasChildren && isExpanded && (
        <div className='sidebar-subitems'>
          {item.items!.map((subItem) => (
            <div
              key={subItem.label}
              className={`sidebar-subitem ${activeSubItem === subItem.label ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onSubItemClick(item.label, subItem.label, subItem.path);
              }}
            >
              <img src={subItem.icon} alt={subItem.label} className='sidebar-subitem-icon' />
              <div className='sidebar-subitem-label'>{subItem.label}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
