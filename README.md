# Gammasoft71 website sources

Gammasoft aims to make C++ fun again.

## About

* Gammasoft is the nickname of [Yves Fiumefreddo (@yfiumefreddo)](https://github.com/yfiumefreddo).
* More than thirty years of passion for high technology especially in development (c++, c#, objective-c, ...).
* Object-oriented programming is more than a mindset.

## ... also

* The c++ is my favorite language, naturaly followed by c#.
* I like Apple products for their simplicity of use but I also admire the technologies of Microsoft for their efficiency as for example the .Net Framework.
* The name Gammasoft was created by analogy with Microsoft. I know... but I was young at this time.

## Introduction

This project is a documentation site for **[Gammasoft71](https://github.com/gammasoft71)**.

Website : https://gammasoft71.github.io/

## Continuous Integration build status

[![Deploy to GitHub Pages](https://github.com/gammasoft71/xtd/actions/workflows/deploy.yml/badge.svg)](https://github.com/gammasoft71/xtd/actions/workflows/deploy.yml)

## Installation

### Requirements

- [Node.js](https://nodejs.org/en/) >= 16.14

```
$ yarn
```

This commands install all needed packages.

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```
$ yarn serve
```

This command starts a local server from `build` directory and opens up a browser window.

### Deployment

```
$ yarn deploy
```

This command use `yarn build` and deploy the `build` directory into the `gh-pages` branch.

> **Warning**
>
> An error may occur when the `gh-pages` **local** branch already exists. Delete it with :
>
> ```
> $ git branch -D gh-pages
> ```
>
> And then use the *deploy* command.

## Special thanks

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.
