const getters = {
  getUser: (state) => state.auth.user,
  getMenus: (state) => state.auth.menus,
  getConfig: (state) => state.config.config,
  getParams: (state) => state.config.params
}

export default getters
