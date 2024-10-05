import { Link } from "react-router-dom";

function Header(props) {
  return (
    <section>
      <h1>Thomas Stemler</h1>
      <nav>
        <ul>
          {props.pages.map((page) => (
            <li>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Header;
