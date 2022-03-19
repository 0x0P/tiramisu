create user tiramisu@localhost;
grant all privileges on tiramisu.* to tiramisu@localhost;
create database tiramisu;
use tiramisu;

 
create table documents (
    `title` text,
    `content` text,
    `version` int,
    `date` timestamp,
    `history` JSON,
    `ACL` NUMERIC
);

create table accounts {
    id text,
    pw text,
    salt text,
}