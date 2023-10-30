export const testHtml =
  '<div class="markdown-body"><style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:16px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:24px;margin-bottom:5px}.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{font-size:20px}.markdown-body h2{padding-bottom:12px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:""}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49a57f2fb0254f0c90b6a810e899d699~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="防抖与节流.png" loading="lazy" class="medium-zoom-image"></p>\n' +
  '<p>在开发中，我们可能碰到这样的问题：</p>\n' +
  '<ul>\n' +
  '<li>用户在搜索的时候，在不停的输入，如果每敲一个字我们就要调一次接口去查询，接口调用太频繁，会占内存给卡住。</li>\n' +
  '<li>手机号、邮箱验证输入检测</li>\n' +
  '<li>窗口大小resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。</li>\n' +
  '<li>页面滚动处理事件</li>\n' +
  '</ul>\n' +
  '<h4 data-id="heading-0">原理分析</h4>\n' +
  '<blockquote>\n' +
  '<p>防抖：在事件被触发 n 秒后再执行回调函数，如果在这 n 秒内又被触发，则重新计时延迟时间</p>\n' +
  '</blockquote>\n' +
  '<p>函数防抖原理：通过维护一个定时器，其延迟计时以最后一次触发为计时起点，到达延迟时间后才会触发函数执行。</p>\n' +
  '<p>防抖的实现方式分两种 <strong>“立即执行”</strong> 和 <strong>“非立即执行”</strong> ，区别在于第一次触发时，是否立即执行回调函数。</p>\n' +
  '<blockquote>\n' +
  '<p><strong>“立即执行防抖”</strong> 指事件触发后，回调函数会立即执行，之后要想触发执行回调函数，需等待 n 秒延迟</p>\n' +
  '<p><strong>”非立即执行防抖“</strong> 指事件触发后，回调函数不会立即执行，会在延迟时间 n 秒后执行，如果 n 秒内被调用多次，则重新计时延迟时间</p>\n' +
  '</blockquote>\n' +
  '<p><strong>理解：</strong></p>\n' +
  '<ul>\n' +
  '<li>相当于英雄大招，施法后要等技能冷却才能再次施法（立即执行）。</li>\n' +
  '<li>法师发技能的时候要读条，技能读条没完再按技能就会重新读条（非立即执行）。</li>\n' +
  '</ul>\n' +
  '<h4 data-id="heading-1">手写防抖</h4>\n' +
  '<p>那么理解了什么是防抖，我们可以手写一个防抖，这不仅在面试中经常出现，工作中也会遇到。</p>\n' +
  '<h5 data-id="heading-2"><strong>非立即执行</strong></h5>\n' +
  '<pre><code class="hljs language-html" lang="html"><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n' +
  ' &nbsp; &nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"debounce"</span>&gt;</span>点击<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n' +
  ' &nbsp; &nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-built_in">window</span>.onload=<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">var</span> mydebounce = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"debounce"</span>)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;mydebounce.addEventListener(<span class="hljs-string">"click"</span>,debounce(sayDebounce,<span class="hljs-number">1000</span>))\n' +
  ' &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-comment">//防抖函数</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">debounce</span>(<span class="hljs-params">fn,time</span>) </span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> timer = <span class="hljs-literal">null</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> context = <span class="hljs-built_in">this</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">if</span>(timer) <span class="hljs-built_in">clearTimeout</span>(timer) &nbsp;<span class="hljs-comment">//清除前一个定时器</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">()=&gt;</span>{ &nbsp;<span class="hljs-comment">//在时间间隙内再次点击不会执行fn函数</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;fn.apply(context,<span class="hljs-built_in">arguments</span>)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  },time || <span class="hljs-number">500</span>)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-comment">//要防抖的事件处理</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayDebounce</span>(<span class="hljs-params"></span>) </span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"处理防抖的事件写在这里,比如发送请求"</span>);\n' +
  ' &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n' +
  '<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n' +
  '</code></pre>\n' +
  '<blockquote>\n' +
  '<p>特别说明：apply 是为了改变某个函数运行时的 context 即上下文而存在的，说人话就是改变this指针的指向，函数.apply(第一个参数就是你想吧this指针指向哪，第二个参数就是你向里面传的参数（arguments）)；</p>\n' +
  '<p>apply()方法接收两个参数，一个是函数运行的作用域（this），另一个是参数数组。</p>\n' +
  '<p>call()方法第一个参数和apply()方法的一样，但是传递给函数的参数必须列举出来。</p>\n' +
  '<p>在js中，所有的函数再被调用的时候都会默认传入两个参数，一个是this，还有一个是arguments。在默认情况下this都是指当前的调用函数的对象。但是有时候我们需要改变this的指向，也就是说使函数可以被其他对象来调用，那么我们应该怎样做呢？这时候我们就可以使用call和apply方法了；</p>\n' +
  '</blockquote>\n' +
  '<p>但是问题来了，我不想点击了按钮要等一秒它才发起请求，It is too slow！能不能点击立即执行，再次点击才需要等待技能冷却？Of course！</p>\n' +
  '<h5 data-id="heading-3"><strong>立即执行</strong></h5>\n' +
  '<pre><code class="hljs language-js" lang="js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">debounce</span>(<span class="hljs-params">fn,time</span>) </span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> timer = <span class="hljs-literal">null</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> context = <span class="hljs-built_in">this</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> args = <span class="hljs-built_in">arguments</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">if</span>(timer) <span class="hljs-built_in">clearTimeout</span>(timer) &nbsp;<span class="hljs-comment">//清除前一个定时器</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> callNow = !timer\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">()=&gt;</span>{ &nbsp;\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;timer = <span class="hljs-literal">null</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  },time || <span class="hljs-number">500</span>)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">if</span> (callNow) fn.apply(context,args)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp;  }\n' +
  '</code></pre>\n' +
  '<p>这个时候产品经理又提了一个新需求：能不能这个按钮立即执行，那个按钮非立即执行？</p>\n' +
  '<p>”呵......我早就猜到你会提出这种无理的需求！看剑！“，</p>\n' +
  '<p>可以实现吗？”可以，得加钱💴“。那我加个 <code>immediate</code>参数判断是否立即执行呗。</p>\n' +
  '<h5 data-id="heading-4"><strong>组合版本</strong></h5>\n' +
  '<pre><code class="hljs language-html" lang="html"><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"debounce"</span>&gt;</span>点击<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-built_in">window</span>.onload=<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">var</span> mydebounce = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"debounce"</span>)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;mydebounce.addEventListener(<span class="hljs-string">"click"</span>,debounce(sayDebounce,<span class="hljs-number">1000</span>,<span class="hljs-literal">false</span>))\n' +
  ' &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-comment">//防抖函数</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">debounce</span>(<span class="hljs-params">fn,time,immediate</span>) </span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> timer = <span class="hljs-literal">null</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> context = <span class="hljs-built_in">this</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> args = <span class="hljs-built_in">arguments</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">if</span>(timer) <span class="hljs-built_in">clearTimeout</span>(timer) &nbsp;<span class="hljs-comment">//清除前一个定时器</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">if</span> (immediate) { &nbsp;<span class="hljs-comment">//为true立即执行</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> callNow = !timer\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">()=&gt;</span>{ &nbsp;\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;timer = <span class="hljs-literal">null</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  },time || <span class="hljs-number">500</span>)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">if</span> (callNow) fn.apply(context,args)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">else</span> { &nbsp;<span class="hljs-comment">//非立即执行</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;fn.apply(context, args)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }, time || <span class="hljs-number">500</span>);\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-comment">//要防抖的事件处理</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayDebounce</span>(<span class="hljs-params"></span>) </span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"处理防抖的事件写在这里,比如发送请求"</span>);\n' +
  ' &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n' +
  ' &nbsp; &nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n' +
  '</code></pre>\n' +
  '<p>产品经理：”可不可以.......“， ”你走啊😠“</p>\n' +
  '<p>”能不能取消<code>debounce</code>函数，比如在登录时候的重新请求短信验证码，错一次要等好久“</p>\n' +
  '<h5 data-id="heading-5"><strong>取消debounce（终极版）</strong></h5>\n' +
  '<pre><code class="hljs language-html" lang="html"><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"debounce"</span>&gt;</span>点击<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"dd"</span>&gt;</span>取消<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">var</span> mydebounce = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"debounce"</span>)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">var</span> Mydebounce = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"dd"</span>)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">var</span> set = debounce(sayDebounce,<span class="hljs-number">5000</span>,<span class="hljs-literal">true</span>)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;mydebounce.addEventListener(<span class="hljs-string">"click"</span>,set)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Mydebounce.addEventListener(<span class="hljs-string">"click"</span>,<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{ \n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;set.cancel() \n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  } )\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-comment">//防抖函数</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">debounce</span>(<span class="hljs-params">fn,time,immediate</span>) </span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> timer = <span class="hljs-literal">null</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> debounced = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> context = <span class="hljs-built_in">this</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> args = <span class="hljs-built_in">arguments</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">if</span>(timer) <span class="hljs-built_in">clearTimeout</span>(timer) &nbsp;<span class="hljs-comment">//清除前一个定时器</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">if</span> (immediate) { &nbsp;<span class="hljs-comment">//为true立即执行</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">let</span> callNow = !timer\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">()=&gt;</span>{ &nbsp;\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;timer = <span class="hljs-literal">null</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  },time || <span class="hljs-number">500</span>)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">if</span> (callNow) fn.apply(context,args)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">else</span> { &nbsp;<span class="hljs-comment">//非立即执行</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;fn.apply(context, args)\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }, time || <span class="hljs-number">500</span>);\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;debounced.cancel = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-comment">//取消防抖</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-built_in">clearTimeout</span>(timer);\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;timer = <span class="hljs-literal">null</span>;\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  };\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-keyword">return</span> debounced\n' +
  ' &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-comment">//要防抖的事件处理</span>\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayDebounce</span>(<span class="hljs-params"></span>) </span>{\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"处理防抖的事件写在这里,比如发送请求"</span>);\n' +
  ' &nbsp; &nbsp; &nbsp;  }\n' +
  ' &nbsp; &nbsp; &nbsp; &nbsp;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n' +
  ' &nbsp; &nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n' +
  '</code></pre>\n' +
  '<p>面试官：你能手写一个防抖看看吗？</p>\n' +
  '<p>”看我不秀死你“</p><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style></div>';
