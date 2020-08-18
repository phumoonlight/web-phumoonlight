import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'

const MenuCardLink = ({
  className, href, bannerSrc, title, children,
}) => (
  <Link href={href}>
    <div className={className}>
      <img className="banner" src={bannerSrc} alt={title} />
      <div className="title">{title}</div>
      <div className="description">{children}</div>
    </div>
  </Link>
)

MenuCardLink.propTypes = {
  href: PropTypes.string.isRequired,
  bannerSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
}

MenuCardLink.defaultProps = {
  className: '',
  children: '',
}

export default styled(MenuCardLink)`
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
  background-color: #505050;
  border-bottom: solid #2b2b2b 2.5px;
  margin: 10px;
  border-radius: 5px;
  width: 250px;
  transition: .15s;
  :hover {
    box-shadow: 0px 0px 25px 0px rgba(0, 140, 255, 0.85);
  }
  .banner {
    object-fit: cover;
    width: 100%;
    height: 150px;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  .title {
    margin-top: 10px;
    font-size: 25px;
  }
  .description {
    margin-top: 10px;
    margin-bottom: 10px;
    opacity: .75;
  }
`
