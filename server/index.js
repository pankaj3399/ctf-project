import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes/routes.js';
import httpStatus from 'http-status';
import bootstrap from './utils/server/bootstrap.js';
import globalErrorHandler from './utils/helpers/globalErrorHandler.js';
import 'dotenv/config'
import { admin, adminRouter } from './adminjs/index.js';
import AdminJSExpress from '@adminjs/express'


const app = express();

//middleware


const adminJsRouter = process.env.NODE_ENV === 'production' ? adminRouter : AdminJSExpress.buildRouter(admin)


app.use(admin.options.rootPath, adminJsRouter)


if (process.env.NODE_ENV === 'production') {
    admin.initialize();
} else {
    admin.watch();
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use('/api/v1', routes);

// files route
// app.use('/public', express.static('public'))

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req, res) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
});


// server related works
process.on('uncaughtException', error => {
    console.log(error, 'uncaughtException');
    process.exit(1);
});

let server;
bootstrap(app);

process.on('SIGTERM', () => {
    console.log('SIGTERM is received');
    if (server) {
        server.close();
    }
});
