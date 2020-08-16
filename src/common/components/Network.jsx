import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Tooltip } from 'antd'
import { LinkedinFilled, FacebookFilled, GithubFilled } from '@ant-design/icons'
import LinkNewTab from './LinkNewTab'

const Network = ({ className }) => (
  <div className={className}>
    <LinkNewTab href="https://www.linkedin.com/in/poosarn-moolmuang/">
      <Tooltip title="Visit my LinkedIn">
        <LinkedinFilled />
      </Tooltip>
    </LinkNewTab>
    <LinkNewTab href="https://www.facebook.com/ppmeemee">
      <Tooltip title="Visit my Facebook">
        <FacebookFilled />
      </Tooltip>
    </LinkNewTab>
    <LinkNewTab href="https://github.com/phumoonlight/">
      <Tooltip title="Visit my GitHub">
        <GithubFilled />
      </Tooltip>
    </LinkNewTab>
  </div>
)

Network.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Network)`
  display: flex;
  justify-content: center;
  background: #dadada75;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  a {
    font-size: 50px;
    margin-left: 25px;
    margin-right: 25px;
    color: #414141;
    transition: .15s;
  }
  a:hover {
    color: #0066ff;
    transform: scale(1.05);
  }
`
