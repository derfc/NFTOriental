import { useState } from "react";
import { useDispatch } from "react-redux";
import dotenv from "dotenv";
import { Button, Container, Form } from "react-bootstrap";
import { mintingSliceActions } from "../../redux/Minting/mintingSlice";

// import LoadModal from "../Common/LoadModal";
dotenv.config();

const Mint = ({ handleMintingSubmit, show, setShow }) => {
  const [name, setName] = useState("");
  const [externalUrl, setExternalUrl] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  // const etherscanLoad = useSelector((state) => state.detail.etherscanLoad);

  return (
    <div>
      <Container className="MintPage">
        <Form
          className="m-3"
          id="confirm-form"
          encType="multipart/form-data"
          onSubmit={handleMintingSubmit}
        >
          <Form.Group>
            <Form.Label>
              <h4 className="font-weight-bold">Upload Your NFT</h4>
            </Form.Label>
            <Form.Control
              name="uploadImg"
              type="file"
              id="uploadImg"
              onChange={(e) =>
                dispatch(mintingSliceActions.updateFile(e.target.files[0]))
              }
              accept="image/x-png,image/gif,image/jpeg"
              required
            />
            <Form.Text className="text-muted">Upload your file</Form.Text>
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              id="price"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              onBlur={(e) =>
                dispatch(mintingSliceActions.updatePrice(e.target.value))
              }
              required
            />
            <Form.Text className="text-muted">
              Service fee: $ {price * 0.05}, You will receive $ {price * 0.95}
            </Form.Text>
          </Form.Group> */}
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={(e) =>
                dispatch(mintingSliceActions.updateName(e.target.value))
              }
              required
            />
            <Form.Text className="text-muted">
              * Enter your product name
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Collection</Form.Label>
            <Form.Control
              onChange={(e) => {
                //   console.log(e.target.value);
                dispatch(mintingSliceActions.updateCollection(e.target.value));
              }}
              as="select"
              id="inlineFormCustomSelectPref"
              custom
              size="md"
              required
            >
              <option value="Art">Art</option>
              <option value="Avatars">Avatars</option>
              <option value="Exclusive Events">Exclusive Events</option>
              <option value="Sports">Sports</option>
              <option value="Trading Cards">Trading Cards</option>
              <option value="Virtual Worlds">Virtual Worlds</option>
            </Form.Control>
            {/* <Form.Control
              name="categoies"
              type="text"
              id="categoies"
              placeholder="Categoies"
              onChange={(e) =>
                dispatch(mintingSliceActions.updateCategory(e.target.value))
              }
            /> */}
            <Form.Text className="text-muted">* Set item collection</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Item Description</Form.Label>
            <Form.Control
              name="description"
              type="text"
              id="description"
              placeholder="Description"
              description={description}
              onChange={(e) => setDescription(e.target.value)}
              onBlur={(e) =>
                dispatch(mintingSliceActions.updateDescription(e.target.value))
              }
              required
            />
            <Form.Text className="text-muted">Max. characters: 255</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>External URL</Form.Label>
            <Form.Control
              name="externalUrl"
              type="text"
              id="externalUrl"
              placeholder="External URL"
              value={externalUrl}
              onChange={(e) => setExternalUrl(e.target.value)}
              onBlur={(e) =>
                dispatch(mintingSliceActions.updateExternalUrl(e.target.value))
              }
            />
            <Form.Text className="text-muted">
              * Input external URL for your item{" "}
            </Form.Text>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button type="submit" className="btn btn-warning" value="upload">
              Mint Product
            </Button>
          </Form.Group>
        </Form>
      </Container>
      {/* <LoadModal show={etherscanLoad} title="minting" /> */}
    </div>
  );
};

export default Mint;
