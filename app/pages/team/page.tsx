import React from 'react';
import CartTeam from '@/app/component/cartTeam';

const Team = () => {
  return (
    <>
    <div className="items-center m-12 2xl:h-screen ">  
        <div className=" p-10">
          <p className="flex justify-center m-10 text-4xl font-bold text-black"> TEAMS</p>
          <div >
            <CartTeam />
          </div>
        </div>
    </div>
    </>
  )
}

export default Team;