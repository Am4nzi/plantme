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
		properties VARCHAR(255)[] not null,
		image VARCHAR not null
);

INSERT INTO plants (name, properties, image) VALUES ('Aloe Aristata', '{"Small", "Bright Indirect", "Easy", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Aloe%20Aristata.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Areca Palm', '{"Medium", "Large", "Indirect Light", "Bright Indirect", "Bright Direct", "Average", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Areca%20Palm.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Azalea', '{"Medium", "Large", "Shade", "Indirect Light", "Difficult", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Azalea.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Boston Fern', '{"Small", "Medium", "Shade", "Indirect Light", "Difficult", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Boston%20Fern.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Cast Iron Plant', '{"Small", "Indirect Light", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Cast%20Iron%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Cereus Cactus', '{"Small", "Bright Indirect", "Bright Direct", "Easy", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Cereus%20Cactus.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Chinese Evergreen', '{"Small", "Medium", "Minimal Light", "Shade", "Indirect Light", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Chinese%20Evergreen.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Chinese Money Plant', '{"Small", "Indirect Light", "Medium", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Chinese%20Money%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Croton Iceton', '{"Medium", "Large", "Indirect Light", "Bright Indirect", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Croton%20Iceton.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Devil''s Ivy', '{"Small", "Medium", "Large", "Minimal Light", "Shade", "Indirect Light", "Easy", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Devil''s%20Ivy.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Dragon Tree', '{"Medium", "Large", "Indirect Light", "Shade", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Dragon%20Tree.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Dumb Cane', '{"Medium", "Large", "Indirect Light", "Bright Indirect", "Average", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Dumb%20Cane.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Echeveria', '{"Small", "Bright Indirect", "Bright Direct", "Easy", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Echeveria.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Fiddle Leaf Fig', '{"Medium", "Large", "Bright Indirect", "Difficult", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Fiddle%20Leaf%20Fig.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Hot Lips', '{"Small", "Minimal Light", "Shade", "Indirect Light", "Bright Indirect", "Bright Direct", "Average", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Hot%20Lips.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Kentia Palm', '{"Medium", "Large", "Minimal Light", "Shade", "Indirect Light", "Average", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Kentia%20Palm.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Marble Queen', '{"Small", "Bright Direct", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Marble%20Queen.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Mini Monstera', '{"Small", "Bright Direct", "Average", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Mini%20Monstera.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Peace Lily', '{"Small", "Medium", "Large", "Minimal Light", "Shade", "Indirect Light", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Peace%20Lily.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Peacock Plant', '{"Medium", "Shade", "Indirect Light", "Average", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Peacock%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Poinsettia', '{"Small", "Bright Indirect", "Average", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Poinsettia.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Pony Tail Palm', '{"Small", "Medium", "Minimal Light", "Bright Indirect", "Bright Direct", "Easy", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Pony%20Tail%20Palm.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Prickly Pear', '{"Small", "Bright Direct", "Easy", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Prickly%20Pear.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Rattlesnake Plant', '{"Small", "Medium", "Minimal Light", "Shade", "Indirect Light", "Average", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Rattlesnake%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Rubber Plant', '{"Small", "Medium", "Indirect Light", "Bright Direct", "Average", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Rubber%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Satin Pothos', '{"Small", "Medium", "Large", "Shade", "Bright Indirect", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Satin%20Pothos.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Snake Plant', '{"Small", "Bright Indirect", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Snake%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Spider Plant', '{"Small", "Medium", "Minimal Light", "Shade", "Indirect Light", "Bright Indirect", "Easy", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Spider%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Spotted Begonia', '{"Medium", "Indirect Light", "Average", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Spotted%20Begonia.jpg');
INSERT INTO plants (name, properties, image) VALUES ('String of Beads', '{"Medium", "Large", "Indirect Light", "Average", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/String%20of%20Beads.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Sweetheart Plant', '{"Small", "Medium", "Minimal Light", "Shade", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Sweetheart%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Swiss Cheese Plant', '{"Small", "Medium", "Large", "Minimal Light", "Shade", "Indirect Light", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Monstera%20Deliciosa.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Umbrella Plant', '{"Large", "Shade", "Indirect Light", "Bright Indirect", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Umbrella%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Wandering Plant', '{"Small", "Bright Indirect", "Difficult", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Wondering%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Wax Flower', '{"Small", "Medium", "Indirect Light", "Easy", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Wax%20Flower.jpg');
INSERT INTO plants (name, properties, image) VALUES ('ZZ Plant', '{"Medium", "Large", "Shade", "Indirect Light", "Bright Indirect", "Easy", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/ZZ%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Zebra Plant', '{"Small", "Shade", "Indirect Light", "Bright Indirect", "Average", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Zebra%20Plant.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Orchid', '{"Small", "Indirect Light", "Difficult", "Important"}', 'https://storage.googleapis.com/plant-me/plants/Orchid.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Maidenhair Fern', '{"Small", "Medium", "Indirect Light", "Bright Indirect", "Difficult", "Important"}', 'https://storage.googleapis.com/plant-me/plants/Maidenhair%20Fern.jpg');
INSERT INTO plants (name, properties, image) VALUES ('African Violet', '{"Small", "Indirect Light", "Bright Indirect", "Difficult", "Important"}', 'https://storage.googleapis.com/plant-me/plants/Afrian%20Violet.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Staghorn Fern', '{"Small", "Medium", "Indirect Light", "Bright Indirect", "Difficult", "Important"}', 'https://storage.googleapis.com/plant-me/plants/Staghorn%20Fern.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Molded Wax Agave', '{"Small", "Bright Indirect", "Bright Direct", "Easy", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Molded%20Wax%20Agave.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Venus Flytrap', '{"Small", "Bright Indirect", "Bright Direct", "Difficult", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Venus%20Flytrap.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Peperomia Caperata', '{"Small", "Medium", "Indirect Light", "Bright Indirect", "Easy", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Peperomia%20Caperata.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Miniature Roses', '{"Small", "Bright Indirect", "Bright Direct", "Difficult", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Miniature%20Roses.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Polaskia Chichipe Cactus', '{"Medium", "Bright Indirect", "Bright Direct", "Easy", "Important", "Not Important"}', 'https://storage.googleapis.com/plant-me/plants/Polaskia%20Chichipe%20Cactus.jpg');
INSERT INTO plants (name, properties, image) VALUES ('Peppermint', '{"Small", "Medium", "Bright Indirect", "Bright Direct", "Easy", "Important"}', 'https://storage.googleapis.com/plant-me/plants/Peppermint.jpg');
CREATE TABLE menuTitles (
		id SERIAL primary key,
		menuTitle VARCHAR(255) not null
);

