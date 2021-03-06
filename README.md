# UFPB Programs

[![Build Status](https://api.travis-ci.org/gustavosobral/ufpb_programs_site.svg?branch=master)](https://travis-ci.org/gustavosobral/ufpb_programs_site)

Application to provide useful features with a friendly experience for the UFPB Graduation Programs. Built using the Single Page Application (SPA) concept with AngularJS 1.5 framework and Webpack as a module bundler. The app is actually hosted on GitHub Pages:

http://gustavosobral.github.io/ufpb_programs_site

## Installation
```bash
$ npm install -g webpack
$ npm install -g webpack-dev-server
$ npm install
```

## Development

Run `$ npm run serve` to starts the webpack-dev-server. Then, access him on: http://localhost:8080/

## Production

Execute the following command to build the production files.

```bash
$ npm run build
```

## API

The app is consuming the [Unofficial UFPB SIGAA API (Old)](https://github.com/fernandobrito/ufpb_sigaa_api_old) hosted on Heroku.

## Style Guide

Our style guide is strongly inspired on this [Angular Style Guide](https://github.com/johnpapa/angular-styleguide) by JohnPapa.
