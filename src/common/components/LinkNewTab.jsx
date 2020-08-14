import React from 'react'
import PropTypes from 'prop-types'

const LinkNewTab = ({ className, href, children }) => (
  <a target="_blank" rel="noreferrer" className={className} href={href}>
    {children}
  </a>
)

LinkNewTab.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

LinkNewTab.defaultProps = {
  className: '',
}

export default LinkNewTab
