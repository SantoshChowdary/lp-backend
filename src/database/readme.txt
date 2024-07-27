// Created a table "users" for basic login using 
CREATE TABLE users (
    user_id VARCHAR(50) PRIMARY KEY,
    name varchar(200) not NULL,
    mobile_number varchar(15) not null,
    email_id varchar(50) not null,
    password varchar(50) not null
)

CREATE TABLE user_basic_details (
    entry_id VARCHAR(50) PRIMARY KEY ,
    active_product_enroll_plan VARCHAR(50),
    active_product_enroll_plan_start_datetime DATETIME,
    country_code VARCHAR(5),
    degree VARCHAR(100),
    date_of_birth DATE,
    email VARCHAR(100)  not null,
    enrollment_plans JSON,
    gender VARCHAR(10),
    institute VARCHAR(100),
    is_profile_updated BOOLEAN,
    first_name VARCHAR(100)  not null,
    last_name VARCHAR(100)  not null,
    occupation VARCHAR(100),
    phone_number VARCHAR(15)  not null,
    preferred_languages JSON,
    profile_pic_url TEXT,
    terms_and_conditions_status VARCHAR(20),
    user_id VARCHAR(50),
    selected_language VARCHAR(50),
    user_role VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);