exports.handler = async (event, context) => {
    console.debug(event)
    console.debug(context)
    const name = event.queryStringParameters.name || 'World'
    return {
        statusCode: 200,
        body: `Hello, ${name}, from functions`,
    }
}