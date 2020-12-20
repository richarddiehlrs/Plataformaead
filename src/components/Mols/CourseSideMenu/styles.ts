import styled, { css } from 'styled-components';
import Skeleton from 'components/Skeleton';

interface ContainerProps {
  customType?: string;
}

interface HorizontalSelectContainerProps {
  isLoading: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => (props.customType === 'recordedClasses' ? 'rgba(0,0,0,0.01)' : '#242a39')};

  font-family: 'Raleway';
  color: #e7eaf2;

  width: 480px;
  height: 100%;

  padding: 0 20px;

  h3{
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
  width: 100%;

  font-family: 'Raleway', sans-serif;
  color: #E9EAED;

  img{
    width: 320px;
    height: 160px;
    object-fit: cover;
    margin-bottom: 12px;
  }
`;

export const CustomHeading = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;

  width: 100%;
  padding: 10px;
  margin-bottom: 40px;
  margin-top: 20px;

  p{
    margin-bottom: 8px;
  }
`;

export const HorizontalSelectContainer = styled.div<HorizontalSelectContainerProps>`
  width: 100%;

  ${(props) => props.isLoading && css`
    pointer-events: none;
    opacity: 0.5;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 4px;

  width: 96%;
  height: 100%;

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

export const ShimmerMovieBanner = styled(Skeleton)`
width: 320px;
height: 160px;
margin-bottom: 12px;
`;

export const ShimmerMovieTitle = styled(Skeleton)`
width: 100px;
height: 20px;
margin-top: 12px;
`;
