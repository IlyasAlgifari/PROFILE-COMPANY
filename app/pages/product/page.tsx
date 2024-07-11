import React from 'react'
import Image from 'next/image';
import Type1 from '../../../public/assets/Type1.jpg'
import Type2 from '../../../public/assets/Type2.jpg'
import Type3 from '../../../public/assets/Type3.jpg'
import Type4 from '../../../public/assets/Type4.jpg'

const Product = async () => {
  return (
    <>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">House Type</h2>

                  <p className="mt-4 text-gray-500">
                    Enjoy the advantages in a calm and beautiful atmosphere!
                  </p>
                </header>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Order Now
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="group block">
                    <Image
                      src={Type1}
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3
                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                      >
                        Type Melati
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$2.800</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block">
                    <Image
                      src={Type2}
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3
                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                      >
                        Type Mawar
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$6.170</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block">
                    <Image
                      src={Type3}
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3
                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                      >
                        Type Anggrek
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$10.250</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block">
                    <Image
                      src={Type4}
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3
                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                      >
                        Type Rose
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">$7.235</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Product;