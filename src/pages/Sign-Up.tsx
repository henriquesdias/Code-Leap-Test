import SignUpStyle from "../styles/Sign-Up-Style";

export default function SignUp() {
  return (
    <SignUpStyle>
      <div>
        <h1>Welcome to CodeLeap network!</h1>
        <span>Please enter your username</span>
        <input type="text" placeholder="John doe" />
        <div>
          <button>ENTER</button>
        </div>
      </div>
    </SignUpStyle>
  );
}
