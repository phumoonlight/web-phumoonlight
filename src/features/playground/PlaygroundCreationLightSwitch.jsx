import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Switch } from 'antd'
import { PlaygroundHeading } from './components'

const PlaygroundFunctionLightSwitch = ({ className }) => {
  const [islightOn, setIsLightOn] = React.useState(true)
  const toggleLight = () => setIsLightOn((prevState) => !prevState)
  const toggle = {
    background: islightOn ? 'white' : '#333945',
    textColor: islightOn ? 'black' : 'white',
    statusAsText: islightOn ? ' ON' : ' OFF',
  }
  return (
    <div className={className} style={{ background: toggle.background }}>
      <PlaygroundHeading color={toggle.textColor}>
        LIGHT SWITCH :
        {toggle.statusAsText}
      </PlaygroundHeading>
      <Switch defaultChecked onChange={toggleLight} />
    </div>
  )
}

PlaygroundFunctionLightSwitch.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(PlaygroundFunctionLightSwitch)`
  text-align: center;
  padding-top: 250px;
  padding-bottom: 300px;
  button {
    transform: scale(2.5);
  }
`
