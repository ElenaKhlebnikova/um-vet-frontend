# 🏥 UmVet

Welcome to UmVet repository! This is a web-application which allows users to view UmVet vet clinic website, on which users can view doctors, make an appointment with them and leave feedback. 


The project is connected to the backend that I've built here: https://github.com/ElenaKhlebnikova/um-vet-backend

## 🏗️ Tech Stack

MeowFood is built with the following tech stack:

| Technology                                                          | Usage                                                                                                          |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| React                                     | Main framework for building the application         |
| React Router                                    |Navigation and routing within the application |
| CSS Modules                           | For styling the components and prevent clashing of classes                                    |
| ESLint/Prettier/Husky                                 | For linting/formatting/Git-hooks                                      |
| Leaflet                    | To show an interactive map on the "Contact Us" page                                 |
| Jest & RTL                                  | To write unit and integration tests                                          | 
GitHub Projects | To track proogress on the project 
                                                                                    

## 👀 Project Overview

Click  [here]([https://frolicking-begonia-777545.netlify.app]) to view the project.


![UmVet main](https://i.ibb.co/7vRLcZk/image.png)

![UmVet Slider German](https://i.ibb.co/ZYmnHK9/image.png)
![UmVet contact page](https://i.ibb.co/7R6SbSy/image.png)
![UmVet calendar](https://i.ibb.co/SV7khFf/image.png)

![UmVet Make an appointment form](https://i.ibb.co/Gv665Ls/image.png)
![UmVet Error Page](https://i.ibb.co/278rkJX/image.png)




## 🐶 Features 

1. Fully responsive.
2. Booking functionality: users can chose a doctor, date and time of their appointment. This data is stored on the backend of the project.
3. Interactive calendar: users can choose a doctor, date and time of their appointment and also they see if the time is unavailable (if it has been booked)
4. Leaving reviews on doctors and writing comments.
5. Added internalization support for English and German. 



## 📖What I have learnt
1. Using React Router v6.11 to implement navigation between different pages.
2. Using Leaflet to display an interactive map and also changing the default pin to a custom one.
3. Connecting frontend and backend using `fetch` API and how to work with common HTTP methods.
4. How to use RTL to write integration tests that span multiple components.
5. Building custom hook to share form validation logic between components. 
6. How to implement internalization

## 🤯 What I struggled with
1. Implementing calendar: it was hard to make days of the week appear like in a real calendar. For example, if today is Wed. Mon and Tue should be empty so that it's not possible to book for them and real dates align with days of the week. 
2. New version of React Router. No comments. 
3. Writing a lot of CSS.





