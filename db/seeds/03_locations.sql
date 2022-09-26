-- 3 preset maps are given 5 locations to add interest to the maps. Just enough details provided.
-- Each location has a FK which relates back to the map.

--sample data od location pins for Van eats. Correlates to the map which has the name 'Where to eat Toronto'


INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Mahas', 'Egyptian brunch spot', 'https://images.app.goo.gl/zDf4iSGhCeTWaHDfA', 43.6717134, -79.3307205, 1);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Khmer Thai', 'Cambodian family that makes the best food and wants to retire but the neighborhood wont let them!', 'https://images.app.goo.gl/UivazTAb5goKUFDH8', 43.6790045, -79.4404215, 1);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Campacheno', 'Sweet lil taco spot!', 'https://images.app.goo.gl/PSMMMt1F96CdPcMNA', 43.6512158, -79.4090181, 1);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Rasta Pasta', 'Exactly what it sounds like.', 'https://images.app.goo.gl/5RTmqG2ktBYwFtvQ7', 43.6717134, -79.3307205, 1);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Union', 'Locally sourced, kinda french, food focused. No music.', 'https://images.app.goo.gl/5RTmqG2ktBYwFtvQ7', 43.6458179, -79.4217631, 1);

--sample data od location pins for Van eats. Correlates to the map which has the name 'Where to eat Montreal'

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Patati Patata', 'Sweet and petite', 'https://goo.gl/maps/pho2biie47fRn36U7', 45.5180529, -73.603119, 2);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Le Mousso', 'Fancy food.', 'https://goo.gl/maps/xcY1RE7evZPchUh68', 45.520015, -73.56327, 2);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Au Pied de Cochon', 'Rich French Canadian food.', 'https://images.app.goo.gl/EmMEVvJ69KuMuHVC9', 45.4964391, -75.7747612, 2);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Depanneur Le Pick Up', 'Veggies welcome.', 'https://images.app.goo.gl/iV3M3xFeDJ6T5on96', 45.53162562268097, -73.61791192208705, 2);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Green Spot', 'You may have left your one night stand, but Green will always be there for you.', 'https://images.app.goo.gl/fJ1LpLBgdvyBdTUu5', 45.4809248, -73.5788376, 2);

--sample data od location pins for Van eats. Correlates to the map which has the name 'Where to eat Vancouver'

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Pho Tan', 'The peanut butter pho will change your life.', 'https://images.app.goo.gl/uq8tbGE7AGKKs3aA7', 49.2343187, -123.1547549, 3);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('De Beppe', 'Fun place for Italian any time of day.', 'https://images.app.goo.gl/iHikzUXsNrYkGF1u7', 45.520015, -73.56327, 3);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('Tacofino', 'I mean, its not as good as it from the truck on the island, but still...', 'https://images.app.goo.gl/b76JQfhuzqh9yns18', 45.4964391, -75.7747612, 3);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('The Diamond', 'Every once in awhile olive martinis count as dinner. With gin, duh.', 'https://images.app.goo.gl/RyvLzkRwXBvHKMLh7', 49.267891, -73.61791192208705, 3);

INSERT INTO locations (name, description, image, latitude, longitude, map_id)
VALUES ('The Naam', 'Once youve realized you shouldnt have had martinis for dinner and realize you are in Vancouver and everywhere else to eat closed 3 hours ago... then you realize life aint so bad.', 'https://images.app.goo.gl/LtomzuA9N5duEKhV7', 45.4809248, -123.168285, 3);
