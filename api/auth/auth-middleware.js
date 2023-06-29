async function protect(req, res, next) {
    console.log("Protect is working")
    next()
}


module.exports = {
    protect
}