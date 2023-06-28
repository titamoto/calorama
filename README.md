# Calorama 🍅

Calorama is a web-app that shows how many calories different foods have.

## How to Install

To install this app locally on your machine follow these steps.

1. clone this repo by typing the command below in your terminal:

```bash
$git clone https://github.com/titamoto/calorama.git
```

or if you want to clone using SSH:

```bash
$git clone git@github.com:titamoto/calorama.git
```

2.  go into the directory created by cloning this repo:

```bash
$ cd calorama
```

In the project directory run:

```bash
$npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

If you wish you can also clone [JSON-Server repo](https://github.com/titamoto/calorama-json-server) for this app.

## Project Database

JSON-Server for this project is located on [https://calorama.onrender.com](https://calorama.onrender.com/).  
GitHub repository for the server is available on [https://github.com/titamoto/calorama-json-server](https://github.com/titamoto/calorama-json-server).

## How to Use

- **All Foods Page**  
  All Foods Page has all available foods. Every food card shows calories per serving size. You can adjust serving size to see calories number for it and vice versa. Press 'Save' button to save the food.

- **Saved Foods Page**  
  Saved Foods Page has all foods saved by you. Press 'Delete' button to remove the food from the page.

- **Add Food Page**  
  You can add your own food to the list on this page. Use form to add name, type, image, serving size and calories and press submit to add your food. The food will be shown on All Foods page.

## Credits

Calorama is made with React. To learn React, check out the [React documentation](https://reactjs.org/).
This project uses [React Router v5](https://v5.reactrouter.com/) for client-side routing.  
This application is deployed on [Netlify](https://www.netlify.com/). JSON-Server for this app is deployed on [Render](http://render.com).  
[Material UI](https://mui.com/) library was used for styling elements.

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
