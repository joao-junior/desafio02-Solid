import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IHeaders extends IncomingHttpHeaders {
  user_id: string;
}
class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = <IHeaders>request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.json(users);
    } catch (err) {
      return response.status(400).json({ error: "Mensagem do erro" });
    }
  }
}

export { ListAllUsersController };
