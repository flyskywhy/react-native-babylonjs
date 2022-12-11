import { Scene } from '@babylonjs/core/scene.js';
import { Nullable } from '@babylonjs/core/types.js';
import { HostConfig } from 'react-reconciler';
import { CreatedInstance } from './CreatedInstance';
import { UpdatePayload } from './PropsHandler';
declare type HostCreatedInstance<T> = CreatedInstance<T> | undefined;
declare type Props = {
    scene: Scene;
} & any;
export declare type Container = {
    scene: Nullable<Scene>;
    rootInstance: CreatedInstance<Scene>;
};
declare type HostContext = Container;
declare type TimeoutHandle = number | undefined;
declare type NoTimeout = number;
declare const ReactBabylonJSHostConfig: HostConfig<string, Props, Container, HostCreatedInstance<any>, Record<string, never>, Record<string, never>, Record<string, never>, any, HostContext, UpdatePayload, Record<string, never>, // TODO Placeholder for undocumented API in typings
TimeoutHandle, NoTimeout> & {
    hideInstance: (instance: HostCreatedInstance<any>) => void;
    unhideInstance: (instance: HostCreatedInstance<any>, props: Props) => void;
    clearContainer: (container: Container) => void;
};
export default ReactBabylonJSHostConfig;
