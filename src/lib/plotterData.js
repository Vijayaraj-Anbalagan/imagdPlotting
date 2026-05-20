import { useState, useEffect } from "react";
import { DATA_URL } from "./constants";

export function usePlotterData() {
  const [plotterPoints, setPlotterPoints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
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
      setPlotterPoints(jsonData);
    } catch (fetchError) {
      setLoadError(fetchError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { plotterPoints, isLoading, loadError };
}
