export default class Helpers {
  isLogin() {
    var token = localStorage.getItem('token');
    if(token)
    return true;
    else
    return false;
  }
}