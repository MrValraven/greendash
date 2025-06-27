import React from 'react';
import SidebarItem from '../SidebarItem/SidebarItem.tsx';
import { SidebarSection as SidebarSectionType } from '../../types.ts';

import './SidebarSection.css';

interface Props {
  section: SidebarSectionType;
  collapsed: boolean;
  expandedItems: Set<string>;
  onToggle: (label: string) => void;
  onExpandSidebar?: () => void;
  activeItem: string | null;
  activeSubItem: string | null;
  onItemClick: (itemLabel: string, itemPath?: string) => void;
  onSubItemClick: (parentLabel: string, subItemLabel: string, subItemPath?: string) => void;
}

const SidebarSection: React.FC<Props> = ({
  section,
  collapsed,
  expandedItems,
  onToggle,
  onExpandSidebar,
  activeItem,
  activeSubItem,
  onItemClick,
  onSubItemClick,
}) => {
  return (
    <div className={`sidebar-section ${collapsed ? 'collapsed' : 'expanded'}`}>
      {!collapsed && section.section && (
        <div className='sidebar-section-title'>{section.section}</div>
      )}
      {section.items.map((item) => (
        <SidebarItem
          key={item.label}
          item={item}
          collapsed={collapsed}
          expandedItems={expandedItems}
          onToggle={onToggle}
          onExpandSidebar={onExpandSidebar}
          isActive={activeItem === item.label}
          activeSubItem={activeSubItem}
          onItemClick={onItemClick}
          onSubItemClick={onSubItemClick}
        />
      ))}
    </div>
  );
};

export default SidebarSection;
