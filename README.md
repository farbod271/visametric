# Bypassing visametric crashes with js injection in the console

This repository is for bypassing the hassle of making an appointment in visametric. i wrote this code to get an appointment on the site. their servers would crash immediately when an appointment was availble. and the only way to even see the time slots was via code and bypassing the 502 error codes.

## i open sourced it a bit later as they have changed their procedure and its now via the embassy itself but this is how i got my appointment and it shows that i am familiar with - `JQuery`

## Main Files


- `getdate and getservice student.js`, `getdate and getservices legal.js`, `SCHENGEN getdate and get services.js`: These files are responsible for getting the date and services for different types of visa applications (student, legal, Schengen). They make POST requests to the `/personal/getservices` endpoint to retrieve the service data.

- `CALENDER.js`: This file contains the code for managing appointment dates. It makes a POST request to the `/controldate` endpoint to control the appointment dates.

- `GETCITY.js`: This file is responsible for getting the city information. It makes a POST request to the `/getcity` endpoint to retrieve the city data.


- `PHONE CONTROL.txt`: This code is for the quick bypassing of the last part containing some control variables related to phone, email, and passport.
