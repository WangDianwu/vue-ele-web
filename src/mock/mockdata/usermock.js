import {
  COMMON_ERROR as error,
  COMMON_SUCCESS as success
} from '../../constants/index'
export default {
  login: {
    path: '/api/user/login',
    method: 'post',
    success() {
      const res = success
      success.data = {
        username: '管理员',
        usertoken: 'usertoken',
        phone: '150****7168'
      }
      return res
    },
    error() {
      const res = error
      return res
    }
  },
  menu: {
    path: '/api/user/getmenu',
    method: 'get',
    success() {
      const res = success
      success.data = [
        {
          id: 125,
          authName: '用户管理',
          path: 'users',
          children: [{
            id: 110,
            authName: '用户列表',
            path: 'users',
            children: [],
            order: null
          }],
          order: 1
        },
        {
          id: 103,
          authName: '权限管理',
          path: 'rights',
          children: [
            {
              id: 111,
              authName: '角色列表',
              path: 'roles',
              children: [],
              order: null
            },
            {
              id: 112,
              authName: '权限列表',
              path: 'rights',
              children: [],
              order: null
            }
          ],
          order: 2
        },
        {
          id: 101,
          authName: '商品管理',
          path: 'goods',
          children: [
            {
              id: 104,
              authName: '商品列表',
              path: 'goods',
              children: [],
              order: 1
            },
            {
              id: 115,
              authName: '分类参数',
              path: 'params',
              children: [],
              order: 2
            },
            {
              id: 121,
              authName: '商品分类',
              path: 'categories',
              children: [],
              order: 3
            }
          ],
          order: 3
        },
        {
          id: 102,
          authName: '订单管理',
          path: 'orders',
          children: [{
            id: 107,
            authName: '订单列表',
            path: 'orders',
            children: [],
            order: null
          }],
          order: 4
        },
        {
          id: 145,
          authName: '数据统计',
          path: 'reports',
          children: [{
            id: 146,
            authName: '数据报表',
            path: 'reports',
            children: [],
            order: null
          }],
          order: 5
        }
      ]
      return res
    },
    error() {
      const res = error
      return res
    }
  },
  getroutes: {
    path: '/api/user/getroutes',
    method: 'post',
    success() {
      const res = success
      success.data = [
        {
          path: '/permission',
          component: 'layout/Layout',
          redirect: '/permission/index',
          alwaysShow: true,
          meta: {
            title: 'Permission',
            icon: 'lock',
            roles: ['admin', 'editor']
          },
          children: [
            {
              path: 'page',
              component: 'views/permission/page',
              name: 'PagePermission',
              meta: {
                title: 'Page Permission',
                roles: ['admin']
              }
            },
            {
              path: 'directive',
              component: 'views/permission/directive',
              name: 'DirectivePermission',
              meta: {
                title: 'Directive Permission'
              }
            },
            {
              path: 'role',
              component: 'views/permission/role',
              name: 'RolePermission',
              meta: {
                title: 'Role Permission',
                roles: ['admin']
              }
            }
          ]
        },
        {
          path: '/icon',
          component: 'layout/Layout',
          children: [
            {
              path: 'index',
              component: 'views/icons/index',
              name: 'Icons',
              meta: { title: 'Icons', icon: 'icon', noCache: true }
            }
          ]
        }
      ]
      return res
    },
    error() {
      const res = error
      return res
    }
  }
}
