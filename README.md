# NC NEWS

## What is this?

This is a web application that allows users to access the _NC News_ platform, a site similar to Reddit where users can, for now, read articles, vote them, and post, delete and vote comments. 

_NC News_ is also the front-end result of a full-stack project (feel free to have a look at our [API](https://github.com/SaraGMatos/backend-project)) and has been developed using [ReactJS](https://react.dev/). 

Would you like to have a look at the Netlify hosted version? Have a peek [here](https://my-ncnews.netlify.app/). Please note that, even though the app is viewable in a variety of devices, it is best experienced on mobile. Also please be aware that our server spins down with inactivity and it can take about 50 seconds or more to get it back up again!

## What functionality is there?

Users can, so far:

- Log in using a mock login page
- In the main articles view, explore a list of article cards that display the article's image, title, author, date of creation, and comment and vote count
- Navigate within the main articles view through pagination
- Filter articles by topic
- Sort articles by order, comment count, votes and date
- Read a particular listed article
- Vote an article
- Comment on an article
- Vote other comments
- Delete your own comments
- Go back the main articles page by clicking on the platform heading
- Log out

## Want to run this locally?

1. Please make sure that you have at least the following _Node.js_ version:

   - v21.6.1

2. If you do not have _Node.js_ installed on your machine, please follow [the installation guide](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).

3. Clone this repository by pasting the following on your terminal: `git clone https://github.com/SaraGMatos/nc-news`.

4. Once you are in the project folder, install node package manager (npm) to set up needed dependencies. Paste this on your terminal: `npm install`.

5. Now you should be ready to run it locally using [Vite](https://vitejs.dev/guide/why.html) as a dev server. Please paste the following: `npm run dev` and click on the `http://localhost:5173/` that will appear on your terminal!

6. There is a mock login page. Please be aware that you will need to be logged in as _grumpy19_. The password is, as it irremediably needs to be at this state, _test_. 

## Contributions

This project is open to contributions. Feel free to submit a pull request if you would like to make a suggestion or raise an issue or problem with the code.

## Final note

This project was developed as a week-long front-end review during the Software Delopment bootcamp at Northcoders. It is still a work in progress (as is learning!) and new features and improvements to code base, UI and UX will be likely to be implemented in the near future.
