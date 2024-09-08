import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(null);

  const { root = null, rootMargin = '0px', threshold = 0.1 } = options;

  useEffect(() => {
    if (elements.length) {
      observer.current = new IntersectionObserver(
        observedEntries => {
          setEntries(observedEntries);
        },
        {
          root,
          rootMargin,
          threshold,
        },
      );

      elements.forEach(element => observer.current.observe(element));
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, root, rootMargin, threshold]);

  return [setElements, entries];
};

export default useIntersectionObserver;
