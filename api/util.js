function randomCode(length) {
  let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = "";
  for (let i = 0; i < length; i++) {
      let index = Math.ceil(Math.random() * 9);
      result += chars[index];
  }
  return result;
}
export function request(method, url, payload = {}) {
  if(!url) return
  return new Promise((resolve, reject) => {
    if(method === 'GET'){
      url += '?' + 'geek166=' + randomCode(20);
    }
    wx.request({
      url: url,
      method: method,
      data: payload,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if(res.data.code == 0){
          resolve(res.data.data)
        }else{
          reject(res.data.msg)
        }
      },
      fail: function (error) {
        reject(error);
      }
    })
  })
}