import { Engine } from '@babylonjs/core/Engines/engine.js';
import { Nullable } from '@babylonjs/core/types.js';
import React from 'react';
export declare type EngineCanvasContextType = {
    engine: Nullable<Engine>;
    canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>;
};
export declare const EngineCanvasContext: React.Context<EngineCanvasContextType>;
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare function withEngineCanvasContext<P extends {
    engineCanvasContext: EngineCanvasContextType;
}, R = Omit<P, 'engineCanvasContext'>>(Component: React.ComponentClass<P> | React.FunctionComponent<P>): React.FunctionComponent<R>;
/**
 * Get the engine from the context.
 */
export declare const useEngine: () => Nullable<Engine>;
/**
 * Get the canvas DOM element from the context.
 */
export declare const useCanvas: () => Nullable<HTMLCanvasElement | WebGLRenderingContext>;
export {};
