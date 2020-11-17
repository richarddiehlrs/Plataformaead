import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 12px 0;

  margin-top: 16px;

  font-family: 'Roboto', sans-serif;
  color: #E9EAED;

  transition: 0.4s;

  img{
    width: 100px;
  }

  &:hover{
    box-shadow: inset 0 0 8px rgba(0,0,0,.8);
    cursor: pointer;
  }
`;

export const SelectedIconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 20px;
  width: 20px;

  padding: 0;
  margin: 0;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-left: 12px;

  h3{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
  }
  p{
    font-size: 12px;
  }
`;
