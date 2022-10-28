/*
    File Name: index.js
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-28
*/
export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}