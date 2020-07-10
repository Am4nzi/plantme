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

INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Small', 'https://storage.cloud.google.com/plant-me/plant-size_small.jpg?supportedpurview=project');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Medium', 'https://storage.cloud.google.com/plant-me/plant-size_medium.jpg?supportedpurview=project');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Large', 'https://storage.cloud.google.com/plant-me/plant-size_large.jpg?supportedpurview=project');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Extra Large', 'https://storage.cloud.google.com/plant-me/plant-size_extra-large.jpg?supportedpurview=project');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Any Size', 'https://storage.cloud.google.com/plant-me/plant-size_any.jpg?supportedpurview=project');

CREATE TABLE lightLevelMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Minimal Light', 'https://storage.cloud.google.com/plant-me/light-level_minimal.jpg?folder&organizationId');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Shade', 'https://storage.cloud.google.com/plant-me/light-level_shade.jpg?folder&organizationId');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Indirect Light', 'https://storage.cloud.google.com/plant-me/light-level_medium.jpg?folder&organizationId');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Bright Indirect', 'https://storage.cloud.google.com/plant-me/light-level_bright-indirect.jpg?folder&organizationId');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Bright Direct', 'https://storage.cloud.google.com/plant-me/light-level_bright-direct.jpg?folder&organizationId');

CREATE TABLE easeOfCareMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO easeOfCareMenu (cardTitle, image) VALUES ('Easy', 'https://storage.cloud.google.com/plant-me/difficulty-levels_easy.jpg');
INSERT INTO easeOfCareMenu (cardTitle, image) VALUES ('Medium', 'https://storage.cloud.google.com/plant-me/difficulty_levels-medium.jpg');
INSERT INTO easeOfCareMenu (cardTitle, image) VALUES ('Difficult', 'https://storage.cloud.google.com/plant-me/difficulty_levels-difficult.jpg');

CREATE TABLE petSafeMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO petSafeMenu (cardTitle, image) VALUES ('Safe', 'https://storage.cloud.google.com/plant-me/pet_safe-safe.jpg');
INSERT INTO petSafeMenu (cardTitle, image) VALUES ('Doesn''t Matter', 'https://storage.cloud.google.com/plant-me/pet_safe-not_important.jpg');


CREATE TABLE plants (
    id SERIAL primary key,
		plantName VARCHAR(255) not null,
    plantSize VARCHAR(255) not null,
    lightLevel INTEGER not null,
    easeOfCare VARCHAR(255) not null,
    petSafe BOOLEAN not null,
   	image VARCHAR not null
);

INSERT INTO plants (plantName, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Aloe Vera', 'sm', 4, 'e', 'true', 'https://unsplash.com/photos/XtE3QnLgyF8');
INSERT INTO plants (plantName, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Anthurium', 'md', 3, 'e', 'false', 'https://unsplash.com/photos/wgCl1KXz95g');
INSERT INTO plants (plantName, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Asparagus Fern', 'md', 3, 'e', 'false', 'https://unsplash.com/photos/wgCl1KXz95g');
INSERT INTO plants (plantName, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Peace lily', 'lg', 2, 'e', 'false', 'https://unsplash.com/photos/wgCl1KXz95g');
