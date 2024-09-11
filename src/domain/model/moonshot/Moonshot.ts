import { InitMoonshotOptions } from './InitMoonshotOptions';
import { InitTokenOptions, Token } from '../token';

export class Moonshot {
  // TODO create evm provider
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-useless-constructor,@typescript-eslint/no-empty-function
  constructor(options: InitMoonshotOptions) {}

  Token(options: Omit<InitTokenOptions, 'moonshot'>): Token {
    return new Token({ ...options, moonshot: this });
  }
}
