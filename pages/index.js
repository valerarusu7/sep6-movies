import { useSelector } from "react-redux";
import Login from "../components/Login";
import Movies from "../components/Movies/Movies";

function Home() {
  const { user } = useSelector((state) => state.auth);

  return user === null ? <Login /> : <Movies />;
}

export default Home;
