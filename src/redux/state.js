import { renderPage } from "../render";

let state = {
  postsPage: [
    { id: 1, post: "Today was a great day" },
    { id: 2, post: "Hi" },
    { id: 3, post: "How are u doing" },
    { id: 4, post: "Make my home work" },
    { id: 5, post: "Today was a great day" },
  ],
  messagePageUsers: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Anton" },
    { id: 3, name: "Egor" },
    { id: 4, name: "Misha" },
    { id: 5, name: "Vlad" },
  ],
  messagePageUMessages: [
    { id: 1, message: "Hi, how are u?" },
    { id: 2, message: "Hi, how are u?" },
    { id: 3, message: "Hi, how are u?" },
    { id: 4, message: "Hi, how are u?" },
    { id: 5, message: "Hi, how are u?" },
  ],
};



export let addPost = (postText) =>{
  let postObj = {
    id: 1,
    post: postText,
  };
  state.postsPage.push(postObj);
  renderPage(state);
}


export default state;
