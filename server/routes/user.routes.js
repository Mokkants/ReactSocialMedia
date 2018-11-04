import express from 'express'
import ctrl from '../controllers/user.controller'

const router = express.Router()

router.route('/api/users')
.get(ctrl.list)
.post(ctrl.create)

router.route('/api/users/:userId')
.get(ctrl.read)
.put(ctrl.update)
.delete(ctrl.remove)

router.param('userId', ctrl.userByID)

export default router