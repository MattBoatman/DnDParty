import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';

export default class editCharacter extends React.Component {
  handleCB = () => {};

  render() {
    return (
      <div>
        <Dialog
          open={this.props.openHPModal}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Health</DialogTitle>
          <DialogContent>
            <DialogContentText>Add a tracker</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCB} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCB} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
