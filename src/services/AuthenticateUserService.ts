import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  public async execute({
    email,
    password,
  }: IAuthenticateRequest): Promise<string> {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });
    if (!user) throw new Error("Email/Password incorrect");

    const passwordCompare = await compare(password, user.password);
    if (!passwordCompare) throw new Error("Email/Password incorrect");

    const token = sign(
      {
        email: user.email,
        name: user.name,
      },
      "135e2f1056f4bcc98d9a58b40ac36c61",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
