import { Router } from "express"
import cors from "cors"
import { getDefaultList } from "../request/purchases"
const router = Router()
router.use(cors())

router.route('/').get(getDefaultList)

export default router