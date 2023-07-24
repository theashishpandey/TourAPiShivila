const multer = require('multer')

exports.upload_profile = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/profile_images/`)
        },
        filename: function (req, file, cb) {
            cb(null, `profile_image_` + `${Date.now()}` + `_` + file.originalname)
        }
    }),
}).single('profile_image')

exports.upload_post = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/posts/`)
        },
        filename: function (req, file, cb) {
            cb(null, `post` + `${Date.now()}` + `_` + file.originalname)
        }
    }),
}).single('post')
exports.upload_adventure = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/adventure/`)
        },
        filename: function (req, file, cb) {
            cb(null, `adventure` + `${Date.now()}` + `_` + file.originalname)
        }
    }),
}).single('adventure')
exports.upload_add = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/add/`)
        },
        filename: function (req, file, cb) {
            cb(null, `add` + `${Date.now()}` + `_` + file.originalname)
        }
    }),
}).single('add')
exports.upload_slider = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/slider/`)
        },
        filename: function (req, file, cb) {
            cb(null, `slider` + `${Date.now()}` + `_` + file.originalname)
        }
    }),
}).single('slider')
exports.upload_offer = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/offer/`)
        },
        filename: function (req, file, cb) {
            cb(null, `offer` + `${Date.now()}` + `_` + file.originalname)
        }
    }),
}).single('offer')
exports.upload_team = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/team/`)
        },
        filename: function (req, file, cb) {
            cb(null, `team` + `${Date.now()}` + `_` + file.originalname)
        }
    }),
}).single('team')



