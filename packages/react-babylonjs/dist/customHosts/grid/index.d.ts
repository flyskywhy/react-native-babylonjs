import { Key, ReactNode, Ref } from 'react';
import { HasPropsHandlers, PropertyUpdate, PropsHandler } from '../../PropsHandler';
export declare type GridNode = {
    key?: Key;
    ref?: Ref<ReactNode>;
};
export declare type RowOrColumnDefinitionProps = {
    value: number;
    unit?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            rowDefinition: RowOrColumnDefinitionProps & GridNode;
            columnDefinition: RowOrColumnDefinitionProps & GridNode;
        }
    }
}
export declare class RowOrColumnDefinitionPropsHandlers implements PropsHandler<RowOrColumnDefinitionProps> {
    getPropertyUpdates(oldProps: RowOrColumnDefinitionProps, newProps: RowOrColumnDefinitionProps): PropertyUpdate[] | null;
}
/**
 * Handles property updates.
 */
export declare class RowOrColumnDefinitionPropsHandler implements HasPropsHandlers<RowOrColumnDefinitionProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<RowOrColumnDefinitionProps>[];
    addPropsHandler(propHandler: PropsHandler<RowOrColumnDefinitionProps>): void;
}
