import { EngineOptions } from '@babylonjs/core/Engines/thinEngine.js';
import React, { ReactNode } from 'react';
export declare type RenderOptions = {
    /**
     * Observes visibility and does not render scene when no pixels of canvas are visible
     * Defaults to false, so you need to opt-in
     */
    whenVisibleOnly?: boolean;
};
export declare type EngineProps = {
    engineOptions?: EngineOptions;
    antialias?: boolean;
    adaptToDeviceRatio?: boolean;
    renderOptions?: RenderOptions;
    /**
     * Skip rendering if set to true (takes precedence over RenderOptions.whenVisibleOnly)
     */
    isPaused?: boolean;
    /**
     * Attach resize event when canvas resizes (window resize may not occur).
     * Defaults to true, so you need to opt-out.
     */
    observeCanvasResize?: boolean;
    /**
     * By default touch-action: 'none' will be on the canvas.  Use this to disable.
     */
    touchActionNone?: boolean;
    /**
     * Useful if you want to attach CSS to the canvas by css #id selector.
     */
    canvasId?: string;
} & {
    children?: ReactNode | undefined;
} & React.CanvasHTMLAttributes<HTMLCanvasElement>;
declare const ReactBabylonjsEngine: React.FC<EngineProps>;
export default ReactBabylonjsEngine;
