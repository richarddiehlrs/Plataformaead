import React from 'react';

import {
  Container, MenuWrapper, CollapsedMenu, Option,
} from './styles';

interface CollapsibleMenuProps {
  handleChangeTab(key: string): void;
  handleCollapseMenu(): void;
  isCollapsed: boolean;
  items: Array<{ key: string, value: string }>;
  actualTab: string;
}

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({
  handleChangeTab, handleCollapseMenu, isCollapsed, items, actualTab,
}) => (
  <Container className="logo-options">
    <MenuWrapper isCollapsed={isCollapsed} onClick={handleCollapseMenu}>
      {items && items.map((item) => (
        <Option key={item.value} className="logo-option" tabIsSelected={actualTab === item.key} onClick={() => handleChangeTab && handleChangeTab(item.key)}>{item.value}</Option>
      ))}
      <CollapsedMenu onClick={handleCollapseMenu} className="collapsed-icon">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </CollapsedMenu>
    </MenuWrapper>
  </Container>
);

export default CollapsibleMenu;
