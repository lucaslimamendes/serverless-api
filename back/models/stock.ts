import { Pool } from 'mysql2/promise';
import Stock from '../types/Stock';

const createStock = async (pool: Pool, reqBody: Stock) => {

}

const listStock = async (pool: Pool) => {
    try {
        const res = await pool.query('SELECT * from stock;');
    
        return res;
    } catch (error) {
        return error;
    }
}

export {
    createStock,
    listStock,
};
