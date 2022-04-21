import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env.development' });

const {
    DBHOST,
    DBUSER,
    DBPASS,
} = process.env;
const pools = {};

const createPools = async (dbName: string) => {
    if(pools[dbName])
        return pools[dbName];
    
    const pool = createPool({
        connectionLimit: 10,    
        password: DBPASS,
        user: DBUSER,
        database: dbName,
        host: DBHOST,
    });

    pools[dbName] = pool;
    return pool;
}

export default createPools;
