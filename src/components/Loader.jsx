function Loader({ size = "medium", variant = "dots" }) {
  const sizeClasses = {
    small: "loader-small",
    medium: "loader-medium",
    large: "loader-large",
  };

  if (variant === "spinner") {
    return (
      <div className={`loader-spinner ${sizeClasses[size]}`}>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={`loader-pulse ${sizeClasses[size]}`}>
        <div className="pulse-dot"></div>
        <div className="pulse-dot"></div>
        <div className="pulse-dot"></div>
      </div>
    );
  }

  // Default dots variant
  return (
    <div className={`loader-dots ${sizeClasses[size]}`}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}

export default Loader;
