const db = require('../util/db');
class  Donor {


    static registerDonar(id,n,e,phone,p,t,blood_group ) {

        db.execute("insert into donor (donor_id,name,email,phone,password,notification_token,blood_group) values(?,?,?,?,?,?,?)",
        [id,n,e,phone,p,t,blood_group]).then(r=>{
           res.json('success')
           console.log('done');
      }).catch(err=>{
          console.log(err)
          res.json({error:'something went wrong'})
      })
    
   return  db.execute("insert into login (id,email,password,role) values (?,?,?,?)",[id,e,p,d])

    static validEmail(e ) {
    return db.execute("select * from login where email=?",[e])
           
       
    }
   
}

module.exports = Donor;
