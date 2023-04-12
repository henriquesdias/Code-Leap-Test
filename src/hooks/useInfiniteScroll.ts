import { useState, useEffect, MutableRefObject } from "react";

export default function useInfiniteScroll(
  isLoading: boolean,
  page: MutableRefObject<number>
) {
  const [isEndOfPage, setIsEndOfPage] = useState<boolean>(false);
  useEffect(() => {
    if (!isLoading) {
      function handleScroll() {
        const EndOfPage =
          window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
        if (EndOfPage) {
          page.current += 10;
          setIsEndOfPage(EndOfPage);
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsEndOfPage(false);
    }
  }, [isLoading]);

  return { isEndOfPage, setIsEndOfPage };
}
