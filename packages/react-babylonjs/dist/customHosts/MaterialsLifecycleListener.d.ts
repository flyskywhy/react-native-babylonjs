import { Material } from '@babylonjs/core/Materials/material.js';
import { Scene } from '@babylonjs/core/scene.js';
import { CreatedInstance } from '../CreatedInstance';
import { FiberMaterialProps } from '../generatedProps';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class MaterialsLifecycleListener extends BaseLifecycleListener<Material, FiberMaterialProps> {
    onCreated(instance: CreatedInstance<Material>, scene: Scene): void;
    onMount(instance?: CreatedInstance<Material>): void;
}
