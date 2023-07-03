import { useEffect } from "react";

export function useCloseOnClickOutsideElement(
  ref: any,
  handleState: () => void
) {
  useEffect(() => {
    const handler = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target)
        if (!ref.current?.contains(target)) {
          handleState();
        }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
}
