import express from "express";
const routerHome = express.Router();

// import getAgenEdit, {submitAgenEdit} from "../actions/agen/editAgen.js";

routerHome.get('/', (req,res)=>{
  res.render('home',{
    layout: 'main-layout',
  })
});

export {
    routerHome
};