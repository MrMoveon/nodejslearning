const url = require('url');
const myurl = url.parse('http://www.imooc.com:8080/video/6710?form=hello&status=false#floor');
console.log(myurl);

const {URL} = require('url');
const myurl2=new URL('http://www.baidu.com:80');
myurl2.hash='floor';
myurl2.port=8080;
myurl2.hostname="www.sina.com";
console.log(myurl2)