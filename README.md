# ts-monorepo

Project with configuration for monorepo in typescript.

## Basic config

These are the tools and steps to create the initial config from scratch.

vscode extensions

- [gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore)
- [Readme Pattern](https://marketplace.visualstudio.com/items?itemName=thomascsd.vscode-readme-pattern)

Initialize git

```
% git init
```

Pin node and yarn with volta

```
% volta pin node
% volta pin yarn
```

Install typescript and create tsconfig

```
% yarn add -D typescript
% tsc --init
```

Install eslint

```
% yarn add -D eslint
% yarn create @eslint/config
```

Lerna

```
## creates symlinks between internal packages
% lerna link

## install packages and creates symlinks
% lerna bootstrap

## run script from each package
% lerna run

## allows to run other commands like shell scripts
% lerna exec

```
