const jwt = require('jsonwebtoken')



const authentikasi = (req, res, next) => {

        try{

                // ====== MENGAMBIL TOKEN DI HEADER =======

            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];

            // ===== CEK JIKA TOKEN TERSEDIA =====

            if( token == null ) return res.status(401).json({message: 'Token tidak tersedia'})


            // ====== VERIFY TOKEN =====
            jwt.verify(token, process.env.SECRET_KEY, (err, result) => {
                if( err ) return console.log(`Token tidak valid: ${err}`)
                req.user = result
                next()
            })

        }catch(err) {

            console.log('terjadi error dengan JWT')
            req.errorJWT = err.message
            next()

        }

}


module.exports = authentikasi