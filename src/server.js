(async () => {
    const db = await require('./db/db');
    const app = require("./app")(db);

    app.listen(3000, function () {
        console.log("Example app listening on port 3000!");
    });
})()