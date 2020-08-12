import React from 'react'
import style from './Skill.module.css'

const skills = [
  {
    topic: 'Languages',
    content: 'JavaScript ES6, HTML5, CSS3, PHP, SQL',
  },
  {
    topic: 'Framework & Libraries',
    content: 'JavaScript ES6, HTML5, CSS3, PHP, SQL',
  },
  {
    topic: 'Tools',
    content: 'Node.js, SourceTree, Git, Postman',
  },
  {
    topic: 'Others',
    content: 'Self learning, Google search',
  },
]

const Skill = () => (
  <div className={style.root}>
    <h2>SKILLS 👨🏻‍💻</h2>
    {skills.map((skill) => (
      <div className={style.skill}>
        <h3>{skill.topic}</h3>
        <div>{skill.content}</div>
      </div>
    ))}
  </div>
)

export default Skill
