import React from 'react';
import { ReactComponent as Discord } from '../../images/dc.svg';
import { ReactComponent as YouTube } from '../../images/yt.svg';
import { ReactComponent as Instagram } from '../../images/ig.svg';
import { ReactComponent as Twitter } from '../../images/t.svg';
import { ReactComponent as Facebook } from '../../images/fb.svg';

export default function Socials() {
  return (
    <div>
      <div id='social'>
        <a href='https://amgi.xyz/discord' target='_blank'>
          <Discord />
        </a>
        <a href='https://amgi.xyz/Instagram_INT' target='_blank'>
          <Instagram />
        </a>
        <a href='https://amgi.xyz/Twitter_INT' target='_blank'>
          <Twitter />
        </a>
        <a href='https://amgi.xyz/Facebook_INT' target='_blank'>
          <Facebook />
        </a>
        <a href='https://amgi.xyz/Youtube_INT' target='_blank'>
          <YouTube />
        </a>
      </div>
    </div>
  );
}
