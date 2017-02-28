CREATE TABLE fleet (
name VARCHAR(50),
fleetId integer primary key
);

CREATE TABLE ship (
name VARCHAR(50),
dateBuilt DATE,
fleet_id integer not null references fleet(fleetId) on delete cascade,
shipId  integer primary key
);

CREATE TABLE Sailor (
name VARCHAR(50),
DOB DATE,
ship_id integer not null references ship(shipId) on delete cascade,
sailorId integer primary key
);

CREATE TABLE Duty (
startDate DATE,
endDate DATE,
Ranks VARCHAR(50),
sailor_id integer not null references sailor(sailorId) on delete cascade,
dutyID integer primary key
);
