import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./components/Favorites";
import BookDetails from "./components/BookDetails";
import { Toaster, toast } from "react-hot-toast";
import useNetworkStatus from "./hooks/useNetworkStatus";

export default function App() {
  const isOnline = useNetworkStatus();
  const prevStatus = useRef(isOnline); // track previous status

  useEffect(() => {
    // Skip first render
    if (prevStatus.current === isOnline) return;

    if (isOnline) {
      toast.success(" Back online!");
    } else {
      toast.error("🚫 You are offline.");
    }

    prevStatus.current = isOnline;
  }, [isOnline]);

  return (
    <div>
      {/* 🔴 Offline Banner */}
      {!isOnline && (
        <div className="bg-red-600 text-white text-center py-2 text-sm">
          🚫 You’re offline. Some features may not work.
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
