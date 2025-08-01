export function debounce(fn: (...args: unknown[]) => void, delay: number) {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: unknown[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => fn(...args), delay);
  };
}
