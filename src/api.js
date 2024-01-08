import axios from "axios";

const actionHandler = (payload) => {
  
    const token = localStorage.getItem("admin-token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
  
    return new Promise((resolve, reject) => {
      payload.baseURL = "https://studyappmw.dev.luminartechnohub.com/api/v1";
  
      axios(payload)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            resolve(response);
          } else {
            console.log("failure", response);
            reject(response);
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
  
  
  axios.interceptors.response.use(undefined, function (err) {
    var statusCode = err.status;
  
    return new Promise(() => {
      if (statusCode == 401) {
        // Got an unauthorized, logout the User
        localStorage.removeItem("admin-token");
        window.location.pathname = "/login";
        
      }
      throw err;
    });
  });


export default {

    /* auth URLs */
    loginURL: "/user/login/", // [POST]

    // courseList URLs
    courseListURL: "/courses/list/", // [GET]
    courseAddURL: "/courses/create/", // [GET]
    courseEditURL: "/courses/update/{id}/", // [GET]
    courseDeleteURL: "/courses/delete/{id}/", // [DELETE]

    actionHandler,
}