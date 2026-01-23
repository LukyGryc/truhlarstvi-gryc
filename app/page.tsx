import Galerie from "@/components/sections/Galerie";
import Kontakt from "@/components/sections/Kontakt";
import ONas from "@/components/sections/ONas";
import Sluzby from "@/components/sections/Sluzby";

export default function Home() {
  return (
    <main>
      <ONas />
      <Sluzby />
      <Galerie />
      <Kontakt />
    </main>
  );
}
