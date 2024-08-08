import dbConnection from './dbs/index.js';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

dbConnection()
    .then(() => {
        console.log('Database connected');
    })
    .catch((e) => {
        console.error('Error in database connection:', e);
        process.exit(1);
    });

// Graceful shutdown
const gracefulShutdown = () => {
    console.log('SIGINT signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        dbConnection.close(() => {
            console.log('Database connection closed');
            process.exit(0);
        });
    });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
