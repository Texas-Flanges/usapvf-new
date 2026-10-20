import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Bolt Torque Calculator | USA PVF" },
  description: "Recommended torque values for ASTM A193 B7 studs on ASME B16.5 raised face flange connections. Values are starting estimates. Final torque should follow gasket manufacturer and project torquing procedure."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
