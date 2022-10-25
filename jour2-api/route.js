const Router = require("express");

const router = Router();

router.get("/" , (req, rep) => {
    rep.json({id : 1 , message : "success"})
})


module.exports = router