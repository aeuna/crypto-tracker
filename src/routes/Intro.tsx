import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
  height: 10%;
  font-size: 40px;
  font-weight: bold;
  padding: 15px 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 42%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-align: center;
  font-weight: 500;
`;

const BtnWrapper = styled.div`
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Btn = styled.div`
  width: 200px;
  height: 50px;
  background-color: orange;
  margin: 0px 10px;
  text-align: center;
  line-height: 50px;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: orange;
  }
`;

function Intro() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const title =
    'Bitcoin is an online virtual currency based on blockchain technology that enables free financial transactions between individuals without interference.';
  useEffect(() => {
    const typing = setInterval(() => {
      setText(text + title[count]);
      setCount(count + 1);
    }, 150);
    if (title.length === count) clearInterval(typing);
    return () => clearInterval(typing);
  });

  const moveYoutube = () => {
    window.open('https://youtu.be/41JCpzvnn_0', '_blank');
  };

  return (
    <Container style={{ backgroundImage: `url(${require('./coin.png')})`, backgroundSize: 'cover' }}>
      <HelmetProvider>
        <Helmet>
          <title>bitcoin-tracker</title>
        </Helmet>
      </HelmetProvider>
      <Header>bitcoin-tracker</Header>
      <Wrapper>
        <Title>{text}</Title>
        <BtnWrapper>
          <Link to={{ pathname: `/coins` }}>
            <Btn>Bitcoin, start!</Btn>
          </Link>
          <Btn onClick={moveYoutube}>What is Bitcoin?</Btn>
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
}

export default Intro;
