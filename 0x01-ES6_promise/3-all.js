// 3-all.js

import { uploadPhoto, createUser } from './utils';

/**
 * Handles profile signup by uploading a photo and creating a user.
 */
export default async function handleProfileSignup() {
  try {
    // Use Promise.all to collectively resolve all promises
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

    // Log the result to the console
    console.log(` ${photo} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    // Log an error message if any of the promises reject
    console.error('Signup system offline');
  }
}
