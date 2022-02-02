import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { fetchCoins } from '../api';
import { Helmet } from 'react-helmet';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atoms';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.coinBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid #f5f6fa;
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
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const ThemeIcon = styled.div`
  float: right;
  margin-top: 20px;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
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
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <ThemeIcon>{isDark ? <BsMoonStars onClick={toggleDarkAtom} size="27" /> : <BsSun onClick={toggleDarkAtom} size="27" />}</ThemeIcon>
      <Header>
        <Title>Coin</Title>
      </Header>

      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 101).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
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
