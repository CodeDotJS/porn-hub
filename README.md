<h1 align="center">
<br>
	<b>🅿 🅾 🆁 🅽 - 🅷 🆄 🅱</b>
	<br>
</h1>

<p align="center">
	<br>
	<a href="https://travis-ci.org/CodeDotJS/porn-hub"><img src="https://travis-ci.org/CodeDotJS/porn-hub.svg?branch=master"></a>
	<img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg">
</p>

<h3 align="center">ℍ𝕆ℝℕ𝕐   ℙ𝕆ℝℕ𝕐   ℂ𝕆ℝℕ𝕐</h3>



### Install

```
$ npm install --save porn-hub
```

### Usage

```js
const pornhub = require('porn-hub');

const url = 'https://www.pornhub.com/view_video.php?viewkey=ph56fc59c124c0c';

pornhub(url, 'title').then(res => {
  console.log(res);
  // => { data: 'Hot kissing scene' }
});

```

```js
pornhub(url, 'views').then(res => {
  console.log(res);
  // => { data: '615,031' }
});
```

```js
pornhub(url, 'low').then(res => {
  console.log(res);
  // => { data: 'https://cv.phncdn.com/videos/201603/30/../240P_400K_72472822.mp4?a5c..3d8' }
});
```

### `API`

#### __`pornhub(url, opts)`__


__`typeof`__ `url`  __-__ __`string`__

__`tyepof`__ `opt` __-__ __`string`__

| __`opts`__ | __`get`__                  |
|------------|----------------------------|
| __`title`__      | `title of the porn`          |
| __`views`__      | `total views on a video`     |
| __`percent`__    | `popularity percentage`      |
| __`upvotes`__    | `total upvotes on a video`   |
| __`downvotes`__  | `total downvotes on a video` |
| __`provider`__   | `video uploaded by`          |
| __`low`__        | `240px downloadable url`     |
| __`medium`__     | `480px downloadable url`     |
| __`high`__       | `720px downloadable url`     |

### Related

- __[`phub`](https://github.com/CodeDotJS/phub)__ `:` `PornHub Informer`

## License

MIT - Copyright &copy; [Rishi Giri](http://rishi.ml)
