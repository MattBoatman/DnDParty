import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

class RadioButton extends React.Component {
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
        style={{ unset: 'all' }}
        checked={this.state.isChecked}
        onClick={this.handleChange}
        value="spellSlot"
        className={this.props.classes.root}
      />
    );
  }
}

const styles = {
  root: {
    flex: 'unset',
    width: 'unset',
    height: 'unset',
  },
};
export default withStyles(styles)(RadioButton);
