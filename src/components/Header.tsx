import logo from "../assets/logo.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo-name">
        <img src={logo} alt="logo" />
        <h1>Creator Vitae</h1>
      </div>
    </header>
  );
}