// export const testHtml = "<div class=\"markdown-body\"><style>.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:16px;overflow-x:hidden;color:#333}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:24px;margin-bottom:5px}.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{font-size:20px}.markdown-body h2{padding-bottom:12px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:18px;padding-bottom:0}.markdown-body h6{margin-top:5px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre>code{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:\"\"}.markdown-body blockquote>p{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}</style><h2 data-id=\"heading-0\">前言</h2>\n" +
//   "<p>为了尽量多给出一些知识点，所以不会针对问题进行机械式的回答，可能更多的需要大家自行理解和抽象。其中大部分面试题可能会已文章链接的形式出现，或许是我自己以前写过的文章，或者是我觉得别人写的不错的文章。</p>\n" +
//   "<blockquote>\n" +
//   "<p>温馨提示：本文主要给出了 1 ~ 5、7 ~ 8、10 ~ 15、18、20 ~ 21、24、29 ~ 30 等面试题的答案解析。</p>\n" +
//   "</blockquote>\n" +
//   "<h2 data-id=\"heading-1\">基础知识</h2>\n" +
//   "<p>基础知识主要包含以下几个方面：</p>\n" +
//   "<ul>\n" +
//   "<li>基础：计算机原理、编译原理、数据结构、算法、设计模式、编程范式等基本知识了解</li>\n" +
//   "<li>语法：JavaScript、ECMAScript、CSS、TypeScript、HTML、Node.js 等语法的了解和使用</li>\n" +
//   "<li>框架：React、Vue、Egg、Koa、Express、Webpack 等原理的了解和使用</li>\n" +
//   "<li>工程：编译工具、格式工具、Git、NPM、单元测试、Nginx、PM2、CI / CD 了解和使用</li>\n" +
//   "<li>网络：HTTP、TCP、UDP、WebSocket、Cookie、Session、跨域、缓存、协议的了解</li>\n" +
//   "<li>性能：编译性能、监控、白屏检测、SEO、Service Worker 等了解</li>\n" +
//   "<li>插件：Chrome 、Vue CLI 、Webpack 等插件设计思路的理解</li>\n" +
//   "<li>系统：Mac、Windows、Linux 系统配置的实践</li>\n" +
//   "<li>后端：Redis 缓存、数据库、Graphql、SSR、模板引擎等了解和使用</li>\n" +
//   "</ul>\n" +
//   "<h3 data-id=\"heading-2\">基础</h3>\n" +
//   "<h4 data-id=\"heading-3\">1、列举你所了解的计算机存储设备类型？</h4>\n" +
//   "<p>现代计算机以存储器为中心，主要由 CPU、I / O 设备以及主存储器三大部分组成。各个部分之间通过总线进行连接通信，具体如下图所示：\n" +
//   "<img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d40d43236ef74ed4a3ae4fd2a697b8b9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp\" alt=\"image.png\" loading=\"lazy\" class=\"medium-zoom-image\">\n" +
//   "上图是一种多总线结构的示意图，CPU、主存以及 I / O 设备之间的所有数据都是通过总线进行并行传输，使用局部总线是为了提高 CPU 的吞吐量（CPU 不需要直接跟 I / O 设备通信），而使用高速总线（更贴近 CPU）和 DMA 总线则是为了提升高速 I / O 设备（外设存储器、局域网以及多媒体等）的执行效率。</p>\n" +
//   "<p>主存包括随机存储器 RAM 和只读存储器 ROM，其中 ROM 又可以分为 MROM（一次性）、PROM、EPROM、EEPROM 。ROM 中存储的程序（例如启动程序、固化程序）和数据（例如常量数据）在断电后不会丢失。RAM  主要分为静态 RAM（SRAM） 和动态 RAM（DRAM） 两种类型（DRAM 种类很多，包括 SDRAM、RDRAM、CDRAM 等），断电后数据会丢失，主要用于存储临时程序或者临时变量数据。 DRAM  一般访问速度相对较慢。由于现代 CPU 读取速度要求相对较高，因此在 CPU 内核中都会设计 L1、L2 以及 L3 级别的多级高速缓存，这些缓存基本是由 SRAM 构成，一般访问速度较快。</p>\n" +
//   "<h4 data-id=\"heading-4\">2、一般代码存储在计算机的哪个设备中？代码在 CPU 中是如何运行的？</h4>\n" +
//   "<p>高级程序设计语言不能直接被计算机理解并执行，需要通过翻译程序将其转换成特定处理器上可执行的指令，计算机 CPU 的简单工作原理如下所示：\n" +
//   "<img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e68a308e2394464b17c0064f5283ba3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp\" alt=\"image.png\" loading=\"lazy\" class=\"medium-zoom-image\">\n" +
//   "CPU 主要由控制单元、运算单元和存储单元组成（注意忽略了中断系统），各自的作用如下：</p>\n" +
//   "<ul>\n" +
//   "<li><strong>控制单元</strong>：在节拍脉冲的作用下，将程序计数器（Program Counter，PC）指向的主存或者多级高速缓存中的指令地址送到地址总线，接着获取指令地址所对应的指令并放入指令寄存器 （Instruction Register，IR）中，然后通过指令译码器（Instruction Decoder，ID）分析指令需要进行的操作，最后通过操作控制器（Operation Controller，OC）向其他设备发出微操作控制信号。</li>\n" +
//   "<li><strong>运算单元</strong>：如果控制单元发出的控制信号存在算术运算（加、减、乘、除、增 1、减 1、取反等）或者逻辑运算（与、或、非、异或），那么需要通过运算单元获取存储单元的计算数据进行处理。</li>\n" +
//   "<li><strong>存储单元</strong>：包括片内缓存和寄存器组，是 CPU 中临时数据的存储地方。CPU 直接访问主存数据大概需要花费数百个机器周期，而访问寄存器或者片内缓存只需要若干个或者几十个机器周期，因此会使用内部寄存器或缓存来存储和获取临时数据（即将被运算或者运算之后的数据），从而提高 CPU 的运行效率。</li>\n" +
//   "</ul>\n" +
//   "<p>除此之外，计算机系统执行程序指令时需要花费时间，其中取出一条指令并执行这条指令的时间叫指令周期。指令周期可以分为若干个阶段（取指周期、间址周期、执行周期和中断周期），每个阶段主要完成一项基本操作，完成基本操作的时间叫机器周期。机器周期是时钟周期的分频，例如最经典的 8051 单片机的机器周期为 12 个时钟周期。时钟周期是 CPU 工作的基本时间单位，也可以称为节拍脉冲或 T 周期（CPU 主频的倒数） 。假设 CPU 的主频是 1 GHz（1 Hz 表示每秒运行 1 次），那么表示时钟周期为 1 / 109 s。理论上 CPU 的主频越高，程序指令执行的速度越快。</p>\n" +
//   "<h4 data-id=\"heading-5\">3、什么是指令和指令集？</h4>\n" +
//   "<p>上图右侧主存中的指令是 CPU 可以支持的处理命令，一般包含算术指令（加和减）、逻辑指令（与、或和非）、数据指令（移动、输入、删除、加载和存储）、流程控制指令以及程序结束指令等，由于 CPU 只能识别二进制码，因此指令是由二进制码组成。除此之外，指令的集合称为指令集（例如汇编语言就是指令集的一种表现形式），常见的指令集有精简指令集（ARM）和复杂指令集（Inter X86）。一般指令集决定了 CPU 处理器的硬件架构，规定了处理器的相应操作。</p>\n" +
//   "<h4 data-id=\"heading-6\">4、复杂指令集和精简指令集有什么区别？</h4>\n" +
//   "<h4 data-id=\"heading-7\">5、JavaScript 是如何运行的？解释型语言和编译型语言的差异是什么？</h4>\n" +
//   "<p>早期的计算机只有机器语言时，程序设计必须用二进制数（0 和 1）来编写程序，并且要求程序员对计算机硬件和指令集非常了解，编程的难度较大，操作极易出错。为了解决机器语言的编程问题，慢慢开始出现了符号式的汇编语言（采用 ADD、SUB、MUL、DIV 等符号代表加减乘除）。为了使得计算机可以识别汇编语言，需要将汇编语言翻译成机器能够识别的机器语言（处理器的指令集）：\n" +
//   "<img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd3d13597c1246fb966171f4292d6c89~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp\" alt=\"image.png\" loading=\"lazy\" class=\"medium-zoom-image\">\n" +
//   "由于每一种机器的指令系统不同，需要不同的汇编语言程序与之匹配，因此程序员往往需要针对不同的机器了解其硬件结构和指令系统。为了可以抹平不同机器的指令系统，使得程序员可以更加关注程序设计本身，先后出现了各种面向问题的高级程序设计语言，例如 BASIC 和 C，具体过程如下图所示：\n" +
//   "<img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a49fb0b822f74b01a5c825aad75513f2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp\" alt=\"image.png\" loading=\"lazy\" class=\"medium-zoom-image\">\n" +
//   "高级程序语言会先翻译成汇编语言或者其他中间语言，然后再根据不同的机器翻译成机器语言进行执行。除此之外，汇编语言虚拟机和机器语言机器之间还存在一层操作系统虚拟机，主要用于控制和管理操作系统的全部硬件和软件资源（随着超大规模集成电路技术的不断发展，一些操作系统的软件功能逐步由硬件来替换，例如目前的操作系统已经实现了部分程序的固化，简称固件，将程序永久性的存储在 ROM 中）。机器语言机器还可以继续分解成微程序机器，将每一条机器指令翻译成一组微指令（微程序）进行执行。</p>\n" +
//   "<p>上述虚拟机所提供的语言转换程序被称为编译器，主要作用是将某种语言编写的源程序转换成一个等价的机器语言程序，编译器的作用如下图所示：\n" +
//   "<img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b473f9065124bfcbc757ca5b6688839~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp\" alt=\"image.png\" loading=\"lazy\" class=\"medium-zoom-image\">\n" +
//   "例如 C 语言，可以先通过 gcc 编译器生成 Linux 和 Windows 下的目标 .o 和 .obj 文件（object 文件，即目标文件），然后将目标文件与底层系统库文件、应用程序库文件以及启动文件链接成可执行文件在目标机器上执行。</p>\n" +
//   "<blockquote>\n" +
//   "<p>温馨提示：感兴趣的同学可以了解一下 ARM 芯片的程序运行原理，包括使用 IDE 进行程序的编译（IDE 内置编译器，主流编译器包含 ARMCC、IAR 以及 GCC FOR ARM 等，其中一些编译器仅仅随着 IDE 进行捆绑发布，不提供独立使用的能力，而一些编译器则随着 IDE 进行发布的同时，还提供命令行接口的独立使用方式）、通过串口进行程序下载（下载到芯片的代码区初始启动地址映射的存储空间地址）、启动的存储空间地址映射（包括系统存储器、闪存 FLASH、内置 SRAM 等）、芯片的程序启动模式引脚 BOOT 的设置（例如调试代码时常常选择内置 SRAM、真正程序运行的时候选择闪存 FLASH）等。</p>\n" +
//   "</blockquote>\n" +
//   "<p>如果某种高级语言或者应用语言（例如用于人工智能的计算机设计语言）转换的目标语言不是特定计算机的汇编语言，而是面向另一种高级程序语言（很多研究性的编译器将 C 作为目标语言），那么还需要将目标高级程序语言再进行一次额外的编译才能得到最终的目标程序，这种编译器可称为源到源的转换器。</p>\n" +
//   "<p>除此之外，有些程序设计语言将编译的过程和最终转换成目标程序进行执行的过程混合在一起，这种语言转换程序通常被称为解释器，主要作用是将某种语言编写的源程序作为输入，将该源程序执行的结果作为输出，解释器的作用如下图所示：</p>\n" +
//   "<p><img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2b298701d4949e1a7456feff215c2b1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp\" alt=\"image.png\" loading=\"lazy\" class=\"medium-zoom-image\"></p>\n" +
//   "<p>解释器和编译器有很多相似之处，都需要对源程序进行分析，并转换成目标机器可识别的机器语言进行执行。只是解释器是在转换源程序的同时立马执行对应的机器语言（转换和执行的过程不分离），而编译器得先把源程序全部转换成机器语言并产生目标文件，然后将目标文件写入相应的程序存储器进行执行（转换和执行的过程分离）。例如 Perl、Scheme、APL 使用解释器进行转换， C、C++ 则使用编译器进行转换，而 Java 和 JavaScript 的转换既包含了编译过程，也包含了解释过程。</p>\n" +
//   "<h4 data-id=\"heading-8\">6、简单描述一下 Babel 的编译过程？</h4>\n" +
//   "<h4 data-id=\"heading-9\">7、JavaScript 中的数组和函数在内存中是如何存储的？</h4>\n" +
//   "<p>JavaScript 中的数组存储大致需要分为两种情况：</p>\n" +
//   "<ul>\n" +
//   "<li>同种类型数据的数组分配连续的内存空间</li>\n" +
//   "<li>存在非同种类型数据的数组使用哈希映射分配内存空间</li>\n" +
//   "</ul>\n" +
//   "<blockquote>\n" +
//   "<p>温馨提示：可以想象一下连续的内存空间只需要根据索引（指针）直接计算存储位置即可。如果是哈希映射那么首先需要计算索引值，然后如果索引值有冲突的场景下还需要进行二次查找（需要知道哈希的存储方式）。</p>\n" +
//   "</blockquote>\n" +
//   "<h4 data-id=\"heading-10\">8、浏览器和 Node.js 中的事件循环机制有什么区别？</h4>\n" +
//   "<blockquote>\n" +
//   "<p>阅读链接：<a href=\"https://juejin.cn/post/6844903928442667015#heading-43\" target=\"_blank\" title=\"https://juejin.cn/post/6844903928442667015#heading-43\">面试分享：两年工作经验成功面试阿里P6总结</a> - 了解 Event Loop 吗？</p>\n" +
//   "</blockquote>\n" +
//   "<h4 data-id=\"heading-11\">9、ES6 Modules 相对于 CommonJS 的优势是什么？</h4>\n" +
//   "<h4 data-id=\"heading-12\">10、高级程序设计语言是如何编译成机器语言的？</h4>\n" +
//   "<h4 data-id=\"heading-13\">11、编译器一般由哪几个阶段组成？数据类型检查一般在什么阶段进行？</h4>\n" +
//   "<h4 data-id=\"heading-14\">12、编译过程中虚拟机的作用是什么？</h4>\n" +
//   "<h4 data-id=\"heading-15\">13、什么是中间代码（IR），它的作用是什么？</h4>\n" +
//   "<h4 data-id=\"heading-16\">14、什么是交叉编译？</h4>\n" +
//   "<p>编译器的设计是一个非常庞大和复杂的软件系统设计，在真正设计的时候需要解决两个相对重要的问题：</p>\n" +
//   "<ul>\n" +
//   "<li>如何分析不同高级程序语言设计的源程序</li>\n" +
//   "<li>如何将源程序的功能等价映射到不同指令系统的目标机器</li>\n" +
//   "</ul>\n" +
//   "<p>为了解决上述两项问题，编译器的设计最终被分解成前端（注意这里所说的不是 Web 前端）和后端两个编译阶段，前端用于解决第一个问题，而后端用于解决第二个问题，具体如下图所示：\n" +
//   "<img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d5de2438c6e427f85ed65b026bd85d3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp\" alt=\"image.png\" loading=\"lazy\" class=\"medium-zoom-image\">\n" +
//   "上图中的中间表示（Intermediate Representation，IR）是程序结构的一种表现方式，它会比 AST（后续讲解）更加接近汇编语言或者指令集，同时也会保留源程序中的一些高级信息，除此之外 ，它的种类很多，包括<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThree-address_code\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://en.wikipedia.org/wiki/Three-address_code\" ref=\"nofollow noopener noreferrer\">三地址码（Three Address Code, TAC）</a>、<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStatic_single_assignment_form\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://en.wikipedia.org/wiki/Static_single_assignment_form\" ref=\"nofollow noopener noreferrer\">静态单赋值形式（Static Single Assignment Form, SSA）</a>以及基于栈的 IR 等，具体作用包括：</p>\n" +
//   "<ul>\n" +
//   "<li>靠近前端部分主要适配不同的源程序，靠近后端部分主要适配不同的指令集，更易于编译器的错误调试，容易识别是 IR 之前还是之后出问题</li>\n" +
//   "<li>如下左图所示，如果没有 IR，那么源程序到指令集之间需要进行一一适配，而有了中间表示，则可以使得编译器的职责更加分离，源程序的编译更多关注如何转换成 IR，而不是去适配不同的指令集</li>\n" +
//   "<li>IR 本身可以做到多趟迭代从而优化源程序，在每一趟迭代的过程中可以研究代码并记录优化的细节，方便后续的迭代查找并利用这些优化信息，最终可以高效输出更优的目标程序</li>\n" +
//   "</ul>\n" +
//   "<p><img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd3afc7d226040c9ae1f7f1dacbb4a0a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp\" alt=\"image.png\" loading=\"lazy\" class=\"medium-zoom-image\">\n" +
//   "由于 IR 可以进行多趟迭代进行程序优化，因此在编译器中可插入一个新的优化阶段，如下图所示：\n" +
//   "<img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b66683c48fc4710b33842c1ae4565b6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp\" alt=\"image.png\" loading=\"lazy\" class=\"medium-zoom-image\">\n" +
//   "优化器可以对 IR 处理一遍或者多遍，从而生成更快执行速度（例如找到循环中不变的计算并对其进行优化从而减少运算次数）或者更小体积的目标程序，也可能用于产生更少异常或者更低功耗的目标程序。除此之外，前端和后端内部还可以细分为多个处理步骤，具体如下图所示：\n" +
//   "<img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5320bfdeb95413092f108ca6e8e7ceb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp\" alt=\"image.png\" loading=\"lazy\" class=\"medium-zoom-image\">\n" +
//   "优化器中的每一遍优化处理都可以使用一个或多个优化技术来改进代码，每一趟处理最终都是读写 IR 的操作，这样不仅仅可以使得优化可以更加高效，同时也可以降低优化的复杂度，还提高了优化的灵活性，可以使得编译器配置不同的优化选项，达到组合优化的效果。</p>\n" +
//   "<h4 data-id=\"heading-17\">15、发布 / 订阅模式和观察者模式的区别是什么？</h4>\n" +
//   "<blockquote>\n" +
//   "<p>阅读链接：<a href=\"https://juejin.cn/post/6844904099704471559#heading-10\" target=\"_blank\" title=\"https://juejin.cn/post/6844904099704471559#heading-10\">基于Vue实现一个简易MVVM </a>- 观察者模式和发布/订阅模式</p>\n" +
//   "</blockquote>\n" +
//   "<h4 data-id=\"heading-18\">16、装饰器模式一般会在什么场合使用？</h4>\n" +
//   "<h4 data-id=\"heading-19\">17、谈谈你对大型项目的代码解耦设计理解？什么是 Ioc？一般 DI 采用什么设计模式实现？</h4>\n" +
//   "<h4 data-id=\"heading-20\">18、列举你所了解的编程范式？</h4>\n" +
//   "<p>编程范式（Programming paradigm）是指计算机编程的基本风格或者典型模式，可以简单理解为编程学科中实践出来的具有哲学和理论依据的一些经典原型。常见的编程范式有：</p>\n" +
//   "<ul>\n" +
//   "<li>面向过程（Process Oriented Programming，POP）</li>\n" +
//   "<li>面向对象（Object Oriented Programming，OOP）</li>\n" +
//   "<li>面向接口（Interface Oriented Programming， IOP）</li>\n" +
//   "<li>面向切面（Aspect Oriented Programming，AOP）</li>\n" +
//   "<li>函数式（Funtional Programming，FP）</li>\n" +
//   "<li>响应式（Reactive Programming，RP）</li>\n" +
//   "<li>函数响应式（Functional Reactive Programming，FRP）</li>\n" +
//   "</ul>\n" +
//   "<blockquote>\n" +
//   "<p>阅读链接：：如果你对于编程范式的定义相对模糊，可以继续阅读 <a href=\"https://link.juejin.cn?target=https%3A%2F%2Fsoftwareengineering.stackexchange.com%2Fquestions%2F166442%2Fwhat-is-the-precise-definition-of-programming-paradigm%23\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://softwareengineering.stackexchange.com/questions/166442/what-is-the-precise-definition-of-programming-paradigm#\" ref=\"nofollow noopener noreferrer\">What is the precise definition of programming paradigm?</a> 了解更多。</p>\n" +
//   "</blockquote>\n" +
//   "<p>不同的语言可以支持多种不同的编程范式，例如 C 语言支持 POP 范式，C++ 和 Java 语言支持 OOP 范式，Swift 语言则可以支持 FP 范式，而 Web 前端中的 JavaScript 可以支持上述列出的所有编程范式。</p>\n" +
//   "<h4 data-id=\"heading-21\">19、什么是面向切面（AOP）的编程？</h4>\n" +
//   "<h4 data-id=\"heading-22\">20、什么是函数式编程？</h4>\n" +
//   "<p>顾名思义，函数式编程是使用函数来进行高效处理数据或数据流的一种编程方式。在数学中，函数的三要素是定义域、值域和**对应关系。<strong>假设 A、B 是非空数集，对于集合 A 中的任意一个数 x，在集合 B 中都有唯一确定的数 f(x) 和它对应，那么可以将 f 称为从 A 到 B 的一个函数，记作：y = f(x)。在函数式编程中函数的概念和数学函数的概念类似，主要是描述形参 x 和返回值 y 之间的</strong>对应关系，**如下图所示：</p>\n" +
//   "<p><img src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a09dc7ab098445896b56361b3ee635f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp\" alt=\"\" loading=\"lazy\" class=\"medium-zoom-image\"></p>\n" +
//   "<blockquote>\n" +
//   "<p>温馨提示：图片来自于<a href=\"https://juejin.cn/post/6844903936378273799\" target=\"_blank\" title=\"https://juejin.cn/post/6844903936378273799\">简明 JavaScript 函数式编程——入门篇</a>。</p>\n" +
//   "</blockquote>\n" +
//   "<p>在实际的编程中，可以将各种明确<strong>对应关系</strong>的函数进行传递、组合从而达到处理数据的最终目的。在此过程中，我们的关注点不在于如何去实现**对应关系，**而在于如何将各种已有的对应关系进行高效联动，从而可快速进行数据转换，达到最终的数据处理目的，提供开发效率。</p>\n" +
//   "<p><strong>简单示例</strong></p>\n" +
//   "<p>尽管你对函数式编程的概念有所了解，但是你仍然不知道函数式编程到底有什么特点。这里我们仍然拿 OOP 编程范式来举例，假设希望通过 OOP 编程来解决数学的加减乘除问题：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MathObject</span> </span>{\n" +
//   "  <span class=\"hljs-function\"><span class=\"hljs-title\">constructor</span>(<span class=\"hljs-params\"><span class=\"hljs-keyword\">private</span> value: <span class=\"hljs-built_in\">number</span></span>)</span> {}\n" +
//   "  <span class=\"hljs-keyword\">public</span> add(num: <span class=\"hljs-built_in\">number</span>): MathObject {\n" +
//   "    <span class=\"hljs-built_in\">this</span>.value += num;\n" +
//   "    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">this</span>;\n" +
//   "  }\n" +
//   "  <span class=\"hljs-keyword\">public</span> multiply(num: <span class=\"hljs-built_in\">number</span>): MathObject {\n" +
//   "    <span class=\"hljs-built_in\">this</span>.value *= num;\n" +
//   "    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">this</span>;\n" +
//   "  }\n" +
//   "  <span class=\"hljs-keyword\">public</span> getValue(): <span class=\"hljs-built_in\">number</span> {\n" +
//   "    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">this</span>.value;\n" +
//   "  }\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> a = <span class=\"hljs-keyword\">new</span> MathObject(<span class=\"hljs-number\">1</span>);\n" +
//   "a.add(<span class=\"hljs-number\">1</span>).multiply(<span class=\"hljs-number\">2</span>).add(a.multiply(<span class=\"hljs-number\">2</span>).getValue()); \n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>我们希望通过上述程序来解决 (1&nbsp;+&nbsp;2)&nbsp;*&nbsp;2&nbsp;+&nbsp;1&nbsp;*&nbsp;2 的问题，但实际上计算出来的结果是 24，因为在代码内部有一个 <code>this.value</code> 的状态值需要跟踪，这会使得结果不符合预期。&nbsp;接下来我们采用函数式编程的方式：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">add</span>(<span class=\"hljs-params\">a: <span class=\"hljs-built_in\">number</span>, b: <span class=\"hljs-built_in\">number</span></span>): <span class=\"hljs-title\">number</span> </span>{\n" +
//   "  <span class=\"hljs-keyword\">return</span> a + b;\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">multiply</span>(<span class=\"hljs-params\">a: <span class=\"hljs-built_in\">number</span>, b: <span class=\"hljs-built_in\">number</span></span>): <span class=\"hljs-title\">number</span> </span>{\n" +
//   "  <span class=\"hljs-keyword\">return</span> a * b;\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> a: <span class=\"hljs-built_in\">number</span> = <span class=\"hljs-number\">1</span>;\n" +
//   "<span class=\"hljs-keyword\">const</span> b: <span class=\"hljs-built_in\">number</span> = <span class=\"hljs-number\">2</span>;\n" +
//   "\n" +
//   "add(multiply(add(a, b), b), multiply(a, b));\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>以上程序计算的结果是 8，完全符合预期。我们知道了 <code>add</code> 和 <code>multiply</code> 两个函数的实际<strong>对应关系</strong>，通过将<strong>对应关系</strong>进行有效的组合和传递，达到了最终的计算结果。除此之外，这两个函数还可以根据数学定律得出更优雅的组合方式：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\">add(multiply(add(a, b), b), multiply(a, b));\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 根据数学定律分配律：a * b  +  a * c = a * (b + c)，得出：</span>\n" +
//   "<span class=\"hljs-comment\">// (a + b) * b + a * b = (2a + b) * b</span>\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 简化上述函数的组合方式</span>\n" +
//   "multiply(add(add(a, a), b), b);\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>我们完全不需要追踪类似于 OOP 编程范式中可能存在的内部状态数据，事实上对于数学定律中的结合律、交换律、同一律以及分配律，上述的函数式编程代码足可以胜任。</p>\n" +
//   "<p><strong>原则</strong></p>\n" +
//   "<p>通过上述简单的例子可以发现，要实现高可复用的函数**（对应关系）**，一定要遵循某些特定的原则，否则在使用的时候可能无法进行高效的传递和组合，例如</p>\n" +
//   "<ul>\n" +
//   "<li>高内聚低耦合</li>\n" +
//   "<li>最小意外原则</li>\n" +
//   "<li>单一职责原则</li>\n" +
//   "<li>...</li>\n" +
//   "</ul>\n" +
//   "<p>如果你之前经常进行无原则性的代码设计，那么在设计过程中可能会出现各种出乎意料的问题（这是为什么新手老是出现一些稀奇古怪问题的主要原因）。函数式编程可以有效的通过一些原则性的约束使你设计出更加健壮和优雅的代码，并且在不断的实践过程中进行经验式叠加，从而提高开发效率。</p>\n" +
//   "<p><strong>特点</strong></p>\n" +
//   "<p>虽然我们在使用函数的过程中更多的不再关注函数如何实现（<strong>对应关系）</strong>，但是真正在使用和设计函数的时候需要注意以下一些特点：</p>\n" +
//   "<ul>\n" +
//   "<li>声明式（Declarative Programming）</li>\n" +
//   "<li>一等公民（First Class Function）</li>\n" +
//   "<li>纯函数（Pure Function）</li>\n" +
//   "<li>无状态和数据不可变（Statelessness and Immutable Data）</li>\n" +
//   "<li>...</li>\n" +
//   "</ul>\n" +
//   "<p><strong>声明式</strong></p>\n" +
//   "<p>我们以前设计的代码通常是命令式编程方式，这种编程方式往往注重具体的实现的过程（<strong>对应关系</strong>），而函数式编程则采用声明式的编程方式，往往注重如何去组合已有的**对应关系。**简单举个例子：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-comment\">// 命令式</span>\n" +
//   "<span class=\"hljs-keyword\">const</span> array = [<span class=\"hljs-number\">0.8</span>, <span class=\"hljs-number\">1.7</span>, <span class=\"hljs-number\">2.5</span>, <span class=\"hljs-number\">3.4</span>];\n" +
//   "<span class=\"hljs-keyword\">const</span> filterArray = [];\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">let</span> i = <span class=\"hljs-number\">0</span>; i &lt; array.length; i++) {\n" +
//   "  <span class=\"hljs-keyword\">const</span> integer = <span class=\"hljs-built_in\">Math</span>.floor(array[i]);\n" +
//   "  <span class=\"hljs-keyword\">if</span> (integer &lt; <span class=\"hljs-number\">2</span>) {\n" +
//   "    <span class=\"hljs-keyword\">continue</span>;\n" +
//   "  }\n" +
//   "  filterArray.push(integer);\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 声明式</span>\n" +
//   "<span class=\"hljs-comment\">// map 和 filter 不会修改原有数组，而是产生新的数组返回</span>\n" +
//   "[<span class=\"hljs-number\">0.8</span>, <span class=\"hljs-number\">1.7</span>, <span class=\"hljs-number\">2.5</span>, <span class=\"hljs-number\">3.4</span>].map(<span class=\"hljs-function\">(<span class=\"hljs-params\">item</span>) =&gt;</span> <span class=\"hljs-built_in\">Math</span>.floor(item)).filter(<span class=\"hljs-function\">(<span class=\"hljs-params\">item</span>) =&gt;</span> item &gt; <span class=\"hljs-number\">1</span>);\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>命令式代码一步一步的告诉计算机需要执行哪些语句，需要关心变量的实例化情况、循环的具体过程以及跟踪变量状态的变化过程。声明式代码更多的不再关心代码的具体执行过程，而是采用表达式的组合变换去处理问题，不再强调<strong>怎么做</strong>，而是指明**做什么。**声明式编程方式可以将我们设计代码的关注点彻底从过程式解放出来，从而提高开发效率。</p>\n" +
//   "<p><strong>一等公民</strong></p>\n" +
//   "<p>在 JavaScript 中，函数的使用非常灵活，例如可以对函数进行以下操作：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">interface</span> IHello {\n" +
//   "  (name: <span class=\"hljs-built_in\">string</span>): <span class=\"hljs-built_in\">string</span>;\n" +
//   "  key?: <span class=\"hljs-built_in\">string</span>;\n" +
//   "  arr?: <span class=\"hljs-built_in\">number</span>[];\n" +
//   "  fn?(name: <span class=\"hljs-built_in\">string</span>): <span class=\"hljs-built_in\">string</span>;\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 函数声明提升</span>\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(hello <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">Object</span>); <span class=\"hljs-comment\">// true</span>\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 函数声明提升</span>\n" +
//   "<span class=\"hljs-comment\">// hello 和其他引用类型的对象一样，都有属性和方法</span>\n" +
//   "hello.key = <span class=\"hljs-string\">'key'</span>;\n" +
//   "hello.arr = [<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>];\n" +
//   "hello.fn = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">name: <span class=\"hljs-built_in\">string</span></span>) </span>{\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`hello.fn, <span class=\"hljs-subst\">${name}</span>`</span>;\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 函数声明提升</span>\n" +
//   "<span class=\"hljs-comment\">// 注意函数表达式不能在声明前执行，例如不能在这里使用 helloCopy('world')</span>\n" +
//   "hello(<span class=\"hljs-string\">'world'</span>); \n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 函数</span>\n" +
//   "<span class=\"hljs-comment\">// 创建新的函数对象，将函数的引用指向变量 hello</span>\n" +
//   "<span class=\"hljs-comment\">// hello 仅仅是变量的名称</span>\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">hello</span>(<span class=\"hljs-params\">name: <span class=\"hljs-built_in\">string</span></span>): <span class=\"hljs-title\">string</span> </span>{\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`hello, <span class=\"hljs-subst\">${name}</span>`</span>;\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(hello.key); <span class=\"hljs-comment\">// key</span>\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(hello.arr); <span class=\"hljs-comment\">// [1,2]</span>\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(hello.name); <span class=\"hljs-comment\">// hello</span>\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 函数表达式</span>\n" +
//   "<span class=\"hljs-keyword\">const</span> helloCopy: IHello = hello;\n" +
//   "helloCopy(<span class=\"hljs-string\">'world'</span>);\n" +
//   "\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">transferHello</span>(<span class=\"hljs-params\">name: <span class=\"hljs-built_in\">string</span>, hello: Hello</span>) </span>{\n" +
//   "  <span class=\"hljs-keyword\">return</span> hello(<span class=\"hljs-string\">'world'</span>);\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 把函数对象当作实参传递</span>\n" +
//   "transferHello(<span class=\"hljs-string\">'world'</span>, helloCopy);\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 把匿名函数当作实参传递</span>\n" +
//   "transferHello(<span class=\"hljs-string\">'world'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">name: <span class=\"hljs-built_in\">string</span></span>) </span>{\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`hello, <span class=\"hljs-subst\">${name}</span>`</span>;\n" +
//   "});\n" +
//   "\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>通过以上示例可以看出，函数继承至对象并拥有对象的特性。在 JavaScript 中可以对函数进行参数传递、变量赋值或数组操作等等，因此把函数称为一等公民。函数式编程的核心就是对函数进行组合或传递，JavaScript 中函数这种灵活的特性是满足函数式编程的重要条件。</p>\n" +
//   "<p><strong>纯函数</strong></p>\n" +
//   "<p>纯函数是是指在相同的参数调用下，函数的返回值唯一不变。这跟数学中函数的映射关系类似，同样的 x 不可能映射多个不同的 y。使用函数式编程会使得函数的调用非常稳定，从而降低 Bug 产生的机率。当然要实现纯函数的这种特性，需要函数不能包含以下一些副作用：</p>\n" +
//   "<ul>\n" +
//   "<li>操作 Http 请求</li>\n" +
//   "<li>可变数据（包括在函数内部改变输入参数）</li>\n" +
//   "<li>DOM 操作</li>\n" +
//   "<li>打印日志</li>\n" +
//   "<li>访问系统状态</li>\n" +
//   "<li>操作文件系统</li>\n" +
//   "<li>操作数据库</li>\n" +
//   "<li>...</li>\n" +
//   "</ul>\n" +
//   "<p>从以上常见的一些副作用可以看出，纯函数的实现需要遵循最小意外原则，为了确保函数的稳定唯一的输入和输出，尽量应该避免与函数外部的环境进行任何交互行为，从而防止外部环境对函数内部产生无法预料的影响。纯函数的实现应该自给自足，举几个例子：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-comment\">// 如果使用 const 声明 min 变量（基本数据类型），则可以保证以下函数的纯粹性</span>\n" +
//   "<span class=\"hljs-keyword\">let</span> min: <span class=\"hljs-built_in\">number</span> = <span class=\"hljs-number\">1</span>;\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 非纯函数</span>\n" +
//   "<span class=\"hljs-comment\">// 依赖外部环境变量 min，一旦 min 发生变化则输入和返回不唯一</span>\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">isEqual</span>(<span class=\"hljs-params\">num: <span class=\"hljs-built_in\">number</span></span>): <span class=\"hljs-title\">boolean</span> </span>{\n" +
//   "  <span class=\"hljs-keyword\">return</span> num === min;\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 纯函数</span>\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">isEqual</span>(<span class=\"hljs-params\">num: <span class=\"hljs-built_in\">number</span></span>): <span class=\"hljs-title\">boolean</span> </span>{\n" +
//   "  <span class=\"hljs-keyword\">return</span> num === <span class=\"hljs-number\">1</span>;\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 非纯函数</span>\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">request</span>&lt;<span class=\"hljs-title\">T</span>, <span class=\"hljs-title\">S</span>&gt;(<span class=\"hljs-params\">url: <span class=\"hljs-built_in\">string</span>, params: T</span>): <span class=\"hljs-title\">Promise</span>&lt;<span class=\"hljs-title\">S</span>&gt; </span>{\n" +
//   "  <span class=\"hljs-comment\">// 会产生请求成功和请求失败两种结果，返回的结果可能不唯一</span>\n" +
//   "  <span class=\"hljs-keyword\">return</span> $.getJson(url, params);\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 纯函数</span>\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">request</span>&lt;<span class=\"hljs-title\">T</span>, <span class=\"hljs-title\">S</span>&gt;(<span class=\"hljs-params\">url: <span class=\"hljs-built_in\">string</span>, params: T</span>) : (<span class=\"hljs-params\"></span>) =&gt; <span class=\"hljs-title\">Promise</span>&lt;<span class=\"hljs-title\">S</span>&gt; </span>{\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n" +
//   "    <span class=\"hljs-keyword\">return</span> $.getJson(url, params);\n" +
//   "  }\n" +
//   "}\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>纯函数的特性使得函数式编程具备以下特性：</p>\n" +
//   "<ul>\n" +
//   "<li>可缓存性（Cacheable）</li>\n" +
//   "<li>可移植性（Portable）</li>\n" +
//   "<li>可测试性（Testable）</li>\n" +
//   "</ul>\n" +
//   "<p>可缓存性和可测试性基于纯函数输入输出唯一不变的特性，可移植性则主要基于纯函数不依赖外部环境的特性。这里举一个可缓存的例子：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">interface</span> ICache&lt;T&gt; {\n" +
//   "  [arg: <span class=\"hljs-built_in\">string</span>]: T;\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">interface</span> ISquare&lt;T&gt; {\n" +
//   "  (x: T): T;\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 简单的缓存函数（忽略通用性和健壮性）</span>\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">memoize</span>&lt;<span class=\"hljs-title\">T</span>&gt;(<span class=\"hljs-params\">fn: ISquare&lt;T&gt;</span>): <span class=\"hljs-title\">ISquare</span>&lt;<span class=\"hljs-title\">T</span>&gt; </span>{\n" +
//   "  <span class=\"hljs-keyword\">const</span> cache: ICache&lt;T&gt; = {};\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">x: T</span>) </span>{\n" +
//   "    <span class=\"hljs-keyword\">const</span> arg: <span class=\"hljs-built_in\">string</span> = <span class=\"hljs-built_in\">JSON</span>.stringify(x);\n" +
//   "    cache[arg] = cache[arg] || fn.call(fn, x);\n" +
//   "    <span class=\"hljs-keyword\">return</span> cache[arg];\n" +
//   "  };\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 纯函数</span>\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">square</span>(<span class=\"hljs-params\">x: <span class=\"hljs-built_in\">number</span></span>): <span class=\"hljs-title\">number</span> </span>{\n" +
//   "  <span class=\"hljs-keyword\">return</span> x * x;\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> memoSquare = memoize&lt;<span class=\"hljs-built_in\">number</span>&gt;(square);\n" +
//   "memoSquare(<span class=\"hljs-number\">4</span>);\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 不会再次调用纯函数 square，而是直接从缓存中获取值</span>\n" +
//   "<span class=\"hljs-comment\">// 由于输入和输出的唯一性，获取缓存结果可靠稳定</span>\n" +
//   "<span class=\"hljs-comment\">// 提升代码的运行效率</span>\n" +
//   "memoSquare(<span class=\"hljs-number\">4</span>);\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p><strong>无状态和数据不可变</strong></p>\n" +
//   "<p>在函数式编程的简单示例中已经可以清晰的感受到函数式编程绝对不能依赖内部状态，而在纯函数中则说明了函数式编程不能依赖外部的环境或状态，因为一旦依赖的状态变化，不能保证函数根据对应关系所计算的返回值因为状态的变化仍然保持不变。</p>\n" +
//   "<p>这里单独讲解一下数据不可变，在 JavaScript 中有很多数组操作的方法，举个例子：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> arr = [<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">2</span>, <span class=\"hljs-number\">3</span>];\n" +
//   "\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(arr.slice(<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">2</span>)); <span class=\"hljs-comment\">// [1, 2]</span>\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(arr); <span class=\"hljs-comment\">// [1, 2, 3]</span>\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(arr.slice(<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">2</span>)); <span class=\"hljs-comment\">// [1, 2]</span>\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(arr); <span class=\"hljs-comment\">// [1, 2, 3]</span>\n" +
//   "\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(arr.splice(<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">1</span>)); <span class=\"hljs-comment\">// [1]</span>\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(arr); <span class=\"hljs-comment\">// [2, 3]</span>\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(arr.splice(<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">1</span>)); <span class=\"hljs-comment\">// [2]</span>\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(arr); <span class=\"hljs-comment\">// [3]</span>\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>这里的 <code>slice</code> 方法多次调用都不会改变原有数组，且会产生相同的输出。而 <code>splice</code> 每次调用都在修改原数组，且产生的输出也不相同。&nbsp;在函数式编程中，这种会改变原有数据的函数已经不再是纯函数，应该尽量避免使用。</p>\n" +
//   "<blockquote>\n" +
//   "<p>阅读链接：如果想要了解更深入的函数式编程知识点，可以额外阅读<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fllh911001.gitbooks.io%2Fmostly-adequate-guide-chinese%2Fcontent%2F\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/\" ref=\"nofollow noopener noreferrer\">函数式编程指北</a>。</p>\n" +
//   "</blockquote>\n" +
//   "<h4 data-id=\"heading-23\">21、响应式编程的使用场景有哪些？</h4>\n" +
//   "<p>响应式编程是一种基于<strong>观察者（发布 / 订阅）模式</strong>并且面向<strong>异步</strong>（Asynchronous）<strong>数据流</strong>（Data Stream）和<strong>变化传播</strong>的声明式编程范式。响应式编程主要适用的场景包含：</p>\n" +
//   "<ul>\n" +
//   "<li>用户和系统发起的连续事件处理，例如鼠标的点击、键盘的按键或者通信设备发起的信号等</li>\n" +
//   "<li>非可靠的网络或者通信处理（例如 HTTP 网络的请求重试）</li>\n" +
//   "<li>连续的异步 IO 处理</li>\n" +
//   "<li>复杂的继发事务处理（例如一次事件涉及到多个继发的网络请求）</li>\n" +
//   "<li>高并发的消息处理（例如 IM 聊天）</li>\n" +
//   "<li>...</li>\n" +
//   "</ul>\n" +
//   "<h3 data-id=\"heading-24\">语法</h3>\n" +
//   "<h4 data-id=\"heading-25\">22、如何实现一个上中下三行布局，顶部和底部最小高度是 100px，中间自适应?</h4>\n" +
//   "<h4 data-id=\"heading-26\">23、如何判断一个元素 CSS 样式溢出，从而可以选择性的加 title 或者 Tooltip?</h4>\n" +
//   "<h4 data-id=\"heading-27\">24、如何让 CSS 元素左侧自动溢出（... 溢出在左侧）？</h4>\n" +
//   "<p>The&nbsp;<strong><code>direction</code></strong>&nbsp;CSS property sets the direction of text, table columns, and horizontal overflow. Use&nbsp;<code>rtl</code>&nbsp;for languages written from right to left (like Hebrew or Arabic), and&nbsp;<code>ltr</code>&nbsp;for those written from left to right (like English and most other languages).</p>\n" +
//   "<p>具体查看：<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2Fdirection\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://developer.mozilla.org/en-US/docs/Web/CSS/direction\" ref=\"nofollow noopener noreferrer\">developer.mozilla.org/en-US/docs/…</a></p>\n" +
//   "<h4 data-id=\"heading-28\">25、什么是沙箱？浏览器的沙箱有什么作用？</h4>\n" +
//   "<h4 data-id=\"heading-29\">26、如何处理浏览器中表单项的密码自动填充问题？</h4>\n" +
//   "<h4 data-id=\"heading-30\">27、Hash 和 History 路由的区别和优缺点？</h4>\n" +
//   "<h4 data-id=\"heading-31\">28、JavaScript 中对象的属性描述符有哪些？分别有什么作用？</h4>\n" +
//   "<h4 data-id=\"heading-32\">29、JavaScript 中 console 有哪些 api ?</h4>\n" +
//   "<p>The&nbsp;<strong><code>console</code></strong>&nbsp;object provides access to the browser's debugging console (e.g. the&nbsp;<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FTools%2FWeb_Console\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://developer.mozilla.org/en-US/docs/Tools/Web_Console\" ref=\"nofollow noopener noreferrer\">Web console</a>&nbsp;in Firefox). The specifics of how it works varies from browser to browser, but there is a&nbsp;<em>de facto</em>&nbsp;set of features that are typically provided.</p>\n" +
//   "<p>这里列出一些我常用的 API:</p>\n" +
//   "<ul>\n" +
//   "<li>console.log</li>\n" +
//   "<li>console.error</li>\n" +
//   "<li>console.time</li>\n" +
//   "<li>console.timeEnd</li>\n" +
//   "<li>console.group</li>\n" +
//   "</ul>\n" +
//   "<p>具体查看：<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2Fconsole\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://developer.mozilla.org/en-US/docs/Web/API/console\" ref=\"nofollow noopener noreferrer\">developer.mozilla.org/en-US/docs/…</a></p>\n" +
//   "<h4 data-id=\"heading-33\">30、 简单对比一下 Callback、Promise、Generator、Async 几个异步 API 的优劣？</h4>\n" +
//   "<p>在 JavaScript 中利用<a href=\"https://juejin.cn/post/6844903843197616136#heading-3\" target=\"_blank\" title=\"https://juejin.cn/post/6844903843197616136#heading-3\">事件循环机制</a>（Event Loop）可以在单线程中实现非阻塞式、异步的操作。例如</p>\n" +
//   "<ul>\n" +
//   "<li>Node.js 中的 Callback、<a href=\"https://link.juejin.cn?target=http%3A%2F%2Fnodejs.cn%2Fapi%2Fevents.html%23events_class_eventemitter\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"http://nodejs.cn/api/events.html#events_class_eventemitter\" ref=\"nofollow noopener noreferrer\">EventEmitter</a>、<a href=\"https://link.juejin.cn?target=http%3A%2F%2Fnodejs.cn%2Fapi%2Fstream.html\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"http://nodejs.cn/api/stream.html\" ref=\"nofollow noopener noreferrer\">Stream</a></li>\n" +
//   "<li>ES6 中的 <a href=\"https://link.juejin.cn?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fpromise\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://es6.ruanyifeng.com/#docs/promise\" ref=\"nofollow noopener noreferrer\">Promise</a>、<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fgenerator-async\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://es6.ruanyifeng.com/#docs/generator-async\" ref=\"nofollow noopener noreferrer\">Generator</a></li>\n" +
//   "<li>ES2017 中的 <a href=\"https://link.juejin.cn?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fasync\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://es6.ruanyifeng.com/#docs/async\" ref=\"nofollow noopener noreferrer\">Async</a></li>\n" +
//   "<li>三方库 RxJS、<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fkriskowal%2Fq\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://github.com/kriskowal/q\" ref=\"nofollow noopener noreferrer\">Q</a> 、<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftj%2Fco\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://github.com/tj/co\" ref=\"nofollow noopener noreferrer\">Co、</a><a href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fpetkaantonov%2Fbluebird\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://github.com/petkaantonov/bluebird\" ref=\"nofollow noopener noreferrer\">Bluebird</a></li>\n" +
//   "</ul>\n" +
//   "<p>我们重点来看一下常用的几种编程方式（Callback、Promise、Generator、Async）在语法糖上带来的优劣对比。</p>\n" +
//   "<p><strong>Callback</strong></p>\n" +
//   "<p>Callback（回调函数）是在 Web 前端开发中经常会使用的编程方式。这里举一个常用的定时器示例：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">interface</span> IObj {\n" +
//   "  <span class=\"hljs-attr\">value</span>: <span class=\"hljs-built_in\">string</span>;\n" +
//   "  deferExec(): <span class=\"hljs-built_in\">void</span>;\n" +
//   "  deferExecAnonymous(): <span class=\"hljs-built_in\">void</span>;\n" +
//   "  <span class=\"hljs-built_in\">console</span>(): <span class=\"hljs-built_in\">void</span>;\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> obj: IObj = {\n" +
//   "  <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'hello'</span>,\n" +
//   "\n" +
//   "  <span class=\"hljs-function\"><span class=\"hljs-title\">deferExecBind</span>(<span class=\"hljs-params\"></span>)</span> {\n" +
//   "    <span class=\"hljs-comment\">// 使用箭头函数可达到一样的效果</span>\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-built_in\">this</span>.console.bind(<span class=\"hljs-built_in\">this</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  },\n" +
//   "\n" +
//   "  <span class=\"hljs-function\"><span class=\"hljs-title\">deferExec</span>(<span class=\"hljs-params\"></span>)</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-built_in\">this</span>.console, <span class=\"hljs-number\">1000</span>);\n" +
//   "  },\n" +
//   "\n" +
//   "  <span class=\"hljs-function\"><span class=\"hljs-title\">console</span>(<span class=\"hljs-params\"></span>)</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-built_in\">this</span>.value);\n" +
//   "  },\n" +
//   "};\n" +
//   "\n" +
//   "obj.deferExecBind(); <span class=\"hljs-comment\">// hello</span>\n" +
//   "obj.deferExec(); <span class=\"hljs-comment\">// undefined</span>\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>回调函数经常会因为调用环境的变化而导致 <code>this</code> 的指向性变化。除此之外，使用回调函数来处理多个继发的异步任务时容易导致回调地狱（Callback Hell）:</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\">fs.readFile(fileA, <span class=\"hljs-string\">'utf-8'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">err, data</span>) </span>{\n" +
//   "  fs.readFile(fileB, <span class=\"hljs-string\">'utf-8'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">err, data</span>) </span>{\n" +
//   "    fs.readFile(fileC, <span class=\"hljs-string\">'utf-8'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">err, data</span>) </span>{\n" +
//   "      fs.readFile(fileD, <span class=\"hljs-string\">'utf-8'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">err, data</span>) </span>{\n" +
//   "        <span class=\"hljs-comment\">// 假设在业务中 fileD 的读写依次依赖 fileA、fileB 和 fileC</span>\n" +
//   "        <span class=\"hljs-comment\">// 或者经常也可以在业务中看到多个 HTTP 请求的操作有前后依赖（继发 HTTP 请求）</span>\n" +
//   "        <span class=\"hljs-comment\">// 这些异步任务之间纵向嵌套强耦合，无法进行横向复用</span>\n" +
//   "        <span class=\"hljs-comment\">// 如果某个异步发生变化，那它的所有上层或下层回调可能都需要跟着变化（比如 fileA 和 fileB 的依赖关系倒置）</span>\n" +
//   "        <span class=\"hljs-comment\">// 因此称这种现象为 回调地狱</span>\n" +
//   "        <span class=\"hljs-comment\">// ....</span>\n" +
//   "      });\n" +
//   "    });\n" +
//   "  });\n" +
//   "});\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>回调函数不能通过 <code>return</code> 返回数据，比如我们希望调用带有回调参数的函数并返回异步执行的结果时，只能通过再次回调的方式进行参数传递：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-comment\">// 希望延迟 3s 后执行并拿到结果</span>\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">getAsyncResult</span>(<span class=\"hljs-params\">result: <span class=\"hljs-built_in\">number</span></span>) </span>{\n" +
//   "  <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> {\n" +
//   "    <span class=\"hljs-keyword\">return</span> result * <span class=\"hljs-number\">3</span>;\n" +
//   "  }, <span class=\"hljs-number\">1000</span>);\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 尽管这是常规的编程思维方式</span>\n" +
//   "<span class=\"hljs-keyword\">const</span> result = getAsyncResult(<span class=\"hljs-number\">3000</span>);\n" +
//   "<span class=\"hljs-comment\">// 但是打印 undefined</span>\n" +
//   "<span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'result: '</span>, result);\n" +
//   "\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">getAsyncResultWithCb</span>(<span class=\"hljs-params\">result: <span class=\"hljs-built_in\">number</span>, cb: (result: <span class=\"hljs-built_in\">number</span>) =&gt; <span class=\"hljs-built_in\">void</span></span>) </span>{\n" +
//   "  <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> {\n" +
//   "    cb(result * <span class=\"hljs-number\">3</span>);\n" +
//   "  }, <span class=\"hljs-number\">1000</span>);\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 通过回调的形式获取结果</span>\n" +
//   "getAsyncResultWithCb(<span class=\"hljs-number\">3000</span>, <span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'result: '</span>, result); <span class=\"hljs-comment\">// 9000</span>\n" +
//   "});\n" +
//   "\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>对于 JavaScript 中标准的异步 API 可能无法通过在外部进行 <code>try...catch...</code> 的方式进行错误捕获：&nbsp;</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">try</span> {\n" +
//   "  <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// 下述是异常代码</span>\n" +
//   "    <span class=\"hljs-comment\">// 你可以在回调函数的内部进行 try...catch...</span>\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(a.b.c)\n" +
//   "  }, <span class=\"hljs-number\">1000</span>)\n" +
//   "\n" +
//   "} <span class=\"hljs-keyword\">catch</span>(err) {\n" +
//   "  <span class=\"hljs-comment\">// 这里不会执行</span>\n" +
//   "  <span class=\"hljs-comment\">// 进程会被终止</span>\n" +
//   "  <span class=\"hljs-built_in\">console</span>.error(err)\n" +
//   "}\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>上述示例讲述的都是 JavaScript 中标准的异步 API ，如果使用一些三方的异步 API 并且提供了回调能力时，这些 API 可能是非受信的，在真正使用的时候会因为<strong>执行反转</strong>（回调函数的执行权在三方库中）导致以下一些问题：</p>\n" +
//   "<ul>\n" +
//   "<li>使用者的回调函数设计没有进行错误捕获，而恰恰三方库进行了错误捕获却没有抛出错误处理信息，此时使用者很难感知到自己设计的回调函数是否有错误</li>\n" +
//   "<li>使用者难以感知到三方库的回调时机和回调次数，这个回调函数执行的权利控制在三方库手中</li>\n" +
//   "<li>使用者无法更改三方库提供的回调参数，回调参数可能无法满足使用者的诉求</li>\n" +
//   "<li>...</li>\n" +
//   "</ul>\n" +
//   "<p>举个简单的例子：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">interface</span> ILib&lt;T&gt; {\n" +
//   "  <span class=\"hljs-attr\">params</span>: T;\n" +
//   "  emit(params: T): <span class=\"hljs-built_in\">void</span>;\n" +
//   "  on(callback: <span class=\"hljs-function\">(<span class=\"hljs-params\">params: T</span>) =&gt;</span> <span class=\"hljs-built_in\">void</span>): <span class=\"hljs-built_in\">void</span>;\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 假设以下是一个三方库，并发布成了npm 包</span>\n" +
//   "<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> lib: ILib&lt;<span class=\"hljs-built_in\">string</span>&gt; = {\n" +
//   "  <span class=\"hljs-attr\">params</span>: <span class=\"hljs-string\">''</span>,\n" +
//   "\n" +
//   "  <span class=\"hljs-function\"><span class=\"hljs-title\">emit</span>(<span class=\"hljs-params\">params</span>)</span> {\n" +
//   "    <span class=\"hljs-built_in\">this</span>.params = params;\n" +
//   "  },\n" +
//   "\n" +
//   "  <span class=\"hljs-function\"><span class=\"hljs-title\">on</span>(<span class=\"hljs-params\">callback</span>)</span> {\n" +
//   "    <span class=\"hljs-keyword\">try</span> {\n" +
//   "      <span class=\"hljs-comment\">// callback 回调执行权在 lib 上</span>\n" +
//   "      <span class=\"hljs-comment\">// lib 库可以决定回调执行多次</span>\n" +
//   "      callback(<span class=\"hljs-built_in\">this</span>.params);\n" +
//   "      callback(<span class=\"hljs-built_in\">this</span>.params);\n" +
//   "      callback(<span class=\"hljs-built_in\">this</span>.params);\n" +
//   "      <span class=\"hljs-comment\">// lib 库甚至可以决定回调延迟执行</span>\n" +
//   "      <span class=\"hljs-comment\">// 异步执行回调函数</span>\n" +
//   "      <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> {\n" +
//   "        callback(<span class=\"hljs-built_in\">this</span>.params);\n" +
//   "      }, <span class=\"hljs-number\">3000</span>);\n" +
//   "    } <span class=\"hljs-keyword\">catch</span> (err) {\n" +
//   "      <span class=\"hljs-comment\">// 假设 lib 库的捕获没有抛出任何异常信息</span>\n" +
//   "    }\n" +
//   "  },\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 开发者引入 lib 库开始使用</span>\n" +
//   "lib.emit(<span class=\"hljs-string\">'hello'</span>);\n" +
//   "\n" +
//   "lib.on(<span class=\"hljs-function\">(<span class=\"hljs-params\">value</span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-comment\">// 使用者希望 on 里的回调只执行一次</span>\n" +
//   "\t<span class=\"hljs-comment\">// 这里的回调函数的执行时机是由三方库 lib 决定</span>\n" +
//   "  <span class=\"hljs-comment\">// 实际上打印四次，并且其中一次是异步执行</span>\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(value);\n" +
//   "});\n" +
//   "\n" +
//   "lib.on(<span class=\"hljs-function\">(<span class=\"hljs-params\">value</span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-comment\">// 下述是异常代码</span>\n" +
//   "  <span class=\"hljs-comment\">// 但是执行下述代码不会抛出任何异常信息</span>\n" +
//   "  <span class=\"hljs-comment\">// 开发者无法感知自己的代码设计错误</span>\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(value.a.b.c)\n" +
//   "});\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p><strong>Promise</strong></p>\n" +
//   "<p>Callback 的异步操作形式除了会造成回调地狱，还会造成难以测试的问题。ES6 中的 Promise （基于<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fpromisesaplus.com%2F\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://promisesaplus.com/\" ref=\"nofollow noopener noreferrer\"> Promise A +</a> 规范的异步编程解决方案）利用<a href=\"https://link.juejin.cn?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2013%2F09%2Ffinite-state_machine_for_javascript.html\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"http://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html\" ref=\"nofollow noopener noreferrer\">有限状态机</a>的原理来解决异步的处理问题，Promise 对象提供了统一的异步编程 API，它的特点如下：</p>\n" +
//   "<ul>\n" +
//   "<li>Promise 对象的执行状态不受外界影响。Promise 对象的异步操作有三种状态： <code>pending</code>（进行中）、 <code>fulfilled</code>（已成功）和 <code>rejected</code>（已失败）&nbsp;，只有 Promise 对象本身的异步操作结果可以决定当前的执行状态，任何其他的操作无法改变状态的结果</li>\n" +
//   "<li>Promise 对象的执行状态不可变。Promise 的状态只有两种变化可能：从 <code>pending</code>（进行中）变为 <code>fulfilled</code>（已成功）或从 <code>pending</code>（进行中）变为 <code>rejected</code>（已失败）</li>\n" +
//   "</ul>\n" +
//   "<blockquote>\n" +
//   "<p>温馨提示：有限状态机提供了一种优雅的解决方式，异步的处理本身可以通过异步状态的变化来触发相应的操作，这会比回调函数在逻辑上的处理更加合理，也可以降低代码的复杂度。</p>\n" +
//   "</blockquote>\n" +
//   "<p>Promise 对象的执行状态不可变示例如下：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> promise = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt;(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-comment\">// 状态变更为 fulfilled 并返回结果 1 后不会再变更状态</span>\n" +
//   "  resolve(<span class=\"hljs-number\">1</span>);\n" +
//   "  <span class=\"hljs-comment\">// 不会变更状态</span>\n" +
//   "  reject(<span class=\"hljs-number\">4</span>);\n" +
//   "});\n" +
//   "\n" +
//   "promise\n" +
//   "  .then(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// 在 ES 6 中 Promise 的 then 回调执行是异步执行（微任务）</span>\n" +
//   "    <span class=\"hljs-comment\">// 在当前 then 被调用的那轮事件循环（Event Loop）的末尾执行</span>\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'result: '</span>, result);\n" +
//   "  })\n" +
//   "  .catch(<span class=\"hljs-function\">(<span class=\"hljs-params\">error</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// 不执行</span>\n" +
//   "    <span class=\"hljs-built_in\">console</span>.error(<span class=\"hljs-string\">'error: '</span>, error);\n" +
//   "  });\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>假设要实现两个继发的 HTTP 请求，第一个请求接口返回的数据是第二个请求接口的参数，使用回调函数的实现方式如下所示（这里使用 <code>setTimeout</code> 来指代异步请求）：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-comment\">// 回调地狱</span>\n" +
//   "<span class=\"hljs-keyword\">const</span> doubble = <span class=\"hljs-function\">(<span class=\"hljs-params\">result: <span class=\"hljs-built_in\">number</span>, callback: (finallResult: <span class=\"hljs-built_in\">number</span>) =&gt; <span class=\"hljs-built_in\">void</span></span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-comment\">// Mock 第一个异步请求</span>\n" +
//   "  <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// Mock 第二个异步请求（假设第二个请求的参数依赖第一个请求的返回结果）</span>\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> {\n" +
//   "      callback(result * <span class=\"hljs-number\">2</span>);\n" +
//   "    }, <span class=\"hljs-number\">2000</span>);\n" +
//   "  }, <span class=\"hljs-number\">1000</span>);\n" +
//   "};\n" +
//   "\n" +
//   "doubble(<span class=\"hljs-number\">1000</span>, <span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'result: '</span>, result);\n" +
//   "});\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<blockquote>\n" +
//   "<p>温馨提示：继发请求的依赖关系非常常见，例如人员基本信息管理系统的开发中，经常需要先展示组织树结构，并默认加载第一个组织下的人员列表信息。</p>\n" +
//   "</blockquote>\n" +
//   "<p>如果采用 Promise 的处理方式则可以规避上述常见的回调地狱问题：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// Mock 异步请求</span>\n" +
//   "    <span class=\"hljs-comment\">// 将 resolve 改成 reject 会被 catch 捕获</span>\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// Mock 异步请求</span>\n" +
//   "    <span class=\"hljs-comment\">// 将 resolve 改成 reject 会被 catch 捕获</span>\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "firstPromise(<span class=\"hljs-number\">1000</span>)\n" +
//   "  .then(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-keyword\">return</span> nextPromise(result);\n" +
//   "  })\n" +
//   "  .then(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// 2s 后打印 2000</span>\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'result: '</span>, result);\n" +
//   "  })\n" +
//   "  <span class=\"hljs-comment\">// 任何一个 Promise 到达 rejected 状态都能被 catch 捕获</span>\n" +
//   "  .catch(<span class=\"hljs-function\">(<span class=\"hljs-params\">err</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.error(<span class=\"hljs-string\">'err: '</span>, err);\n" +
//   "  });\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>Promise 的错误回调可以同时捕获 <code>firstPromise</code> 和 <code>nextPromise</code> 两个函数的 <code>rejected</code> 状态。接下来考虑以下调用场景：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// Mock 异步请求</span>\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// Mock 异步请求</span>\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "firstPromise(<span class=\"hljs-number\">1000</span>)\n" +
//   "  .then(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "    nextPromise(result).then(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "      <span class=\"hljs-comment\">// 后打印</span>\n" +
//   "      <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'nextPromise result: '</span>, result);\n" +
//   "    });\n" +
//   "  })\n" +
//   "  .then(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// 先打印</span>\n" +
//   "    <span class=\"hljs-comment\">// 由于上一个 then 没有返回值，这里打印 undefined</span>\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'firstPromise result: '</span>, result);\n" +
//   "  })\n" +
//   "  .catch(<span class=\"hljs-function\">(<span class=\"hljs-params\">err</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.error(<span class=\"hljs-string\">'err: '</span>, err);\n" +
//   "  });\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>首先 Promise 可以注册多个 <code>then</code>（放在一个执行队列里），并且这些 <code>then</code> 会根据上一次返回值的结果依次执行。除此之外，各个 Promise 的 <code>then</code> 执行互不干扰。&nbsp;我们将示例进行简单的变换：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// Mock 异步请求</span>\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// Mock 异步请求</span>\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "firstPromise(<span class=\"hljs-number\">1000</span>)\n" +
//   "  .then(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// 返回了 nextPromise 的 then 执行后的结果</span>\n" +
//   "    <span class=\"hljs-keyword\">return</span> nextPromise(result).then(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "      <span class=\"hljs-keyword\">return</span> result;\n" +
//   "    });\n" +
//   "  })\n" +
//   "  <span class=\"hljs-comment\">// 接着 nextPromise 的 then 执行的返回结果继续执行</span>\n" +
//   "  .then(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// 2s 后打印 2000</span>\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'nextPromise result: '</span>, result);\n" +
//   "  })\n" +
//   "  .catch(<span class=\"hljs-function\">(<span class=\"hljs-params\">err</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.error(<span class=\"hljs-string\">'err: '</span>, err);\n" +
//   "  });\n" +
//   "\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>上述例子中的执行结果是因为 <code>then</code> 的执行会返回一个新的 Promise 对象，并且如果 <code>then</code> 执行后返回的仍然是 Promise 对象，那么下一个 <code>then</code> 的链式调用会等待该 Promise 对象的状态发生变化后才会调用（能得到这个 Promise 处理的结果）。接下来重点看下 Promise 的错误处理：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> promise = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">string</span>&gt;(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-comment\">// 下述是异常代码</span>\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(a.b.c);\n" +
//   "  resolve(<span class=\"hljs-string\">'hello'</span>);\n" +
//   "});\n" +
//   "\n" +
//   "promise\n" +
//   "  .then(<span class=\"hljs-function\">(<span class=\"hljs-params\">result</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'result: '</span>, result);\n" +
//   "  })\n" +
//   "  <span class=\"hljs-comment\">// 去掉 catch 仍然会抛出错误，但不会退出进程终止脚本执行</span>\n" +
//   "  .catch(<span class=\"hljs-function\">(<span class=\"hljs-params\">err</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// 执行</span>\n" +
//   "    <span class=\"hljs-comment\">// ReferenceError: a is not defined</span>\n" +
//   "    <span class=\"hljs-built_in\">console</span>.error(err);\n" +
//   "  });\n" +
//   "\n" +
//   "<span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> {\n" +
//   "  <span class=\"hljs-comment\">// 继续执行</span>\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'hello world!'</span>);\n" +
//   "}, <span class=\"hljs-number\">2000</span>);\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>从上述示例可以看出 Promise 的错误不会影响其他代码的执行，只会影响 Promise 内部的代码本身，因为Promise 会在内部对错误进行异常捕获，从而保证整体代码执行的稳定性。Promise 还提供了其他的一些 API 方便多任务的执行，包括</p>\n" +
//   "<ul>\n" +
//   "<li><code>Promise.all</code>：适合多个异步任务并发执行但不允许其中任何一个任务失败</li>\n" +
//   "<li><code>Promise.race</code> ：适合多个异步任务抢占式执行</li>\n" +
//   "<li><code>Promise.allSettled</code> ：适合多个异步任务并发执行但允许某些任务失败</li>\n" +
//   "</ul>\n" +
//   "<p>Promise 相对于 Callback 对于异步的处理更加优雅，并且能力也更加强大， 但是也存在一些自身的缺点：</p>\n" +
//   "<ul>\n" +
//   "<li>无法取消 Promise 的执行</li>\n" +
//   "<li>无法在 Promise 外部通过 <code>try...catch...</code> 的形式进行错误捕获（Promise 内部捕获了错误）</li>\n" +
//   "<li>状态单一，每次决断只能产生一种状态结果，需要不停的进行链式调用</li>\n" +
//   "</ul>\n" +
//   "<blockquote>\n" +
//   "<p>温馨提示：手写 Promise 是面试官非常喜欢的一道笔试题，本质是希望面试者能够通过底层的设计正确了解 Promise 的使用方式，如果你对 Promise 的设计原理不熟悉，可以深入了解一下或者手动设计一个。</p>\n" +
//   "</blockquote>\n" +
//   "<p><strong>Generator</strong></p>\n" +
//   "<p>Promise 解决了 Callback 的回调地狱问题，但也造成了代码冗余，如果一些异步任务不支持 Promise 语法，就需要进行一层 Promise 封装。Generator 将 JavaScript 的异步编程带入了一个全新的阶段，它使得异步代码的设计和执行看起来和同步代码一致。Generator 使用的简单示例如下：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">3</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 在 Generator 函数里执行的异步代码看起来和同步代码一致</span>\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>* <span class=\"hljs-title\">gen</span>(<span class=\"hljs-params\">result: <span class=\"hljs-built_in\">number</span></span>): <span class=\"hljs-title\">Generator</span>&lt;<span class=\"hljs-title\">Promise</span>&lt;<span class=\"hljs-title\">number</span>&gt;, <span class=\"hljs-title\">Promise</span>&lt;<span class=\"hljs-title\">number</span>&gt;, <span class=\"hljs-title\">number</span>&gt; </span>{\n" +
//   "  <span class=\"hljs-comment\">// 异步代码</span>\n" +
//   "  <span class=\"hljs-keyword\">const</span> firstResult = <span class=\"hljs-keyword\">yield</span> firstPromise(result)\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'firstResult: '</span>, firstResult) <span class=\"hljs-comment\">// 2</span>\n" +
//   "\t<span class=\"hljs-comment\">// 异步代码</span>\n" +
//   "  <span class=\"hljs-keyword\">const</span> nextResult = <span class=\"hljs-keyword\">yield</span> nextPromise(firstResult)\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'nextResult: '</span>, nextResult) <span class=\"hljs-comment\">// 6</span>\n" +
//   "  <span class=\"hljs-keyword\">return</span> nextPromise(firstResult)\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> g = gen(<span class=\"hljs-number\">1</span>)\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 手动执行 Generator 函数</span>\n" +
//   "g.next().value.then(<span class=\"hljs-function\">(<span class=\"hljs-params\">res: <span class=\"hljs-built_in\">number</span></span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-comment\">// 将 firstPromise 的返回值传递给第一个 yield 表单式对应的 firstResult</span>\n" +
//   "  <span class=\"hljs-keyword\">return</span> g.next(res).value\n" +
//   "}).then(<span class=\"hljs-function\">(<span class=\"hljs-params\">res: <span class=\"hljs-built_in\">number</span></span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-comment\">// 将 nextPromise 的返回值传递给第二个 yield 表单式对应的 nextResult</span>\n" +
//   "  <span class=\"hljs-keyword\">return</span> g.next(res).value\n" +
//   "})\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>通过上述代码，可以看出 Generator 相对于 Promise 具有以下优势：</p>\n" +
//   "<ul>\n" +
//   "<li>丰富了状态类型，Generator 通过 <code>next</code> 可以产生不同的状态信息，也可以通过 <code>return</code> 结束函数的执行状态，相对于 Promise 的 <code>resolve</code> 不可变状态更加丰富&nbsp;</li>\n" +
//   "<li>Generator 函数内部的异步代码执行看起来和同步代码执行一致，非常利于代码的维护</li>\n" +
//   "<li>Generator 函数内部的执行逻辑和相应的状态变化逻辑解耦，降低了代码的复杂度</li>\n" +
//   "</ul>\n" +
//   "<p><code>next</code> 可以不停的改变状态使得 <code>yield</code> 得以继续执行的代码可以变得非常有规律，例如从上述的<strong>手动执行 Generator 函数</strong>可以看出，完全可以将其封装成一个自动执行的执行器，具体如下所示：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">3</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">type</span> Gen =  Generator&lt;<span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt;, <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt;, <span class=\"hljs-built_in\">number</span>&gt;\n" +
//   "\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>* <span class=\"hljs-title\">gen</span>(<span class=\"hljs-params\"></span>): <span class=\"hljs-title\">Gen</span> </span>{\n" +
//   "  <span class=\"hljs-keyword\">const</span> firstResult = <span class=\"hljs-keyword\">yield</span> firstPromise(<span class=\"hljs-number\">1</span>)\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'firstResult: '</span>, firstResult) <span class=\"hljs-comment\">// 2</span>\n" +
//   "  <span class=\"hljs-keyword\">const</span> nextResult = <span class=\"hljs-keyword\">yield</span> nextPromise(firstResult)\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'nextResult: '</span>, nextResult) <span class=\"hljs-comment\">// 6</span>\n" +
//   "  <span class=\"hljs-keyword\">return</span> nextPromise(firstResult)\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// Generator 自动执行器</span>\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">co</span>(<span class=\"hljs-params\">gen: () =&gt; Gen</span>) </span>{\n" +
//   "  <span class=\"hljs-keyword\">const</span> g = gen()\n" +
//   "  <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">next</span>(<span class=\"hljs-params\">data: <span class=\"hljs-built_in\">number</span></span>) </span>{\n" +
//   "    <span class=\"hljs-keyword\">const</span> result = g.next(data)\n" +
//   "    <span class=\"hljs-keyword\">if</span>(result.done) {\n" +
//   "      <span class=\"hljs-keyword\">return</span> result.value\n" +
//   "    }\n" +
//   "    result.value.then(<span class=\"hljs-function\"><span class=\"hljs-params\">data</span> =&gt;</span> {\n" +
//   "      <span class=\"hljs-comment\">// 通过递归的方式处理相同的逻辑</span>\n" +
//   "      next(data)\n" +
//   "    })\n" +
//   "  }\n" +
//   "  <span class=\"hljs-comment\">// 第一次调用 next 主要用于启动 Generator 函数</span>\n" +
//   "  <span class=\"hljs-comment\">// 内部指针会从函数头部开始执行，直到遇到第一个 yield 表达式</span>\n" +
//   "  <span class=\"hljs-comment\">// 因此第一次 next 传递的参数没有任何含义（这里传递只是为了防止 TS 报错）</span>\n" +
//   "  next(<span class=\"hljs-number\">0</span>)\n" +
//   "}\n" +
//   "\n" +
//   "co(gen)\n" +
//   "\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<blockquote>\n" +
//   "<p>温馨提示：<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftj\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://github.com/tj\" ref=\"nofollow noopener noreferrer\">TJ Holowaychuk&nbsp;</a>设计了一个 Generator 自动执行器 <a href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftj%2Fco\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://github.com/tj/co\" ref=\"nofollow noopener noreferrer\">Co</a>，使用 Co 的前提是 <code>yield</code>&nbsp; 命令后必须是 Promise 对象或者 Thunk 函数。Co 还可以支持并发的异步处理，具体可查看官方的<a href=\"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ftj%2Fco%23arrays\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://github.com/tj/co#arrays\" ref=\"nofollow noopener noreferrer\"> API 文档</a>。</p>\n" +
//   "</blockquote>\n" +
//   "<p>需要注意的是 Generator 函数的返回值是一个 Iterator 遍历器对象，具体如下所示：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">3</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">type</span> Gen = Generator&lt;<span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt;&gt;;\n" +
//   "\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>* <span class=\"hljs-title\">gen</span>(<span class=\"hljs-params\"></span>): <span class=\"hljs-title\">Gen</span> </span>{\n" +
//   "  <span class=\"hljs-keyword\">yield</span> firstPromise(<span class=\"hljs-number\">1</span>);\n" +
//   "  <span class=\"hljs-keyword\">yield</span> nextPromise(<span class=\"hljs-number\">2</span>);\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 注意使用 next 是继发执行，而这里是并发执行</span>\n" +
//   "<span class=\"hljs-built_in\">Promise</span>.all([...gen()]).then(<span class=\"hljs-function\">(<span class=\"hljs-params\">res</span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'res: '</span>, res);\n" +
//   "});\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">const</span> promise <span class=\"hljs-keyword\">of</span> gen()) {\n" +
//   "  promise.then(<span class=\"hljs-function\">(<span class=\"hljs-params\">res</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'res: '</span>, res);\n" +
//   "  });\n" +
//   "}\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>Generator 函数的错误处理相对复杂一些，极端情况下需要对执行和 Generator 函数进行双重错误捕获，具体如下所示：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// 需要注意这里的reject 没有被捕获</span>\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> reject(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">3</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">type</span> Gen = Generator&lt;<span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt;&gt;;\n" +
//   "\n" +
//   "<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>* <span class=\"hljs-title\">gen</span>(<span class=\"hljs-params\"></span>): <span class=\"hljs-title\">Gen</span> </span>{\n" +
//   "  <span class=\"hljs-keyword\">try</span> {\n" +
//   "    <span class=\"hljs-keyword\">yield</span> firstPromise(<span class=\"hljs-number\">1</span>);\n" +
//   "    <span class=\"hljs-keyword\">yield</span> nextPromise(<span class=\"hljs-number\">2</span>);\n" +
//   "  } <span class=\"hljs-keyword\">catch</span> (err) {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.error(<span class=\"hljs-string\">'Generator 函数错误捕获: '</span>, err);\n" +
//   "  }\n" +
//   "}\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">try</span> {\n" +
//   "  <span class=\"hljs-keyword\">const</span> g = gen();\n" +
//   "  g.next();\n" +
//   "  <span class=\"hljs-comment\">// 返回 Promise 后还需要通过 Promise.prototype.catch 进行错误捕获</span>\n" +
//   "  g.next();\n" +
//   "  <span class=\"hljs-comment\">// Generator 函数错误捕获</span>\n" +
//   "  g.throw(<span class=\"hljs-string\">'err'</span>);\n" +
//   "  <span class=\"hljs-comment\">// 执行器错误捕获</span>\n" +
//   "  g.throw(<span class=\"hljs-string\">'err'</span>);\n" +
//   "} <span class=\"hljs-keyword\">catch</span> (err) {\n" +
//   "  <span class=\"hljs-built_in\">console</span>.error(<span class=\"hljs-string\">'执行错误捕获: '</span>, err);\n" +
//   "}\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>在使用 <code>g.throw</code> 的时候还需要注意以下一些事项：</p>\n" +
//   "<ul>\n" +
//   "<li>如果 Generator 函数本身没有捕获错误，那么 Generator 函数内部抛出的错误可以在执行处进行错误捕获</li>\n" +
//   "<li>如果 Generator 函数内部和执行处都没有进行错误捕获，则终止进程并抛出错误信息</li>\n" +
//   "<li>如果没有执行过 <code>g.next</code>，则 <code>g.throw</code> 不会在 Gererator 函数中被捕获（因为执行指针没有启动 Generator 函数的执行），此时可以在执行处进行执行错误捕获</li>\n" +
//   "</ul>\n" +
//   "<p><strong>Async</strong></p>\n" +
//   "<p>Async 是 Generator 函数的语法糖，相对于 Generator 而言 Async 的特性如下：</p>\n" +
//   "<ul>\n" +
//   "<li>内置执行器：Generator 函数需要设计手动执行器或者通用执行器（例如 Co 执行器）进行执行，Async 语法则内置了自动执行器，设计代码时无须关心执行步骤</li>\n" +
//   "<li><code>yield</code> 命令无约束：在 Generator 中使用 Co 执行器时 <code>yield</code> 后必须是 Promise 对象或者 Thunk 函数，而 Async 语法中的 <code>await</code> 后可以是 Promise 对象或者原始数据类型对象、数字、字符串、布尔值等（此时会对其进行 <code>Promise.resolve()</code> 包装处理）&nbsp;</li>\n" +
//   "<li>返回 Promise： <code>async</code> 函数的返回值是 Promise 对象（返回原始数据类型会被 Promise 进行封装），&nbsp;因此还可以作为 <code>await</code> &nbsp;的命令参数，相对于 Generator 返回 Iterator 遍历器更加简洁实用</li>\n" +
//   "</ul>\n" +
//   "<p>举个简单的示例：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">3</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">co</span>(<span class=\"hljs-params\"></span>) </span>{\n" +
//   "  <span class=\"hljs-keyword\">const</span> firstResult = <span class=\"hljs-keyword\">await</span> firstPromise(<span class=\"hljs-number\">1</span>);\n" +
//   "  <span class=\"hljs-comment\">// 1s 后打印 2</span>\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'firstResult: '</span>, firstResult); \n" +
//   "  <span class=\"hljs-comment\">// 等待 firstPromise 的状态发生变化后执行</span>\n" +
//   "  <span class=\"hljs-keyword\">const</span> nextResult = <span class=\"hljs-keyword\">await</span> nextPromise(firstResult);\n" +
//   "  <span class=\"hljs-comment\">// 2s 后打印 6</span>\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'nextResult: '</span>, nextResult); \n" +
//   "  <span class=\"hljs-keyword\">return</span> nextResult;\n" +
//   "}\n" +
//   "\n" +
//   "co();\n" +
//   "\n" +
//   "co().then(<span class=\"hljs-function\">(<span class=\"hljs-params\">res</span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'res: '</span>, res); <span class=\"hljs-comment\">// 6</span>\n" +
//   "});\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>通过上述示例可以看出，<code>async</code> 函数的特性如下：</p>\n" +
//   "<ul>\n" +
//   "<li>调用 <code>async</code> 函数后返回的是一个 Promise 对象，通过 <code>then</code> 回调可以拿到 async 函数内部 <code>return</code> 语句的返回值&nbsp;&nbsp;</li>\n" +
//   "<li>调用 <code>async</code> 函数后返回的 Promise 对象必须等待内部所有 <code>await</code> 对应的 Promise 执行完（这使得 <code>async</code> 函数可能是阻塞式执行）后才会发生状态变化，除非中途遇到了 <code>return</code> 语句</li>\n" +
//   "<li><code>await</code> 命令后如果是 Promise 对象，则返回 Promise 对象处理后的结果，如果是原始数据类型，则直接返回原始数据类型</li>\n" +
//   "</ul>\n" +
//   "<p>上述代码是阻塞式执行，<code>nextPromise</code> 需要等待 <code>firstPromise</code> 执行完成后才能继续执行，如果希望两者能够并发执行，则可以进行下述设计：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">3</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">co</span>(<span class=\"hljs-params\"></span>) </span>{\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">await</span> <span class=\"hljs-built_in\">Promise</span>.all([firstPromise(<span class=\"hljs-number\">1</span>), nextPromise(<span class=\"hljs-number\">1</span>)]);\n" +
//   "}\n" +
//   "\n" +
//   "co().then(<span class=\"hljs-function\">(<span class=\"hljs-params\">res</span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'res: '</span>, res); <span class=\"hljs-comment\">// [2,3]</span>\n" +
//   "});\n" +
//   "\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>除了使用 Promise 自带的并发执行 API，也可以通过让所有的 Promise 提前并发执行来处理：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'firstPromise'</span>);\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">10000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'nextPromise'</span>);\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">3</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">co</span>(<span class=\"hljs-params\"></span>) </span>{\n" +
//   "  <span class=\"hljs-comment\">// 执行 firstPromise</span>\n" +
//   "  <span class=\"hljs-keyword\">const</span> first = firstPromise(<span class=\"hljs-number\">1</span>);\n" +
//   "  <span class=\"hljs-comment\">// 和 firstPromise 同时执行 nextPromise</span>\n" +
//   "  <span class=\"hljs-keyword\">const</span> next = nextPromise(<span class=\"hljs-number\">1</span>);\n" +
//   "  <span class=\"hljs-comment\">// 等待 firstPromise 结果回来</span>\n" +
//   "  <span class=\"hljs-keyword\">const</span> firstResult = <span class=\"hljs-keyword\">await</span> first;\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'firstResult: '</span>, firstResult);\n" +
//   "  <span class=\"hljs-comment\">// 等待 nextPromise 结果回来</span>\n" +
//   "  <span class=\"hljs-keyword\">const</span> nextResult = <span class=\"hljs-keyword\">await</span> next;\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'nextResult: '</span>, nextResult);\n" +
//   "  <span class=\"hljs-keyword\">return</span> nextResult;\n" +
//   "}\n" +
//   "\n" +
//   "co().then(<span class=\"hljs-function\">(<span class=\"hljs-params\">res</span>) =&gt;</span> {\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'res: '</span>, res); <span class=\"hljs-comment\">// 3</span>\n" +
//   "});\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p>Async 的错误处理相对于 Generator 会更加简单，具体示例如下所示：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// Promise 决断错误</span>\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> reject(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">3</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">co</span>(<span class=\"hljs-params\"></span>) </span>{\n" +
//   "  <span class=\"hljs-keyword\">const</span> firstResult = <span class=\"hljs-keyword\">await</span> firstPromise(<span class=\"hljs-number\">1</span>);\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'firstResult: '</span>, firstResult);\n" +
//   "  <span class=\"hljs-keyword\">const</span> nextResult = <span class=\"hljs-keyword\">await</span> nextPromise(<span class=\"hljs-number\">1</span>);\n" +
//   "  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'nextResult: '</span>, nextResult);\n" +
//   "  <span class=\"hljs-keyword\">return</span> nextResult;\n" +
//   "}\n" +
//   "\n" +
//   "co()\n" +
//   "  .then(<span class=\"hljs-function\">(<span class=\"hljs-params\">res</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'res: '</span>, res);\n" +
//   "  })\n" +
//   "  .catch(<span class=\"hljs-function\">(<span class=\"hljs-params\">err</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.error(<span class=\"hljs-string\">'err: '</span>, err); <span class=\"hljs-comment\">// err: 2</span>\n" +
//   "  });\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<p><code>async</code> 函数内部抛出的错误，会导致函数返回的 Promise 对象变为 <code>rejected</code> 状态，从而可以通过 <code>catch</code> 捕获，&nbsp;上述代码只是一个粗粒度的容错处理，如果希望 <code>firstPromise</code> 错误后可以继续执行 <code>nextPromise</code>，则可以通过 <code>try...catch...</code> 在 <code>async</code> 函数里进行局部错误捕获：</p>\n" +
//   "<pre><code class=\"hljs language-typescript copyable\" lang=\"typescript\"><span class=\"hljs-keyword\">const</span> firstPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-comment\">// Promise 决断错误</span>\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> reject(result * <span class=\"hljs-number\">2</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> nextPromise = (result: <span class=\"hljs-built_in\">number</span>): <span class=\"hljs-built_in\">Promise</span>&lt;<span class=\"hljs-built_in\">number</span>&gt; =&gt; {\n" +
//   "  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Promise</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">resolve, reject</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">setTimeout</span>(<span class=\"hljs-function\">() =&gt;</span> resolve(result * <span class=\"hljs-number\">3</span>), <span class=\"hljs-number\">1000</span>);\n" +
//   "  });\n" +
//   "};\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">co</span>(<span class=\"hljs-params\"></span>) </span>{\n" +
//   "  <span class=\"hljs-keyword\">try</span> {\n" +
//   "    <span class=\"hljs-keyword\">await</span> firstPromise(<span class=\"hljs-number\">1</span>);\n" +
//   "  } <span class=\"hljs-keyword\">catch</span> (err) {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.error(<span class=\"hljs-string\">'err: '</span>, err); <span class=\"hljs-comment\">// err: 2</span>\n" +
//   "  }\n" +
//   "  \n" +
//   "  <span class=\"hljs-comment\">// nextPromise 继续执行</span>\n" +
//   "  <span class=\"hljs-keyword\">const</span> nextResult = <span class=\"hljs-keyword\">await</span> nextPromise(<span class=\"hljs-number\">1</span>);\n" +
//   "  <span class=\"hljs-keyword\">return</span> nextResult;\n" +
//   "}\n" +
//   "\n" +
//   "co()\n" +
//   "  .then(<span class=\"hljs-function\">(<span class=\"hljs-params\">res</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'res: '</span>, res); <span class=\"hljs-comment\">// res: 3</span>\n" +
//   "  })\n" +
//   "  .catch(<span class=\"hljs-function\">(<span class=\"hljs-params\">err</span>) =&gt;</span> {\n" +
//   "    <span class=\"hljs-built_in\">console</span>.error(<span class=\"hljs-string\">'err: '</span>, err);\n" +
//   "  });\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<blockquote>\n" +
//   "<p>温馨提示：Callback 是 Node.js 中经常使用的编程方式，Node.js 中很多原生的 API 都是采用 Callback 的形式进行异步设计，早期的 Node.js 经常会有 Callback 和 Promise 混用的情况，并且在很长一段时间里都没有很好的支持 Async 语法。如果你对 Node.js 和它的替代品 Deno 感兴趣，可以观看 Ryan Dahl 在 TS Conf 2019 中的经典演讲 <a href=\"https://link.juejin.cn?target=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1gIiZfSbEAE\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" title=\"https://www.youtube.com/watch?v=1gIiZfSbEAE\" ref=\"nofollow noopener noreferrer\">Deno is a New Way to JavaScript</a>。</p>\n" +
//   "</blockquote>\n" +
//   "<h4 data-id=\"heading-34\">31、 Object.defineProperty 有哪几个参数？各自都有什么作用？</h4>\n" +
//   "<h4 data-id=\"heading-35\">32、 Object.defineProperty 和 ES6 的 Proxy 有什么区别？</h4>\n" +
//   "<blockquote>\n" +
//   "<p>阅读链接：<a href=\"https://juejin.cn/post/6844904099704471559#heading-23\" target=\"_blank\" title=\"https://juejin.cn/post/6844904099704471559#heading-23\">基于 Vue 实现一个 MVVM</a> - 数据劫持的实现。</p>\n" +
//   "</blockquote>\n" +
//   "<h4 data-id=\"heading-36\">33、 ES6 中 Symbol、Map、Decorator 的使用场景有哪些？或者你在哪些库的源码里见过这些 API 的使用？</h4>\n" +
//   "<h4 data-id=\"heading-37\">34、 为什么要使用 TypeScript ? TypeScript 相对于 JavaScript 的优势是什么？</h4>\n" +
//   "<h4 data-id=\"heading-38\">35、 TypeScript 中 const 和 readonly 的区别？枚举和常量枚举的区别？接口和类型别名的区别？</h4>\n" +
//   "<h4 data-id=\"heading-39\">36、 TypeScript 中 any 类型的作用是什么？</h4>\n" +
//   "<h4 data-id=\"heading-40\">37、 TypeScript 中 any、never、unknown 和 void 有什么区别？</h4>\n" +
//   "<h4 data-id=\"heading-41\">38、 TypeScript 中 interface 可以给 Function / Array / Class（Indexable）做声明吗？</h4>\n" +
//   "<h4 data-id=\"heading-42\">39、 TypeScript 中可以使用 String、Number、Boolean、Symbol、Object 等给类型做声明吗？</h4>\n" +
//   "<h4 data-id=\"heading-43\">40、 TypeScript 中的 this 和 JavaScript 中的 this 有什么差异？</h4>\n" +
//   "<h4 data-id=\"heading-44\">41、 TypeScript 中使用 Unions 时有哪些注意事项？</h4>\n" +
//   "<h4 data-id=\"heading-45\">42、 TypeScript 如何设计 Class 的声明？</h4>\n" +
//   "<h4 data-id=\"heading-46\">43、 TypeScript 中如何联合枚举类型的 Key?</h4>\n" +
//   "<h4 data-id=\"heading-47\">44、 TypeScript 中 ?.、??、!.、_、** 等符号的含义？</h4>\n" +
//   "<h4 data-id=\"heading-48\">45、 TypeScript 中预定义的有条件类型有哪些？</h4>\n" +
//   "<h4 data-id=\"heading-49\">46、 简单介绍一下 TypeScript 模块的加载机制？</h4>\n" +
//   "<h4 data-id=\"heading-50\">47、 简单聊聊你对 TypeScript 类型兼容性的理解？抗变、双变、协变和逆变的简单理解？</h4>\n" +
//   "<h4 data-id=\"heading-51\">48、 TypeScript 中对象展开会有什么副作用吗？</h4>\n" +
//   "<h4 data-id=\"heading-52\">49、 TypeScript 中 interface、type、enum 声明有作用域的功能吗？</h4>\n" +
//   "<h4 data-id=\"heading-53\">50、 TypeScript 中同名的 interface 或者同名的 interface 和 class 可以合并吗？</h4>\n" +
//   "<h4 data-id=\"heading-54\">51、 如何使 TypeScript 项目引入并识别编译为 JavaScript 的 npm 库包？</h4>\n" +
//   "<h4 data-id=\"heading-55\">52、 TypeScript 的 tsconfig.json 中有哪些配置项信息？</h4>\n" +
//   "<h4 data-id=\"heading-56\">53、 TypeScript 中如何设置模块导入的路径别名？</h4>\n" +
//   "<h3 data-id=\"heading-57\">框架</h3>\n" +
//   "<h4 data-id=\"heading-58\">54、 React Class 组件有哪些周期函数？分别有什么作用？</h4>\n" +
//   "<h4 data-id=\"heading-59\">55、 React Class 组件中请求可以在 componentWillMount 中发起吗？为什么？</h4>\n" +
//   "<h4 data-id=\"heading-60\">56、 React Class 组件和 React Hook 的区别有哪些？</h4>\n" +
//   "<h4 data-id=\"heading-61\">57、 React 中高阶函数和自定义 Hook 的优缺点？</h4>\n" +
//   "<h4 data-id=\"heading-62\">58、 简要说明 React Hook 中 useState 和 useEffect 的运行原理？</h4>\n" +
//   "<h4 data-id=\"heading-63\">59、 React 如何发现重渲染、什么原因容易造成重渲染、如何避免重渲染？</h4>\n" +
//   "<h4 data-id=\"heading-64\">60、 React Hook 中 useEffect 有哪些参数，如何检测数组依赖项的变化？</h4>\n" +
//   "<h4 data-id=\"heading-65\">61、 React 的 useEffect 是如何监听数组依赖项的变化的？</h4>\n" +
//   "<h4 data-id=\"heading-66\">62、 React Hook 和闭包有什么关联关系？</h4>\n" +
//   "<h4 data-id=\"heading-67\">63、 React 中 useState 是如何做数据初始化的？</h4>\n" +
//   "<h4 data-id=\"heading-68\">64、 列举你常用的 React 性能优化技巧？</h4>\n" +
//   "<h4 data-id=\"heading-69\">65、 Vue 2.x 模板中的指令是如何解析实现的？</h4>\n" +
//   "<h4 data-id=\"heading-70\">66、 简要说明 Vue 2.x 的全链路运作机制？</h4>\n" +
//   "<h4 data-id=\"heading-71\">67、 简单介绍一下 Element UI 的框架设计？</h4>\n" +
//   "<h4 data-id=\"heading-72\">68、 如何理解 Vue 是一个渐进式框架？</h4>\n" +
//   "<h4 data-id=\"heading-73\">69、 Vue 里实现跨组件通信的方式有哪些？</h4>\n" +
//   "<h4 data-id=\"heading-74\">70、 Vue 中响应式数据是如何做到对某个对象的深层次属性的监听的？</h4>\n" +
//   "<h4 data-id=\"heading-75\">71、 MVVM、MVC 和 MVP 的区别是什么？各自有什么应用场景？、</h4>\n" +
//   "<h4 data-id=\"heading-76\">72、 什么是 MVVM 框架？</h4>\n" +
//   "<h3 data-id=\"heading-77\">工程</h3>\n" +
//   "<h4 data-id=\"heading-78\">73、Vue CLI 3.x 有哪些功能？Vue CLI 3.x 的插件系统了解？</h4>\n" +
//   "<h4 data-id=\"heading-79\">74、Vue CLI 3.x 中的 Webpack 是如何组装处理的？</h4>\n" +
//   "<h4 data-id=\"heading-80\">75、Vue 2.x 如何支持 TypeScript 语法？</h4>\n" +
//   "<h4 data-id=\"heading-81\">76、如何配置环境使得 JavaScript 项目可以支持 TypeScript 语法？</h4>\n" +
//   "<h4 data-id=\"heading-82\">77、如何对 TypeScript 进行 Lint 校验？ESLint 和 TSLint 有什么区别？</h4>\n" +
//   "<h4 data-id=\"heading-83\">78、Node.js 如何支持 TypeScript 语法？</h4>\n" +
//   "<h4 data-id=\"heading-84\">79、TypeScript 如何自动生成库包的声明文件？</h4>\n" +
//   "<h4 data-id=\"heading-85\">80、Babel 对于 TypeScript 的支持有哪些限制？</h4>\n" +
//   "<h4 data-id=\"heading-86\">81、Webpack 中 Loader 和 Plugin 的区别是什么？</h4>\n" +
//   "<h4 data-id=\"heading-87\">82、在 Webpack 中是如何做到支持类似于 JSX 语法的 Sourcemap 定位？</h4>\n" +
//   "<h4 data-id=\"heading-88\">83、发布 Npm 包如何指定引入地址？</h4>\n" +
//   "<h4 data-id=\"heading-89\">84、如何发布开发项目的特定文件夹为 Npm 包的根目录？</h4>\n" +
//   "<h4 data-id=\"heading-90\">85、如何发布一个支持 Tree Shaking 机制的 Npm 包？</h4>\n" +
//   "<h4 data-id=\"heading-91\">86、Npm 包中 peerDependencies 的作用是什么？</h4>\n" +
//   "<h4 data-id=\"heading-92\">87、如何优雅的调试需要发布的 Npm 包？</h4>\n" +
//   "<h4 data-id=\"heading-93\">88、在设计一些库包时如何生成版本日志？</h4>\n" +
//   "<h4 data-id=\"heading-94\">89、了解 Git （Submodule）子模块吗？简单介绍一下 Git 子模块的作用？</h4>\n" +
//   "<h4 data-id=\"heading-95\">90、Git 如何修改已经提交的 Commit 信息？</h4>\n" +
//   "<h4 data-id=\"heading-96\">91、Git 如何撤销 Commit 并保存之前的修改？</h4>\n" +
//   "<h4 data-id=\"heading-97\">92、Git 如何 ignore 被 commit 过的文件？</h4>\n" +
//   "<h4 data-id=\"heading-98\">93、在使用 Git 的时候如何规范 Git 的提交说明（Commit 信息）？</h4>\n" +
//   "<h4 data-id=\"heading-99\">94、简述符合 Angular 规范的提交说明的结构组成？</h4>\n" +
//   "<h4 data-id=\"heading-100\">95、Commit 信息如何和 Github Issues 关联？</h4>\n" +
//   "<h4 data-id=\"heading-101\">96、Git Hook 在项目中哪些作用？</h4>\n" +
//   "<h4 data-id=\"heading-102\">97、Git Hook 中客户端和服务端钩子各自用于什么作用？</h4>\n" +
//   "<h4 data-id=\"heading-103\">98、Git Hook 中常用的钩子有哪些？</h4>\n" +
//   "<h4 data-id=\"heading-104\">99、pre-commit 和 commit-msg 钩子的区别是什么？各自可用于做什么？</h4>\n" +
//   "<h4 data-id=\"heading-105\">100、husky 以及 ghook 等工具制作 Git Hook 的原理是什么？</h4>\n" +
//   "<h4 data-id=\"heading-106\">101、如何设计一个通用的 Git Hook ？</h4>\n" +
//   "<h4 data-id=\"heading-107\">102、Git Hook 可以采用 Node 脚本进行设计吗？如何做到？</h4>\n" +
//   "<h4 data-id=\"heading-108\">103、如何确保别人上传的代码没有 Lint 错误？如何确保代码构建没有 Lint 错误？</h4>\n" +
//   "<h4 data-id=\"heading-109\">104、如何在 Vs Code 中进行 Lint 校验提示？如何在 Vs Code 中进行 Lint 保存格式化？</h4>\n" +
//   "<h4 data-id=\"heading-110\">105、ESLint 和 Prettier 的区别是什么？两者在一起工作时会产生问题吗？</h4>\n" +
//   "<h4 data-id=\"heading-111\">106、如何有效的识别 ESLint 和 Prettier 可能产生冲突的格式规则？如何解决此类规则冲突问题？</h4>\n" +
//   "<h4 data-id=\"heading-112\">107、在通常的脚手架项目中进行热更新（hot module replacement）时如何做到 ESLint 实时打印校验错误信息？</h4>\n" +
//   "<h4 data-id=\"heading-113\">108、谈谈你对 SourceMap 的了解？</h4>\n" +
//   "<h4 data-id=\"heading-114\">109、如何调试 Node.js 代码？如何调试 Node.js TypeScript 代码？在浏览器中如何调试 Node.js 代码？</h4>\n" +
//   "<h4 data-id=\"heading-115\">110、列举你知道的所有构建工具并说说这些工具的优缺点？这些构建工具在不同的场景下应该如何选型？</h4>\n" +
//   "<h4 data-id=\"heading-116\">111、VS Code 配置中的用户和工作区有什么区别？</h4>\n" +
//   "<h4 data-id=\"heading-117\">112、VS Code 的插件可以只对当前项目生效吗？</h4>\n" +
//   "<h4 data-id=\"heading-118\">113、你所知道的测试有哪些测试类型？</h4>\n" +
//   "<h4 data-id=\"heading-119\">114、你所知道的测试框架有哪些？</h4>\n" +
//   "<h4 data-id=\"heading-120\">115、什么是 e2e 测试？有哪些 e2e 的测试框架？</h4>\n" +
//   "<h4 data-id=\"heading-121\">116、假设现在有一个插入排序算法，如何对该算法进行单元测试？</h4>\n" +
//   "<h3 data-id=\"heading-122\">网络</h3>\n" +
//   "<h4 data-id=\"heading-123\">117、CDN 服务如何实现网络加速？</h4>\n" +
//   "<h4 data-id=\"heading-124\">118、WebSocket 使用的是 TCP 还是 UDP 协议？</h4>\n" +
//   "<h4 data-id=\"heading-125\">119、什么是单工、半双工和全双工通信？</h4>\n" +
//   "<h4 data-id=\"heading-126\">120、简单描述 HTTP 协议发送一个带域名的 URL 请求的协议传输过程？（DNS、TCP、IP、链路）</h4>\n" +
//   "<h4 data-id=\"heading-127\">121、什么是正向代理？什么是反向代理？</h4>\n" +
//   "<h4 data-id=\"heading-128\">122、Cookie 可以在服务端生成吗？Cookie 在服务端生成后的工作流程是什么样的？</h4>\n" +
//   "<h4 data-id=\"heading-129\">123、Session、Cookie 的区别和关联？如何进行临时性和永久性的 Session 存储？</h4>\n" +
//   "<h4 data-id=\"heading-130\">124、设置 Cookie 时候如何防止 XSS 攻击？</h4>\n" +
//   "<h4 data-id=\"heading-131\">125、简单描述一下用户免登陆的实现过程？可能会出现哪些安全性问题？一般如何对用户登录的密码进行加密？</h4>\n" +
//   "<h4 data-id=\"heading-132\">126、HTTP 中提升传输速率的方式有哪些？常用的内容编码方式有哪些？</h4>\n" +
//   "<h4 data-id=\"heading-133\">127、传输图片的过程中如果突然中断，如何在恢复后从之前的中断中恢复传输？</h4>\n" +
//   "<h4 data-id=\"heading-134\">128、什么是代理？什么是网关？代理和网关的作用是什么？</h4>\n" +
//   "<h4 data-id=\"heading-135\">129、HTTPS 相比 HTTP 为什么更加安全可靠？</h4>\n" +
//   "<h4 data-id=\"heading-136\">130、什么是对称密钥（共享密钥）加密？什么是非对称密钥（公开密钥）加密？哪个更加安全？</h4>\n" +
//   "<h4 data-id=\"heading-137\">131、你觉得 HTTP 协议目前存在哪些缺点？</h4>\n" +
//   "<h3 data-id=\"heading-138\">性能</h3>\n" +
//   "<h4 data-id=\"heading-139\">133、在 React 中如何识别一个表单项里的表单做到了最小粒度 / 代价的渲染？</h4>\n" +
//   "<h4 data-id=\"heading-140\">134、在 React 的开发的过程中你能想到哪些控制渲染成本的方法？</h4>\n" +
//   "<h3 data-id=\"heading-141\">插件</h3>\n" +
//   "<h4 data-id=\"heading-142\">135、Vue CLI 3.x 的插件系统是如何设计的？</h4>\n" +
//   "<h4 data-id=\"heading-143\">136、Webpack 中的插件机制是如何设计的？</h4>\n" +
//   "<h3 data-id=\"heading-144\">系统</h3>\n" +
//   "<h4 data-id=\"heading-145\">137、\\r\\n（CRLF） 和 \\n （LF）的区别是什么？(Vs Code 的右下角可以切换)</h4>\n" +
//   "<h4 data-id=\"heading-146\">138、/dev/null 的作用是啥？</h4>\n" +
//   "<h4 data-id=\"heading-147\">139、如何在 Mac 的终端中设置一个命令的别名？</h4>\n" +
//   "<h4 data-id=\"heading-148\">140、如何在 Windows 中设置环境变量？</h4>\n" +
//   "<h4 data-id=\"heading-149\">141、Mac 的文件操作系统默认区分文件路径的大小写吗？</h4>\n" +
//   "<h4 data-id=\"heading-150\">142、编写 Shell 脚本时如何设置文件的绝对路径？</h4>\n" +
//   "<h3 data-id=\"heading-151\">后端</h3>\n" +
//   "<h4 data-id=\"heading-152\">143、Session、Cookie 的区别和关联？如何进行临时性和永久性的 Session 存储？</h4>\n" +
//   "<h4 data-id=\"heading-153\">144、如何部署 Node.js 应用？如何处理负载均衡中 Session 的一致性问题？</h4>\n" +
//   "<h4 data-id=\"heading-154\">145、如何提升 Node.js 代码的运行稳定性？</h4>\n" +
//   "<h4 data-id=\"heading-155\">146、GraphQL 与 Restful 的区别，它有什么优点？</h4>\n" +
//   "<h4 data-id=\"heading-156\">147、Vue SSR 的工作原理？Vuex 的数据如何同构渲染？</h4>\n" +
//   "<h4 data-id=\"heading-157\">148、SSR 技术和 SPA 技术的各自的优缺点是什么？</h4>\n" +
//   "<h4 data-id=\"heading-158\">149、如何处理 Node.js 渲染 HTML 压力过大问题？</h4>\n" +
//   "<h2 data-id=\"heading-159\">业务思考</h2>\n" +
//   "<p>业务思考更多的是结合基础知识的广度和深度进行的具体业务实践，主要包含以下几个方面：</p>\n" +
//   "<ul>\n" +
//   "<li>工程化：代码部署、CI / CD 流程设计、Jenkins、Gitlab、Docker 等</li>\n" +
//   "<li>通用性：脚手架、SDK、组件库等框架设计</li>\n" +
//   "<li>应用框架：Hybrid 混合、微前端、BFF、Monorepo</li>\n" +
//   "<li>可视化：</li>\n" +
//   "<li>低代码：通用表单设计、通用布局设计、通用页面设计、JSON Schema 协议设计等</li>\n" +
//   "<li>测试：E2E 测试、单元测试、测试覆盖率、测试报告等</li>\n" +
//   "<li>业务：数据、体验、复杂度、监控</li>\n" +
//   "</ul>\n" +
//   "<h3 data-id=\"heading-160\">工程化</h3>\n" +
//   "<h4 data-id=\"heading-161\">150、你所知道的 CI / CD 工具有哪些？在项目中有接触过类似的流程吗？</h4>\n" +
//   "<h4 data-id=\"heading-162\">151、如果让你实现一个 Web 前端的 CI / CD 工程研发平台，你会如何设计？</h4>\n" +
//   "<h4 data-id=\"heading-163\">152、如果我们需要将已有项目中的线上产物资源（例如图片）转换成本地私有化资源，你有什么解决方案？</h4>\n" +
//   "<h4 data-id=\"heading-164\">153、如何使用 Vue CLI 3.x 定制一个脚手架？比如内部自动集成了 i18n、 axios、Element UI、路由守卫等？</h4>\n" +
//   "<h4 data-id=\"heading-165\">154、Jenkins 如何配合 Node.js 脚本进行 CI / CD 设计？</h4>\n" +
//   "<h3 data-id=\"heading-166\">通用性</h3>\n" +
//   "<h4 data-id=\"heading-167\">155、如果让你设计一个通用的项目脚手架，你会如何设计？一个通用的脚手架一般需要具备哪些能力？</h4>\n" +
//   "<h4 data-id=\"heading-168\">156、如果让你设计一个通用的工具库，你会如何设计？一个通用的工具库一般需要具备哪些能力？</h4>\n" +
//   "<h4 data-id=\"heading-169\">157、假设你自己实现的 React 或 Vue 的组件库要设计演示文档，你会如何设计？设计的文档需要实现哪些功能？</h4>\n" +
//   "<h4 data-id=\"heading-170\">158、在设计工具库包的时候你是如何设计 API 文档的？</h4>\n" +
//   "<h3 data-id=\"heading-171\">应用框架</h3>\n" +
//   "<h4 data-id=\"heading-172\">159、谈谈 Electron、Nw.js、CEF、Flutter 和原生开发的理解？</h4>\n" +
//   "<h4 data-id=\"heading-173\">160、谈谈桌面端应用中 HotFix 的理解？</h4>\n" +
//   "<h4 data-id=\"heading-174\">161、你觉得什么样的场景需要使用微前端框架？</h4>\n" +
//   "<h3 data-id=\"heading-175\">业务</h3>\n" +
//   "<h4 data-id=\"heading-176\">162、什么是单点登录？如何做单点登录？</h4>\n" +
//   "<h4 data-id=\"heading-177\">163、如何做一个项目的国际化方案？</h4>\n" +
//   "<h4 data-id=\"heading-178\">164、如何做一个项目的监控和埋点方案？</h4>\n" +
//   "<h4 data-id=\"heading-179\">165、如何建设项目的稳定性（监控、灰度、错误降级、回滚...）？</h4>\n" +
//   "<h4 data-id=\"heading-180\">166、一般管理后台型的应用需要考虑哪些性能方面的优化？</h4>\n" +
//   "<h4 data-id=\"heading-181\">167、简述一些提升项目体验的案例和技术方案（骨架屏、Loading 处理、缓存、错误降级、请求重试...）？</h4>\n" +
//   "<h4 data-id=\"heading-182\">168、假设需要对页面设计一个水印方案，你会如何设计？</h4>\n" +
//   "<h3 data-id=\"heading-183\">低代码</h3>\n" +
//   "<h4 data-id=\"heading-184\">169、如何设计一个通用的 JSON Schema 协议使其可以动态渲染一个通用的联动表单？</h4>\n" +
//   "<h4 data-id=\"heading-185\">170、一般的低代码平台需要具备哪些能力？</h4>\n" +
//   "<h2 data-id=\"heading-186\">笔试实践</h2>\n" +
//   "<p>笔试更多的是考验应聘者的逻辑思维能力和代码书写风格，主要包含以下几个方面：</p>\n" +
//   "<ul>\n" +
//   "<li>正则表达式</li>\n" +
//   "<li>算法</li>\n" +
//   "<li>数据结构</li>\n" +
//   "<li>设计模式</li>\n" +
//   "<li>框架的部分原理实现</li>\n" +
//   "<li>TypeScript 语法</li>\n" +
//   "<li>模板解析</li>\n" +
//   "</ul>\n" +
//   "<h3 data-id=\"heading-187\">数据结构</h3>\n" +
//   "<h4 data-id=\"heading-188\">171、使用 TypeScript 语法将没有层级的扁平数据转换成树形结构的数据</h4>\n" +
//   "<pre><code class=\"hljs language-javascript copyable\" lang=\"javascript\"><span class=\"hljs-comment\">// 扁平数据</span>\n" +
//   "[{\n" +
//   "  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'文本1'</span>,\n" +
//   "  <span class=\"hljs-attr\">parent</span>: <span class=\"hljs-literal\">null</span>,\n" +
//   "  <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">1</span>,\n" +
//   "}, {\n" +
//   "  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'文本2'</span>,\n" +
//   "  <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">2</span>,\n" +
//   "  <span class=\"hljs-attr\">parent</span>: <span class=\"hljs-number\">1</span>\n" +
//   "}, {\n" +
//   "  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'文本3'</span>,\n" +
//   "  <span class=\"hljs-attr\">parent</span>: <span class=\"hljs-number\">2</span>,\n" +
//   "  <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">3</span>,\n" +
//   "}]\n" +
//   "\n" +
//   "<span class=\"hljs-comment\">// 树状数据</span>\n" +
//   "[{\n" +
//   "  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'文本1'</span>,\n" +
//   "  <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">1</span>,\n" +
//   "  <span class=\"hljs-attr\">children</span>: [{\n" +
//   "    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'文本2'</span>,\n" +
//   "    <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">2</span>,\n" +
//   "    <span class=\"hljs-attr\">children</span>: [{\n" +
//   "      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">'文本3'</span>,\n" +
//   "      <span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">3</span>\n" +
//   "    }]\n" +
//   "  }]\n" +
//   "}]\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<h3 data-id=\"heading-189\">模板解析</h3>\n" +
//   "<h4 data-id=\"heading-190\">172、实现一个简易的模板引擎</h4>\n" +
//   "<pre><code class=\"hljs language-javascript copyable\" lang=\"javascript\"><span class=\"hljs-keyword\">const</span> template = <span class=\"hljs-string\">'嗨，{{ info.name.value }}您好，今天是星期 {{ day.value }}'</span>;\n" +
//   "\n" +
//   "<span class=\"hljs-keyword\">const</span> data = {\n" +
//   "  <span class=\"hljs-attr\">info</span>: {\n" +
//   "    <span class=\"hljs-attr\">name</span>: {\n" +
//   "      <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'张三'</span>\n" +
//   "    }\n" +
//   "  },\n" +
//   "  <span class=\"hljs-attr\">day</span>: {\n" +
//   "    <span class=\"hljs-attr\">value</span>: <span class=\"hljs-string\">'三'</span>\n" +
//   "  }\n" +
//   "};\n" +
//   "\n" +
//   "render(template, data); <span class=\"hljs-comment\">// 嗨，张三您好，今天是星期三</span>\n" +
//   "<span class=\"copy-code-btn\">复制代码</span></code></pre>\n" +
//   "<h3 data-id=\"heading-191\">设计模式</h3>\n" +
//   "<h4 data-id=\"heading-192\">173、简单实现一个发布 / 订阅模式</h4>\n" +
//   "<h3 data-id=\"heading-193\">正则表达式</h3>\n" +
//   "<h4 data-id=\"heading-194\">174、匹配出字符串中 const a  = require('xxx') 中的 xxx</h4><style>.markdown-body pre,.markdown-body pre>code.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}</style></div>"
