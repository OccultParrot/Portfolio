import { Link } from "react-router-dom";

function Header(props) {
  return (
    <section>
      <h1>Thomas Stemler</h1>
      <nav>
        <ul>
          {props.navItems.map((item) => (
            <li>
              <Link to="/">{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Header;
