import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  border: solid 1px aquamarine;
  margin-top: 16px;

  font-family: 'Raleway', sans-serif;
  color: #E9EAED;

  img{
    width: 100px;
  }
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 12px;

  h3{
    font-size: 18px;
  }
  p{
    font-size: 14px;
  }
`;
