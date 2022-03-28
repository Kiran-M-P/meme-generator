import Logo from "../assets/troll-face.png";

export default function Headers() {
  return (
    <nav className="navbar">
      <div className="logo-block">
        <img className="logo" src={Logo} alt="logo" />
        <h2 className="logo-text">Meme Generator</h2>
      </div>
    </nav>
  );
}
