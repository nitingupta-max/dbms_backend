const Pool = require('pg').Pool  // pg package name
const pool = new Pool({
  user: 'nitin',
  host: 'localhost',
  database: 'dbmsProject',
  password: '',
  port: 5432,
})
const getTeams = (request, response) => {
  pool.query('SELECT * FROM teams', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getManagers = (request, response) => {

  pool.query('SELECT * FROM managers', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getPlayers = (request, response) => {

  pool.query('SELECT * FROM players', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getMatch = (request, response) => {

  pool.query('SELECT * FROM matches', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getReferee = (request, response) => {

  pool.query('SELECT * FROM referees', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
const getMatchReferees = (request, response) => {

  pool.query('SELECT * FROM match_referees', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// const createUser = (request, response) => {
//   const { name, email } = request.body

//   pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${result.insertId}`)
//   })
// }

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const { name, email } = request.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }

module.exports = {
  getTeams,
  getManagers,
  getPlayers,
  getMatch,
  getReferee,
  getMatchReferees
}
