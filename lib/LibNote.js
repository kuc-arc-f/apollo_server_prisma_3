const { PrismaClient } = require('@prisma/client')
//
const LibNote = {
  getItems :async function(){
    try {
      const prisma = new PrismaClient()
      const items = await prisma.note.findMany({
        include: { noteTag: true },
      });
      await prisma.$disconnect() 
//console.log(items);       
      return items;
    } catch (err) {
      throw new Error('Error , getItems');
    }          
  },   
  getItem :async function(id){
    try {
      const prisma = new PrismaClient()
      const item = await prisma.note.findUnique({
        where: { id: Number(id) },
        include: { noteTag: true },
      });   
      await prisma.$disconnect();
//console.log(item)       
      return item;
    } catch (err) {
      throw new Error('Error , getItem');
    }          
  },
  addItem :async function(args){
    try {
      const prisma = new PrismaClient()
      const result = await prisma.note.create({
        data: {
          title: args.title,
          content: args.content,
          userId: 0
        }
      }) 
      await prisma.$disconnect()
// console.log( item)            
      return result
    } catch (err) {
      throw new Error('Error , addItem');
    }          
  },
  noteTagAdd :async function(args){
    try {
      const prisma = new PrismaClient()
      const result = await prisma.noteTag.create({
        data: {
          noteId: args.noteId,
          name: args.name,
        }
      }) 
      await prisma.$disconnect()
// console.log( item)            
      return result
    } catch (err) {
      throw new Error('Error , noteTagAdd');
    }          
  },  
  noteUpdate :async function(args){
    try {
// console.log( item)    
      const prisma = new PrismaClient()   
      const result = await prisma.note.update({
        where: { id: args.id},
        data: {
          title: args.title, 
          content: args.content, 
        },
      })           
      await prisma.$disconnect()
      return result
    } catch (err) {
      throw new Error('Error , noteUpdate');
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
export default LibNote;

