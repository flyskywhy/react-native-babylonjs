import { Camera } from '@babylonjs/core/Cameras/camera.js';
import { Scene } from '@babylonjs/core/scene.js';
import { Nullable } from '@babylonjs/core/types.js';
/**
 * Handles creating a camera and attaching/disposing.
 * TODO: add new 4.2 parameters: useCtrlForPanning & panningMouseButton
 * @param createCameraFn function that creates and returns a camera
 * @param autoAttach Attach the input controls (default true)
 * @param noPreventDefault Events caught by controls should call prevent default
 * @param useCtrlForPanning (ArcRotateCamera only)
 * @param panningMoustButton (ArcRotateCamera only)
 */
export declare const useCamera: <T extends Camera>(createCameraFn: (scene: Scene) => T, autoAttach?: boolean, noPreventDefault?: boolean) => Nullable<T>;
