# react-native-babylonjs

[![npm version](http://img.shields.io/npm/v/react-native-babylonjs.svg?style=flat-square)](https://npmjs.org/package/react-native-babylonjs "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-babylonjs.svg?style=flat-square)](https://npmjs.org/package/react-native-babylonjs "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-babylonjs.svg?style=flat-square)](https://npmjs.org/package/react-native-babylonjs "View this project on npm")
[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20web-989898.svg?style=flat-square)](https://npmjs.org/package/react-native-babylonjs "View this project on npm")

There are 3 ways to use babylonjs with react-native

1. Official [@babylonjs/react-native](https://www.npmjs.com/package/@babylonjs/react-native)
2. `react-babylonjs` + `@babylonjs/react-native` as described in <https://github.com/brianzinn/react-babylonjs#react-native>
3. `react-native-babylonjs` + `@flyskywhy/react-native-gcanvas`

Performance: `@babylonjs/react-native` with JSI should be better.

MultiView: `react-native-babylonjs` can open many `View`, while [@babylonjs/react-native](https://www.npmjs.com/package/@babylonjs/react-native) said `only one EngineView can be active`.

Convenient: With `react-native-babylonjs`, the [react-babylonjs](https://github.com/brianzinn/react-babylonjs) multiple touches demo [Drag 'n' Drop](https://brianzinn.github.io/create-react-app-babylonjs/dragNdrop) just ported a few codes to [react -> react-native](https://github.com/flyskywhy/GCanvasRNExamples/commit/c7ba86b), here is the result.

<img src="https://raw.githubusercontent.com/flyskywhy/GCanvasRNExamples/master/assets/BabylonjsDragNDrop.gif" width="480">

## Install react-native-babylonjs

    npm install react-native-babylonjs @flyskywhy/react-native-gcanvas @babylonjs/core @babylonjs/gui

If your textures are stored in APP not on Web, you should also `npm install react-native-fs react-native-unimodules@0.12.0` and write codes ref to this commit [react -> react-native: `babylonjs Non-Declarative` works well on Android with new version @flyskywhy/react-native-gcanvas support 3d game engine babylonjs](https://github.com/flyskywhy/GCanvasRNExamples/commit/686eb9f).

## Use react-native-babylonjs
Ref to `react-babylonjs` described below and babylonjs examples in <https://github.com/flyskywhy/GCanvasRNExamples>.

`react-native-babylonjs` is touchable by default, If don't want it be touchable, need set props `touchActionNone={true}` e.g. `<Engine touchActionNone={true} />`.

`react-native-babylonjs` support `.glb` not `.gltf`.
```
import dataUri from 'data-uri.macro';
import {SceneLoader} from '@babylonjs/core';
import '@babylonjs/loaders/glTF';
const christmasTreeFile = dataUri('../images/LightTree/christmas-tree.glb');

  onSceneMount = async (e) => {
    const {canvas, scene} = e;
    ...
    SceneLoader.ImportMeshAsync(
      '',

      // 'https://raw.githubusercontent.com/orbitgw/Chirstmas-Tree/master/src/model/',
      // 'christmas-tree.glb',
// use above or below
      '',
      christmasTreeFile,

      scene,
    ).then((result) => {
      const christmasTree = result.meshes[1];
      christmasTree.position.set(0, 250, 0);
      christmasTree.scalingDeterminant = 25;

      const standardMaterial = new StandardMaterial('redMat', scene);
      standardMaterial.diffuseColor = new Color4(0.4, 0.4, 0.4, 1);
      standardMaterial.specularColor = new Color4(0.4, 0.4, 0.4, 1);
      standardMaterial.emissiveColor = new Color4(0.0, 0.16, 0.0, 1);

      christmasTree.material = standardMaterial;
    });
  };
```
and need below hack to avoid  `Cannot create URL for blob`
```
sed -i -e "s/this.skipMaterials = false/this.skipMaterials = true/" node_modules/@babylonjs/loaders/glTF/glTFFileLoader.js
```
## Feature of react-native-babylonjs
Not support [Post Processes](https://doc.babylonjs.com/features/featuresDeepDive/postProcesses) yet.

### Memo when debug Post Processes
On Android, if uncomment `pipeline.depthOfFieldEnabled = true;` in `/src/nonDeclarative.js` ，will got black screen (and got glGetError()=GL_INVALID_FRAMEBUFFER_OPERATION after glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_SHORT, 0)), then if put `if(postProcess.name === 'circleOfConfusion')` before `this._postProcesses.push(postProcess);` in `@babylonjs v5.1.0/core/Cameras/camera.js`, will got pink screen. This maybe bug of`@babylonjs v5.1.0` ref to `https://developer.vuforia.com/forum/unity/black-screen-android-8010`, or maybe Mali GPU ref to `https://stackoverflow.com/questions/46483852/gl-invalid-framebuffer-operation-framebuffer-is-not-complete-or-incompatible-wi`, or maybe WebGL/OpenGLES version ref to `https://forum.unity.com/threads/webgl-on-android-only-works-in-fullscreen.914435/`, or maybe `gl.getExtension("OES_texture_float")` is false so that `ThinEngine.prototype._canRenderToFramebuffer` is false, or maybe FrameBuffer size should be power of 2 (I tried to set GCanvasView to `256x256` and change `this._gl.drawingBufferWidth` to `this._gl.canvas.width` in `@babylonjs v5.1.0/core/Engines/thinEngine.js` so that `width, height` in `ThinEngine.prototype._setupFramebufferDepthAttachments` will be `256, 256` but no effect, and needPOTTextures in `@babylonjs v5.1.0/core/Engines/thinEngine.js` should be true, and if not change `this._gl.drawingBufferWidth` to `this._gl.canvas.width` will GL_INVALID_FRAMEBUFFER_OPERATION after glDrawElements), or cause by WebGL can `GL_DEPTH_STENCIL` but OpenGL ES will getError so use `GL_DEPTH24_STENCIL8` instead by `renderbufferStorage()` in https://github.com/flyskywhy/react-native-gcanvas/blob/master/packages/gcanvas/src/context/webgl/RenderingContext.js , or since https://blenderartists.org/t/purple-material-texture-is-driving-me-nuts/1371196/9 and https://stackoverflow.com/questions/72931171/in-unity-custom-shader-materials-appear-pink said pink generally means the material (or corresponding shader) has problem, maybe need test glFramebufferTexture2D in `@flyskywhy/react-native-gcanvas`, I have no clue, so just not use post processes.

## Memo when debug babylonjs

`if (!reflectionTexture.isReadyOrNotBlocking())` in `@babylonjs v5.1.0/core/Materials/PBR/pbrBaseMaterial.js` means whether `url` in `CubeTexture.CreateFromPrefilteredData()` is downloaded.

`_useFinalCode()` in `@babylonjs v5.1.0/core/Materials/effect.js` shows the shaders name that babylonjs used.

`_this._hdr` in `@babylonjs v5.1.0/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.js`, on Web is true, on Android is false, thus cause there is no 'imageProcessing' when enable some Post Process on Android ref to `DefaultRenderingPipeline.prototype._buildPipeline`.

`PostProcessManager.prototype._prepareFrame` and `PostProcessManager.prototype._finalizeFrame` in `@babylonjs v5.1.0/core/PostProcesses/postProcessManager.js` are called by `Scene.prototype._renderForCamera` in `@babylonjs v5.1.0/core/scene.js` to process camera as targetTexture?

---

---

Forked from [react-babylonjs](https://github.com/brianzinn/react-babylonjs), below is its README.

---

---
# react-babylonjs

> _'react-babylonjs'_ integrates the Babylon.js real time 3D engine with React

`react-babylonjs` lets you build your scene and components using a familiar
declarative syntax with the benefits of reusable components and hooks. The
Babylon.js API is mostly covered declaratively thanks to code generation and
even custom props allow you to declaratively add shadows, physics, 3D models,
attach 2D/3D UI to meshes, etc.

Fully supports hooks. Full support for TypeScript with auto-completion on
elements and compile time checks. Context API and hooks provide easy access to
Scene/Engine/Canvas.

[![NPM version](http://img.shields.io/npm/v/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)
[![NPM downloads](http://img.shields.io/npm/dm/react-babylonjs.svg?style=flat-square)](https://www.npmjs.com/package/react-babylonjs)

## How to Install

```sh
$ npm i react-babylonjs @babylonjs/core @babylonjs/gui
```

OR

```sh
$ yarn add react-babylonjs @babylonjs/core @babylonjs/gui
```

_No third party dependencies outside of React + babylon.js_ If you are upgrading
from 2.x please follow the breaking changes guide:

> [3.0 breaking changes](docs/breaking-changes-2.x-to-3.0.md)

## Models

If you are using 3D models ensure you have added the `@babylonjs/loaders` NPM.
It is not a direct dependency, but registers loaders as plugins via imports with
side effects:

- Register **all** model types `import @babylonjs/loaders;`
- OBJ `import '@babylonjs/loaders/OBJ';`
- glTF `import '@babylonjs/loaders/glTF';`

_(more instructions on model loading in ES6
[here](https://doc.babylonjs.com/divingDeeper/developWithBjs/treeShaking#loaders)
)_

# Usage Styles

`react-babylonjs` tries to remain unopinionated about how you integrate
BabylonJS with React. This module provides a 100% declarative option and/or you
can customise by adding code. There are lots of escape hatches where you can
switch to imperative coding and direct access to objects.

## Connecting the pieces

If you are new to React or babylon.js (or both) there is some learning ahead.
The babylon.js documentation site is really useful for understanding the basics
of lighting, cameras, etc. This project aims to make easy to integrate those
into React using JSX.

Here we re-use a `SpinningBox` component that can be clicked or hovered. These
reusable components can be used to compose a declarative scene. We are using
hooks for the clicking, hovering and spinning.

![Connecting the pieces](https://raw.githubusercontent.com/brianzinn/react-babylonjs/master/docs/images/react-babylonjs-boxes.gif)

```jsx
import React, { useRef, useState } from 'react'
import {
  Engine,
  Scene,
  useBeforeRender,
  useClick,
  useHover,
} from 'react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core'

const DefaultScale = new Vector3(1, 1, 1)
const BiggerScale = new Vector3(1.25, 1.25, 1.25)

const SpinningBox = (props) => {
  // access Babylon scene objects with same React hook as regular DOM elements
  const boxRef = useRef(null)

  const [clicked, setClicked] = useState(false)
  useClick(() => setClicked((clicked) => !clicked), boxRef)

  const [hovered, setHovered] = useState(false)
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef
  )

  // This will rotate the box on every Babylon frame.
  const rpm = 5
  useBeforeRender((scene) => {
    if (boxRef.current) {
      // Delta time smoothes the animation.
      var deltaTimeInMillis = scene.getEngine().getDeltaTime()
      boxRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
    }
  })

  return (
    <box
      name={props.name}
      ref={boxRef}
      size={2}
      position={props.position}
      scaling={clicked ? BiggerScale : DefaultScale}
    >
      <standardMaterial
        name={`${props.name}-mat`}
        diffuseColor={hovered ? props.hoveredColor : props.color}
        specularColor={Color3.Black()}
      />
    </box>
  )
}

export const SceneWithSpinningBoxes = () => (
  <div>
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
      <Scene>
        <arcRotateCamera
          name="camera1"
          target={Vector3.Zero()}
          alpha={Math.PI / 2}
          beta={Math.PI / 4}
          radius={8}
        />
        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />
        <SpinningBox
          name="left"
          position={new Vector3(-2, 0, 0)}
          color={Color3.FromHexString('#EEB5EB')}
          hoveredColor={Color3.FromHexString('#C26DBC')}
        />
        <SpinningBox
          name="right"
          position={new Vector3(2, 0, 0)}
          color={Color3.FromHexString('#C8F4F9')}
          hoveredColor={Color3.FromHexString('#3CACAE')}
        />
      </Scene>
    </Engine>
  </div>
)
```

[code sandbox for above](https://codesandbox.io/s/epic-darwin-tohk0)

## Hooks, Shadows and Physics (and optionally TypeScript, too)

You can declaratively use many features together - here only the button click
handler actually has any code - and we have declarative Physics, GUI, Lighting
and Shadows. demo:
[Bouncy demo](https://brianzinn.github.io/react-babylonjs/?path=/story/physics--bouncy-playground-story)

```jsx
import React, { useRef } from 'react';
// full code at https://github.com/brianzinn/create-react-app-typescript-babylonjs

const App: React.FC = () => {
  let sphereRef = useRef<Nullable<Mesh>>();

  const onButtonClicked = () => {
    if (sphereRef.current) {
      sphereRef.current.physicsImpostor!.applyImpulse(
        Vector3.Up().scale(10),
        sphereRef.current.getAbsolutePosition()
      );
    }
  };

  return (
    <Engine antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
      <Scene enablePhysics={[gravityVector, new CannonJSPlugin()]}>
        <arcRotateCamera name="arc" target={ new Vector3(0, 1, 0) }
          alpha={-Math.PI / 2} beta={(0.5 + (Math.PI / 4))}
          radius={4} minZ={0.001} wheelPrecision={50}
          lowerRadiusLimit={8} upperRadiusLimit={20} upperBetaLimit={Math.PI / 2}
        />
        <hemisphericLight name='hemi' direction={new Vector3(0, -1, 0)} intensity={0.8} />
        <directionalLight name="shadow-light" setDirectionToTarget={[Vector3.Zero()]} direction={Vector3.Zero()} position = {new Vector3(-40, 30, -40)}
          intensity={0.4} shadowMinZ={1} shadowMaxZ={2500}>
          <shadowGenerator mapSize={1024} useBlurExponentialShadowMap={true} blurKernel={32}
            shadowCasters={["sphere1", "dialog"]} forceBackFacesOnly={true} depthScale={100}
          />
        </directionalLight>
        <sphere ref={sphereRef} name="sphere1" diameter={2} segments={16} position={new Vector3(0, 2.5, 0)}>
          <physicsImpostor type={PhysicsImpostor.SphereImpostor} _options={{
              mass: 1,
              restitution: 0.9
          }} />
          <plane name="dialog" size={2} position={new Vector3(0, 1.5, 0)}>
            <advancedDynamicTexture name="dialogTexture" height={1024} width={1024} createForParentMesh={true} hasAlpha={true}>
              <rectangle name="rect-1" height={0.5} width={1} thickness={12} cornerRadius={12}>
                  <rectangle>
                    <babylon-button name="close-icon" background="green" onPointerDownObservable={onButtonClicked}>
                      <textBlock text={'\uf00d click me'} fontFamily="FontAwesome" fontStyle="bold" fontSize={200} color="white" />
                    </babylon-button>
                  </rectangle>
              </rectangle>
            </advancedDynamicTexture>
          </plane>
        </sphere>

        <ground name="ground1" width={10} height={10} subdivisions={2} receiveShadows={true}>
          <physicsImpostor type={PhysicsImpostor.BoxImpostor} _options={{
              mass: 0,
              restitution: 0.9
          }} />
        </ground>
        <vrExperienceHelper webVROptions={{ createDeviceOrientationCamera: false }} enableInteractions={true} />
      </Scene>
    </Engine>
  );
}
```

## Developer Experience and Fast Refresh

With declarative (TSX/JSX) coding and fast refresh, you experience the same
development workflow in 3D - ie: save changes in your editor and see them
immediately in the browser. Note in this capture when the light is dimmed that
the state changes persist even **after** code updates and scene refresh.

![babylon.js Fast Refresh](https://raw.githubusercontent.com/brianzinn/react-babylonjs/master/docs/images/react-babylonjs-hmr.gif)

## API

This project uses code generation, which allows fast reconciliation and
excellent typings support.

> [react-babylonjs API](docs/api.md)

## Release History and changes

> [Changes and commit history](docs/changes.md)

## Storybook

~50 sample web pages with viewable source code on
[github pages](https://brianzinn.github.io/react-babylonjs/).

## Example Projects

- [Create React App (JavaScript)](https://github.com/brianzinn/create-react-app-babylonjs)
  CRA JavaScript implementation. Github pages has live examples of typical and
  declarative usage some with Redux.
- [Create React App (TypeScript)](https://github.com/brianzinn/create-react-app-typescript-babylonjs)
  CRA 3 TypeScript. Examples of physics, shadows, etc.

## Contributors

- Huge shout out to [Konsumer](https://github.com/konsumer) that helped bring
  this project to the next level. The ideas and code sandboxes from issue #6
  inspired the code generation and HOC + Context API integration.
- [seacloud9](https://github.com/seacloud9) for adding
  [storybook](https://brianzinn.github.io/react-babylonjs/),
  [GSAP demo](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--gsap-timeline),
  [dynamic terrain](https://brianzinn.github.io/react-babylonjs/?path=/story/babylon-basic--dynamic-terrain)
  (extension) &
  [PIXI demo](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--pixi-story).
- [hookex](https://github.com/hookex) has made the largest contribution :)
  Proper texture handling
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/textures--image-texture),
  Node parenting,
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/babylon-basic--transform-node)
  Full Screen GUI
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/gui--gui-full-screen),
  Effect Layers
  [glow demo](https://brianzinn.github.io/react-babylonjs/?path=/story/special-fx--glow-layer),
  behaviors
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/behaviors--pointer-drag-behavior),
  useHover & useClick hooks
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/hooks--use-hover-event)
  and react-spring integration
  [demo](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--react-spring).
  Author of `react-babylon-spring` -
  https://github.com/hookex/react-babylon-spring.
- [dennemark](https://github.com/dennemark) add support for
  `CascadedShadowGenerator`, `createPortal` and `Html` (project HTML in scene -
  ported from `drei`). Also, stories for
  [Snippet Material](https://brianzinn.github.io/react-babylonjs/?path=/story/babylon-basic--snippet-material)
  and
  ["tunnel" zustand integration](https://brianzinn.github.io/react-babylonjs/?path=/story/integrations--zustand-tunnel).
- [kencyke](https://github.com/kencyke) created a cool multi-canvas + cloud
  point repo that insipired creation of `<pointsCloudSystem .../>` as host
  element.
- [flostellbrink](https://github.com/flostellbrink) fixed the
  `react-babylon-spring` integration and added GH action for Storybook
  ([github pages](https://brianzinn.github.io/react-babylonjs))

> Thanks also to all the people who have contributed with
> issues/questions/discussions. All the great ideas and requests are why this
> project evolved beyond an experiment.

Made with ♥
