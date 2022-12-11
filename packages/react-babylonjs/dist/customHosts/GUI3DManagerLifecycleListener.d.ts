import { GUI3DManager } from '@babylonjs/gui/3D/gui3DManager.js';
import { CreatedInstance } from '../CreatedInstance';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class GUI3DManagerLifecycleListener extends BaseLifecycleListener<GUI3DManager, any> {
    onMount(instance?: CreatedInstance<GUI3DManager>): void;
    /**
     * We may have BoundComponents inbetween gui3d controls.
     */
    addControls(instance: CreatedInstance<any>, last3DGuiControl: CreatedInstance<any>): void;
}
