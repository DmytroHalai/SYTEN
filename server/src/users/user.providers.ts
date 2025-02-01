import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { DATA_SOURCE } from 'src/constants/dataSource/dataSource';
import { USER_REPOSITORY } from 'src/constants/dbRepositories/userRepo';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  },
];
