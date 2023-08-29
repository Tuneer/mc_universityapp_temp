import db from "../config/db";

export default async function addIncome(req,res){

    try {
        const query = 'SELECT max(Sno) as maxSno FROM `household income statistics`';
        console.log(query);
        const result = await (await db).query(query);
        console.log(result[0][0].maxSno);
        const newID = result[0][0].maxSno+1;
        console.log(newID);
        const insertQuery = 'INSERT INTO `household income statistics`(`sno`,`Country`,`Province`,`Geography`,`Structural_type_of_dwelling`,`Population_Type`,`Median_Income_Before_Tax`,`Median_Income_After_Tax`,`Year`,`Total_as_Household_type_including_census_family_structure`,`Census_family_households`,`Only_one_census_family_without_additional_persons`,`One_couple,_with_or_without_children_in_their_census_family`,`Without_children`,`With_children`,`One_one_parent_census_family`,`With_a_parent_that_is_a_man+_9_10`,`With_a_parent_that_is_a_woman+_11_12`,`Other_census_family_households_13`,`Non_census_family_households`)VALUES(newID,req.data.country,req.data.province,req.data.city,Structural_type_of_dwelling,Population_Type,Median_Income_Before_Tax,Median_Income_After_Tax,Year,Total_as_Household_type_including_census_family_structure,Census_family_households,Only_one_census_family_without_additional_persons,One_couple,_with_or_without_children_in_their_census_family,Without_children,With_children,One_one_parent_census_family,With_a_parent_that_is_a_man+_9_10,With_a_parent_that_is_a_woman+_11_12,Other_census_family_households_13,Non_census_family_households)';
        console.log(insertQuery);
        const insertQueryResult = await (await db).query(insertQuery);
        console.log(insertQueryResult);
       // return result[0];
  } catch ( error ) {
      console.log( "DB ERROR "+error );
  }
  
};