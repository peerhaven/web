# FAQ

Please check the following questions before getting in touch with us.
Be aware that we omit some file contents or command line output to keep things concise.

## Contents

- [Files](#files)
  - [Where do I put meta data?](#where-do-i-put-meta-data)
- [Errors](#errors)
  - [ENOSPC](#enospc)
  - [Hot update could not be found](#hot-update-could-not-be-found)

## Files

Common tasks and how they're connected to the project's files.

### Where do I put meta data?

`nuxt.config.js` lets you define default meta data in its `head` property:

```javascript
module.exports = {
  head: {
    link: [],
    meta: []
  }
};
```

## Errors

There's a few issues we have encountered in the past.
See this list if you have problems.

### ENOSPC

```bash
$ yarn run dev
nuxt:build App root: ~/peerhaven/web +0ms
nuxt:build Generating ~/peerhaven/web/.nuxt files... +1ms
events.js:137
      throw er; // Unhandled 'error' event
      ^

Error: watch ~/peerhaven/web ENOSPC
```

This error is caused by the limit on the amount of files your system allows you to watch and is connected to Nuxt's hot reload functionality.
You can easily check the corresponding setting:

```bash
$ cat /proc/sys/fs/inotify/max_user_watches
8192
```

This is not enough, even for a basic hello world application:

```bash
$ tree -a # in project root directory
3232 directories, 20741 files
```

The solution is to raise the limit:

```bash
$ echo fs.inotify.max_user_watches=65536 | sudo tee -a /etc/sysctl.conf
$ sudo sysctl -p
$ cat /proc/sys/fs/inotify/max_user_watches
65536
```

#### Sources

- [guard/listen wiki](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers)
- [Nuxt.js issue #563](https://github.com/nuxt/nuxt.js/issues/563)
- [Stack Overflow](https://stackoverflow.com/q/22475849/2040520)

### Hot update could not be found

```
  nuxt:render Rendering url /_nuxt/bd395ed6e1ba868f20f5.hot-update.json +5m
{ statusCode: 404,
  path: '/_nuxt/bd395ed6e1ba868f20f5.hot-update.json',
  message: 'This page could not be found' }
```

[Nuxt.js issue #2710](https://github.com/nuxt/nuxt.js/issues/2710) is related to hot reloading and may be fixed with _Nuxt.js 2_.
