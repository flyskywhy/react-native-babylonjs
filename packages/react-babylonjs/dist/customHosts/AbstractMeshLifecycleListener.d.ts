import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js';
import { CreatedInstance } from '../CreatedInstance';
import { FiberAbstractMeshProps } from '../generatedProps';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class AbstractMeshLifecycleListener extends BaseLifecycleListener<AbstractMesh, FiberAbstractMeshProps> {
    onMount(instance?: CreatedInstance<AbstractMesh>): void;
    /**
     * This was copied from 'NodeLifecycleListener'.  TODO: Would be better to have inheritance hierarchy like 'BaseLifecycleListener'.
     */
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
}
