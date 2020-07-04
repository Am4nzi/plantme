DROP TABLE IF EXISTS plants;
DROP TABLE IF EXISTS plantsizemenu;

CREATE TABLE plantsizemenu (
    id SERIAL primary key,
    plantSize VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO plantsizemenu (plantSize, image) VALUES ('Small', 'https://images.unsplash.com/photo-1565964450731-27a34da777a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
INSERT INTO plantsizemenu (plantSize, image) VALUES ('Medium', 'https://images.unsplash.com/photo-1567748157439-651aca2ff064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
INSERT INTO plantsizemenu (plantSize, image) VALUES ('Large', 'https://images.unsplash.com/photo-1565964450731-27a34da777a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
INSERT INTO plantsizemenu (plantSize, image) VALUES ('Extra Large', 'https://images.unsplash.com/photo-1567748157439-651aca2ff064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
INSERT INTO plantsizemenu (plantSize, image) VALUES ('Any Size', 'https://images.unsplash.com/photo-1565964450731-27a34da777a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');

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
