
import Vue from 'vue';
export default function create(component, props){
    // 借用vue 构造组建实例
      const vm =new Vue({
        render(h){
          return h(component,{props})
        }
      }).$mount()
      // body 插入dom元素
      document.body.appendChild(vm.$el)
      const comp = vm.$children[0]
      console.log(comp,'duration')
    // 隐藏时，删除dom元素 销毁组建
    comp.remove=()=>{
      document.body.removeChild(vm.$el)
      comp.$destroy()
    }
    return comp
    // 销毁组建
}