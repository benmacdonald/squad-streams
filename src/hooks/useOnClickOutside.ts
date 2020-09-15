import { useEffect } from "react";

//

/**
 * Taken from https://usehooks.com/useOnClickOutside/ and slightly modified to check multiple refs
 * @param refs An array of refs to containers that are clickable
 * @param handler A function to execute when clicking outside the given refs
 */
export function useOnClickOutside(
  refs: React.MutableRefObject<HTMLElement | null>[],
  handler: (event: MouseEvent) => void
) {
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if at least one of the refs contains the target
        let outsideClick = true;
        refs.forEach((ref) => {
          if (ref && ref.current) {
            if (ref.current.contains(event.target)) {
              outsideClick = false;
            }
          }
        });

        if (outsideClick) {
          handler(event);
        }
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [refs, handler]
  );
}
