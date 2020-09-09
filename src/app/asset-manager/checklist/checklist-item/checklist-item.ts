import { ModelBase } from '../../../core/model-base'
import { Checklist } from '../checklist'

export class ChecklistItem implements ModelBase {
  id: string
  name: string
  checklist: Checklist
}
