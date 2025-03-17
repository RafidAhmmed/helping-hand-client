import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevOffset, setPrevOffset] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const toggleScrollDirection = () => {
      const currentOffset = window.pageYOffset;
      
      // Always show navbar at the top of the page
      if (currentOffset === 0) {
        setVisible(true);
        return;
      }

      // Determine scroll direction and update visibility
      if (currentOffset > prevOffset && visible && currentOffset > 72) { // 72px is navbar height
        setVisible(false); // Scrolling down
      } else if (currentOffset < prevOffset && !visible) {
        setVisible(true);  // Scrolling up
      }

      setPrevOffset(currentOffset);
    };

    window.addEventListener('scroll', toggleScrollDirection);
    return () => window.removeEventListener('scroll', toggleScrollDirection);
  }, [prevOffset, visible]);

  return visible;
}; 