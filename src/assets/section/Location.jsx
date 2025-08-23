export default function LocationSection() {
  return (
    <section className="location-section">
      <h2 className="section-title" id="locationSection">
        Lokasi
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.8208263766476!2d104.7512874442546!3d-3.0224045182233388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b9d3d58a5b32b%3A0xae3c4fdcd159deea!2sTelur%20Asin%20Habibah!5e0!3m2!1sid!2sid!4v1755833178185!5m2!1sid!2sid"
        className="map"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
