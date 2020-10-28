import { ModelBase } from '../../core/model-base'
import { PlanStatus } from './plan-status.enum'

export class Plan implements ModelBase {
  id: string
  description: string
  startDate?: number
  endDate?: number
  planStatus: PlanStatus
}