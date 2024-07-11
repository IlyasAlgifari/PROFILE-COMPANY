import React from "react";
import Image from "next/image";
import Perumahan from "../../../public/assets/Perumahan.jpg"

const About = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              ABOUT AURORA RESIDENCE
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                alt=""
                src={Perumahan}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                Aurora Residence has various complete facilities, such as a swimming pool, fitness center, 
                children playground, tennis court, squash, jogging track and meeting room. The apartment is 
                also equipped with 24-hour security and a card access security system to enter the building.
                </p>

                <p>
                Each apartment unit at Aurora Residence is designed very elegantly and modernly, 
                and is equipped with high-quality furniture and equipment. There are several types of 
                units to choose from, such as 1 bedroom, 2 bedroom, and 3 bedroom, making it suitable for 
                various needs and family members.
                The apartment rental prices at Senayan Residence are quite expensive, 
                but are proportional to the facilities and comfort provided. In addition, the strategic 
                location advantage and proximity to various business and entertainment centers are also 
                the main attraction of this apartment.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;