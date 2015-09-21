# React Hot Reload Rails

A project set up with react + webpack (hot reload in dev) + rails

# Caveats

* not configured for prod (yet)

# Prerequisites

1. Ruby >= 2.0.0
2. Rails  4.2.4
3. Node.js (see note about versions)

This project is known to work on the following versions of Node.js:
```
0.12.7 (and npm 2.11.3)
4.1.0 (and npm 2.14.3)
```
_Note: This project is **not** compatible with Node.js v4.0.0 / npm v2.14.2 or Node.js v0.12.6 / npm v2.12.1._

This project has not been tested with versions of Node.js prior to 0.12.6, and is unlikely to work with those versions. If you find that it works with a previous version, please add it to the known compatible versions and [submit a pull request](/pulls?q=is%3Aopen+is%3Apr).


# Install

    bundle
    npm install
    npm install webpack-dev-server --global # makes the webpack-dev-server command available
    foreman start -f Procfile.dev

# See Hot Reload in Action

1. Start server (foreman line above)
2. Cruise to localhost:3000
3. Open one of the two javascript files in an editor (e.g., `client/greeting.jsx`)
4. Make a change
5. Save the file
6. OMFG no page refresh!!!!!111111one

# Commits

I rebased the commits more than once, to make the steps as clear as possible.  Please [reach out](https://github.com/hoffmanc) if something is unclear.

## References
1. [Dave Clark's tutorial](http://clarkdave.net/2015/01/how-to-use-webpack-with-rails/)
2. [thougtbot article on webpack+react+hmr](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement)
3. [react hot loader docs](http://gaearon.github.io/react-hot-loader/getstarted/)
