import React from 'react'
import Head from 'next/head'
import { HEAD } from '../../config'
import PlaygroundInnerLayout from '../../features/playground/PlaygroundFunctionLayout'
import PlaygroundFunctionContext from '../../features/playground/PlaygroundFunctionContext'

const PlaygroundLightSwitch = () => (
  <PlaygroundFunctionContext.Provider value={{ title: 'LightSwitch' }}>
    <Head>
      <title>{HEAD.title.playgroundLightSwitch}</title>
    </Head>
    <PlaygroundInnerLayout />
  </PlaygroundFunctionContext.Provider>
)
export default PlaygroundLightSwitch
