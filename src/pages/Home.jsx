// optimized code for Home.jsx✅
import React, { Suspense, lazy, useState, useEffect } from "react";
import Hero from "../components/Hero";
import "../index.css";

// Lazy load CardDesc for better performance
const LazyCardDesc = lazy(() => import("../components/CardDesc"));

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Ensure content is visible after initial load
  useEffect(() => {
    // Set a small timeout to ensure the component is fully loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="flex flex-col items-center justify-center min-h-screen lg:ml-[280px] lg:pr-5">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero section with optimized spacing */}
          <div className="py-8 sm:py-12 lg:py-16">
            <Hero />
          </div>
          
          {/* Card description section with lazy loading */}
          <Suspense fallback={
            <div className="h-40 flex items-center justify-center font-semibold animate-pulse">
              Loading...
            </div>
          }>
            {isLoaded && <LazyCardDesc />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;