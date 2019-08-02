## 圣杯布局和双飞翼布局
### 圣杯布局
圣杯布局和双飞翼布局是常见的三栏布局 中间自适应 左右两栏固定 中间提前渲染  
#### 主要知识点
浮动 float  
负边距 margin-left  
相对定位 position：absolute
~~~
 <style>
    .header{
      height: 40px;
      background: red;
    }
    .footer{
      height: 40px;
      background: green;
    }
    .container{
      background: #000000;
      padding: 0 200px;
      overflow: hidden;
    }
    .main,.left,.right{
      float: left;
      height: 200px;
    }
    .main{
      width: 100%;
      background:  #35bbaa;
    }
    .left,.right{
      width: 200px;
    }
    /* 通过负边距把元素放到main的前面，值为main元素的宽度 */
    .left{
    background:  #abcdef;
    margin-left: -100%;   
    position: relative;
    left: -200px;
    }
    /* 通过负边距把元素放到main的后面，值为自身宽度 */
    .right{
   background: #666;
   margin-left: -200px; 
   position: relative;
   right: -200px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h4>开头</h4>
  </div>
  <div class="container">
    <div class="main">
      圣杯布局
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
  <div class="footer">
    <h4>这是尾部</h4>
  </div>
</body>
~~~