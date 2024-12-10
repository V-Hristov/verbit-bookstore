import {User} from '../store/userSlice';


export const updateUserProfile = (user: User) => ({
    type: 'UPDATE_USER_PROFILE',
    payload: user,
});
