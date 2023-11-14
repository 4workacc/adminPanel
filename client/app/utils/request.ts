import { Client, PoolClient } from "pg"
import conn from "./db"
import { IUser } from "./types";

export const fetchAllUsers = async (requestUserName: string="") => {
    const client: PoolClient = await conn.connect();
    const resultUsers: IUser[] = [];
    try {
        console.log("REQ", requestUserName)
        const result = await client.query({
            rowMode: 'array',
            text: `SELECT * from users`,
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
                console.log(newUser.fio.toUpperCase().indexOf(requestUserName.toUpperCase()), newUser.fio.toUpperCase(), requestUserName.toUpperCase());
                if (newUser.fio.toUpperCase().indexOf(requestUserName.toUpperCase()) !== -1) {
                    resultUsers.push(newUser);
                }
            }               
            
        })        
        console.log(resultUsers);
        return resultUsers;
    }
    catch (Err) { }
    finally {
        await client.release()
    }
}


