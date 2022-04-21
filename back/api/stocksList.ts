import { APIGatewayEvent } from 'aws-lambda';
import { list } from '../factory/stock';

const handler = async (event: APIGatewayEvent) => {
    const lisRes = await list();
    
    return {
        statusCode: 200,
        body: JSON.stringify(lisRes)
    }
};

export default handler;
