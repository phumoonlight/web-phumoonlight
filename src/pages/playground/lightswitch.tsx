import React from 'react'
import Head from 'next/head'
import { HEAD } from '../../config'
import PlaygroundCreationLayout from '../../feature-playground/PlaygroundCreationLayout'
import PlaygroundCreationLightSwitch from '../../feature-playground/PlaygroundCreationLightSwitch'

const PlaygroundLightSwitch: React.FC = () => (
  <>
    <Head>
      <title>{HEAD.title.playgroundLightSwitch}</title>
    </Head>
    <PlaygroundCreationLayout title="LightSwitch">
      <PlaygroundCreationLightSwitch />
    </PlaygroundCreationLayout>
  </>
)

export default PlaygroundLightSwitch
