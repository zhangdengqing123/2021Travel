export default {
  getCity (state, city) {
    state.city = city
    try {
      localStorage.city = city // 本地存储 city
    } catch (e) {}
  }
}
