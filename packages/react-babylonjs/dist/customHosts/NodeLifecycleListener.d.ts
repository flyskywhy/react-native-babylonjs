import { Node } from '@babylonjs/core/node';
import { CreatedInstance } from '../CreatedInstance';
import { FiberNodeProps } from '../generatedProps';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class NodeLifecycleListener extends BaseLifecycleListener<Node, FiberNodeProps> {
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
}
