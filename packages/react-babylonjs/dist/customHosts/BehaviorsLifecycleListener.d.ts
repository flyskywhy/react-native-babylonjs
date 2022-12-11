import { Behavior } from '@babylonjs/core/Behaviors/behavior.js';
import { CreatedInstance } from '../CreatedInstance';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class BehaviorLifecycleListener extends BaseLifecycleListener<Behavior<any>, any> {
    private behaviorAware;
    private behavior;
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
    onUnmount(): void;
}
