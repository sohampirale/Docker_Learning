const express = require("express");

const app = express();
const { PrismaClient } =require('@prisma/client')

const prisma = new PrismaClient()

app.get('/',async(req,res)=>{
	const users = await prisma.user.findMany();
	res.status(200).json({
		users
	})
})

app.post("/",async(req,res)=>{
	await prisma.user.create({
		data:{
			username:Math.random().toString(),
			Password:Math.random().toString()
		}
	})

	res.send('user created')
})

app.listen(3000,()=>{
	console.log("server listening on port 3000");
})

