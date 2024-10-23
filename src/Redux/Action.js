import { type } from "@testing-library/user-event/dist/type";
import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";
import axios from "axios";
import { toast } from "react-toastify";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};

export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
export const addUser = () => {
  return {
    type: ADD_USER,
  };
};
export const upDateUser = () => {
  return {
    type: UPDATE_USER,
  };
};
export const getUserObj = (data) => {
  return {
    type: GET_USER_OBJ,
    payload: data,
  };
};
export const FatchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequest());

    axios
      .get("http://localhost:8000/user")
      .then((res) => {
        const userlist = res.data;
        dispatch(getUserList(userlist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const RemoveUser = (id) => {
  return (dispatch) => {
    dispatch(makeRequest());

    axios
      .delete(`http://localhost:8000/user/${id}`)
      .then((res) => {
        dispatch(deleteUser(id));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const FuncationAddUser = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .post("http://localhost:8000/user", data)
      .then((res) => {
        dispatch(addUser());
        toast.success("User Added Successfully!");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const FuncationUpdateUser = (data, id) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .put("http://localhost:8000/user/" + id, data)
      .then((res) => {
        dispatch(upDateUser());
        toast.success("User Updated Successfully!");
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const FuncationUserObj = (id) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .get("http://localhost:8000/user/" + id)
      .then((res) => {
        const userlist = res.data;
        dispatch(getUserObj(userlist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};
