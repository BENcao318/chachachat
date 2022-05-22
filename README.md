# ChaChaChat

This project uses OpenAI API to create a chat interface allows the users to interact with an Artificial Intelligence. 

Visit the app on Heroku: https://chachachat-318.herokuapp.com/

## Technical requirements 
The app was created for Shopify's Front End Developer Intern Challenge (Fall 2022). 
- Results should come from OpenAI’s completions API. ✅ 
- Each result should include at least the original prompt you entered and the response from the API. ✅ 
- Responses should be stored in order of newest to oldest. ✅ 
- The HTML that ends up being served client-side should be accessible and semantic. ✅ 

## Extras
- Save responses if the user leaves or reloads the page. Conversation histories are saved in localstorage. ✅ 
- Let the user choose the AI engine from a select box. ✅ 
- Add some presets for the user to quickly send a good prompt. ✅ 
- Make the app more specific to a single purpose. See the OpenAI Examples and prompt design docs for inspiration. ✅ 

## Tech Stack
- React 
- TailwindCSS

## Dependencies
- @headlessui/react
- axios
- dotenv
- openai
- react
- react-dom
- react-icons
- react-scripts
- uuid
- tailwindcss

## Setups
```
$ git clone git@github.com:BENcao318/chachachat.git chachachat
$ npm install @slack/web-api @slack/socket-mode
```
- create a .env file in root level with your own OPENAI API key 
```
$ npm start
```
- use the browser to access http://localhost:3000 


## Screenshots

   Home Page 
  ![Home_Screen_ChaChaChat](https://user-images.githubusercontent.com/60834562/169716166-d456959d-1944-4a72-9125-2fbbd24724b8.png)

<details>
  <summary> Choosing an AI engine </summary>
  ![Choose_An_AI_Model_ChaChaChat](https://user-images.githubusercontent.com/60834562/169716526-b02d7222-268d-4389-9f45-8d55f771a756.png)
</details>
 
 <details>
  <summary> Choosing a preset question </summary>
  ![Select_A_Preset_Question](https://user-images.githubusercontent.com/60834562/169716528-5b5f3c49-79e7-4e11-b498-4190d91cff91.png)
 </details>
 
  <details>
  <summary> About Me Modal </summary>
  ![AboutMe_ChaChaChat](https://user-images.githubusercontent.com/60834562/169716525-90450d5e-4f36-4e5c-b756-89383e380dae.png)
 </details>
 
 <details>
  <summary> Small Screen page </summary>
  ![Small_Screen_ChaChaChat](https://user-images.githubusercontent.com/60834562/169716529-cb3eaf7b-b91f-468e-bd4b-fc23f1cb9f98.png)
 </details>
 
 <details>
  <summary> Small Screen page with sliding sidebar </summary>
  ![Small_Screen_Sidebar_ChaChaChat](https://user-images.githubusercontent.com/60834562/169716530-ecdf6bf5-c155-4fc5-a9b3-1b1b40d7be7c.png)
 </details>
