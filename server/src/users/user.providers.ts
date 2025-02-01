import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { DATA_SOURCE } from 'src/constants/dataSource/dataSorce';
import { USER_REPOSITORY } from 'src/constants/dbRepositories/userRepo';

export const photoProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  },
];
