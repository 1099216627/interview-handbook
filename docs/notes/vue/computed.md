---
title: Vue.js计算属性
---

## 简介
Vue.js的计算属性是一个可以依赖于其他属性进行计算的属性。计算属性的值会被缓存，只有当它依赖的属性发生变化时才会重新计算。这种缓存机制能够提高应用程序的性能和效率。

计算属性可以在模板中直接使用，而不需要在JavaScript中写逻辑。这样可以使代码更简洁易懂。

下面是一个计算属性的示例：
```html
<template>
  <div>
    <p>原价: {{ price }}</p>
    <p>折后价: {{ discountPrice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
      discount: 0.8
    }
  },
  computed: {
    discountPrice() {
      return this.price * this.discount
    }
  }
}
</script>
```
在这个例子中，我们定义了一个 `discountPrice` 的计算属性，它依赖于 `price` 和 `discount` 两个属性。每次 `price` 或 `discount` 改变时，`discountPrice` 会重新计算，并更新到模板中。

计算属性也可以带有 `setter` 方法，允许我们对属性进行双向绑定。例如：
```html
<template>
  <div>
    <input v-model="firstName">
    <input v-model="lastName">
    <p>全名: {{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      set(value) {
        const [firstName, lastName] = value.split(' ')
        this.firstName = firstName
        this.lastName = lastName
      }
    }
  }
}
</script>
```
在这个例子中，我们定义了一个 `fullName` 的计算属性，它通过 `get` 方法返回 `firstName` 和 `lastName` 的拼接结果，通过 `set` 方法将输入的完整名字分割成两个部分，分别更新 `firstName` 和 `lastName`。这样，我们就可以在模板中直接通过 `v-model` 双向绑定 `fullName`。