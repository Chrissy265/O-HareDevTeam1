CREATE TABLE IF NOT EXISTS `race_to_gate`.`player_info`(
	playerID int(5) NOT NULL,
    player_name VARCHAR(30) NOT NULL,
    player_lname VARCHAR(30),
    time_recorded DATE,
    score int(5),
    CONSTRAINT playerID_PK PRIMARY KEY(playerID)    
);





