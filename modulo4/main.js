
axios.get('https://api.github.com/users/daviguelfi').then(function(response){
    console.log(response.data.login);
}).catch(function (error) {
    console.warn(error);
});
