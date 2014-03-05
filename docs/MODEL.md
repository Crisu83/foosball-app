Model
=====

This document explains the data model behind this application.

## League

The league represents a single league that can contain any number of teams.

- id: number, unique identifier
- name: string league name
- teams: Team[], associated teams (n)

## Team

The team represents a single team of 1 or more players.

- id: number, unique identifier
- name: string, team name
- players: Player[], associated players (1-n)

## Player

The player represents a single player that can belong to any number of teams.

- id: number, unique identifier
- name: string, player name
- raiting: number, player ELO rating
- teams: Team[], associated teams (n)

## Match

The match represents a single match that is or has been played between two teams.

- id: number, unique identifier
- homeTeam: Team, associated home team
- awayTeam: Team, associated away team
- homeGoals: number, amount of goals for the home team
- awayGoals: number, amount of goals for the away team
- goalsToWin: number, amount of goals required to win the match
- startTime: date, date when the game started
- endTime: date, when the game ended

## Match log

The match log is a keeps track on who played which position in a certain match.

- match: Match, associated match
- team: Team, associated team
- player: Player, associated player
- position: string, position played (attacker/defender)

Keep in mind that this is a high-level overview of the application data model and it could change during development.
That said it should still give a decent picture of how the data is structured within the application.