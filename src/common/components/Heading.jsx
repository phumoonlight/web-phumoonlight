import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Heading = ({ className, children, backgroundURL }) => {
  const [positionX, setPositionX] = React.useState(0)
  const [positionY, setPositionY] = React.useState(0)
  const setMousePosition = (e) => {
    setPositionX(e.clientX)
    setPositionY(e.clientY)
  }
  return (
    <div
      className={className}
      onMouseMove={setMousePosition}
      style={{
        background: `url(${backgroundURL})`,
        backgroundPosition: `${positionX / 200}% ${positionY / 100}%`,
      }}
    >
      {children}
    </div>
  )
}

Heading.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  backgroundURL: PropTypes.string.isRequired,
}

export default styled(Heading)`
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 40px;
  padding-top: 175px;
  padding-bottom: 175px;
  text-shadow: 2px 2px rgba(0,0,0,1);
`
