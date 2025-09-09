import Image from "next/image";
import { Hero, Navbar, BusSelector, Footer, ScheduleTable, SectionTitle } from "./combonet";
export default function Home() {
  return (
  <div>
    <Navbar />
    <Hero />
    <BusSelector />
    <Footer />
    <ScheduleTable />
    <SectionTitle title="Schedule" subtitle="Schedule of the buses" />
  </div>
  );
}
