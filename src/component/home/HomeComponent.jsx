import React from "react";
import "./HomeComponent.css";

function HomeComponent() {
  return (
    <div className="text-center">
      <span className="helper"></span>
      <img height={500} width={900} className="rounded" src={require("../img/workplace.jpg")} />
    </div>
  );
}

export default HomeComponent;
