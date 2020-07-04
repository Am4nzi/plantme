DROP TABLE IF EXISTS plants;

CREATE TABLE plants (
    id SERIAL primary key,
		plantName VARCHAR(255) not null,
    plantSize VARCHAR(255) not null,
    lightLevel INTEGER not null,
    easeOfCare VARCHAR(255) not null,
    petSafe BOOLEAN not null,
   	image VARCHAR not null
);

--Light Level: https://www.houseofplants.co.uk/find-a-plant.php

INSERT INTO plants (plantName, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Aloe Vera', 'sm', 4, 'e', 'true', 'https://unsplash.com/photos/XtE3QnLgyF8');
INSERT INTO plants (plantName, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Anthurium', 'md', 3, 'e', 'false', 'https://unsplash.com/photos/wgCl1KXz95g');
INSERT INTO plants (plantName, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Asparagus Fern', 'md', 3, 'e', 'false', 'https://unsplash.com/photos/wgCl1KXz95g');
INSERT INTO plants (plantName, plantSize, lightLevel, easeOfCare, petSafe, image) VALUES ('Peace lily', 'lg', 2, 'e', 'false', 'https://unsplash.com/photos/wgCl1KXz95g');
