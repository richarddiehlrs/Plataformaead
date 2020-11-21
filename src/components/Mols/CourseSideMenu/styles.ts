import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #242a39;

  font-family: 'Raleway';
  color: #e7eaf2;

  width: 400px;
  height: 100%;

  > h3{
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 500;

    margin-bottom: 4px;
    margin-right: auto;
    padding: 4px 12px;

    svg{
      margin-right: 12px;
      transition: color .4s;
      &:hover{
        color: rgba(255,255,255,0.3);
        cursor: pointer;
      }
    }
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Raleway', sans-serif;
  color: #E9EAED;

  img{
    width: 100%;
    object-fit: cover;
    margin-bottom: 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 4px;

  width: 96%;

  overflow: scroll;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;

  margin-bottom: 32px;
  > p{
    margin-bottom: 12px;
  }
`;

export const VideosScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;

  padding: 0 8px;
`;
