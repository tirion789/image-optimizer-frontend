import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
  isListenerStopped: boolean = false
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!ref?.current || ref.current!.contains(event.target as HTMLElement)) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler, ref, isListenerStopped]);
};
