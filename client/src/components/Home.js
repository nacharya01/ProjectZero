import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount } from "../actions/action";
import Button from "react-bootstrap/Button";
import "../assets/css/Home.css";

const Home = () => {
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(increaseCount())} variant="primary">
        UP
      </Button>
      <span className="count">{reducer.count}</span>
      <Button onClick={() => dispatch(decreaseCount())} variant="primary">
        Down
      </Button>
    </div>
  );
};

export default Home;
