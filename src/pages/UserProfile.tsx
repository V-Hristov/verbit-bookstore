import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import ReactAvatar from 'react-avatar';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { updateUserProfile } from '../store/userSlice';
import { TextField, Button, Typography, Grid } from '@material-ui/core';
import '../styles/userProfile.scss';

const UserProfile = () => {
    const user = useSelector((state: RootState) => state.user);
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onEditProfileClick = () => {
        setIsEditing(true);
    };

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedUser({
            ...editedUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveProfileClick = () => {
        dispatch(updateUserProfile(editedUser));
        setIsEditing(false);
    };

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" className="profile">
            <ReactAvatar name={`${user.firstName || 'User'} ${user.lastName || ''}`} size="100" round={true} className="avatar" />
            {isEditing ?
                <>
                    <TextField className="inputField" name="firstName" value={editedUser.firstName || ''} label={t('firstName')} variant="outlined" onChange={handleFieldChange} />
                    <TextField className="inputField" name="lastName" value={editedUser.lastName || ''} label={t('lastName')} variant="outlined" onChange={handleFieldChange} />
                    <DatePicker
                        selected={editedUser.dateOfBirth ? new Date(editedUser.dateOfBirth) : null}
                        onChange={(date: Date | null) =>
                            setEditedUser({
                                ...editedUser,
                                dateOfBirth: date ? date.getTime() : null,
                            })
                        }
                        className="datePicker"
                        dateFormat="MM/dd/yyyy"
                    />
                    <TextField className="inputField" name="email" value={editedUser.email || ''} label={t('email')} variant="outlined" onChange={handleFieldChange} />
                    <Button className="profileButton" variant="contained" color="primary" onClick={handleSaveProfileClick}>{t('saveProfile')}</Button>
                </>
                :
                <>
                    <Typography className="typography" variant="h5">{user.firstName} {user.lastName}</Typography>
                    <Typography className="typography">{t('email')} {user.email}</Typography>
                    <Typography className="typography">{t('dateOfBirth')} {user.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : null}</Typography>
                    <Button className="profileButton" variant="contained" color="primary" onClick={onEditProfileClick}>{t('editProfile')}</Button>
                </>
            }
        </Grid>
    );
};

export default UserProfile;