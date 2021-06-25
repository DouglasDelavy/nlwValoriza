import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";

export class ListTagsController {
  public async handle(request: Request, response: Response) {
    const listTagsService = new ListTagService();

    const tags = await listTagsService.execute();

    response.json(tags);
  }
}
