import express from 'express'
import {client} from '@repo/prisma/client'

const app=express()
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.post('/signup', async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const user=await client.user.create({
        data:{
            username,
            password 
        }
    })

    res.json({
        message:"Signup Successful",
        id: user.id
    })
})

app.listen(3002)