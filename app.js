// 事前準備
// yarnのインストール
// curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.13.0
// PATHの適用
// source ~/.bashrc
// requestライブラリのインストール
// yarn add request はエラーになった(VirtualにUbuntu環境)
// yarn add request --no-bin-links で入った

'use strict';
const request = require('request'); //requestライブラリの取得
request('https://www.google.com', (erroe, response, body) => {
    console.log(body);
})