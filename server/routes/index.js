/*
    File Name: index.js
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-28
*/
import { Router } from 'express';

let router = Router();

import {DisplayHomePage} from '../controllers/index.js';

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

export default router;