import { Scene } from '@babylonjs/core/scene.js';
import { Nullable } from '@babylonjs/core/types.js';
import { CreateInfo } from './codeGenerationDescriptors';
import { CreatedInstanceMetadata } from './CreatedInstance';
import { LifecycleListener } from './LifecycleListener';
import { HasPropsHandlers } from './PropsHandler';
export declare type DynamicHost<T, U> = {
    /**
     * lookup on host element
     */
    hostElementName: string;
    /**
     * null is only valid when the metadata declares a deferred creation and the lifecycle listener creates the instance.
     */
    hostFactory: (scene: Scene) => Nullable<T>;
    propHandlerInstance: HasPropsHandlers<U>;
    createInfo: CreateInfo;
    metadata: CreatedInstanceMetadata;
    lifecycleListenerFactory?: (scene: Scene, props: any) => LifecycleListener<T>;
};
/**
 * Experimental - this will change - just a demo!
 *
 * Allows dynamic registration of host elements that the reconciler will take into consideration (case sensitive).
 */
export declare class HostRegistrationStore {
    private static _store;
    /**
     * Registers a new host element
     * @param host host element to dynamically register
     */
    static Register(host: DynamicHost<any, any>): void;
    /**
     * Retrieve a registered host by element name
     */
    static GetRegisteredHost(hostElementName: string): DynamicHost<any, any> | undefined;
}
