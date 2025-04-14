import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Console } from 'console';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTaskDto: CreateTaskDto) {
    if (!createTaskDto.title) {
      throw new Error('Title is required');
    }
    if (!createTaskDto.description) {
      throw new Error('Description is required');
    }
    if (!createTaskDto.status) {
      throw new Error('Status is required');
    }
    if (!createTaskDto.userId) {
      throw new Error('User ID is required');
    }
    if (!createTaskDto.deletedAt) {
      throw new Error('Deleted At is required');
    }
    createTaskDto.createdAt = new Date();

    return this.prisma.task.create({
      data: {
        title: createTaskDto.title,
        description: createTaskDto.description,
        status: createTaskDto.status,
        //userId: createTaskDto.userId,
        createdAt: createTaskDto.createdAt,
        updatedAt: createTaskDto.updatedAt,
        //deletedAt: createTaskDto.deletedAt,
      },
    });
  }

  findAll() {
    return this.prisma.task.findMany().then((tasks) =>
      tasks.map((task) => ({
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
      })),
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
