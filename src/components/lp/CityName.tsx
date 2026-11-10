import { useGeo } from "@/lib/geo-context";

export function CityName() {
  const geo = useGeo();
  return <>{geo.city}</>;
}
