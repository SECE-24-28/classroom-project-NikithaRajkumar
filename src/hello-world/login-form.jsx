import React from "react";
import { FormStyle } from "./formStyle";
const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>
      <FormStyle>
        <form>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <button>Login</button>
        </form>
      </FormStyle>
    </div>
  );
};
export default LoginForm;
