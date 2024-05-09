import React from 'react'
import bannerImg from "../../../../assets/bannerimg.jpg"

var bannerStyle = {
  width : "100%",
  height: "60vh",
}

const Banner = () => {
  return (
    <>
    <div style={bannerStyle}>
      <div></div><div className = "tobject-fit"><img src={bannerImg}></img></div>
    </div>
    </>
  )
}

export default Banner