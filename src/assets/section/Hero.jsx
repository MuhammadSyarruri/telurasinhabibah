import OrderBtn from "../component/OrderBtn";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-text">
        <h2>Telur Asin Premium, Lezat & Bergizi</h2>
        <p>
          Dipercaya oleh puluhan mitra kuliner untuk menghadirkan cita rasa
          autentik berkualitas.
        </p>
        <OrderBtn />
      </div>
      <img src="/img/heroimg.png" alt="telur asin" />
    </section>
  );
}
