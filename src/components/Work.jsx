import React from 'react'
import Axios from 'axios'
import style from './Work.module.css'

const Work = () => {
  const [githubRepos, setGithubRepos] = React.useState([])
  React.useEffect(() => {
    const fetchGithubRepos = async () => {
      const { data } = await Axios.get('https://api.github.com/users/phumoonlight/repos')
      setGithubRepos(data)
    }
    fetchGithubRepos()
  })
  return (
    <div className={style.root}>
      <h2>MY WORK (WEBSITE) 🔨</h2>
      <div className={style.workcontainer}>
        {githubRepos.length && githubRepos
          .filter((repo) => repo.name.includes('web'))
          .map((repo) => (
            <a href={repo.html_url} className={style.repobox}>
              <div>{repo.name}</div>
              <div>{repo.description}</div>
            </a>
          ))}
      </div>
    </div>
  )
}

export default Work
