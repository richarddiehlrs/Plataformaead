import React, { useState, useCallback } from 'react';
import { FiLogOut } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import { useAuth } from 'hooks/auth';

import CollapsibleMenu from 'components/Atoms/CollapsibleMenu';
import Separator from 'components/Atoms/Separator';

import nlLogo from 'assets/images/nextLevel_512.png';

import {
  Container, LogoContent, Logo, UserContainer,
} from './styles';

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

  const { user, signOut } = useAuth();
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

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <LogoContent>
        <Logo onClick={() => handleChangeTab('cursos')} src={nlLogo} alt="nllogo" />
        <Separator type="vertical" />
        <UserContainer bg="https://avatars0.githubusercontent.com/u/53842905?s=460&u=e3ed01c01307e54599f5a8d7e38c99571a365b5f&v=4">
          <div className="image-container" />
          <div className="user-data-container">
            <h3>{user.fullname}</h3>
            <p>{`${user.levelid}-${user.roomid}`}</p>
          </div>
          <div>
            <button type="button" onClick={handleSignOut}>
              <FiLogOut size={20} />
            </button>

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
