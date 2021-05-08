import { useSelector } from "react-redux";
import Loading from "./Loading";
import TransactionHistory from "./TransactionHistory";
const ProfileOfBanco = () => {
  const { account, ethBalance, cchBalance, loadingTransaction } = useSelector(
    (state) => state.banco
  );
  return (
    <div className="col text-left bancoProfile">
      <div className="container-fluid profileAccount">
        <h3>Account : {account}</h3>
      </div>
      <div className="container-fluid profileAsset">
        <h3>Asset :</h3>
        <div className="row">
          <div className="col">
            <h3>ETH : {ethBalance}</h3>
          </div>
          <div className="col">
            <h3>CCH : {cchBalance}</h3>
          </div>
        </div>
      </div>
      {loadingTransaction ? (
        <Loading />
      ) : (
        <div className="mr-auto ml-auto">
          <TransactionHistory />
        </div>
      )}
    </div>
  );
};

export default ProfileOfBanco;
