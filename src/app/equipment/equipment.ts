import { ModelBase } from './../core/model-base';
import { Category } from './category/category';

export class Equipment implements ModelBase {
  id: string;
  name: string;
  shortName: string;
  category: Category;
}
