import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

export class ListUsersController {
  public async handle(request: Request, response: Response) {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    response.json(users);
  }
}
