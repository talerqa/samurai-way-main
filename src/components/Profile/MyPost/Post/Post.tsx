import React from 'react';
import s from './Post.module.css'
import ProfileInfo from '../../ProfileInfo/ProfileInfo';

type PostPropsType =  {
  message: string
  likesCount: number
  id: number
}

const Post = (props: PostPropsType) => {

  return (<div className={s.item}>
      <ProfileInfo/>
      <div>{props.message}</div>
      <div>Like</div>
      <span>{props.likesCount}</span>
    </div>
  )
}

export default Post;