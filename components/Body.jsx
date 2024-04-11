import React from 'react'

const Body = () => {
  return (
    <div clasName="space-y-4 lg:flex">
        <div className="flex item-center justify-center lg:flex-1 ">
            <img className="h-64 md:h-80 lg:h-[400px]" src="./assets/cat.png" alt="Image"/>
        </div>
        <div clasName="space-y-4 lg:flex-1">
           <h1 className="text-5xl font-bold font-playfair leading-tight">Host your website in less than 5 minutes</h1><br></br>
           <p className="font-lato text-gray-400">With, Luminum get you website up and running in no time with the best pricing package</p>
           <form action="" className="flex flex-col gap-4 md:flex-row">
                <input className="rounded-md px-4 py-3 placeholder:text-gray-400"type="email" placeholder="Enter you email adress"/>
                <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>

           </form>
           <div class="flex gap-2">
                <img src="./assets/icon-check.svg" alt="check"/>
                <p className="font-lato text-gray-400">Unsubscribe Anytime</p>
           </div>
        </div>
    </div>
  )
}

export default Body