import Image from 'next/image';

const LandingPage = () => {
  return (
    <section id="landingPage" className="relative min-h-screen overflow-hidden">
      <Image
        src="/woodworker.jpg"
        alt="Truhlářství Gryč - Truhlář při práci"
        fill
        className="object-cover"
        quality={80}
        priority={true}
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative h-full flex flex-col mt-20 p-10 md:p-16 lg:p-20 z-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Truhlářství Gryč
        </h1>
        <p className="text-lg max-w-xl md:text-xl text-gray-50 mb-8 font-light">
          Kvalitní truhlářské služby s dvacetiletou tradicí. Od rekonstrukcí po zakázkový nábytek.
        </p>
      </div>
    </section>
  )
}

export default LandingPage;