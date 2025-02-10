import { Icon } from '@iconify/react';
import React from 'react'

function Loading() {
  return (
    <div
    className={`  flex items-center justify-center h-screen text-7xl bg-pry-bg`}
  >
    <Icon className="text-the-white" icon="eos-icons:bubble-loading" />
  </div>
  )
}

export default Loading