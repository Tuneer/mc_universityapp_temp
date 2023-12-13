import db from "../config/db";

export default async function addMBM(req,res){

    try {
        const query = 'SELECT max(Sno) as maxSno FROM `mbm`';
        console.log(query);
        const result = await (await db).query(query);
        console.log(result[0][0].maxSno);
        const newID = result[0][0].maxSno+1;
        console.log(newID);
        const insertQuery = 'INSERT INTO `mbm` (`Sno`,`Country`,`Province`,`Population Type`,`City`,`CMA`,`CA`,`Family Size`,`Year`,`Total threshold`,`Food`,`Clothing`,`Transportation`,`Shelter`,`Other expenses`) VALUES ("'+newID+'","'+req.body.request.Country+'","'+req.body.request.Province+'","'+req.body.request.PopulationType+'","'+req.body.request.City+'","'+req.body.request.CMA+'","'+req.body.request.CA+'","'+req.body.request.FamilySize+'","'+req.body.request.Year+'","'+req.body.request.TotalThreshold+'","'+req.body.request.Food+'","'+req.body.request.Clothing+'","'+req.body.request.Transportation+'","'+req.body.request.Shelter+'","'+req.body.request.OtherExpenses+'")';
        console.log(insertQuery);
        const insertQueryResult = await (await db).query(insertQuery);
        console.log(insertQueryResult);
        return result[0];
  } catch ( error ) {
      console.log( "DB ERROR "+error );
  }
  
};