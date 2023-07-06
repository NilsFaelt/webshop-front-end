import { useEffect, useState } from "react";

type DebouncedValue<T> = {
  value: T;
  cancel: () => void;
};

export function useDebounce<T>(value: T, delay: number): DebouncedValue<T> {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    setTimeoutId(newTimeoutId);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [value, delay]);

  const cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  return {
    value: debouncedValue,
    cancel,
  };
}

// Created By Our beloved Gtp
