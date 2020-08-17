import React from 'react'
import Head from 'next/head'
import { HEAD } from '../../config'
import PlaygroundCreationLayout from '../../features/playground/PlaygroundCreationLayout'
import PlaygroundCreationContext from '../../features/playground/PlaygroundCreationContext'
import PlaygroundCreationLightSwitch from '../../features/playground/PlaygroundCreationLightSwitch'

const PlaygroundLightSwitch = () => (
  <PlaygroundCreationContext.Provider value={{ title: 'LightSwitch' }}>
    <Head>
      <title>{HEAD.title.playgroundLightSwitch}</title>
    </Head>
    <PlaygroundCreationLayout>
      <PlaygroundCreationLightSwitch />
    </PlaygroundCreationLayout>
  </PlaygroundCreationContext.Provider>
)
export default PlaygroundLightSwitch
