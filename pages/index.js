import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { useRouter } from "next/router";
import { signOut } from "../store/reducers/authReducer";
import Login from "../components/Login";

export default function Home() {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div>
      {user === null ? (
        <Login />
      ) : (
        <div>
          <div>email: {user.email}</div>
          <div>name: {user.displayName}</div>
          <div>id: {user.uid}</div>
          <Avatar src={user.photoURL} alt={user.displayName} />
          <button onClick={() => dispatch(signOut())}>Sign out</button>
        </div>
      )}
    </div>
  );
}
