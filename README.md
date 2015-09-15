# React Hot Reload Rails

A project set up with react + webpack (hot reload in dev) + rails

# Caveats

* not configured for prod (yet)

# Install

    bundle
    npm install
    npm install webpack-dev-server --global # makes the webpack-dev-server command available
    foreman start -f Procfile.dev

# See Hot Reload in Action

1. Start server (foreman line above)
1. Cruise to localhost:3000
1. Open one of the two javascript files in an editor (e.g., `client/greeting.jsx`)
1. Make a change
1. Save the file
1. OMFG no page refresh!!!!!111111one

# Commits

I rebased the commits more than once, to make the steps as clear as possible.  Please [reach out](https://github.com/hoffmanc) if something is unclear.

## References
1. [Dave Clark's tutorial](http://clarkdave.net/2015/01/how-to-use-webpack-with-rails/)
1. [thougtbot article on webpack+react+hmr](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement)
1. [react hot loader docs](http://gaearon.github.io/react-hot-loader/getstarted/)
