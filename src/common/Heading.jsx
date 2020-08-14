import React from 'react'
import PropTypes from 'prop-types'
import style from './Heading.module.css'

const Heading = ({ children, backgroundURL }) => {
  const [positionX, setPositionX] = React.useState(0)
  const [positionY, setPositionY] = React.useState(0)
  const handleHover = (e) => {
    setPositionX(e.clientX)
    setPositionY(e.clientY)
  }
  return (
    <div
      className={style.root}
      onMouseMove={handleHover}
      style={{
        background: `url(${backgroundURL})`,
        backgroundPosition: `${positionX / 50}% ${positionY / 50}%`,
      }}
    >
      {children}
    </div>
  )
}

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  backgroundURL: PropTypes.string.isRequired,
}

export default Heading
