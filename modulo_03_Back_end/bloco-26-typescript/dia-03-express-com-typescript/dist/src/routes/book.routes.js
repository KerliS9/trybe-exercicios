"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = __importDefault(require("../controllers/bookController"));
const bookMiddleware_1 = __importDefault(require("../middlewares/bookMiddleware"));
const router = (0, express_1.Router)();
const booksController = new bookController_1.default();
router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books/', bookMiddleware_1.default, booksController.create);
exports.default = router;
