import { Observer } from '@babylonjs/core/Misc/observable.js';
import { Nullable } from '@babylonjs/core/types.js';
import { AnyCustomProps, CustomProps } from './CustomProps';
import { LifecycleListener } from './LifecycleListener';
import { HasPropsHandlers } from './PropsHandler';
export interface InstanceMetadataParameter {
    delayCreation?: boolean;
    shadowGenerator?: boolean;
    acceptsMaterials?: boolean;
    isScene?: boolean;
    isShadowLight?: boolean;
    isEnvironment?: boolean;
    isTargetable?: boolean;
    isNode?: boolean;
    isMesh?: boolean;
    isMaterial?: boolean;
    isGUI3DControl?: boolean;
    isGUI2DControl?: boolean;
    isGUI2DGrid?: boolean;
    isTexture?: boolean;
    customType?: boolean;
    isCamera?: boolean;
    isEffectLayer?: boolean;
    isGlowLayer?: boolean;
    isBehavior?: boolean;
    isShadowGenerator?: boolean;
    isUtilityLayerRenderer?: boolean;
    isGizmo?: boolean;
    isLayer?: boolean;
}
export interface CreatedInstanceMetadata extends InstanceMetadataParameter {
    className: string;
}
/**
 * CreatedInstance simply contains a Babylon object and a fiber object able to detect and process updates via props to the BabylonObject.
 *
 * The parent/child is part of the Fiber Reconciler and helps attach materials/parenting/cameras/shadows/etc.
 */
export interface CreatedInstance<T> {
    /**
     * During lifecycle init process for types delaying creation this may be unset (PhysicsImpostor/ShadowGenerator)
     * The 'hostInstance' may depend on another object (ie: mesh/light source)
     */
    hostInstance?: T;
    metadata: CreatedInstanceMetadata;
    parent: CreatedInstance<any> | null;
    children: CreatedInstance<any>[];
    state?: any;
    customProps: AnyCustomProps;
    propsHandlers?: HasPropsHandlers<T>;
    lifecycleListener?: LifecycleListener<T>;
    deferredCreationProps?: any;
    observers: Record<string, Nullable<Observer<any>>>;
}
export declare class CreatedInstanceImpl<T> implements CreatedInstance<T> {
    readonly hostInstance: T;
    readonly metadata: CreatedInstanceMetadata;
    parent: CreatedInstance<any> | null;
    children: CreatedInstance<any>[];
    propsHandlers: HasPropsHandlers<T>;
    customProps: CustomProps;
    observers: Record<string, Nullable<Observer<any>>>;
    constructor(hostInstance: T, metadata: CreatedInstanceMetadata, fiberObject: HasPropsHandlers<T>, customProps: CustomProps);
}
