import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WeaponTable from '../WeaponTable';
import MoreInformation from '..';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class TableTab extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {
      classes,
      weapons,
      skills,
      savingThrows,
      spellInformation,
      reminders,
    } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          scrollable
          scrollButtons="auto"
        >
          <Tab label="Skills & Proficiencies" />
          <Tab label="Weapons" />
        </Tabs>
        {value === 0 && (
          <MoreInformation
            skills={skills}
            savingThrows={savingThrows}
            spellInformation={spellInformation}
            reminders={reminders}
          />
        )}
        {value === 1 && <WeaponTable weapons={weapons} />}
      </div>
    );
  }
}

TableTab.propTypes = {
  classes: PropTypes.object.isRequired,
  weapons: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
  savingThrows: PropTypes.array.isRequired,
  spellInformation: PropTypes.array.isRequired,
  reminders: PropTypes.array.isRequired,
};

export default withStyles(styles)(TableTab);
