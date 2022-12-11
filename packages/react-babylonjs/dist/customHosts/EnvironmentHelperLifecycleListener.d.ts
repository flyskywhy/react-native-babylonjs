import { EnvironmentHelper } from '@babylonjs/core/Helpers/environmentHelper.js';
import { CreatedInstance } from '../CreatedInstance';
import BaseLifecycleListener from './BaseLifecycleListener';
export default class EnvironmentHelperLifecycleListener extends BaseLifecycleListener<EnvironmentHelper, any> {
    onMount(instance: CreatedInstance<EnvironmentHelper>): void;
}
