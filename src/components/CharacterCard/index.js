import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HealthIndicator from '../HealthIndicator';
import QuickStats from '../QuickStats';
import StatCard from '../StatCard';
import CharacterInformation from '../CharacterInformation';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Edit from '@material-ui/icons/Edit';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core/styles';
import EditHealth from './EditHealth';
import TableTab from '../MoreInformation/TableTab';
import SpellSlotGroup from './SpellSlotGroup';
import Tracker from './Tracker';

const propTypes = {
  characterName: PropTypes.string,
  race: PropTypes.string,
  classType: PropTypes.string,
  quickStats: PropTypes.array,
  abilityScores: PropTypes.array,
  skills: PropTypes.array,
  savingThrows: PropTypes.array,
  currentHP: PropTypes.number.isRequired,
  temporaryHP: PropTypes.number,
  classes: PropTypes.object.isRequired,
};
const defaultProps = {
  characterName: 'Tug Purple Beard',
  race: 'Hill Dwarf',
  classType: 'Lore Bard',
  quickStats: [
    { type: 'AC', value: 15 },
    { type: 'Spell Save', value: 16 },
    { type: 'Initiative', value: 4 },
    { type: 'Attack Modifier', value: 8 },
    { type: 'PP', value: 14 },
    { type: 'Prof Bonus', value: 3 },
    { type: 'Speed', value: 25 },
  ],
  abilityScores: [
    { stat: 'STR', score: 14, modifier: 2 },
    { stat: 'CON', score: 16, modifier: 3 },
    { stat: 'WIS', score: 12, modifier: 1 },
    { stat: 'DEX', score: 16, modifier: 3 },
    { stat: 'INT', score: 13, modifier: 1 },
    { stat: 'CHA', score: 20, modifier: 5 },
  ],
  skills: [
    { modifier: 6, name: 'Acrobatics', ability: 'Dex' },
    { modifier: 2, name: 'Animal Handling', ability: 'Wis' },
    { modifier: 2, name: 'Arcana', ability: 'Int' },
    { modifier: 3, name: 'Athletics', ability: 'Str' },
    { modifier: 8, name: 'Deception', ability: 'Cha' },
    { modifier: 2, name: 'History', ability: 'Int' },
    { modifier: 4, name: 'Insight', ability: 'Wis' },
    { modifier: 11, name: 'Intimidation', ability: 'Cha' },
    { modifier: 2, name: 'Investigation', ability: 'Int' },
    { modifier: 2, name: 'Medicine', ability: 'Wis' },
    { modifier: 2, name: 'Nature', ability: 'Int' },
    { modifier: 4, name: 'Perception', ability: 'Wis' },
    { modifier: 8, name: 'Performance', ability: 'Cha' },
    { modifier: 11, name: 'Persuasion', ability: 'Cha' },
    { modifier: 2, name: 'Religion', ability: 'Int' },
    { modifier: 4, name: 'Sleight of Hand', ability: 'Dex' },
    { modifier: 6, name: 'Stealth', ability: 'Dex' },
    { modifier: 2, name: 'Survival', ability: 'Wis' },
  ],
  savingThrows: [
    { modifier: 3, ability: 'STR' },
    { modifier: 2, ability: 'INT' },
    { modifier: 7, ability: 'DEX' },
    { modifier: 2, ability: 'WIS' },
    { modifier: 4, ability: 'CON' },
    { modifier: 9, ability: 'CHA' },
  ],
  currentHP: 48,
  maxHP: 48,
  temporaryHP: 0,
  hitDice: 'd8+3',
  level: 5,
  spellInformation: [
    { level: 1, slots: 4 },
    { level: 2, slots: 3 },
    { level: 3, slots: 2 },
  ],
  trackerValue: 5,
  trackerName: 'Bardic Inspiration',
  weapons: [
    {
      id: 1,
      name: 'Grapier',
      proficient: true,
      range: 'Melee',
      toHit: 7,
      damage: '1d8+4',
      damageType: 'Piercing',
      description: 'Touching the hilt turns user purple',
    },
    {
      id: 2,
      name: 'Dagger',
      proficient: true,
      range: 'Melee 20/60ft',
      toHit: 6,
      damage: '1d4+3',
      damageType: 'Piercing',
      description: 'Finesse, light, thrown',
    },
    {
      id: 3,
      name: 'Rapier',
      proficient: true,
      range: 'Melee',
      toHit: 6,
      damage: '1d8+3',
      damageType: 'Piercing',
      description: 'Finesse',
    },
    {
      id: 4,
      name: 'Warhammer',
      proficient: true,
      range: 'Melee',
      toHit: 5,
      damage: '1d8+2',
      damageType: 'Bludgeoning',
      description: 'Versatile (1d10)',
    },
  ],
  reminders: [
    'Languages: Common, Dwarvish, Elvish',
    'Bag Pipes, Drums, Horns',
    'Proficient with Brewers and Jewelers Tools',
    'Darkvision 60ft',
    'Advantage on saves vs Poison',
    'Stonecunning',
  ],
};
class CharacterCard extends Component {
  state = {
    showMoreInformation: false,
    maxHP: this.props.maxHP,
    currentHP: this.props.currentHP,
    temporaryHP: this.props.temporaryHP,
    expanded: false,
    openHPModal: false,
  };
  cardClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleClick = (e, value) => {
    e.preventDefault();
    e.stopPropagation();
    const val = parseInt(value, 2);
    if (isNaN(val)) return;
    if (this.state.temporaryHP && val < 0) {
      return this.setState(prevState => ({
        temporaryHP: prevState.temporaryHP + val,
      }));
    }
    this.setState(prevState => ({
      currentHP: prevState.currentHP + val,
    }));
  };
  openHealthModal = e => {
    e.stopPropagation();
    this.setState({
      openHPModal: true,
    });
  };
  editHealth = (health, temporaryHP) => {
    this.setState({
      openHPModal: false,
    });
    if (temporaryHP && !isNaN(temporaryHP)) {
      this.setState(prevState => ({
        temporaryHP: prevState.temporaryHP + temporaryHP,
      }));
    }
    if (health && !isNaN(health)) {
      this.setState(prevState => ({
        currentHP: prevState.currentHP + health,
      }));
    }
  };

