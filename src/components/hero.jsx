const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Welcome 👋</h1>
        <p>
          Click
          <a href="https://films.anbtech.xyz/">
            <b> here </b>
          </a>
          for films.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/arenman7"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="scroll_down">
        <p>but wait! there's more! ⤵</p>
      </div>
    </div>
  );
};

export default Hero;
