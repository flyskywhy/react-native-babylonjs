import { ISceneLoaderProgressEvent } from '@babylonjs/core/Loading/sceneLoader.js';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js';
import React from 'react';
import { FiberAbstractMeshProps, FiberAbstractMeshPropsCtor } from '../generatedProps';
import { ILoadedModel } from '../hooks/loaders/loadedModel';
export declare type ModelProps = {
    /**
     * Only used on init.  Will not update dynamically (scaling will update dynamically and override this)
     * An array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
     */
    meshNames?: any;
    receiveShadows?: boolean;
    rootUrl: string;
    sceneFilename: string;
    pluginExtension?: string;
    alwaysSelectAsActiveMesh?: boolean;
    reportProgress?: boolean;
    scaleToDimension?: number;
    onModelLoaded?: (model: ILoadedModel) => void;
    onModelError?: (model: ILoadedModel) => void;
    onLoadProgress?: (event: ISceneLoaderProgressEvent) => void;
    onCreated?: (rootMesh: AbstractMesh) => void;
} & FiberAbstractMeshProps & FiberAbstractMeshPropsCtor;
declare const Model: React.FC<ModelProps>;
export default Model;
