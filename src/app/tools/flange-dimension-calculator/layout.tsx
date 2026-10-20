import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Flange Dimension Lookup | USA PVF" },
  description: "ASME B16.5 dimensional reference for the most common pressure classes and sizes. Outside diameter, bolt circle, bolt count, and bolt diameter at a glance."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
