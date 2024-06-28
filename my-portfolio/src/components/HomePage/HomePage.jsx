import { useState } from "react";

import Text from "../text";
import Card from "../cards/Card";

const HomePage = () => {
  const initialTexts = [
    // "Card 1",
    // "Card 2",
    // "Card 3",
    // "Card 4",
    // "Card 5",
    // "Card 6",
    "  Portfolio page",
    "Projects",
    "About Me",
    "Hello",
  ];
  const initialStatus = new Array(initialTexts.length).fill("down");

  const [texts, setTexts] = useState(initialTexts);
  const [status, setStatus] = useState(initialStatus);

  const resetCards = () => {
    setTexts(initialTexts);
    setStatus(initialStatus);
  };

  const handleCardClick = (index) => {
    setStatus((prevStatus) =>
      prevStatus.map((s, i) => {
        if (i === index) {
          if (s === "down") return "opened";
        }
        return s;
      })
    );
  };

  const handleCardPlace = (index) => {
    setStatus((prevStatus) =>
      prevStatus.map((s, i) => {
        if (i === index) {
          return "is-removed";
        }
        return s;
      })
    );
  };

  const cards = texts.map((text, i) => (
    <Card
      key={i}
      index={i}
      text={text}
      status={status[i]}
      onClick={handleCardClick}
      onPlace={handleCardPlace}
    />
  ));

  return (
    <>
      <div className="App">
        <main>
          <section className="hero-section">
            <video autoPlay loop muted className="background-video">
              <source src="/videos/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-content">
              <div className="code-line">
                <span>System</span>
                <span style={{ color: "white" }}>
                  .<span style={{ color: "#e06c75" }}>out</span>.
                </span>
                <span style={{ color: "#61afef" }}>println</span>
                <span></span>
                <div className="string">
                  <span className="greeting en">"Hello World!"</span>
                  <span className="greeting es">"¡Hola Mundo!"</span>
                  <span className="greeting de">"Hallo Welt!"</span>
                  <span className="greeting it">"Ciao Mondo!"</span>
                </div>
              </div>
            </div>
          </section>
          <div
            className="scroll-down"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            Scroll Down
          </div>
        </main>
      </div>
      <Text />
      <div className="app-container">
        <button className="reset-btn" onClick={resetCards}>
          Reset Cards
        </button>
        <div className="cards-container">
          <div className="cards">{cards}</div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
