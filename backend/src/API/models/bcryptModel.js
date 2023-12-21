import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

const SALT = process.env.SALT


export const PasswordEncrypt = ( password ) =>{
        const passwordEncrypted =  bcrypt.hashSync(password, 13) //es sincrono para que no de devuelva undefined
        return passwordEncrypted //retunr Encrypted Password
}

export const DecryptPassword = ( password , passwordEncrypted ) =>{
    const decrypt = bcrypt.compareSync(password, passwordEncrypted)
    return decrypt //return boolean
}