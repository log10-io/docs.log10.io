# docs.log10.io

This is the main documentation site for https://log10.io, and is hosted on https://docs.log10.io
It is built in [nextra](https://nextra.site/), which is a nextjs framework which renders mdx files.
For more information about available components in nextra, please refer to [the nextra documentation](https://nextra.site/docs/guide).

## Contributing

To build the current site you need [node](https://nodejs.org/en/download) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
Then run:

```bash
$ yarn
$ yarn dev
```

This should open the site on http://localhost:3000 and should update as you make changes.

Before submitting a pull request, check that the production build passes:

```bash
$ yarn build
```

