import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row mmd:justify-between">
        <ul className="flex gap-6 font-lato text-gray-400">
            <li>
                <a href="#">Facebook</a>
            </li>
            <li>
                <a href="#">Instagram</a>
            </li>
            <li>
                <a href="#">Twitter</a>
            </li>
        </ul>
        <div className="flex gap-3 items-center">
            <img  className="h-10"src="./assets/IT-specialist.jpg" alt=""/>
            <div>
                <p className="font-playfair font-thin">Have any Questions?</p>
                <a href="#" className="font-lato font-medium">Talk to a specialist</a>
            </div>
        </div>
    </div>
  )
}

export default Footer