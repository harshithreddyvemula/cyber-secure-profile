
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

const useIntersectionObserver = ({
  threshold = 0.3,
  root = null,
  rootMargin = '0px'
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasBeenSeen) {
          setHasBeenSeen(true);
          // Track section view
          const sectionId = element.id;
          if (sectionId && (window as any).trackSectionView) {
            (window as any).trackSectionView(sectionId);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, hasBeenSeen]);

  return { ref, isIntersecting, hasBeenSeen };
};

export default useIntersectionObserver;
