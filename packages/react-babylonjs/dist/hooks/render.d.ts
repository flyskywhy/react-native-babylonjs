/// <reference types="react" />
import { EventState } from '@babylonjs/core/Misc/observable.js';
import { Scene } from '@babylonjs/core/scene.js';
export declare type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void;
/**
 * Register a callback for before the scene renders.
 *
 * @param callback called using onBeforeRender functionality of scene
 * @param mask the mask used to filter observers
 * @param insertFirst if true will be inserted at first position, if false (default) will be last position.
 * @param callOnce only call the callback once
 */
export declare const useBeforeRender: (callback: OnFrameRenderFn, mask?: number | undefined, insertFirst?: boolean | undefined, callOnce?: boolean | undefined, deps?: import("react").DependencyList) => void;
/**
 * Register a callback for after the scene renders.
 *
 * @param callback called using onBeforeRender functionality of scene
 * @param mask the mask used to filter observers
 * @param insertFirst if true will be inserted at first position, if false (default) will be last position.
 * @param callOnce only call the callback once
 */
export declare const useAfterRender: (callback: OnFrameRenderFn, mask?: number | undefined, insertFirst?: boolean | undefined, callOnce?: boolean | undefined) => void;
