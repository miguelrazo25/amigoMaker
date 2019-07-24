const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/html-routes.js")(app);

require("./app/routing/api-routes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
})

