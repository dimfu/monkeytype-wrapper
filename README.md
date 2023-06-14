# monkeytype-wrapper

A wrapper to work with Monkeytype API

## Installation & Usage

```
npm install --save monkeytype-wrapper
```

```js
import MonkeyWrapper from 'monkeytype-wrapper'

const monkey = new MonkeyWrapper(key)

// Using methods
monkey.users.profile('John Doe').then((res) => {
  console.log(res.name) // John Doe
}).catch((e) => {
  console.error(e)
})
```

More detailed examples will be documented soon

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
