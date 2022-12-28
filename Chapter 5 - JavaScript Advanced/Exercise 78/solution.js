const isLogged = true;

function login(data) {
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(Math.random());
    } else {
      reject(new Error("Not logged"));
    }
  });
}

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    if (userId > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("No user data"));
    }
  });
}

login(isLogged)
  .then(getUserData)
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
  .finally(() => console.log("Complete"));
