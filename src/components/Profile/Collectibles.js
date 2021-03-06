import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";
import classes from "./CollectiblesGrid.module.css";
import { useState } from "react";
import ListSaleModal from "./ListSaleModal";
// import { LinkContainer } from "react-router-bootstrap";
import { detailSliceActions } from "../../redux/Marketplace/detailSlice";

import CollectiblesGridCard from "./CollectiblesGridCard";

const Collectibles = ({ itemNotForSale, itemOnSale, burnToken }) => {
  const { currentUser, items, listModal } = useSelector(
    (state) => state.detail
  );
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  let ownedArr;

  const modalHandler = (id) => {
    setCurrentId(id);
    dispatch(detailSliceActions.updateListModal(true));
  };

  const ownerItems = (items, currentUser) => {
    ownedArr = items.filter((i) => i.owner === currentUser);
    // console.log("this owner owns", ownedArr);
  };
  ownerItems(items, currentUser);

  return (
    <Container fluid className={classes.browseitem}>
      <Row className={classes.row}>
        {ownedArr.length > 0 ? (
          ownedArr.map((item, index) => {
            return (
              // <Col className="mt-4 d-flex justify-content-center" key={index}>
              //   <BrowseItemCard item={item} />
              // </Col>
              <div className={classes.grid}>
                <CollectiblesGridCard
                  modalHandler={modalHandler}
                  itemNotForSale={itemNotForSale}
                  burnToken={burnToken}
                  item={item}
                  key={index}
                />
              </div>
            );
          })
        ) : (
          <div className={classes.divWidth}>
            <div className={classes.noMatch}>
              <h4 className={`p-5 text-dark ${classes.notice}`}>
                You don't have any collectibles
              </h4>
            </div>
          </div>
        )}
      </Row>
      <ListSaleModal
        show={listModal}
        itemOnSale={itemOnSale}
        dialogClassName="modal-20w"
        tokenId={currentId}
      />
    </Container>
    // <div className="d-flexw Collectibles row">
    // {ownedArr &&
    //   ownedArr.map((item, index) => {
    //       return (
    //         <div className="col-lg-3 col-md-4 col-sm-6">
    //           <Card key={index} style={{ width: "18rem" }} className="mx-2">
    //             <Card.Img
    //               variant="top"
    //               src={imgSource(item.id)}
    //               alt={item.id}
    //               roundedCircle
    //             />
    //             <Card.Body>
    //               <LinkContainer to={`/items/asset/${item.id}`}>
    //                 <button className="btn text-center">{item.itemName}</button>
    //               </LinkContainer>
    //               <Card.Text>
    //                 <h6 className="m-1">
    //                   Owner:{" "}
    //                   <a href={`/profile/${item.owner}`}>
    //                     {item.owner.substr(0, 16)}...
    //                   </a>
    //                 </h6>
    //                 <h6 className="m-1">
    //                   Creator:{" "}
    //                   <a href={`/profile/${item.creator}`}>
    //                     {item.creator.substr(0, 16)}...
    //                   </a>
    //                 </h6>
    //                 <h6 className="m-1">Id: {item.id}</h6>
    //                 <h6 className="m-1">Price {item.price / 1e18}</h6>
    //                 {item.forSale === true ? (
    //                   <h6 className="m-1">Status: Listing </h6>
    //                 ) : (
    //                   <h6 className="m-1">Status: Not Listing </h6>
    //                 )}
    //               </Card.Text>

    //               <div className="d-flex">
    //                 {item.forSale === true ? (
    //                   <button
    //                     className="mx-1 btn btn-info"
    //                     onClick={(e) => props.itemNotForSale(item.id)}
    //                   >
    //                     Cancel Listing
    //                   </button>
    //                 ) : (
    //                   <button
    //                     className="mx-1 btn btn-info"
    //                     onClick={() => modalHandler(item.id)}
    //                   >
    //                     List Item
    //                   </button>
    //                 )}
    //                 {/* <Button variant="success">Approve</Button>
    //                             <Button variant="warning">Cancel Approve</Button> */}
    //                 {item.owner === item.creator && (
    //                   <div>
    //                     <button
    //                       className="mx-1 btn btn-info"
    //                       onClick={(e) => props.burnToken(item.id)}
    //                     >
    //                       Burn Token
    //                     </button>
    //                   </div>
    //                 )}
    //               </div>
    //             </Card.Body>
    //           </Card>
    //         </div>
    //       );
    //     })}
    //   {ownedArr && (
    //     <ListSaleModal
    //       show={listModal}
    //       // onHide={() => setListItemModal(false)}
    //       itemOnSale={props.itemOnSale}
    //       dialogClassName="modal-20w"
    //       tokenId={currentID}
    //     />
    //   )}
    // </div>
  );
};

export default Collectibles;
