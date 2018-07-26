import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';

export default class EditHealth extends React.Component {
  state = {
    health: '',
    tempHP: '',
  };

  editHealth = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleCB = () => {
    this.handleClose();
    this.props.editHealth(
      parseInt(this.state.health),
      parseInt(this.state.tempHP),
    );
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.openHPModal}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Health</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Edit health and temporary HP. Use negatives to remove health.
            </DialogContentText>
            <InputWrapper>
              <TextField
                margin="dense"
                id="health"
                label="Edit Health"
                type="number"
                onChange={this.editHealth('health')}
              />
              <TextField
                margin="dense"
                id="health"
                label="Edit Temporary HP"
                type="number"
                onChange={this.editHealth('tempHP')}
              />
            </InputWrapper>
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
