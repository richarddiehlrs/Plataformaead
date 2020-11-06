import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 86vh;
`;

export const Heading = styled.div`
  width: 100vw;
  padding: 40px 120px;

  p{
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    color: #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;

  width: 100vw;
  padding: 20px 120px;

  transition: 0.5s ease-out;

  .flex-item{
    flex: 0 1 calc(12.6666%);
  }
`;
