import mitraList from "../data/data-mitra";

export default function MitraSection() {
  return (
    <section className="mitra-section">
      <h2 className="section-title" id="mitraSection">
        Mitra
      </h2>
      <p>
        Saat ini kami sudah bekerja sama dengan beberapa rumah makan yang ada di
        wilayah Palembang untuk menyajikan telur asin kami kepada para
        pelanggan, Berikut nama dan lokasi.
      </p>
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
