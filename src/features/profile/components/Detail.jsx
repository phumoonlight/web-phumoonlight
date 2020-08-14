import React from 'react'
import { Divider } from 'antd'
import style from './Detail.module.css'

const skills = [
  {
    topic: 'Languages',
    content: 'JavaScript ES6, HTML5, CSS3, PHP, SQL',
  },
  {
    topic: 'Framework & Libraries',
    content: 'React, Next.js, Ant Design, jQuery, Mongoose, Jest',
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

const Detail = () => (
  <div className={style.root}>
    <div className={style.container}>
      <h2>ABOUT 📝</h2>
      <div>New graduate. Self learner. Can improve. Never perfect.</div>
      <Divider />
      <h2>EDUCATION 📚</h2>
      <div>
        <div>2016 - 2020</div>
        <div>Bachelor of Science, Computer Science</div>
        <div>Maejo University</div>
      </div>
      <Divider />
      <h2>SKILLS 👨🏻‍💻</h2>
      {skills.map((skill) => (
        <div key={skill.topic} className={style.skill}>
          <h3>{skill.topic}</h3>
          <div>{skill.content}</div>
        </div>
      ))}
    </div>
  </div>
)

export default Detail
