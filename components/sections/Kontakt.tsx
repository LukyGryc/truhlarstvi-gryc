import Contacts from '../layout/Contacts';
import SectionTitle from '../layout/SectionTitle';
import { ContactItem } from '@/types/layout';
import { Clock, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const ContactItems: ContactItem[] = [
  {
    id: "address",
    icon: <MapPin className="icon" size={24} />,
    firstRow: "ul. Jablunkovská 30",
    secondRow: "(areál Dřevotrustu)"
  },
  {
    id: "workingHours",
    icon: <Clock className="icon" size={24} />,
    firstRow: "Příjem, výdej zakázek:",
    secondRow: "Po-Pá 9-14 hod"
  },
  {
    id: "phone",
    icon: <Phone className="icon" size={24} />,
    firstRow: "Mobil:",
    secondRow: "+420 737 188 160"
  },
  {
    id: "email",
    icon: <Mail className="icon" size={24} />,
    firstRow: "E-mail:",
    secondRow: "info@reol-ct.cz"
  },
  {
    id: "facebook",
    icon: <Facebook className="icon" size={24} />,
    firstRow: "Facebook:",
    secondRow: "Stolařství Gryč",
    link: "https://www.facebook.com/people/Stola%C5%99stv%C3%AD-Gry%C4%8D/61576758120241"
  }
]

const Kontakt = () => {

  return (
    <section id="kontakt" className="relative bg-[url(/wooden-texture.jpg)] bg-cover bg-center min-h-200 text-white">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent" />
      
      <div className="relative z-10 p-4 sm:p-8 md:p-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <SectionTitle title="Kontakt" />

          {/* Content Grid */}
          <div className="grid md:grid-cols-2">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Český Těšín</h2>
                <Contacts contacts={ContactItems} />
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="rounded-lg overflow-hidden h-96 md:h-full min-h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.4508435962452!2d18.618062376033123!3d49.73996027146533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471405bef9c5bfcd%3A0x7a53df105080b0ea!2zU3RvbGHFmXN0dsOtLCB0cnVobMOhxZlzdHbDrSBHcnnEjSAtIMSMZXNrw70gVMSbxaHDrW4sIFTFmWluZWM!5e0!3m2!1scs!2scz!4v1710674368781!5m2!1scs!2scz" 
                width="100%" 
                height="100%" 
                loading="lazy"
                title="Mapa s umístěním Stolařství Gryč v Českém Těšíně"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kontakt