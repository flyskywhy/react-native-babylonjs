import React, { FC } from 'react'
import { Engine, Scene } from 'react-babylonjs'

export const BasicScene: FC = ({ children }) => (
  <Engine
    antialias
    adaptToDeviceRatio
    canvasId="babylonJS"
    renderOptions={{
      whenVisibleOnly: true,
    }}
  >
    <Scene>{children}</Scene>
  </Engine>
)
