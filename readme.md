# yn

> Parse yes/no like values

Useful for validating answers of a CLI prompt.

---

The following case-insensitive values are recognized:

```js
'y', 'yes', 't', 'true', true, '1', 1, 'n', 'no', 'f', 'false', false, '0', 0, 'on', 'off'
```

*Enable lenient mode to gracefully handle typos.*

## Install

```sh
npm install yn
```

## Usage

```js
import yn from 'yn';

yn('y');
//=> true

yn('NO');
//=> false

yn(true);
//=> true

yn('abomasum');
//=> undefined

yn('abomasum', {default: false});
//=> false

yn('mo', {lenient: true});
//=> false
```

Unrecognized values return `undefined`.

## API

### yn(input, options?)

#### input

Type: `unknown`

The value that should be converted.

#### options

Type: `object`

##### lenient

Type: `boolean`\
Default: `false`

Use a key distance-based score to leniently accept typos of `yes` and `no`.

##### default

Type: `boolean`\
Default: `undefined`

The default value if no match was found.
