import assert from 'assert';
import _ from 'lodash';

export class PromiseUtils {
  static async oneResolveForMulti<T = any>(
    values: Iterable<T | PromiseLike<T>>,
  ) {
    const resolves = await Promise.allSettled(values);
    const promise = _.find(resolves, [
      'status',
      'fulfilled',
    ]) as PromiseFulfilledResult<T>;
    assert.ok(promise, new Error('[OneResolveForMulti] Promise not fulfilled'));

    return promise.value;
  }
}
