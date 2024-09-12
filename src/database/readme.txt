Required tables 

users related
1. users  // user_id(PK), name, email, password(hash), role, created_at
2. user_basic_details //
3. user_product_details // entry_id(PK), user_id(FK), product_id(FK), purchased_date, expiry_date, amount_paid
4. user_resource_completion_details // user_id(FK), resource_id(FK), completion_percentage, last_attempted_date, is_completed, is_unlocked
5. user_journey_details // entry_id(PK), user_id(FK), latest_journey_step, journey_enum(FK), journey_id(FK), journey_start_date, journey_expected_end_date, journey_actual_end_date, is_journey_completed

Product related
1. product_details // product_id(PK), product_code, product_created_date, product_price, product_discount
2. product_journey_details // entry_id(PK), product_id(FK), journey_id(FK)

Journey related
1. Journey_details // journey_id(PK), Journey_name, created_at, product_journey_details, 

Content related
1. courses // course_id, course_name, created_at, course_description, course_image_url, order, category_enum(PK)
2. course_category_details // Category_id, category_enum, category_name, order, created_at

Topics related
1. Topics // topic_id, topic_name, duration, created_at

Unit related
1. Units // unit_id, unit_name, unit_type (SESSION or CHEAT_SHEET or MCQ_PRACTICE or CODING_PRACTICE or EXAM), duration, created_at, 

Resources related
1. Resources // resource_id (can be course_id or topic_id or unit_id), resource_type (COURSE or TOPIC or UNIT)
2. Resource_availability_plans // resource_id(FK), product_id(FK)
3. Resource_configs // resource_id(FK), default_unlock (true or false)

videos related
1. learning_video_details

Cheat Sheet related
1. learning_cheat_sheet_details

MCQ Practice related
1. MCQ_practice_details
2. MCQ_question_details
3. MCQ_options_details

Coding Practice related
1. CP_details
2. CP_CQ_details
3. CP_configs

Coding question details
1. CQ_details
2. CQ_default_code_details
3. CQ_test_cases_details

