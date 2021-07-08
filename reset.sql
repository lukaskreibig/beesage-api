DROP TABLE IF EXISTS `beekeeper`;
CREATE TABLE `beekeeper` (
  `beekeeper_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255),
  `email` varchar(255) NOT NULL,
  `city` varchar(255),
  `country` varchar(255),
  `experience` int,
  `behives` int,
  `apiaries` int,
  PRIMARY KEY (`beekeeper_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO
  `beekeeper` (username, password, email, city, country, experience, behives, apiaries)
VALUES
  
  (
    'maria_passolini',
    'null',
    'maria.pass@italy.it',
    'Milan',
    'Italy',
    4,
    7,
    5
  ),
  (
    'blacksirius54',
    'null',
    'sirius@black.gb',
    'Secret Forest',
    'Great Britain',
    9,
    14,
    3
  ),
  (
    'honeymary',
    'null',
    'gerstenstein@honey.com',
    'Phoenix',
    'USA',
    19,
    132,
    32
  );
  
