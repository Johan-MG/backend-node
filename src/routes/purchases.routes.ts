import { Router } from "express"
import cors from "cors"
import { getDefaultList, createPurchase, changeStatus } from "../request/purchases"
const router = Router()
router.use(cors())

router.route('/').get(getDefaultList)
router.route('/create').post(createPurchase)
router.route('/status').put(changeStatus)

export default router