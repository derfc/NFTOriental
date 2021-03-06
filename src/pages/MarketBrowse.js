import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { browseActions } from "../redux/Marketplace/browseSlice";
import { browseToggleThunk } from "../redux/Marketplace/browseSlice";
import { Col, Container, Row } from "react-bootstrap";
import Navi from "../components/Common/Navbar";
import ItemGrid from "../components/Common/ItemGrid/ItemGrid";
import BrowseSidebar from "../components/Marketplace/Browse_Seller/BrowseSidebar";
import SidebarFilterbar from "../components/Common/Sidebar/SidebarFilterbar";
import classes from "./MarketBrowse.module.css";
import dotenv from "dotenv";
dotenv.config();

function MarketBrowse() {
  const dispatch = useDispatch();
  const { itemArr, statusfilter, collectionfilter } = useSelector(
    (state) => state.browse
  );

  //browseToggleThunk: (type, data, isSellers)
  useEffect(() => {
    const fetchData = async () => {
      // console.log("First load Marketbrowse");
      await dispatch(browseToggleThunk("sort", "CREATE_DATE", false));
    };
    fetchData();
    return function browseclearup() {
      dispatch(browseActions.hardClear());
    };
  }, [dispatch]);

  return (
    <div className={classes.page}>
      <Navi />
      <Container fluid>
        <Row>
          <BrowseSidebar />
          <Col className={classes.column}>
            {(statusfilter.length > 0 || collectionfilter.length > 0) && (
              <SidebarFilterbar isSeller={false} />
            )}
            <ItemGrid items={itemArr} style={{ overflowY: "auto" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MarketBrowse;
