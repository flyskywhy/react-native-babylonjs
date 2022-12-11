import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight.js';
import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator.js';
import { Scene } from '@babylonjs/core/scene.js';
import { Nullable } from '@babylonjs/core/types.js';
import { CreatedInstance } from '../CreatedInstance';
import DeferredCreationLifecycleListener from './DeferredCreationLifecycleListener';
/**
 * Create a Shadow Generator (CascadedShadowGenerator extends ShadowGenerator, so add/remove shadow casters is from parent class)
 */
export default abstract class BaseShadowGeneratorLifecycleListener<T extends ShadowGenerator, U> extends DeferredCreationLifecycleListener<T, U> {
    private onMeshAddedObservable;
    private onMeshRemovedObservable;
    abstract createShadowGenerator: (mapSize: number, light: DirectionalLight, useFullFloatFirst?: boolean) => T;
    abstract get generatorType(): string;
    createInstance: (instance: CreatedInstance<T>, scene: Scene, props: any) => Nullable<T>;
    onUnmount(): void;
}
