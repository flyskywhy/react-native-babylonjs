import { AnimationGroup } from '@babylonjs/core/Animations/animationGroup.js';
import { Skeleton } from '@babylonjs/core/Bones/skeleton.js';
import { BoundingInfo } from '@babylonjs/core/Culling/boundingInfo.js';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js';
import { IParticleSystem } from '@babylonjs/core/Particles/IParticleSystem.js';
import { Nullable } from '@babylonjs/core/types.js';
export declare enum LoaderStatus {
    Loading = "Loading",
    Loaded = "Loaded",
    Error = "Error"
}
export interface ILoadedModel {
    /**
     * LoaderStatus reports if the load succeeded or not.
     */
    status: LoaderStatus;
    /**
     * Mesh created when successfully loaded and all non-parented meshes are parented to this mesh
     */
    rootMesh?: AbstractMesh;
    /**
     * Error message when loader fails.
     */
    errorMessage?: string;
    /**
     * Name of loader used - either as explicitly specified or inferred from extension
     */
    loaderName?: string;
    meshes?: AbstractMesh[];
    particleSystems?: IParticleSystem[];
    skeletons?: Skeleton[];
    animationGroups?: AnimationGroup[];
    readonly boundingInfo: Nullable<BoundingInfo>;
    readonly scaledToDimension: number | undefined;
    scaleTo(maxDimension: number): void;
    dispose(): void;
}
export declare class LoadedModel implements ILoadedModel {
    status: LoaderStatus;
    rootMesh?: AbstractMesh;
    errorMessage?: string;
    loaderName?: string;
    meshes?: AbstractMesh[];
    particleSystems?: IParticleSystem[];
    skeletons?: Skeleton[];
    animationGroups?: AnimationGroup[];
    private _scaledToDimension?;
    get scaledToDimension(): number | undefined;
    get boundingInfo(): Nullable<BoundingInfo>;
    scaleTo(maxDimension: number): void;
    /**
     * Clean up all resources.
     */
    dispose(): void;
}
