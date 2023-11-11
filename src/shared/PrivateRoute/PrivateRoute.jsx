import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const PrivatRoute = ({children}) => {
    const navigate = useNavigate();
const token = localStorage.getItem("token");

useEffect(() => {
    if(token === null) {
        // navigate("/signup");
    }
    
})
  return children;
};

export default PrivatRoute;
