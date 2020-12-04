import React, { useState, useCallback, useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';

import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/auth';

import CollapsibleMenu from 'components/Atoms/CollapsibleMenu';
import Separator from 'components/Atoms/Separator';

import nlLogo from 'assets/images/nextLevel_512_sombra.png';

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
  const { pathname } = useLocation();

  const handleChangeTab = useCallback((tab: string) => {
    changeTab(tab);

    if (pathname !== `/${tab}`) {
      push({
        pathname: `/${tab}`,
        state: { tab },
      });
    }
  }, [push, changeTab, pathname]);

  const handleCollapseMenu = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  useEffect(() => {
    const tab = pathname.replace('/', '');
    changeTab(tab);
  }, [changeTab, pathname]);

  return (
    <>
      <Container>
        <LogoContent>
          <Logo onClick={() => handleChangeTab('courses')} src={nlLogo} alt="nllogo" />
          <Separator customHeight={40} type="vertical" />
          <UserContainer bg={user.imageurl}>
            <div className="image-container">
              <img src={user.imageurl} alt="user" />
            </div>
            <div className="user-data-container">
              <h3>{user.fullname}</h3>
              <p>{`${user.schoolName} `}</p>
              <p>{`${user.roomid}`}</p>
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
