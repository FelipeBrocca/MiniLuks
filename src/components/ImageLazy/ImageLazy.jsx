import React from 'react'

const ImageLazy = ({src, alt, className}) => {
  return (
    <img src={src} alt={alt} className={className} />
  )
}

export default ImageLazy