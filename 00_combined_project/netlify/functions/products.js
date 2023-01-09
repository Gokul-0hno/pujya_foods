exports.handler = async (event, context) => {
    return({
        statusCode: 200,
        body: JSON.stringify({message: "Hello!"}),
        AccessControlAllowOrigin: 'http://localhost:3000',
    });
};