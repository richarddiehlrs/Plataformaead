import styled from 'styled-components';

export default styled.div`
  background-image: linear-gradient(
    -90deg,
   rgba(61,61,61,0.6) 0%,
   rgba(133,133,133,0.2) 50%,
   rgba(61,61,61,0.6) 100%
  );

  background-size: 400% 400%;
  animation: shimmer 1.6s ease-in-out infinite;

  @keyframes shimmer {
    0%{
      background-position: 0% 0%;
    }
    100%{
      background-position: -135% 0%;
    }
  }

`;
