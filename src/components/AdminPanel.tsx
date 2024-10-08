import React, { useState, useEffect } from 'react'
import { useExperiences } from '../contexts/ExperienceContext'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Trash2, Plus, X, Upload } from 'lucide-react'

const AdminPanel = () => {
  const { 
    experiences, addExperience, editExperience, deleteExperience,
    aboutMe, updateAboutMe,
    skills, updateSkills,
    education, updateEducation,
    contact, updateContact,
    profile, updateProfile
  } = useExperiences()
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    company: '',
    period: '',
    description: '',
  })
  const [editMode, setEditMode] = useState(false)

  const [localAboutMe, setLocalAboutMe] = useState(aboutMe)
  const [localSkills, setLocalSkills] = useState(skills)
  const [localEducation, setLocalEducation] = useState(education)
  const [localContact, setLocalContact] = useState(contact)
  const [localProfile, setLocalProfile] = useState(profile)

  useEffect(() => {
    setLocalAboutMe(aboutMe)
    setLocalSkills(skills)
    setLocalEducation(education)
    setLocalContact(contact)
    setLocalProfile(profile)
  }, [aboutMe, skills, education, contact, profile])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editMode) {
      editExperience(formData)
    } else {
      addExperience(formData)
    }
    resetForm()
  }

  const resetForm = () => {
    setFormData({ id: null, title: '', company: '', period: '', description: '' })
    setEditMode(false)
  }

  const handleEdit = (experience) => {
    setFormData(experience)
    setEditMode(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      deleteExperience(id)
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleSaveAboutMe = () => {
    updateAboutMe(localAboutMe)
  }

  const handleSaveSkills = () => {
    updateSkills(localSkills)
  }

  const handleSaveEducation = () => {
    updateEducation(localEducation)
  }

  const handleSaveContact = () => {
    updateContact(localContact)
  }

  const handleSaveProfile = () => {
    updateProfile(localProfile)
  }

  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setLocalSkills([...localSkills, e.target.value.trim()])
      e.target.value = ''
    }
  }

  const handleDeleteSkill = (skillToDelete) => {
    setLocalSkills(localSkills.filter(skill => skill !== skillToDelete))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setLocalProfile({ ...localProfile, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-[#0f1115] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gradient">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>

        {/* Profile Section */}
        <div className="bg-[#1a1d23] shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gradient mb-4">Profile</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Name</label>
            <input
              type="text"
              value={localProfile.name}
              onChange={(e) => setLocalProfile({...localProfile, name: e.target.value})}
              className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Job Title</label>
            <input
              type="text"
              value={localProfile.title}
              onChange={(e) => setLocalProfile({...localProfile, title: e.target.value})}
              className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Profile Image</label>
            <div className="mt-1 flex items-center">
              {localProfile.image && (
                <img src={localProfile.image} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
              )}
              <label className="cursor-pointer bg-[#252a34] text-gray-300 px-4 py-2 rounded-md hover:bg-[#2c313c]">
                <Upload size={20} className="inline mr-2" />
                Upload Image
                <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
              </label>
            </div>
          </div>
          <button
            onClick={handleSaveProfile}
            className="bg-[#6366f1] hover:bg-[#5457e5] text-white font-bold py-2 px-4 rounded"
          >
            Save Profile
          </button>
        </div>

        {/* About Me Section */}
        <div className="bg-[#1a1d23] shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gradient mb-4">About Me</h2>
          <textarea
            value={localAboutMe}
            onChange={(e) => setLocalAboutMe(e.target.value)}
            className="w-full h-32 bg-[#252a34] text-gray-300 border border-gray-600 rounded p-2 mb-4"
          />
          <button
            onClick={handleSaveAboutMe}
            className="bg-[#6366f1] hover:bg-[#5457e5] text-white font-bold py-2 px-4 rounded"
          >
            Save About Me
          </button>
        </div>

        {/* Experience Section */}
        <div className="bg-[#1a1d23] shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gradient mb-4">Manage Experiences</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-400">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-400">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
              />
            </div>
            <div>
              <label htmlFor="period" className="block text-sm font-medium text-gray-400">Period</label>
              <input
                type="text"
                id="period"
                name="period"
                value={formData.period}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-400">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#6366f1] hover:bg-[#5457e5] text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <Plus size={20} className="mr-2" />
                {editMode ? 'Update Experience' : 'Add Experience'}
              </button>
              {editMode && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="ml-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-300">Existing Experiences</h3>
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-4 p-4 bg-[#252a34] rounded">
                <h4 className="font-semibold text-gray-200">{exp.title}</h4>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
                <p className="mt-2 text-gray-300">{exp.description}</p>
                <div className="mt-2 flex space-x-2">
                  <button
                    onClick={() => handleEdit(exp)}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(exp.id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm flex items-center"
                  >
                    <Trash2 size={16} className="mr-1" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-[#1a1d23] shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gradient mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {localSkills.map((skill, index) => (
              <span key={index} className="bg-[#252a34] text-[#6366f1] px-3 py-1 rounded-full text-sm flex items-center">
                {skill}
                <button
                  onClick={() => handleDeleteSkill(skill)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            placeholder="Add new skill"
            className="w-full bg-[#252a34] text-gray-300 border border-gray-600 rounded p-2 mb-4"
            onKeyPress={handleAddSkill}
          />
          <button
            onClick={handleSaveSkills}
            className="bg-[#6366f1] hover:bg-[#5457e5] text-white font-bold py-2 px-4 rounded"
          >
            Save Skills
          </button>
        </div>

        {/* Education Section */}
        <div className="bg-[#1a1d23] shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gradient mb-4">Education</h2>
          <div>
            <label className="block text-sm font-medium text-gray-400">Degree</label>
            <input
              type="text"
              value={localEducation.degree}
              onChange={(e) => setLocalEducation({...localEducation, degree: e.target.value})}
              className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-400">School</label>
            <input
              type="text"
              value={localEducation.school}
              onChange={(e) => setLocalEducation({...localEducation, school: e.target.value})}
              className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-400">Period</label>
            <input
              type="text"
              value={localEducation.period}
              onChange={(e) => setLocalEducation({...localEducation, period: e.target.value})}
              className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
            />
          </div>
          <button
            onClick={handleSaveEducation}
            className="mt-4 bg-[#6366f1] hover:bg-[#5457e5] text-white font-bold py-2 px-4 rounded"
          >
            Save Education
          </button>
        </div>

        {/* Contact Section */}
        <div className="bg-[#1a1d23] shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gradient mb-4">Contact</h2>
          <div>
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              value={localContact.email}
              onChange={(e) => setLocalContact({...localContact, email: e.target.value})}
              className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-400">LinkedIn</label>
            <input
              type="url"
              value={localContact.linkedin}
              onChange={(e) => setLocalContact({...localContact, linkedin: e.target.value})}
              className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-400">GitHub</label>
            <input
              type="url"
              value={localContact.github}
              onChange={(e) => setLocalContact({...localContact, github: e.target.value})}
              className="mt-1 block w-full rounded-md bg-[#252a34] border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-300"
            />
          </div>
          <button
            onClick={handleSaveContact}
            className="mt-4 bg-[#6366f1] hover:bg-[#5457e5] text-white font-bold py-2 px-4 rounded"
          >
            Save Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel