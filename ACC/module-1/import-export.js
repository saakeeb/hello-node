const errorHandling = (error) => {
    const { name, message, stack } = error;
    console.log("Error Name: ", name, message);
    // logger
}

const two = () => {
    console.log('two');
}

// module.exports.errorHandling;

// module.exports.errorHandling = errorHandling;
// module.exports.two = two;

module.exports = {
    errorHandling,
    two
}

