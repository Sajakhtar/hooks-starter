import { useLayoutEffect } from "react";

//  simplified example of https://usehooks.com/useLockBodyScroll/

function useBodyScrollLock() {
  useLayoutEffect( () => {
    document.body.style.overflow = 'hidden';
  })
}


export { useBodyScrollLock }
