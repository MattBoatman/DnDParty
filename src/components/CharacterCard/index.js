import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import HealthIndicator from '../HealthIndicator';
import QuickStats from '../QuickStats';
import StatCard from '../StatCard';
import CharacterInformation from '../CharacterInformation';
import styled from 'styled-components';

const propTypes = {
  characterName: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  quickStats: PropTypes.array.isRequired,
  abilityScores: PropTypes.array.isRequired,
};
const defaultProps = {
  characterName: 'Tug Purple Beard',
  race: 'Hill Dwarf',
  classType: 'Lore Bard',
  quickStats: [
    { type: 'AC', value: 16 },
    { type: 'PP', value: 10 },
    { type: 'Speed', value: 25 },
    { type: 'Spell Save', value: 16 },
  ],
  abilityScores: [
    { stat: 'CON', score: 16, modifier: 2 },
    { stat: 'WIS', score: 16, modifier: 2 },
    { stat: 'STR', score: 16, modifier: 2 },
    { stat: 'INT', score: 16, modifier: 2 },
    { stat: 'CHA', score: 16, modifier: 2 },
  ],
};
class CharacterCard extends Component {
  render() {
    return (
      <CharacterWrapper>
        <Paper elevation={4}>
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
              {this.props.abilityScores.map(obj => (
                <StatWrapper>
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
            <HealthIndicator />
          </HealthBarWrapper>
        </Paper>
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
`;
const ContentWrapper = styled.span`
  display: flex;
`;
const StatWrapper = styled.div`
  margin-left: 5px;
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
`;
const MiddleText = styled.div`
  display: flex;
  position: absolute;
  width: 50%;
  top: 0;
  right: 0;
  justify-content: space-between;
`;

CharacterCard.propTypes = propTypes;
CharacterCard.defaultProps = defaultProps;

export default CharacterCard;
