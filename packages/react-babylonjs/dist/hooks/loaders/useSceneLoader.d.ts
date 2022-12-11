import { ISceneLoaderProgressEvent } from '@babylonjs/core/Loading/sceneLoader.js';
import { Scene } from '@babylonjs/core/scene.js';
import { Nullable } from '@babylonjs/core/types.js';
import React from 'react';
import { FiberMeshProps } from '../../generatedProps';
import { ILoadedModel, LoadedModel } from './loadedModel';
export declare type SceneLoaderContextType = {
    updateProgress: (progress: ISceneLoaderProgressEvent) => void;
    lastProgress?: Nullable<ISceneLoaderProgressEvent>;
} | undefined;
export declare const SceneLoaderContext: React.Context<SceneLoaderContextType>;
export declare type SceneLoaderContextProviderProps = {
    startProgress?: ISceneLoaderProgressEvent;
    children: React.ReactNode;
};
export declare const SceneLoaderContextProvider: React.FC<SceneLoaderContextProviderProps>;
export declare type SceneLoaderOptions = {
    /**
     * An array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
     */
    meshNames?: any;
    /**
     * set that all meshes receive shadows.
     * Defaults to false.
     */
    receiveShadows?: boolean;
    /**
     * Scale entire model within these square bounds
     * Defaults to no scaling.
     */
    scaleToDimension?: number;
    /**
     * Always select root mesh as active.
     * Defaults to false.
     */
    alwaysSelectAsActiveMesh?: boolean;
    /**
     * SceneLoader progress events are set on context provider (when available).
     * Defaults to false.
     */
    reportProgress?: boolean;
    /**
     * Not needed if you are within a SceneContext.
     */
    scene?: Scene;
    /**
     * Access to loaded model as soon as it is loaded, so it provides a way to hide or scale the meshes before the first render.
     */
    onModelLoaded?: (loadedModel: ILoadedModel) => void;
    /**
     * Raw progress event for SceneLoader
     */
    onLoadProgress?: (event: ISceneLoaderProgressEvent) => void;
    /**
     * Called if SceneLoader returns an error.
     */
    onModelError?: (model: ILoadedModel) => void;
};
export declare const useSceneLoader: (rootUrl: string, sceneFilename: string, pluginExtension?: string | undefined, options?: SceneLoaderOptions | undefined, initialProps?: FiberMeshProps | undefined) => LoadedModel;
