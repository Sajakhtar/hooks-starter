import { useEffect } from "react";

function useOnClickOutside(ref, handler) {

  useEffect(() => {

    const listener = (e) => {
      if(!ref.current || ref.current.contains(e.target) ) {
        // console.log(ref.current);
        return;
      }
      handler();
    }

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // cleanup
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    }

  }, []);

}

export { useOnClickOutside };
