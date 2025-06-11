"use client";
import React from "react";

import { Footer } from "./components/ui/footer";
import { ServicesGrid } from "./components/ui/services-grid";
import { ZohoForm } from "./components/ui/zoho-form";
import { Header } from "./components/ui/header";
import { HeroSection } from "./components/ui/hero-section";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <HeroSection />
      <ZohoForm />
      <ServicesGrid />
      <Footer />
    </div>
  );
}

export default App;
