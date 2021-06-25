import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export const ensureAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { user_id } = request;
  const usersRepositories = getCustomRepository(UsersRepositories);
  const { admin } = await usersRepositories.findOne(user_id);

  console.log(user_id, admin);

  if (admin) {
    return next();
  }

  return response.status(401).json({ error: "Unauthorized" });
};