INSERT INTO menuTitles (menuTitle) VALUES ('What is the maximum growth size?');
INSERT INTO menuTitles (menuTitle) VALUES ('What are the light conditions?');
INSERT INTO menuTitles (menuTitle) VALUES ('What is the maximum care difficulty?');
INSERT INTO menuTitles (menuTitle) VALUES ('Is it important for the plant to be pet safe?');

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
INSERT INTO easeOfCareMenu (cardTitle, image) VALUES ('Average', 'https://storage.googleapis.com/plant-me/difficulty_levels-medium.jpg');
INSERT INTO easeOfCareMenu (cardTitle, image) VALUES ('Difficult', 'https://storage.googleapis.com/plant-me/difficulty_levels-difficult.jpg');

CREATE TABLE petSafeMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO petSafeMenu (cardTitle, image) VALUES ('Important', 'https://storage.googleapis.com/plant-me/pet_safe-safe.jpg');
INSERT INTO petSafeMenu (cardTitle, image) VALUES ('Not Important', 'https://storage.googleapis.com/plant-me/pet_safe-not_important.jpg');

CREATE TABLE stepperText (
    id SERIAL primary key,
    text VARCHAR(255) not null
);

INSERT INTO stepperText (text) VALUES ('Plant Size');
INSERT INTO stepperText (text) VALUES ('Light Level');
INSERT INTO stepperText (text) VALUES ('Ease of Care');
INSERT INTO stepperText (text) VALUES ('Pet Safe?');