const express = require('express');
const router = express.router();
const jwt = require('jsonwebtoken')

const sercet_key = "qwertyuiop"

const route = router.post("/", (req, res) => {
   const p = jwt.verify(req.body.token, sercet_key)
   if (p.userName == req.body.userName) {
      res.json({ status: true })
   } else {
      res.json({ status: false })
   }

});
export default route;