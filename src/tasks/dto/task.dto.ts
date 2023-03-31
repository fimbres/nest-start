/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsIn, MinLength, IsOptional } from 'class-validator';
import { TaskStatus } from '../tasks.entity';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsIn([
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.PENDING
  ])
  @IsOptional()
  status?: TaskStatus;
}
