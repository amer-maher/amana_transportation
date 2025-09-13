import Image from "next/image";
import { Hero, Navbar, BusSelector, Footer, ScheduleTable, SectionTitle } from "./combonet";
export default function Home() {
  return (
  <div className="page-container">
    <Navbar />
    <Hero />
    <BusSelector />
    <ScheduleTable />
  
    <Footer />
  </div>
  );
}
