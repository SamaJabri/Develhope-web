const user = {
  id: 1,
  name: "John",
  age: 25,
};

const storeUserInLS = (userObject) => {
  const userInfo = JSON.stringify(userObject);
  localStorage.setItem("user", userInfo);
}

storeUserInLS(user);