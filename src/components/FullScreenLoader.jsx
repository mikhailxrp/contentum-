import Loader from "./Loader.jsx";

function FullScreenLoader({ message = "Загрузка..." }) {
  return (
    <div className="fullscreen-loader">
      <div className="loader-content">
        <div className="loader-logo">
          <span className="logo-icon">C</span>
        </div>
        <Loader size="large" variant="spinner" />
        <p className="loader-message">{message}</p>
      </div>
    </div>
  );
}

export default FullScreenLoader;
