export default function App() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #070706;
          color: #f4eadc;
          font-family: Arial, sans-serif;
        }
        a { color: inherit; text-decoration: none; }

        .hero {
          min-height: 100svh;
          padding: 28px 7% 80px;
          display: flex;
          flex-direction: column;
          background:
            radial-gradient(circle at 80% 20%, rgba(190, 45, 25, .22), transparent 34%),
            radial-gradient(circle at 18% 72%, rgba(214, 158, 70, .16), transparent 32%),
            linear-gradient(135deg, #050505 0%, #120908 55%, #050505 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::after {
          content: "鳥";
          position: absolute;
          right: 7%;
          bottom: 4%;
          font-size: 280px;
          color: rgba(214,158,70,.055);
          font-family: Georgia, serif;
          pointer-events: none;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,.1);
          padding-bottom: 22px;
          position: relative;
          z-index: 2;
        }

        .logo {
          letter-spacing: 6px;
          font-size: 20px;
          font-weight: 900;
          color: #d69e46;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .nav-cta {
          background: #d69e46;
          color: #080706;
          padding: 13px 22px;
          border-radius: 999px;
          font-weight: 900;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 950px;
          margin-top: auto;
          margin-bottom: auto;
        }

        .tag {
          color: #d69e46;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 24px;
        }

        h1 {
          font-family: Georgia, serif;
          font-size: clamp(58px, 9vw, 128px);
          line-height: .88;
          margin: 0;
          letter-spacing: -4px;
        }

        .hero p {
          max-width: 680px;
          color: #d6c7b4;
          font-size: 21px;
          line-height: 1.7;
          margin-top: 30px;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 38px;
        }

        .btn {
          padding: 16px 28px;
          border-radius: 999px;
          font-weight: 900;
          border: 1px solid rgba(255,255,255,.25);
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 1.5px;
        }

        .btn.gold {
          background: #d69e46;
          color: #080706;
          border-color: #d69e46;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,.1);
          position: relative;
          z-index: 2;
        }

        .stat {
          padding: 26px 20px;
          border-right: 1px solid rgba(255,255,255,.1);
        }

        .stat strong {
          display: block;
          font-size: 28px;
          color: #d69e46;
        }

        .stat span {
          color: #b9aa98;
          font-size: 14px;
        }

        section {
          padding: 95px 7%;
        }

        .section-dark {
          background: #0c0a09;
        }

        .section-red {
          background: linear-gradient(135deg, #120706, #060606);
        }

        .kicker {
          color: #d69e46;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        h2 {
          font-family: Georgia, serif;
          font-size: clamp(44px, 6vw, 82px);
          line-height: .95;
          margin: 0;
          letter-spacing: -2px;
        }

        .muted {
          max-width: 760px;
          color: #b9aa98;
          line-height: 1.7;
          font-size: 18px;
          margin-top: 22px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 50px;
        }

        .card {
          min-height: 250px;
          padding: 32px;
          border-radius: 28px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.1);
          transition: .25s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          border-color: rgba(214,158,70,.6);
        }

        .card h3 {
          font-family: Georgia, serif;
          font-size: 30px;
          margin: 0 0 14px;
        }

        .card p {
          color: #cfc0ae;
          line-height: 1.65;
          margin: 0;
        }

        .menu-list {
          margin-top: 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .menu-item {
          display: flex;
          justify-content: space-between;
          gap: 22px;
          padding: 22px 0;
          border-bottom: 1px solid rgba(255,255,255,.13);
          color: #eee1d0;
          font-size: 20px;
        }

        .reviews {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 50px;
        }

        .review {
          padding: 30px;
          border-radius: 26px;
          background: #12100f;
          border: 1px solid rgba(255,255,255,.1);
        }

        .stars {
          color: #d69e46;
          margin-bottom: 18px;
          letter-spacing: 3px;
        }

        .review p {
          color: #e6d8c7;
          line-height: 1.65;
          font-size: 18px;
        }

        .location-box {
          margin-top: 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .info {
          padding: 34px;
          border-radius: 28px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
        }

        .info p {
          color: #d6c7b4;
          font-size: 19px;
          line-height: 1.7;
          margin: 0 0 15px;
        }

        footer {
          padding: 35px 7%;
          border-top: 1px solid rgba(255,255,255,.1);
          color: #8f8170;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-cta { padding: 11px 16px; font-size: 13px; }
          .logo { font-size: 16px; letter-spacing: 4px; }

          .hero {
            padding: 24px 5% 60px;
          }

          h1 {
            letter-spacing: -2px;
          }

          .stats,
          .grid,
          .reviews,
          .location-box,
          .menu-list {
            grid-template-columns: 1fr;
          }

          .stat {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,.1);
          }
        }
      `}</style>

      <main>
        <section className="hero">
          <nav>
            <div className="logo">Tori Fuego</div>
            <div className="nav-links">
              <a href="#carta">Carta</a>
              <a href="#resenas">Reseñas</a>
              <a href="#ubicacion">Ubicación</a>
            </div>
            <a className="nav-cta" href="tel:666299882">Reservar</a>
          </nav>

          <div className="hero-content">
            <div className="tag">Restaurante japonés auténtico · Valencia</div>
            <h1>Japón, fuego y sabor en Ruzafa.</h1>
            <p>
              Ramen elaborado con caldo propio, gyozas, takoyaki, sushi, yakisoba y platos japoneses
              en un ambiente cuidado para cenar bien sin gastar una locura.
            </p>

            <div className="buttons">
              <a className="btn gold" href="tel:666299882">Reservar mesa</a>
              <a className="btn" href="#carta">Ver carta</a>
              <a className="btn" href="https://www.google.com/maps/search/?api=1&query=Carrer%20de%20Sueca%2046%20Valencia" target="_blank" rel="noreferrer">
                Cómo llegar
              </a>
            </div>
          </div>

          <div className="stats">
            <div className="stat"><strong>4,8</strong><span>Nota en Google</span></div>
            <div className="stat"><strong>1.112</strong><span>Reseñas</span></div>
            <div className="stat"><strong>10–20€</strong><span>Precio medio</span></div>
            <div className="stat"><strong>20:00</strong><span>Apertura habitual</span></div>
          </div>
        </section>

        <section id="carta" className="section-dark">
          <div className="kicker">Carta destacada</div>
          <h2>Ramen, sushi y pequeños bocados japoneses.</h2>
          <p className="muted">
            Una demo enfocada en lo que la gente ya busca de Tori Fuego: ramen, variedad,
            buena atención y una experiencia japonesa auténtica.
          </p>

          <div className="grid">
            <article className="card">
              <h3>Tonkotsu Ramen</h3>
              <p>Uno de los platos populares. Caldo profundo, fideos y carne en su punto.</p>
            </article>

            <article className="card">
              <h3>Takoyaki</h3>
              <p>Bocado japonés clásico, perfecto para compartir antes del ramen.</p>
            </article>

            <article className="card">
              <h3>Gyozas variadas</h3>
              <p>Opciones como onion gyoza o pato gyoza para empezar la mesa con sabor.</p>
            </article>
          </div>

          <div className="menu-list">
            <div className="menu-item"><span>Yakisoba</span><span>人気</span></div>
            <div className="menu-item"><span>Sushi</span><span>鮨</span></div>
            <div className="menu-item"><span>Curry japonés</span><span>カレー</span></div>
            <div className="menu-item"><span>Nigiri de tempura</span><span>おすすめ</span></div>
          </div>
        </section>

        <section id="resenas" className="section-red">
          <div className="kicker">Reseñas</div>
          <h2>Más de mil clientes ya han hablado.</h2>
          <p className="muted">
            La prueba social es fuerte: 4,8 sobre 5 y más de 1.100 reseñas.
          </p>

          <div className="reviews">
            <article className="review">
              <div className="stars">★★★★★</div>
              <p>“Ramen buenísimo, la ensalada variada brutal, el curry muy bueno, cero picante.”</p>
            </article>

            <article className="review">
              <div className="stars">★★★★★</div>
              <p>“Toda la comida estaba buenísima, se notaba la calidad de la preparación.”</p>
            </article>

            <article className="review">
              <div className="stars">★★★★★</div>
              <p>“El sushi muy rico y los noodles también. Volveremos seguro.”</p>
            </article>
          </div>
        </section>

        <section id="ubicacion" className="section-dark">
          <div className="kicker">Ubicación y reservas</div>
          <h2>En Carrer de Sueca, 46.</h2>
          <p className="muted">
            En L’Eixample, Valencia. Comer allí, para llevar y entrega sin contacto.
          </p>

          <div className="location-box">
            <div className="info">
              <p>📍 Carrer de Sueca, 46, L'Eixample, 46006 València</p>
              <p>📞 666 29 98 82</p>
              <p>💶 Precio medio: 10–20€</p>
              <p>⭐ Google: 4,8 · 1.112 reseñas</p>
            </div>

            <div className="info">
              <p>Servicios disponibles:</p>
              <p>✓ Comer allí</p>
              <p>✓ Para llevar</p>
              <p>✓ Entrega sin contacto</p>

              <div className="buttons">
                <a className="btn gold" href="tel:666299882">Llamar</a>
                <a className="btn" href="https://www.google.com/maps/search/?api=1&query=Carrer%20de%20Sueca%2046%20Valencia" target="_blank" rel="noreferrer">
                  Abrir mapa
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <strong>Tori Fuego</strong>
          <span>Restaurante japonés auténtico · Valencia · Demo web</span>
        </footer>
      </main>
    </>
  );
}