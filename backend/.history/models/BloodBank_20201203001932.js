const db = require('../util/db');


class BloodBank {
    constructor(id , name , email , location, latitude , longtitude){
        this.id =id 
        this.email = email
        this.location = locaition
        this.latitude = latitude
        this.longtitude = longtitude
    }

    static getBlood(a){
       console.log(a)
    }
}

module.exports = BloodBank