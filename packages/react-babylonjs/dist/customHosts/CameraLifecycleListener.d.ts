import { Camera } from '@babylonjs/core/Cameras/camera.js';
import { CreatedInstance } from '../CreatedInstance';
import { FiberCameraProps } from '../generatedProps';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class CameraLifecycleListener extends BaseLifecycleListener<Camera, FiberCameraProps> {
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onMount(instance: CreatedInstance<any>): void;
}
