import { Texture } from '@babylonjs/core/Materials/Textures/texture.js';
import { CreatedInstance } from '../CreatedInstance';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class TexturesLifecycleListener extends BaseLifecycleListener<Texture, any> {
    onMount(instance: CreatedInstance<Texture>): void;
}
