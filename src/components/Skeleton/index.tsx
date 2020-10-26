import styled from 'styled-components';

export default styled.div`
  background-image: linear-gradient(
    -90deg,
   #a6a6a6 0%,
   #cccccc 50%,
   #a6a6a6 100%
  );

  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0%{
      background-position: 0% 0%;
    }
    100%{
      background-position: -135% 0%;
    }
  }

`;
