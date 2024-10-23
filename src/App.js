import "./App.css";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Userlisting from "./Component/Userlisting";
import Adduser from "./Component/Adduser";
import Update from "./Component/Update";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <Link to={"/user"}>User Organizer</Link>
          </div>
          <Routes>
            <Route path="/user" element={<Userlisting />} />
            <Route path="/user/add" element={<Adduser />} />
            <Route path="/user/edit/:code" element={<Update />} />
            <Route path="/" element={<Navigate to="/user" />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer className={"toast-position"} position="bottom-right" />
      </div>
    </Provider>
  );
}

export default App;
