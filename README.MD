#vue-toast
> toast for vue.

## props:

```
 props: {
         message: String,
         className: {
           type: String,
           default: ''
         },
         position: {
           type: String,
           default: 'middle'
         },
         iconClass: {
           type: String,
           default: ''
         }
    },
```

## usage:
+ install:
```bash
npm install smalleast/vue-toast --save


```

+ code:
```javascript
import VueToast from 'vue-toast';

import 'resolution';
import Vue from 'vue'
import Toast from '../components/toast.js'
Vue.$toast = Vue.prototype.$toast = Toast;

module.exports = {
  Toast
};

```

+template
```
<template>
  <aside class="dev">
    <button class="button" v-on:click="_click1()">toast top</button>
    <button class="button" v-on:click="_click2()">toast middle</button>
    <button class="button" v-on:click="_click3()">toast bottom</button>
  </aside>
</template>
```
+script
```
import {Toast} from './index'
  export default {
    data() {
      return {};
    },
    props: {},
    created(){
    },
    methods: {
      _click1(){
        Toast({message: '提示消息1', position: 'top', iconClass: 'wp-icon', duration: 3000});
      },
      _click2(){
        Toast({message: '提示消息2', position: 'middle'});
      },
      _click3(){
        this.$toast({message: '提示消息3', position: 'bottom'});
      }
    },
    components: {}
  };
```

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
