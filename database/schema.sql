DROP DATABASE IF EXISTS incoming_beginners_2022;

CREATE DATABASE incoming_beginners_2022;

\c incoming_beginners_2022;

CREATE TABLE student (
    id serial UNIQUE NOT NULL,
    student_name varchar(70),
    parent_name varchar(70),
    parent_email varchar(80),
    piano_experience boolean,
    instrument_interest varchar(30),
    additionalExperience varchar(2500),
    finalInstrument varchar(30),
    PRIMARY KEY (id)
);

CREATE INDEX student_index ON student(student_name);
CREATE INDEX instrument_interest_index ON student(instrument_interest);



CREATE TABLE woodwindFeedback (
    id serial UNIQUE NOT NULL,
    teacher_name
     varchar(70),
    student_id int,
    instrument varchar(30),
    feedback varchar (3000),
    directorFeedback varchar(3000),
    rating int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

CREATE INDEX student_index_ww ON woodwindFeedback(student_id);

CREATE TABLE brassFeedback (
    id serial UNIQUE NOT NULL,
    teacher_name
     varchar(70),
    student_id int,
    instrument varchar(30),
    feedback varchar (3000),
    directorFeedback varchar(3000),
    rating int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

CREATE INDEX student_index_br ON brassFeedback(student_id);


CREATE TABLE percussionFeedback (
    id serial UNIQUE NOT NULL,
    teacher_name
     varchar(70),
    student_id int,
    instrument varchar(30),
    feedback varchar (3000),
    directorFeedback varchar(3000),
    rating int not null,
    PRIMARY KEY (id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

CREATE INDEX student_index_perc ON percussionFeedback(student_id);

CREATE TABLE finalInstrumentRoster (
    id serial UNIQUE NOT NULL,
    student_name varchar(70),
    instrument varchar(70),
    emailed boolean,
    PRIMARY KEY (id)
);
CREATE INDEX student_name ON finalInstrumentRoster(student_name);
CREATE INDEX instrument_index ON finalInstrumentRoster(instrument);

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Kristin G', 'Papa
G', 'aliciav.texas@gmail.com', true, 'percussion', 'none', 'not selected');

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Blake H', 'Mama
S', 'aliciav.texas@gmail.com', false, 'brass', 'none', 'not selected');

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Matt S', 'Granny
S', 'aliciav.texas@gmail.com', false, 'brass', 'none', 'not selected');

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Scribbles', 'Alicia V', 'aliciav.texas@gmail.com', false, 'percussion', 'none', 'not selected');


insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Ben K', 'Dad K', 'aliciav.texas@gmail.com', true, 'percussion', 'played recorder', 'not selected');

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Cory E', 'Mom E', 'aliciav.texas@gmail.com', false, 'brass', 'none', 'not selected');

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Johnathan B', 'Grandpa B', 'aliciav.texas@gmail.com', true, 'percussion', 'none', 'not selected');

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Rob W', 'Mother W', 'aliciav.texas@gmail.com', false, 'percussion', 'none', 'not selected');

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Travis M', 'Father M', 'aliciav.texas@gmail.com', false, 'woodwind', 'none', 'not selected');

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Will F', 'Mother F', 'aliciav.texas@gmail.com', false, 'woodwind', 'owns a drumset', 'not selected');

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Bekah H', 'Granny H', 'aliciav.texas@gmail.com', true, 'woodwind', '10 year piano player', 'not selected');

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Maria K', 'Kim K', 'aliciav.texas@gmail.com', true, 'brass', 'drum corps', 'not selected');

insert into student(student_name, parent_name, parent_email, piano_experience, instrument_interest, additionalExperience, finalInstrument) values ('Pingping X', 'Mother X', 'aliciav.texas@gmail.com', true, 'percussion', 'once watched the movie drumline', 'not selected');
