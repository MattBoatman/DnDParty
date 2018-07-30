import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Check from '@material-ui/icons/Check';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  title: {
    padding: '10px 0 0 10px',
  },
});

function WeaponTable({ classes, weapons }) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Weapon</TableCell>
            <TableCell>Proficient</TableCell>
            <TableCell>Range</TableCell>
            <TableCell numeric>To Hit</TableCell>
            <TableCell numeric>Damage</TableCell>
            <TableCell>Damage Type</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weapons.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell>{n.proficient && <Check />}</TableCell>
                <TableCell>{n.range}</TableCell>
                <TableCell numeric>{n.toHit}</TableCell>
                <TableCell numeric>{n.damage}</TableCell>
                <TableCell>{n.damageType}</TableCell>
                <TableCell>{n.description}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

WeaponTable.propTypes = {
  classes: PropTypes.object.isRequired,
  weapons: PropTypes.array.isRequired,
};

export default withStyles(styles)(WeaponTable);
