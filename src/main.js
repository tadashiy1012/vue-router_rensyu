import Vue from 'vue';
import VueRouter from 'vue-router';
import MyComponent from './MyComponent.vue';

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const User = { template: '<div>user:{{$route.params.id}}</div>' };

const Container = {
  template: `
    <div>
      <MyComponent />
      <p>
        <router-link to="/foo">go to foo</router-link>
        <router-link to="/bar">go to bar</router-link>
        <br />
        <router-link to="/user/yama">go to yama</router-link>
        <router-link to="/user/taro">go to taro</router-link>
      </p>
      <router-view></router-view>
    </div>
  `,
  components: { MyComponent }
};

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/user/:id', component: User }
];

{
  console.log('ready!');
  
  Vue.use(VueRouter);

  new Vue({
    el: '#root',
    router: new VueRouter({ routes }),
    components: { Container },
    template: `
      <div>
        <Container />
      </div>
    `
  });

}