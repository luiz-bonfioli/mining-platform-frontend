import { ModelBase } from './model-base';

export interface HierarchicalModelBase extends ModelBase {
  parent: ModelBase;
}
