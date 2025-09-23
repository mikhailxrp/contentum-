// Environment variables utility
// All environment variables must be prefixed with VITE_ to be accessible in the browser

export const env = {
  // API configuration
  API_BASE_TEST_URL:
    import.meta.env.VITE_API_BASE_TEST_URL ||
    "https://testintergation.md-art.ru/webhook-test/",
  API_BASE_URL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://testintergation.md-art.ru/webhook/",

  // Development mode
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  MODE: import.meta.env.MODE,
};

// Helper function to get environment variable with fallback
export const getEnvVar = (key, fallback = "") => {
  return import.meta.env[key] || fallback;
};

// Helper function to check if we're in development mode
export const isDevelopment = () => {
  return import.meta.env.DEV;
};

// Helper function to check if we're in production mode
export const isProduction = () => {
  return import.meta.env.PROD;
};

// Log environment variables in development (without sensitive data)
if (isDevelopment()) {
  // console.log("Environment variables loaded:", {
  //   API_BASE_TEST_URL: env.API_BASE_TEST_URL,
  //   API_BASE_URL: env.API_BASE_URL,
  //   MODE: env.MODE,
  // });
}
