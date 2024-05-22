import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/enums/roles.enum';
const ROLE_KEY = 'roles';
export const Roles = (role: Role) => SetMetadata(ROLE_KEY, role);
