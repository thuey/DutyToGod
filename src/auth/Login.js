import React from 'react';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardActions, CardHeader } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import './index.css';

export default function Login() {
  return (
    <div>
      <Card>
        <CardHeader
          title='My Duty to God'
        />
        <CardContent>
          <TextField
            label='Email'
            fullWidth
          />
          <TextField
            label='Password'
            type='password'
            margin='normal'
            fullWidth
          />
        </CardContent>
        <CardActions>
          <Button
            raised
            color='primary'
          >
            Log In
          </Button>
          <Button>
            Need an Account?
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
