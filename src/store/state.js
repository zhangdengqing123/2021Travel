let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city // 本地存储
  }
} catch (e) {}

export default {
  city: defaultCity
}
