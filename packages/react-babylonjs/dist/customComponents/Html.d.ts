import { Camera } from '@babylonjs/core/Cameras/camera.js';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js';
import React, { HTMLAttributes, MutableRefObject, ReactNode, RefObject } from 'react';
import { FiberAbstractMeshProps, FiberAbstractMeshPropsCtor } from '../generatedProps';
declare function defaultCalculatePosition(el: AbstractMesh, camera: Camera): number[];
export declare type CalculatePosition = typeof defaultCalculatePosition;
declare type PointerEventsProperties = 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'inherit';
declare type HtmlPropsExtension = HTMLAttributes<HTMLDivElement> & FiberAbstractMeshProps & FiberAbstractMeshPropsCtor;
export interface HtmlProps extends Omit<HtmlPropsExtension, 'ref'> {
    babylonChildren?: ReactNode;
    prepend?: boolean;
    center?: boolean;
    fullscreen?: boolean;
    eps?: number;
    portal?: MutableRefObject<HTMLElement>;
    distanceFactor?: number;
    sprite?: boolean;
    transform?: boolean;
    zIndexRange?: Array<number>;
    occlude?: RefObject<AbstractMesh>[] | boolean;
    onOcclude?: (visible: boolean) => void;
    calculatePosition?: CalculatePosition;
    as?: string;
    pointerEvents?: PointerEventsProperties;
}
declare const Html: React.ForwardRefExoticComponent<HtmlProps & React.RefAttributes<HTMLDivElement>>;
export default Html;
