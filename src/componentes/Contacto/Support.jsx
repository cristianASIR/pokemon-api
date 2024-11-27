import React from "react";
import { useParams, Outlet } from "react-router-dom";

const Support = () => {
  // const { username } = useParams();


  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src="/public/img/Support.jpg"
        style={{ borderRadius: "50%", width: "250px", height: "250px" }}
      />
      {/* <h2>{username ? `Hola, ${username}!` : "Usuario no especificado"}</h2> */}
      <Outlet />
    </div>
  );
};

export default Support;
