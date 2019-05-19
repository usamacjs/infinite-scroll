import { http } from './http';
import { ui } from './ui';

let avatars = 24;

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);


// Get Posts
function getPosts() {

  for (let i = 0; i < avatars; i++) {
    http.get(`https://api.adorable.io/avatars/${avatars}`)
      .then(data => {
        console.log(data);
        ui.showPosts(data);
        avatars++;
      })
      .catch(err => console.log(err));

  }

}
