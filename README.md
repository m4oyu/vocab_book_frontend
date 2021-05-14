# vocab-book-front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Development log
2021/05/14\
vue-cookieはすでにhttponly設定がされていることが判明。\
XSS攻撃への対策
- 信頼できないCDNのコードを含めない
- ユーザからのinputに悪意を持ったコードが含まれないようバリデーションする。
- httponlyを設定（完全ではない）


2021/05/13\
vue-cookiesのhttponlyを設定する方法がなさそう。
vue-routerを導入した。

2021/05/10\
tokenの保存方法にCookieを選択\
[vue-cookies](https://github.com/cmp-cc/vue-cookies/)の導入\
参考：[Vue.jsエンジニアなら知っておきたいセキュリティー](https://kotamat.com/post/vuejs-security/)

2021/05/09\
project作成, 
[axios](https://github.com/axios/axios)の導入\
""と''が違うだけでうまくいかないことがあった

