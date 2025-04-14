import React from 'react'

export const HorizontalScroll = ({children}) => {
  return (
    <div className="horizontal-scroll overflow-x-scroll">
        {children}
    </div>
  )
}
