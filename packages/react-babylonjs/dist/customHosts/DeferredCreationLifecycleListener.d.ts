import { Scene } from '@babylonjs/core/scene.js';
import { Nullable } from '@babylonjs/core/types.js';
import { CreatedInstance } from '../CreatedInstance';
import BaseLifecycleListener from './BaseLifecycleListener';
export default abstract class DeferredCreationLifecycleListener<T, U> extends BaseLifecycleListener<T, U> {
    /**
     * Not part of LifecycleListener interface - needed by template method 'onMount'.
     */
    abstract createInstance: (instance: CreatedInstance<T>, scene: Scene, props: any) => Nullable<T>;
    onMount(instance: CreatedInstance<T>): void;
}
