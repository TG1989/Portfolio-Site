
import { SKILLS } from '../../utils/data'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import { useState } from 'react'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])
  const handleSelectSkill = (data) => {
    setSelectedSkill(data)
  }

  return (
    <section className='skills-container'>
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((i) =>
          (<SkillCard
            key={i.title}
            iconUrl={i.icon}
            title={i.title}
            isActive={selectedSkill.title===i.title}
            onClick={() => {
              handleSelectSkill(i)
            }}
          />)
          )}
        </div>

        <div className='skills-info'>
            <SkillsInfoCard
            heading = {selectedSkill.title}
            skills = {selectedSkill.skills}
            
            />
        </div>



      </div>

    </section>
  )
}

export default Skills