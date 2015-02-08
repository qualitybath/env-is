env-is
=====================
**Simple module to test if current NODE_ENV is or is not within a list of allowed environments**

### Usage

It is simple as:

```js
// for env = development
var env = require('env-is');

console.log(env.is('production')); // true if NODE_ENV is production
console.log(env.is(['production', 'staging'])); // true if NODE_ENV is production or staging

console.log(env.isNot('production')); // true if NODE_ENV is NOT production
console.log(env.isNot(['production', 'staging'])); // true if NODE_ENV is NOT production or staging
```

The return value of `env.is` will change depending on the value of `NODE_ENV` 

```
NODE_ENV=production node app
```
Will return:
```js
console.log(env.is('production')); //true
console.log(env.is(['production', 'staging'])); //true

console.log(env.isNot('production')); //false
console.log(env.isNot(['production', 'staging'])); //false
```
And
```
NODE_ENV=staging node app
```
Will return:
```js
console.log(env.is('production')); //false
console.log(env.is(['production', 'staging'])); //true

console.log(env.isNot('production')); //true
console.log(env.isNot(['production', 'staging'])); //false
```
And...
```
NODE_ENV=development node app
```
Will return
```js
console.log(env.is('production')); //false
console.log(env.is(['production', 'staging'])); //false

console.log(env.isNot('production')); //true
console.log(env.isNot(['production', 'staging'])); //true
```
