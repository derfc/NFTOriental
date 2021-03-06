import { useState, useEffect } from "react";
import axios from "axios";
import MarketOfBanco from "./MarketOfBanco";
import { Container, Jumbotron, Table } from "react-bootstrap";
import "./ContentOfBanco.css";

const ContentOfBanco = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="col bancoContent p-0">
      <Jumbotron fluid className="bancoJumbotron">
        <Container>
          <h4>Deposit ETH and earn CCH interest in minutes</h4>
          <h5>Join the world's largest DeFI Bank.</h5>
        </Container>
      </Jumbotron>
      <Container>
        <Table striped responsive hover>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>Last Price</th>
              <th>Change</th>
              <th>Market Cap.</th>
              <th>Volume</th>
            </tr>

            {/* <Row>
						<Col xs>Name</Col>
						<Col xs>Last Price</Col>
						<Col xs>Change</Col>
						<Col xs>Volume</Col>
						<Col xs>Market Capitalisation</Col>
					</Row> */}
          </thead>
          <tbody>
            {coins.map((coin) => {
              return (
                <MarketOfBanco
                  key={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ContentOfBanco;
