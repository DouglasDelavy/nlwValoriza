import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

export class ListUserReceiveComplimentsController {
  public async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserReceiverComplimentsService =
      new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiverComplimentsService.execute(
      user_id
    );

    response.json(compliments);
  }
}
