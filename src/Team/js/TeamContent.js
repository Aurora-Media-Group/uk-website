import React from 'react';
import ProfileCard from './ProfileCard';

export default function TeamContent(props) {
  return (
    <div className='div-center'>
      <ProfileCard
        pfp='https://cdn.discordapp.com/avatars/310066600957050882/b64d4203a4ec5b09f4378e563e29868d.png?size=512'
        name='Alex Rollin'
        desc='Part of Aurora Media Group UK'
      />
      <ProfileCard
        pfp='https://cdn.discordapp.com/avatars/360825338437173258/81157151b393e81c9976ad617710e860.png?size=512'
        name='Sion Lewis'
        desc='Part of Aurora Media Group UK'
      />
      <ProfileCard
        pfp='https://cdn.discordapp.com/avatars/238651311795470337/82d1c8237b8879bde58c1ee0efc75a55.png?size=512'
        name='Anthony Leigh'
        desc='Part of Aurora Media Group UK'
      />
      <ProfileCard
        pfp='https://cdn.discordapp.com/avatars/426457351260995594/06f6787aeb2b3e5425adb559b96ff812.png?size=512'
        name='Umar Farooq'
        desc='Part of Aurora Media Group UK'
      />
      <ProfileCard
        pfp='https://cdn.discordapp.com/avatars/478981392278224912/a_1ef69a4e3461a622b00c94782faecedc.png?size=512'
        name='Ben Burton'
        desc='Part of Aurora Media Group UK'
      />
      <ProfileCard
        pfp='https://cdn.discordapp.com/avatars/310069303221157889/1c1400fbc8fd746a461d443594fd74f9.png?size=512'
        name='Yusuf Nawaz'
        desc='Part of Aurora Media Group UK'
      />
      <ProfileCard
        pfp='https://www.discord.com/assets/322c936a8c8be1b803cd94861bdfa868.png'
        name='Emily Kettlewood'
        desc='Part of Aurora Media Group UK'
      />
    </div>
  );
}
