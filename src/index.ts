import { getGreeting } from '@cxnunes/module'
import { logger } from '@cxnunes/utils'

const greet = getGreeting()

logger(greet)
