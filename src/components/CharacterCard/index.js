import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import HealthIndicator from '../HealthIndicator';
import QuickStats from '../QuickStats';
import StatCard from '../StatCard';
import CharacterInformation from '../CharacterInformation';
import styled from 'styled-components';
import MoreInformation from '../MoreInformation';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const propTypes = {
  characterName: PropTypes.string,
  race: PropTypes.string,
  classType: PropTypes.string,
  quickStats: PropTypes.array,
  abilityScores: PropTypes.array,
  skills: PropTypes.array,
  currentHP: PropTypes.number.isRequired,
  temporaryHP: PropTypes.number,
};
const defaultProps = {
  characterName: 'Tug Purple Beard',
  race: 'Hill Dwarf',
  classType: 'Lore Bard',
  quickStats: [
    { type: 'AC', value: 16 },
    { type: 'PP', value: 10 },
    { type: 'Speed', value: 25 },
    { type: 'Spell Save', value: 15 },
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
    { modifier: 5, name: 'Acrobatics', ability: 'Dex' },
    { modifier: 2, name: 'Animal Handling', ability: 'Wis' },
    { modifier: 2, name: 'Arcana', ability: 'Int' },
    { modifier: 3, name: 'Athletics', ability: 'Str' },
    { modifier: 7, name: 'Deception', ability: 'Cha' },
    { modifier: 2, name: 'History', ability: 'Int' },
    { modifier: 3, name: 'Insight', ability: 'Wis' },
    { modifier: 9, name: 'Intimidation', ability: 'Cha' },
    { modifier: 2, name: 'Investigation', ability: 'Int' },
    { modifier: 2, name: 'Medicine', ability: 'Wis' },
    { modifier: 2, name: 'Nature', ability: 'Int' },
    { modifier: 3, name: 'Perception', ability: 'Wis' },
    { modifier: 7, name: 'Performance', ability: 'Cha' },
    { modifier: 9, name: 'Persuasion', ability: 'Cha' },
    { modifier: 2, name: 'Religion', ability: 'Int' },
    { modifier: 4, name: 'Sleight of Hand', ability: 'Dex' },
    { modifier: 5, name: 'Stealth', ability: 'Dex' },
    { modifier: 2, name: 'Survival', ability: 'Wis' },
  ],
  currentHP: 40,
  maxHP: 42,
  temporaryHP: 0,
};
class CharacterCard extends Component {
  state = {
    showMoreInformation: false,
    maxHP: this.props.maxHP,
    currentHP: this.props.currentHP,
    temporaryHP: this.props.temporaryHP,
  };
  cardClick = () => {
    this.setState(prevState => ({
      showMoreInformation: !prevState.showMoreInformation,
    }));
  };
  handleClick = (e, value) => {
    e.preventDefault();
    e.stopPropagation();
    const val = parseInt(value);
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
  render() {
    return (
      <CharacterWrapper>
        <Paper
          elevation={4}
          onClick={this.cardClick}
          style={{ cursor: 'pointer' }}
        >
          <ContentWrapper>
            <CharacterInformation
              characterName={this.props.characterName}
              race={this.props.race}
              classType={this.props.classType}
            />
            <QuickStatWrapper>
              <QuickStats quickStats={this.props.quickStats} />
            </QuickStatWrapper>

            <AbilityWrapper>
              {this.props.abilityScores.map((obj, idx) => (
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
              maxHP={this.state.maxHP}
              currentHP={this.state.currentHP}
              temporaryHP={this.state.temporaryHP}
            />
            <IconButton
              color="secondary"
              onClick={e => this.handleClick(e, 1)}
              style={{ width: 'auto', height: 'auto', zIndex: 1000 }}
            >
              <AddIcon />
            </IconButton>
          </HealthBarWrapper>
        </Paper>
        {this.state.showMoreInformation && (
          <MoreInformation
            skills={this.props.skills}
            onHealthEdit={(e, val) => this.handleClick(e, val)}
          />
        )}
      </CharacterWrapper>
    );
  }
}

const AbilityWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-top: -30px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    justify-content: space-between;
    margin: 0;
  }
`;
const ContentWrapper = styled.span`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const StatWrapper = styled.div`
  margin-left: 5px;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
const QuickStatWrapper = styled.div`
  margin: 0 auto;
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

CharacterCard.propTypes = propTypes;
CharacterCard.defaultProps = defaultProps;

export default CharacterCard;
