import Image from "next/image";

const ONas = () => {
  return (
    <section className="bg-gold w-screen h-screen  px-8 py-20 lg:py-30 flex flex-col md:flex-row justify-between gap-6 md:gap-8">
      <div className="w-full md:w-1/2">
        <h1 className="section-header">Vítáme Vás na naších stránkách.</h1>
        <p className="section-paragraph">Jsme součástí zavedené firny, která se od roku 2000 zabývá rekonstrukcí bytových jader, rekonstrukcí bytů a domů. Od roku 2018 jsme rozšířili naši nabídku o truhlářské služby.</p>
        <p className="section-paragraph">Hlavní specializací truhlářské dílny je zakázková výroba kuchyní, koupelnového nábytku, vestavěných skříní, vybavení kanceláří a jiného nábytku z lamina. Dále poskytujeme služby nejen domácím kutilům a to možnost nechat si u nás zadat výrobu nařezání a olepení dílců z lamino desek.</p>
        <p className="section-paragraph">Truhlářské služby realizujeme především v okolí Třince a Českého Těšína. V případě, že budete mít jakékoliv dotazy neváhejte se na nás obrátit. Rádi Vám poradíme a pomůžeme navrhnout nábytek, který bude vyhovovat přesně Vašim představám.</p>
        <p className="section-paragraph">Ke každé zakázce přistupujeme individuálně, provedeme zaměření a vypracujeme vizualizaci včetně výrobní dokumentace.</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image className="w-full h-auto md:mt-20" src="/koupelna_1.jpg" alt="Koupelna" width={700} height={700}/>
      </div>
    </section>
  )
}

export default ONas;