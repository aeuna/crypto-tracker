import styled from 'styled-components';

const Title = styled.h2`
  color: ${(props) => props.theme.accentColor};
`;

function Coins() {
  return <Title>Coins</Title>;
}

export default Coins;
