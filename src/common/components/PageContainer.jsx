import React from 'react'
import PropTypes from 'prop-types'

const PageContainer = ({ children }) => <main>{children}</main>

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageContainer
