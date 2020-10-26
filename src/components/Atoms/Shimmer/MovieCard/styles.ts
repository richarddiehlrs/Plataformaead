import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 36px;
  border-radius: 4px;

  .bg-skeleton{
    width: 240px;
    height: 160px;

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
