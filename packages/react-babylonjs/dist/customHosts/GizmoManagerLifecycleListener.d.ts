import { GizmoManager } from '@babylonjs/core/Gizmos/gizmoManager.js';
import { CreatedInstance } from '../CreatedInstance';
import { FiberGizmoManagerProps } from '../generatedProps';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class GizmoManagerLifecycleListener extends BaseLifecycleListener<GizmoManager, FiberGizmoManagerProps> {
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): void;
}
