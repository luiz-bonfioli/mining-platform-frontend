import { HierarchicalModelBase } from './hierarchical-model-base';

export interface TreeModelBase extends HierarchicalModelBase {
  name: string;
  leaf: boolean;
}
