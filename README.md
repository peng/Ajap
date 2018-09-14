# Ajap  
## ajax jsonp  
## It is only ajax jsonp method and is very easy to use.  
## Why I create it.  
Hot JavaScript Framework such as Vue and React not offer ajax method. And most popular ajax method such axios and SuperAgent not support jsonp. Other open jsonp method use not very well and jQuery is big. So I create this.
## How to use it 
```
Ajap({ 
  url:'',
  data:{},
  success:function
  async:boolean,
  callback:'',
  callbackName:''
})
 
 url -> string
 data -> object
 success -> function
 async -> boolean
 callback -> string
 callbackName -> string
```  

data: your send data  
success: if is successful get data run function  
async: request is async or not, default is `true` . If you want sync set `false`  
  
Ajap also takes optional `callback` and `callbackName` options to specify the callback query-string key and the callback function name respectively while jQuery uses jsonp and jsonpCallback for these same options.