export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
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

function About() {
  return (
    <section className="about-section">
      <h2 className="section-title">Tentang Kami</h2>
      <p>
        Di sini, kami menghadirkan telur asin terbaik untuk Anda. Perjalanan
        kami dimulai pada tahun 2015 dengan misi sederhana yaitu memproduksi
        telur asin berkualitas tinggi dan lezat menggunakan metode tradisional
        yang dikombinasikan dengan standar kebersihan dan kontrol kualitas
        modern.
      </p>
      <p>
        Berlokasi di Palembang, Telur Asin Habibah didirikan oleh Tunai Jaya,
        yang memiliki apresiasi mendalam terhadap seni membuat telur asin.
        Terinspirasi oleh resep kuno yang diwariskan turun-temurun, kami memulai
        pencarian untuk menciptakan telur asin yang sempurna, menyeimbangkan
        rasa, tekstur, dan nilai gizi.
      </p>
    </section>
  );
}
