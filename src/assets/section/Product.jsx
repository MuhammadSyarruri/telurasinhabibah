import OrderBtn from "../component/OrderBtn";

export default function ProductSection() {
  return (
    <section className="product-section">
      <h2 className="section-title" id="productSection">
        Produk
      </h2>
      <div className="product">
        <img src="img/display1.jpeg" alt="telur asin" />
        <img src="img/display2.jpg" alt="telur asin" />
        <img src="img/display3.jpeg" alt="telur asin" />
      </div>
      <p className="price">Harga: Rp3.500 / butir</p>
      <ul className="note">
        <strong>Catatan:</strong>
        <li>Minimal 3 butir untuk layanan antar.</li>
        <li>Kurang dari 3 butir, ambil di lokasi.</li>
        <li>Luar kota via ekspedisi (ongkir di tanggung pembeli).</li>
        <li>telur asin di stok ulang setiap hari selasa dan jum'at.</li>
      </ul>
      <OrderBtn />
    </section>
  );
}
