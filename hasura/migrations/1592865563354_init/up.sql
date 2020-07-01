CREATE TYPE public.contact_status_enum AS ENUM (
    '0',
    '1',
    '2',
    '3'
);
CREATE TYPE public.food_contains_enum AS ENUM (
    'CHOICE',
    'SUBSTITUTE',
    'OPTIONAL',
    'NO',
    'YES'
);
CREATE TYPE public.food_item_media_type_enum AS ENUM (
    '0',
    '1',
    '2'
);
CREATE TYPE public.game_choice_status_enum AS ENUM (
    '0',
    '1',
    '2',
    '3'
);
CREATE TYPE public.game_cuisines_filter_mode_enum AS ENUM (
    '0',
    '1'
);
CREATE TYPE public.game_game_status_enum AS ENUM (
    '0',
    '1'
);
CREATE TYPE public.game_unit_of_measure_enum AS ENUM (
    '0',
    '1'
);
CREATE TABLE public.authenticated (
    id integer NOT NULL,
    user_id integer NOT NULL,
    payload_hash character varying NOT NULL,
    active boolean NOT NULL,
    created_on timestamp without time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.authenticated_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.authenticated_id_seq OWNED BY public.authenticated.id;
CREATE TABLE public.contact (
    id integer NOT NULL,
    user_id integer NOT NULL,
    contact_id integer NOT NULL,
    status public.contact_status_enum DEFAULT '0'::public.contact_status_enum NOT NULL
);
CREATE SEQUENCE public.contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.contact_id_seq OWNED BY public.contact.id;
CREATE TABLE public.cuisine (
    id integer NOT NULL,
    name character varying NOT NULL
);
CREATE SEQUENCE public.cuisine_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cuisine_id_seq OWNED BY public.cuisine.id;
CREATE TABLE public.favorite_item_entity (
    "userId" integer NOT NULL,
    "foodItemId" integer NOT NULL,
    "isFavorite" boolean DEFAULT true NOT NULL
);
CREATE TABLE public.food_item (
    id integer NOT NULL,
    name character varying NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    is_game_ready boolean DEFAULT false NOT NULL,
    beef public.food_contains_enum[] DEFAULT '{NO}'::public.food_contains_enum[] NOT NULL,
    pork public.food_contains_enum[] DEFAULT '{NO}'::public.food_contains_enum[] NOT NULL,
    chicken public.food_contains_enum[] DEFAULT '{NO}'::public.food_contains_enum[] NOT NULL,
    gluten public.food_contains_enum[] DEFAULT '{YES}'::public.food_contains_enum[] NOT NULL,
    turkey public.food_contains_enum[] DEFAULT '{NO}'::public.food_contains_enum[] NOT NULL,
    exotic public.food_contains_enum[] DEFAULT '{NO}'::public.food_contains_enum[] NOT NULL,
    fish public.food_contains_enum[] DEFAULT '{NO}'::public.food_contains_enum[] NOT NULL,
    shellfish public.food_contains_enum[] DEFAULT '{NO}'::public.food_contains_enum[] NOT NULL,
    animal_products public.food_contains_enum[] DEFAULT '{NO}'::public.food_contains_enum[] NOT NULL
);
CREATE SEQUENCE public.food_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.food_item_id_seq OWNED BY public.food_item.id;
CREATE TABLE public.food_item_media (
    id integer NOT NULL,
    type public.food_item_media_type_enum NOT NULL,
    src character varying NOT NULL,
    caption character varying,
    author_id integer NOT NULL,
    food_item_id integer NOT NULL
);
CREATE SEQUENCE public.food_item_media_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.food_item_media_id_seq OWNED BY public.food_item_media.id;
CREATE TABLE public.game (
    id integer NOT NULL,
    game_creator_id integer NOT NULL,
    time_created timestamp without time zone DEFAULT now() NOT NULL,
    game_status public.game_game_status_enum DEFAULT '0'::public.game_game_status_enum NOT NULL,
    winning_restaurant_id integer,
    cuisines_filter_mode public.game_cuisines_filter_mode_enum NOT NULL,
    prices integer[],
    eat_time timestamp without time zone NOT NULL,
    latitude double precision NOT NULL,
    longitude double precision NOT NULL,
    address character varying,
    search_magnitude integer NOT NULL,
    unit_of_measure public.game_unit_of_measure_enum DEFAULT '0'::public.game_unit_of_measure_enum NOT NULL,
    mode character varying NOT NULL,
    menus_filter character varying[] NOT NULL
);
CREATE TABLE public.game_choice (
    id integer NOT NULL,
    game_id integer NOT NULL,
    restaurant_id integer NOT NULL,
    player_id integer NOT NULL,
    restaurant_item_id integer NOT NULL,
    chosen_media_id integer,
    status public.game_choice_status_enum DEFAULT '0'::public.game_choice_status_enum NOT NULL,
    pick_rank integer
);
CREATE SEQUENCE public.game_choice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.game_choice_id_seq OWNED BY public.game_choice.id;
CREATE TABLE public.game_cuisine (
    id integer NOT NULL,
    game_id integer NOT NULL,
    cuisine_id integer NOT NULL
);
CREATE SEQUENCE public.game_cuisine_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.game_cuisine_id_seq OWNED BY public.game_cuisine.id;
CREATE SEQUENCE public.game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.game_id_seq OWNED BY public.game.id;
CREATE TABLE public.game_player (
    id integer NOT NULL,
    game_id integer NOT NULL,
    user_id integer NOT NULL
);
CREATE SEQUENCE public.game_player_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.game_player_id_seq OWNED BY public.game_player.id;
CREATE TABLE public.log (
    id integer NOT NULL,
    date_created timestamp without time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    payload character varying DEFAULT ''::character varying NOT NULL
);
CREATE SEQUENCE public.log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.log_id_seq OWNED BY public.log.id;
CREATE TABLE public.media_author (
    id integer NOT NULL,
    name character varying NOT NULL,
    facebook character varying,
    email character varying,
    instagram character varying,
    "personalWebsite" character varying,
    twitter character varying
);
CREATE SEQUENCE public.media_author_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.media_author_id_seq OWNED BY public.media_author.id;
CREATE TABLE public.menu (
    id integer NOT NULL,
    name character varying NOT NULL,
    is_game_ready boolean DEFAULT false NOT NULL
);
CREATE SEQUENCE public.menu_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.menu_id_seq OWNED BY public.menu.id;
CREATE TABLE public.menu_section (
    id integer NOT NULL,
    name character varying NOT NULL,
    is_game_ready boolean DEFAULT false NOT NULL,
    is_kids boolean DEFAULT false NOT NULL,
    is_dessert boolean DEFAULT false NOT NULL,
    is_drink boolean DEFAULT false NOT NULL
);
CREATE SEQUENCE public.menu_section_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.menu_section_id_seq OWNED BY public.menu_section.id;
CREATE TABLE public.metric (
    id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    payload character varying DEFAULT ''::character varying NOT NULL
);
CREATE SEQUENCE public.metric_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.metric_id_seq OWNED BY public.metric.id;
CREATE TABLE public.restaurant (
    id integer NOT NULL,
    name character varying NOT NULL,
    price integer,
    street_address character varying(300) NOT NULL,
    city character varying(300) NOT NULL,
    state character varying(300) NOT NULL,
    zip_code character varying(300) NOT NULL,
    latitude double precision,
    longitude double precision,
    chain_id integer NOT NULL,
    place_id character varying,
    is_game_ready boolean DEFAULT false NOT NULL,
    takeout_url character varying DEFAULT ''::character varying NOT NULL
);
CREATE TABLE public.restaurant_chain (
    id integer NOT NULL,
    name character varying NOT NULL
);
CREATE SEQUENCE public.restaurant_chain_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.restaurant_chain_id_seq OWNED BY public.restaurant_chain.id;
CREATE TABLE public.restaurant_cuisine (
    id integer NOT NULL,
    restaurant_id integer NOT NULL,
    cuisine_id integer NOT NULL
);
CREATE SEQUENCE public.restaurant_cuisine_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.restaurant_cuisine_id_seq OWNED BY public.restaurant_cuisine.id;
CREATE SEQUENCE public.restaurant_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.restaurant_id_seq OWNED BY public.restaurant.id;
CREATE TABLE public.restaurant_item (
    id integer NOT NULL,
    restaurant_id integer NOT NULL,
    menu_id integer NOT NULL,
    menu_section_id integer NOT NULL,
    food_item_id integer NOT NULL,
    price double precision,
    times_served character varying[] NOT NULL,
    is_game_ready boolean DEFAULT false NOT NULL
);
CREATE SEQUENCE public.restaurant_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.restaurant_item_id_seq OWNED BY public.restaurant_item.id;
CREATE TABLE public.restaurants_visited_entity (
    id integer NOT NULL,
    "numTimesEaten" integer NOT NULL,
    "restaurantId" integer
);
CREATE SEQUENCE public.restaurants_visited_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.restaurants_visited_entity_id_seq OWNED BY public.restaurants_visited_entity.id;
CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(300) NOT NULL,
    password character varying(300) NOT NULL,
    phone_number character varying,
    email character varying(300) NOT NULL,
    first_name character varying(300) NOT NULL,
    last_name character varying(300) NOT NULL,
    chicken boolean DEFAULT true NOT NULL,
    pork boolean DEFAULT true NOT NULL,
    turkey boolean DEFAULT true NOT NULL,
    beef boolean DEFAULT true NOT NULL,
    gluten boolean DEFAULT true NOT NULL,
    exotic boolean DEFAULT true NOT NULL,
    fish boolean DEFAULT true NOT NULL,
    shellfish boolean DEFAULT true NOT NULL,
    vegetables boolean DEFAULT true NOT NULL,
    animal_products boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    photo character varying DEFAULT ''::character varying,
    blocked_foods integer[] DEFAULT ARRAY[]::integer[],
    active boolean DEFAULT true NOT NULL
);
CREATE TABLE public.user_device (
    id integer NOT NULL,
    user_id integer NOT NULL,
    device_token character varying NOT NULL,
    active boolean DEFAULT true NOT NULL,
    "createdOn" timestamp without time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.user_device_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_device_id_seq OWNED BY public.user_device.id;
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
ALTER TABLE ONLY public.authenticated ALTER COLUMN id SET DEFAULT nextval('public.authenticated_id_seq'::regclass);
ALTER TABLE ONLY public.contact ALTER COLUMN id SET DEFAULT nextval('public.contact_id_seq'::regclass);
ALTER TABLE ONLY public.cuisine ALTER COLUMN id SET DEFAULT nextval('public.cuisine_id_seq'::regclass);
ALTER TABLE ONLY public.food_item ALTER COLUMN id SET DEFAULT nextval('public.food_item_id_seq'::regclass);
ALTER TABLE ONLY public.food_item_media ALTER COLUMN id SET DEFAULT nextval('public.food_item_media_id_seq'::regclass);
ALTER TABLE ONLY public.game ALTER COLUMN id SET DEFAULT nextval('public.game_id_seq'::regclass);
ALTER TABLE ONLY public.game_choice ALTER COLUMN id SET DEFAULT nextval('public.game_choice_id_seq'::regclass);
ALTER TABLE ONLY public.game_cuisine ALTER COLUMN id SET DEFAULT nextval('public.game_cuisine_id_seq'::regclass);
ALTER TABLE ONLY public.game_player ALTER COLUMN id SET DEFAULT nextval('public.game_player_id_seq'::regclass);
ALTER TABLE ONLY public.log ALTER COLUMN id SET DEFAULT nextval('public.log_id_seq'::regclass);
ALTER TABLE ONLY public.media_author ALTER COLUMN id SET DEFAULT nextval('public.media_author_id_seq'::regclass);
ALTER TABLE ONLY public.menu ALTER COLUMN id SET DEFAULT nextval('public.menu_id_seq'::regclass);
ALTER TABLE ONLY public.menu_section ALTER COLUMN id SET DEFAULT nextval('public.menu_section_id_seq'::regclass);
ALTER TABLE ONLY public.metric ALTER COLUMN id SET DEFAULT nextval('public.metric_id_seq'::regclass);
ALTER TABLE ONLY public.restaurant ALTER COLUMN id SET DEFAULT nextval('public.restaurant_id_seq'::regclass);
ALTER TABLE ONLY public.restaurant_chain ALTER COLUMN id SET DEFAULT nextval('public.restaurant_chain_id_seq'::regclass);
ALTER TABLE ONLY public.restaurant_cuisine ALTER COLUMN id SET DEFAULT nextval('public.restaurant_cuisine_id_seq'::regclass);
ALTER TABLE ONLY public.restaurant_item ALTER COLUMN id SET DEFAULT nextval('public.restaurant_item_id_seq'::regclass);
ALTER TABLE ONLY public.restaurants_visited_entity ALTER COLUMN id SET DEFAULT nextval('public.restaurants_visited_entity_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.user_device ALTER COLUMN id SET DEFAULT nextval('public.user_device_id_seq'::regclass);
ALTER TABLE ONLY public.user_device
    ADD CONSTRAINT "PK_0232591a0b48e1eb92f3ec5d0d1" PRIMARY KEY (id);
ALTER TABLE ONLY public.food_item
    ADD CONSTRAINT "PK_057940b0225785ec693de562cf4" PRIMARY KEY (id);
ALTER TABLE ONLY public.favorite_item_entity
    ADD CONSTRAINT "PK_0c940960af1d3bffcb1ae7bc2c8" PRIMARY KEY ("userId", "foodItemId");
ALTER TABLE ONLY public.authenticated
    ADD CONSTRAINT "PK_170fa06690c73d5f53d44b76e90" PRIMARY KEY (id);
ALTER TABLE ONLY public.contact
    ADD CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY (id);
ALTER TABLE ONLY public.restaurant_item
    ADD CONSTRAINT "PK_325a79252195bbf38d80dd9e0d6" PRIMARY KEY (id);
ALTER TABLE ONLY public.log
    ADD CONSTRAINT "PK_350604cbdf991d5930d9e618fbd" PRIMARY KEY (id);
ALTER TABLE ONLY public.game
    ADD CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY (id);
ALTER TABLE ONLY public.menu
    ADD CONSTRAINT "PK_35b2a8f47d153ff7a41860cceeb" PRIMARY KEY (id);
ALTER TABLE ONLY public.game_cuisine
    ADD CONSTRAINT "PK_3db9fe08222c1f2bb0916eb2b03" PRIMARY KEY (id);
ALTER TABLE ONLY public.restaurants_visited_entity
    ADD CONSTRAINT "PK_3ef088a9d0c887ec97a9b212b1b" PRIMARY KEY (id);
ALTER TABLE ONLY public.media_author
    ADD CONSTRAINT "PK_439ea773c817c560dd83cf133d7" PRIMARY KEY (id);
ALTER TABLE ONLY public.food_item_media
    ADD CONSTRAINT "PK_605b244ba6ab5b71a7debce9006" PRIMARY KEY (id);
ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY (id);
ALTER TABLE ONLY public.game_player
    ADD CONSTRAINT "PK_67f6a08d68fa1e4c683736027eb" PRIMARY KEY (id);
ALTER TABLE ONLY public.metric
    ADD CONSTRAINT "PK_7d24c075ea2926dd32bd1c534ce" PRIMARY KEY (id);
ALTER TABLE ONLY public.menu_section
    ADD CONSTRAINT "PK_bdb64b3aaf192ece146d3d232f7" PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
ALTER TABLE ONLY public.game_choice
    ADD CONSTRAINT "PK_cb7ff566e4fe7f36d11f4e9c625" PRIMARY KEY (id);
ALTER TABLE ONLY public.restaurant_chain
    ADD CONSTRAINT "PK_d2a509385c30a3ea44dc032009e" PRIMARY KEY (id);
ALTER TABLE ONLY public.cuisine
    ADD CONSTRAINT "PK_d4c1e9427b94335350fecaf238e" PRIMARY KEY (id);
ALTER TABLE ONLY public.restaurant_cuisine
    ADD CONSTRAINT "PK_f9eb1abeb371c2225460d6cafad" PRIMARY KEY (id);
ALTER TABLE ONLY public.restaurants_visited_entity
    ADD CONSTRAINT "REL_56b99d348c4606c92bdf638804" UNIQUE ("restaurantId");
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_01eea41349b6c9275aec646eee0" UNIQUE (phone_number);
ALTER TABLE ONLY public.user_device
    ADD CONSTRAINT "UQ_16dca93ee85ad8b976fdc6cb1a0" UNIQUE (user_id, device_token);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE (username);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);
ALTER TABLE ONLY public.game_player
    ADD CONSTRAINT "FK_05aa60ae47a94475701ced28d4e" FOREIGN KEY (game_id) REFERENCES public.game(id);
ALTER TABLE ONLY public.restaurant_cuisine
    ADD CONSTRAINT "FK_07b25b0a91cc390913afef7870e" FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);
