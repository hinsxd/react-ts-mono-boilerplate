import {
  Query,
  Resolver,
  Mutation,
  Args,
  ArgsType,
  Field,
  Arg
} from 'type-graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { User } from 'src/entity/User';
import { validate } from 'class-validator';

@ArgsType()
class AddUserArgs {
  @Field()
  email: string;
}

@Resolver(User)
export class UserResolver {
  @InjectRepository(User)
  private readonly userRepo: Repository<User>;

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userRepo.find();
  }

  @Mutation(() => User)
  async addUser(@Args() { email }: AddUserArgs): Promise<User> {
    try {
      const user = this.userRepo.create({ email });
      const errors = await validate(user);
      if (errors.length > 0) {
        throw new Error();
      }
      return this.userRepo.save({ email });
    } catch (err) {
      throw new Error('Cannot create user with email = ' + email);
    }
  }
}
