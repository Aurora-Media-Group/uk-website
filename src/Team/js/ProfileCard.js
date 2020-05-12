import React from 'react';

export default function ProfileCard(props) {
  return (
    <div id='profgroup'>
      <div className='backing'>
        <div className='profile'>
          <div className='profilePic'>
            <img className='pfp' src={props.pfp} />
          </div>
          <div classname='infoinfo'>
            <div className='nameTag'>
              <h2 className='namedesc'>{props.name}</h2>
            </div>
            <div className='aboutTag'>
              <p className='ddesc'>{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
      <div id='backings'>
        <p class='findme'>Find me here...</p>
        <img className='igpic' src='https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/Instagram-512.png' />
        <img className='tpic' src='https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png' />
        <img className='dpic' src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/discord-512.png' />
      </div>
    </div>
  );
}
