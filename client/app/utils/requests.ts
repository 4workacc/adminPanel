import { Client, PoolClient } from "pg"
import conn from "./db"
import { IUser } from "./types";

export const fetchUsers = async (requestUserName: string="", requestPage: string) => {
    const client: PoolClient = await conn.connect();
    const resultUsers: IUser[] = [];

    const ITEMS_PER_PAGE = 4;

    try {
        console.log("REQ", requestUserName)
        const result = await client.query({
            rowMode: 'array',
            text: `SELECT * FROM users LIMIT ${ITEMS_PER_PAGE}`,
        })
        result.rows.map((row) => {                          
            const newUser: IUser = {
                id: row[0],
                fio: row[1],
                code0: row[2] || -1,
                code1: row[3] || "",
                employement: row[4] || "",
                struct: row[5] || "",
                post: row[6] || "",
                unit: row[7] || "",
                domain_name: row[8] || "",
                status: row[9] || "",
                old_fam: row[10] || "",
                reason_of_code: row[11] || ""
            };
            if (requestUserName === "") {                
                resultUsers.push(newUser);
            }
            else {
                if (newUser.fio.toUpperCase().indexOf(requestUserName.toUpperCase()) !== -1) {
                    resultUsers.push(newUser);
                }
            }               
            
        })               
        
        return resultUsers.sort((a:IUser, b:IUser)=>{
            if (a.fio > b.fio) {
                return 1
            }
            return -1
        });
    }
    catch (Err) { }
    finally {
        await client.release()
    }
}


