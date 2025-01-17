import { gql, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";

import { setAuth } from "../../../store/auth.store";
import { setUser } from "../../../store/redux.store";

const VerifyTokenDocument = gql`
  query VerifyToken {
    authMe {
      email
      userName
    }
  }
`;

export const useAuthenticate = () => {
  const dispatch = useDispatch();

  useQuery(VerifyTokenDocument, {
    onCompleted(data) {
      console.log(data);
      if (data.data.verifyToken !== null) {
        const user = data.data.authMe;
        dispatch(setAuth(true));
        dispatch(setUser({ email: user.email, userName: user.userName }));
      }
    },
  });

  return;
};
