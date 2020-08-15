import React from 'react'
// import PropTypes from 'prop-types'
import Link from 'next/link'
// import styled from 'styled-components'
import { Breadcrumb } from 'antd'
import { Nav, Network, StyledLink } from '../../common/components'
import PlaygroundFunctionContext from './PlaygroundFunctionContext'
import PlaygroundFunctionLightSwitch from './PlaygroundFunctionLightSwitch'

const getplayGroundFunction = {
  LightSwitch: <PlaygroundFunctionLightSwitch />,
}

const PlaygroundFunctionLayout = () => {
  const { title } = React.useContext(PlaygroundFunctionContext)
  return (
    <div>
      <Nav>
        <Breadcrumb.Item>
          <Link href="/playground">
            <StyledLink>Playground</StyledLink>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {title}
        </Breadcrumb.Item>
      </Nav>
      {getplayGroundFunction[title]}
      <Network />
    </div>
  )
}

// PlaygroundFunctionLayout.propTypes = {
//   extendedTitle: PropTypes.string.isRequired,
// }

export default PlaygroundFunctionLayout
