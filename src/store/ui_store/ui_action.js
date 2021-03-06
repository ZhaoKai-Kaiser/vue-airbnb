/*
 * @Author: Kaiser
 * @Date: 2019-06-10 10:26:24
 * @Last Modified by: Kaiser
 * @Last Modified time: 2019-06-26 15:58:03
 */
const action = {
  /**
   * 展示进度条
   * @param {Object} {commit} 默认参数
   * @param {String} status  start or done
   */
  setNProgress({ commit }, status = 'start') {
    if (['start', 'done'].includes(status)) {
      commit('nprogressHandler', status);
      return;
    }
    throw new Error('please enter a correct value of status');
  },
  /**
   * 错误信息提示
   * @param {Object} {commit} 默认参数
   * @param {String} message 展示的是信息
   */
  showErrorMessage({ commit }, message) {
    commit('messageHandler', { type: 'error', msg: message.toString() });
  },
  /**
   * 控制导航显示器的显示隐藏
   * @param {Object} {commit} 默认参数
   */
  setNavMenu({ commit }) {
    commit('navMemuHandler');
  },
  /**
   * 增加标签
   * @param {Object} {commit} 默认参数
   * @param {Object} route 需要增加的路由信息
   */
  addTab({ commit }, route) {
    commit('addTab', route);
  },
  /**
   * 移除便签
   * @param {Object} {commit} 默认参数
   * @param {Object} route 需要移除的路由信息
   */
  removeCurrentTab({ commit }, route) {
    return new Promise((resolve) => {
      commit('removeTab', route);
      resolve(route);
    });
  },
};

export default action;
