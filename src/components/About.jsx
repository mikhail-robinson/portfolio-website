import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 pt-20">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Mikhail. Nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              Seeking discomfort is a guiding principle in my life as I firmly
              believe that the best things in life lie on the other side of our
              comfort zones. Embracing challenges and pushing boundaries have
              shaped me into someone who is always ready to seize new
              opportunities and pursue personal and professional growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
