import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <div className="navItem">
        <a href="/">Home</a>
      </div>
      <div className="navItem">
        <a href="/Page2">Page2</a>
      </div>
      <div className="navItem">
        <a href="/Page3">Page3</a>
      </div>
    </nav>
  );
}

export default NavBar;
