"use client";
import React from "react";

import { Footer } from "./components/ui/footer";
import { ServicesGrid } from "./components/ui/services-grid";
// import { ZohoForm } from "./components/ui/zoho-form";
import { Header } from "./components/ui/header";
import { HeroSection } from "./components/ui/hero-section";
import { ZohoRawForm } from "./components/ui/zoho-raw-form";
import { ImageCarousal } from "./components/ui/image-carousal";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-orange-100">
      <Header />
      <HeroSection />
      {/* <ZohoForm /> */}
      <ZohoRawForm />
      <ImageCarousal />
      <ServicesGrid />
      <Footer />
    </div>
  );
}

export default App;
