import React, { createContext, useContext, useState } from 'react'

const ExperienceContext = createContext(null)

export const ExperienceProvider = ({ children }) => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      period: '2020 - Present',
      description: 'Lead development of scalable web applications using React, Node.js, and AWS.',
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'WebSolutions Co.',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple client websites using Vue.js and Laravel.',
    },
  ])

  const [aboutMe, setAboutMe] = useState("I'm a passionate Full Stack Developer with 5 years of experience in building web applications. I love creating elegant solutions to complex problems and am always eager to learn new technologies. When I'm not coding, you can find me hiking or reading sci-fi novels.")
  
  const [skills, setSkills] = useState(['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'AWS', 'Docker', 'Git', 'Agile Methodologies'])
  
  const [education, setEducation] = useState({
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    period: '2014 - 2018'
  })
  
  const [contact, setContact] = useState({
    email: 'john.doe@example.com',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  })

  const [profile, setProfile] = useState({
    name: 'John Doe',
    title: 'Full Stack Developer',
    image: null
  })

  const addExperience = (newExperience) => {
    setExperiences(prevExperiences => [...prevExperiences, { ...newExperience, id: Date.now() }])
  }

  const editExperience = (updatedExperience) => {
    setExperiences(prevExperiences => prevExperiences.map(exp => 
      exp.id === updatedExperience.id ? updatedExperience : exp
    ))
  }

  const deleteExperience = (id) => {
    setExperiences(prevExperiences => prevExperiences.filter(exp => exp.id !== id))
  }

  const updateAboutMe = (newAboutMe) => {
    setAboutMe(newAboutMe)
  }

  const updateSkills = (newSkills) => {
    setSkills(newSkills)
  }

  const updateEducation = (newEducation) => {
    setEducation(newEducation)
  }

  const updateContact = (newContact) => {
    setContact(newContact)
  }

  const updateProfile = (newProfile) => {
    setProfile(newProfile)
  }

  return (
    <ExperienceContext.Provider value={{ 
      experiences, addExperience, editExperience, deleteExperience,
      aboutMe, updateAboutMe,
      skills, updateSkills,
      education, updateEducation,
      contact, updateContact,
      profile, updateProfile
    }}>
      {children}
    </ExperienceContext.Provider>
  )
}

export const useExperiences = () => useContext(ExperienceContext)