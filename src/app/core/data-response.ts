import { ModelBase } from './model-base';

export class DataResponse<M extends ModelBase> {
  constructor(public items: M[], public totalItems: number) {}
}
