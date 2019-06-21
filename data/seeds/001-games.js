exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("table_name")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("games").insert([
        {
          title: "Pacman",
          genre: "Arcade",
          releaseYear: 1980
        },
        {
          title: "The Sims",
          genre: "Simulation",
          releaseYear: 2001
        },
        {
          title: "Spades",
          genre: "Card",
          releaseYear: 2001
        }
      ]);
    });
};
