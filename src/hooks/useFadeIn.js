import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class (see .fade-up in tokens.css) once the element
 * scrolls into view. Respects prefers-reduced-motion by letting the CSS
 * media query keep everything visible regardless of this class.
 */
const useFadeIn = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};

export default useFadeIn;
