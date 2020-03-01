import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const RandomString = new InjectionToken<any[]>('RandomString');

export function GeneratorFactory(n: number) {
  return (data: GeneratorService): string =>
    data.getString(n);
}
