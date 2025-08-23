import NavLink from "../component/NavLink";

export default function FooterSection() {
  return (
    <footer>
      <div className="kontak">
        <p>
          Kontak Saya:
          <span>
            <i className="fa-brands fa-whatsapp"></i>
          </span>
          0812-7248-4363
        </p>
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <NavLink to={"home"}>Kembali ke atas</NavLink>
        </button>
      </div>
      <div className="copyright">
        Copyright &copy;2025; Designed by Muhammad Syarruri
      </div>
    </footer>
  );
}
