"use strict";
const DATA_GAME_TILESETS = {
    0: {
        1: 'secret',
        2: 'discard',
        3: 'gift-2',
        4: 'competition-2-2',
    },
    1: {
        1: 'discard',
        2: 'secret',
        3: 'intercept-2',
        4: 'gift-2',
    },
    2: {
        1: 'giveaway',
        2: 'reveal',
        3: 'gift-2',
        4: 'intercept',
    },
    3: {
        1: 'reveal',
        2: 'referral',
        3: 'intercept-1',
        4: 'gift-3',
    },
    4: {
        1: 'referral',
        2: 'discard',
        3: 'competition-2-1',
        4: 'gift-1',
    },
    5: {
        1: 'secret',
        2: 'referral',
        3: 'discard',
        4: 'gift-2',
    },
    6: {
        1: 'giveaway',
        2: 'gift-1',
        3: 'reveal',
        4: 'intercept-3',
    },
    7: {
        1: 'secret',
        2: 'gift-1',
        3: 'discard',
        4: 'competition-2-2',
    },
};
const DATA_GAME_RULES = {
    secret: 'Place x item card(s) facedown. These are played to your side at the end of the game.',
    discard: 'Discard x item card(s) facedown. These are not scored at the end of the round.',
    gift: 'Place x item card(s) faceup. Your opponent picks and plays y item card(s). You play the other(s).',
    competition: 'Place 2 sets of item card(s) faceup. One set has y cards, the other has z cards. Your opponent picks and plays one set. You play the other.',
    intercept: 'Place x item card(s) faceup. Your opponent discards y item card(s), You play the other(s).',
    giveaway: "Place x item card(s) facedown. These are played to your opponent's side at the end of the game.",
    reveal: 'Place and play x item card(s) to your side.',
    referral: 'Place x item card(s) back to the bottom of the draw deck. Play x item card(s) directly from the top of the draw deck to your side.',
};
