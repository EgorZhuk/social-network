import React from 'react';
import s from 'components/Users/User/User.module.css';
import user from 'assets/images/user.png';
import {NavLink} from 'react-router-dom';

type ResponseUsersPropsType = {
  id: number,
  name: string,
  followed: boolean,
  photos: {
    small: string | null,
    large: string | null
  },
  status: string | null,
  uniqueUrlName: string | null,
  disable: number[],
  followCalback: (userId: number) => void
  unFollowCalback: (userId: number) => void
}
const User = (props: ResponseUsersPropsType) => {
  const buttonClass = (!props.followed) ? s.userFollowBtn : s.userUnfollowBtn;
  return (
    <div key={props.id} className={s.userCard}>
      <div className={s.userImage}>
        <NavLink to={'/profile/' + props.id}>
          <img
            src={(props.photos.small) ? props.photos.small : user}
            alt="avatar"/>
        </NavLink>

        {props.followed
          ? <button disabled={props.disable.some(id => id === props.id)} className={buttonClass} onClick={() => {
            props.unFollowCalback(props.id);
          }}>Unfollow</button>
          : <button disabled={props.disable.some(id => id === props.id)} className={buttonClass} onClick={() => {
            props.followCalback(props.id);
          }}>Follow</button>
        }
      </div>
      <div className={s.userInfo}>
        <div className={s.userTitle}>
          <p className={s.userName}>{props.name}</p>
          <p className={s.userStatus}>{props.status}</p>
        </div>
        <div className={s.userLocation}>
          <p>{'props.location.city'},</p>
          <p>{'props.location.country'}</p>
        </div>
      </div>
    </div>
  );
};
export default User;