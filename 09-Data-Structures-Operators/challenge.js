//
//
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//
// // 1. Create one player array for each team (variables 'players1' and 'players2')
//
// const [players1, players2] = game.players;
// // console.log(players1, players2)
//
//
// // 2. The first player in any player array is the goalkeeper and the others
// // are field players. For Bayern Munich (team 1) create one variable ('gk') with
// // the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // field players
//
// const [goalkeeper, ...fieldPlayers] = players1
// // console.log(goalkeeper, fieldPlayers)
//
// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
//
// const allPlayers = [...players1, ...players2]
// // console.log(allPlayers)
//
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players.
// // So create a new array ('players1Final') containing all the original team1
// // players plus 'Thiago', 'Coutinho' and 'Perisic'
// const substitutePlayer = ['Thiago', 'Coutinho',  'Perisic'];
// const players1Final = [...players1, ...substitutePlayer];
// // console.log(players1Final)
//
// // 5. Based on the game.odds object, create one variable for
// // each odd (called 'team1', 'draw' and 'team2')
// // const {
// //     odds : { team1, x: draw, team2} ,
// // } = game
// // console.log(team1, team2, draw);
// // const {
// //      team1, x: draw, team2
// // } = game.odds
// // console.log(team1, team2, draw);
//
//
// //6. Write a function ('printGoals') that receives an arbitrary number of
// // player names (NOT an array) and prints each of them to the console,
// // along with the number of goals that were scored in total
// // (number of player names passed in)
//
// const printGoals = function (...player){
//         console.log(player);
//         console.log(`${player.length} goals were scored` )
//
// }
//
// // printGoals(...game.scored)
//
// //7. The team with the lower odd is more likely to win.
// // Print to the console which team is more likely to win,
// // WITHOUT using an if/else statement or the ternary operator.
//
// const { odds:{team1,x, team2},} = game
//
//
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');


/*
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
*/

// for ([number,player] of game.scored.entries()){
//     console.log(`Goal ${number+1}: ${player}`);
// }


/*

2. Use a loop to calculate the average odd and log it to the console
(We already studied how to calculate averages, you can go check if you don't remember)
*/

// let average = 0;
// for (let odd of Object.values(game.odds)) average += odd;
// average /= Object.values(game.odds).length;
// console.log(average)
/*
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
      Get the team names directly from the game object, don't hardcode them (except for "draw").
       HINT: Note how the odds and the game objects have the same property names 😉
*/

// const {
//     odds : { team1, x: draw, team2},
// } = game;
//
// console.log(`Odd of victory ${game.team1}: ${team1}`)
// console.log(`Odd of draw : ${draw}`)
// console.log(`Odd of victory ${game.team2}: ${team2}`)

// for ([team, score] of Object.entries(game.odds)){
//     const result = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${result}: ${score}`)
// }


/*

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties,
and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/
// const scores= {};
// for (let player of game.scored) scores[player] ?  scores[player]++ : scores[player] =1;
//
//
// console.log(scores)




// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a
log of the events that happened during the game. The values are the events themselves,
and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// const events = new Set() //const events = [...new Set([...gameEvents.values()])]
//
// for (const [key, value] of gameEvents){
//     events.add(value);
// }
// console.log([...events])
// gameEvents.delete(64);
// console.log(gameEvents)
//
// console.log(
//     `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// [
//     "⚽️ GOAL",
//     "🔁 Substitution",
//     "🔶 Yellow card",
//     "🔴 Red card"
// ]

// for (const [key, value] of gameEvents){
//     key <=45 ?  console.log(`[FIRST HALF] ${key} : ${value}`) : console.log(`[SECOND HALF] ${key} : ${value}`);
// }
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
// */
// for (const [min, event] of gameEvents) {
//     const half = min <= 45 ? 'FIRST' : 'SECOND';
//     console.log(`[${half} HALF] ${min}: ${event}`);
// }




/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

document.body.append(document.createElement(
    'textarea'
));
document.body.append(document.createElement('button'));
const convert = function (){
    const underscoreCase = document.querySelector('textarea').value.split('\n');
    for(const [i, word] of underscoreCase.entries())
    {
        const [first, last] = word.trim().split('_')
        console.log(`${first.toLowerCase()}${last[0].toUpperCase()}${last.slice(1).toLowerCase()}`, '✅'.repeat(i+1))
    }

}
document.querySelector('button').addEventListener("click",convert )

// const underscore_case = ['underscore_case', ' first_name', 'Some_Variable', 'delayed_departure', '  calculate_AGE']
// // console.log(underscore_case)
// console.log(convert(underscore_case))