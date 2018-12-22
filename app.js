const express = require("express");
const mysql = require("sync-mysql");
const uuid = require("uuid/v1");

const Collection = require("./struct/Collection");
const config = require("./config");

const app = express();
app.listen(confit.port, () => {
	console.log(`Server running on port ${config.port}`);
})