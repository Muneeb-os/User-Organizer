import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FuncationUpdateUser, FuncationUserObj } from "../Redux/Action";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [role, setRole] = useState("Admin");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();
  const userobj = useSelector((state) => state.user.userobj);

  const handlesubmit = () => {
    const userobj = { id, name, role, email, phone };
    dispatch(FuncationUpdateUser(userobj, id));
    navigate("/user");
  };

  useEffect(() => {
    dispatch(FuncationUserObj(code));
  }, []);

  useEffect(() => {
    if (userobj) {
      setId(userobj.id);
      setName(userobj.name);
      setRole(userobj.role);
      setEmail(userobj.email);
      setPhone(userobj.phone);
    }
  }, [userobj]);
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add User</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Id</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled={"disabled"}
                    value={id || ""}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Role</label>
                  <select
                    value={role || ""}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-control"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Staff">Staff</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    value={phone || ""}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary mx-2" type="submit">
              Submit
            </button>
            <Link to={"/user"} className={"btn btn-danger mx-2"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
