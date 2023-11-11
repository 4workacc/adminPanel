import conn from './db.js'

const fetchAllUsers = async () => {    
    const client = await conn.connect()
    try {        
        const result = await client.query({
          rowMode: 'array',
          text: 'SELECT * from users;',
        })
        console.log(result.fields[1])
    }
    catch(Err){}
    finally{
        await client.end()
    }
}    


export default fetchAllUsers;