import { useState, useEffect } from "react";
import NavLink from "../component/NavLink";

export default function NavbarSection() {
  const [position, setPosition] = useState(false);
  const [activeNav, setActiveNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={position ? "scroled-header" : ""}>
      <h1>HABIBAH.</h1>
      <span
        className="menu"
        onClick={() => {
          setActiveNav(true);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </span>

      {activeNav && (
        <div className="overlay" onClick={() => setActiveNav(false)}></div>
      )}

      <nav className={activeNav ? "activeNav" : ""}>
        <ul>
          <li>
            <NavLink to={"home"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"aboutSection"}>Tentang</NavLink>
          </li>
          <li>
            <NavLink to={"processSection"}>Proses</NavLink>
          </li>
          <li>
            <NavLink to={"productSection"}>Produk</NavLink>
          </li>
          <li>
            <NavLink to={"locationSection"} onClick={() => setActiveNav(false)}>
              Lokasi
            </NavLink>
          </li>
          <li>
            <NavLink to={"mitraSection"}>Mitra</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
