import db from "../config/db";

export default async function addCountry(req,res){

    try {
        const query = 'SELECT max(Sno) as maxSno FROM `country`';
        console.log(query);
        const result = await (await db).query(query);
        console.log(result[0][0].maxSno);
        const newID = result[0][0].maxSno+1;
        console.log(newID);
        const insertQuery = ' INSERT INTO `country`(`Country`,`CountryID`) VALUES ("'+req.body.countryName+'","Cntry_'+newID+'")';
        console.log(insertQuery);
        const insertQueryResult = await (await db).query(insertQuery);
        console.log(insertQueryResult);
       // return result[0];
  } catch ( error ) {
      console.log( "DB ERROR "+error );
  }
  
};