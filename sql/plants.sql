DROP TABLE IF EXISTS plants;
DROP TABLE IF EXISTS plantSizeMenu;
DROP TABLE IF EXISTS lightLevelMenu;
DROP TABLE IF EXISTS easeOfCareMenu;
DROP TABLE IF EXISTS petSafeMenu;
DROP TABLE IF EXISTS menuTitles;

CREATE TABLE menuTitles (
		id SERIAL primary key,
		menuTitle VARCHAR(255) not null
);

INSERT INTO menuTitles (menuTitle) VALUES ('Select Plant Size');
INSERT INTO menuTitles (menuTitle) VALUES ('Select Light Level');
INSERT INTO menuTitles (menuTitle) VALUES ('Select Ease of Care');
INSERT INTO menuTitles (menuTitle) VALUES ('Select Pet Safe Requirement');

CREATE TABLE plantSizeMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Small', 'https://storage.googleapis.com/plant-me/plant-size_small.jpg');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Medium', 'https://storage.googleapis.com/plant-me/plant-size_medium.jpg');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Large', 'https://storage.googleapis.com/plant-me/plant-size_large.jpg');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Extra Large', 'https://storage.googleapis.com/plant-me/plant-size_extra-large.jpg');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Any Size', 'https://storage.googleapis.com/plant-me/plant-size_any.jpg');

CREATE TABLE lightLevelMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Minimal Light', 'https://storage.googleapis.com/plant-me/light-level_minimal.jpg');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Shade', 'https://storage.googleapis.com/plant-me/light-level_shade.jpg');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Indirect Light', 'https://storage.googleapis.com/plant-me/light-level_medium.jpg');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Bright Indirect', 'https://storage.googleapis.com/plant-me/light-level_bright-indirect.jpg');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Bright Direct', 'https://storage.googleapis.com/plant-me/light-level_bright-direct.jpg');

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
INSERT INTO petSafeMenu (cardTitle, image) VALUES ('Doesn''t Matter', 'https://storage.googleapis.com/plant-me/pet_safe-not_important.jpg');
