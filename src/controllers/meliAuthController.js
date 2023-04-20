
const axios = require('axios');
require('dotenv').config();

module.exports = class meliAuthController {
    async redirectAuth(req, res, next) {
        if (req.query.code) {
            console.log(process.env.API_SEG)
            const response = await axios.get(`${process.env.API_SEG}/authentications/meli/callback?code=${req.query.code}`)
            res.status(200).json({
                message: 'success',
                response: response.data
            })
        } else {
            res.status(400).json({
                message: 'error',
                response: {
                    code: "undefined",
                }
            })
        }
    }
}
