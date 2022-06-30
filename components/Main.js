import React from 'react'
import LiveChannels from './LiveChannels'
import Hero from './Hero'
import IconBar from './IconBar'

function Main() {
  return (
    <div className="absolute left-[64px] xl:left-[240px]">
        <Hero />
        <LiveChannels />
        <IconBar />
    </div>
  )
}

export default Main;