import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Switch } from 'antd'
import { PlaygroundHeading } from './components'

const PlaygroundFunctionLightSwitch = ({ className }) => {
  const [islightOn, setIsLightOn] = React.useState(true)
  const toggleLight = () => setIsLightOn((prev) => !prev)
  return (
    <div className={className} style={{ background: islightOn ? 'white' : '#333945' }}>
      <PlaygroundHeading color={islightOn ? 'black' : 'white'}>
        LIGHT SWITCH
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
  padding-bottom: 400px;
  button {
    transform: scale(2.5);
  }
`
