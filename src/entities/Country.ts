import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id?: number;

  @Column({ length: 100 })
  @Field()
  code: string = "";

  @Column({ length: 100 })
  @Field()
  name: string = "";

  @Column({ length: 50 })
  @Field()
  emoji: string = "";

  constructor(code: string, name: string, emoji: string) {
    super();
    this.code = code;
    this.name = name;
    this.emoji = emoji;
  }
}