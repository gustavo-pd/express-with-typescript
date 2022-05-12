"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { ResultSetHeader } from 'mysql2/promise';
const connection_1 = __importDefault(require("../database/connection"));
class UserModel {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const [users] = yield connection_1.default.execute('SELECT * FROM TypeScriptExpress.Users');
            return users;
        });
        // public create = async (name: string, quantity: number): Promise<IUser> => {
        //   const [users] = await conn.execute<ResultSetHeader>(
        //     'INSERT INTO TypeScriptExpress.Users (name, quantity) VALUES (?, ?);',
        //     [name, quantity],
        //   );
        //   return { id: product.insertId, name, quantity };
        // };
    }
}
exports.default = UserModel;
