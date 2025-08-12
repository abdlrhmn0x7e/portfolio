import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;

    const item = localStorage.getItem(key);

    return item ? (JSON.parse(item) as T) : initialValue;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}
