DROP TABLE IF EXISTS maps CASCADE;

--Child of the user
--Parent of locations

CREATE TABLE  maps (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR (255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  zoom INTEGER DEFAULT 13,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);
