import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class EditHealth extends React.Component {
  state = {
    healthValue: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  save = event => {
    this.props.onHealthEdit(event, this.state.healthValue);
  };
  render() {
    return (
      <div>
        <TextField
          id="number"
          label="Edit Health"
          value={this.state.healthValue}
          onChange={this.handleChange('healthValue')}
          type="number"
          margin="normal"
        />
        <Button size="small" onClick={this.save}>
          Save
        </Button>
      </div>
    );
  }
}

EditHealth.propTypes = {
  onHealthEdit: PropTypes.func.isRequired,
};

export default EditHealth;
