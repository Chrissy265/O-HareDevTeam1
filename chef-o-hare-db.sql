CREATE DATABASE chef_o_ohare;

CREATE TABLE user_info(
    userID int NOT NULL,
    pFirstName VARCHAR(30),
    pLastName VARCHAR(30),
    PRIMARY KEY (userID)
)

CREATE TABLE money_t(
    moneyID INT NOT NULL, 
    currentLevel INT NOT NULL,
    amount FLOAT,
    PRIMARY KEY (moneyID),
    userID INT FOREIGN KEY REFERENCES user_info(userID)
)
