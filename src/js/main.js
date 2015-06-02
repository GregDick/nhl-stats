angular
  .module('nhlStats', [])
  .controller('Stats', function(){
    var vm = this;
    vm.league = [
      {team: 'Rangers', division: 'M', wins: 53, losses: 22, otl: 7, p: 113, gf: 252, ga: 192, gdif: 60},
      {team: 'Capitals', division: 'M', wins: 45, losses: 26, otl: 11, p: 101, gf: 242, ga: 203, gdif: 39},
      {team: 'Islanders', division: 'M', wins: 47, losses: 28, otl: 7, p: 101, gf: 252, ga: 230, gdif: 22},
      {team: 'Penguins', division: 'M', wins: 43, losses: 27, otl: 12, p: 98, gf: 221, ga: 210, gdif: 11},
      {team: 'Blue Jackets', division: 'M', wins: 42, losses: 35, otl: 5, p: 89, gf: 236, ga: 250, gdif: -14},
      {team: 'Flyers', division: 'M', wins: 33, losses: 31, otl: 18, p: 84, gf: 215, ga: 234, gdif: -19},
      {team: 'Devils', division: 'M', wins: 32, losses: 36, otl: 14, p: 78, gf: 181, ga: 216, gdif: -35},
      {team: 'Hurricanes', division: 'M', wins: 30, losses: 41, otl: 11, p: 71, gf: 188, ga: 226, gdif: -38},
    ];
  });
