import React from 'react'
import LiveChannels from './LiveChannels'
import Hero from './Hero'
import IconBar from './IconBar'
import Categories from './Categories'

function Main() {
  return (
    <div className="absolute left-[64px] xl:left-[240px]">
        <Hero />
        <LiveChannels />
        <IconBar />
        <Categories />
    </div>
  )
}

export default Main;