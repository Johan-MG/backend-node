"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const purchases_1 = require("../request/purchases");
const router = (0, express_1.Router)();
router.use((0, cors_1.default)());
router.route('/').get(purchases_1.getDefaultList);
exports.default = router;
