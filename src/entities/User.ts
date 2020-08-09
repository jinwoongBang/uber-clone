import { IsEmail } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  @IsEmail()
  email: string;

  @Column({ type: 'boolean', default: false })
  verifiedEmail: boolean;

  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  phoneNumber: string;

  @Column({ type: 'boolean', default: false })
  verifiedPhoneNumber: boolean;

  @Column({ type: 'text' })
  profilePhoto: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updateAt: string;

  //   facebookID: String;
  //   age: Int;
  //   password: String;
  //   phoneNumber: String;
  //   verifiedPhoneNumber: !Boolean;
  //   profilePhoto: String;
  //   createdAt: !String;
  //   updatedAt: !String;
  //   fullName: String;
  //   isDriving: !Boolean;
  //   isRiding: !Boolean;
  //   isTaken: !Boolean;
  //   lastLog: Float;
  //   lastLat: Float;
  //   lastOrientation: Float;
}

export default User;
