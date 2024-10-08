import React from 'react'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'
import { useExperiences } from '../contexts/ExperienceContext'

function CV() {
  const { experiences } = useExperiences()

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-300">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="mt-10 space-y-16">
          <About />
          <Experience experiences={experiences} />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default CV