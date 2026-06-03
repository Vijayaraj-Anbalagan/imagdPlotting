import { useState, useCallback } from "react";

export const INTERACTION_MODES = {
  NONE: "none",
  ZOOM: "zoom",
  PAN: "pan",
};

export function useInteractionMode(initialMode = INTERACTION_MODES.ZOOM) {
  const [interactionMode, setInteractionMode] = useState(initialMode);

  const isZoomMode = interactionMode === INTERACTION_MODES.ZOOM;
  const isPanMode = interactionMode === INTERACTION_MODES.PAN;
  const isNoneMode = interactionMode === INTERACTION_MODES.NONE;

  const activateZoomMode = useCallback(() => {
    setInteractionMode(INTERACTION_MODES.ZOOM);
  }, []);

  const activatePanMode = useCallback(() => {
    setInteractionMode(INTERACTION_MODES.PAN);
  }, []);

  const activateNoneMode = useCallback(() => {
    setInteractionMode(INTERACTION_MODES.NONE);
  }, []);

  return {
    interactionMode,
    setInteractionMode,
    isZoomMode,
    isPanMode,
    isNoneMode,
    activateZoomMode,
    activatePanMode,
    activateNoneMode,
  };
}
