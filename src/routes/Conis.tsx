import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { fetchCoins } from '../api';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Toggle from '../components/Toggle';
import Loader from '../components/Loader';

const Container = styled.div`
  width: 100%;
  height: 105vh;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  font-size: 40px;
  font-weight: bold;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.coinBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.coinBorderColor};
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);

  return (
    <Container>
      <HelmetProvider>
        <Helmet>
          <title>Coin</title>
        </Helmet>
      </HelmetProvider>
      <Header>
        <Link to={{ pathname: `/` }}>bitcoin-tracker</Link>
        <Toggle />
      </Header>
      <Title>Today's Coin Ranking</Title>
      {isLoading ? (
        <Loader />
      ) : (
        <CoinsList>
          {data?.slice(0, 101).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/coins/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
