import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin, password }: IUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) throw new Error("Email incorrect");

    const userAlreadyExists = await usersRepository.findOne({ email });
    if (userAlreadyExists) throw new Error("User already exists");

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name: name,
      email: email,
      admin: admin,
      password: passwordHash,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
