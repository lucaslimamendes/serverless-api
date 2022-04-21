import createPool from '../config/mysql';
import { createStock, listStock } from '../models/stock';
import Stock from '../types/Stock';

const create = async (reqBody: Stock) => createStock(await createPool('shop'), reqBody);

const list = async () => listStock(await createPool('shop'));

export {
    create,
    list,
};