ALTER TABLE ONLY public.game_choice
    ADD CONSTRAINT "FK_082ca4dbb9aedcbc6c1d6d17762" FOREIGN KEY (restaurant_item_id) REFERENCES public.restaurant_item(id);
ALTER TABLE ONLY public.game_cuisine
    ADD CONSTRAINT "FK_142eb5038e8f5a08060c553af5c" FOREIGN KEY (cuisine_id) REFERENCES public.cuisine(id);
ALTER TABLE ONLY public.game_choice
    ADD CONSTRAINT "FK_1adcbe7331c908f4e94ad728095" FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);
ALTER TABLE ONLY public.contact
    ADD CONSTRAINT "FK_33d4fc93803e7192e150216fffb" FOREIGN KEY (user_id) REFERENCES public."user"(id);
ALTER TABLE ONLY public.food_item_media
    ADD CONSTRAINT "FK_367e0b10fa5952b941c6c2e791f" FOREIGN KEY (author_id) REFERENCES public.media_author(id);
ALTER TABLE ONLY public.game_choice
    ADD CONSTRAINT "FK_39835ee8db3ad336374d748df35" FOREIGN KEY (player_id) REFERENCES public.game_player(id);
ALTER TABLE ONLY public.restaurant_cuisine
    ADD CONSTRAINT "FK_3a52b085c573ed58bdda22788bf" FOREIGN KEY (cuisine_id) REFERENCES public.cuisine(id);
