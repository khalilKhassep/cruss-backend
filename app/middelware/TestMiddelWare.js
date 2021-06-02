function TestMiddelWare(req,res,next) {
  console.log(req.sessionID)
  console.log(req.headers.cookie)
}


module.exports = TestMiddelWare;