import React from 'react'
import { Briefcase } from 'lucide-react'

const Experience = ({ experiences }) => {
  return (
    <section className="bg-[#1a1d23] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gradient mb-4 flex items-center">
        <Briefcase className="mr-2" /> Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((job) => (
          <div key={job.id} className="bg-[#252a34] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">{job.title}</h3>
            <p className="text-gray-400">{job.company}</p>
            <p className="text-sm text-gray-500 mt-1">{job.period}</p>
            <p className="text-gray-300 mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience