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
    <>
      <Container>
        <LogoContent>
          <Logo onClick={() => handleChangeTab('cursos')} src={nlLogo} alt="nllogo" />
          <Separator type="vertical" />
          <UserContainer bg={user.imageurl}>
            <div className="image-container">
              <img src={user.imageurl} alt="user" />
            </div>
            <div className="user-data-container">
              <h3>{user.fullname}</h3>
              <p>{`${user.schoolName} ${user.schoolCity}`}</p>
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
      <Separator type="horizontal" />
    </>
  );
};

export default Header;
