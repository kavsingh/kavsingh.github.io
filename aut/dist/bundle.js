(function(){var a=[,],b=Function.prototype,c=Function.prototype.toString,d={enumerable:!1,configurable:!0,writable:!0},e=Symbol.iterator,f=Symbol.toStringTag,g=Object.prototype.toString,h=Array.from,i={enumerable:!1,configurable:!0,writable:!1},j=Object.defineProperty,k=this,l=function(){return'function'==typeof this&&this['Symbol(src)_1.gggznkfd3p']||H.call(this)},m=function(a,b){try{return a[b]}catch(a){}},n=function(a){return L.call(a).slice(8,-1)},o=function(a){var b,c,d;return void 0===a?'Undefined':null===a?'Null':'string'==typeof(c=m(b=k.Object(a),K))?c:n(b)},p=function(a){'use strict';return a[a.length-1]},q=function(a,b){'use strict';for(var c=[],d=0;d<b.length;d++)if(a(b[d])){var e=p(c);e&&p(e)===d-1?e.push(d):c.push([d])}return c},r=function(a){'use strict';return function(){for(var b=arguments.length,c=new k.Array(b),d=0;d<b;d++)c[d]=arguments[d];return c.length>=a.length?a.apply(void 0,c):r(a.bind.apply(a,[null].concat(c)))}},s=function(){'use strict';for(var a=arguments.length,b=new k.Array(a),c=0;c<a;c++)b[c]=arguments[c];return b.length>=q.length?q.apply(void 0,b):r(q.bind.apply(q,[null].concat(b)))},t=function(){'use strict';for(var a=arguments.length,b=new k.Array(a),c=0;c<a;c++)b[c]=arguments[c];return b.length>=v.length?v.apply(void 0,b):r(v.bind.apply(v,[null].concat(b)))},u=function(){'use strict';for(var a=arguments.length,b=new k.Array(a),c=0;c<a;c++)b[c]=arguments[c];return b.length>=y.length?y.apply(void 0,b):r(y.bind.apply(y,[null].concat(b)))},v=function(b,c){'use strict';return b===c},w=function(a){'use strict';return a[0]},x=function(a,b){'use strict';var c=void 0===b?{}:b,d=c.width,e=void 0===d?200:d,f=c.height,g=void 0===f?200:f,h=c.cellDim,j=void 0===h?2:h,i=c.inactiveFill,l=void 0===i?'#FFFFFF':i,m=c.activeFill,n=void 0===m?'#000000':m,o=a.getContext('2d'),q=k.Math.floor(g/j),r=function(){o.fillStyle=l,o.fillRect(0,0,e,g),o.fillStyle=n},u=function(a,b){for(var c=s(t(1),a),d=0;d<c.length;d++){var e=c[d],f=w(e),g=p(e);void 0!==f&&void 0!==g&&o.fillRect(f*j,b,e.length*j,j)}};return a.width=e,a.height=g,function(a){r();for(var b=k.Math.max(0,a.length-q),c=b;c<a.length;c++)u(a[c],g-(a.length-c)*j)}},y=function(a,b){'use strict';return(b%a+a)%a},z=function(d,e,a,b){var c=[e,a,b].join('');return d.some(function(a){return a===c})?1:0},A=function(d,a,b){return z.call(this,N,d,a,b)},B=function(a){'use strict';var b=a[a.length-1],c=u(b.length);return a.concat([b.map(function(a,d){return A(b[c(d-1)],b[d],b[c(d+1)])})])},C=function(a){'use strict';return function(b){var c=b[b.length-1],d=u(c.length);return b.concat([c.map(function(b,e){return a(c[d(e-1)],c[e],c[d(e+1)])})])}},D=function(){'use strict';return V},E=function(){'use strict';return O.reduce(function(a,b){return b(a)},D.apply(void 0,arguments))},F=function(b){'use strict';var c=0,d=a[c];d||(a[c]=d={switchAccum:0,evolve:B,worldState:W});var e=x(b,{CELL_DIM:2,width:600,height:k.Math.round(480)}),f=function(){d.switchAccum=60<=d.switchAccum?0:d.switchAccum+1,d.evolve=0===d.switchAccum?E():d.evolve,e(d.worldState=d.evolve(d.worldState))};k.window.requestAnimationFrame(function a(b){f(b),k.window.requestAnimationFrame(a)})},G=b;delete G.toString;var H=c;d.value='function toString() { [native code] }',j(l,'Symbol(src)_1.gggznkfd3p',d),j(G,'toString',{enumerable:!1,configurable:!0,writable:!0,value:l});var I=e,J={},K=f,L=g,M={prototype:{}};d.value=h,j(M,'from',d);core={version:'2.5.1',inspectSource:function(a){return H.call(a)},getIteratorMethod:function(a){if(void 0!=a)return a[I]||a['@@iterator']||J[o(a)]},Array:M};k['__core-js_shared__']={wks:{iterator:I,toStringTag:K}};var N=['101','100','011','000'];i.value='createEvolver',j(C,'name',i);var O=[function(a){'use strict';return a[k.Math.floor(k.Math.random()*a.length)]},C],P=['001','000'],Q=['100','001'],R=['101','011','010','000'],S=['110','011','000'],T=['111','101','100','010','001'],U=['111','110','101','000'],V=[function(d,a,b){return z.call(this,P,d,a,b)},function(d,a,b){return z.call(this,Q,d,a,b)},function(d,a,b){return z.call(this,R,d,a,b)},A,function(d,a,b){return z.call(this,S,d,a,b)},function(d,a,b){return z.call(this,T,d,a,b)},function(d,a,b){return z.call(this,U,d,a,b)}],W=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];i.value='main',j(F,'name',i),k.bootApp=F}).call(this);