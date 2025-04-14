export class CreateTaskDto {
  title: string;
  description: string;
  status: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  constructor(
    title: string,
    description: string,
    status: string,
    userId: number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
  ) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
