import axios from "axios";

// const baseUrl = "http://localhost:3000";
const baseUrl = "http://192.168.43.186:3000";

const UserLogin = inputLogin => {
  return dispatch => {
    dispatch({
      type: "USERLOGIN",
      payload: { user: inputLogin }
    });
  };
};

const profileUpdate = updatedUserData => {
  return dispatch => {
    dispatch({
      type: "EDITPROFILE",
      payload: { 
        updatedUserData
       }
    });
  };
};

export { UserLogin, profileUpdate };
