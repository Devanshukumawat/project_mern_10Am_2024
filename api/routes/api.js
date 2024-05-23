const router = require("express").Router()
const userC = require("../controllers/user")
const adminC = require("../controllers/admin")


router.get("/",userC.homePageController)
router.post("/reginsert",userC.regController)
router.post("/checkuser",userC.userCheckController)
router.post("/insertproduct",adminC.productinsertController)
router.get("/productdata",adminC.productDataController)
router.get("/updateformdata/:productid",adminC.updateFormController)
router.put("/updateproductdata/:id",adminC.updateProductController)
router.delete("/adminproductdelete/:id",adminC.deleteProductController)
router.get("/allProducts",adminC.allProductsController)










module.exports = router