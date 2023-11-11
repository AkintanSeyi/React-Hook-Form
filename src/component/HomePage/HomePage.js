import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";

const HomePage = () => {
  /*
   npm install react-confetti
 <Confetti />

*/

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",

        padding: "50px",
      }}
    >
      <Confetti />
      <div
        style={{
          fontSize: "60px",
          width: "100%",
          padding: "20px",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",

          justifyContent: "center",
        }}
      >
        <p style={{ textTransform: "capitalize" }}>
          congratulation on learning about react-hook-form
        </p>{" "}
      </div>
    </div>
  );
};

export default HomePage;
