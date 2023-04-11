import { useState, useEffect } from "react";

import LogoPage from "./pages/Logo-Page";
import { ResetStyle } from "./styles/Reset";
import SignUp from "./pages/Sign-Up";

export default function App() {
  const [page, setPage] = useState<JSX.Element>(<LogoPage />);
  useEffect(() => {
    const id = setTimeout(() => setPage(<SignUp />), 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <ResetStyle />
      {page}
    </>
  );
}
