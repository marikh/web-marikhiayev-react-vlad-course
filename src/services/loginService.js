let instance = null;

const user = "Marik";
const password = "M";

class loginService{

    constructor(){

      if(!instance){
        this.loggedIn = false;
        this.loggedInUser = null;
        instance = this;
      }

      return instance;
    }

    login(username,pass){
        if(!username || !pass)
            return false;

        if(username.toLowerCase() === user.toLowerCase() && pass === password){
            this.loggedInUser = user;
            this.loggedIn = true;
            return true;
        }

        return false;
    }

    logOut(){
        this.loggedIn = false;
        this.loggedInUser = null;
        return true;
    }
}

export default loginService;
