/* eslint-disable no-restricted-globals */
import bcrypt from 'bcryptjs';
import handleRequest from './handler';

// 在此处初始化 bcrypt 的随机数算法
bcrypt.setRandomFallback((num: number) =>
  Array.from(crypto.getRandomValues(new Int32Array(num))),
);

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request, event));
});
