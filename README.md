# rocketchat-flyin-packaged-app-reactjs

This is a simple Rocket.Chat Meteor plugin to demonstrate a de-coupled way to use slash commands and fly-in panels.

## Rationale

**BEGIN: TRIGGER WARNING**

I am _not_ a fan of Meteor.js. While I think that some of the concepts behind it are interesting, I strongly dislike how prescriptive it is and how it aims to build it's own ecosystem rather than taking the best-of-breed things that already exist in JavaScript / Node.js land.

**END: TRIGGER WARNING**

However, there are some interesting projects built with Meteor, like [Rocket.Chat](https://rocket.chat/).

Rocket.Chat allows you to extend it with Meteor packages. I wanted to have a _loosely coupled_ way to write web applications that can be embedded (client-side) into Rocket.Chat. That is to say that I wanted to essentially "deploy" a client-side web app using React.js into Rocket.Chat.

Since [Meteor packages allow you to use NPM dependencies](https://themeteorchef.com/snippets/using-npm-packages/), you can simply use  `NPM.depends()` and `cosmos:browserify` to load a de-coupled, pre-bundled React.js app.  This repository is my best-effort at creating a Meteor package to prove out that concept.

See also (the associated pre-bundled React.js app): [packaged-app-reactjs](https://github.com/jeffreywescott/packaged-app-reactjs)

## Getting Started

Be sure you've read the [instructions for contributing](./CONTRIBUTING.md).

```bash
$ meteor add jeffreywescott:rocketchat-flyin-packaged-app-reactjs
```

You should see two things inside of your Rocket.Chat instance:

1. An additional tab bar button on the RHS with a rocket icon.
2. An additional "slash command" `/flyin`.

Clicking the new button or issuing the `/flyin` command will run the pre-bundled React.js app in a fly-in panel.

## License

See the [LICENSE](./LICENSE) file.
