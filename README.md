env-is
=====================

### Usage

It is simple as a

```js
// for env = development
var env = require('env-is');

console.log(env.is('production')); // true if NODE_ENV is production
console.log(env.is(['production', 'staging'])); // true if NODE_ENV is production or staging

console.log(env.isNot('production')); // true if NODE_ENV is NOT production
console.log(env.isNot(['production', 'staging'])); // true if NODE_ENV is NOT production or staging
```

the return value of `env.is` will change depending on the value of `NODE_ENV` 

```js
	NODE_ENV=production node app
	//will return
	true
	true
	
	false
	false
```

```js
	NODE_ENV=staging node app
	//will return
	false
	true
	
	true
	false
```

```js
	NODE_ENV=development node app
	//will return
	false
	false
	
	true
	true
```