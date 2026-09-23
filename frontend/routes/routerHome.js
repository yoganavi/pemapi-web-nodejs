import express from "express";
import { solusiList, industriList } from "../data/content.js";

const routerHome = express.Router();

routerHome.get('/', (req, res) => {
  res.render('home', {
    layout: 'main-layout',
    solusiList,
    industriList,
  });
});

export { routerHome };
