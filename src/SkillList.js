import Skill from './Skill'

const SkillList = ({skillArray,deleteSkill,updateCount}) => {

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
                            updateCount={updateCount}
                        />
                    )

                })
            }
        </div>
    )
}

export default SkillList