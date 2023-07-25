import db from "../config/db";

export default async function getAllCities(req,res){

    try {
       // console.log("BODY: "+JSON.stringify(req.body))
       const query = 'SELECT * FROM `cities`';
      //  const selectQuery = 'SELECT * FROM `province` WHERE Country="'+req.body.country+'"';
       // const queryWithParams = 'SELECT `username`,`email`,`userrole`,`userid`,`fristname`,`lastname` FROM `user` WHERE  username="'+req.body.userName+'" && password="'+req.body.userPassword+'" && userrole="'+req.body.userRole+'" ';
       // const values = [username=req.body.userName,userrole=req.body.userRole,password=req.body.userPassword];
        console.log(query);
       // const values = [];
       // console.log("VALUES: "+JSON.stringify(values))
        const result = await (await db).query(query);
        //console.log(result[0]);
        return result[0];
  } catch ( error ) {
      console.log( "DB ERROR "+error );
  }
  
};