import React from 'react'
import PropTypes from 'prop-types'
import style from './SocialLink.module.css'

const SocialLink = ({ icon, url }) => (
  <a className={style.root} href={url} target="_blank" rel="noreferrer">{icon}</a>
)

SocialLink.propTypes = {
  icon: PropTypes.element.isRequired,
  url: PropTypes.string.isRequired,
}

export default SocialLink
