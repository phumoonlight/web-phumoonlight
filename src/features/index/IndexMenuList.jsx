import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LinkMenuCard } from '../../common/components'

const IndexMenuList = ({ className }) => (
  <div className={className}>
    <LinkMenuCard
      href="/profile"
      className="menu"
      bannerSrc="/images/profile-main-banner.jpg"
      title="PROFILE"
    >
      View my profile.
    </LinkMenuCard>
    <LinkMenuCard
      href="/playground"
      className="menu"
      bannerSrc="/images/playground-main-banner.jpg"
      title="PLAYGROUND"
    >
      View my creations.
    </LinkMenuCard>
    <LinkMenuCard
      href="/resume.pdf"
      className="menu"
      bannerSrc="/images/resume-main-banner.jpg"
      title="RESUME"
    >
      View my resume.
    </LinkMenuCard>
  </div>
)

IndexMenuList.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(IndexMenuList)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .menu {
    transform: translateY(-100px);
  }
  .menu:hover {
    transform: translateY(-100px) scale(1.05);
  }
`
