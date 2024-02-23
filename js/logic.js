function _0x1ea2(_0x3f2c2c, _0x5ce5d2) {
    var _0x26f29d = _0x26f2();
    return _0x1ea2 = function(_0x1ea2e4, _0x10df5d) {
        _0x1ea2e4 = _0x1ea2e4 - 0x16d;
        var _0x434823 = _0x26f29d[_0x1ea2e4];
        return _0x434823;
    }
    ,
    _0x1ea2(_0x3f2c2c, _0x5ce5d2);
}
var _0x53e3f1 = _0x1ea2;
(function(_0x9f38d6, _0x2e90bb) {
    var _0x2a91eb = _0x1ea2
      , _0x198d01 = _0x9f38d6();
    while (!![]) {
        try {
            var _0x3d6626 = -parseInt(_0x2a91eb(0x17a)) / 0x1 + -parseInt(_0x2a91eb(0x172)) / 0x2 * (parseInt(_0x2a91eb(0x18a)) / 0x3) + parseInt(_0x2a91eb(0x171)) / 0x4 + -parseInt(_0x2a91eb(0x189)) / 0x5 + parseInt(_0x2a91eb(0x180)) / 0x6 + -parseInt(_0x2a91eb(0x175)) / 0x7 * (parseInt(_0x2a91eb(0x17e)) / 0x8) + parseInt(_0x2a91eb(0x174)) / 0x9;
            if (_0x3d6626 === _0x2e90bb)
                break;
            else
                _0x198d01['push'](_0x198d01['shift']());
        } catch (_0xed6dac) {
            _0x198d01['push'](_0x198d01['shift']());
        }
    }
}(_0x26f2, 0x74ee5));
var currentQuestionIndex = 0x0, time = questions[_0x53e3f1(0x194)] * 0xf, timerId, questionsEl = document[_0x53e3f1(0x19b)](_0x53e3f1(0x198)), timerEl = document[_0x53e3f1(0x19b)]('time'), choicesEl = document[_0x53e3f1(0x19b)](_0x53e3f1(0x187)), submitBtn = document[_0x53e3f1(0x19b)](_0x53e3f1(0x178)), startBtn = document[_0x53e3f1(0x19b)](_0x53e3f1(0x18c)), initialsEl = document[_0x53e3f1(0x19b)]('initials'), feedbackEl = document[_0x53e3f1(0x19b)](_0x53e3f1(0x177)), sfxRight = new Audio(_0x53e3f1(0x173)), sfxWrong = new Audio('assets/sfx/incorrect.wav');
function startQuiz() {
    var _0x92e0bb = _0x53e3f1
      , _0x350ba9 = document[_0x92e0bb(0x19b)]('start-screen');
    _0x350ba9[_0x92e0bb(0x16d)]('class', 'hide'),
    questionsEl[_0x92e0bb(0x196)](_0x92e0bb(0x183)),
    timerId = setInterval(clockTick, 0x3e8),
    timerEl[_0x92e0bb(0x170)] = time,
    getQuestion();
}
function _0x26f2() {
    var _0x468996 = ['11942hGQLlN', 'highscores.html', 'feedback', 'submit', 'onkeyup', '429159sCwJlg', 'push', 'parse', 'Wrong!', '344VPQBTV', 'final-score', '2575182ZbjAKZ', 'button', 'onclick', 'class', 'key', 'trim', 'feedback\x20hide', 'choices', 'createElement', '3718845jKGjXl', '487791gbjJrM', 'play', 'start', 'innerHTML', 'setItem', 'choice', 'appendChild', '.choice', 'getItem', 'localStorage', 'length', 'question-title', 'removeAttribute', 'value', 'questions', 'highscores', 'title', 'getElementById', 'setAttribute', 'Enter', 'hide', 'textContent', '2993852fUAoxH', '4OkGsFF', 'assets/sfx/correct.wav', '7854921qDABNB'];
    _0x26f2 = function() {
        return _0x468996;
    }
    ;
    return _0x26f2();
}
function getQuestion() {
    var _0x21476a = _0x53e3f1
      , _0x4c33b9 = questions[currentQuestionIndex]
      , _0x56afb2 = document[_0x21476a(0x19b)](_0x21476a(0x195));
    _0x56afb2['textContent'] = _0x4c33b9[_0x21476a(0x19a)],
    choicesEl[_0x21476a(0x18d)] = '';
    for (var _0x103760 = 0x0; _0x103760 < _0x4c33b9[_0x21476a(0x187)]['length']; _0x103760++) {
        var _0x187b71 = _0x4c33b9[_0x21476a(0x187)][_0x103760]
          , _0x249192 = document[_0x21476a(0x188)](_0x21476a(0x181));
        _0x249192[_0x21476a(0x16d)]('class', _0x21476a(0x18f)),
        _0x249192[_0x21476a(0x16d)](_0x21476a(0x197), _0x187b71),
        _0x249192[_0x21476a(0x170)] = _0x103760 + 0x1 + '.\x20' + _0x187b71,
        choicesEl[_0x21476a(0x190)](_0x249192);
    }
}
function questionClick(_0x3de327) {
    var _0x19a154 = _0x53e3f1
      , _0x4e12d7 = _0x3de327['target'];
    if (!_0x4e12d7['matches'](_0x19a154(0x191)))
        return;
    _0x4e12d7[_0x19a154(0x197)] !== questions[currentQuestionIndex]['answer'] ? (time -= 0xf,
    time < 0x0 && (time = 0x0),
    timerEl[_0x19a154(0x170)] = time,
    sfxWrong[_0x19a154(0x18b)](),
    feedbackEl[_0x19a154(0x170)] = _0x19a154(0x17d)) : (sfxRight[_0x19a154(0x18b)](),
    feedbackEl[_0x19a154(0x170)] = 'Correct!'),
    feedbackEl[_0x19a154(0x16d)](_0x19a154(0x183), _0x19a154(0x177)),
    setTimeout(function() {
        var _0x119db7 = _0x19a154;
        feedbackEl[_0x119db7(0x16d)](_0x119db7(0x183), _0x119db7(0x186));
    }, 0x3e8),
    currentQuestionIndex++,
    time <= 0x0 || currentQuestionIndex === questions['length'] ? quizEnd() : getQuestion();
}
function quizEnd() {
    var _0x3c7241 = _0x53e3f1;
    clearInterval(timerId);
    var _0x1b304e = document[_0x3c7241(0x19b)]('end-screen');
    _0x1b304e['removeAttribute'](_0x3c7241(0x183));
    var _0x5771d6 = document['getElementById'](_0x3c7241(0x17f));
    _0x5771d6[_0x3c7241(0x170)] = time,
    questionsEl['setAttribute'](_0x3c7241(0x183), _0x3c7241(0x16f));
}
function clockTick() {
    var _0x338c7f = _0x53e3f1;
    time--,
    timerEl[_0x338c7f(0x170)] = time,
    time <= 0x0 && quizEnd();
}
function saveHighscore() {
    var _0x5ab59d = _0x53e3f1
      , _0x4011c7 = initialsEl['value'][_0x5ab59d(0x185)]();
    if (_0x4011c7 !== '') {
        var _0x42a87d = JSON[_0x5ab59d(0x17c)](window[_0x5ab59d(0x193)][_0x5ab59d(0x192)]('highscores')) || []
          , _0xae8a97 = {
            'score': time,
            'initials': _0x4011c7
        };
        _0x42a87d[_0x5ab59d(0x17b)](_0xae8a97),
        window[_0x5ab59d(0x193)][_0x5ab59d(0x18e)](_0x5ab59d(0x199), JSON['stringify'](_0x42a87d)),
        window['location']['href'] = _0x5ab59d(0x176);
    }
}
function checkForEnter(_0x315b5f) {
    var _0x14da97 = _0x53e3f1;
    _0x315b5f[_0x14da97(0x184)] === _0x14da97(0x16e) && saveHighscore();
}
submitBtn[_0x53e3f1(0x182)] = saveHighscore,
startBtn['onclick'] = startQuiz,
choicesEl[_0x53e3f1(0x182)] = questionClick,
initialsEl[_0x53e3f1(0x179)] = checkForEnter;
