"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const express_session_1 = __importDefault(require("express-session"));
const connect_pg_simple_1 = __importDefault(require("connect-pg-simple"));
const pg_1 = require("pg");
const PgSession = (0, connect_pg_simple_1.default)(express_session_1.default);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const pool = new pg_1.Pool({
        connectionString: process.env.DATABASE_URL || 'postgresql://admin:admin@localhost:5432/db_artesanato',
    });
    app.use((0, express_session_1.default)({
        store: new PgSession({
            pool,
            tableName: 'session',
            createTableIfMissing: true,
        }),
        secret: process.env.SESSION_SECRET || 'artesanato-secret-key-min-32-chars-long',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000,
        },
    }));
    app.enableCors({
        origin: true,
        credentials: true,
    });
    app.use('/uploads', require('express').static('uploads'));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`Backend executando em http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map