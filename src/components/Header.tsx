import React from 'react'
import { User } from 'lucide-react'
import { useExperiences } from '../contexts/ExperienceContext'

const Header = () => {
  const { profile } = useExperiences()

  return (
    <header className="text-center">
      <div className="inline-block p-2 rounded-full bg-gradient mb-4">
        {profile.image ? (
          <img src={profile.image} alt={profile.name} className="w-24 h-24 rounded-full" />
        ) : (
          <User size={48} className="text-white" />
        )}
      </div>
      <h1 className="text-4xl font-bold text-gradient">{profile.name}</h1>
      <p className="text-xl text-gray-400 mt-2">{profile.title}</p>
    </header>
  )
}

export default Header