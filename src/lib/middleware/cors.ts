import cors from "cors";

const initCorsMiddleware = () => {
  const corsOptions = {
    origin: "http://localhost:8080",
  };

  return cors(corsOptions);
};

export { initCorsMiddleware };
