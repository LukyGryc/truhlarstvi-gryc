import Columns from "../layout/Columns";
import Stat from "../layout/Stat";
import SectionTitle from "../layout/SectionTitle";
import { ColumnType, StatType } from "@/types/layout";


export const columns: ColumnType[] = [
  { 
    id: "tradition", 
    title: 'Tradice a Kvalita',
    paragraphs: [
      "Jsme součástí zavedené firmy, která se od roku 2000 zabývá rekonstrukcí bytových jader, rekonstrukcí bytů a domů. Od roku 2018 jsme rozšířili naši nabídku o truhlářské služby.",
      "Hlavní specializací truhlářské dílny je zakázková výroba kuchyní, koupelnového nábytku, vestavěných skříní, vybavení kanceláří a jiného nábytku z lamina. Dále poskytujeme služby nejen domácím kutilům a to možnost nechat si u nás zadat výrobu nařezání a olepení dílců z lamino desek."
    ]
  },
  {
    id: "approach", 
    title: 'Náš Přístup',
    paragraphs: [
      "Truhlářské služby realizujeme především v okolí Třince a Českého Těšína. V případě, že budete mít jakékoliv dotazy neváhejte se na nás obrátit. Rádi Vám poradíme a pomůžeme navrhnout nábytek, který bude vyhovovat přesně Vašim představám.",
      "Ke každé zakázce přistupujeme individuálně, provedeme zaměření a vypracujeme vizualizaci včetně výrobní dokumentace."
    ]
  }
]

export const stats: StatType[] = [
  { id: "experience", value: "25+", description: "Let Zkušeností" },
  { id: "projects", value: "500+", description: "Realizovaných Projektů" },
  { id: "satisfaction", value: "100%", description: "Spokojenost" }
]

const ONas = () => {

  return (
    <section id="onas" className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {/* Header */}
        <SectionTitle title="O nás" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <Columns columns={columns} />
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 md:gap-10">
          <Stat stats={stats} />
        </div>
      </div>

      <div className="divider" />
    </section>
  );
};

export default ONas;