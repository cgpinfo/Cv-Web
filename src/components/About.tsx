import React from 'react'
import { useExperiences } from '../contexts/ExperienceContext'

const About = () => {
  const { aboutMe } = useExperiences()

  return (
    <section className="bg-[#1a1d23] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gradient mb-4">About Me</h2>
      <p className="text-gray-300 leading-relaxed">
        {aboutMe}
      </p>
    </section>
  )
}

export default About