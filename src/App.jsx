export default function App() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body {
          margin: 0;
          background: #111;
          color: white;
          font-family: Arial, sans-serif;
        }
        a { color: inherit; text-decoration: none; }

        .topbar {
          height: 38px;
          background: #030303;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 48px;
          font-size: 13px;
          color: #ddd;
        }

      .hero {
  min-height: 100svh;
  width: 100%;
  position: relative;
  background:
    radial-gradient(circle at 70% 20%, rgba(198,154,45,.18), transparent 32%),
    linear-gradient(135deg, #050505 0%, #160c06 55%, #050505 100%);
}

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 42px 70px;
        }

        .logo {
          font-size: 30px;
          letter-spacing: 8px;
          color: #c69a2d;
          font-weight: 300;
        }

        .menu {
          display: flex;
          gap: 42px;
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: bold;
        }

        .hero-center {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          padding: 0 24px;
        }

        h1 {
          font-size: clamp(54px, 9vw, 118px);
          font-family: Georgia, serif;
          margin: 0;
          line-height: .9;
          max-width: 1000px;
        }

        .hero-center p {
          margin-top: 26px;
          max-width: 720px;
          font-size: 21px;
          line-height: 1.6;
          color: #eee;
        }

        .hero-buttons {
          margin-top: 42px;
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn {
          min-width: 210px;
          padding: 17px 28px;
          border: 2px solid white;
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
        }

        .btn.gold {
          background: #c69a2d;
          border-color: #c69a2d;
          color: #111;
        }

        .tiles {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          min-height: 520px;
        }

        .tile {
          position: relative;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 60px 30px;
          overflow: hidden;
        }

        .tile::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.88), rgba(0,0,0,.18));
        }

        .tile h2 {
          position: relative;
          z-index: 2;
          font-size: 30px;
          letter-spacing: 4px;
          text-transform: uppercase;
          text-align: center;
        }

        .info {
          background: #191719;
          display: grid;
          grid-template-columns: 1.1fr 1fr 1fr;
          gap: 60px;
          padding: 90px 9%;
        }

        .info h3 {
          margin: 0 0 24px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 17px;
        }

        .info p {
          color: #ddd;
          line-height: 1.7;
          margin: 0 0 14px;
        }

        .brand-footer {
          color: #c69a2d;
          font-size: 36px;
          letter-spacing: 8px;
          margin-top: 70px;
        }

        footer {
          background: #252326;
          padding: 22px 60px;
          font-size: 11px;
          letter-spacing: 2px;
          color: #ddd;
        }

        @media (max-width: 850px) {
          .topbar { padding: 0 20px; font-size: 11px; }
          .nav { padding: 30px 24px; }
          .menu { display: none; }
          .logo { font-size: 22px; }
          .tiles { grid-template-columns: 1fr; }
          .info { grid-template-columns: 1fr; padding: 70px 7%; }
        }
      `}</style>

      <main>
        <div className="topbar">
          <span>📍 Av. d'Ausiàs March, 18, Valencia</span>
          <span>📞 963 20 13 23</span>
        </div>

        <section className="hero">
          <nav className="nav">
            <div className="logo">JARKLAUS</div>
            <div className="menu">
              <a href="#inicio">BIENVENIDOS</a>
              <a href="#carta">CARTA</a>
              <a href="#reservas">RESERVAS</a>
              <a href="#contacto">CONTACTO</a>
            </div>
          </nav>

          <div className="hero-center">
            <h1>Carne a la brasa en Valencia</h1>
            <p>
              Asador JarKlaus combina brasas, carnes contundentes y terraza en una propuesta directa, sabrosa y sin complicaciones.
            </p>

            <div className="hero-buttons">
              <a className="btn" href="#carta">VER CARTA</a>
              <a className="btn" href="#platos">PLATOS DESTACADOS</a>
              <a className="btn gold" href="tel:963201323">RESERVA TU MESA</a>
            </div>
          </div>
        </section>

        <section className="tiles" id="platos">
          <a className="tile" style={{ backgroundImage: "url('/images/entrecot.png')" }} href="#carta">
            <h2>Carta</h2>
          </a>

          <a className="tile" style={{ backgroundImage: "url('/images/costillas con salsa picante.png')" }} href="#carta">
            <h2>Brasa</h2>
          </a>

          <a className="tile" style={{ backgroundImage: "url('/images/tiramisu.png')" }} href="#carta">
            <h2>Postres</h2>
          </a>
        </section>

        <section className="info" id="contacto">
          <div>
            <div className="brand-footer">JARKLAUS</div>
          </div>

          <div>
            <h3>Visítanos</h3>
            <p>📍 Av. d'Ausiàs March, 18</p>
            <p>Valencia</p>

            <h3 style={{ marginTop: 38 }}>Llámanos</h3>
            <p>📞 963 20 13 23</p>
          </div>

          <div id="reservas">
            <h3>Reservas</h3>
            <a className="btn" href="tel:963201323">RESERVA TU MESA</a>

            <h3 style={{ marginTop: 42 }}>Información</h3>
            <p>Precio medio: 10–20€</p>
            <p>Google: 4.1</p>
            <p>Especialidad: carnes a la brasa, entrecot y terraza.</p>
          </div>
        </section>

        <footer>
          © 2026 ASADOR JARKLAUS · VALENCIA · CARNE A LA BRASA
        </footer>
      </main>
    </>
  );
}