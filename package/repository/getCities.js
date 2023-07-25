import db from "../config/db";

export default async function getCities(req,res){

    try {
       // console.log("BODY: "+JSON.stringify(req.body))
      //  const query = 'SELECT * FROM `province`';
        const selectQuery = 'SELECT * FROM cities WHERE Province = "'+req.body.province+'";';
       // const queryWithParams = 'SELECT `username`,`email`,`userrole`,`userid`,`fristname`,`lastname` FROM `user` WHERE  username="'+req.body.userName+'" && password="'+req.body.userPassword+'" && userrole="'+req.body.userRole+'" ';
       // const values = [username=req.body.userName,userrole=req.body.userRole,password=req.body.userPassword];
        console.log(selectQuery);
       // const values = [];
       // console.log("VALUES: "+JSON.stringify(values))
        const result = await (await db).query(selectQuery);
        //console.log(result[0]);
        return result[0];
  } catch ( error ) {
      console.log( "DB ERROR "+error );
  }
  
};