import React from 'react'
import styled from 'styled-components'
import { Switch } from 'antd'
import PlaygroundHeader from './PlaygroundHeader'

const StyledContainer = styled.div`
  text-align: center;
  border: solid black 1px;
  padding-top: 250px;
  padding-bottom: 250px;
  margin-bottom: 25px;
  button {
    transform: scale(2.5);
  }
`

const PlaygroundFunctionLightSwitch: React.FC = () => {
  const [islightOn, setIsLightOn] = React.useState(true)
  const toggleLight = () => setIsLightOn((prevState) => !prevState)
  const toggle = {
    background: islightOn ? 'white' : '#333945',
    textColor: islightOn ? 'black' : 'white',
    statusAsText: islightOn ? ' ON' : ' OFF',
  }
  return (
    <StyledContainer style={{ background: toggle.background }}>
      <PlaygroundHeader
        title={`LIGHT SWITCH : ${toggle.statusAsText}`}
        color={toggle.textColor}
      />
      <Switch defaultChecked onChange={toggleLight} />
    </StyledContainer>
  )
}

export default PlaygroundFunctionLightSwitch
