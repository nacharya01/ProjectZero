import React from "react";
import Login from "./Login";
import SignUp from './SignUp'
import { useSelector } from "react-redux";

import Jumbotron from "../components/Jumbotron";
import RoomList from "../components/RoomList";
import TabBar from "../components/TabBar";

function Home() {

  const openLogin = useSelector((state) => state.loginReducer);
  const openSignUp = useSelector((state) => state.signUpReducer);

  return (
    <>
      <div>
        {openLogin.open && <Login />}
        {openSignUp.open && <SignUp />}
        <Jumbotron />
        <TabBar />
        <RoomList />
      </div>
    </>
  );
}

export default Home;
