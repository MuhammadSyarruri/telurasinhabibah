import { Link } from "react-scroll";

export default function NavLink({ to, children }) {
  return (
    <Link to={to} smooth={true} duration={500} offset={-200}>
      {children}
    </Link>
  );
}
