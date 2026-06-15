import { useState, useEffect } from "react";

import { DATA_URL, DATA_POINT_LIMITS } from "./constants";

export function usePlotterData() {
  const [plotterPoints, setPlotterPoints] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchPlotterData();
  }, []);

  const fetchPlotterData = async () => {
    try {
      setIsLoading(true);

      setLoadError(null);

      const response = await fetch(DATA_URL);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const jsonData = await response.json();

      /**
       * Hard safety limit.
       */
      const limitedData = Array.isArray(jsonData)
        ? jsonData.slice(0, DATA_POINT_LIMITS.max)
        : [];

      setPlotterPoints(limitedData);
    } catch (fetchError) {
      setLoadError(fetchError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    plotterPoints,
    isLoading,
    loadError,
  };
}
