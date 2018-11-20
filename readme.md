# PageWheelz
[Wheelz](https://github.com/gmrchk/wheelz) extension for use on a the window.  
[**Demo here**](https://gmrchk.github.io/pagewheelz/)

## Installation
Include PageWheelz with scripts tag

```html
<script src="./dist/pagewheelz.min.js"></script>
```
or with *npm* and *import*
```shell
npm install wheelz --save
```
```javascript
// import needed modules from npm
import PageWheelz from 'pagewheelz';
```

## Usage
Wheelz accepts several options defined as follows.
```javascript
var wheelz = new PageWheelz();
```

For the purpose of keeping the native window scrollbar, PageWheelz requires a wrapper over a content with attribute `data-wheelz`.
