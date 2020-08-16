import React from 'react'
import Head from 'next/head'
import { HEAD } from '../../config'
import PlaygroundFunctionLayout from '../../features/playground/PlaygroundFunctionLayout'
import PlaygroundFunctionContext from '../../features/playground/PlaygroundFunctionContext'

const PlaygroundLightSwitch = () => (
  <PlaygroundFunctionContext.Provider value={{ title: 'LightSwitch' }}>
    <Head>
      <title>{HEAD.title.playgroundLightSwitch}</title>
    </Head>
    <PlaygroundFunctionLayout />
  </PlaygroundFunctionContext.Provider>
)
export default PlaygroundLightSwitch
