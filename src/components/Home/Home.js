
import classes from "./Home.css";

const Home = (props) => {

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <button  type="button"  onClick={refreshPage}>
      {props.currentAccount.substring(0,5)+"..."+props.currentAccount.substr(-5)}
      </button>
       
  );
};
export default Home;