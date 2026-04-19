const API = {
  baseUrl: '/api',

  async get(path) {
    const res = await fetch(this.baseUrl + path);
    return await res.json();
  },

  async post(path, data) {
    const res = await fetch(this.baseUrl + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  },

  async upload(formData) {
    const res = await fetch(this.baseUrl + '/upload', {
      method: 'POST',
      body: formData
    });
    return await res.json();
  }
};