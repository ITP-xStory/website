# xStory website

[![Build Status](https://travis-ci.org/ITP-Xstory/website.svg?branch=master)](https://travis-ci.org/ITP-Xstory/website)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![cover](https://github.com/ITP-Xstory/website/raw/master/docs/cover.png)

1. [What is XStory?](#what-is-xstory)
2. [Getting started](#getting-started)
    - [Setting up the enviorment](#setting-up-the-enviorment)
    - [Setting up the website](#setting-up-the-website)
3. [Contributing](#contributing)
    - [Adding a project](#adding-a-project)
    - [Deploying the website](#deploying-the-website)
    - [Build commands](#build-commands)

### What is XStory?
ITP xStory is an organization dedicated to support, to promote and to publish innovative creative projects and tools in the field of digital storytelling and digital art, by ITP studets and alumni. The organization vision is to reach as many digital creators as possible, to inspire them with cutting edge ideas and creation tools, and to build a community of explorers around these ideas. The organization is sponsored and supported by NYU ITP.

### Getting started
#### Setting up the enviorment:
- Install `node` by downloading the right OS installer from [here](https://nodejs.org)
- On macOS, install Homebrew from [here](https://brew.sh)
- Once you have `brew` installed, install `yarn` by running
```sh
brew install yarn
```
Finally install `gatsby` globally by running 
```sh
yarn global add gatsby
```
#### Setting up the website:
- Clone the repository to your computer
```sh
git clone https://github.com/ITP-Xstory/website.git
```
- Enter the repository folder and install dependencies
```sh
cd website && yarn install
```
- Finally run the development server by running
```sh
yarn run develop
```
### Contributing
#### Adding a project:
The projects are automaticly created from markdown files stores in `src/pages/projects`. The project markdown format is:
```
---
path: '/awesomeproject'
date: '2018-05-23T12:34:00+00:00'
title: "Awesome Project"
tags: ['Awesome', "ML", "Experiment", "Immersive"]
thumbnail: 'https://cdn.awesomene.ss/awesomeproject.gif'
excerpt: "The tagline to be shown under the project in the front page"
---
The project description for the generated project page
```
To add a new project simply create a new `projectname.md` file in the `src/pages/projects/` folder in the mentioned format, the rest is history.
#### Deploying the website:
The `master` branch of the repository uses TravisCI to test and deploy the website to the `gh-pages` branch (which is linked to the domain) on every commit to `master`. Please **DO NOT** commit directly to master, but commit to a branch and Pull Request to `master` once you have finished updating the website, **we trust you** 🤝.
#### Build commands:
- `yarn run develop` - runs a development server on `localhost:8000`
- `yarn run format` - runs `prettier` to format the code
- `yarn run build` - builds a static version of the website to `public/` which doesn't get commited
- `yarn run deploy` - builds and deploys the static website the `gh-pages` branch. It **should not** be called by used, because TravisCI calls it on every commit to master


