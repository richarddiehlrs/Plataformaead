import styled, { css } from 'styled-components';
import Skeleton from 'components/Skeleton';

interface DescriptionProps{
  size?: number;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`;

export const Thumb = styled(Skeleton)`
  width: 120px;
  height: 80px;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  margin-left: 12px;
`;

export const Title = styled(Skeleton)`
  width: 220px;
  height: 20px;
`;

export const Description = styled(Skeleton)<DescriptionProps>`
  height: 10px;

  ${(props) => (props.size ? css`width: ${props.size}px` : css`width: 100px`)}
`;