  handleEditClick = e => {
    e.stopPropagation();
  };

  render() {
    const {
      classes,
      characterName,
      race,
      classType,
      hitDice,
      level,
      trackerName,
      trackerValue,
      savingThrows,
      weapons,
      reminders,
      spellInformation,
      skills,
      quickStats,
      abilityScores,
    } = this.props;
    const { maxHP, currentHP, temporaryHP } = this.state;
    return (
      <CharacterWrapper>
        <ExpansionPanel>
          <ExpansionPanelSummary
            classes={{
              root: classes.root,
              content: classes.content,
            }}
          >
            <Edit
              style={{
                position: 'absolute',
                top: -12,
                left: -9,
              }}
              onClick={this.handleEditClick}
            />
            <ContentWrapper>
              <CharacterInformation
                characterName={characterName}
                race={race}
                classType={classType}
                hitDice={hitDice}
                level={level}
              />
              <QuickStats quickStats={quickStats} />
              <AbilityWrapper>
                {abilityScores.map((obj, idx) => (
                  <StatWrapper key={idx}>
                    <StatCard
                      stat={obj.stat}
                      modifier={obj.modifier}
                      score={obj.score}
                    />
                  </StatWrapper>
                ))}
              </AbilityWrapper>
            </ContentWrapper>
            <HealthBarWrapper>
              <IconButton
                color="secondary"
                onClick={e => this.handleClick(e, -1)}
                style={{ width: 'auto', height: 'auto' }}
              >
                <Remove />
              </IconButton>
              <HealthIndicator
                maxHP={maxHP}
                currentHP={currentHP}
                temporaryHP={temporaryHP}
                editHealth={this.openHealthModal}
              />
              <IconButton
                color="secondary"
                onClick={e => this.handleClick(e, 1)}
                style={{ width: 'auto', height: 'auto', zIndex: 1000 }}
              >
                <AddIcon />
              </IconButton>
            </HealthBarWrapper>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails classes={{ root: classes.expansionPanelRoot }}>
            <CounterWrapper>
              {spellInformation && (
                <SpellSlotGroup spellInformation={spellInformation} />
              )}
              {trackerName && (
                <Tracker name={trackerName} count={trackerValue} />
              )}
            </CounterWrapper>
            <TableTab
              weapons={weapons}
              skills={skills}
              savingThrows={savingThrows}
              spellInformation={spellInformation}
              reminders={reminders}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <EditHealth
          openHPModal={this.state.openHPModal}
          editHealth={this.editHealth}
        />
      </CharacterWrapper>
    );
  }
}

const AbilityWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-top: -30px;
  @media (max-width: 600px) {
    justify-content: space-between;
    margin: 0;
  }
`;
const ContentWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const StatWrapper = styled.div`
  margin-left: 1px;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const CharacterWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

const HealthBarWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: flex-end;
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const styles = {
  root: {
    padding: 0,
  },
  content: {
    display: 'block',
    marginBottom: 0,
  },
  expansionPanelRoot: {
    display: 'block',
  },
};

CharacterCard.propTypes = propTypes;
CharacterCard.defaultProps = defaultProps;

export default withStyles(styles)(CharacterCard);
