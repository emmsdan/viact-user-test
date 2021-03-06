<p align="center">
  <a href="http://nestjs.com/" target="blank">
<img src="https://static.wixstatic.com/media/d624f0_f989b7244fb546c0ba142fb927371c85~mv2.png/v1/crop/x_0,y_1,w_401,h_130/fill/w_228,h_70,al_c,usm_0.66_1.00_0.01/LOGO.png" height="80" alt="Nest Logo" />
</a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

#### [Git](https://github.com/emmsdan/viact-user-test) repository. https://github.com/emmsdan/viact-user-test
#### [API](http://api.viact.emmsdan.com.ng) http://api.viact.emmsdan.com.ng


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod
```
## API Documentation
Endpoint: `http://api.viact.emmsdan.com.ng` or your localhost:xxxx

### Login
POST: `http://api.viact.emmsdan.com.ng/auth/login`

POST:  `/auth/login`

##### Request Body
```javascript
{
    "username": "test@yopmail.com",
    "password": "just1234"    
}   
```
##### Response
```javascript
{
    "id": "4pSN2OZ2WoPYrP01ahwmuZDtjTo2",
    "name": "SomeKid Named",
    "photoURL": null, 
    "email": "test@yopmail.com", 
    "emailVerified": false,
    "accessToken": "xxxx"
}  
```

### Register
POST: `http://api.viact.emmsdan.com.ng/auth/register`

PORT: `/auth/register`
##### Request Body
```javascript
{
    "email": "test@yopmail.com",
    "password": "just1234",
    "name": "SomeKid Named",
    "phone": "11234567890"   
}   
```
##### Response
```javascript
{
    "id": "4pSN2OZ2WoPYrP01ahwmuZDtjTo2",
    "photoURL": null, 
    "email": "test@yopmail.com",
    "emailVerified": false, 
    "accessToken": "xxxx"
    "name": "SomeKid Named",
    "phone": "11234567890"
}  
```

### Profile Info;
POST: `http://api.viact.emmsdan.com.ng/api/me`

PORT: `/api/me`

##### Request Header
```javascript
{
    "Authorization": "Bearer {accessToken}"
}   
```
##### Response
```javascript
{
    "id": "4pSN2OZ2WoPYrP01ahwmuZDtjTo2",
    "displayName": "SomeKid Named",
    "photoURL": null, 
    "email": "test@yopmail.com", 
    "emailVerified": false,
}  
```
## Stay in touch

- Author - [Emmanuel Daniel (EmmsDan)](https://github.com/emmsdan)
- Website - [https://emmsdan.com](https://emmsdan.com/)
- Twitter - [@emmsdan](https://twitter.com/emmsdan)

## License

Project is [BSD 2-Clause licensed](LICENSE).
