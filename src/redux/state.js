export let store = {
  renderPage() {
    console.log("state changed");
  },

  state: {
    postsPage: {
      posts: [
        { id: 1, post: "Today was a great day" },
        { id: 2, post: "Hi" },
        { id: 3, post: "How are u doing" },
        { id: 4, post: "Make my home work" },
        { id: 5, post: "Today was a great day" },
      ],
      textareaInner: "",
    },
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
  },

  addPost() {
    let postObj = {
      id: 1,
      post: this.state.postsPage.textareaInner,
    };
    this.state.postsPage.posts.push(postObj);
    this.state.postsPage.textareaInner = "";
    this.renderPage(this.state);
  },

  updatePost(newText) {
    this.state.postsPage.textareaInner = newText;
    this.renderPage(this.state);
  },

  subscribe(callback) {
    this.renderPage = callback;
  },
};

// let renderPage = () => {
//   console.log("state changed");
// };

// let state = {
//   postsPage: {
//     posts: [
//       { id: 1, post: "Today was a great day" },
//       { id: 2, post: "Hi" },
//       { id: 3, post: "How are u doing" },
//       { id: 4, post: "Make my home work" },
//       { id: 5, post: "Today was a great day" },
//     ],
//     textareaInner: "",
//   },
//   messagePageUsers: [
//     { id: 1, name: "Dima" },
//     { id: 2, name: "Anton" },
//     { id: 3, name: "Egor" },
//     { id: 4, name: "Misha" },
//     { id: 5, name: "Vlad" },
//   ],
//   messagePageUMessages: [
//     { id: 1, message: "Hi, how are u?" },
//     { id: 2, message: "Hi, how are u?" },
//     { id: 3, message: "Hi, how are u?" },
//     { id: 4, message: "Hi, how are u?" },
//     { id: 5, message: "Hi, how are u?" },
//   ],
// };

// window.state = state;

// export const addPost = () => {
//   let postObj = {
//     id: 1,
//     post: state.postsPage.textareaInner,
//   };
//   state.postsPage.posts.push(postObj);
//   state.postsPage.textareaInner = "";
//   renderPage(state);
// };

// export const updatePost = (newText) => {
//   state.postsPage.textareaInner = newText;
//   renderPage(state);
// };

// export const subscribe = (callback) => {
//   renderPage = callback;
// };

// export default state;
