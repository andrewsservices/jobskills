import Skill from './Skill'

const SkillList = ({skillArray,deleteSkill,sendSkillsandCount}) => {

    const uniqueSkills = [...new Set(skillArray)]


    return(
        <div className="skillList">
            {
                uniqueSkills.map(skill=>{
                    return(
                        <Skill
                            skill={skill}
                            key={skill}
                            deleteSkill={(e)=>deleteSkill(e)}
                            sendSkillsandCount={(e)=>sendSkillsandCount(e)}
                        />
                    )

                })
            }
        </div>
    )
}

export default SkillList