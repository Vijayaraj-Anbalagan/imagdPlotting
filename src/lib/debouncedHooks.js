/**
 * Custom hook for debounced state updates
 * Reduces render frequency during rapid interactions (pan, zoom, hover)
 * Returns [state, setState, flush] where flush forces immediate update
 */

import { useCallback, useRef, useEffect, useState } from "react";

export function useDebouncedState(initialValue, delay = 50) {
  const [state, setState] = useState(initialValue);
  const timeoutRef = useRef(null);
  const pendingRef = useRef(null);

  const setDebouncedState = useCallback(
    (newValue) => {
      // Store pending value
      pendingRef.current = newValue;

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        if (pendingRef.current !== null) {
          setState(pendingRef.current);
          pendingRef.current = null;
          timeoutRef.current = null;
        }
      }, delay);
    },
    [delay],
  );

  /**
   * Force immediate flush of pending state
   */
  const flush = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (pendingRef.current !== null) {
      setState(pendingRef.current);
      pendingRef.current = null;
    }
  }, []);

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return [state, setDebouncedState, flush];
}

/**
 * Custom hook for debounced callbacks
 * Prevents callback from being called too frequently
 */
export function useDebouncedCallback(callback, delay = 50) {
  const timeoutRef = useRef(null);
  const callbackRef = useRef(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedCallback = useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
        timeoutRef.current = null;
      }, delay);
    },
    [delay],
  );

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return debouncedCallback;
}

/**
 * Custom hook for throttled callbacks
 * Calls callback at most once every `interval` milliseconds
 */
export function useThrottledCallback(callback, interval = 50) {
  const timeoutRef = useRef(null);
  const lastCallRef = useRef(0);
  const callbackRef = useRef(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const throttledCallback = useCallback(
    (...args) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCallRef.current;

      const execute = () => {
        lastCallRef.current = Date.now();
        callbackRef.current(...args);
      };

      if (timeSinceLastCall >= interval) {
        execute();
      } else {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(execute, interval - timeSinceLastCall);
      }
    },
    [interval],
  );

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return throttledCallback;
}

/**
 * Custom hook for interaction debouncing
 * Specific hook for zoom/pan interactions to reduce render churn
 */
export function useInteractionDebounce(delay = 40) {
  const [isInteracting, setIsInteracting] = useState(false);
  const timeoutRef = useRef(null);

  const startInteraction = useCallback(() => {
    if (!isInteracting) {
      setIsInteracting(true);
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
      timeoutRef.current = null;
    }, delay);
  }, [isInteracting, delay]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { isInteracting, startInteraction };
}
