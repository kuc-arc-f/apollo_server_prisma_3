const { PrismaClient } = require('@prisma/client')
//
const LibTask = {
  getItems :async function(){
    try {
      const prisma = new PrismaClient()
      const items = await prisma.task.findMany()
//console.log( items)            
      await prisma.$disconnect()
      return items;
    } catch (err) {
      throw new Error('Error , getItems');
    }          
  },    
  getTask :async function(id){
    try {
      const prisma = new PrismaClient()
      const item = await prisma.task.findUnique({
        where: { id: Number(id) },
      });     
//console.log( item)       
      await prisma.$disconnect();
      return item;
    } catch (err) {
      throw new Error('Error , getTask');
    }          
  },
  addTask :async function(args){
    try {
      const prisma = new PrismaClient()
      const result = await prisma.task.create({
        data: {
          title: args.title,
          userId: 0
        }
      }) 
      await prisma.$disconnect()
// console.log( item)            
      return result
    } catch (err) {
      throw new Error('Error , addTask');
    }          
  },
  updateTask :async function(args){
    try {
// console.log( item)    
      const prisma = new PrismaClient()   
      const post = await prisma.task.update({
        where: { id: args.id},
        data: { title: args.title },
      })           
      await prisma.$disconnect()
      return args
    } catch (err) {
      throw new Error('Error , updateTask');
    }          
  },
  deleteTask :async function(args){
    try {
      const prisma = new PrismaClient()   
      const result = await prisma.task.delete({
        where: { id: Number(args.id) },
      })  
      await prisma.$disconnect()
//console.log(result);            
      return result
    } catch (err) {
      throw new Error('Error , deleteTask');
    }          
  },  
}

export default LibTask;
