const LandingPage = () => {
  return (
    <section id="landingPage" className="relative min-h-screen bg-[url(/woodworker.jpg)] bg-cover bg-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="relative h-full flex flex-col mt-20 p-10 md:p-16 lg:p-20 z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Truhlářství Gryč
        </h1>
        <p className="text-lg max-w-xl md:text-xl text-gray-100 mb-8 font-light">
          Kvalitní truhlářské služby s dvacetiletou tradicí. Od rekonstrukcí po zakázkový nábytek.
        </p>
      </div>
    </section>
  )
}

export default LandingPage;