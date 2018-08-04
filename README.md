# Demo

## demo-会动的简历

【平均用时 0.3 天】
[【我的代码】](https://github.com/wangsiyuan233/MyHomeworks/tree/master/demo-%E4%BC%9A%E5%8A%A8%E7%9A%84%E7%AE%80%E5%8E%86)
[【效果预览】](http://wangsiyuan233.cn/MyHomeworks/demo-%E4%BC%9A%E5%8A%A8%E7%9A%84%E7%AE%80%E5%8E%86/index.html)

### 任务目的
以动态的方式呈现简历

### 任务描述
核心代码：
```
writeCss('', css1, ()=>{ // writeCss call the function
  createPaper(() => {
    writeMarkdown(md, ()=> {
      writeCss(css1, css2, ()=>{
        convertMarkdownToHtml(()=>{
          writeCss(css1 + css2, css3, ()=> {
            console.log('完成')
          })
        })
      })
    })
  })
})
```

### 任务注意事项
1、 CSS 和 JS 里的代码是不重复的
2、 想要在 页面呈现出的代码在 JS 里


## demo-小Morty

【平均用时 0.3 天】
[【我的代码】](https://github.com/wangsiyuan233/MyHomeworks/tree/master/demo-%E5%B0%8FMorty)
[【效果预览】](http://wangsiyuan233.cn/MyHomeworks/demo-%E5%B0%8FMorty/MyMorty.html)

### 任务目的
以动态的方式画一个小人

### 任务描述
在 html 里面就用 div 区分了 身体的各个部分

### 任务注意事项
1、多了时间按钮的设置
2、怎样有效的控制时间




