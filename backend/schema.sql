use accounting;

create table if not exists Konto
(
    nummer      int PRIMARY KEY,
    bezeichnung varchar(255),
    soll        int,
    haben       int
);

insert into Konto (nummer, bezeichnung, soll, haben)
values
(2800, 'Bank', 0, 0),
(2700, 'Kassa', 0, 0);