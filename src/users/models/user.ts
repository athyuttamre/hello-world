import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  BaseEntity
} from "typeorm";

import generateId from "../lib/generateId";

@Entity("users")
class User extends BaseEntity {
  prefix = "user";

  @BeforeInsert()
  generateId() {
    this.id = generateId(this.prefix);
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  passwordHash: string;
}

export default User;
