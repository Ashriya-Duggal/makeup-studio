import React, { useState } from "react";
import Login from "../login/Login.jsx";
import Reg from "./Reg.jsx";
function Register() {
  const [reg, setReg] = useState(false);

  return (
    <div>
      {reg ? (
        <Reg
          finalCall={(f) => {
            setReg(f);
          }}
        />
      ) : (
        <Login
          finalCall={(t) => {
            setReg(t);
          }}
        />
      )}
    </div>
  );
}
export default Register;
