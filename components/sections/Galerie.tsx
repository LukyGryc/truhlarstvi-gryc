'use client';

import { useEffect, useRef, useState } from 'react';
import Masonry, { MasonryItem } from "../react-bits/Masonry"
import SectionTitle from '../layout/SectionTitle';

export const images: MasonryItem[] = [
  { height: 900, id: "kuchyne_1", img:"/kuchyne_1.jpeg" },
  { height: 1200, id: "kuchyne_2", img:"/kuchyne_2.jpeg" },
  { height: 700, id: "kuchyne_3", img:"/kuchyne_3.jpeg" },
  { height: 900, id: "kuchyne_5", img:"/kuchyne_5.jpeg" },
  { height: 1200, id: "kuchyne_6", img:"/kuchyne_6.jpeg" },
  { height: 1200, id: "kuchyne_7", img:"/kuchyne_7.jpeg" },
  { height: 1100, id: "kuchyne_8", img:"/kuchyne_8.jpeg" },
  { height: 1100, id: "kuchyne_10", img:"/kuchyne_10.jpeg" },
  { height: 1100, id: "kuchyne_13", img:"/kuchyne_13.jpeg" },
  { height: 1100, id: "kuchyne_14", img:"/kuchyne_14.jpeg" }
];

const Galerie = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="galerie"
      className="relative bg-gradient-to-b from-neutral-900 via-neutral-850 to-black scroll-mt-10"
    >
      <div className="relative p-4 sm:p-8 md:p-20 z-10">
        {/* Header */}
        <SectionTitle title="Galerie" />

        {shouldAnimate && (
          <div className="relative w-full">
            <Masonry
              items={images}
              ease="back.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="random"
              scaleOnHover
              hoverScale={0.95}
              blurToFocus
              colorShiftOnHover={false}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Galerie