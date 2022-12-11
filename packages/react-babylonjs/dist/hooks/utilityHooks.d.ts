import { ActionEvent } from '@babylonjs/core/Actions/actionEvent.js';
import { Mesh } from '@babylonjs/core/Meshes/mesh.js';
import { EventState } from '@babylonjs/core/Misc/observable.js';
import { Nullable } from '@babylonjs/core/types.js';
import { Control } from '@babylonjs/gui/2D/controls/control.js';
import { MutableRefObject } from 'react';
import { ICustomPropsHandler } from '../PropsHandler.js';
export declare const useCustomPropsHandler: (propsHandler: ICustomPropsHandler<any, any>) => void;
export declare type MeshEventType = {
    (ev: ActionEvent): void;
};
export declare type Gui2dEventType = {
    (eventData: Control, eventState: EventState): void;
};
export declare type HoverType = MeshEventType | Gui2dEventType;
/**
 * useHover hook
 *
 * NOTE: Supports Mesh and 2D GUI controls only (not 3D GUI).
 *
 * @param over expression when hover over starts
 * @param out expression when hover stops
 * @param ownRef to re-use a Ref you already have, otherwise one is created for you and returned.
 */
export declare const useHover: (over?: HoverType | undefined, out?: HoverType | undefined, ownRef?: MutableRefObject<Control | Mesh | null> | undefined) => [MutableRefObject<Mesh | Control | null>, boolean];
/**
 * useClick hook
 *
 * @param onClick What would be passed in the OnPickTrigger from ActionManager
 * @param ownRef to re-use a Ref you already have, otherwise one is created for you and returned.
 */
export declare function useClick(onClick: MeshEventType, ownRef?: MutableRefObject<Nullable<Mesh>>): [MutableRefObject<Nullable<Mesh>>];
