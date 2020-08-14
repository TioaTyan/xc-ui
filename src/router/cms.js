import home from '@/views/home/Home.vue';
import page_list from '@/views/cms/PageList.vue';
// import page_add from '@/module/cms/page/page_add.vue';
// import page_edit from '@/module/cms/page/page_edit.vue';
// import page_html from '@/module/cms/page/page_html.vue';
export default [{
        path: '/cms',
        component: home,
        name: 'CMS',
        hidden: false,
        children: [
            { path: '/cms/page/list', name: '页面列表', component: page_list, hidden: false },
            // { path: '/cms/page/add', name: '添加页面', component: page_add, hidden: true },
            // { path: '/cms/page/edit/:pageId', name: '修改页面', component: page_edit, hidden: true },
            // { path: '/cms/page/html/:pageId', name: '生成html', component: page_html, hidden: true }
        ]
        // ,
        // redirect: '/home',
        // children: [
        //   {path: 'home', component: Home}
        // ]
    }
    /*,
      {
        path: '/login',
        component: Login,
        name: 'Login',
        hidden: true
      }*/
]