import { HasPropsHandlers, PropsHandler } from './PropsHandler';
/**
 * TODO: Integrate this into the generated code, which duplicates for every class.
 */
export default class BasePropsHandler<U> implements HasPropsHandlers<U> {
    private propsHandlers;
    constructor(propsHandlers: PropsHandler<U>[]);
    getPropsHandlers(): PropsHandler<U>[];
    addPropsHandler(propHandler: PropsHandler<U>): void;
}
