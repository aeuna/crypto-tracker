import styled from 'styled-components';

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

interface IOverviewItem {
  color?: string;
}

const OverviewItem = styled.div<IOverviewItem>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  span:nth-child(2) {
    color: ${(props) => props.color};
    font-weight: bold;
  }
`;

interface IPriceData {
  ath_date: string;
  ath_price: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_1h: number;
  percent_change_1y: number;
  percent_change_6h: number;
  percent_change_7d: number;
  percent_change_12h: number;
  percent_change_15m: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_30m: number;
  percent_from_price_ath: number;
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
}

interface IUSDData {
  USDData: IPriceData;
}

function Price({ USDData }: IUSDData) {
  const isNegative = (val: number) => {
    return val >= 0 ? '#4cd137' : '#EA2027';
  };
  return (
    <>
      {USDData && (
        <Overview>
          <OverviewItem color={isNegative(USDData.percent_change_15m)}>
            <span>15m</span>
            <span>{USDData.percent_change_15m}%</span>
          </OverviewItem>
          <OverviewItem color={isNegative(USDData.percent_change_30m)}>
            <span>30m</span>
            <span>{USDData.percent_change_30m}%</span>
          </OverviewItem>
          <OverviewItem color={isNegative(USDData.percent_change_1h)}>
            <span>1h</span>
            <span>{USDData.percent_change_1h}%</span>
          </OverviewItem>
          <OverviewItem color={isNegative(USDData.percent_change_6h)}>
            <span>6h</span>
            <span>{USDData.percent_change_6h}%</span>
          </OverviewItem>
          <OverviewItem color={isNegative(USDData.percent_change_12h)}>
            <span>12h</span>
            <span>{USDData.percent_change_12h}%</span>
          </OverviewItem>
        </Overview>
      )}
    </>
  );
}

export default Price;
