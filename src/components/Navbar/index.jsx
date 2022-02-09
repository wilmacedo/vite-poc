import "./styles.css";

const Navbar = () => {
  const links = ["Features", "Solutions", "Resources", "Dates"];

  return (
    <nav className="navbar-container">
      <div className="navbar-links">
        <div className="navbar-logo">AS</div>

        {links.map((link, index) => (
          <div className="navbar-item" key={index}>
            {link}
          </div>
        ))}
      </div>
      <div className="navbar-links">
        <div className="navbar-button-white">Log-in</div>
        <div className="navbar-button-black">Sign up</div>
      </div>
    </nav>
  );
};

export default Navbar;
