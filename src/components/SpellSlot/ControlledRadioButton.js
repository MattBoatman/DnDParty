import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';

class ControlledRadioButton extends React.Component {
  state = {
    isChecked: false,
  };

  handleChange = event => {
    event.preventDefault();
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }));
  };

  render() {
    return (
      <Radio
        checked={this.state.isChecked}
        onClick={this.handleChange}
        value="spellSlot"
        className={this.props.classes.root}
        icon={
          <RadioButtonUnchecked style={{ width: '.5em', height: '.5em' }} />
        }
        checkedIcon={
          <RadioButtonChecked style={{ width: '.5em', height: '.5em' }} />
        }
      />
    );
  }
}

const styles = {
  root: {
    flex: 'unset',
    width: '50%',
    height: 'unset',
  },
};
export default withStyles(styles)(ControlledRadioButton);
