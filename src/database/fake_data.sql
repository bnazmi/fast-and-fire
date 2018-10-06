INSERT INTO ROLE
VALUES (DEFAULT,
        'admin'), (DEFAULT,
                   'witness'), (DEFAULT,
                                'arbitrator'), (DEFAULT,
                                                'party');


INSERT INTO "user"
VALUES (DEFAULT,'admin','$2a$08$ysBcgTNADi6S8RK8BB4ykO8qw0QhMZ45TvOD4Odt385ULEX0quAty','ramyshurafa@hotmail.com','Ramy','Yousef','shurafa', 1),
       (DEFAULT,'witness','$2a$08$ysBcgTNADi6S8RK8BB4ykO8qw0QhMZ45TvOD4Odt385ULEX0quAty','ramyshurafawitness@hotmail.com','Ramy','Yousef','shurafa', 2),
       (DEFAULT,'arbitrator','$2a$08$ysBcgTNADi6S8RK8BB4ykO8qw0QhMZ45TvOD4Odt385ULEX0quAty','ramyshurafaarbitrator@hotmail.com','Ramy','Yousef','shurafa', 3),
       (DEFAULT,'party','$2a$08$ysBcgTNADi6S8RK8BB4ykO8qw0QhMZ45TvOD4Odt385ULEX0quAty','ramyshurafaparty@hotmail.com','Ramy','Yousef','shurafa', 4);
