import express from "express"
import userController from '../controller/userController.js'

const route = express.Router()

route.get("/random", userController.randomUser)
route.get("/all", userController.allUser)
route.post("/save", userController.saveUser)
route.patch("/update", userController.updateUser)
route.patch("/bulk-update", userController.updateRandomUsers)
route.delete("/delete", userController.deleteUser)

export default route