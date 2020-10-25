import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../hooks/auth';

import CollapsibleMenu from '../../atoms/CollapsibleMenu';

import {
  Container, LogoContent, Logo, Separator, UserContainer,
} from './styles';

import nlLogo from '../../../assets/images/nlicon.png';

interface HeaderProps {
  changeTab(tab: string): void;
  actualTab: string;
  tabs: Array<{ key: string, value: string }>;
}

const Header: React.FC<HeaderProps> = ({
  changeTab,
  actualTab, tabs, children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { user } = useAuth();
  const { push } = useHistory();

  const handleChangeTab = useCallback((tab: string) => {
    changeTab(tab);
    push({
      pathname: `/${tab}`,
      state: { tab },
    });
  }, [push, changeTab]);

  const handleCollapseMenu = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <Container>
      <LogoContent>
        <Logo onClick={() => handleChangeTab('dashboard')} src={nlLogo} alt="nllogo" />
        <Separator />
        <UserContainer>
          <div className="image-container">
            <img src="https://avatars0.githubusercontent.com/u/53842905?s=460&u=e3ed01c01307e54599f5a8d7e38c99571a365b5f&v=4" alt="" />
          </div>
          <div className="user-data-container">
            <h3>{user.fullname}</h3>
            <p>{`${user.levelid}-${user.roomid}`}</p>
          </div>
        </UserContainer>
        <CollapsibleMenu
          items={tabs}
          handleChangeTab={handleChangeTab}
          handleCollapseMenu={handleCollapseMenu}
          isCollapsed={isCollapsed}
          actualTab={actualTab}
        >
          {children}
        </CollapsibleMenu>
      </LogoContent>
    </Container>
  );
};

export default Header;
