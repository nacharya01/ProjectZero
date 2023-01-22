import React from "react";
import Login from "./Login";
import { useSelector } from "react-redux";

import Jumbotron from "../components/Jumbotron";
import RoomList from "../components/RoomList";

function Home() {

  const openLogin = useSelector((state) => state.loginReducer);

  return (
    <>
      <div>
        {openLogin.open && <Login />}
        <Jumbotron />
        <RoomList />
      </div>
    </>
  );
}

export default Home;
