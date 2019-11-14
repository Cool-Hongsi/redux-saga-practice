module.exports.getDB = () => {
    return new Promise((resolve, reject) => {
        // logic...

        resolve("Success getDB()");
    });
};

module.exports.postDB = (id, name, price) => {
    return new Promise((resolve, reject) => {
        // logic...

        resolve("Success postDB()");
    });
};

module.exports.putDB = (id, name, price) => {
    return new Promise((resolve, reject) => {
        // logic...

        resolve("Success putDB()");
    });
};

module.exports.deleteDB = (id) => {
    return new Promise((resolve, reject) => {
        // logic...

        resolve("Success deleteDB()");
    });
};