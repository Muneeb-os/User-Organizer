import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FatchUserList, RemoveUser } from "../Redux/Action";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Userlisting = (props) => {
  useEffect(() => {
    props.loaduser();
  }, []);
  const handldelete = (id) => {
    if (window.confirm("Do You Want To Remove Record?")) {
      props.removeuser(id);
      props.loaduser();
      toast.success("User Removed Successfully!");
    }
  };
  return props.user.loading ? (
    <div>
      <h2>Loading...</h2>
    </div>
  ) : props.user.errmessage ? (
    <div>
      <h2>{props.user.errmessage}</h2>
    </div>
  ) : (
    <div>
      <div className="card">
        <div className="card-header">
          <Link to={"/user/add"} className="btn btn-success">
            Add User [+]
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <td style={{ backgroundColor: "blue", color: "white" }}>
                  Code
                </td>
                <td style={{ backgroundColor: "blue", color: "white" }}>
                  Name
                </td>
                <td style={{ backgroundColor: "blue", color: "white" }}>
                  Role
                </td>
                <td style={{ backgroundColor: "blue", color: "white" }}>
                  Email
                </td>
                <td style={{ backgroundColor: "blue", color: "white" }}>
                  Phone
                </td>
                <td style={{ backgroundColor: "blue", color: "white" }}>
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              {props.user.userlist.length > 0 ? (
                props.user.userlist.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>

                    <td>
                      <Link
                        to={`/user/edit/${user.id}`}
                        className="btn btn-primary mx-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => {
                          handldelete(user.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FatchUserList()),
    removeuser: (id) => dispatch(RemoveUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);
