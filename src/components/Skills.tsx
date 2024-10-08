import React from 'react'
import { Code } from 'lucide-react'
import { useExperiences } from '../contexts/ExperienceContext'

const Skills = () => {
  const { skills } = useExperiences()

  return (
    <section className="bg-[#1a1d23] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gradient mb-4 flex items-center">
        <Code className="mr-2" /> Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-[#252a34] text-[#6366f1] px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills