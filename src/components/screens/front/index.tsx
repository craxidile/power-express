import React, {PropsWithChildren, ReactElement} from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

const publicDir = process.env.PUBLIC_URL;

const FrontScreen = (props: PropsWithChildren): ReactElement => {
  return (
    <div style={{ background: `url(${publicDir}/logo192.png) no-repeat center` }}>
      <h1>Front</h1>
      <Link to="/project">Project</Link>
    </div>
  );
};

export default FrontScreen;
