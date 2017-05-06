// import Vue from 'vue'
// import Component from 'vue-class-component'
//
// @Component({
//     // ここではすべてのコンポーネントオプションが許可されています
//     template: '' +
//     '<div>
//         <div id="header">
//             <a href="./">
//             <img src="/images/audiofrag.png">
//         </div>
//         <div id="nav">
//             <router-link to="/">Home</router-link>
//             <router-link to="/upload">upload</router-link>
//         </div>
//         <div class="clearfix">
//         </div>
//
//         <div id="wrapContent">
//             <router-view></router-view>
//         </div>
//     </div>'
// })
// export default class MyComponent extends Vue {
//     // 初期データはインスタンスプロパティとして宣言できます
//     message: string = 'Hello!'
//     // コンポーネントメソッドはインスタンスメソッドとして宣言できます
//     onClick (): void {
//         window.alert(this.message)
//     }
// }
//
// <template lang="jade">
//     div
//         div#header
//             a(href='./')
//                 img(src='/images/audiofrag.png')
//             div#nav
//                 <router-link to="/">Home</router-link>
//                 <router-link to="/upload">upload</router-link>
//             div.clearfix
//
//         div#wrapContent
//             <router-view></router-view>
// </template>
//
// <script>
// import Vue from 'vue'
// import Component from 'vue-class-component'
//
// @Component({
//     props: {
//         propMessage: String
//     }
// })
//
// export default class App extends Vue {
//     // initial data
//     msg = 123
//
//     // use prop values for initial data
//     helloMsg = 'Hello, ' + this.propMessage
//
//     // lifecycle hook
//     mounted () {
//         this.greet()
//     }
//
//     // computed
//     get computedMsg () {
//         return 'computed ' + this.msg
//     }
//
//     // method
//     greet () {
//         alert('greeting: ' + this.msg)
//     }
// }
// </script>
//
//
// import { VueComponent } from 'vue-typescript'
//
// @VueComponent({
//     template: require('./vuex.html')
// })
// export class VuexComponent extends Vue {
//
// }


import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as Template from './template.html'

@Template
@Component({
    // template: '<div><div id="header"><a href="./"><img src="/images/audiofrag.png"></a></div><div id="nav"><router-link to="/">Home</router-link><router-link to="/upload">upload</router-link></div><div class="clearfix"></div><div id="wrapContent"><router-view></router-view></div></div>'
})
export default class App extends Vue {
    message: string = 'Hello!';
    onClick (): void {
        window.alert(this.message)
    }
}