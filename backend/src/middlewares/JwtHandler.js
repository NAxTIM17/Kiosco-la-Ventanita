import jwt from 'jsonwebtoken'
import "dotenv/config"

const jwtHandler = (req, res, next) => {

    const authorization = req.get('Authorization')
    console.log(authorization)
    
    let token = ''

    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        token = authorization.substring(7)
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN_SIGN)

    if(!token || !decodedToken.id){
        return res.status(401).json({error : 'token missing or invalid'})
    }
    //recupero el id del usuario del token
    const {id: idUSer } = decodedToken
    console.log(idUSer)
    req.body.idUsuario = idUSer

    next()

}

export default jwtHandler