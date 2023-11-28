import { Client, PoolClient } from "pg"
import conn from "./db"
import { IKey, IUser } from "./types";
import { requestCertDataByUserId } from "./requestCertDataByUserId";

export const requestUserDataById = async (requestUserId: number) => {
    const client: PoolClient = await conn.connect();
    const curCertData: IKey | {cert_id: string}= await requestCertDataByUserId(requestUserId) || {cert_id: "-1"};
    try {
        const result = await client.query({
            rowMode: 'array',
            text: `SELECT * FROM users where user_id = ${requestUserId}`,
        })
        const newUser: IUser = {
            id: result.rows[0][0],
            fio: result.rows[0][1],
            code0: result.rows[0][2] || -1,
            code1: result.rows[0][3] || "",
            employement: result.rows[0][4] || "",
            struct: result.rows[0][5] || "",
            post: result.rows[0][6] || "",
            unit: result.rows[0][7] || "",
            domain_name: result.rows[0][8] || "",
            status: result.rows[0][9] || "",
            old_fam: result.rows[0][10] || "",
            reason_of_code: result.rows[0][11] || "",
            certData: curCertData,
        };
     return newUser
    }
    catch (Err) { }
    finally {
        await client.release()
    }
}


