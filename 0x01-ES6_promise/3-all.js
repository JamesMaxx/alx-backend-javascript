import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoData, userData]) => {
      console.log(`${userData.body.firstName} ${userData.body.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
