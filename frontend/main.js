function exec() {
  const api = new API();
  // APIを実行する
  api.get('/api/v1/entries', (err, res) => {
    console.log(res);
  });
}

class API {
  get(path, callback) {
    console.log("get");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', path);
    xhr.onload = () => {
      callback(null, JSON.parse(xhr.responseText));
    };
    xhr.onerror = () => {
      callback(new Error(xhr.statusText));
    };
    xhr.send();
  }

  post(path, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', path);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      callback(null, JSON.parse(xhr.responseText));
    };
    xhr.onerror = () => {
      callback(new Error(xhr.statusText));
    };
    xhr.send(JSON.stringify(data));
  }
}
