const ONas = () => {
  return (
    <section id="onas" className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {/* Header */}
        <div className="mb-12">
          <h1 className="section-header">O nás</h1>
          <div className="header-underline" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Tradice a Kvalita</h2>
            <p className="text-gray-300 mb-4">
              Jsme součástí zavedené firmy, která se od roku 2000 zabývá rekonstrukcí bytových jader, rekonstrukcí bytů a domů. Od roku 2018 jsme rozšířili naši nabídku o truhlářské služby.
            </p>
            <p className="text-gray-300">
              Hlavní specializací truhlářské dílny je zakázková výroba kuchyní, koupelnového nábytku, vestavěných skříní, vybavení kanceláří a jiného nábytku z lamina. Dále poskytujeme služby nejen domácím kutilům a to možnost nechat si u nás zadat výrobu nařezání a olepení dílců z lamino desek.
            </p>
          </div>

          {/* Right column */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Náš Přístup</h2>
            <p className="text-gray-300 mb-4">
              Truhlářské služby realizujeme především v okolí Třince a Českého Těšína. V případě, že budete mít jakékoliv dotazy neváhejte se na nás obrátit. Rádi Vám poradíme a pomůžeme navrhnout nábytek, který bude vyhovovat přesně Vašim představám.
            </p>
            <p className="text-gray-300">
              Ke každé zakázce přistupujeme individuálně, provedeme zaměření a vypracujeme vizualizaci včetně výrobní dokumentace.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 md:gap-10">
          <div className="text-center">
            <div className="stat-header">25+</div>
            <p className="stat-description">Let Zkušeností</p>
          </div>
          <div className="text-center">
            <div className="stat-header">500+</div>
            <p className="stat-description">Realizovaných Projektů</p>
          </div>
          <div className="text-center">
            <div className="stat-header">100%</div>
            <p className="stat-description">Spokojenost</p>
          </div>
        </div>
      </div>

      <div className="divider" />
    </section>
  );
};

export default ONas;