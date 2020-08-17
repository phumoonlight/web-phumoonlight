import React from 'react'
import PropTypes from 'prop-types'

const PageLayout = ({ children }) => <main>{children}</main>

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
