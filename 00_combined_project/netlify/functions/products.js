exports.handler = async (event, context) => {
    return({
        statusCode: 200,
        body: JSON.stringify({message: "Hello!"}),
        accessControlAllowOrigin: 'http://localhost:3000',
    });
};