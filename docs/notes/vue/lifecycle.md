---
title: Vue.js生命周期
---

# Vue 实例生命周期
Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载 DOM、渲染、更新、卸载等一系列过程，我们称这是 Vue 实例的生命周期。常用的有 beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed。

下面是 Vue 实例生命周期的详细解释：

## beforeCreate
在实例初始化之后，数据观测和事件配置之前被调用。在这个阶段，实例的属性和方法是不可用的。

## created
实例已经创建完成之后被调用。在这个阶段，实例已完成数据观测、属性和方法的运算，但尚未开始 DOM 编译和挂载。

## beforeMount
在挂载开始之前被调用，相关的 render 函数首次被调用。

## mounted
实例挂载到 DOM 上后调用，此时实例的 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。

## beforeUpdate
在数据更新之前被调用，发生在虚拟 DOM 重新渲染和打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

## updated
在由于数据更改导致的虚拟 DOM 重新渲染和打补丁后调用。调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。

## beforeDestroy
在实例销毁之前调用。实例仍然完全可用。

## destroyed
在实例销毁之后调用。这个时候，实例的所有指令已经解绑，所有事件监听器已经移除，所有子实例也已经被销毁。

上述生命周期钩子可以使用以下方式声明：

```js
<script>
export default {
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  }
}
</script>
```
在实际应用中，我们可以通过在这些生命周期钩子中编写自定义代码来实现特定的功能。