ALTER TABLE ONLY public.food_item_media
    ADD CONSTRAINT "FK_434a78324beae1e9682ec4f482d" FOREIGN KEY (food_item_id) REFERENCES public.food_item(id);
ALTER TABLE ONLY public.user_device
    ADD CONSTRAINT "FK_4875276d131a82b6792e73b9b1a" FOREIGN KEY (user_id) REFERENCES public."user"(id);
ALTER TABLE ONLY public.game_cuisine
    ADD CONSTRAINT "FK_543934c1fd0dde4b5cc42728aaa" FOREIGN KEY (game_id) REFERENCES public.game(id);
ALTER TABLE ONLY public.restaurants_visited_entity
    ADD CONSTRAINT "FK_56b99d348c4606c92bdf6388042" FOREIGN KEY ("restaurantId") REFERENCES public.restaurant(id);
ALTER TABLE ONLY public.game
    ADD CONSTRAINT "FK_58e430339d94f00813b656feebc" FOREIGN KEY (game_creator_id) REFERENCES public."user"(id);
ALTER TABLE ONLY public.game_choice
    ADD CONSTRAINT "FK_668fe1bf65744d9b872f545d630" FOREIGN KEY (game_id) REFERENCES public.game(id);
ALTER TABLE ONLY public.game
    ADD CONSTRAINT "FK_86e3ade46cdecc60b7153bf641c" FOREIGN KEY (winning_restaurant_id) REFERENCES public.restaurant(id);
