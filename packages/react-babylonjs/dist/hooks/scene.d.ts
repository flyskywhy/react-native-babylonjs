import { Scene } from '@babylonjs/core/scene.js';
import { Nullable } from '@babylonjs/core/types.js';
import { Context } from 'react';
export declare type SceneContextType = {
    scene: Nullable<Scene>;
    sceneReady: boolean;
};
export declare const SceneContext: Context<SceneContextType>;
/**
 * Get the scene from the context.
 */
export declare const useScene: () => Nullable<Scene>;
