import { useState, useEffect } from 'react';

export const useIntersection = (element, rootMargin) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer;

    const handleIntersection = ([entry]) => {
      setIsVisible(entry.isIntersecting);
    };

    const elementCurrent = element.current;
    if (element && elementCurrent) {
      observer = new IntersectionObserver(handleIntersection, { rootMargin });
      observer.observe(elementCurrent);
    }

    return () => {
      if (observer && element && elementCurrent) {
        observer.unobserve(elementCurrent);
      }
    };
  }, [element, rootMargin]);

  return isVisible;
};
