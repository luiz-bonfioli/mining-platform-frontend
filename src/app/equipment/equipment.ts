import { ModelBase } from './../core/model-base';
import { Category } from './category/category';
import { Model } from './model/model';

export class Equipment implements ModelBase {
  id: string;
  name: string;
  shortName: string;
  category: Category;
  model: Model;
}
