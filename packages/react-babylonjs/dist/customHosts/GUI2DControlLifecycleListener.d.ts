import { Control } from '@babylonjs/gui/2D/controls/control.js';
import { CreatedInstance } from '../CreatedInstance';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class GUI2DControlLifecycleListener extends BaseLifecycleListener<Control, any> {
    onMount(instance?: CreatedInstance<Control>): void;
    /**
     * BabylonJS won't re-add the same control twice, so it's a safe operation to add.
     *
     * @param instance contol to recursively add children to.
     */
    addControls(instance: CreatedInstance<any>): void;
}
