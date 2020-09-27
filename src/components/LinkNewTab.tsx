import React from 'react'

interface LinkNewTabProps {
  className?: string
  href?: string
}

const LinkNewTab: React.FC<LinkNewTabProps> = ({ className, href, children }) => (
  <a target="_blank" rel="noreferrer" className={className} href={href}>
    {children}
  </a>
)

export default LinkNewTab
