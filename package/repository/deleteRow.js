import db from "../config/db";

export default async function deleteRow(req,res){

    try {
        const deleteQuery = 'DELETE FROM `chec_db`.`mbm` WHERE Sno = "'+req.body.data.Sno+'"';
        console.log(deleteQuery);
        const deleteQueryResult = await (await db).query(deleteQuery);
        console.log(deleteQueryResult);
        return deleteQueryResult[0];
  } catch ( error ) {
      console.log( "DB ERROR "+error );
  }
  
};