ALTER TABLE ONLY public.restaurant_item
    ADD CONSTRAINT "FK_9526f6cfd364d4dfe62db7a9e6b" FOREIGN KEY (food_item_id) REFERENCES public.food_item(id);
ALTER TABLE ONLY public.restaurant_item
    ADD CONSTRAINT "FK_9e68da558a6d862a8eb2920da6b" FOREIGN KEY (menu_section_id) REFERENCES public.menu_section(id);
ALTER TABLE ONLY public.restaurant_item
    ADD CONSTRAINT "FK_b1079d16b910538891757937da0" FOREIGN KEY (menu_id) REFERENCES public.menu(id);
ALTER TABLE ONLY public.contact
    ADD CONSTRAINT "FK_b77c91f220387c3c90df787bce5" FOREIGN KEY (contact_id) REFERENCES public."user"(id);
ALTER TABLE ONLY public.game_player
    ADD CONSTRAINT "FK_c2255dac7ae227bd2771558dd4e" FOREIGN KEY (user_id) REFERENCES public."user"(id);
ALTER TABLE ONLY public.restaurant_item
    ADD CONSTRAINT "FK_ca21426a780c2da4ab3b42acf4e" FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);
ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT "FK_d2a509385c30a3ea44dc032009e" FOREIGN KEY (chain_id) REFERENCES public.restaurant_chain(id);
ALTER TABLE ONLY public.game_choice
    ADD CONSTRAINT "FK_e2af66306212bb37629d8dbc599" FOREIGN KEY (chosen_media_id) REFERENCES public.food_item_media(id);
