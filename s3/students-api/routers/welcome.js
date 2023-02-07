const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome To Our API'+req.data+res.data);
})

module.exports=router;