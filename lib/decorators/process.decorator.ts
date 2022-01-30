import { SetMetadata } from '@nestjs/common';
import { WorkerOptions } from 'bullmq';
import { isString } from 'util';
import { BULL_MODULE_QUEUE_PROCESS } from '../bull.constants';

export interface ProcessOptions extends WorkerOptions {
  name?: string;
}

export function Process(): MethodDecorator;
export function Process(name: string): MethodDecorator;
export function Process(options: ProcessOptions): MethodDecorator;
export function Process(
  nameOrOptions?: string | ProcessOptions,
): MethodDecorator {
  const options = isString(nameOrOptions)
    ? { name: nameOrOptions }
    : nameOrOptions;
  return SetMetadata(BULL_MODULE_QUEUE_PROCESS, options || {});
}
