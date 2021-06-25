import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  public async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { tag_id, user_receiver, message } = request.body;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tag_id,
      user_receiver,
      user_sender: user_id,
      message,
    });

    response.json(compliment);
  }
}

export { CreateComplimentController };
