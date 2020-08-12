DROP TABLE IF EXISTS plants;
DROP TABLE IF EXISTS plantSizeMenu;
DROP TABLE IF EXISTS lightLevelMenu;
DROP TABLE IF EXISTS easeOfCareMenu;
DROP TABLE IF EXISTS petSafeMenu;
DROP TABLE IF EXISTS menuTitles;
DROP TABLE IF EXISTS guideTitles;
DROP TABLE IF EXISTS stepperText;

CREATE TABLE plants (
		id SERIAL primary key,
		name VARCHAR(255) not null,
		plantSize INTEGER[] NOT NULL,
		lightLevel INTEGER[] NOT NULL,
		easeOfCare INTEGER NOT NULL,
		petSafe VARCHAR(255) not null,
		image VARCHAR not null
);

INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Spider Plant', '{1, 2}', '{1, 2, 3, 4}', 1, 'Y', 'https://storage.googleapis.com/plant-me/plants/Spider%20Plant.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Peace Lily', '{1, 2, 3}', '{1, 2, 3}', 1, 'N', 'https://storage.googleapis.com/plant-me/plants/Peace%20Lily.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Sweetheart Plant', '{1, 2, 3}', '{1, 2}', 1, 'N', 'https://storage.googleapis.com/plant-me/plants/Sweetheart%20Plant.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Hot Lips', '{1}', '{1, 2, 3, 4, 5}', 2, 'Y', 'https://storage.googleapis.com/plant-me/plants/Hot%20Lips.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Echeveria', '{1}', '{4, 5}', 1, 'Y', 'https://storage.googleapis.com/plant-me/plants/Echeveria.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Devil''s Ivy', '{1, 2, 3}', '{1, 2, 3}', 1, 'N', 'https://storage.googleapis.com/plant-me/plants/Devil''s%20Ivy.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Swiss Cheese Plant', '{1, 2, 3}', '{1, 2, 3}', 1, 'N', 'https://storage.googleapis.com/plant-me/plants/Monstera%20Deliciosa.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Cast Iron Plant', '{1}', '{3}', 1, 'N', 'https://storage.googleapis.com/plant-me/plants/Cast%20Iron%20Plant.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Chinese Money Plant', '{1}', '{3}', 2, 'Y', 'https://storage.googleapis.com/plant-me/plants/Chinese%20Evergreen.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Pony Tail Palm', '{1, 2}', '{4, 5}', 1, 'Y', 'https://storage.googleapis.com/plant-me/plants/Pony%20Tail%20Palm.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Wandering Plant', '{1}', '{4}', 3, 'N', 'https://storage.googleapis.com/plant-me/plants/Wondering%20Plant.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Marble Queen', '{1}', '{4}', 1, 'N', 'https://storage.googleapis.com/plant-me/plants/Marble%20Queen.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Rubber Plant', '{1, 2}', '{3, 4}', 2, 'Y', 'https://storage.googleapis.com/plant-me/plants/Rubber%20Plant.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Mini Monstera', '{1}', '{4}', 1, 'N', 'https://storage.googleapis.com/plant-me/plants/Mini%20Monstera.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Snake Plant', '{1}', '{4}', 1, 'N', 'https://storage.googleapis.com/plant-me/plants/Snake%20Plant.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Prickly Pear', '{1}', '{5}', 1, 'Y', 'https://storage.googleapis.com/plant-me/plants/Prickly%20Pear.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Zebra Plant', '{1}', '{2, 3, 4}', 2, 'Y', 'https://storage.googleapis.com/plant-me/plants/Zebra%20Plant.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Chinese Evergreen', '{1, 2}', '{1, 2, 3}', 1, 'N', 'https://storage.googleapis.com/plant-me/plants/Chinese%20Evergreen.jpg');
INSERT INTO plants (name, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Rattlesnake Plant', '{1, 2}', '{1, 2, 3}', 2, 'Y', 'https://storage.googleapis.com/plant-me/plants/Rattlesnake%20Plant.jpg');

CREATE TABLE menuTitles (
		id SERIAL primary key,
		menuTitle VARCHAR(255) not null
);

INSERT INTO menuTitles (menuTitle) VALUES ('Select Plant Size');
INSERT INTO menuTitles (menuTitle) VALUES ('Select Light Level');
INSERT INTO menuTitles (menuTitle) VALUES ('Select Care Level');
INSERT INTO menuTitles (menuTitle) VALUES ('Pet Safe?');

CREATE TABLE guideTitles (
		id SERIAL primary key,
		guideTitle VARCHAR(255) not null
);

INSERT INTO guideTitles (guideTitle) VALUES ('Size Guide');
INSERT INTO guideTitles (guideTitle) VALUES ('Light Level Guide');

CREATE TABLE plantSizeMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null,
    guideInfo VARCHAR(255)
);

