import { useState, useCallback } from "react";

export const INTERACTION_MODES = {
  ZOOM: "zoom",
  PAN: "pan",
};

export function useInteractionMode(initialMode = INTERACTION_MODES.ZOOM) {
  const [interactionMode, setInteractionMode] = useState(initialMode);

  const isZoomMode = interactionMode === INTERACTION_MODES.ZOOM;
  const isPanMode = interactionMode === INTERACTION_MODES.PAN;

  const activateZoomMode = useCallback(() => {
    setInteractionMode(INTERACTION_MODES.ZOOM);
  }, []);

  const activatePanMode = useCallback(() => {
    setInteractionMode(INTERACTION_MODES.PAN);
  }, []);

  return {
    interactionMode,
    setInteractionMode,
    isZoomMode,
    isPanMode,
    activateZoomMode,
    activatePanMode,
  };
}
