import conn from './db.js'

const fetchAllUsers = async () => {    
    const client = await conn.connect()
    try {        
        const result = await client.query({
          rowMode: 'array',
          text: 'SELECT * from users;',
        })
        return result.rows
    }
    catch(Err){}
    finally{
        await client.end()
    }
}    


export default fetchAllUsers;