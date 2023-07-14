import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Typescript from '../assets/typescript.png'
import ReactImg from '../assets/react.png'
import Github from '../assets/github.png'
import Redux from '../assets/redux.png'

const Skills = () => {
  return (
    <div name="skills" className=" bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-2-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">These are the technologies i've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Logo" />
            <p className="my-4">HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
