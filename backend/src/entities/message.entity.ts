import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    senderId: number;

    @Column()
    messageContent: string;
}