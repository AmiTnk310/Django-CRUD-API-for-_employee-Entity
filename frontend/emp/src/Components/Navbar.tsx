import React from "react";
import NavMenu from "./NavMenu";


export default function NavbarMenu() {
  return (
    <div
      className="pt-3 w-100"
      style={{
        position: "sticky",
        top: 0,
        zIndex: "1",
        boxShadow: "0 0px 20px 4px rgb(228, 224, 224)",
        backgroundColor: "rgb(248,249,250)",
      }}
    >
      <div>
        <h1 style={{ color: "rgb(45,75,55)" }}>
          <b>Employee CRUD Project</b>
        </h1>
      </div>
      <NavMenu />
    </div>
  );
}
