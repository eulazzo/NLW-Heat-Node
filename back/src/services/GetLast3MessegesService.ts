import prismaClient  from '../prisma'

//SELECT * from messages from limit 3 order by created_at desc
 
class GetLast3MessegesService{
  
  async execute(){
     const messages = await prismaClient.message.findMany({
       take:3,
       orderBy:{
         created_at:'desc'
       },
       include:{
        user:true
       }
     })
    return messages
  }
}

export {GetLast3MessegesService}