const db = require('../util/db');


class DonorTest {

    checkUserExitTest(){
       const r= db.checkUserExit("s@gmail.com")
       console.log(r)
    }
}