drop table if exists memes cascade;
drop table if exists users cascade;

create table users (
id serial primary key
,auth0_id text unique not null
,name varchar(100)
,email varchar(100)
,picture text
);

create table memes (
id serial primary key
,url text not null
,user_id integer references users(id)
);

insert into memes (url) values ('https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fmasonry%2F000%2F111%2F189%2FBug-Feature.jpg&imgrefurl=https%3A%2F%2Fknowyourmeme.com%2Fmemes%2Foptimistic-indie-developer%2Fphotos%2Ftrending&docid=3-BkyYkiktyh1M&tbnid=VwMh08NfrAIYjM%3A&vet=10ahUKEwjIjeG09qbdAhVEMXwKHZG8AwEQMwhkKCEwIQ..i&w=200&h=200&bih=1006&biw=1920&q=dev%20memes&ved=0ahUKEwjIjeG09qbdAhVEMXwKHZG8AwEQMwhkKCEwIQ&iact=mrc&uact=8');