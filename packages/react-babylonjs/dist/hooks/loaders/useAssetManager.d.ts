import { AbstractAssetTask, BinaryFileAssetTask, IAssetsProgressEvent, MeshAssetTask, TextureAssetTask } from '@babylonjs/core/Misc/assetsManager.js';
import { EventState } from '@babylonjs/core/Misc/observable.js';
import { Scene } from '@babylonjs/core/scene.js';
import React from 'react';
export declare enum TaskType {
    Binary = "Binary",
    Mesh = "Mesh",
    Texture = "Texture"
}
export declare type BinaryTask = {
    taskType: TaskType.Binary;
    name: string;
    url: string;
    onSuccess?: BinaryFileAssetTask['onSuccess'];
    onError?: BinaryFileAssetTask['onError'];
};
export declare type MeshTask = {
    taskType: TaskType.Mesh;
    name: string;
    meshesNames?: any;
    rootUrl: string;
    sceneFilename: string;
    onSuccess?: MeshAssetTask['onSuccess'];
    onError?: MeshAssetTask['onError'];
};
export declare type TextureTask = {
    taskType: TaskType.Texture;
    name: string;
    url: string;
    noMipmap?: boolean;
    invertY?: boolean;
    samplingMode?: number;
    onSuccess?: TextureAssetTask['onSuccess'];
    onError?: TextureAssetTask['onError'];
};
export declare type Task = BinaryTask | MeshTask | TextureTask;
export declare type AssetManagerContextType = {
    updateProgress: (progress: AssetManagerProgressType) => void;
    lastProgress?: AssetManagerProgressType;
} | undefined;
export declare const AssetManagerContext: React.Context<AssetManagerContextType>;
export declare type AssetManagerProgressType = {
    eventData: IAssetsProgressEvent;
    eventState: EventState;
} | undefined;
export declare type AssetManagerContextProviderProps = {
    startProgress?: AssetManagerProgressType;
    children: React.ReactNode;
};
export declare const AssetManagerContextProvider: React.FC<AssetManagerContextProviderProps>;
export declare type AssetManagerOptions = {
    useDefaultLoadingScreen?: boolean;
    reportProgress?: boolean;
    scene?: Scene;
};
declare type AssetManagerResult = {
    tasks: AbstractAssetTask[];
    taskNameMap: Record<string, AbstractAssetTask>;
};
export declare const useAssetManager: (tasks: Task[], options?: AssetManagerOptions | undefined) => AssetManagerResult;
export {};
