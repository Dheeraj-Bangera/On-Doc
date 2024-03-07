import React from 'react'
import bgimage from '../../../Assets/banner.png'

var bannerStyle = {
  width : "100%",
  backgroundImage: `url(${bgimage})`,
  backgroundSize: "100%",
  height: "60vh",
  backgroundRepeat: "no-repeat",
}

const Banner = () => {
  return (
    <>
    <div style={bannerStyle}></div>
    </>
  )
}

export default Banner