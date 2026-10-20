import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Pressure-Temperature Rating | USA PVF" },
  description: "ASME B16.5 working pressure ratings as a function of material, class, and service temperature. The numbers that matter when matching a flange to a line spec."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
