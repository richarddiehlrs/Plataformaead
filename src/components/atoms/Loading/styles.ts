import styled from 'styled-components';

export const Container = styled.div`
position: relative;
width: 3rem;
height: 3rem;

span{
  display: block;
  width: 3rem;
  height: 3rem;

  border: 0.2rem solid #e9e9e9;
  border-top: 0.2rem solid #fc9003;
  border-right: 0.2rem solid #fac278;
  border-bottom: 0.2rem solid #ffe2bd;
  border-left: 0.2rem solid #ffefdb;

  border-radius: 50%;

  box-sizing: border-box;
  top: 0;
  left: 0;

  position: absolute;
}
`;
