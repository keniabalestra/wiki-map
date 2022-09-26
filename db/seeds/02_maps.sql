--sample data for 3 maps to place pins for good places to eat.
--users should be able to view any of the presets and choose favourite them.
--Once favourited, they should be able to edit them.
--If they edit them, should the edited version be created into a new map with a new id unique to that user?
--If

INSERT INTO maps (title, latitude, longitude, zoom, user_id)
VALUES ('Where To Eat Toronto', 43.7181557, -79.518143, 13, 1);

INSERT INTO maps (title, latitude, longitude, zoom, user_id)
VALUES ('Where To Eat Montreal', 45.5591827, -73.7118733, 13, 2);

INSERT INTO maps (title, latitude, longitude, zoom, user_id)
VALUES ('Where To Eat Vancouver', 49.2577143, -123.1939439, 13, 3);
;
