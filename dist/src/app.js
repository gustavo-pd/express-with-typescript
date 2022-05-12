"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require('dotenv').config();
// const errorMiddleware = require('./middlewares/error');
const usersRoutes_1 = __importDefault(require("./routers/usersRoutes"));
app.use(express_1.default.json());
app.get('/', (_request, response) => response.send({ status: 'OK' }));
app.use('/users', usersRoutes_1.default);
exports.default = app;
