// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });

      //
      
      function submitData(name, email)  {
        const userData = {
          name: "Steve",
          email: "steve@steve.com",};

        const configObject = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(userData),
        };
        fetch("http://localhost:3000/users", configObject)
          .then((res) => res.json())
          .then((userData) => {
            console.log(userData);
            const id = userData.id;
            document.body.innerHTML += id;
          })
          .catch((err) => console.log(err))
      }
      submitData()