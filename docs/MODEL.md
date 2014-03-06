Model
=====

This document explains the data model in this application.

## League

The league represents a single league that can contain any number of teams.

- id: number, unique identifier
- name: string league name
- teams: Team[], associated teams (n)

## Team

The team represents a single team of 1 or more players.

- id: number, unique identifier
- name: string, team name
- players: Player[], associated players (1-2)
- league: League, associated league (1)

## Player

The player represents a single player that can belong to any number of teams.

- id: number, unique identifier
- name: string, player name
- rating: number, player ELO rating
- teams: Team[], associated teams (n)
- league: League, associated league (1)

## Match

The match represents a single match that is or has been played between two teams.

- id: number, unique identifier
- homeTeam: Team, associated home team (1)
- awayTeam: Team, associated away team (1)
- homeGoals: number, amount of goals for the home team
- awayGoals: number, amount of goals for the away team
- goalsToWin: number, amount of goals required to win the match
- minGoalDiff: number, minumum number of goal difference required to win (1-2)
- startTime: date, date when the game started
- endTime: date, when the game ended
- league: League, associated league (1)

## Goal log

The goal log stores player specific statistics for each match.

- match: Match, associated match
- team: Team, associated team
- player: Player, associated player
- position: enum, position played (attacker/defender/both)
- goals: int, number of goals scored

__Keep in mind that this is a high-level overview of the application data model and it could change during development.
That said it should still give a decent picture of how the data is structured within the application.__
