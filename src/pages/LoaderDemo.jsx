import { useState } from "react";
import Loader from "../components/Loader.jsx";
import FullScreenLoader from "../components/FullScreenLoader.jsx";

function LoaderDemo() {
  const [showFullScreen, setShowFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setShowFullScreen(true);
    setTimeout(() => setShowFullScreen(false), 3000);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Демо лоадеров</h1>

      <div style={{ marginBottom: "3rem" }}>
        <h2>Варианты лоадеров</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "1rem",
              border: "1px solid var(--light-cream)",
              borderRadius: "8px",
            }}
          >
            <h3>Dots (по умолчанию)</h3>
            <Loader variant="dots" size="medium" />
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "1rem",
              border: "1px solid var(--light-cream)",
              borderRadius: "8px",
            }}
          >
            <h3>Spinner</h3>
            <Loader variant="spinner" size="medium" />
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "1rem",
              border: "1px solid var(--light-cream)",
              borderRadius: "8px",
            }}
          >
            <h3>Pulse</h3>
            <Loader variant="pulse" size="medium" />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "1rem",
              border: "1px solid var(--light-cream)",
              borderRadius: "8px",
            }}
          >
            <h4>Small</h4>
            <Loader variant="dots" size="small" />
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "1rem",
              border: "1px solid var(--light-cream)",
              borderRadius: "8px",
            }}
          >
            <h4>Medium</h4>
            <Loader variant="dots" size="medium" />
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "1rem",
              border: "1px solid var(--light-cream)",
              borderRadius: "8px",
            }}
          >
            <h4>Large</h4>
            <Loader variant="dots" size="large" />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h2>Полноэкранный лоадер</h2>
        <button onClick={toggleFullScreen} className="btn btn-primary">
          Показать полноэкранный лоадер (3 сек)
        </button>
      </div>

      <div>
        <h2>Использование в кнопке</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button className="btn btn-primary" disabled>
            <Loader size="small" variant="dots" />
          </button>

          <button className="btn btn-secondary" disabled>
            <Loader size="small" variant="spinner" />
          </button>

          <button className="btn btn-outline" disabled>
            <Loader size="small" variant="pulse" />
          </button>
        </div>
      </div>

      {showFullScreen && <FullScreenLoader message="Загружаем данные..." />}
    </div>
  );
}

export default LoaderDemo;
