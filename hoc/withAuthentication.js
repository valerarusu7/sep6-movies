import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const withAuthentication = (WrappedComponent) => {
  const RequiresAuthentication = (props) => {
    const { user } = useSelector((state) => state.auth);
    const router = useRouter();

    useEffect(() => {
      if (user === null) {
        router.push("/auth");
      }
    }, [user]);

    return user && user !== null ? (
      <WrappedComponent {...props} />
    ) : (
      <div>Loading...</div>
    );
  };

  return RequiresAuthentication;
};

export default withAuthentication;
