function request(url, settings) {
  return fetch(url, settings).then((res) => {
    if (!res.ok) {
      const error = new Error("HTTP error");
      error.status = res.status;
      throw error;
    } else {
      return res.json();
    }
  });
}

export function login(loginData) {
  return request(process.env.REACT_APP_API_URL + "/users/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "content-type": "application/json" },
  });
}

export function getUser(token) {
  return request(process.env.REACT_APP_API_URL + "/user/thisUser", {
    method: "GET",
    headers: { authorization: `Bearer ${token}` },
  });
}

export function register(account) {
  return request(process.env.REACT_APP_API_URL + "/users/register", {
    method: "POST",
    body: JSON.stringify(account),
    headers: { "content-type": "application/json" },
  });
}

export function category() {
  return request(process.env.REACT_APP_API_URL + "/store/category", {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
}

export function getProducts() {
  return request(process.env.REACT_APP_API_URL + "/store/products", {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
}

export function addItemsToCart(token, items) {
  return request(process.env.REACT_APP_API_URL + "/user/cart", {
    method: "POST",
    body: JSON.stringify(items),
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });
}

export function getCartItems(token) {
  return request(process.env.REACT_APP_API_URL + "/user/cart", {
    method: "GET",
    headers: { authorization: `Bearer ${token}` },
  });
}

export function setUserOrder(token, checkOutData) {
  return request(process.env.REACT_APP_API_URL + "/user/order", {
    method: "POST",
    body: JSON.stringify(checkOutData),
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });
}
