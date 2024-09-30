"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const auth_json_1 = __importDefault(require("../database/auth.json"));
const pool = new pg_1.Pool({
    user: auth_json_1.default.username,
    password: auth_json_1.default.password,
    host: 'localhost',
    port: 5432,
    database: "todoapp"
});
exports.default = pool;
//# sourceMappingURL=db.js.map