import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: solid 1px red;

  width: 400px;
  height: 100%;
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
  h3{
    font-weight: 500;
    margin-bottom: 4px;
  }
  p{
    /* margin-bottom: 8px; */
  }

  border: solid 1px red;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;

  border: solid 1px aquamarine;

  overflow: scroll;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;

  border: solid 1px red;

  margin-bottom: 32px;
`;

export const VideosScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;

  border: solid 1px green;
`;
