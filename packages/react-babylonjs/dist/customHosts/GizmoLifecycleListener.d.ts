import { Gizmo } from '@babylonjs/core/Gizmos/gizmo.js';
import { CreatedInstance } from '../CreatedInstance';
import { GizmoCustomProps } from '../CustomProps';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class GizmoLifecycleListener extends BaseLifecycleListener<Gizmo, GizmoCustomProps> {
    onMount(instance: CreatedInstance<Gizmo>): void;
}
