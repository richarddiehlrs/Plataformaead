import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin-bottom: 16px;

`;

export const VideoCardWrapper = styled.div`
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
    box-shadow: 8px 8px 8px rgba(0,0,0,.02);
    cursor: pointer;
  }

`;

export const SelectedIconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 20px;
  width: 20px;

  padding: 0;
  margin: 0;

  .checked-container{
    position: absolute;
    display: flex;

    top: 14px;
    left: 20px;

    z-index: 3;
  }
`;

export const Thumb = styled.div`
  position: relative;
`;

export const AnnotationIndicator = styled.div`
  position: absolute; 
  bottom: 0;
  left: 0;

  margin-bottom: 4px;

  img{
    width: 26%;
  }
`;

export const Time = styled.div`
  position: absolute;
  bottom: 4px;
  right: 0;

  p{
    font-size: 12px;
    padding: 4px;
    background: rgba(0,0,0,0.5);
    z-index:2;
  }
`;

export const StyledProgressBar = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
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
