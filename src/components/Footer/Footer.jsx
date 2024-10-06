import "./Footer.css";

import GithubLogo from "../../assets/icons8-github.svg";
import LinkedInLogo from "../../assets/icons8-linked-in.svg";
import DevLogo from "../../assets/dev-icon.svg";

function Footer() {
  return (
    <section className="footer">
      <a>
        <img src={GithubLogo} />
      </a>
      <a>
        <img src={LinkedInLogo} />
      </a>
      <a>
        <img src={DevLogo} />
      </a>
    </section>
  );
}

export default Footer;
