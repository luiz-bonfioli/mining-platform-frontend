import { ModelBase } from '../../../core/model-base'
import { ProductionOrder } from '../production-order'

export class Operation implements ModelBase {
  id: string
  code: string
  productionOrder: ProductionOrder
}