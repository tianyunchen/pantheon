import { IAppState } from '../interfaces';
import { LUser } from '../../../interfaces/local';
import { uniq } from 'lodash';
import { memoize } from '../../../helpers/memoize';

const DEFAULT_ID = -1;
export const defaultPlayer: Readonly<LUser> = {
  displayName: '--- ? ---',
  id: DEFAULT_ID
};

function _getPlayers(state: IAppState) {
  const players = [...(state.allPlayers || [])];
  let currentUserIndex = players.findIndex((element) => element.id == state.currentPlayerId);
  let currentPlayer = players.splice(currentUserIndex, 1);
  const otherPlayers = players.filter(
    (p) => state.newGameSelectedUsers && !state.newGameSelectedUsers.map((u) => u.id).includes(p.id)
  ).sort((a, b) => {
    if (a == b) {
      return 0;
    }
    return (a.displayName < b.displayName ? -1 : 1);
  });

  return [
    defaultPlayer,
    // Do not add current player if they're already selected in any field
    ...(currentPlayer.length > 0 && state.newGameSelectedUsers.map((u) => u.id).includes(currentPlayer[0].id) ? [] : currentPlayer),
    ...otherPlayers
  ];
}

export const getPlayers = memoize(_getPlayers);

function _playersValid(state: IAppState) {
  if (!state.newGameSelectedUsers) {
    return false;
  }

  const ids = state.newGameSelectedUsers.map((p) => p.id);

  // all players should have initialized ids
  if (ids.indexOf(DEFAULT_ID) !== -1) {
    return false;
  }

  // There must be Current Player
  if (ids.indexOf(state.currentPlayerId) == -1) {
    return false;
  }

  // all players should be unique
  return uniq(ids).length == 4;
}

export const playersValid = memoize(_playersValid);
