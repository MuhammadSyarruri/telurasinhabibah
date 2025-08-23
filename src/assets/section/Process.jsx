import { useState, useEffect } from "react";

export default function ProcessSection() {
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
    setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="process-section">
      <h2 className="section-title" id="processSection">
        Proses Pembuatan
      </h2>

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
