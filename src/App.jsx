import React from "react";
import {
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="flex justify-center items-center sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full flex flex-col gap-8">
        <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
        <Clients /> <CTA /> <Footer />
      </div>
    </div>
  </div>
);

export default App;
