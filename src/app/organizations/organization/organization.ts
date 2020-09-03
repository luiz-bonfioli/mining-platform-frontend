import { ModelBase } from '../../core/model-base';

export class Organization implements ModelBase {
  id: string;
  name: string;
  description: string;
}
