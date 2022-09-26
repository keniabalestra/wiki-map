DROP TABLE IF EXISTS locations CASCADE;

--Child of maps

CREATE TABLE locations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR (255) NOT NULL,
  description text NOT NULL,
  image VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE
 );
