# enhance-movie

This is a Movies App built using [Enhance](https://enhance.dev) and [The Movie Database (TMDB)](https://www.themoviedb.org/) API.

## Demo

A <font size="5">[live demo](https://enhance-movies.com/)</font> of this app is available to try it out.

## Contributing

Contributions are always welcome!

For large changes, please file an issue to discuss your proposed changes with us before working on a PR :)

## Quickstart

Clone and install the dependencies for enhance-movie locally:

```bash
git clone git@github.com:enhance-dev/enhance-movies.git
cd enhance-movies
npm install
```

- Take a copy of .env.local.example and re-name to .env
- Get an API token from [TMDB](https://www.themoviedb.org/)
- Enter the details into the .env file

```
TMDB_API_TOKEN=<My API token>
```

- `npm start`

### What if I don't want to get a TMDB API Token?

If your `TMDB_API_TOKEN` is not set then you will receive mock data provided by the `mock-tmdb` plugin in `src/plugins/mock-tmdb.mjs`. I sure hope you like "Transformers: Rise of the Beasts".

## License

[MIT](https://choosealicense.com/licenses/mit/)
