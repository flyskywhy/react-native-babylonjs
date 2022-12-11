import { CreatedInstance } from './CreatedInstance';
/**
 * @deprecated Please use @see applyPropsToRef instead
 * (same functionality different parameters better name, but doesn't work with "public" ref provided by reconciler)
 * @param hostInstance a babylonjs public ref (available with useRef)
 * @param props
 */
export declare const applyInitialPropsToInstance: (target: any, props: Record<string, any>) => void;
/**
 * @deprecated I don't believe this is used currently, but it can be added back.
 */
export declare const applyPropsToRef: (createdInstance: CreatedInstance<any>, props: Record<string, any>) => void;
