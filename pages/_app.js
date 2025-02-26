
import '../styles/globals.css'
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";


// Dynamically import Loader to prevent SSR
const Loader = dynamic(() => import("../components/loader.jsx"), { ssr: false });

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading time
  }, []);

  return (
    <div className="relative">
      {loading && <Loader />}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp


