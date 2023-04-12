import { Dispatch } from "react";

import SignUpStyle from "../styles/Sign-Up-Style";
import useForm from "../hooks/useForm";
import PrincipalButton from "../components/Principal-Button";
import MainScreen from "./Main-Screen";

interface ISignUp {
  setPage: Dispatch<JSX.Element>;
}

export default function SignUp({ setPage }: ISignUp) {
  const { formData, handleInputChange, handleSubmit } = useForm(
    {
      name: "",
    },
    saveUsername
  );
  function saveUsername() {
    localStorage.setItem("username", formData.name);
    setPage(<MainScreen />);
  }

  return (
    <SignUpStyle>
      <form onSubmit={handleSubmit}>
        <h1>Welcome to CodeLeap network!</h1>
        <span>Please enter your username</span>
        <input
          type="text"
          placeholder="John doe"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <div>
          <PrincipalButton isDisabled={formData.name.length === 0}>
            ENTER
          </PrincipalButton>
        </div>
      </form>
    </SignUpStyle>
  );
}
