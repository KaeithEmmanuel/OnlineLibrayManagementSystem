import express from 'express'
import bcrypt from 'bcrypt'
import { Admin } from './models/Admin.js'
import './db.js'
async function  AdminAccount() {
try{
    const adcount = await Admin.countDocuments();
    if(adcount === 0){
        const hashPassword = await bcrypt.hash('admin', 10);
        const newadmin = new Admin({
            username: 'admin',
            password: hashPassword
        })
        await newadmin.save();
        console.log("account created")
    }else{
        console.log("account already exists")
    }
}catch(err){
    console.log(err)
}
}

AdminAccount()
