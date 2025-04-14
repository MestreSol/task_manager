import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  title?: string;
  description?: string;
  status?: string;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;

  constructor(
    title?: string,
    description?: string,
    status?: string,
    userId?: number,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date | null,
  ) {
    super();
    this.title = title;
    this.description = description;
    this.status = status;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
