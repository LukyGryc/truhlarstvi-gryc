import Galerie from "@/components/sections/Galerie";
import Kontakt from "@/components/sections/Kontakt";
import LandingPage from "@/components/sections/LandingPage";
import ONas from "@/components/sections/ONas";
import Sluzby from "@/components/sections/Sluzby";

export default function Home() {
  return (
    <main className="text-justify">
      <LandingPage />
      <ONas />
      <Sluzby />
      <Galerie />
      <Kontakt />
    </main>
  );
}
