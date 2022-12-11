import { Scene } from '@babylonjs/core/scene.js';
import { CreatedInstance } from '../CreatedInstance';
import { LifecycleListener } from '../LifecycleListener';
export default abstract class BaseLifecycleListener<T, U> implements LifecycleListener<T> {
    protected scene: Scene;
    protected props: U;
    constructor(scene: Scene, props: U);
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): void;
    onMount(instance: CreatedInstance<T>): void;
    onUnmount(): void;
}
