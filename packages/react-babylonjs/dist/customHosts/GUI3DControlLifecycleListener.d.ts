import { Control3D } from '@babylonjs/gui/3D/controls/control3D.js';
import { CreatedInstance } from '../CreatedInstance';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class GUI3DControlLifecycleListener extends BaseLifecycleListener<Control3D, any> {
    onMount(instance: CreatedInstance<Control3D>): void;
    addControls(instance: CreatedInstance<any>, last3DGuiControl: CreatedInstance<any>): void;
}
