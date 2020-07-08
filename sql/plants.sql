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

INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Small', 'https://images.unsplash.com/photo-1551888419-7b7a520fe0ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Medium', 'https://images.pexels.com/photos/3060841/pexels-photo-3060841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Large', 'https://images.unsplash.com/photo-1554380941-51b202f69916?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Extra Large', 'https://images.unsplash.com/photo-1585738876562-7d008f53022a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=936&q=80');
INSERT INTO plantSizeMenu (cardTitle, image) VALUES ('Any Size', 'https://images.unsplash.com/photo-1505676460981-112a05097285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3191&q=80');

CREATE TABLE lightLevelMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Minimal Light', 'https://images.unsplash.com/photo-1541275055241-329bbdf9a191?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Shade', 'https://images.unsplash.com/photo-1524274518417-e7b3f1879339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Indirect Light', 'https://images.pexels.com/photos/3126442/pexels-photo-3126442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Bright Indirect', 'https://images.pexels.com/photos/3534981/pexels-photo-3534981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
INSERT INTO lightLevelMenu (cardTitle, image) VALUES ('Bright Direct', 'https://images.pexels.com/photos/3101767/pexels-photo-3101767.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');

CREATE TABLE easeOfCareMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO easeOfCareMenu (cardTitle, image) VALUES ('Easy', 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80');
INSERT INTO easeOfCareMenu (cardTitle, image) VALUES ('Medium', 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2176&q=80');
INSERT INTO easeOfCareMenu (cardTitle, image) VALUES ('Difficult', 'https://images.unsplash.com/photo-1581753418434-51c11169a3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80');

CREATE TABLE petSafeMenu (
    id SERIAL primary key,
    cardTitle VARCHAR(255) not null,
    image VARCHAR not null
);

INSERT INTO petSafeMenu (cardTitle, image) VALUES ('Safe', 'https://images.unsplash.com/photo-1530284453743-1ac00f1275f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80');
INSERT INTO petSafeMenu (cardTitle, image) VALUES ('Doesn''t Matter', 'https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2553&q=80');


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
