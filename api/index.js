const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './api/.env' });

const cors = require('cors');
const routes = require('./routes/index');
const volleyball = require('volleyball');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Recruiter = require('./models/Recruiter');
const db = require('./config/db');

app.use(cors());

app.use(express.json());

app.use(volleyball);

app.use(cookieParser());

app.use(
  sessions({
    secret: 'bumeranSelecta',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function (email, password, done) {
      Recruiter.findOne({ where: { email } })
        .then((recruiter) => {
          if (!recruiter) {
            return done(null, false);
          }
          recruiter.hash(password, recruiter.salt).then((hash) => {
            if (hash !== recruiter.password) {
              return done(null, false);
            }
            return done(null, recruiter);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (recruiter, done) {
  done(null, recruiter.id);
});

passport.deserializeUser(function (id, done) {
  Recruiter.findByPk(id)
    .then((recruiter) => {
      done(null, recruiter);
    })
    .catch(done);
});

app.use('/api', routes);

db.sync({ force: false }).then(() => {
  app.listen(8000, () => console.log('Escuchando en el puerto 8000'));
});
//
