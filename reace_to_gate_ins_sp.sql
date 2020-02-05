CREATE PROCEDURE `ins_player_info` (IN id INT(5), IN pname VARCHAR(30), IN lname VARCHAR(30), IN timerecord DATE, IN score INT(5))
BEGIN
DECLARE id INT;
DECLARE pname VARCHAR(30);
DECLARE lname VARCHAR(30);
DECLARE trecored DATE;
DECLARE psocre INT(5);

IF NOT NULL THEN INSERT INTO player_info VALUES (
	id, 
    pname,
    lname,
    trecored,
    pscore
);
END IF;
END
