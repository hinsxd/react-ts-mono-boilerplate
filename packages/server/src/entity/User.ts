import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { IsEmail } from 'class-validator';

@Entity()
@ObjectType()
export class User {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  @IsEmail()
  email: string;
}
