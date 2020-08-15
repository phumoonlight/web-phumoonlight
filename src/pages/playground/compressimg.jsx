import React from 'react'
import Head from 'next/head'
import { HEAD } from '../../config'
import PlaygroundFunctionLayout from '../../features/playground/PlaygroundFunctionLayout'

const PlaygroundCompressImg = () => (
  <>
    <Head>
      <title>{HEAD.title.playgroundCompressImg}</title>
    </Head>
    <PlaygroundFunctionLayout extendedTitle="CompressImg" />
  </>
)

export default PlaygroundCompressImg
