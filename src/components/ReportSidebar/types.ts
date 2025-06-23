export type SidebarItemType = {
  icon: string;
  label: string;
  path?: string;
  items?: SidebarItemType[];
};

export type SidebarSection = {
  section: string;
  items: SidebarItemType[];
};
