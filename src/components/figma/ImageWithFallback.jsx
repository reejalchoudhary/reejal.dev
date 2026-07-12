import { useState } from "react";

export function ImageWithFallback({ src, alt, className }) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? "https://via.placeholder.com/400x300?text=Image+Error" : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}