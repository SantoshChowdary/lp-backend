export const setUp = `

    // users table - loaded
    CREATE TABLE users (
        user_id VARCHAR(75) PRIMARY KEY,
        name varchar(200) not NULL,
        mobile_number varchar(15) not null,
        email_id varchar(50) not null,
        password varchar(50) not null
    );

    // User Basic Details Table - loaded
    CREATE TABLE user_basic_details (
        entry_id VARCHAR(50) PRIMARY KEY,
        user_id VARCHAR(50) NOT NULL,
        active_product_plan VARCHAR(50),
        active_product_plan_start_datetime DATETIME,
        country VARCHAR(50),
        date_of_birth DATE,
        email VARCHAR(100),
        enrolled_plans JSON,
        gender VARCHAR(10),
        highest_degree VARCHAR(100),
        institute VARCHAR(100),
        year_of_graduation INTEGER,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        occupation VARCHAR(100),
        phone_number VARCHAR(15),
        preferred_languages JSON,
        profile_pic_url TEXT,
        user_role VARCHAR(50),
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    );

    // User Product Details Table - Loaded
    CREATE TABLE user_product_details (
        entry_id VARCHAR(50) PRIMARY KEY,
        user_id VARCHAR(50) NOT NULL,
        product_id VARCHAR(50) NOT NULL,
        purchased_date DATETIME,
        expiry_date DATETIME,
        amount_paid DECIMAL(10, 2),
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (product_id) REFERENCES product_details(product_id)
    );

    // User Resource Completion Details Table - Loaded
    CREATE TABLE user_resource_completion_details (
        user_id VARCHAR(50) NOT NULL,
        resource_id VARCHAR(50) NOT NULL,
        completion_percentage DECIMAL(5, 2),
        last_attempted_date DATETIME,
        is_completed BOOLEAN,
        is_unlocked BOOLEAN,
        PRIMARY KEY (user_id, resource_id),
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (resource_id) REFERENCES resources(resource_id)
    );

    // User Journey Details Table - Loaded
    CREATE TABLE user_journey_details (
        entry_id VARCHAR(50) PRIMARY KEY,
        user_id VARCHAR(50) NOT NULL,
        latest_journey_step VARCHAR(50),
        journey_enum VARCHAR(50),
        journey_id VARCHAR(50),
        journey_start_date DATETIME,
        journey_expected_end_date DATETIME,
        journey_actual_end_date DATETIME,
        is_journey_completed BOOLEAN,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (journey_id) REFERENCES journey_details(journey_id)
    );

    // Product Details Table - Loaded
    CREATE TABLE product_details (
        product_id VARCHAR(50) PRIMARY KEY,
        product_code VARCHAR(50) UNIQUE,
        product_created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        product_price DECIMAL(10, 2),
        product_discount DECIMAL(5, 2)
    );

    // Product Journey Details Table - Loaded
    CREATE TABLE product_journey_details (
        entry_id VARCHAR(50) PRIMARY KEY,
        product_id VARCHAR(50) NOT NULL,
        journey_id VARCHAR(50) NOT NULL,
        FOREIGN KEY (product_id) REFERENCES product_details(product_id),
        FOREIGN KEY (journey_id) REFERENCES journey_details(journey_id)
    );

    // Journey Details Table - Loaded
    CREATE TABLE journey_details (
        journey_id VARCHAR(50) PRIMARY KEY,
        journey_name VARCHAR(200) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    // Resource Connections table
    CREATE TABLE resource_connections (
        resource_id VARCHAR(50) NOT NULL,
        parent_resource_id VARCHAR(50) NOT NULL,
        PRIMARY KEY (resource_id, parent_resource_id),
        FOREIGN KEY (resource_id) REFERENCES resources(resource_id),
        FOREIGN KEY (parent_resource_id) REFERENCES resources(resource_id)
    )

    // Courses Table
    CREATE TABLE courses (
        course_id VARCHAR(50) PRIMARY KEY,
        course_name VARCHAR(200) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        course_description TEXT,
        course_image_url TEXT,
        order INTEGER,
        category_id VARCHAR(50),
        FOREIGN KEY (category_id) REFERENCES course_category_details(category_id)
    );

    // Course Category Details Table - Loaded
    CREATE TABLE course_category_details (
        category_id VARCHAR(50) PRIMARY KEY,
        category_enum VARCHAR(50) UNIQUE NOT NULL,
        category_name VARCHAR(200) NOT NULL,
        category_order INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    // Topics Table - Loaded
    CREATE TABLE topics (
        topic_id VARCHAR(50) PRIMARY KEY,
        topic_name VARCHAR(200) NOT NULL,
        duration INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    // Units Table - Loaded
    CREATE TABLE units (
        unit_id VARCHAR(50) PRIMARY KEY,
        unit_name VARCHAR(200) NOT NULL,
        unit_type ENUM('SESSION', 'CHEAT_SHEET', 'MCQ_PRACTICE', 'CODING_PRACTICE', 'EXAM'),
        duration INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    // Resources Table - Loaded
    CREATE TABLE resources (
        resource_id VARCHAR(50) PRIMARY KEY,
        resource_order int,
        resource_type varchar(50)
    );

    // Resource Availability Plans Table - Loaded
    CREATE TABLE resource_availability_plans (
        resource_id VARCHAR(50) NOT NULL,
        product_id VARCHAR(50) NOT NULL,
        PRIMARY KEY (resource_id, product_id),
        FOREIGN KEY (resource_id) REFERENCES resources(resource_id),
        FOREIGN KEY (product_id) REFERENCES product_details(product_id)
    );

    // Resource Configs Table - Loaded
    CREATE TABLE resource_configs (
        resource_id VARCHAR(50) NOT NULL,
        default_unlock BOOLEAN,
        PRIMARY KEY (resource_id),
        FOREIGN KEY (resource_id) REFERENCES resources(resource_id)
    );

    // check below carefully.

    // Learning Video Details Table
    CREATE TABLE learning_video_details (
        video_id VARCHAR(50) PRIMARY KEY,
        video_url TEXT NOT NULL,
        video_title VARCHAR(200),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    // Learning Cheat Sheet Details Table
    CREATE TABLE learning_cheat_sheet_details (
        cheat_sheet_id VARCHAR(50) PRIMARY KEY,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    // MCQ Practice Details Table
    CREATE TABLE mcq_practice_details (
        practice_id VARCHAR(50) PRIMARY KEY,
        practice_name VARCHAR(200) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    // MCQ Question Details Table
    CREATE TABLE mcq_question_details (
        question_id VARCHAR(50) PRIMARY KEY,
        practice_id VARCHAR(50) NOT NULL,
        question_text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (practice_id) REFERENCES mcq_practice_details(practice_id)
    );

    // MCQ Options Details Table
    CREATE TABLE mcq_options_details (
        option_id VARCHAR(50) PRIMARY KEY,
        question_id VARCHAR(50) NOT NULL,
        option_text TEXT NOT NULL,
        is_correct BOOLEAN,
        FOREIGN KEY (question_id) REFERENCES mcq_question_details(question_id)
    );

    // CP Details Table
    CREATE TABLE cp_details (
        practice_id VARCHAR(50) PRIMARY KEY,
        practice_name VARCHAR(200) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    // CP Coding Question Details Table
    CREATE TABLE cp_cq_details (
        cq_id VARCHAR(50) PRIMARY KEY,
        practice_id VARCHAR(50) NOT NULL,
        question_text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (practice_id) REFERENCES cp_details(practice_id)
    );

    // CP Configs Table
    CREATE TABLE cp_configs (
        cq_id VARCHAR(50) NOT NULL,
        default_code TEXT,
        PRIMARY KEY (cq_id),
        FOREIGN KEY (cq_id) REFERENCES cp_cq_details(cq_id)
    );

    // CQ Details Table
    CREATE TABLE cq_details (
        cq_id VARCHAR(50) PRIMARY KEY,
        question_text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    // CQ Default Code Details Table
    CREATE TABLE cq_default_code_details (
        code_id VARCHAR(50) PRIMARY KEY,
        cq_id VARCHAR(50) NOT NULL,
        default_code TEXT NOT NULL,
        FOREIGN KEY (cq_id) REFERENCES cq_details(cq_id)
    );

    // CQ Test Cases Details Table

`