import { Viewport } from '@babylonjs/core/Maths/math.viewport.js';
import { CreatedInstance } from '../CreatedInstance';
import { FiberViewportProps } from '../generatedProps';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class ViewportLifecycleListener extends BaseLifecycleListener<Viewport, FiberViewportProps> {
    onMount(instance?: CreatedInstance<Viewport>): void;
}
