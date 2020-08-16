import React from 'react'
import Head from 'next/head'
import { HEAD } from '../../config'
import PlaygroundFunctionLayout from '../../features/playground/PlaygroundFunctionLayout'
import PlaygroundFunctionContext from '../../features/playground/PlaygroundFunctionContext'

const PlaygroundCompressImg = () => (
  <PlaygroundFunctionContext.Provider value={{ title: 'CompressImg' }}>
    <Head>
      <title>{HEAD.title.playgroundCompressImg}</title>
    </Head>
    <PlaygroundFunctionLayout />
  </PlaygroundFunctionContext.Provider>
)

export default PlaygroundCompressImg
