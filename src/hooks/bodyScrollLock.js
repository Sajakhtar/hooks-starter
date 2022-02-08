import { useLayoutEffect } from "react";

//  simplified example of https://usehooks.com/useLockBodyScroll/

function useBodyScrollLock() {
  useLayoutEffect( () => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    //  Return a function from the hook that will run on un-mount
    // return function cleanup() {
    //   document.body.style.overflow = '';
    // }

    return () => {
      document.body.style.overflow = originalOverflow;
    }
  }, [])
}


export { useBodyScrollLock }
