import db from "../config/db";

export default async function apiRequest(req,res){

    try {
        console.log("BODY: "+JSON.stringify(req.body))
        //const query = 'SELECT * FROM `user`';
      //  const selectQuery = 'SELECT `username`,`email`,`userrole`,`userid` FROM `user`';
        const queryWithParams = 'SELECT `username`,`email`,`userrole`,`userid`,`firstname`,`lastname` FROM `chec_db`.`user` WHERE  username="'+req.body.userName+'" && password="'+req.body.userPassword+'" && userrole="'+req.body.userRole+'" ';
       // const values = [username=req.body.userName,userrole=req.body.userRole,password=req.body.userPassword];
        console.log(queryWithParams);
        const values = [];
        console.log("VALUES: "+JSON.stringify(values))
        const result = await (await db).query(queryWithParams,values);
        return result[0][0];
  } catch ( error ) {
      console.log( "DB ERROR "+error );
  }
  
};