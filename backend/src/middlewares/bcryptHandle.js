import bcrypt from 'bcrypt'


export const PasswordEncrypt = ( password ) =>{
        const passwordEncrypted =  bcrypt.hashSync(password, 13) //es sincrono para que no de devuelva undefined
        return passwordEncrypted //retunr Encrypted Password
}

export const DecryptPassword = async ( password , passwordEncrypted ) =>{
    const decrypt = await bcrypt.compare(password, passwordEncrypted)
    return decrypt //return boolean
}