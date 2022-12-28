const user = {
  id: 1,
  name: "John",
  age: 25,
};

const getUserFromLS = (key) => {
  const userInfo = localStorage.getItem(key);
  return JSON.parse(userInfo);
}

console.log(getUserFromLS("user"));