## AngularCypress

This is a demonstration of a behavioral difference of Angular component mounting between `cypress open` and `cypress run` scripts.

### Setup

```
npm install
```

### Run

```
npm run serve
```

### Cypress Tests

By default, headed Chrome browser is used on both scripts for demonstration purposes. Feel free to change the default browser in [package.json](./package.json).

#### With `cypress open`:

```
npm run cy:open
```

#### With `cypress run`:

```
npm run cy:run
```
