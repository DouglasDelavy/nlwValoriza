import { Request, Response } from "express";
import { CreateUserServices } from "../services/CreateUserServices";

class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, admin } = request.body;

    const createUserService = new CreateUserServices();

    const user = await createUserService.execute({ name, email, admin })

    return response.status(201).json(user);
  }
}

export { CreateUserController };