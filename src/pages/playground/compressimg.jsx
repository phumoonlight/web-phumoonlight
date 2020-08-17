import React from 'react'
import Head from 'next/head'
import { HEAD } from '../../config'
import PlaygroundCreationLayout from '../../features/playground/PlaygroundCreationLayout'
import PlaygroundCreationContext from '../../features/playground/PlaygroundCreationContext'

const PlaygroundCompressImg = () => (
  <PlaygroundCreationContext.Provider value={{ title: 'CompressImg' }}>
    <Head>
      <title>{HEAD.title.playgroundCompressImg}</title>
    </Head>
    <PlaygroundCreationLayout />
  </PlaygroundCreationContext.Provider>
)

export default PlaygroundCompressImg
