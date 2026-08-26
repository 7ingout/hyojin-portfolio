import { useEffect, useRef } from 'react';

/**
 * Ports mockup.html's reveal-on-scroll behavior: pairs with the `.reveal`
 * class in tokens.css. Adds `.in` once the element scrolls into view, and
 * respects prefers-reduced-motion via the CSS media query (which forces
 * `.reveal` fully visible regardless of this class).
 *
 * `delay` (ms) mirrors the mockup's per-index transitionDelay stagger.
 */
const useFadeIn = ({ threshold = 0.12, delay = 0 } = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (delay) {
      node.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    }, { threshold });

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};

export default useFadeIn;
