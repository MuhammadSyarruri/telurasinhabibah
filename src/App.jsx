export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Process /> */}
      {/* <Location /> */}
      {/* <Mitra /> */}
    </>
  );
}

function Navbar() {
  return (
    <header>
      <h1>HABIBAH.</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Tentang</li>
          <li>Proses</li>
          <li>Lokasi</li>
          <li>Mitra</li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h2>Telur Asin Premium, Lezat & Bergizi</h2>
        <p>
          Dipercaya oleh puluhan mitra kuliner untuk menghadirkan cita rasa
          autentik berkualitas.
        </p>
        <button>Pesan Sekarang</button>
      </div>
      <img src="/img/heroimg.png" alt="telur asin" />
    </section>
  );
}
