import { ModelBase } from '../../core/model-base'
import { Plan } from '../plan/plan'

export class ProductionOrder implements ModelBase {
  id: string
  description: string
  plan?: Plan
}