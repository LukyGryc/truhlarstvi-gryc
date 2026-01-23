import SpotlightCard from "../react-bits/SpotlightCard"

const Sluzby = () => {
  const cards = [
    { title: "Výřezy otvorů", description: "Výřezy pro dřezy, varné desky i otvory pro dřezové baterie" },
    { title: "Vrtání otvorů", description: "Vrtání otvorů pro nábytkové kování a montážní prvky podle potřeb" },
    { title: "Pracovní desky", description: "Zpracování a úpravy pracovních desek na míru, včetně přesného přizpůsobení" },
    { title: "Služby na míru", description: "Další truhlářské práce dle dohody – individuálně podle zadání a možností" }
  ]

  return (
    <section
      id="sluzby"
      className="relative bg-gradient-to-b from-neutral-900 via-neutral-850 to-neutral-900 py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h1 className="section-header">Naše Služby</h1>
          <div className="header-underline" />
          <p className="text-lg text-gray-300 mt-6 max-w-2xl">
            Nabízíme pro truhláře a kutily kvalitní služby formátování (řezání a olepování) lamino desek i ostatního deskového materiálu a olepování ABS hranou nábytkových dílců. Olepení provádíme transparentním, nebo bílým lepidlem (na bílé a světle šedé desky rozhodně doporučujeme).
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Formátování & Olepování</h2>
            <p className="text-gray-300 mb-3">
              Nabízíme pro truhláře a kutily kvalitní služby formátování (řezání a olepování) lamino desek i ostatního deskového materiálu a olepování ABS hranou nábytkových dílců. Olepení provádíme transparentním, nebo bílým lepidlem.
            </p>
            <p className="text-gray-300">
              Na základě Vašich požadavků Vám vyrobíme spolehlivě a rychle, kvalitní polotovar pro výrobu Vašeho nábytku (rozřezaný a olepený dílec).
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Dodání & Časové Rámce</h2>
            <p className="text-gray-300 mb-3">
              Námi vyrobené nábytkové dílce jsme schopni dle požadavků zabalit a dovezeme v okolí <b>Českého Těšína a Třince</b>, nebo je připravíme k vlastnímu odběru.
            </p>
            <p className="text-gray-300">
              Standardně nabízíme řezání a olepování do 5-7 pracovních dnů. Ceny i dodací lhůty jsou individuální, jelikož každá zakázka je kusová výroba.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(({ description, title }, index) => (
            <SpotlightCard key={index}>
              <div className="grid gap-6">
                <h2 className="text-2xl font-semibold text-white">{title}</h2>
                <p className="text-gray-200">{description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>

      <div className="divider" />
    </section>
  )
}

export default Sluzby
