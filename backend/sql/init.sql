CREATE TABLE sondages(
   id SERIAL,
   nom VARCHAR(50) NOT NULL,
   date_ouverture TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
   date_cloture TIMESTAMP,
   url TEXT,
   createur VARCHAR(50) NOT NULL,
   est_anonyme BOOLEAN NOT NULL DEFAULT TRUE,
   PRIMARY KEY(id),
   UNIQUE(url)
);

CREATE TABLE question_type(
   type VARCHAR(50),
   PRIMARY KEY(type)
);

CREATE TABLE reponses(
   id SERIAL,
   nom_repondant VARCHAR(50),
   date_ TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
   id_1 INTEGER NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_1) REFERENCES sondages(id)
);

CREATE TABLE questions(
   id SERIAL,
   question TEXT NOT NULL,
   est_requis BOOLEAN NOT NULL DEFAULT TRUE,
   ordre INTEGER,
   parametres TEXT,
   type VARCHAR(50) NOT NULL,
   id_sondage INTEGER NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(type) REFERENCES question_type(type),
   FOREIGN KEY(id_sondage) REFERENCES sondages(id)
);

CREATE TABLE propositions(
   id SERIAL,
   text TEXT,
   id_question INTEGER NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_question) REFERENCES questions(id)
);

CREATE TABLE valeurs_reponses(
   id SERIAL,
   text TEXT,
   chiffre INTEGER,
   id_question INTEGER NOT NULL,
   id_proposition INTEGER,
   id_reponse INTEGER NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_question) REFERENCES questions(id),
   FOREIGN KEY(id_proposition) REFERENCES propositions(id),
   FOREIGN KEY(id_reponse) REFERENCES reponses(id)
);
