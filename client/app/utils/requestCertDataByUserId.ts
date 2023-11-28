import { Client, PoolClient } from "pg"
import conn from "./db"
import { IKey } from "./types";

export const requestCertDataByUserId = async (requestUserId: number) => {
    const client: PoolClient = await conn.connect();
    try {
        const result = await client.query({
            rowMode: 'array',
            text: `SELECT * FROM ecp where user_id = ${requestUserId}`,
        })
        const newKey: IKey = {
            id: result.rows[0][0],
            key_id: result.rows[0][1],
            user_id: result.rows[0][2],
            key_sn: result.rows[0][3],
            start_cert: result.rows[0][4],
            end_cert: result.rows[0][5],
            active: result.rows[0][6],
            status: result.rows[0][7],
            info: result.rows[0][8],
            cert_id: result.rows[0][9],
            doc_employement: result.rows[0][10],
            doc_fam: result.rows[0][11],
        };
        return newKey
    }
    catch (Err) { }
    finally {
        await client.release()
    }
}


