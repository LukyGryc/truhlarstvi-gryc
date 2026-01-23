import SpotlightCard from "../react-bits/SpotlightCard"

const Sluzby = () => {
  const cards = [
    { title: "Výřezy otvorů", description: "Výřezy pro dřezy, varné desky i otvory pro dřezové baterie – čistě a přesně." },
    { title: "Vrtání otvorů", description: "Vrtání otvorů pro nábytkové kování a montážní prvky podle potřeb projektu." },
    { title: "Pracovní desky", description: "Zpracování a úpravy pracovních desek na míru, včetně přesného přizpůsobení." },
    { title: "Služby na míru", description: "Další truhlářské práce dle dohody – individuálně podle zadání a možností." }
  ]

  return (
    <section
      id="sluzby"
      className="w-full min-h-screen bg-white relative py-20 text-white flex flex-col xl:flex-row gap-5 items-center"
    >
      <div className="order-1 xl:order-2 w-full xl:w-1/2 h-auto p-8 md:p-12 lg:p-20 bg-black/70 z-10">
        <h1 className="section-header">Služby</h1>
        <p className="section-paragraph">Nabízíme pro truhláře a kutily kvalitní služby formátování (řezání a olepování) lamino desek i ostatního deskového materiálu a olepování ABS hranou nábytkových dílců. Olepení provádíme transparentním, nebo bílým lepidlem (na bílé a světle šedé desky rozhodně doporučujeme).</p>
        <p className="section-paragraph">Na základě Vašich požadavků Vám vyrobíme spolehlivě a rychle, kvalitní polotovar pro výrobu Vašeho nábytku (rozřezaný a olepený dílec).</p>
        <p className="section-paragraph">Námi vyrobené nábytkové dílce jsme schopni dle požadavků zabalit a dovezeme v okolí <b>Českého Těšína a Třince</b>, nebo je připravíme k vlastnímu odběru. Provozovnu naleznete v Českém Těšíně.</p>
        <p className="section-paragraph">Ceny i dodací lhůty jsou u všech výrobků individuální, jelikož každá zakázka je kusová výroba. Cenu i termín dodání stanovíme až na základě podkladů, které nám dodáte.</p>
        <p className="section-paragraph">Standardně nabízíme řezání a olepování do 5-7 pracovních dnů. Vše je v závislosti na počtu zakázek a množství řezaného materiálu.</p>
        <p className="section-paragraph">Nabízíme zakázkovou výrobu kuchyňských linek, dětských pokojů, ložnic, vestavěných skříní, interiérového a kancelářského nábytku.</p>
      </div>

      <div className="order-2 xl:order-1 w-full xl:w-1/2 px-8 md:px-12 lg:px-20 grid grid-cols-2 gap-4 sm:gap-6 z-10">
        {cards.map(({ description, title }, index) => (
          <SpotlightCard key={index}>
            <div className="grid gap-10">
              <h2 className="text-3xl font-300">{title}</h2>
              <p>{description}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}

export default Sluzby
