import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  webhook(): string {
    return 'Hello World!';
  }
}
