import { useState, useEffect } from "react";
import { DATA_URL } from "./constants";

export function usePlotterData() {
  const [plotterPoints, setPlotterPoints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    fetch(DATA_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setPlotterPoints(jsonData);
        setIsLoading(false);
      })
      .catch((fetchError) => {
        setLoadError(fetchError.message);
        setIsLoading(false);
      });
  }, []);

  return { plotterPoints, isLoading, loadError };
}
