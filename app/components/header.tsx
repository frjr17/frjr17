import Link from "next/link";
import { headerNavs } from "../lib/data";

export default function Header() {
  return (
    <header className="s-header">
      <div className="row s-header__inner">
        <div className="s-header__block">
          <div className="s-header__logo">
            <Link className="logo castoro" href="#">
              Adrien
            </Link>
          </div>

          <a className="s-header__menu-toggle" href="#0">
            <span>Menu</span>
          </a>
        </div>

        <nav className="s-header__nav">
          <ul className="s-header__menu-links">
            {headerNavs.map((nav, i) => {
              return (
                <li key={i} className={i === 0 ? "current" : ""}>
                  <Link className="smoothscroll" href={nav.href}>
                    {nav.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
