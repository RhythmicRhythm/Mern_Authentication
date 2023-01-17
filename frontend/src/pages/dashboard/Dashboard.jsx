import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");

  return (
    <div>
    
      welcome
    </div>
  );
};

export default Dashboard;