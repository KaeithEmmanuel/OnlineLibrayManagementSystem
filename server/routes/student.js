import expres from "express";
import { Student } from "../models/Student.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { verifyAdmin } from "../routes/auth.js";
dotenv.config();
const router = expres.Router();

router.post('/register',verifyAdmin, async (req, res) => {
    try{
        const { roll, username, grade, password } = req.body;
        const student = await Student.findOne({username});
        if(student) return res.json({message: "User already exists"});
        const hashPassword = await bcrypt.hash(password, 10);
        const newStudent = new Student({
            roll: roll,
            username,
            grade,
            password: hashPassword
        })
        await newStudent.save();
        return res.json({registered: true});
    }catch(err){
        return res,json({message: "Error in registering student"})
    }
})

export {router as StudentRouter}