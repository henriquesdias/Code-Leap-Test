import LogoPageStyle from "../styles/Logo-Page-Style";
import logo from "../assets/logo.png";

export default function LogoPage() {
  return (
    <LogoPageStyle>
      <img src={logo} alt="logo" />
    </LogoPageStyle>
  );
}