INSERT INTO plantSizeMenu (cardTitle, image, guideInfo) VALUES ('Small', 'https://storage.googleapis.com/plant-me/plant-size_small.jpg', '0 - 80cm');
INSERT INTO plantSizeMenu (cardTitle, image, guideInfo) VALUES ('Medium', 'https://storage.googleapis.com/plant-me/plant-size_medium.jpg', '60 - 150cm');
INSERT INTO plantSizeMenu (cardTitle, image, guideInfo) VALUES ('Large', 'https://storage.googleapis.com/plant-me/plant-size_large.jpg', '130 - 200cm');
INSERT INTO plantSizeMenu (cardTitle, image, guideInfo) VALUES ('Extra Large', 'https://storage.googleapis.com/plant-me/plant-size_extra-large.jpg', '180cm +');
INSERT INTO plantSizeMenu (cardTitle, image, guideInfo) VALUES ('Any Size', 'https://storage.googleapis.com/plant-me/plant-size_any.jpg', 'Any Size');

CREATE TABLE lightLevelMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null,
    guideInfo VARCHAR(255)
);

INSERT INTO lightLevelMenu (cardTitle, image, guideInfo) VALUES ('Minimal Light', 'https://storage.googleapis.com/plant-me/light-level_minimal.jpg', 'Plant situated in dark room with little to no light');
INSERT INTO lightLevelMenu (cardTitle, image, guideInfo) VALUES ('Shade', 'https://storage.googleapis.com/plant-me/light-level_shade.jpg', 'Plant situated in darker part of room (such as a shadow)');
INSERT INTO lightLevelMenu (cardTitle, image, guideInfo) VALUES ('Indirect Light', 'https://storage.googleapis.com/plant-me/light-level_medium.jpg', 'Plant situated in medium-lit room with no direct light');
INSERT INTO lightLevelMenu (cardTitle, image, guideInfo) VALUES ('Bright Indirect', 'https://storage.googleapis.com/plant-me/light-level_bright-indirect.jpg', 'Plant situated in brightly lit room with no direct light');
INSERT INTO lightLevelMenu (cardTitle, image, guideInfo) VALUES ('Bright Direct', 'https://storage.googleapis.com/plant-me/light-level_bright-direct.jpg', 'Plant situated in brightly lit room receiving direct light from window');

CREATE TABLE easeOfCareMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO easeOfCareMenu (cardTitle, image) VALUES ('Easy', 'https://storage.googleapis.com/plant-me/difficulty-levels_easy.jpg');
INSERT INTO easeOfCareMenu (cardTitle, image) VALUES ('Medium', 'https://storage.googleapis.com/plant-me/difficulty_levels-medium.jpg');
INSERT INTO easeOfCareMenu (cardTitle, image) VALUES ('Difficult', 'https://storage.googleapis.com/plant-me/difficulty_levels-difficult.jpg');

CREATE TABLE petSafeMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO petSafeMenu (cardTitle, image) VALUES ('Safe', 'https://storage.googleapis.com/plant-me/pet_safe-safe.jpg');
INSERT INTO petSafeMenu (cardTitle, image) VALUES ('Not Important', 'https://storage.googleapis.com/plant-me/pet_safe-not_important.jpg');

CREATE TABLE stepperText (
    id SERIAL primary key,
    text VARCHAR(255) not null
);

INSERT INTO stepperText (text) VALUES ('Plant Size');
INSERT INTO stepperText (text) VALUES ('Light Level');
INSERT INTO stepperText (text) VALUES ('Ease of Care');
INSERT INTO stepperText (text) VALUES ('Pet Safe?');
