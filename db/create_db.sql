DROP TABLE IF EXISTS team;

CREATE TABLE team (
  product_id serial primary key,
  name varchar(50),
  position varchar(10),
  title varchar(50),
  bg_image varchar(500),
  insta varchar(250),
  twitter varchar(250),
  facebook varchar(250),
  bio varchar(2000)
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Travis Rice',
  'team',
  null,
  '/frontend/media/img/ridermenu_travisrice.jpg',
  'https://www.instagram.com/travisrice/',
  'https://twitter.com/travrice',
  'https://www.facebook.com/travrice',
  'Born in Wyoming, as the son of a ski patroller, Travis Rice has exhibited unmatched strength, skill and drive on the mountain from the time he could walk. Often hailed as the best all-around snowboarder in the world, Travis thrives in every avenue of snowboarding from X Games wins to honors including Rider and Adventurer of the Year. With The Community Project, Thats It, Thats All, and The Art of FLIGHT, the Jackson native has progressively pushed the evolution of action sports cinema to new heights. Travis spends his time off-mountain developing the Supernatural contest series, working with Asymbol Gallery, and finding adventure on water.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Mark Landvik',
  'team',
  null,
  '/frontend/media/img/ridermenu_marklandvik.jpg',
  'http://instagram.com/marklandvik',
  'http://twitter.com/mark_landvik',
  'http://facebook.com/Mark-Landvik-60225588323',
  'Mark Landvik hails from Alaska, with big mountains and deep snow in his blood. With starring roles in Thats It, Thats All and The Art of FLIGHT, he consistently brings powerful riding on-mountain and levity and fun off-mountain, making him Rices go-to partner for adventure. Lando shares his off-hill craftsmanship including custom furniture and art with the world through N-Grained.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Eric Jackson',
  'team',
  null,
  '/frontend/media/img/ridermenu_ericjackson.jpg',
  'http://instagram.com/ejackshreds',
  'http://twitter.com/ejackshreds',
  'http://facebook.com/ericjacksonsnow',
  'A Crowley Lake, California native, Eric Jackson, has snowboarding in his blood. Coming up in the mountains with his older brother John, Eric is full of adventure and wonderment. That sense of adventure took the Jackson "Brothers on the Run" from Alaska to Chile on a road trip of a lifetime. With skills called out in video part of the year honors and the ability to bring some live musical levity to any situation, Erics a top choice for any film crew.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Bryan Iguchi',
  'team',
  null,
  '/frontend/media/img/ridermenu_bryaniguchi.jpg',
  'http://instagram.com/bryaniguchi',
  'http://twitter.com/bryaniguchi',
  null,
  'Bryan Iguchi is a legend in snowboarding. Originally from Southern California, "Guch" took second place in the 1992 World Half Pipe Championships and a bronze medal at the 1997 X Games. Looking for a life rooted in the mountains, Guch relocated to Jackson, Wyoming in the 90s, where he evolved into an inspirational force for snowboarders looking to embrace freeriding and the mountain lifestyle. As a pro snowboarder, guide and chef, Guch remains a central figure in snowboarding nearly 30 years after his journey began.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Pat Moore',
  'team',
  null,
  '/frontend/media/img/ridermenu_patmoore.jpg',
  'http://instagram.com/patmoore',
  'http://twitter.com/PatMoore_nhd',
  'http://facebook.com/pat-moore-178316925576558',
  'Pat Moore carved out his start in snowboarding on the fast, firm mountains of New England. Snowboarder Magazine has made him a perennial on their Top Ten Riders of the Year list, placing him at #2 in 2014, and awarded him with Web Series of the Year in 2015. An X Games bronze, silver and gold medalist, Pats an accomplished athlete with a reputation for laying it all out on the mountain.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Cam Fitzpatrick',
  'team',
  null,
  '/frontend/media/img/ridermenu_camfitzpatrick.jpg',
  'http://instagram.com/camfitzpatrick',
  'http://twitter.com/camfitzpatrick',
  'http://facebook.com/camfitzpatrickathlete',
  'Riding has always been a part of Cam FitzPatricks life. At age six he strapped into a snowboard for the first time and quickly found a second home on the mountain. While competing professionally, Cam did the stunt work for Disneys Cloud 9. Following in Rices footsteps, he now resides in the mountains of Wyoming and is a leader in the new generation of versatile Jackson riders.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Mikkel Bang',
  'team',
  null,
  '/frontend/media/img/ridermenu_mikkelbang.jpg',
  'http://instagram.com/mikkel_bang',
  null,
  null,
  'Coming in ice cold from Norway, Mikkel Bang started snowboarding in 1997 and got his first contract by 2002. At only 12 years old, he was snowboarding globally and by 17 he was a full-time professional. While he comes from a career of competing in slopestyle, today youll find him more often than not working on films showcasing his deceptively smooth approach to the sport.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Shin Biyajima',
  'team',
  null,
  '/frontend/media/img/ridermenu_shinbiyajima.jpg',
  'http://instagram.com/shinbiyajima',
  null,
  'http://facebook.com/Shin-Biyajima-235213633271124',
  'Nagano-native Shin Biyajima stands out as Japans preeminent big mountain slayer. Hes always on the look out for untapped terrain in Japans mountains, but can also be found popping up in Wyoming and Alaska. A reserved presence on dry land, get Shin on a mountain and you better step back.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Bode Merrill',
  'team',
  null,
  '/frontend/media/img/ridermenu_bodemerrill.jpg',
  'http://instagram.com/brodiemitchell',
  'http://twitter.com/brodiemitchell',
  'http://facebook.com/bodemerrill',
  'Bode Merrill, Snowboarder Magazines 2015 #1 Mens Rider of the Year, is one of the most dynamic riders on the current scene laying down consistent video parts. Hailing from Salt Lake City, Utah, Bode brings style and innovation to every session.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Ben Ferguson',
  'team',
  null,
  '/frontend/media/img/ridermenu_benferguson.jpg',
  'http://instagram.com/ben_ferguson',
  null,
  'http://facebook.com/Ben-Ferguson-1484830101761407',
  'At only 21 years old, Ben Ferguson, is a proven halfpipe superstar, yet comfortable across the mountain. The Bend, Oregon native has been winning snowboard competitions since the age of 10 and now is a member of the U.S. Snowboarding Team. Ferguson is a rising star to keep an eye on.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Victor de le rue',
  'team',
  null,
  '/frontend/media/img/ridermenu_victordelerue.jpg',
  'http://instagram.com/victordelerue',
  null,
  'http://facebook.com/victordelerue',
  'Victor de Le Rue is an up-and-coming, all-around freeriding freestyler coming out of the French Pyrenees. The fact that he scored last part of the Transworld movie "Origins" and his impressive toolbox of skills landed him at #3 on Snowboarder Magazines 2016 Mens Rider of the Year list. With a wide-variety of creative and one-ooter tricks, plus his mountain skills in place and an infectious positive attitude, Victors a force to be reckoned with today and will be for years to come.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Jeremy Jones',
  'team',
  null,
  '/frontend/media/img/ridermenu_jeremyjones.jpg',
  'http://instagram.com/jeremyjones',
  null,
  'http://facebook.com/jonessnowboard',
  'Through decades of standard-bearing Alaska first descents and an innate peace in the mountains, Jeremy Jones name is synonymous with big mountain snowboarding. This National Geographic Adventurer of the Year calls Truckee, California, home but his adventurous spirit has led him to the steepest, deepest peaks worldwide. Off the mountain, Jeremy works with Protect Our Winters (POW), a leading climate advocacy group for the winter sports community that he founded.'
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Jon Klaczkiewicz',
  'crew',
  'director',
  null,
  'http://instagram.com/tetonjon',
  null,
  null,
  null
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Jimmy Chin',
  'crew',
  'second unit director',
  null,
  'http://instagram.com/jimmy_chin',
  null,
  null,
  null
);


INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Greg Wheeler',
  'crew',
  'Director of Photography',
  null,
  'http://instagram.com/gwheels',
  null,
  null,
  null
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Justin - Chip - Taylor Smith',
  'crew',
  'Lead Editor + Cinematographer',
  null,
  'http://instagram.com/jtaylorsmith',
  null,
  null,
  null
);

INSERT INTO team(name, position, title, bg_image, insta, twitter, facebook, bio) VALUES(
  'Stephen Scherba',
  'crew',
  'AC + Field Audio',
  null,
  'http://instagram.com/scherbas',
  null,
  null,
  null
);
