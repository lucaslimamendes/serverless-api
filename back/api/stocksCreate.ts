import { APIGatewayEvent } from 'aws-lambda';

const handler = (event: APIGatewayEvent) => {
    console.log('event', event);

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: 'ok'
        })
    }
};

export default handler;
