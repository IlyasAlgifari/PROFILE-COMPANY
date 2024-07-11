import Product from './pages/product/page';
import Team from './pages/team/page';

export default function Home() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-10">
              <div className="relative h-60 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-300">
              <span
                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
              ></span>

              <div className="p-6 sm:p-10 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  AURORA RESIDENCE
                </h2>
                <br />
                <p>
                Becomes a good residence for you and your beloved family. with a cool and strategic location
                close to toll road access, education centers, shopping centers..
                </p>
                <br/>
                <p>
                Aurora Residence has various complete facilities, such as a swimming pool, fitness center, 
                children playground, tennis court, squash, jogging track and meeting room. The apartment is 
                also equipped with 24-hour security and a card access security system to enter the building.
                </p>
                <br />
                <p>
                Each apartment unit at Aurora Residence is designed very elegantly and modernly, 
                and is equipped with high-quality furniture and equipment. There are several types of 
                units to choose from, such as 1 bedroom, 2 bedroom, and 3 bedroom, making it suitable for 
                various needs and family members..
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Product />
      
      <Team />
    </>
  );
}
