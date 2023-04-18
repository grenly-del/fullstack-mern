const jwt = require('jsonwebtoken')



const authentikasi = (req, res, next) => {

        // ====== MENGAMBIL TOKEN DI HEADER =======

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];


        // ===== CEK JIKA TOKEN TERSEDIA =====

        if( token == null ) return res.status(401).json({message: 'Token tidak terssedia'})


        // ====== VERIFY TOKEN =====
        jwt.verify(token, process.env.SECRET_KEY, (err, result) => {
            if( err ) return console.log(err)
            console.log(result)

            req.user = result
            next()
        })

}


module.exports = authentikasi