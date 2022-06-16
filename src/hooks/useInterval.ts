import { useEffect, useRef } from 'react';

export function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<Function>();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      if (savedCallback && savedCallback.current !== undefined) {
        const callback = savedCallback.current as Function;
        callback();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
    else {
      // should not happen!
      return () => { };
    }
  }, [delay]);
}