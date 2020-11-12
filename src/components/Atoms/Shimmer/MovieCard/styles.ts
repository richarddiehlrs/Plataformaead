import styled, { css } from 'styled-components';

interface MovieContainerProps {
  type: string;
}

export const Container = styled.div<MovieContainerProps>`
  display: flex;
  flex-direction: column;
  margin-right: 36px;
  border-radius: 4px;

  transition: width 0.4s, height 0.4s;

  ${(props) => props.type === 'horizontal' && css`
    width: 240px;
    height: 160px;
  `}

  ${(props) => props.type === 'vertical' && css`
    width: 140px;
    height: 180px;
  `}

  ${(props) => props.type === 'category' && css`
    width: 160px;
    height: 200px;
  `}

  .bg-skeleton{
    width: 240px;
    height: 160px;

    transition: width 0.4s, height 0.4s;

    ${(props) => props.type === 'horizontal' && css`
      width: 240px;
      height: 160px;
    `}

    ${(props) => props.type === 'vertical' && css`
      width: 140px;
      height: 180px;
    `}

    ${(props) => props.type === 'category' && css`
    width: 160px;
    height: 200px;
  `}

    box-shadow: 0 0 10px rgba(0,0,0,0.08);
    /* filter: brightness(98%); */

    border: solid 0.8px rgba(117, 117, 117,0.5);
    border-radius: 4px;
  }

  .progress-bar-wrapper-skeleton{
    width: 100%;
    height: 8px;

    margin-top: 14px;

    border-radius: 12px;


    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .progress-bar-skeleton{
    width: 100%;
    height: 100%;

    border-radius: 12px;

    background: rgba(83, 90, 109,0.4);
  }
`;
