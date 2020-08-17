import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MenuCardLink } from '../../../common/components'

const MenuList = ({ className }) => (
  <div className={className}>
    <MenuCardLink
      className="menu-card-link"
      href="/playground/lightswitch"
      bannerSrc="/images/playground-banner-lightswitch.jpg"
      title="LIGHT SWITCH"
    />
    <MenuCardLink
      className="menu-card-link"
      href="/playground/compressimg"
      bannerSrc="/images/playground-banner-compressimg.jpg"
      title="COMPRESS IMG"
    />
  </div>
)

MenuList.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(MenuList)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  .menu-card-link {
    transform: translateY(-100px);
  }
  .menu-card-link:hover {
    transform: translateY(-100px) scale(1.05);
  }
`
