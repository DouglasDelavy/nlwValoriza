import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const tokenRequest = request.headers.authorization;
  if (!tokenRequest) return response.status(401).end();

  const [_, token] = tokenRequest.split(" ");

  try {
    const { sub } = verify(
      token,
      "135e2f1056f4bcc98d9a58b40ac36c61"
    ) as IPayload;
    request.user_id = sub;

    return next();
  } catch (err) {
    console.log(err);
    return response.status(401).end();
  }
}
