<h1 align="center">Welcome to nest-brewery 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
</p>

> API for a brewery to keep track of Beers

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## API Endpoints

### GET
**/**
Redirects to Swagger documentation

### GET
**/api**
Swagger documentation

### GET
**/get**
Returns all beers in the database

### POST
**/post**
Creates a new beer with mandatory parameters **beerName** and **ABV**

### GET
**/get/ABV=:ABV**
Returns all beers with the specific **ABV** passed as parameter

### GET
**/get/minABV=:minABV&maxABV=:maxABV**
Returns all beers with ABV between **minAABV** and **maxABV** parameters


## Author

👤 **Yannick Vindevoghel**

* Github: [@Vindevoghel](https://github.com/Vindevoghel)
* LinkedIn: [@vindevohel](https://linkedin.com/in/vindevohel)
