import React from 'react'
import Head from 'next/head'
import { HEAD } from '../../config'
import PlaygroundCreationLayout from '../../feature-playground/PlaygroundCreationLayout'

const PlaygroundCompressImg: React.FC = () => (
  <>
    <Head>
      <title>{HEAD.title.playgroundCompressImg}</title>
    </Head>
    <PlaygroundCreationLayout title="CompressImg" />
  </>
)

export default PlaygroundCompressImg
