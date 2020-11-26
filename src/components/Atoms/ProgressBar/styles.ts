import styled from 'styled-components';

interface ContainerProps {
  at: number;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 8px;

  margin-top: 14px;

  border-radius: 12px;

  background: rgba(44, 47, 57);

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .progress-bar{
    width: ${(props) => props.at}%;
    height: 100%;

    border-radius: 12px;

    background: rgb(254, 212, 74);
  }
`;
