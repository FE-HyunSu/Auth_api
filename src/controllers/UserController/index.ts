import { NextFunction, Request, Response } from 'express';
import errorGenerator from '../../errors/errorGenerator';
import { User } from '../../interfaces/User';
import { UserService } from '../../services';
import validator from '../../utils/validator';

const join = async (req: Request, res: Response, next: NextFunction) => {
  const { id, pwd }: User = req.body;
  try {
    const { statusCode, message } = validator(req, res); // 유효성 검사

    if (statusCode !== 200) {
      return errorGenerator({ statusCode, message }); //유효성 검사 에러
    }

    const findUser = await UserService.findUserService(id);
    if (findUser) {
      return errorGenerator({ statusCode: 409 }); // 이미 가입한 유저
    }

    const joinUserResult = await UserService.joinUserService({ id, pwd });
    if (joinUserResult > 0) {
      return res.status(200).json({ statusCode: 200, message: 'join complete' });
    }
  } catch (err) {
    next(err);
  }
};

const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userList = await UserService.userListService();

    if (typeof userList !== 'object') {
      return errorGenerator({ statusCode: 404 });
    }
    return res.status(200).json({ statusCode: 200, data: userList });
  } catch (err) {
    next(err);
  }
};

export default {
  join,
  list,
};
