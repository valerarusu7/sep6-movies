import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { signOut } from "../store/reducers/authReducer";
import withAuthentication from "../hoc/withAuthentication";

function Home() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div>email: {user.email}</div>
        <div>name: {user.displayName}</div>
        <div>id: {user.uid}</div>
        <Avatar src={user.photoURL} alt={user.displayName} />
        <button onClick={() => dispatch(signOut())}>Sign out</button>
      </div>
    </div>
  );
}

export default withAuthentication(Home);
