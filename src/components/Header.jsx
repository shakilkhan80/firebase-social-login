import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
    </div>
  );
};

export default Header;
