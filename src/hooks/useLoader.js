import { useState, useCallback } from "react";

export const useLoader = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState);
  const [loadingMessage, setLoadingMessage] = useState("Загрузка...");

  const startLoading = useCallback((message = "Загрузка...") => {
    setLoadingMessage(message);
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const withLoader = useCallback(
    async (asyncFunction, message = "Загрузка...") => {
      try {
        startLoading(message);
        const result = await asyncFunction();
        return result;
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading]
  );

  return {
    isLoading,
    loadingMessage,
    startLoading,
    stopLoading,
    withLoader,
  };
};
