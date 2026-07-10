import { z, ZodError } from "zod"

//  const ageSchema = z.number().min(18).max(100).int();
//  const userAge=15;


//  try{
//  const parseUserAge = ageSchema.parse(userAge)
//  console.log(parseUserAge);
//  } catch (error) {
//    if(error instanceof ZodError){
//      console.log(error.issues[0].message);
//    } else{
//      console.log("unsexpected error: ",error)
//    }
// }


// env file ma string stored hai "3000" coerce string ko int ma change ker deta hai "3000"=3000
const portSchema = z.coerce.number().min(1).max(65536).default(3000);
export const PORT =portSchema.parse(process.env.PORT);
