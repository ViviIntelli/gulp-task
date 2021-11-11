<!-- Variables -->
[GulpLink]: https://gulpjs.com/

<!-- Template -->

# `VIVI PROJECT:// GULP-TASK`

A tool for quick and easy task creation that will avoid code repetition.

* * * * *

## Install
```
$ npm i @vivi-project/gulp-task
```

## Usage
This will be similar to how you normally create a [task for Gulp][GulpLink]. First you need to initialize the class and assign it to a variable:

```ts
import { dest } from 'gulp';
import scss from 'gulp-scss';
import autoprefixer from 'gulp-autoprefixer';
import CreateTask from '@vivi-project/gulp-task';

const task = new CreateTask('./index.scss', {allowEmpty: true});
```

Use a setter `common` to determine the shared flow for modes `developing` and `production`. Setters `developing` and `production` extend stream transmitted to the `common` setter. The `result` method returns the task depending on the passed value:

```ts
import { dest } from 'gulp';
import scss from 'gulp-scss';
import autoprefixer from 'gulp-autoprefixer';
import CreateTask from '@vivi-project/gulp-task';

const task = new CreateTask('./src/index.scss', {allowEmpty: true});

task.common = src => src
	.pipe(scss());

task.developing = src => src
	.pipe(desc('./dest'));

task.production = src => src
	.pipe(autoprefixer())
	.pipe(desc('./dest'));

const devTask = task.result('dev');
const prodTask = task.result('prod');

export { devTask, prodTask }
```

* * * * *

## Methods
| №     | Method       | Description                                      | Arguments                                                                 | Returns                   |
|:-----:|:-------------|:-------------------------------------------------|:--------------------------------------------------------------------------|:--------------------------|
| **1** | `common`     | Define common stream                             | _**callback**_: `() => NodeJS.ReadWriteStream`                            | `void`                    |
| **2** | `developing` | Extending the general flow for `developing` mode | _**callback**_: `(src: NodeJS.ReadWriteStream) => NodeJS.ReadWriteStream` | `void`                    |
| **3** | `production` | Extending the general flow for `production` mode | _**callback**_: `(src: NodeJS.ReadWriteStream) => NodeJS.ReadWriteStream` | `void`                    |
| **4** | `result`     | Getting a complete task                          | _**mode**_: `'dev'` or `'prod'`                                           | `NodeJS.ReadWriteStream`  |