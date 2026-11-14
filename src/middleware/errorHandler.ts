import type  { Response, Request, NextFunction, RequestHandler } from "express";



function errorHandler (
    err: Error & { statusCode?: number},
    req: Request,
    res: Response,
    next: NextFunction
) : void {
    console.log(err);


    const statusCode = err.statusCode ?? 500;
    const message = 
    statusCode === 500 ? 'An error has occurred on the server ': err.message;



    res.status(statusCode).json({
        success:false,
        data:null,
        error: message,
    });
        next()
}

// Unknown routes: runs only when no route matched.

const notFound: RequestHandler = (req) => {
    const error: Error & { statusCode?: number } = new Error(
        `Route ${req.method} ${req.originalUrl} not found`,
    );
    error.statusCode = 404;

    throw error;
};

export {errorHandler, notFound}