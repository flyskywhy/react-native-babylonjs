import { ReactElement } from 'react';
import Reconciler from 'react-reconciler';
import { Container } from './ReactBabylonJSHostConfig';
export declare const roots: Map<Container, any>;
export declare type RendererOptions = {
    usePrimary?: boolean;
};
export interface ReconcilerInstance {
    /**
     * Replace previous root node with a new one or update props of the current root node.
     */
    render: (element: ReactElement | null, container: Container, callback: () => void, parentComponent: any) => any;
    /**
     * Manually unmount the whole app.
     */
    unmount: (container: Container) => void;
}
/**
 * This is a work in progress in experimental state.
 */
export declare function createPortal(children: React.ReactNode, containerInfo: any, key?: string | null, usePrimary?: boolean): Reconciler.ReactPortal;
export declare function createReconciler(rendererOptions: RendererOptions): ReconcilerInstance;
