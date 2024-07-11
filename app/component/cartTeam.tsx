import React from 'react'
import Image from 'next/image'
import Director from '../../public/assets/Director.jpg'
import Marketing from '../../public/assets/Marketing.jpg'
import Arsitek from '../../public/assets/Arsitek.jpg'
import QC from '../../public/assets/QC.jpg'

const base_url = "https://jsonplaceholder.typicode.com/users"

interface TeamName {
    id: number,
    name: string,
    phone: number,
    email: string,
}

const CartTeam = async () => {

    const response = await fetch(base_url);
    const users: TeamName[] = await response.json()

    return (
        <>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 m-1 sm:m-2">
                <a href="#" className="group h-auto relative block bg-black">
                    <Image alt=""
                        src={Director}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-red-500">Executive Director</p>
                        <p className="text-xl font-bold text-white sm:text-2xl">{users[0].name}</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm text-white">{users[0].email}</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="#" className="group relative block bg-black">
                    <Image alt=""
                        src={Marketing}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-red-500">Marketing</p>
                        <p className="text-xl font-bold text-white sm:text-2xl">{users[1].name}</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm text-white">{users[1].email}</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="#" className="group relative block bg-black">
                    <Image alt=""
                        src={Arsitek}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-red-500">Arsitektur</p>
                        <p className="text-xl font-bold text-white sm:text-2xl">{users[2].name}</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm text-white">{users[2].email}</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="#" className="group relative block bg-black">
                    <Image alt=""
                        src={QC}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-red-500">Quality Control</p>
                        <p className="text-xl font-bold text-white sm:text-2xl">{users[3].name}</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm text-white">{users[3].email}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>


    )
}

export default CartTeam;