import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
 } 
 50%{
  transform: rotate(360deg);
  border-radius: 100px;
 }
 100% {
  transform: rotate(0deg);
  border-radius: 0px;
 }
 `;

const LoaderWrapper = styled.span`
  text-align: center;
  display: block;
  animation: ${rotateAnimation} 2s linear infinite;
`;

function Loader() {
  return (
    <LoaderWrapper>
      <img src={require('../images/loading.png')} alt="loader" width={100} height={100} />
    </LoaderWrapper>
  );
}

export default Loader;
