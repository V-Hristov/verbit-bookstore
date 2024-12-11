import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import ReactAvatar from 'react-avatar';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {updateUserProfile} from '../store/userSlice';

const UserProfile = () => {
    const user = useSelector((state: RootState) => state.user);
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onEditProfileClick = () => {
        setIsEditing(true);
    };

    const handleFieldChange = (e) => {
        setEditedUser({
            ...editedUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveProfileClick = () => {
        dispatch(updateUserProfile(editedUser));
        setIsEditing(false);
    };
    const dateOfBirth = editedUser.dateOfBirth ? new Date(editedUser.dateOfBirth).toLocaleDateString() : 'N/A';
    return (
        <div>
            <h1>{t('userProfile')}</h1>
            <ReactAvatar name={`${user.firstName || 'User'} ${user.lastName || ''}`} size="100" round={true} />
            {
                isEditing ?
                    <>
                        <input name="firstName" value={editedUser.firstName || ''} onChange={handleFieldChange}/>
                        <input name="lastName" value={editedUser.lastName || ''} onChange={handleFieldChange}/>
                        <DatePicker
                            selected={editedUser.dateOfBirth ? new Date(editedUser.dateOfBirth) : null}
                            onChange={(date) => setEditedUser({...editedUser, dateOfBirth: date?.getTime()})}
                            dateFormat="MM/dd/yyyy"
                        />
                        <input name="email" value={editedUser.email || ''} onChange={handleFieldChange}/>
                        <button onClick={handleSaveProfileClick}>{t('saveProfile')}</button>
                    </>
                    :
                    <div>
                        <h2>{user.firstName} {user.lastName}</h2>
                        <p>{t('email')} {user.email}</p>
                        <p>{t('dateOfBirth')} {dateOfBirth}</p>
                        <button onClick={onEditProfileClick}>{t('editProfile')}</button>
                    </div>
            }
        </div>
    );
};

export default UserProfile;