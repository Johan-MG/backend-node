import { Router } from "express"
import cors from "cors"
import { getStroreList } from "../request/stores"
const router = Router()
router.use(cors())

router.route('/').get(getStroreList)

export default router
