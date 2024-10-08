import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { useExperiences } from '../contexts/ExperienceContext'

const Contact = () => {
  const { contact } = useExperiences()

  return (
    <section className="bg-[#1a1d23] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gradient mb-4">Contact</h2>
      <div className="flex space-x-4">
        <a href={`mailto:${contact.email}`} className="text-[#6366f1] hover:text-[#8b5cf6] flex items-center">
          <Mail className="mr-2" /> Email
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#6366f1] hover:text-[#8b5cf6] flex items-center">
          <Linkedin className="mr-2" /> LinkedIn
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-[#6366f1] hover:text-[#8b5cf6] flex items-center">
          <Github className="mr-2" /> GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact