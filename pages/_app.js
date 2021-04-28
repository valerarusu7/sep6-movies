import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { auth } from "../firebase/firebase";
import "../styles/globals.css";
import Login from "./login";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
