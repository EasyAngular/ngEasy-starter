## Angular 2 (final) seed project
This is super simple Angular 2 seed project. I am using gulp to compile typescript and sass files. Also using gulp/webpack to bundle the files for th release.

#### Setup:
Install node modules:

```
npm install
```

Also don't forget to install gulp globally:

```
npm install -g gulp
```

Start gulp to compile typescript and sass:

```
gulp
```

Once you finished the development, do a release by running the following command:

```
gulp release
```

#### Folder structure

```
root
├── app [.ts will be compiled here]
├── src
├── release - [bundled file]
│   ├── dev - [typescript files]
│   └── scss - [sass files]
├── static - [.scss will be compiled here]
└── index.html
```