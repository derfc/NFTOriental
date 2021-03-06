import { Accordion, Card, Table } from "react-bootstrap";
import classes from "./DetailTradingHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function DetailTradingHistory({ itemdata }) {
  //   className={classes.card}
  // console.log(itemdata);
  let transactionDateArr = [];

  if (itemdata[1]) {
    transactionDateArr = itemdata[1].map((i) => ({
      ...i,
      createdDate: new Date(i.created_at).toLocaleDateString("en-GB"),
      createdTime: new Date(i.created_at).toLocaleTimeString("en-GB"),
    }));
    // console.log(transactionDateArr);
  }
  return (
    <>
      <Accordion defaultActiveKey="0" className={classes.accordion}>
        <Card className={classes.card}>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Trading History
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>From Address</th>
                    <th>To Address</th>
                    <th>Price (CCH)</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionDateArr.length > 0 ? (
                    transactionDateArr.map((item, key) => (
                      <tr key={key}>
                        <td>
                          <a
                            class={classes.link}
                            href={
                              "https://rinkeby.etherscan.io/tx/" + item.hash
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.createdDate} {item.createdTime}{" "}
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                          </a>
                        </td>
                        <td>{item.from_address}</td>
                        <td>{item.to_address}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))
                  ) : (
                    <p className="mt-2 ml-1">No Trading History</p>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default DetailTradingHistory;
