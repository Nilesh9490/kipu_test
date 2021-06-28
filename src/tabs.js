import Hello from './components/HelloWorld.vue'

export default [{
    name: 'home',
    title: '首页',
    id: 'id_home',
    component: Hello,
    beforeCreate (tab, next) {
        console.log('before create:', tab)
        next()
    },
    beforeClose (tab, next) {
        console.log('before close', tab)
        next()
    }
}, {
    name: 'test1',
    title: '测试1',
    component: {
        template: '<h2>测试1</h2>'
    },
    beforeCreate (tab, next) {
        console.log('before create:', tab)
        next()
    }
}, {
    name: 'test2',
    title: '测试2',
    component: resolve => {
        setTimeout(() => {
            resolve({
                template: '<p>测试2</p>'
            })
        }, 1000)
    }
}, {
    name: 'async',
    title: '异步组件',
    component: {
        template: '<h2>Asynch</h2>'
    }
},
    {
    name: 'setting',
    title: '设置',
    component: {
        template: '<h2>设置</h2>'
    }
}]