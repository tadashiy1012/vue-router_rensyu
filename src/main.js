import Vue from 'vue';
import VueRouter from 'vue-router';
import MyComponent from './MyComponent.vue';

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const User = {
  template: '<div><b>User {{ $route.params.id }}</b></div>',
  beforeRouteUpdate: function(to, from, next) {
    console.log(to, from);
    next();
  }
};

const Container = {
  template: `
    <div>
      <MyComponent />
      <p>
        <router-link to="/foo">go to foo</router-link>
        <router-link to="/bar">go to bar</router-link>
        <br />
        <router-link to="/user/foo">go to foo</router-link>
        <router-link to="/user/bar">go to bar</router-link>
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
  console.log(MyComponent);
  
  Vue.use(VueRouter);

  new Vue({
    el: '#root',
    router: new VueRouter({ routes }),
    components: { Container, MyComponent },
    template: `
      <div>
        <Container />
        <MyComponent />
      </div>
    `
  });

}