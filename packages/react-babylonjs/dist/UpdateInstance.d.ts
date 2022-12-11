import { CreatedInstance } from './CreatedInstance';
import { PropertyUpdate } from './PropsHandler';
export declare const applyUpdateToInstance: (createdInstance: CreatedInstance<any>, update: PropertyUpdate) => void;
/**
 * Only applied in this way immediately after instantiation (not on deltas)
 *
 * @param instance
 * @param props
 */
export declare const applyInitialPropsToCreatedInstance: (createdInstance: CreatedInstance<any>, props: any) => void;
