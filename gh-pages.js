var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/captv89/svelte-feedback-app.git", // Update to point to your repository
    user: {
      name: "Vishnu", // update to use your name
      email: "techsavvysailor@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
