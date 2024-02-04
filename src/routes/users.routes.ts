import { Router } from "express"
import cors from "cors"
import { getUsersList } from "../request/users"
const router = Router()
router.use(cors())

router.route('/').get(getUsersList)

export default router
