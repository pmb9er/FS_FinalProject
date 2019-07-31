const express = require("express");
const app = express();

const logger = require('./src/utilities/middleware/logger');
var cors = require('cors');

// Body Parser Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

app.use("/api/users", require("./src/api/user"));

app.use("/api/user", require("./src/api/user-routes"));
app.use("/api/listing", require("./src/api/listing-routes"));
app.use("/api/auth", require("./src/api/auth-routes"));
// app.use("/api/booking", require("./src/api/booking-routes"));
// app.use("/api/provider", require("./src/api/provider-routes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

// app.listen(PORT, "127.0.0.1", () => 
//     console.log(`Server running on port ${PORT}`)
// );
