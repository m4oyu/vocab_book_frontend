# vocab-book-front

### Project Deploy to GCP Cloud Run
First: Google Cloud SDK Shell
```
$ gcloud builds submit --tag us-central1-docker.pkg.dev/my-tutorial-47525/quickstart-docker-repo/quickstart-image:tag3
```
Second: Select image & Deploy on Cloud Run

### Project Run on Ubuntu
```
$ docker build -t vuejs-cookbook/dockerize-vuejs-app .
$ docker run -it --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Development log
2021/05/23\
cloud build時にエラーを吐いたのでnode_modulesを削除したらうまくいった。\
[refer](https://github.com/vuejs/vue-cli/issues/5210)


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

