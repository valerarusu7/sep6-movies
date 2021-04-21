import { useSelector } from "react-redux";
import Login from "../components/Login";
import Layout from "../components/Layout";

function Home() {
  const { user } = useSelector((state) => state.auth);

  return user === null ? <Login /> : <Layout />;
}

export default Home;
