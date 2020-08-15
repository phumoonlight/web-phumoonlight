import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import style from './MenuCardLink.module.css'

const MenuCardLink = ({
  className, href, bannerSrc, title, children,
}) => (
  <Link href={href}>
    <div className={`${style.root} ${className}`}>
      <img className={style.banner} src={bannerSrc} alt={title} />
      <div className={style.title}>{title}</div>
      <div className={style.description}>{children}</div>
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

export default MenuCardLink
