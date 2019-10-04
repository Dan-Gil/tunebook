import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <div>
          <h1>TuneBook</h1>

          <div>
            <Link to="/signup">
              <Button type="primary">
                <b>Sign up</b>
              </Button>
            </Link>
            <Link to="Login">
              <Button type="primary">
                <b> Log in</b>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
