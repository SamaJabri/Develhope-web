import "dotenv/config";

import config from "./config";

import app from "./app";

const port = config.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
