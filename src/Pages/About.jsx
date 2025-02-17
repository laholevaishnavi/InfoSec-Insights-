import React from 'react'

const About = () => {
  return (
 <div className="home_wrap flex-grow-0 min-h-[87vh]"> 
        
        <div className="overlay absolute w-full h-full top-0 left-0 bg-[rgba(2,26,54,1)]"></div>
        <div className="content absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center z-200 text-center text-white w-full h-full">
          <h3 className="text-4xl leading-loose font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt minus repudiandae consequatur, explicabo quidem sit obcaecati aliquid magni sunt iste neque accusamus quia dolore possimus cupiditate tempora illo. Unde.</h3>
          <p className="text-xl"></p>
        </div>
      </div>  )
}

export default About