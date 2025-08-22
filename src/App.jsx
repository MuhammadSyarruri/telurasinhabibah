import { useState, useEffect } from "react";
import mitraList from "./assets/data-mitra";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Product />
      <Location />
      <Mitra />
    </>
  );
}

function Navbar() {
  const [position, setPosition] = useState(false);

  addEventListener("scroll", () => {
    let currentPosition = window.scrollY;
    if (currentPosition >= 50) {
      setPosition(true);
    } else setPosition(false);
  });

  return (
    <header className={position ? "scroled-header" : ""}>
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

function Process() {
  const steps = [
    {
      title: "SOURCING",
      text: "Kami memulai dengan memilih telur bebek terbaik dari peternakan lokal yang bebas dan alami. Bebek yang dipelihara dalam lingkungan sehat dan alami, memastikan telur yang dihasilkan berkualitas tinggi.",
    },
    {
      title: "PERSIAPAN",
      text: "Setiap telur dibersihkan dan diperiksa dengan hati-hati sebelum direndam dalam larutan garam dan serbuk batu bata. Proses pengawetan tradisional ini adalah kunci untuk mengembangkan rasa gurih yang kaya dari telur asin kami.",
    },
    {
      title: "PENGAWETAN",
      text: "Telur dibiarkan mengawet selama periode yang tepat, memungkinkan garam meresap dan meningkatkan rasa sambil mempertahankan tekstur yang sempurna.",
    },
    {
      title: "KONTROL KUALITAS",
      text: "Setelah pengawetan, setiap telur menjalani pemeriksaan kualitas menyeluruh. Hanya telur terbaik yang masuk ke proses pengukusan.",
    },
    {
      title: "PENGUKUSAN",
      text: "Sebagai tahap akhir, telur dikukus selama 3 jam untuk menghasilkan telur asin yang siap dinikmati.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="process-section">
      <h2 className="section-title">Proses Pembuatan</h2>

      <div className="slider">
        <button onClick={prevSlide} className="nav-btn">
          ‹
        </button>
        <div className="slide">
          <h3>{steps[current].title}</h3>
          <p>{steps[current].text}</p>
        </div>
        <button onClick={nextSlide} className="nav-btn">
          ›
        </button>
      </div>

      <div className="dots">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="product-section">
      <h2 className="section-title">Produk</h2>
      <div className="product">
        <img src="/img/display1.jpeg" alt="telur asin" />
        <img src="/img/display2.jpg" alt="telur asin" />
        <img src="/img/display3.jpeg" alt="telur asin" />
      </div>
      <p className="price">Harga: Rp3.500 / butir</p>
      <ul className="note">
        <strong>Catatan:</strong>
        <li>Minimal 3 butir untuk layanan antar.</li>
        <li>Kurang dari 3 butir, ambil di lokasi.</li>
        <li>Luar kota via ekspedisi (ongkir di tanggung pembeli).</li>
        <li>telur asin di stok ulang setiap hari selasa dan jum'at.</li>
      </ul>
    </section>
  );
}

function Location() {
  return (
    <section className="location-section">
      <h2 className="section-title">Lokasi</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.8208263766476!2d104.7512874442546!3d-3.0224045182233388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b9d3d58a5b32b%3A0xae3c4fdcd159deea!2sTelur%20Asin%20Habibah!5e0!3m2!1sid!2sid!4v1755833178185!5m2!1sid!2sid"
        className="map"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

function Mitra() {
  return (
    <section className="mitra-section">
      <h2 className="section-title">Mitra</h2>
      <div className="mitra-container">
        {mitraList.map((mitra, index) => {
          return (
            <div key={index}>
              <p>{mitra.name}</p>
              <p>{mitra.location}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
