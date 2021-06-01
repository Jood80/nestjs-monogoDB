import { Prisma } from '@prisma/client';

export class PostParamsDto {
  readonly skip: number;
  readonly take: number;
  readonly cursor: Prisma.PostWhereUniqueInput;
  readonly where: Prisma.PostWhereInput;
  readonly orderBy: Prisma.PostOrderByInput;
}

export class UpdatePostParamsDto {
  where: Prisma.PostWhereUniqueInput;
  data: Prisma.PostUpdateInput;
}
