# Ajap  
## ajax jsonp  
## It is only ajax jsonp method and is very easy to use.  
## Why I create it.  
Hot JavaScript Framework such as Vue and React not offer ajax method. And most popular ajax method such axios and SuperAgent not support jsonp. Other open jsonp method use not very well and jQuery is big. So I create this.
## How to install
If you want use single js file. These files is in   *dist* folder
```
//development mode
<script src="ajap.js"></script>

//production mode
<script src="ajap.min.js" ></script>
```

If you use webpack.
```
//Install it.
npm install ajap --save

// Use it.
// import
import Ajap from 'ajap';

// Or require

const Ajap = require('ajap');

```
## How to use it 
```
Ajap({ 
  url:'',
  data:{},
  success:function
  callback:'',
  callbackName:'',
  load:function,
  nocallback:boolean
})
 
 url -> string -- it can include '?'
 data -> object
 success -> function
 callback -> string
 callbackName -> string
 load -> function
 nocallback -> boolean
```  

data: Your send data  
success: If is successful get data run function  
load: If data loaded callback function  
nocallback: No callback param , default `false` , If you set `true` param `success` , `callback` , `callbackName` will be useless  
  
Ajap also takes optional `callback` and `callbackName` options to specify the callback query-string key and the callback function name respectively while jQuery uses jsonp and jsonpCallback for these same options.