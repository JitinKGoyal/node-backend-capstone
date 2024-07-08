import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express();

// ------------------------- Configuration S --------------------------------------- //

/**
 * To send CORS headers that allows browser to access the resource.
 * use whitelisting for more security features that any server can't hit this server even the postman.
*/
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

/**
 * To read the body stream as json.
 * @param limit - Used to limit the size of the body.
*/
app.use(express.json({
    limit: '16kb'
}));

/**
 * To read the url as url encoding stunderd.
 * @param extended - Used for nested objects in url.
 * @param limit - Used to limit the size of the url data.
*/
app.use(express.urlencoded({ limit: '16kb', extended: true }));

app.use(express.static('public'))

app.use(cookieParser());

// ------------------------- Configuration E --------------------------------------- //

export { app }