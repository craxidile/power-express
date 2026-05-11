import React, {PropsWithChildren, ReactElement} from 'react';
import {Link} from 'react-router-dom';

const FrontScreen = (props: PropsWithChildren): ReactElement => {
  return (
    <div>
      <h1>Front</h1>
      <Link to="/project">Project</Link>
    </div>
  );
};

export default FrontScreen;
