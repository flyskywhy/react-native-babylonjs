import { PhysicsImpostor } from '@babylonjs/core/Physics/physicsImpostor.js';
import { Scene } from '@babylonjs/core/scene.js';
import { Nullable } from '@babylonjs/core/types.js';
import { CreatedInstance } from '../CreatedInstance';
import DeferredCreationLifecycleListener from './DeferredCreationLifecycleListener';
/**
 * There is a lot going on in the PhysicsImpostor constructor, so we delay instantiation so that we have a target
 * 'object' before creation.
 */
export default class PhysicsImpostorLifecycleListener extends DeferredCreationLifecycleListener<PhysicsImpostor, any> {
    private _parent;
    createInstance: (instance: CreatedInstance<PhysicsImpostor>, scene: Scene, props: any) => Nullable<PhysicsImpostor>;
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
}
