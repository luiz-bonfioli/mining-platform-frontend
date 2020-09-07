import { ModelBase } from '../../core/model-base';
import { ChecklistItem } from './checklist-item/checklist-item';

export class Checklist implements ModelBase {
  id: string;
  name: string;  
  checklistItems: ChecklistItem[];
}
