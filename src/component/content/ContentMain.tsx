import React from 'react'
import Home from './fragment/HomeFragment'
import Netdata from './fragment/NetdataFragment'

interface MainProps {
  selectedNav : string
}

function Main (props : MainProps) {
  const selectedNav = props.selectedNav
  return (selectedNav === 'home') ? <Home /> : <Netdata />
}

export default Main
