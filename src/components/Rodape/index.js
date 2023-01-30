import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="/public/index.html">
            <img src="/img/fb.png" alt="logo facebook"></img>
          </a>
          <a href="/public/index.html">
            <img src="/img/ig.png" alt="logo instagram"></img>
          </a>
          <a href="/public/index.html">
            <img src="/img/tw.png" alt="logo twitter"></img>
          </a>
        </li>
      </ul>
      <section className="logoContainer">
        <img src="/img/logo.png" alt="logo organo"></img>
      </section>
      <section className="paragrafo">
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
