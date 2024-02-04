import { Router } from "express"
import cors from "cors"
import { getDefaultList, createPurchase } from "../request/purchases"
const router = Router()
router.use(cors())

router.route('/').get(getDefaultList)
router.route('/create').post(createPurchase)

export default router