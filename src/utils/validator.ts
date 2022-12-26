import { body, validationResult } from 'express-validator';
import e, { NextFunction, Request, Response } from 'express';

export default (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return { statusCode: 400, message: errors.array()[0].msg };
    } else {
        return { statusCode: 200 };
    }
};
