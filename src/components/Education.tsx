import React from 'react'
import { GraduationCap } from 'lucide-react'
import { useExperiences } from '../contexts/ExperienceContext'

const Education = () => {
  const { education } = useExperiences()

  return (
    <section className="bg-[#1a1d23] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gradient mb-4 flex items-center">
        <GraduationCap className="mr-2" /> Education
      </h2>
      <div className="bg-[#252a34] p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
        <p className="text-gray-400">{education.school}</p>
        <p className="text-sm text-gray-500 mt-1">{education.period}</p>
      </div>
    </section>
  )
}

export default Education