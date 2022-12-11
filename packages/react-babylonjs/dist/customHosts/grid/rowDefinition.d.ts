import { Scene } from '@babylonjs/core/scene.js';
import { Nullable } from '@babylonjs/core/types.js';
import { ValueAndUnit } from '@babylonjs/gui/2D/valueAndUnit.js';
import { RowOrColumnDefinitionProps } from '.';
import { CreatedInstance } from '../../CreatedInstance';
import { DynamicHost } from '../../HostRegistrationStore';
import DeferredCreationLifecycleListener from '../DeferredCreationLifecycleListener';
/**
 * We delay instantiation and when parented add a row definition to parent "Grid".
 */
export default class RowDefinitionLifecycleListener extends DeferredCreationLifecycleListener<ValueAndUnit, any> {
    private _grid;
    createInstance: (instance: CreatedInstance<ValueAndUnit>, scene: Scene, props: RowOrColumnDefinitionProps) => Nullable<ValueAndUnit>;
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
}
export declare const RowDefinition: DynamicHost<ValueAndUnit, RowOrColumnDefinitionProps>;
