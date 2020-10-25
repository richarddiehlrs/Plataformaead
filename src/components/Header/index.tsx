import React, { useState, useCallback } from 'react';
// import Collapsible from 'react-col'
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import {
  Container, LogoContent, Logo, Separator, UserContainer, LogoOptions, CollapsedMenu, CollasibleMenu, Option,
} from './styles';

import nlLogo from '../../assets/images/nlicon.png';

interface HeaderProps {
  actualTab?: string;
}

const Header: React.FC<HeaderProps> = ({
  actualTab, children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { user } = useAuth();
  const { push } = useHistory();

  const handleChangeTab = useCallback((tab: string) => {
    push({
      pathname: `/${tab}`,
      state: { tab },
    });
  }, [push]);

  const handleCollapse = useCallback(() => {
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
        <LogoOptions className="logo-options" collapsible onClick={handleCollapse} isCollapsed={isCollapsed}>
          <>
            <CollasibleMenu onClick={handleCollapse} isCollapsed={isCollapsed}>
              <Option className="logo-option" tab={actualTab === 'cursos'} onClick={() => handleChangeTab('cursos')}>Cursos</Option>
              <Option className="logo-option" tab={actualTab === 'aovivo'} onClick={() => handleChangeTab('aovivo')}>Aulas ao vivo</Option>
              <Option className="logo-option" tab={actualTab === 'gravadas'} onClick={() => handleChangeTab('gravadas')}>Aulas gravadas</Option>
              <Option className="logo-option" tab={actualTab === 'plantao'} onClick={() => handleChangeTab('plantao')}>Plantão de dúvidas</Option>
              <Option className="logo-option" tab={actualTab === 'mensagens'} onClick={() => handleChangeTab('mensagens')}>Mensagens</Option>
              <CollapsedMenu onClick={handleCollapse} className="collapsed-icon">
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </CollapsedMenu>
            </CollasibleMenu>

          </>
          {children}
        </LogoOptions>
      </LogoContent>
    </Container>
  );
};

export default Header;
