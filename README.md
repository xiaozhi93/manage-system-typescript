# fed-manage

## 访问地址
http://119.45.51.253/

## FQA
- ts中as的使用，类型断言的一种，用于限制某个数据类型；
```typescript
 // 类型断言形式一，尖括号语法    
let someValue: any = 'this is a string';
let strLen: number = (<string>someValue).length
// 类型断言形式二，as语法    
let someValue: any = 'this is a string';
let strLen: number = (someValue as string).length    

```

- 函数中使用try catch finally,在try执行return,finally也会执行
- JSON.parse(window.localStorage.getItem('user') || 'null')，， 对于JSON.parse只接受字符串，然后只接受的值可能是其他类型，就其他类型转化一下
- 给组件注册原生的事件，如果不支持，在组件的根元素注册事件，使用@click.nativce=""
- router.currentRoute.fullPath, currentRoute获取当前路由信息
- 设置数组类型 let requests: any[] = []或者 let requests: Array<any> = []
- 左右两端对齐， 使用flex布局，右端的使用margin-left: auto
- 列表查询过滤需要将当前页设置为第一页
- 对于可能传，可能不传的值，定义成undefined,然后axios就不会发送个字段
  ```
   courseFilter: {
        courseName: undefined,
        currentPage: 1,
        pageSize: 10,
        status: undefined
      },
- 如何定义promise返回值的类型
- 数组 返回 undefined或者其他类型，，声明类型