import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture.js';
import { CreatedInstance } from '../CreatedInstance';
import { FiberAdvancedDynamicTextureProps } from '../generatedProps';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class AdvancedDynamicTextureLifecycleListener extends BaseLifecycleListener<AdvancedDynamicTexture, FiberAdvancedDynamicTextureProps> {
    onMount(instance: CreatedInstance<AdvancedDynamicTexture>): void;
    addControls(instance: CreatedInstance<any>): void;
    connect(keyboard: CreatedInstance<any>, searchInstance: CreatedInstance<any>, controlNames: string[]): void;
}
/**
 * This is attached by convention in react-reconciler HostConfig.
 */
export declare class ADTFullscreenUILifecycleListener extends AdvancedDynamicTextureLifecycleListener {
}
