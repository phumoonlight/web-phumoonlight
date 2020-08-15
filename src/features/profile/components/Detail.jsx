import React from 'react'
import { Divider } from 'antd'
import style from './Detail.module.css'

const Detail = () => (
  <div className={style.root}>
    <div className={style.container}>
      <img src="/images/profile-pic.jpg" alt="profile" />
      <div className={style.detail}>
        <h2>ABOUT 📝</h2>
        <div>New graduate. Self learner. Can improve. Never perfect.</div>
      </div>
      <Divider />
      <div className={style.detail}>
        <h2>EDUCATION 📚</h2>
        <div>
          <div>2016 - 2020</div>
          <div>Bachelor of Science, Computer Science</div>
          <div>Maejo University</div>
        </div>
      </div>
      <Divider />
      <div className={style.detail}>
        <h2>SKILLS 👨🏻‍💻</h2>
        <div className={style.skill}>
          <h3>Languages</h3>
          <div>JavaScript ES6, HTML5, CSS3, PHP, SQL</div>
        </div>
        <div className={style.skill}>
          <h3>Framework & Libraries</h3>
          <div>React, Next.js, Ant Design, jQuery, Expressjs, Mongoose, Jest</div>
        </div>
        <div className={style.skill}>
          <h3>Tools</h3>
          <div>Node.js, SourceTree, Git, Postman</div>
        </div>
        <div className={style.skill}>
          <h3>Others</h3>
          <div>Self learning, Google search</div>
        </div>
      </div>
      <Divider />
    </div>
  </div>
)

export default Detail
