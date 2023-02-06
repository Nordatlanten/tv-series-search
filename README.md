# tv-series-search
This is a webapp that allows the user to search for TV series titles on tvmaze.com and show detailed info.

It is built using NextJS (React) and Storybook.

It is incomplete and has rudimental functionality. It may crash on an invalid search query.

**Installation**:
(Run this command if you're missing the node_modules catalog)
$ npm i

(Run this command to start the development server)
$ npm run dev

(Run this command to start the Storybook server where you can see a few components)
$ npm run storybook

--------------------------------------------------------

**What I would have added with more time**:
I would have prevented the application from crashing when an incompatible search query is being sent to the API endpoint.
I would also tidy the styling both in the visual appearance, and in the structure of the css/scss itself. I started off with a component based structure, but started to run out of time after focusing on the functionality of the application. All of the components would be desirable in the Storybook, and also in a way that is compatible with the limitations NextJS has.

There are also certain details like a more suitable dummy image (or css markup) being loaded when the TV series title does not have its own cover.
I would use a mathematical function to add the remaining stars for the rating so that there are always 10 stars visible under the title (if there is a rating).

I would also create React components of everything that can be rendered more than once in the application (e.g. cards for the Cast members, production titles et.c.)
I went a little overtime looking through the application and writing this, and I hope that is fine (around 20 minutes)