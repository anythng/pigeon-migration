import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _food_contains_enum: any;
  _int4: any;
  _varchar: any;
  contact_status_enum: any;
  float8: any;
  food_item_media_type_enum: any;
  game_choice_status_enum: any;
  game_cuisines_filter_mode_enum: any;
  game_game_status_enum: any;
  game_unit_of_measure_enum: any;
  json: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  id: Scalars['Int'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type _food_contains_enum. All fields are combined with logical 'AND'. */
export type _Food_Contains_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars['_food_contains_enum']>;
  _gt?: Maybe<Scalars['_food_contains_enum']>;
  _gte?: Maybe<Scalars['_food_contains_enum']>;
  _in?: Maybe<Array<Scalars['_food_contains_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_food_contains_enum']>;
  _lte?: Maybe<Scalars['_food_contains_enum']>;
  _neq?: Maybe<Scalars['_food_contains_enum']>;
  _nin?: Maybe<Array<Scalars['_food_contains_enum']>>;
};


/** expression to compare columns of type _int4. All fields are combined with logical 'AND'. */
export type _Int4_Comparison_Exp = {
  _eq?: Maybe<Scalars['_int4']>;
  _gt?: Maybe<Scalars['_int4']>;
  _gte?: Maybe<Scalars['_int4']>;
  _in?: Maybe<Array<Scalars['_int4']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_int4']>;
  _lte?: Maybe<Scalars['_int4']>;
  _neq?: Maybe<Scalars['_int4']>;
  _nin?: Maybe<Array<Scalars['_int4']>>;
};


/** expression to compare columns of type _varchar. All fields are combined with logical 'AND'. */
export type _Varchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['_varchar']>;
  _gt?: Maybe<Scalars['_varchar']>;
  _gte?: Maybe<Scalars['_varchar']>;
  _in?: Maybe<Array<Scalars['_varchar']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_varchar']>;
  _lte?: Maybe<Scalars['_varchar']>;
  _neq?: Maybe<Scalars['_varchar']>;
  _nin?: Maybe<Array<Scalars['_varchar']>>;
};

/** columns and relationships of "authenticated" */
export type Authenticated = {
  __typename?: 'authenticated';
  active: Scalars['Boolean'];
  created_on: Scalars['timestamp'];
  id: Scalars['Int'];
  payload_hash: Scalars['String'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "authenticated" */
export type Authenticated_Aggregate = {
  __typename?: 'authenticated_aggregate';
  aggregate?: Maybe<Authenticated_Aggregate_Fields>;
  nodes: Array<Authenticated>;
};

/** aggregate fields of "authenticated" */
export type Authenticated_Aggregate_Fields = {
  __typename?: 'authenticated_aggregate_fields';
  avg?: Maybe<Authenticated_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Authenticated_Max_Fields>;
  min?: Maybe<Authenticated_Min_Fields>;
  stddev?: Maybe<Authenticated_Stddev_Fields>;
  stddev_pop?: Maybe<Authenticated_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Authenticated_Stddev_Samp_Fields>;
  sum?: Maybe<Authenticated_Sum_Fields>;
  var_pop?: Maybe<Authenticated_Var_Pop_Fields>;
  var_samp?: Maybe<Authenticated_Var_Samp_Fields>;
  variance?: Maybe<Authenticated_Variance_Fields>;
};


/** aggregate fields of "authenticated" */
export type Authenticated_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Authenticated_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "authenticated" */
export type Authenticated_Aggregate_Order_By = {
  avg?: Maybe<Authenticated_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Authenticated_Max_Order_By>;
  min?: Maybe<Authenticated_Min_Order_By>;
  stddev?: Maybe<Authenticated_Stddev_Order_By>;
  stddev_pop?: Maybe<Authenticated_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Authenticated_Stddev_Samp_Order_By>;
  sum?: Maybe<Authenticated_Sum_Order_By>;
  var_pop?: Maybe<Authenticated_Var_Pop_Order_By>;
  var_samp?: Maybe<Authenticated_Var_Samp_Order_By>;
  variance?: Maybe<Authenticated_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "authenticated" */
export type Authenticated_Arr_Rel_Insert_Input = {
  data: Array<Authenticated_Insert_Input>;
  on_conflict?: Maybe<Authenticated_On_Conflict>;
};

/** aggregate avg on columns */
export type Authenticated_Avg_Fields = {
  __typename?: 'authenticated_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "authenticated" */
export type Authenticated_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "authenticated". All fields are combined with a logical 'AND'. */
export type Authenticated_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Authenticated_Bool_Exp>>>;
  _not?: Maybe<Authenticated_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Authenticated_Bool_Exp>>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  created_on?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  payload_hash?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "authenticated" */
export enum Authenticated_Constraint {
  /** unique or primary key constraint */
  Pk_170fa06690c73d5f53d44b76e90 = 'PK_170fa06690c73d5f53d44b76e90'
}

/** input type for incrementing integer column in table "authenticated" */
export type Authenticated_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "authenticated" */
export type Authenticated_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  created_on?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  payload_hash?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Authenticated_Max_Fields = {
  __typename?: 'authenticated_max_fields';
  created_on?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  payload_hash?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "authenticated" */
export type Authenticated_Max_Order_By = {
  created_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payload_hash?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Authenticated_Min_Fields = {
  __typename?: 'authenticated_min_fields';
  created_on?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  payload_hash?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "authenticated" */
export type Authenticated_Min_Order_By = {
  created_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payload_hash?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "authenticated" */
export type Authenticated_Mutation_Response = {
  __typename?: 'authenticated_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Authenticated>;
};

/** input type for inserting object relation for remote table "authenticated" */
export type Authenticated_Obj_Rel_Insert_Input = {
  data: Authenticated_Insert_Input;
  on_conflict?: Maybe<Authenticated_On_Conflict>;
};

/** on conflict condition type for table "authenticated" */
export type Authenticated_On_Conflict = {
  constraint: Authenticated_Constraint;
  update_columns: Array<Authenticated_Update_Column>;
  where?: Maybe<Authenticated_Bool_Exp>;
};

/** ordering options when selecting data from "authenticated" */
export type Authenticated_Order_By = {
  active?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payload_hash?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "authenticated" */
export type Authenticated_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "authenticated" */
export enum Authenticated_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Id = 'id',
  /** column name */
  PayloadHash = 'payload_hash',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "authenticated" */
export type Authenticated_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  created_on?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  payload_hash?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Authenticated_Stddev_Fields = {
  __typename?: 'authenticated_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "authenticated" */
export type Authenticated_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Authenticated_Stddev_Pop_Fields = {
  __typename?: 'authenticated_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "authenticated" */
export type Authenticated_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Authenticated_Stddev_Samp_Fields = {
  __typename?: 'authenticated_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "authenticated" */
export type Authenticated_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Authenticated_Sum_Fields = {
  __typename?: 'authenticated_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "authenticated" */
export type Authenticated_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "authenticated" */
export enum Authenticated_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  Id = 'id',
  /** column name */
  PayloadHash = 'payload_hash',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Authenticated_Var_Pop_Fields = {
  __typename?: 'authenticated_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "authenticated" */
export type Authenticated_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Authenticated_Var_Samp_Fields = {
  __typename?: 'authenticated_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "authenticated" */
export type Authenticated_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Authenticated_Variance_Fields = {
  __typename?: 'authenticated_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "authenticated" */
export type Authenticated_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "contact" */
export type Contact = {
  __typename?: 'contact';
  /** An object relationship */
  contact: User;
  contact_id: Scalars['Int'];
  id: Scalars['Int'];
  status: Scalars['contact_status_enum'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};

/** aggregated selection of "contact" */
export type Contact_Aggregate = {
  __typename?: 'contact_aggregate';
  aggregate?: Maybe<Contact_Aggregate_Fields>;
  nodes: Array<Contact>;
};

/** aggregate fields of "contact" */
export type Contact_Aggregate_Fields = {
  __typename?: 'contact_aggregate_fields';
  avg?: Maybe<Contact_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contact_Max_Fields>;
  min?: Maybe<Contact_Min_Fields>;
  stddev?: Maybe<Contact_Stddev_Fields>;
  stddev_pop?: Maybe<Contact_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contact_Stddev_Samp_Fields>;
  sum?: Maybe<Contact_Sum_Fields>;
  var_pop?: Maybe<Contact_Var_Pop_Fields>;
  var_samp?: Maybe<Contact_Var_Samp_Fields>;
  variance?: Maybe<Contact_Variance_Fields>;
};


/** aggregate fields of "contact" */
export type Contact_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contact_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact" */
export type Contact_Aggregate_Order_By = {
  avg?: Maybe<Contact_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Contact_Max_Order_By>;
  min?: Maybe<Contact_Min_Order_By>;
  stddev?: Maybe<Contact_Stddev_Order_By>;
  stddev_pop?: Maybe<Contact_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Contact_Stddev_Samp_Order_By>;
  sum?: Maybe<Contact_Sum_Order_By>;
  var_pop?: Maybe<Contact_Var_Pop_Order_By>;
  var_samp?: Maybe<Contact_Var_Samp_Order_By>;
  variance?: Maybe<Contact_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "contact" */
export type Contact_Arr_Rel_Insert_Input = {
  data: Array<Contact_Insert_Input>;
  on_conflict?: Maybe<Contact_On_Conflict>;
};

/** aggregate avg on columns */
export type Contact_Avg_Fields = {
  __typename?: 'contact_avg_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "contact" */
export type Contact_Avg_Order_By = {
  contact_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contact". All fields are combined with a logical 'AND'. */
export type Contact_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contact_Bool_Exp>>>;
  _not?: Maybe<Contact_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contact_Bool_Exp>>>;
  contact?: Maybe<User_Bool_Exp>;
  contact_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<Contact_Status_Enum_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact" */
export enum Contact_Constraint {
  /** unique or primary key constraint */
  Pk_2cbbe00f59ab6b3bb5b8d19f989 = 'PK_2cbbe00f59ab6b3bb5b8d19f989'
}

/** input type for incrementing integer column in table "contact" */
export type Contact_Inc_Input = {
  contact_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "contact" */
export type Contact_Insert_Input = {
  contact?: Maybe<User_Obj_Rel_Insert_Input>;
  contact_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['contact_status_enum']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Contact_Max_Fields = {
  __typename?: 'contact_max_fields';
  contact_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "contact" */
export type Contact_Max_Order_By = {
  contact_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Min_Fields = {
  __typename?: 'contact_min_fields';
  contact_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "contact" */
export type Contact_Min_Order_By = {
  contact_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "contact" */
export type Contact_Mutation_Response = {
  __typename?: 'contact_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contact>;
};

/** input type for inserting object relation for remote table "contact" */
export type Contact_Obj_Rel_Insert_Input = {
  data: Contact_Insert_Input;
  on_conflict?: Maybe<Contact_On_Conflict>;
};

/** on conflict condition type for table "contact" */
export type Contact_On_Conflict = {
  constraint: Contact_Constraint;
  update_columns: Array<Contact_Update_Column>;
  where?: Maybe<Contact_Bool_Exp>;
};

/** ordering options when selecting data from "contact" */
export type Contact_Order_By = {
  contact?: Maybe<User_Order_By>;
  contact_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "contact" */
export type Contact_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "contact" */
export enum Contact_Select_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "contact" */
export type Contact_Set_Input = {
  contact_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['contact_status_enum']>;
  user_id?: Maybe<Scalars['Int']>;
};


/** expression to compare columns of type contact_status_enum. All fields are combined with logical 'AND'. */
export type Contact_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars['contact_status_enum']>;
  _gt?: Maybe<Scalars['contact_status_enum']>;
  _gte?: Maybe<Scalars['contact_status_enum']>;
  _in?: Maybe<Array<Scalars['contact_status_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['contact_status_enum']>;
  _lte?: Maybe<Scalars['contact_status_enum']>;
  _neq?: Maybe<Scalars['contact_status_enum']>;
  _nin?: Maybe<Array<Scalars['contact_status_enum']>>;
};

/** aggregate stddev on columns */
export type Contact_Stddev_Fields = {
  __typename?: 'contact_stddev_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "contact" */
export type Contact_Stddev_Order_By = {
  contact_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contact_Stddev_Pop_Fields = {
  __typename?: 'contact_stddev_pop_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "contact" */
export type Contact_Stddev_Pop_Order_By = {
  contact_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contact_Stddev_Samp_Fields = {
  __typename?: 'contact_stddev_samp_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "contact" */
export type Contact_Stddev_Samp_Order_By = {
  contact_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Contact_Sum_Fields = {
  __typename?: 'contact_sum_fields';
  contact_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "contact" */
export type Contact_Sum_Order_By = {
  contact_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "contact" */
export enum Contact_Update_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Contact_Var_Pop_Fields = {
  __typename?: 'contact_var_pop_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "contact" */
export type Contact_Var_Pop_Order_By = {
  contact_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contact_Var_Samp_Fields = {
  __typename?: 'contact_var_samp_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "contact" */
export type Contact_Var_Samp_Order_By = {
  contact_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Contact_Variance_Fields = {
  __typename?: 'contact_variance_fields';
  contact_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "contact" */
export type Contact_Variance_Order_By = {
  contact_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "cuisine" */
export type Cuisine = {
  __typename?: 'cuisine';
  /** An array relationship */
  game_cuisines: Array<Game_Cuisine>;
  /** An aggregated array relationship */
  game_cuisines_aggregate: Game_Cuisine_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  restaurant_cuisines: Array<Restaurant_Cuisine>;
  /** An aggregated array relationship */
  restaurant_cuisines_aggregate: Restaurant_Cuisine_Aggregate;
};


/** columns and relationships of "cuisine" */
export type CuisineGame_CuisinesArgs = {
  distinct_on?: Maybe<Array<Game_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Cuisine_Order_By>>;
  where?: Maybe<Game_Cuisine_Bool_Exp>;
};


/** columns and relationships of "cuisine" */
export type CuisineGame_Cuisines_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Cuisine_Order_By>>;
  where?: Maybe<Game_Cuisine_Bool_Exp>;
};


/** columns and relationships of "cuisine" */
export type CuisineRestaurant_CuisinesArgs = {
  distinct_on?: Maybe<Array<Restaurant_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Cuisine_Order_By>>;
  where?: Maybe<Restaurant_Cuisine_Bool_Exp>;
};


/** columns and relationships of "cuisine" */
export type CuisineRestaurant_Cuisines_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Cuisine_Order_By>>;
  where?: Maybe<Restaurant_Cuisine_Bool_Exp>;
};

/** aggregated selection of "cuisine" */
export type Cuisine_Aggregate = {
  __typename?: 'cuisine_aggregate';
  aggregate?: Maybe<Cuisine_Aggregate_Fields>;
  nodes: Array<Cuisine>;
};

/** aggregate fields of "cuisine" */
export type Cuisine_Aggregate_Fields = {
  __typename?: 'cuisine_aggregate_fields';
  avg?: Maybe<Cuisine_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Cuisine_Max_Fields>;
  min?: Maybe<Cuisine_Min_Fields>;
  stddev?: Maybe<Cuisine_Stddev_Fields>;
  stddev_pop?: Maybe<Cuisine_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cuisine_Stddev_Samp_Fields>;
  sum?: Maybe<Cuisine_Sum_Fields>;
  var_pop?: Maybe<Cuisine_Var_Pop_Fields>;
  var_samp?: Maybe<Cuisine_Var_Samp_Fields>;
  variance?: Maybe<Cuisine_Variance_Fields>;
};


/** aggregate fields of "cuisine" */
export type Cuisine_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cuisine_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cuisine" */
export type Cuisine_Aggregate_Order_By = {
  avg?: Maybe<Cuisine_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Cuisine_Max_Order_By>;
  min?: Maybe<Cuisine_Min_Order_By>;
  stddev?: Maybe<Cuisine_Stddev_Order_By>;
  stddev_pop?: Maybe<Cuisine_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Cuisine_Stddev_Samp_Order_By>;
  sum?: Maybe<Cuisine_Sum_Order_By>;
  var_pop?: Maybe<Cuisine_Var_Pop_Order_By>;
  var_samp?: Maybe<Cuisine_Var_Samp_Order_By>;
  variance?: Maybe<Cuisine_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cuisine" */
export type Cuisine_Arr_Rel_Insert_Input = {
  data: Array<Cuisine_Insert_Input>;
  on_conflict?: Maybe<Cuisine_On_Conflict>;
};

/** aggregate avg on columns */
export type Cuisine_Avg_Fields = {
  __typename?: 'cuisine_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "cuisine" */
export type Cuisine_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cuisine". All fields are combined with a logical 'AND'. */
export type Cuisine_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Cuisine_Bool_Exp>>>;
  _not?: Maybe<Cuisine_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Cuisine_Bool_Exp>>>;
  game_cuisines?: Maybe<Game_Cuisine_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  restaurant_cuisines?: Maybe<Restaurant_Cuisine_Bool_Exp>;
};

/** unique or primary key constraints on table "cuisine" */
export enum Cuisine_Constraint {
  /** unique or primary key constraint */
  PkD4c1e9427b94335350fecaf238e = 'PK_d4c1e9427b94335350fecaf238e'
}

/** input type for incrementing integer column in table "cuisine" */
export type Cuisine_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "cuisine" */
export type Cuisine_Insert_Input = {
  game_cuisines?: Maybe<Game_Cuisine_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  restaurant_cuisines?: Maybe<Restaurant_Cuisine_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Cuisine_Max_Fields = {
  __typename?: 'cuisine_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "cuisine" */
export type Cuisine_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Cuisine_Min_Fields = {
  __typename?: 'cuisine_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "cuisine" */
export type Cuisine_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "cuisine" */
export type Cuisine_Mutation_Response = {
  __typename?: 'cuisine_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Cuisine>;
};

/** input type for inserting object relation for remote table "cuisine" */
export type Cuisine_Obj_Rel_Insert_Input = {
  data: Cuisine_Insert_Input;
  on_conflict?: Maybe<Cuisine_On_Conflict>;
};

/** on conflict condition type for table "cuisine" */
export type Cuisine_On_Conflict = {
  constraint: Cuisine_Constraint;
  update_columns: Array<Cuisine_Update_Column>;
  where?: Maybe<Cuisine_Bool_Exp>;
};

/** ordering options when selecting data from "cuisine" */
export type Cuisine_Order_By = {
  game_cuisines_aggregate?: Maybe<Game_Cuisine_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  restaurant_cuisines_aggregate?: Maybe<Restaurant_Cuisine_Aggregate_Order_By>;
};

/** primary key columns input for table: "cuisine" */
export type Cuisine_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "cuisine" */
export enum Cuisine_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "cuisine" */
export type Cuisine_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Cuisine_Stddev_Fields = {
  __typename?: 'cuisine_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "cuisine" */
export type Cuisine_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cuisine_Stddev_Pop_Fields = {
  __typename?: 'cuisine_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "cuisine" */
export type Cuisine_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cuisine_Stddev_Samp_Fields = {
  __typename?: 'cuisine_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "cuisine" */
export type Cuisine_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Cuisine_Sum_Fields = {
  __typename?: 'cuisine_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "cuisine" */
export type Cuisine_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "cuisine" */
export enum Cuisine_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Cuisine_Var_Pop_Fields = {
  __typename?: 'cuisine_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "cuisine" */
export type Cuisine_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cuisine_Var_Samp_Fields = {
  __typename?: 'cuisine_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "cuisine" */
export type Cuisine_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Cuisine_Variance_Fields = {
  __typename?: 'cuisine_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "cuisine" */
export type Cuisine_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "favorite_item_entity" */
export type Favorite_Item_Entity = {
  __typename?: 'favorite_item_entity';
  foodItemId: Scalars['Int'];
  isFavorite: Scalars['Boolean'];
  userId: Scalars['Int'];
};

/** aggregated selection of "favorite_item_entity" */
export type Favorite_Item_Entity_Aggregate = {
  __typename?: 'favorite_item_entity_aggregate';
  aggregate?: Maybe<Favorite_Item_Entity_Aggregate_Fields>;
  nodes: Array<Favorite_Item_Entity>;
};

/** aggregate fields of "favorite_item_entity" */
export type Favorite_Item_Entity_Aggregate_Fields = {
  __typename?: 'favorite_item_entity_aggregate_fields';
  avg?: Maybe<Favorite_Item_Entity_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Favorite_Item_Entity_Max_Fields>;
  min?: Maybe<Favorite_Item_Entity_Min_Fields>;
  stddev?: Maybe<Favorite_Item_Entity_Stddev_Fields>;
  stddev_pop?: Maybe<Favorite_Item_Entity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Favorite_Item_Entity_Stddev_Samp_Fields>;
  sum?: Maybe<Favorite_Item_Entity_Sum_Fields>;
  var_pop?: Maybe<Favorite_Item_Entity_Var_Pop_Fields>;
  var_samp?: Maybe<Favorite_Item_Entity_Var_Samp_Fields>;
  variance?: Maybe<Favorite_Item_Entity_Variance_Fields>;
};


/** aggregate fields of "favorite_item_entity" */
export type Favorite_Item_Entity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Favorite_Item_Entity_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "favorite_item_entity" */
export type Favorite_Item_Entity_Aggregate_Order_By = {
  avg?: Maybe<Favorite_Item_Entity_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Favorite_Item_Entity_Max_Order_By>;
  min?: Maybe<Favorite_Item_Entity_Min_Order_By>;
  stddev?: Maybe<Favorite_Item_Entity_Stddev_Order_By>;
  stddev_pop?: Maybe<Favorite_Item_Entity_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Favorite_Item_Entity_Stddev_Samp_Order_By>;
  sum?: Maybe<Favorite_Item_Entity_Sum_Order_By>;
  var_pop?: Maybe<Favorite_Item_Entity_Var_Pop_Order_By>;
  var_samp?: Maybe<Favorite_Item_Entity_Var_Samp_Order_By>;
  variance?: Maybe<Favorite_Item_Entity_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "favorite_item_entity" */
export type Favorite_Item_Entity_Arr_Rel_Insert_Input = {
  data: Array<Favorite_Item_Entity_Insert_Input>;
  on_conflict?: Maybe<Favorite_Item_Entity_On_Conflict>;
};

/** aggregate avg on columns */
export type Favorite_Item_Entity_Avg_Fields = {
  __typename?: 'favorite_item_entity_avg_fields';
  foodItemId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "favorite_item_entity" */
export type Favorite_Item_Entity_Avg_Order_By = {
  foodItemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "favorite_item_entity". All fields are combined with a logical 'AND'. */
export type Favorite_Item_Entity_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Favorite_Item_Entity_Bool_Exp>>>;
  _not?: Maybe<Favorite_Item_Entity_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Favorite_Item_Entity_Bool_Exp>>>;
  foodItemId?: Maybe<Int_Comparison_Exp>;
  isFavorite?: Maybe<Boolean_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "favorite_item_entity" */
export enum Favorite_Item_Entity_Constraint {
  /** unique or primary key constraint */
  Pk_0c940960af1d3bffcb1ae7bc2c8 = 'PK_0c940960af1d3bffcb1ae7bc2c8'
}

/** input type for incrementing integer column in table "favorite_item_entity" */
export type Favorite_Item_Entity_Inc_Input = {
  foodItemId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "favorite_item_entity" */
export type Favorite_Item_Entity_Insert_Input = {
  foodItemId?: Maybe<Scalars['Int']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Favorite_Item_Entity_Max_Fields = {
  __typename?: 'favorite_item_entity_max_fields';
  foodItemId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "favorite_item_entity" */
export type Favorite_Item_Entity_Max_Order_By = {
  foodItemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Favorite_Item_Entity_Min_Fields = {
  __typename?: 'favorite_item_entity_min_fields';
  foodItemId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "favorite_item_entity" */
export type Favorite_Item_Entity_Min_Order_By = {
  foodItemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "favorite_item_entity" */
export type Favorite_Item_Entity_Mutation_Response = {
  __typename?: 'favorite_item_entity_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Favorite_Item_Entity>;
};

/** input type for inserting object relation for remote table "favorite_item_entity" */
export type Favorite_Item_Entity_Obj_Rel_Insert_Input = {
  data: Favorite_Item_Entity_Insert_Input;
  on_conflict?: Maybe<Favorite_Item_Entity_On_Conflict>;
};

/** on conflict condition type for table "favorite_item_entity" */
export type Favorite_Item_Entity_On_Conflict = {
  constraint: Favorite_Item_Entity_Constraint;
  update_columns: Array<Favorite_Item_Entity_Update_Column>;
  where?: Maybe<Favorite_Item_Entity_Bool_Exp>;
};

/** ordering options when selecting data from "favorite_item_entity" */
export type Favorite_Item_Entity_Order_By = {
  foodItemId?: Maybe<Order_By>;
  isFavorite?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "favorite_item_entity" */
export type Favorite_Item_Entity_Pk_Columns_Input = {
  foodItemId: Scalars['Int'];
  userId: Scalars['Int'];
};

/** select columns of table "favorite_item_entity" */
export enum Favorite_Item_Entity_Select_Column {
  /** column name */
  FoodItemId = 'foodItemId',
  /** column name */
  IsFavorite = 'isFavorite',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "favorite_item_entity" */
export type Favorite_Item_Entity_Set_Input = {
  foodItemId?: Maybe<Scalars['Int']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Favorite_Item_Entity_Stddev_Fields = {
  __typename?: 'favorite_item_entity_stddev_fields';
  foodItemId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "favorite_item_entity" */
export type Favorite_Item_Entity_Stddev_Order_By = {
  foodItemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Favorite_Item_Entity_Stddev_Pop_Fields = {
  __typename?: 'favorite_item_entity_stddev_pop_fields';
  foodItemId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "favorite_item_entity" */
export type Favorite_Item_Entity_Stddev_Pop_Order_By = {
  foodItemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Favorite_Item_Entity_Stddev_Samp_Fields = {
  __typename?: 'favorite_item_entity_stddev_samp_fields';
  foodItemId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "favorite_item_entity" */
export type Favorite_Item_Entity_Stddev_Samp_Order_By = {
  foodItemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Favorite_Item_Entity_Sum_Fields = {
  __typename?: 'favorite_item_entity_sum_fields';
  foodItemId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "favorite_item_entity" */
export type Favorite_Item_Entity_Sum_Order_By = {
  foodItemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** update columns of table "favorite_item_entity" */
export enum Favorite_Item_Entity_Update_Column {
  /** column name */
  FoodItemId = 'foodItemId',
  /** column name */
  IsFavorite = 'isFavorite',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Favorite_Item_Entity_Var_Pop_Fields = {
  __typename?: 'favorite_item_entity_var_pop_fields';
  foodItemId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "favorite_item_entity" */
export type Favorite_Item_Entity_Var_Pop_Order_By = {
  foodItemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Favorite_Item_Entity_Var_Samp_Fields = {
  __typename?: 'favorite_item_entity_var_samp_fields';
  foodItemId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "favorite_item_entity" */
export type Favorite_Item_Entity_Var_Samp_Order_By = {
  foodItemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Favorite_Item_Entity_Variance_Fields = {
  __typename?: 'favorite_item_entity_variance_fields';
  foodItemId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "favorite_item_entity" */
export type Favorite_Item_Entity_Variance_Order_By = {
  foodItemId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "food_item" */
export type Food_Item = {
  __typename?: 'food_item';
  animal_products: Scalars['_food_contains_enum'];
  beef: Scalars['_food_contains_enum'];
  chicken: Scalars['_food_contains_enum'];
  description: Scalars['String'];
  exotic: Scalars['_food_contains_enum'];
  fish: Scalars['_food_contains_enum'];
  /** An array relationship */
  food_item_media: Array<Food_Item_Media>;
  /** An aggregated array relationship */
  food_item_media_aggregate: Food_Item_Media_Aggregate;
  gluten: Scalars['_food_contains_enum'];
  id: Scalars['Int'];
  is_game_ready: Scalars['Boolean'];
  name: Scalars['String'];
  pork: Scalars['_food_contains_enum'];
  /** An array relationship */
  restaurant_items: Array<Restaurant_Item>;
  /** An aggregated array relationship */
  restaurant_items_aggregate: Restaurant_Item_Aggregate;
  shellfish: Scalars['_food_contains_enum'];
  turkey: Scalars['_food_contains_enum'];
};


/** columns and relationships of "food_item" */
export type Food_ItemFood_Item_MediaArgs = {
  distinct_on?: Maybe<Array<Food_Item_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Media_Order_By>>;
  where?: Maybe<Food_Item_Media_Bool_Exp>;
};


/** columns and relationships of "food_item" */
export type Food_ItemFood_Item_Media_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Item_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Media_Order_By>>;
  where?: Maybe<Food_Item_Media_Bool_Exp>;
};


/** columns and relationships of "food_item" */
export type Food_ItemRestaurant_ItemsArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};


/** columns and relationships of "food_item" */
export type Food_ItemRestaurant_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};

/** aggregated selection of "food_item" */
export type Food_Item_Aggregate = {
  __typename?: 'food_item_aggregate';
  aggregate?: Maybe<Food_Item_Aggregate_Fields>;
  nodes: Array<Food_Item>;
};

/** aggregate fields of "food_item" */
export type Food_Item_Aggregate_Fields = {
  __typename?: 'food_item_aggregate_fields';
  avg?: Maybe<Food_Item_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Food_Item_Max_Fields>;
  min?: Maybe<Food_Item_Min_Fields>;
  stddev?: Maybe<Food_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Food_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Food_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Food_Item_Sum_Fields>;
  var_pop?: Maybe<Food_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Food_Item_Var_Samp_Fields>;
  variance?: Maybe<Food_Item_Variance_Fields>;
};


/** aggregate fields of "food_item" */
export type Food_Item_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Food_Item_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "food_item" */
export type Food_Item_Aggregate_Order_By = {
  avg?: Maybe<Food_Item_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Food_Item_Max_Order_By>;
  min?: Maybe<Food_Item_Min_Order_By>;
  stddev?: Maybe<Food_Item_Stddev_Order_By>;
  stddev_pop?: Maybe<Food_Item_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Food_Item_Stddev_Samp_Order_By>;
  sum?: Maybe<Food_Item_Sum_Order_By>;
  var_pop?: Maybe<Food_Item_Var_Pop_Order_By>;
  var_samp?: Maybe<Food_Item_Var_Samp_Order_By>;
  variance?: Maybe<Food_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "food_item" */
export type Food_Item_Arr_Rel_Insert_Input = {
  data: Array<Food_Item_Insert_Input>;
  on_conflict?: Maybe<Food_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Food_Item_Avg_Fields = {
  __typename?: 'food_item_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "food_item" */
export type Food_Item_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "food_item". All fields are combined with a logical 'AND'. */
export type Food_Item_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Food_Item_Bool_Exp>>>;
  _not?: Maybe<Food_Item_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Food_Item_Bool_Exp>>>;
  animal_products?: Maybe<_Food_Contains_Enum_Comparison_Exp>;
  beef?: Maybe<_Food_Contains_Enum_Comparison_Exp>;
  chicken?: Maybe<_Food_Contains_Enum_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  exotic?: Maybe<_Food_Contains_Enum_Comparison_Exp>;
  fish?: Maybe<_Food_Contains_Enum_Comparison_Exp>;
  food_item_media?: Maybe<Food_Item_Media_Bool_Exp>;
  gluten?: Maybe<_Food_Contains_Enum_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_game_ready?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  pork?: Maybe<_Food_Contains_Enum_Comparison_Exp>;
  restaurant_items?: Maybe<Restaurant_Item_Bool_Exp>;
  shellfish?: Maybe<_Food_Contains_Enum_Comparison_Exp>;
  turkey?: Maybe<_Food_Contains_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "food_item" */
export enum Food_Item_Constraint {
  /** unique or primary key constraint */
  Pk_057940b0225785ec693de562cf4 = 'PK_057940b0225785ec693de562cf4'
}

/** input type for incrementing integer column in table "food_item" */
export type Food_Item_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "food_item" */
export type Food_Item_Insert_Input = {
  animal_products?: Maybe<Scalars['_food_contains_enum']>;
  beef?: Maybe<Scalars['_food_contains_enum']>;
  chicken?: Maybe<Scalars['_food_contains_enum']>;
  description?: Maybe<Scalars['String']>;
  exotic?: Maybe<Scalars['_food_contains_enum']>;
  fish?: Maybe<Scalars['_food_contains_enum']>;
  food_item_media?: Maybe<Food_Item_Media_Arr_Rel_Insert_Input>;
  gluten?: Maybe<Scalars['_food_contains_enum']>;
  id?: Maybe<Scalars['Int']>;
  is_game_ready?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  pork?: Maybe<Scalars['_food_contains_enum']>;
  restaurant_items?: Maybe<Restaurant_Item_Arr_Rel_Insert_Input>;
  shellfish?: Maybe<Scalars['_food_contains_enum']>;
  turkey?: Maybe<Scalars['_food_contains_enum']>;
};

/** aggregate max on columns */
export type Food_Item_Max_Fields = {
  __typename?: 'food_item_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "food_item" */
export type Food_Item_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** columns and relationships of "food_item_media" */
export type Food_Item_Media = {
  __typename?: 'food_item_media';
  author_id: Scalars['Int'];
  caption?: Maybe<Scalars['String']>;
  /** An object relationship */
  food_item: Food_Item;
  food_item_id: Scalars['Int'];
  /** An array relationship */
  game_choices: Array<Game_Choice>;
  /** An aggregated array relationship */
  game_choices_aggregate: Game_Choice_Aggregate;
  id: Scalars['Int'];
  /** An object relationship */
  media_author: Media_Author;
  src: Scalars['String'];
  type: Scalars['food_item_media_type_enum'];
};


/** columns and relationships of "food_item_media" */
export type Food_Item_MediaGame_ChoicesArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};


/** columns and relationships of "food_item_media" */
export type Food_Item_MediaGame_Choices_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};

/** aggregated selection of "food_item_media" */
export type Food_Item_Media_Aggregate = {
  __typename?: 'food_item_media_aggregate';
  aggregate?: Maybe<Food_Item_Media_Aggregate_Fields>;
  nodes: Array<Food_Item_Media>;
};

/** aggregate fields of "food_item_media" */
export type Food_Item_Media_Aggregate_Fields = {
  __typename?: 'food_item_media_aggregate_fields';
  avg?: Maybe<Food_Item_Media_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Food_Item_Media_Max_Fields>;
  min?: Maybe<Food_Item_Media_Min_Fields>;
  stddev?: Maybe<Food_Item_Media_Stddev_Fields>;
  stddev_pop?: Maybe<Food_Item_Media_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Food_Item_Media_Stddev_Samp_Fields>;
  sum?: Maybe<Food_Item_Media_Sum_Fields>;
  var_pop?: Maybe<Food_Item_Media_Var_Pop_Fields>;
  var_samp?: Maybe<Food_Item_Media_Var_Samp_Fields>;
  variance?: Maybe<Food_Item_Media_Variance_Fields>;
};


/** aggregate fields of "food_item_media" */
export type Food_Item_Media_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Food_Item_Media_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "food_item_media" */
export type Food_Item_Media_Aggregate_Order_By = {
  avg?: Maybe<Food_Item_Media_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Food_Item_Media_Max_Order_By>;
  min?: Maybe<Food_Item_Media_Min_Order_By>;
  stddev?: Maybe<Food_Item_Media_Stddev_Order_By>;
  stddev_pop?: Maybe<Food_Item_Media_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Food_Item_Media_Stddev_Samp_Order_By>;
  sum?: Maybe<Food_Item_Media_Sum_Order_By>;
  var_pop?: Maybe<Food_Item_Media_Var_Pop_Order_By>;
  var_samp?: Maybe<Food_Item_Media_Var_Samp_Order_By>;
  variance?: Maybe<Food_Item_Media_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "food_item_media" */
export type Food_Item_Media_Arr_Rel_Insert_Input = {
  data: Array<Food_Item_Media_Insert_Input>;
  on_conflict?: Maybe<Food_Item_Media_On_Conflict>;
};

/** aggregate avg on columns */
export type Food_Item_Media_Avg_Fields = {
  __typename?: 'food_item_media_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "food_item_media" */
export type Food_Item_Media_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "food_item_media". All fields are combined with a logical 'AND'. */
export type Food_Item_Media_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Food_Item_Media_Bool_Exp>>>;
  _not?: Maybe<Food_Item_Media_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Food_Item_Media_Bool_Exp>>>;
  author_id?: Maybe<Int_Comparison_Exp>;
  caption?: Maybe<String_Comparison_Exp>;
  food_item?: Maybe<Food_Item_Bool_Exp>;
  food_item_id?: Maybe<Int_Comparison_Exp>;
  game_choices?: Maybe<Game_Choice_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  media_author?: Maybe<Media_Author_Bool_Exp>;
  src?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Food_Item_Media_Type_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "food_item_media" */
export enum Food_Item_Media_Constraint {
  /** unique or primary key constraint */
  Pk_605b244ba6ab5b71a7debce9006 = 'PK_605b244ba6ab5b71a7debce9006'
}

/** input type for incrementing integer column in table "food_item_media" */
export type Food_Item_Media_Inc_Input = {
  author_id?: Maybe<Scalars['Int']>;
  food_item_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "food_item_media" */
export type Food_Item_Media_Insert_Input = {
  author_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  food_item?: Maybe<Food_Item_Obj_Rel_Insert_Input>;
  food_item_id?: Maybe<Scalars['Int']>;
  game_choices?: Maybe<Game_Choice_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  media_author?: Maybe<Media_Author_Obj_Rel_Insert_Input>;
  src?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['food_item_media_type_enum']>;
};

/** aggregate max on columns */
export type Food_Item_Media_Max_Fields = {
  __typename?: 'food_item_media_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  food_item_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "food_item_media" */
export type Food_Item_Media_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  caption?: Maybe<Order_By>;
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  src?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Food_Item_Media_Min_Fields = {
  __typename?: 'food_item_media_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  food_item_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "food_item_media" */
export type Food_Item_Media_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  caption?: Maybe<Order_By>;
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  src?: Maybe<Order_By>;
};

/** response of any mutation on the table "food_item_media" */
export type Food_Item_Media_Mutation_Response = {
  __typename?: 'food_item_media_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Food_Item_Media>;
};

/** input type for inserting object relation for remote table "food_item_media" */
export type Food_Item_Media_Obj_Rel_Insert_Input = {
  data: Food_Item_Media_Insert_Input;
  on_conflict?: Maybe<Food_Item_Media_On_Conflict>;
};

/** on conflict condition type for table "food_item_media" */
export type Food_Item_Media_On_Conflict = {
  constraint: Food_Item_Media_Constraint;
  update_columns: Array<Food_Item_Media_Update_Column>;
  where?: Maybe<Food_Item_Media_Bool_Exp>;
};

/** ordering options when selecting data from "food_item_media" */
export type Food_Item_Media_Order_By = {
  author_id?: Maybe<Order_By>;
  caption?: Maybe<Order_By>;
  food_item?: Maybe<Food_Item_Order_By>;
  food_item_id?: Maybe<Order_By>;
  game_choices_aggregate?: Maybe<Game_Choice_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  media_author?: Maybe<Media_Author_Order_By>;
  src?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "food_item_media" */
export type Food_Item_Media_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "food_item_media" */
export enum Food_Item_Media_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Caption = 'caption',
  /** column name */
  FoodItemId = 'food_item_id',
  /** column name */
  Id = 'id',
  /** column name */
  Src = 'src',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "food_item_media" */
export type Food_Item_Media_Set_Input = {
  author_id?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  food_item_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['food_item_media_type_enum']>;
};

/** aggregate stddev on columns */
export type Food_Item_Media_Stddev_Fields = {
  __typename?: 'food_item_media_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "food_item_media" */
export type Food_Item_Media_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Food_Item_Media_Stddev_Pop_Fields = {
  __typename?: 'food_item_media_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "food_item_media" */
export type Food_Item_Media_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Food_Item_Media_Stddev_Samp_Fields = {
  __typename?: 'food_item_media_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "food_item_media" */
export type Food_Item_Media_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Food_Item_Media_Sum_Fields = {
  __typename?: 'food_item_media_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  food_item_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "food_item_media" */
export type Food_Item_Media_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type food_item_media_type_enum. All fields are combined with logical 'AND'. */
export type Food_Item_Media_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars['food_item_media_type_enum']>;
  _gt?: Maybe<Scalars['food_item_media_type_enum']>;
  _gte?: Maybe<Scalars['food_item_media_type_enum']>;
  _in?: Maybe<Array<Scalars['food_item_media_type_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['food_item_media_type_enum']>;
  _lte?: Maybe<Scalars['food_item_media_type_enum']>;
  _neq?: Maybe<Scalars['food_item_media_type_enum']>;
  _nin?: Maybe<Array<Scalars['food_item_media_type_enum']>>;
};

/** update columns of table "food_item_media" */
export enum Food_Item_Media_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Caption = 'caption',
  /** column name */
  FoodItemId = 'food_item_id',
  /** column name */
  Id = 'id',
  /** column name */
  Src = 'src',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Food_Item_Media_Var_Pop_Fields = {
  __typename?: 'food_item_media_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "food_item_media" */
export type Food_Item_Media_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Food_Item_Media_Var_Samp_Fields = {
  __typename?: 'food_item_media_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "food_item_media" */
export type Food_Item_Media_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Food_Item_Media_Variance_Fields = {
  __typename?: 'food_item_media_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "food_item_media" */
export type Food_Item_Media_Variance_Order_By = {
  author_id?: Maybe<Order_By>;
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Food_Item_Min_Fields = {
  __typename?: 'food_item_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "food_item" */
export type Food_Item_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "food_item" */
export type Food_Item_Mutation_Response = {
  __typename?: 'food_item_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Food_Item>;
};

/** input type for inserting object relation for remote table "food_item" */
export type Food_Item_Obj_Rel_Insert_Input = {
  data: Food_Item_Insert_Input;
  on_conflict?: Maybe<Food_Item_On_Conflict>;
};

/** on conflict condition type for table "food_item" */
export type Food_Item_On_Conflict = {
  constraint: Food_Item_Constraint;
  update_columns: Array<Food_Item_Update_Column>;
  where?: Maybe<Food_Item_Bool_Exp>;
};

/** ordering options when selecting data from "food_item" */
export type Food_Item_Order_By = {
  animal_products?: Maybe<Order_By>;
  beef?: Maybe<Order_By>;
  chicken?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  exotic?: Maybe<Order_By>;
  fish?: Maybe<Order_By>;
  food_item_media_aggregate?: Maybe<Food_Item_Media_Aggregate_Order_By>;
  gluten?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_game_ready?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  pork?: Maybe<Order_By>;
  restaurant_items_aggregate?: Maybe<Restaurant_Item_Aggregate_Order_By>;
  shellfish?: Maybe<Order_By>;
  turkey?: Maybe<Order_By>;
};

/** primary key columns input for table: "food_item" */
export type Food_Item_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "food_item" */
export enum Food_Item_Select_Column {
  /** column name */
  AnimalProducts = 'animal_products',
  /** column name */
  Beef = 'beef',
  /** column name */
  Chicken = 'chicken',
  /** column name */
  Description = 'description',
  /** column name */
  Exotic = 'exotic',
  /** column name */
  Fish = 'fish',
  /** column name */
  Gluten = 'gluten',
  /** column name */
  Id = 'id',
  /** column name */
  IsGameReady = 'is_game_ready',
  /** column name */
  Name = 'name',
  /** column name */
  Pork = 'pork',
  /** column name */
  Shellfish = 'shellfish',
  /** column name */
  Turkey = 'turkey'
}

/** input type for updating data in table "food_item" */
export type Food_Item_Set_Input = {
  animal_products?: Maybe<Scalars['_food_contains_enum']>;
  beef?: Maybe<Scalars['_food_contains_enum']>;
  chicken?: Maybe<Scalars['_food_contains_enum']>;
  description?: Maybe<Scalars['String']>;
  exotic?: Maybe<Scalars['_food_contains_enum']>;
  fish?: Maybe<Scalars['_food_contains_enum']>;
  gluten?: Maybe<Scalars['_food_contains_enum']>;
  id?: Maybe<Scalars['Int']>;
  is_game_ready?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  pork?: Maybe<Scalars['_food_contains_enum']>;
  shellfish?: Maybe<Scalars['_food_contains_enum']>;
  turkey?: Maybe<Scalars['_food_contains_enum']>;
};

/** aggregate stddev on columns */
export type Food_Item_Stddev_Fields = {
  __typename?: 'food_item_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "food_item" */
export type Food_Item_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Food_Item_Stddev_Pop_Fields = {
  __typename?: 'food_item_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "food_item" */
export type Food_Item_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Food_Item_Stddev_Samp_Fields = {
  __typename?: 'food_item_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "food_item" */
export type Food_Item_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Food_Item_Sum_Fields = {
  __typename?: 'food_item_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "food_item" */
export type Food_Item_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "food_item" */
export enum Food_Item_Update_Column {
  /** column name */
  AnimalProducts = 'animal_products',
  /** column name */
  Beef = 'beef',
  /** column name */
  Chicken = 'chicken',
  /** column name */
  Description = 'description',
  /** column name */
  Exotic = 'exotic',
  /** column name */
  Fish = 'fish',
  /** column name */
  Gluten = 'gluten',
  /** column name */
  Id = 'id',
  /** column name */
  IsGameReady = 'is_game_ready',
  /** column name */
  Name = 'name',
  /** column name */
  Pork = 'pork',
  /** column name */
  Shellfish = 'shellfish',
  /** column name */
  Turkey = 'turkey'
}

/** aggregate var_pop on columns */
export type Food_Item_Var_Pop_Fields = {
  __typename?: 'food_item_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "food_item" */
export type Food_Item_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Food_Item_Var_Samp_Fields = {
  __typename?: 'food_item_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "food_item" */
export type Food_Item_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Food_Item_Variance_Fields = {
  __typename?: 'food_item_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "food_item" */
export type Food_Item_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "game" */
export type Game = {
  __typename?: 'game';
  address?: Maybe<Scalars['String']>;
  cuisines_filter_mode: Scalars['game_cuisines_filter_mode_enum'];
  eat_time: Scalars['timestamp'];
  /** An array relationship */
  game_choices: Array<Game_Choice>;
  /** An aggregated array relationship */
  game_choices_aggregate: Game_Choice_Aggregate;
  /** An object relationship */
  game_creator: User;
  game_creator_id: Scalars['Int'];
  /** An array relationship */
  game_cuisines: Array<Game_Cuisine>;
  /** An aggregated array relationship */
  game_cuisines_aggregate: Game_Cuisine_Aggregate;
  /** An array relationship */
  game_players: Array<Game_Player>;
  /** An aggregated array relationship */
  game_players_aggregate: Game_Player_Aggregate;
  game_status: Scalars['game_game_status_enum'];
  id: Scalars['Int'];
  latitude: Scalars['float8'];
  longitude: Scalars['float8'];
  menus_filter: Scalars['_varchar'];
  mode: Scalars['String'];
  prices?: Maybe<Scalars['_int4']>;
  search_magnitude: Scalars['Int'];
  time_created: Scalars['timestamp'];
  unit_of_measure: Scalars['game_unit_of_measure_enum'];
  /** An object relationship */
  winning_restaurant?: Maybe<Restaurant>;
  winning_restaurant_id?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "game" */
export type GameGame_ChoicesArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameGame_Choices_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameGame_CuisinesArgs = {
  distinct_on?: Maybe<Array<Game_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Cuisine_Order_By>>;
  where?: Maybe<Game_Cuisine_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameGame_Cuisines_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Cuisine_Order_By>>;
  where?: Maybe<Game_Cuisine_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameGame_PlayersArgs = {
  distinct_on?: Maybe<Array<Game_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Player_Order_By>>;
  where?: Maybe<Game_Player_Bool_Exp>;
};


/** columns and relationships of "game" */
export type GameGame_Players_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Player_Order_By>>;
  where?: Maybe<Game_Player_Bool_Exp>;
};

/** aggregated selection of "game" */
export type Game_Aggregate = {
  __typename?: 'game_aggregate';
  aggregate?: Maybe<Game_Aggregate_Fields>;
  nodes: Array<Game>;
};

/** aggregate fields of "game" */
export type Game_Aggregate_Fields = {
  __typename?: 'game_aggregate_fields';
  avg?: Maybe<Game_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_Max_Fields>;
  min?: Maybe<Game_Min_Fields>;
  stddev?: Maybe<Game_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Sum_Fields>;
  var_pop?: Maybe<Game_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Var_Samp_Fields>;
  variance?: Maybe<Game_Variance_Fields>;
};


/** aggregate fields of "game" */
export type Game_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game" */
export type Game_Aggregate_Order_By = {
  avg?: Maybe<Game_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Game_Max_Order_By>;
  min?: Maybe<Game_Min_Order_By>;
  stddev?: Maybe<Game_Stddev_Order_By>;
  stddev_pop?: Maybe<Game_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Game_Stddev_Samp_Order_By>;
  sum?: Maybe<Game_Sum_Order_By>;
  var_pop?: Maybe<Game_Var_Pop_Order_By>;
  var_samp?: Maybe<Game_Var_Samp_Order_By>;
  variance?: Maybe<Game_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "game" */
export type Game_Arr_Rel_Insert_Input = {
  data: Array<Game_Insert_Input>;
  on_conflict?: Maybe<Game_On_Conflict>;
};

/** aggregate avg on columns */
export type Game_Avg_Fields = {
  __typename?: 'game_avg_fields';
  game_creator_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  search_magnitude?: Maybe<Scalars['Float']>;
  winning_restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "game" */
export type Game_Avg_Order_By = {
  game_creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  search_magnitude?: Maybe<Order_By>;
  winning_restaurant_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game". All fields are combined with a logical 'AND'. */
export type Game_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_Bool_Exp>>>;
  _not?: Maybe<Game_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  cuisines_filter_mode?: Maybe<Game_Cuisines_Filter_Mode_Enum_Comparison_Exp>;
  eat_time?: Maybe<Timestamp_Comparison_Exp>;
  game_choices?: Maybe<Game_Choice_Bool_Exp>;
  game_creator?: Maybe<User_Bool_Exp>;
  game_creator_id?: Maybe<Int_Comparison_Exp>;
  game_cuisines?: Maybe<Game_Cuisine_Bool_Exp>;
  game_players?: Maybe<Game_Player_Bool_Exp>;
  game_status?: Maybe<Game_Game_Status_Enum_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  latitude?: Maybe<Float8_Comparison_Exp>;
  longitude?: Maybe<Float8_Comparison_Exp>;
  menus_filter?: Maybe<_Varchar_Comparison_Exp>;
  mode?: Maybe<String_Comparison_Exp>;
  prices?: Maybe<_Int4_Comparison_Exp>;
  search_magnitude?: Maybe<Int_Comparison_Exp>;
  time_created?: Maybe<Timestamp_Comparison_Exp>;
  unit_of_measure?: Maybe<Game_Unit_Of_Measure_Enum_Comparison_Exp>;
  winning_restaurant?: Maybe<Restaurant_Bool_Exp>;
  winning_restaurant_id?: Maybe<Int_Comparison_Exp>;
};

/** columns and relationships of "game_choice" */
export type Game_Choice = {
  __typename?: 'game_choice';
  chosen_media_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  food_item_medium?: Maybe<Food_Item_Media>;
  /** An object relationship */
  game: Game;
  game_id: Scalars['Int'];
  /** An object relationship */
  game_player: Game_Player;
  id: Scalars['Int'];
  pick_rank?: Maybe<Scalars['Int']>;
  player_id: Scalars['Int'];
  /** An object relationship */
  restaurant: Restaurant;
  restaurant_id: Scalars['Int'];
  /** An object relationship */
  restaurant_item: Restaurant_Item;
  restaurant_item_id: Scalars['Int'];
  status: Scalars['game_choice_status_enum'];
};

/** aggregated selection of "game_choice" */
export type Game_Choice_Aggregate = {
  __typename?: 'game_choice_aggregate';
  aggregate?: Maybe<Game_Choice_Aggregate_Fields>;
  nodes: Array<Game_Choice>;
};

/** aggregate fields of "game_choice" */
export type Game_Choice_Aggregate_Fields = {
  __typename?: 'game_choice_aggregate_fields';
  avg?: Maybe<Game_Choice_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_Choice_Max_Fields>;
  min?: Maybe<Game_Choice_Min_Fields>;
  stddev?: Maybe<Game_Choice_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Choice_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Choice_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Choice_Sum_Fields>;
  var_pop?: Maybe<Game_Choice_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Choice_Var_Samp_Fields>;
  variance?: Maybe<Game_Choice_Variance_Fields>;
};


/** aggregate fields of "game_choice" */
export type Game_Choice_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Choice_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_choice" */
export type Game_Choice_Aggregate_Order_By = {
  avg?: Maybe<Game_Choice_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Game_Choice_Max_Order_By>;
  min?: Maybe<Game_Choice_Min_Order_By>;
  stddev?: Maybe<Game_Choice_Stddev_Order_By>;
  stddev_pop?: Maybe<Game_Choice_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Game_Choice_Stddev_Samp_Order_By>;
  sum?: Maybe<Game_Choice_Sum_Order_By>;
  var_pop?: Maybe<Game_Choice_Var_Pop_Order_By>;
  var_samp?: Maybe<Game_Choice_Var_Samp_Order_By>;
  variance?: Maybe<Game_Choice_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "game_choice" */
export type Game_Choice_Arr_Rel_Insert_Input = {
  data: Array<Game_Choice_Insert_Input>;
  on_conflict?: Maybe<Game_Choice_On_Conflict>;
};

/** aggregate avg on columns */
export type Game_Choice_Avg_Fields = {
  __typename?: 'game_choice_avg_fields';
  chosen_media_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pick_rank?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
  restaurant_item_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "game_choice" */
export type Game_Choice_Avg_Order_By = {
  chosen_media_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pick_rank?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
  restaurant_item_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_choice". All fields are combined with a logical 'AND'. */
export type Game_Choice_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_Choice_Bool_Exp>>>;
  _not?: Maybe<Game_Choice_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_Choice_Bool_Exp>>>;
  chosen_media_id?: Maybe<Int_Comparison_Exp>;
  food_item_medium?: Maybe<Food_Item_Media_Bool_Exp>;
  game?: Maybe<Game_Bool_Exp>;
  game_id?: Maybe<Int_Comparison_Exp>;
  game_player?: Maybe<Game_Player_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  pick_rank?: Maybe<Int_Comparison_Exp>;
  player_id?: Maybe<Int_Comparison_Exp>;
  restaurant?: Maybe<Restaurant_Bool_Exp>;
  restaurant_id?: Maybe<Int_Comparison_Exp>;
  restaurant_item?: Maybe<Restaurant_Item_Bool_Exp>;
  restaurant_item_id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<Game_Choice_Status_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_choice" */
export enum Game_Choice_Constraint {
  /** unique or primary key constraint */
  PkCb7ff566e4fe7f36d11f4e9c625 = 'PK_cb7ff566e4fe7f36d11f4e9c625'
}

/** input type for incrementing integer column in table "game_choice" */
export type Game_Choice_Inc_Input = {
  chosen_media_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  pick_rank?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['Int']>;
  restaurant_item_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "game_choice" */
export type Game_Choice_Insert_Input = {
  chosen_media_id?: Maybe<Scalars['Int']>;
  food_item_medium?: Maybe<Food_Item_Media_Obj_Rel_Insert_Input>;
  game?: Maybe<Game_Obj_Rel_Insert_Input>;
  game_id?: Maybe<Scalars['Int']>;
  game_player?: Maybe<Game_Player_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  pick_rank?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  restaurant?: Maybe<Restaurant_Obj_Rel_Insert_Input>;
  restaurant_id?: Maybe<Scalars['Int']>;
  restaurant_item?: Maybe<Restaurant_Item_Obj_Rel_Insert_Input>;
  restaurant_item_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['game_choice_status_enum']>;
};

/** aggregate max on columns */
export type Game_Choice_Max_Fields = {
  __typename?: 'game_choice_max_fields';
  chosen_media_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  pick_rank?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['Int']>;
  restaurant_item_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "game_choice" */
export type Game_Choice_Max_Order_By = {
  chosen_media_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pick_rank?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
  restaurant_item_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Choice_Min_Fields = {
  __typename?: 'game_choice_min_fields';
  chosen_media_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  pick_rank?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['Int']>;
  restaurant_item_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "game_choice" */
export type Game_Choice_Min_Order_By = {
  chosen_media_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pick_rank?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
  restaurant_item_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "game_choice" */
export type Game_Choice_Mutation_Response = {
  __typename?: 'game_choice_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game_Choice>;
};

/** input type for inserting object relation for remote table "game_choice" */
export type Game_Choice_Obj_Rel_Insert_Input = {
  data: Game_Choice_Insert_Input;
  on_conflict?: Maybe<Game_Choice_On_Conflict>;
};

/** on conflict condition type for table "game_choice" */
export type Game_Choice_On_Conflict = {
  constraint: Game_Choice_Constraint;
  update_columns: Array<Game_Choice_Update_Column>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};

/** ordering options when selecting data from "game_choice" */
export type Game_Choice_Order_By = {
  chosen_media_id?: Maybe<Order_By>;
  food_item_medium?: Maybe<Food_Item_Media_Order_By>;
  game?: Maybe<Game_Order_By>;
  game_id?: Maybe<Order_By>;
  game_player?: Maybe<Game_Player_Order_By>;
  id?: Maybe<Order_By>;
  pick_rank?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  restaurant?: Maybe<Restaurant_Order_By>;
  restaurant_id?: Maybe<Order_By>;
  restaurant_item?: Maybe<Restaurant_Item_Order_By>;
  restaurant_item_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** primary key columns input for table: "game_choice" */
export type Game_Choice_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "game_choice" */
export enum Game_Choice_Select_Column {
  /** column name */
  ChosenMediaId = 'chosen_media_id',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  PickRank = 'pick_rank',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  RestaurantId = 'restaurant_id',
  /** column name */
  RestaurantItemId = 'restaurant_item_id',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "game_choice" */
export type Game_Choice_Set_Input = {
  chosen_media_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  pick_rank?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['Int']>;
  restaurant_item_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['game_choice_status_enum']>;
};


/** expression to compare columns of type game_choice_status_enum. All fields are combined with logical 'AND'. */
export type Game_Choice_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars['game_choice_status_enum']>;
  _gt?: Maybe<Scalars['game_choice_status_enum']>;
  _gte?: Maybe<Scalars['game_choice_status_enum']>;
  _in?: Maybe<Array<Scalars['game_choice_status_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['game_choice_status_enum']>;
  _lte?: Maybe<Scalars['game_choice_status_enum']>;
  _neq?: Maybe<Scalars['game_choice_status_enum']>;
  _nin?: Maybe<Array<Scalars['game_choice_status_enum']>>;
};

/** aggregate stddev on columns */
export type Game_Choice_Stddev_Fields = {
  __typename?: 'game_choice_stddev_fields';
  chosen_media_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pick_rank?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
  restaurant_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "game_choice" */
export type Game_Choice_Stddev_Order_By = {
  chosen_media_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pick_rank?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
  restaurant_item_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Choice_Stddev_Pop_Fields = {
  __typename?: 'game_choice_stddev_pop_fields';
  chosen_media_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pick_rank?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
  restaurant_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "game_choice" */
export type Game_Choice_Stddev_Pop_Order_By = {
  chosen_media_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pick_rank?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
  restaurant_item_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Choice_Stddev_Samp_Fields = {
  __typename?: 'game_choice_stddev_samp_fields';
  chosen_media_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pick_rank?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
  restaurant_item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "game_choice" */
export type Game_Choice_Stddev_Samp_Order_By = {
  chosen_media_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pick_rank?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
  restaurant_item_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Game_Choice_Sum_Fields = {
  __typename?: 'game_choice_sum_fields';
  chosen_media_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  pick_rank?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['Int']>;
  restaurant_item_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "game_choice" */
export type Game_Choice_Sum_Order_By = {
  chosen_media_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pick_rank?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
  restaurant_item_id?: Maybe<Order_By>;
};

/** update columns of table "game_choice" */
export enum Game_Choice_Update_Column {
  /** column name */
  ChosenMediaId = 'chosen_media_id',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  PickRank = 'pick_rank',
  /** column name */
  PlayerId = 'player_id',
  /** column name */
  RestaurantId = 'restaurant_id',
  /** column name */
  RestaurantItemId = 'restaurant_item_id',
  /** column name */
  Status = 'status'
}

/** aggregate var_pop on columns */
export type Game_Choice_Var_Pop_Fields = {
  __typename?: 'game_choice_var_pop_fields';
  chosen_media_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pick_rank?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
  restaurant_item_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "game_choice" */
export type Game_Choice_Var_Pop_Order_By = {
  chosen_media_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pick_rank?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
  restaurant_item_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Choice_Var_Samp_Fields = {
  __typename?: 'game_choice_var_samp_fields';
  chosen_media_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pick_rank?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
  restaurant_item_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "game_choice" */
export type Game_Choice_Var_Samp_Order_By = {
  chosen_media_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pick_rank?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
  restaurant_item_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Choice_Variance_Fields = {
  __typename?: 'game_choice_variance_fields';
  chosen_media_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pick_rank?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
  restaurant_item_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "game_choice" */
export type Game_Choice_Variance_Order_By = {
  chosen_media_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pick_rank?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
  restaurant_item_id?: Maybe<Order_By>;
};

/** unique or primary key constraints on table "game" */
export enum Game_Constraint {
  /** unique or primary key constraint */
  Pk_352a30652cd352f552fef73dec5 = 'PK_352a30652cd352f552fef73dec5'
}

/** columns and relationships of "game_cuisine" */
export type Game_Cuisine = {
  __typename?: 'game_cuisine';
  /** An object relationship */
  cuisine: Cuisine;
  cuisine_id: Scalars['Int'];
  /** An object relationship */
  game: Game;
  game_id: Scalars['Int'];
  id: Scalars['Int'];
};

/** aggregated selection of "game_cuisine" */
export type Game_Cuisine_Aggregate = {
  __typename?: 'game_cuisine_aggregate';
  aggregate?: Maybe<Game_Cuisine_Aggregate_Fields>;
  nodes: Array<Game_Cuisine>;
};

/** aggregate fields of "game_cuisine" */
export type Game_Cuisine_Aggregate_Fields = {
  __typename?: 'game_cuisine_aggregate_fields';
  avg?: Maybe<Game_Cuisine_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_Cuisine_Max_Fields>;
  min?: Maybe<Game_Cuisine_Min_Fields>;
  stddev?: Maybe<Game_Cuisine_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Cuisine_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Cuisine_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Cuisine_Sum_Fields>;
  var_pop?: Maybe<Game_Cuisine_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Cuisine_Var_Samp_Fields>;
  variance?: Maybe<Game_Cuisine_Variance_Fields>;
};


/** aggregate fields of "game_cuisine" */
export type Game_Cuisine_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Cuisine_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_cuisine" */
export type Game_Cuisine_Aggregate_Order_By = {
  avg?: Maybe<Game_Cuisine_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Game_Cuisine_Max_Order_By>;
  min?: Maybe<Game_Cuisine_Min_Order_By>;
  stddev?: Maybe<Game_Cuisine_Stddev_Order_By>;
  stddev_pop?: Maybe<Game_Cuisine_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Game_Cuisine_Stddev_Samp_Order_By>;
  sum?: Maybe<Game_Cuisine_Sum_Order_By>;
  var_pop?: Maybe<Game_Cuisine_Var_Pop_Order_By>;
  var_samp?: Maybe<Game_Cuisine_Var_Samp_Order_By>;
  variance?: Maybe<Game_Cuisine_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "game_cuisine" */
export type Game_Cuisine_Arr_Rel_Insert_Input = {
  data: Array<Game_Cuisine_Insert_Input>;
  on_conflict?: Maybe<Game_Cuisine_On_Conflict>;
};

/** aggregate avg on columns */
export type Game_Cuisine_Avg_Fields = {
  __typename?: 'game_cuisine_avg_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "game_cuisine" */
export type Game_Cuisine_Avg_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_cuisine". All fields are combined with a logical 'AND'. */
export type Game_Cuisine_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_Cuisine_Bool_Exp>>>;
  _not?: Maybe<Game_Cuisine_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_Cuisine_Bool_Exp>>>;
  cuisine?: Maybe<Cuisine_Bool_Exp>;
  cuisine_id?: Maybe<Int_Comparison_Exp>;
  game?: Maybe<Game_Bool_Exp>;
  game_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_cuisine" */
export enum Game_Cuisine_Constraint {
  /** unique or primary key constraint */
  Pk_3db9fe08222c1f2bb0916eb2b03 = 'PK_3db9fe08222c1f2bb0916eb2b03'
}

/** input type for incrementing integer column in table "game_cuisine" */
export type Game_Cuisine_Inc_Input = {
  cuisine_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "game_cuisine" */
export type Game_Cuisine_Insert_Input = {
  cuisine?: Maybe<Cuisine_Obj_Rel_Insert_Input>;
  cuisine_id?: Maybe<Scalars['Int']>;
  game?: Maybe<Game_Obj_Rel_Insert_Input>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Game_Cuisine_Max_Fields = {
  __typename?: 'game_cuisine_max_fields';
  cuisine_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "game_cuisine" */
export type Game_Cuisine_Max_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Cuisine_Min_Fields = {
  __typename?: 'game_cuisine_min_fields';
  cuisine_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "game_cuisine" */
export type Game_Cuisine_Min_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "game_cuisine" */
export type Game_Cuisine_Mutation_Response = {
  __typename?: 'game_cuisine_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game_Cuisine>;
};

/** input type for inserting object relation for remote table "game_cuisine" */
export type Game_Cuisine_Obj_Rel_Insert_Input = {
  data: Game_Cuisine_Insert_Input;
  on_conflict?: Maybe<Game_Cuisine_On_Conflict>;
};

/** on conflict condition type for table "game_cuisine" */
export type Game_Cuisine_On_Conflict = {
  constraint: Game_Cuisine_Constraint;
  update_columns: Array<Game_Cuisine_Update_Column>;
  where?: Maybe<Game_Cuisine_Bool_Exp>;
};

/** ordering options when selecting data from "game_cuisine" */
export type Game_Cuisine_Order_By = {
  cuisine?: Maybe<Cuisine_Order_By>;
  cuisine_id?: Maybe<Order_By>;
  game?: Maybe<Game_Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "game_cuisine" */
export type Game_Cuisine_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "game_cuisine" */
export enum Game_Cuisine_Select_Column {
  /** column name */
  CuisineId = 'cuisine_id',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "game_cuisine" */
export type Game_Cuisine_Set_Input = {
  cuisine_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Game_Cuisine_Stddev_Fields = {
  __typename?: 'game_cuisine_stddev_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "game_cuisine" */
export type Game_Cuisine_Stddev_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Cuisine_Stddev_Pop_Fields = {
  __typename?: 'game_cuisine_stddev_pop_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "game_cuisine" */
export type Game_Cuisine_Stddev_Pop_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Cuisine_Stddev_Samp_Fields = {
  __typename?: 'game_cuisine_stddev_samp_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "game_cuisine" */
export type Game_Cuisine_Stddev_Samp_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Game_Cuisine_Sum_Fields = {
  __typename?: 'game_cuisine_sum_fields';
  cuisine_id?: Maybe<Scalars['Int']>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "game_cuisine" */
export type Game_Cuisine_Sum_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "game_cuisine" */
export enum Game_Cuisine_Update_Column {
  /** column name */
  CuisineId = 'cuisine_id',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Game_Cuisine_Var_Pop_Fields = {
  __typename?: 'game_cuisine_var_pop_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "game_cuisine" */
export type Game_Cuisine_Var_Pop_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Cuisine_Var_Samp_Fields = {
  __typename?: 'game_cuisine_var_samp_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "game_cuisine" */
export type Game_Cuisine_Var_Samp_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Cuisine_Variance_Fields = {
  __typename?: 'game_cuisine_variance_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "game_cuisine" */
export type Game_Cuisine_Variance_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type game_cuisines_filter_mode_enum. All fields are combined with logical 'AND'. */
export type Game_Cuisines_Filter_Mode_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars['game_cuisines_filter_mode_enum']>;
  _gt?: Maybe<Scalars['game_cuisines_filter_mode_enum']>;
  _gte?: Maybe<Scalars['game_cuisines_filter_mode_enum']>;
  _in?: Maybe<Array<Scalars['game_cuisines_filter_mode_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['game_cuisines_filter_mode_enum']>;
  _lte?: Maybe<Scalars['game_cuisines_filter_mode_enum']>;
  _neq?: Maybe<Scalars['game_cuisines_filter_mode_enum']>;
  _nin?: Maybe<Array<Scalars['game_cuisines_filter_mode_enum']>>;
};


/** expression to compare columns of type game_game_status_enum. All fields are combined with logical 'AND'. */
export type Game_Game_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars['game_game_status_enum']>;
  _gt?: Maybe<Scalars['game_game_status_enum']>;
  _gte?: Maybe<Scalars['game_game_status_enum']>;
  _in?: Maybe<Array<Scalars['game_game_status_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['game_game_status_enum']>;
  _lte?: Maybe<Scalars['game_game_status_enum']>;
  _neq?: Maybe<Scalars['game_game_status_enum']>;
  _nin?: Maybe<Array<Scalars['game_game_status_enum']>>;
};

/** input type for incrementing integer column in table "game" */
export type Game_Inc_Input = {
  game_creator_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  search_magnitude?: Maybe<Scalars['Int']>;
  winning_restaurant_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "game" */
export type Game_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  cuisines_filter_mode?: Maybe<Scalars['game_cuisines_filter_mode_enum']>;
  eat_time?: Maybe<Scalars['timestamp']>;
  game_choices?: Maybe<Game_Choice_Arr_Rel_Insert_Input>;
  game_creator?: Maybe<User_Obj_Rel_Insert_Input>;
  game_creator_id?: Maybe<Scalars['Int']>;
  game_cuisines?: Maybe<Game_Cuisine_Arr_Rel_Insert_Input>;
  game_players?: Maybe<Game_Player_Arr_Rel_Insert_Input>;
  game_status?: Maybe<Scalars['game_game_status_enum']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  menus_filter?: Maybe<Scalars['_varchar']>;
  mode?: Maybe<Scalars['String']>;
  prices?: Maybe<Scalars['_int4']>;
  search_magnitude?: Maybe<Scalars['Int']>;
  time_created?: Maybe<Scalars['timestamp']>;
  unit_of_measure?: Maybe<Scalars['game_unit_of_measure_enum']>;
  winning_restaurant?: Maybe<Restaurant_Obj_Rel_Insert_Input>;
  winning_restaurant_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Game_Max_Fields = {
  __typename?: 'game_max_fields';
  address?: Maybe<Scalars['String']>;
  eat_time?: Maybe<Scalars['timestamp']>;
  game_creator_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  mode?: Maybe<Scalars['String']>;
  search_magnitude?: Maybe<Scalars['Int']>;
  time_created?: Maybe<Scalars['timestamp']>;
  winning_restaurant_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "game" */
export type Game_Max_Order_By = {
  address?: Maybe<Order_By>;
  eat_time?: Maybe<Order_By>;
  game_creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  mode?: Maybe<Order_By>;
  search_magnitude?: Maybe<Order_By>;
  time_created?: Maybe<Order_By>;
  winning_restaurant_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Min_Fields = {
  __typename?: 'game_min_fields';
  address?: Maybe<Scalars['String']>;
  eat_time?: Maybe<Scalars['timestamp']>;
  game_creator_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  mode?: Maybe<Scalars['String']>;
  search_magnitude?: Maybe<Scalars['Int']>;
  time_created?: Maybe<Scalars['timestamp']>;
  winning_restaurant_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "game" */
export type Game_Min_Order_By = {
  address?: Maybe<Order_By>;
  eat_time?: Maybe<Order_By>;
  game_creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  mode?: Maybe<Order_By>;
  search_magnitude?: Maybe<Order_By>;
  time_created?: Maybe<Order_By>;
  winning_restaurant_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "game" */
export type Game_Mutation_Response = {
  __typename?: 'game_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game>;
};

/** input type for inserting object relation for remote table "game" */
export type Game_Obj_Rel_Insert_Input = {
  data: Game_Insert_Input;
  on_conflict?: Maybe<Game_On_Conflict>;
};

/** on conflict condition type for table "game" */
export type Game_On_Conflict = {
  constraint: Game_Constraint;
  update_columns: Array<Game_Update_Column>;
  where?: Maybe<Game_Bool_Exp>;
};

/** ordering options when selecting data from "game" */
export type Game_Order_By = {
  address?: Maybe<Order_By>;
  cuisines_filter_mode?: Maybe<Order_By>;
  eat_time?: Maybe<Order_By>;
  game_choices_aggregate?: Maybe<Game_Choice_Aggregate_Order_By>;
  game_creator?: Maybe<User_Order_By>;
  game_creator_id?: Maybe<Order_By>;
  game_cuisines_aggregate?: Maybe<Game_Cuisine_Aggregate_Order_By>;
  game_players_aggregate?: Maybe<Game_Player_Aggregate_Order_By>;
  game_status?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  menus_filter?: Maybe<Order_By>;
  mode?: Maybe<Order_By>;
  prices?: Maybe<Order_By>;
  search_magnitude?: Maybe<Order_By>;
  time_created?: Maybe<Order_By>;
  unit_of_measure?: Maybe<Order_By>;
  winning_restaurant?: Maybe<Restaurant_Order_By>;
  winning_restaurant_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "game" */
export type Game_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "game_player" */
export type Game_Player = {
  __typename?: 'game_player';
  /** An object relationship */
  game: Game;
  /** An array relationship */
  game_choices: Array<Game_Choice>;
  /** An aggregated array relationship */
  game_choices_aggregate: Game_Choice_Aggregate;
  game_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};


/** columns and relationships of "game_player" */
export type Game_PlayerGame_ChoicesArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};


/** columns and relationships of "game_player" */
export type Game_PlayerGame_Choices_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};

/** aggregated selection of "game_player" */
export type Game_Player_Aggregate = {
  __typename?: 'game_player_aggregate';
  aggregate?: Maybe<Game_Player_Aggregate_Fields>;
  nodes: Array<Game_Player>;
};

/** aggregate fields of "game_player" */
export type Game_Player_Aggregate_Fields = {
  __typename?: 'game_player_aggregate_fields';
  avg?: Maybe<Game_Player_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_Player_Max_Fields>;
  min?: Maybe<Game_Player_Min_Fields>;
  stddev?: Maybe<Game_Player_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Player_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Player_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Player_Sum_Fields>;
  var_pop?: Maybe<Game_Player_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Player_Var_Samp_Fields>;
  variance?: Maybe<Game_Player_Variance_Fields>;
};


/** aggregate fields of "game_player" */
export type Game_Player_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Player_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_player" */
export type Game_Player_Aggregate_Order_By = {
  avg?: Maybe<Game_Player_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Game_Player_Max_Order_By>;
  min?: Maybe<Game_Player_Min_Order_By>;
  stddev?: Maybe<Game_Player_Stddev_Order_By>;
  stddev_pop?: Maybe<Game_Player_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Game_Player_Stddev_Samp_Order_By>;
  sum?: Maybe<Game_Player_Sum_Order_By>;
  var_pop?: Maybe<Game_Player_Var_Pop_Order_By>;
  var_samp?: Maybe<Game_Player_Var_Samp_Order_By>;
  variance?: Maybe<Game_Player_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "game_player" */
export type Game_Player_Arr_Rel_Insert_Input = {
  data: Array<Game_Player_Insert_Input>;
  on_conflict?: Maybe<Game_Player_On_Conflict>;
};

/** aggregate avg on columns */
export type Game_Player_Avg_Fields = {
  __typename?: 'game_player_avg_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "game_player" */
export type Game_Player_Avg_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_player". All fields are combined with a logical 'AND'. */
export type Game_Player_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_Player_Bool_Exp>>>;
  _not?: Maybe<Game_Player_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_Player_Bool_Exp>>>;
  game?: Maybe<Game_Bool_Exp>;
  game_choices?: Maybe<Game_Choice_Bool_Exp>;
  game_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_player" */
export enum Game_Player_Constraint {
  /** unique or primary key constraint */
  Pk_67f6a08d68fa1e4c683736027eb = 'PK_67f6a08d68fa1e4c683736027eb'
}

/** input type for incrementing integer column in table "game_player" */
export type Game_Player_Inc_Input = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "game_player" */
export type Game_Player_Insert_Input = {
  game?: Maybe<Game_Obj_Rel_Insert_Input>;
  game_choices?: Maybe<Game_Choice_Arr_Rel_Insert_Input>;
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Game_Player_Max_Fields = {
  __typename?: 'game_player_max_fields';
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "game_player" */
export type Game_Player_Max_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Player_Min_Fields = {
  __typename?: 'game_player_min_fields';
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "game_player" */
export type Game_Player_Min_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "game_player" */
export type Game_Player_Mutation_Response = {
  __typename?: 'game_player_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game_Player>;
};

/** input type for inserting object relation for remote table "game_player" */
export type Game_Player_Obj_Rel_Insert_Input = {
  data: Game_Player_Insert_Input;
  on_conflict?: Maybe<Game_Player_On_Conflict>;
};

/** on conflict condition type for table "game_player" */
export type Game_Player_On_Conflict = {
  constraint: Game_Player_Constraint;
  update_columns: Array<Game_Player_Update_Column>;
  where?: Maybe<Game_Player_Bool_Exp>;
};

/** ordering options when selecting data from "game_player" */
export type Game_Player_Order_By = {
  game?: Maybe<Game_Order_By>;
  game_choices_aggregate?: Maybe<Game_Choice_Aggregate_Order_By>;
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "game_player" */
export type Game_Player_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "game_player" */
export enum Game_Player_Select_Column {
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "game_player" */
export type Game_Player_Set_Input = {
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Game_Player_Stddev_Fields = {
  __typename?: 'game_player_stddev_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "game_player" */
export type Game_Player_Stddev_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Player_Stddev_Pop_Fields = {
  __typename?: 'game_player_stddev_pop_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "game_player" */
export type Game_Player_Stddev_Pop_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Player_Stddev_Samp_Fields = {
  __typename?: 'game_player_stddev_samp_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "game_player" */
export type Game_Player_Stddev_Samp_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Game_Player_Sum_Fields = {
  __typename?: 'game_player_sum_fields';
  game_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "game_player" */
export type Game_Player_Sum_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "game_player" */
export enum Game_Player_Update_Column {
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Game_Player_Var_Pop_Fields = {
  __typename?: 'game_player_var_pop_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "game_player" */
export type Game_Player_Var_Pop_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Player_Var_Samp_Fields = {
  __typename?: 'game_player_var_samp_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "game_player" */
export type Game_Player_Var_Samp_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Player_Variance_Fields = {
  __typename?: 'game_player_variance_fields';
  game_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "game_player" */
export type Game_Player_Variance_Order_By = {
  game_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "game" */
export enum Game_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CuisinesFilterMode = 'cuisines_filter_mode',
  /** column name */
  EatTime = 'eat_time',
  /** column name */
  GameCreatorId = 'game_creator_id',
  /** column name */
  GameStatus = 'game_status',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  MenusFilter = 'menus_filter',
  /** column name */
  Mode = 'mode',
  /** column name */
  Prices = 'prices',
  /** column name */
  SearchMagnitude = 'search_magnitude',
  /** column name */
  TimeCreated = 'time_created',
  /** column name */
  UnitOfMeasure = 'unit_of_measure',
  /** column name */
  WinningRestaurantId = 'winning_restaurant_id'
}

/** input type for updating data in table "game" */
export type Game_Set_Input = {
  address?: Maybe<Scalars['String']>;
  cuisines_filter_mode?: Maybe<Scalars['game_cuisines_filter_mode_enum']>;
  eat_time?: Maybe<Scalars['timestamp']>;
  game_creator_id?: Maybe<Scalars['Int']>;
  game_status?: Maybe<Scalars['game_game_status_enum']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  menus_filter?: Maybe<Scalars['_varchar']>;
  mode?: Maybe<Scalars['String']>;
  prices?: Maybe<Scalars['_int4']>;
  search_magnitude?: Maybe<Scalars['Int']>;
  time_created?: Maybe<Scalars['timestamp']>;
  unit_of_measure?: Maybe<Scalars['game_unit_of_measure_enum']>;
  winning_restaurant_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Game_Stddev_Fields = {
  __typename?: 'game_stddev_fields';
  game_creator_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  search_magnitude?: Maybe<Scalars['Float']>;
  winning_restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "game" */
export type Game_Stddev_Order_By = {
  game_creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  search_magnitude?: Maybe<Order_By>;
  winning_restaurant_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Stddev_Pop_Fields = {
  __typename?: 'game_stddev_pop_fields';
  game_creator_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  search_magnitude?: Maybe<Scalars['Float']>;
  winning_restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "game" */
export type Game_Stddev_Pop_Order_By = {
  game_creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  search_magnitude?: Maybe<Order_By>;
  winning_restaurant_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Stddev_Samp_Fields = {
  __typename?: 'game_stddev_samp_fields';
  game_creator_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  search_magnitude?: Maybe<Scalars['Float']>;
  winning_restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "game" */
export type Game_Stddev_Samp_Order_By = {
  game_creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  search_magnitude?: Maybe<Order_By>;
  winning_restaurant_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Game_Sum_Fields = {
  __typename?: 'game_sum_fields';
  game_creator_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  search_magnitude?: Maybe<Scalars['Int']>;
  winning_restaurant_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "game" */
export type Game_Sum_Order_By = {
  game_creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  search_magnitude?: Maybe<Order_By>;
  winning_restaurant_id?: Maybe<Order_By>;
};


/** expression to compare columns of type game_unit_of_measure_enum. All fields are combined with logical 'AND'. */
export type Game_Unit_Of_Measure_Enum_Comparison_Exp = {
  _eq?: Maybe<Scalars['game_unit_of_measure_enum']>;
  _gt?: Maybe<Scalars['game_unit_of_measure_enum']>;
  _gte?: Maybe<Scalars['game_unit_of_measure_enum']>;
  _in?: Maybe<Array<Scalars['game_unit_of_measure_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['game_unit_of_measure_enum']>;
  _lte?: Maybe<Scalars['game_unit_of_measure_enum']>;
  _neq?: Maybe<Scalars['game_unit_of_measure_enum']>;
  _nin?: Maybe<Array<Scalars['game_unit_of_measure_enum']>>;
};

/** update columns of table "game" */
export enum Game_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CuisinesFilterMode = 'cuisines_filter_mode',
  /** column name */
  EatTime = 'eat_time',
  /** column name */
  GameCreatorId = 'game_creator_id',
  /** column name */
  GameStatus = 'game_status',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  MenusFilter = 'menus_filter',
  /** column name */
  Mode = 'mode',
  /** column name */
  Prices = 'prices',
  /** column name */
  SearchMagnitude = 'search_magnitude',
  /** column name */
  TimeCreated = 'time_created',
  /** column name */
  UnitOfMeasure = 'unit_of_measure',
  /** column name */
  WinningRestaurantId = 'winning_restaurant_id'
}

/** aggregate var_pop on columns */
export type Game_Var_Pop_Fields = {
  __typename?: 'game_var_pop_fields';
  game_creator_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  search_magnitude?: Maybe<Scalars['Float']>;
  winning_restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "game" */
export type Game_Var_Pop_Order_By = {
  game_creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  search_magnitude?: Maybe<Order_By>;
  winning_restaurant_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Var_Samp_Fields = {
  __typename?: 'game_var_samp_fields';
  game_creator_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  search_magnitude?: Maybe<Scalars['Float']>;
  winning_restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "game" */
export type Game_Var_Samp_Order_By = {
  game_creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  search_magnitude?: Maybe<Order_By>;
  winning_restaurant_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Variance_Fields = {
  __typename?: 'game_variance_fields';
  game_creator_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  search_magnitude?: Maybe<Scalars['Float']>;
  winning_restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "game" */
export type Game_Variance_Order_By = {
  game_creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  search_magnitude?: Maybe<Order_By>;
  winning_restaurant_id?: Maybe<Order_By>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** columns and relationships of "log" */
export type Log = {
  __typename?: 'log';
  date_created: Scalars['timestamp'];
  id: Scalars['Int'];
  name: Scalars['String'];
  payload: Scalars['String'];
};

/** aggregated selection of "log" */
export type Log_Aggregate = {
  __typename?: 'log_aggregate';
  aggregate?: Maybe<Log_Aggregate_Fields>;
  nodes: Array<Log>;
};

/** aggregate fields of "log" */
export type Log_Aggregate_Fields = {
  __typename?: 'log_aggregate_fields';
  avg?: Maybe<Log_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Log_Max_Fields>;
  min?: Maybe<Log_Min_Fields>;
  stddev?: Maybe<Log_Stddev_Fields>;
  stddev_pop?: Maybe<Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Log_Stddev_Samp_Fields>;
  sum?: Maybe<Log_Sum_Fields>;
  var_pop?: Maybe<Log_Var_Pop_Fields>;
  var_samp?: Maybe<Log_Var_Samp_Fields>;
  variance?: Maybe<Log_Variance_Fields>;
};


/** aggregate fields of "log" */
export type Log_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Log_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "log" */
export type Log_Aggregate_Order_By = {
  avg?: Maybe<Log_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Log_Max_Order_By>;
  min?: Maybe<Log_Min_Order_By>;
  stddev?: Maybe<Log_Stddev_Order_By>;
  stddev_pop?: Maybe<Log_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Log_Stddev_Samp_Order_By>;
  sum?: Maybe<Log_Sum_Order_By>;
  var_pop?: Maybe<Log_Var_Pop_Order_By>;
  var_samp?: Maybe<Log_Var_Samp_Order_By>;
  variance?: Maybe<Log_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "log" */
export type Log_Arr_Rel_Insert_Input = {
  data: Array<Log_Insert_Input>;
  on_conflict?: Maybe<Log_On_Conflict>;
};

/** aggregate avg on columns */
export type Log_Avg_Fields = {
  __typename?: 'log_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "log" */
export type Log_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "log". All fields are combined with a logical 'AND'. */
export type Log_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Log_Bool_Exp>>>;
  _not?: Maybe<Log_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Log_Bool_Exp>>>;
  date_created?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  payload?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "log" */
export enum Log_Constraint {
  /** unique or primary key constraint */
  Pk_350604cbdf991d5930d9e618fbd = 'PK_350604cbdf991d5930d9e618fbd'
}

/** input type for incrementing integer column in table "log" */
export type Log_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "log" */
export type Log_Insert_Input = {
  date_created?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Log_Max_Fields = {
  __typename?: 'log_max_fields';
  date_created?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "log" */
export type Log_Max_Order_By = {
  date_created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Log_Min_Fields = {
  __typename?: 'log_min_fields';
  date_created?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "log" */
export type Log_Min_Order_By = {
  date_created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
};

/** response of any mutation on the table "log" */
export type Log_Mutation_Response = {
  __typename?: 'log_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Log>;
};

/** input type for inserting object relation for remote table "log" */
export type Log_Obj_Rel_Insert_Input = {
  data: Log_Insert_Input;
  on_conflict?: Maybe<Log_On_Conflict>;
};

/** on conflict condition type for table "log" */
export type Log_On_Conflict = {
  constraint: Log_Constraint;
  update_columns: Array<Log_Update_Column>;
  where?: Maybe<Log_Bool_Exp>;
};

/** ordering options when selecting data from "log" */
export type Log_Order_By = {
  date_created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
};

/** primary key columns input for table: "log" */
export type Log_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "log" */
export enum Log_Select_Column {
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Payload = 'payload'
}

/** input type for updating data in table "log" */
export type Log_Set_Input = {
  date_created?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Log_Stddev_Fields = {
  __typename?: 'log_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "log" */
export type Log_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Log_Stddev_Pop_Fields = {
  __typename?: 'log_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "log" */
export type Log_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Log_Stddev_Samp_Fields = {
  __typename?: 'log_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "log" */
export type Log_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Log_Sum_Fields = {
  __typename?: 'log_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "log" */
export type Log_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "log" */
export enum Log_Update_Column {
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Payload = 'payload'
}

/** aggregate var_pop on columns */
export type Log_Var_Pop_Fields = {
  __typename?: 'log_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "log" */
export type Log_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Log_Var_Samp_Fields = {
  __typename?: 'log_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "log" */
export type Log_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Log_Variance_Fields = {
  __typename?: 'log_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "log" */
export type Log_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "media_author" */
export type Media_Author = {
  __typename?: 'media_author';
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  /** An array relationship */
  food_item_media: Array<Food_Item_Media>;
  /** An aggregated array relationship */
  food_item_media_aggregate: Food_Item_Media_Aggregate;
  id: Scalars['Int'];
  instagram?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  personalWebsite?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};


/** columns and relationships of "media_author" */
export type Media_AuthorFood_Item_MediaArgs = {
  distinct_on?: Maybe<Array<Food_Item_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Media_Order_By>>;
  where?: Maybe<Food_Item_Media_Bool_Exp>;
};


/** columns and relationships of "media_author" */
export type Media_AuthorFood_Item_Media_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Item_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Media_Order_By>>;
  where?: Maybe<Food_Item_Media_Bool_Exp>;
};

/** aggregated selection of "media_author" */
export type Media_Author_Aggregate = {
  __typename?: 'media_author_aggregate';
  aggregate?: Maybe<Media_Author_Aggregate_Fields>;
  nodes: Array<Media_Author>;
};

/** aggregate fields of "media_author" */
export type Media_Author_Aggregate_Fields = {
  __typename?: 'media_author_aggregate_fields';
  avg?: Maybe<Media_Author_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Media_Author_Max_Fields>;
  min?: Maybe<Media_Author_Min_Fields>;
  stddev?: Maybe<Media_Author_Stddev_Fields>;
  stddev_pop?: Maybe<Media_Author_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Media_Author_Stddev_Samp_Fields>;
  sum?: Maybe<Media_Author_Sum_Fields>;
  var_pop?: Maybe<Media_Author_Var_Pop_Fields>;
  var_samp?: Maybe<Media_Author_Var_Samp_Fields>;
  variance?: Maybe<Media_Author_Variance_Fields>;
};


/** aggregate fields of "media_author" */
export type Media_Author_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Media_Author_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "media_author" */
export type Media_Author_Aggregate_Order_By = {
  avg?: Maybe<Media_Author_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Media_Author_Max_Order_By>;
  min?: Maybe<Media_Author_Min_Order_By>;
  stddev?: Maybe<Media_Author_Stddev_Order_By>;
  stddev_pop?: Maybe<Media_Author_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Media_Author_Stddev_Samp_Order_By>;
  sum?: Maybe<Media_Author_Sum_Order_By>;
  var_pop?: Maybe<Media_Author_Var_Pop_Order_By>;
  var_samp?: Maybe<Media_Author_Var_Samp_Order_By>;
  variance?: Maybe<Media_Author_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "media_author" */
export type Media_Author_Arr_Rel_Insert_Input = {
  data: Array<Media_Author_Insert_Input>;
  on_conflict?: Maybe<Media_Author_On_Conflict>;
};

/** aggregate avg on columns */
export type Media_Author_Avg_Fields = {
  __typename?: 'media_author_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "media_author" */
export type Media_Author_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "media_author". All fields are combined with a logical 'AND'. */
export type Media_Author_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Media_Author_Bool_Exp>>>;
  _not?: Maybe<Media_Author_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Media_Author_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  facebook?: Maybe<String_Comparison_Exp>;
  food_item_media?: Maybe<Food_Item_Media_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  instagram?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  personalWebsite?: Maybe<String_Comparison_Exp>;
  twitter?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "media_author" */
export enum Media_Author_Constraint {
  /** unique or primary key constraint */
  Pk_439ea773c817c560dd83cf133d7 = 'PK_439ea773c817c560dd83cf133d7'
}

/** input type for incrementing integer column in table "media_author" */
export type Media_Author_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "media_author" */
export type Media_Author_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  food_item_media?: Maybe<Food_Item_Media_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  instagram?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  personalWebsite?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Media_Author_Max_Fields = {
  __typename?: 'media_author_max_fields';
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  instagram?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  personalWebsite?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "media_author" */
export type Media_Author_Max_Order_By = {
  email?: Maybe<Order_By>;
  facebook?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  instagram?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  personalWebsite?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Media_Author_Min_Fields = {
  __typename?: 'media_author_min_fields';
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  instagram?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  personalWebsite?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "media_author" */
export type Media_Author_Min_Order_By = {
  email?: Maybe<Order_By>;
  facebook?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  instagram?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  personalWebsite?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
};

/** response of any mutation on the table "media_author" */
export type Media_Author_Mutation_Response = {
  __typename?: 'media_author_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Media_Author>;
};

/** input type for inserting object relation for remote table "media_author" */
export type Media_Author_Obj_Rel_Insert_Input = {
  data: Media_Author_Insert_Input;
  on_conflict?: Maybe<Media_Author_On_Conflict>;
};

/** on conflict condition type for table "media_author" */
export type Media_Author_On_Conflict = {
  constraint: Media_Author_Constraint;
  update_columns: Array<Media_Author_Update_Column>;
  where?: Maybe<Media_Author_Bool_Exp>;
};

/** ordering options when selecting data from "media_author" */
export type Media_Author_Order_By = {
  email?: Maybe<Order_By>;
  facebook?: Maybe<Order_By>;
  food_item_media_aggregate?: Maybe<Food_Item_Media_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  instagram?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  personalWebsite?: Maybe<Order_By>;
  twitter?: Maybe<Order_By>;
};

/** primary key columns input for table: "media_author" */
export type Media_Author_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "media_author" */
export enum Media_Author_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Facebook = 'facebook',
  /** column name */
  Id = 'id',
  /** column name */
  Instagram = 'instagram',
  /** column name */
  Name = 'name',
  /** column name */
  PersonalWebsite = 'personalWebsite',
  /** column name */
  Twitter = 'twitter'
}

/** input type for updating data in table "media_author" */
export type Media_Author_Set_Input = {
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  instagram?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  personalWebsite?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Media_Author_Stddev_Fields = {
  __typename?: 'media_author_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "media_author" */
export type Media_Author_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Media_Author_Stddev_Pop_Fields = {
  __typename?: 'media_author_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "media_author" */
export type Media_Author_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Media_Author_Stddev_Samp_Fields = {
  __typename?: 'media_author_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "media_author" */
export type Media_Author_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Media_Author_Sum_Fields = {
  __typename?: 'media_author_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "media_author" */
export type Media_Author_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "media_author" */
export enum Media_Author_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Facebook = 'facebook',
  /** column name */
  Id = 'id',
  /** column name */
  Instagram = 'instagram',
  /** column name */
  Name = 'name',
  /** column name */
  PersonalWebsite = 'personalWebsite',
  /** column name */
  Twitter = 'twitter'
}

/** aggregate var_pop on columns */
export type Media_Author_Var_Pop_Fields = {
  __typename?: 'media_author_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "media_author" */
export type Media_Author_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Media_Author_Var_Samp_Fields = {
  __typename?: 'media_author_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "media_author" */
export type Media_Author_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Media_Author_Variance_Fields = {
  __typename?: 'media_author_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "media_author" */
export type Media_Author_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "menu" */
export type Menu = {
  __typename?: 'menu';
  id: Scalars['Int'];
  is_game_ready: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  restaurant_items: Array<Restaurant_Item>;
  /** An aggregated array relationship */
  restaurant_items_aggregate: Restaurant_Item_Aggregate;
};


/** columns and relationships of "menu" */
export type MenuRestaurant_ItemsArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};


/** columns and relationships of "menu" */
export type MenuRestaurant_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};

/** aggregated selection of "menu" */
export type Menu_Aggregate = {
  __typename?: 'menu_aggregate';
  aggregate?: Maybe<Menu_Aggregate_Fields>;
  nodes: Array<Menu>;
};

/** aggregate fields of "menu" */
export type Menu_Aggregate_Fields = {
  __typename?: 'menu_aggregate_fields';
  avg?: Maybe<Menu_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Menu_Max_Fields>;
  min?: Maybe<Menu_Min_Fields>;
  stddev?: Maybe<Menu_Stddev_Fields>;
  stddev_pop?: Maybe<Menu_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Menu_Stddev_Samp_Fields>;
  sum?: Maybe<Menu_Sum_Fields>;
  var_pop?: Maybe<Menu_Var_Pop_Fields>;
  var_samp?: Maybe<Menu_Var_Samp_Fields>;
  variance?: Maybe<Menu_Variance_Fields>;
};


/** aggregate fields of "menu" */
export type Menu_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Menu_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "menu" */
export type Menu_Aggregate_Order_By = {
  avg?: Maybe<Menu_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Menu_Max_Order_By>;
  min?: Maybe<Menu_Min_Order_By>;
  stddev?: Maybe<Menu_Stddev_Order_By>;
  stddev_pop?: Maybe<Menu_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Menu_Stddev_Samp_Order_By>;
  sum?: Maybe<Menu_Sum_Order_By>;
  var_pop?: Maybe<Menu_Var_Pop_Order_By>;
  var_samp?: Maybe<Menu_Var_Samp_Order_By>;
  variance?: Maybe<Menu_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "menu" */
export type Menu_Arr_Rel_Insert_Input = {
  data: Array<Menu_Insert_Input>;
  on_conflict?: Maybe<Menu_On_Conflict>;
};

/** aggregate avg on columns */
export type Menu_Avg_Fields = {
  __typename?: 'menu_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "menu" */
export type Menu_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "menu". All fields are combined with a logical 'AND'. */
export type Menu_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Menu_Bool_Exp>>>;
  _not?: Maybe<Menu_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Menu_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  is_game_ready?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  restaurant_items?: Maybe<Restaurant_Item_Bool_Exp>;
};

/** unique or primary key constraints on table "menu" */
export enum Menu_Constraint {
  /** unique or primary key constraint */
  Pk_35b2a8f47d153ff7a41860cceeb = 'PK_35b2a8f47d153ff7a41860cceeb'
}

/** input type for incrementing integer column in table "menu" */
export type Menu_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "menu" */
export type Menu_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  is_game_ready?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  restaurant_items?: Maybe<Restaurant_Item_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Menu_Max_Fields = {
  __typename?: 'menu_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "menu" */
export type Menu_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Menu_Min_Fields = {
  __typename?: 'menu_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "menu" */
export type Menu_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "menu" */
export type Menu_Mutation_Response = {
  __typename?: 'menu_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Menu>;
};

/** input type for inserting object relation for remote table "menu" */
export type Menu_Obj_Rel_Insert_Input = {
  data: Menu_Insert_Input;
  on_conflict?: Maybe<Menu_On_Conflict>;
};

/** on conflict condition type for table "menu" */
export type Menu_On_Conflict = {
  constraint: Menu_Constraint;
  update_columns: Array<Menu_Update_Column>;
  where?: Maybe<Menu_Bool_Exp>;
};

/** ordering options when selecting data from "menu" */
export type Menu_Order_By = {
  id?: Maybe<Order_By>;
  is_game_ready?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  restaurant_items_aggregate?: Maybe<Restaurant_Item_Aggregate_Order_By>;
};

/** primary key columns input for table: "menu" */
export type Menu_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "menu_section" */
export type Menu_Section = {
  __typename?: 'menu_section';
  id: Scalars['Int'];
  is_dessert: Scalars['Boolean'];
  is_drink: Scalars['Boolean'];
  is_game_ready: Scalars['Boolean'];
  is_kids: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  restaurant_items: Array<Restaurant_Item>;
  /** An aggregated array relationship */
  restaurant_items_aggregate: Restaurant_Item_Aggregate;
};


/** columns and relationships of "menu_section" */
export type Menu_SectionRestaurant_ItemsArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};


/** columns and relationships of "menu_section" */
export type Menu_SectionRestaurant_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};

/** aggregated selection of "menu_section" */
export type Menu_Section_Aggregate = {
  __typename?: 'menu_section_aggregate';
  aggregate?: Maybe<Menu_Section_Aggregate_Fields>;
  nodes: Array<Menu_Section>;
};

/** aggregate fields of "menu_section" */
export type Menu_Section_Aggregate_Fields = {
  __typename?: 'menu_section_aggregate_fields';
  avg?: Maybe<Menu_Section_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Menu_Section_Max_Fields>;
  min?: Maybe<Menu_Section_Min_Fields>;
  stddev?: Maybe<Menu_Section_Stddev_Fields>;
  stddev_pop?: Maybe<Menu_Section_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Menu_Section_Stddev_Samp_Fields>;
  sum?: Maybe<Menu_Section_Sum_Fields>;
  var_pop?: Maybe<Menu_Section_Var_Pop_Fields>;
  var_samp?: Maybe<Menu_Section_Var_Samp_Fields>;
  variance?: Maybe<Menu_Section_Variance_Fields>;
};


/** aggregate fields of "menu_section" */
export type Menu_Section_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Menu_Section_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "menu_section" */
export type Menu_Section_Aggregate_Order_By = {
  avg?: Maybe<Menu_Section_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Menu_Section_Max_Order_By>;
  min?: Maybe<Menu_Section_Min_Order_By>;
  stddev?: Maybe<Menu_Section_Stddev_Order_By>;
  stddev_pop?: Maybe<Menu_Section_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Menu_Section_Stddev_Samp_Order_By>;
  sum?: Maybe<Menu_Section_Sum_Order_By>;
  var_pop?: Maybe<Menu_Section_Var_Pop_Order_By>;
  var_samp?: Maybe<Menu_Section_Var_Samp_Order_By>;
  variance?: Maybe<Menu_Section_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "menu_section" */
export type Menu_Section_Arr_Rel_Insert_Input = {
  data: Array<Menu_Section_Insert_Input>;
  on_conflict?: Maybe<Menu_Section_On_Conflict>;
};

/** aggregate avg on columns */
export type Menu_Section_Avg_Fields = {
  __typename?: 'menu_section_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "menu_section" */
export type Menu_Section_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "menu_section". All fields are combined with a logical 'AND'. */
export type Menu_Section_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Menu_Section_Bool_Exp>>>;
  _not?: Maybe<Menu_Section_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Menu_Section_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  is_dessert?: Maybe<Boolean_Comparison_Exp>;
  is_drink?: Maybe<Boolean_Comparison_Exp>;
  is_game_ready?: Maybe<Boolean_Comparison_Exp>;
  is_kids?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  restaurant_items?: Maybe<Restaurant_Item_Bool_Exp>;
};

/** unique or primary key constraints on table "menu_section" */
export enum Menu_Section_Constraint {
  /** unique or primary key constraint */
  PkBdb64b3aaf192ece146d3d232f7 = 'PK_bdb64b3aaf192ece146d3d232f7'
}

/** input type for incrementing integer column in table "menu_section" */
export type Menu_Section_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "menu_section" */
export type Menu_Section_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  is_dessert?: Maybe<Scalars['Boolean']>;
  is_drink?: Maybe<Scalars['Boolean']>;
  is_game_ready?: Maybe<Scalars['Boolean']>;
  is_kids?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  restaurant_items?: Maybe<Restaurant_Item_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Menu_Section_Max_Fields = {
  __typename?: 'menu_section_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "menu_section" */
export type Menu_Section_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Menu_Section_Min_Fields = {
  __typename?: 'menu_section_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "menu_section" */
export type Menu_Section_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "menu_section" */
export type Menu_Section_Mutation_Response = {
  __typename?: 'menu_section_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Menu_Section>;
};

/** input type for inserting object relation for remote table "menu_section" */
export type Menu_Section_Obj_Rel_Insert_Input = {
  data: Menu_Section_Insert_Input;
  on_conflict?: Maybe<Menu_Section_On_Conflict>;
};

/** on conflict condition type for table "menu_section" */
export type Menu_Section_On_Conflict = {
  constraint: Menu_Section_Constraint;
  update_columns: Array<Menu_Section_Update_Column>;
  where?: Maybe<Menu_Section_Bool_Exp>;
};

/** ordering options when selecting data from "menu_section" */
export type Menu_Section_Order_By = {
  id?: Maybe<Order_By>;
  is_dessert?: Maybe<Order_By>;
  is_drink?: Maybe<Order_By>;
  is_game_ready?: Maybe<Order_By>;
  is_kids?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  restaurant_items_aggregate?: Maybe<Restaurant_Item_Aggregate_Order_By>;
};

/** primary key columns input for table: "menu_section" */
export type Menu_Section_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "menu_section" */
export enum Menu_Section_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsDessert = 'is_dessert',
  /** column name */
  IsDrink = 'is_drink',
  /** column name */
  IsGameReady = 'is_game_ready',
  /** column name */
  IsKids = 'is_kids',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "menu_section" */
export type Menu_Section_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  is_dessert?: Maybe<Scalars['Boolean']>;
  is_drink?: Maybe<Scalars['Boolean']>;
  is_game_ready?: Maybe<Scalars['Boolean']>;
  is_kids?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Menu_Section_Stddev_Fields = {
  __typename?: 'menu_section_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "menu_section" */
export type Menu_Section_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Menu_Section_Stddev_Pop_Fields = {
  __typename?: 'menu_section_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "menu_section" */
export type Menu_Section_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Menu_Section_Stddev_Samp_Fields = {
  __typename?: 'menu_section_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "menu_section" */
export type Menu_Section_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Menu_Section_Sum_Fields = {
  __typename?: 'menu_section_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "menu_section" */
export type Menu_Section_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "menu_section" */
export enum Menu_Section_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsDessert = 'is_dessert',
  /** column name */
  IsDrink = 'is_drink',
  /** column name */
  IsGameReady = 'is_game_ready',
  /** column name */
  IsKids = 'is_kids',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Menu_Section_Var_Pop_Fields = {
  __typename?: 'menu_section_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "menu_section" */
export type Menu_Section_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Menu_Section_Var_Samp_Fields = {
  __typename?: 'menu_section_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "menu_section" */
export type Menu_Section_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Menu_Section_Variance_Fields = {
  __typename?: 'menu_section_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "menu_section" */
export type Menu_Section_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** select columns of table "menu" */
export enum Menu_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsGameReady = 'is_game_ready',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "menu" */
export type Menu_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  is_game_ready?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Menu_Stddev_Fields = {
  __typename?: 'menu_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "menu" */
export type Menu_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Menu_Stddev_Pop_Fields = {
  __typename?: 'menu_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "menu" */
export type Menu_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Menu_Stddev_Samp_Fields = {
  __typename?: 'menu_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "menu" */
export type Menu_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Menu_Sum_Fields = {
  __typename?: 'menu_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "menu" */
export type Menu_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "menu" */
export enum Menu_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsGameReady = 'is_game_ready',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Menu_Var_Pop_Fields = {
  __typename?: 'menu_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "menu" */
export type Menu_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Menu_Var_Samp_Fields = {
  __typename?: 'menu_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "menu" */
export type Menu_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Menu_Variance_Fields = {
  __typename?: 'menu_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "menu" */
export type Menu_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "metric" */
export type Metric = {
  __typename?: 'metric';
  created_at: Scalars['timestamp'];
  id: Scalars['Int'];
  name: Scalars['String'];
  payload: Scalars['String'];
};

/** aggregated selection of "metric" */
export type Metric_Aggregate = {
  __typename?: 'metric_aggregate';
  aggregate?: Maybe<Metric_Aggregate_Fields>;
  nodes: Array<Metric>;
};

/** aggregate fields of "metric" */
export type Metric_Aggregate_Fields = {
  __typename?: 'metric_aggregate_fields';
  avg?: Maybe<Metric_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Metric_Max_Fields>;
  min?: Maybe<Metric_Min_Fields>;
  stddev?: Maybe<Metric_Stddev_Fields>;
  stddev_pop?: Maybe<Metric_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Metric_Stddev_Samp_Fields>;
  sum?: Maybe<Metric_Sum_Fields>;
  var_pop?: Maybe<Metric_Var_Pop_Fields>;
  var_samp?: Maybe<Metric_Var_Samp_Fields>;
  variance?: Maybe<Metric_Variance_Fields>;
};


/** aggregate fields of "metric" */
export type Metric_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metric_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "metric" */
export type Metric_Aggregate_Order_By = {
  avg?: Maybe<Metric_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Metric_Max_Order_By>;
  min?: Maybe<Metric_Min_Order_By>;
  stddev?: Maybe<Metric_Stddev_Order_By>;
  stddev_pop?: Maybe<Metric_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Metric_Stddev_Samp_Order_By>;
  sum?: Maybe<Metric_Sum_Order_By>;
  var_pop?: Maybe<Metric_Var_Pop_Order_By>;
  var_samp?: Maybe<Metric_Var_Samp_Order_By>;
  variance?: Maybe<Metric_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "metric" */
export type Metric_Arr_Rel_Insert_Input = {
  data: Array<Metric_Insert_Input>;
  on_conflict?: Maybe<Metric_On_Conflict>;
};

/** aggregate avg on columns */
export type Metric_Avg_Fields = {
  __typename?: 'metric_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "metric" */
export type Metric_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "metric". All fields are combined with a logical 'AND'. */
export type Metric_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metric_Bool_Exp>>>;
  _not?: Maybe<Metric_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Metric_Bool_Exp>>>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  payload?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "metric" */
export enum Metric_Constraint {
  /** unique or primary key constraint */
  Pk_7d24c075ea2926dd32bd1c534ce = 'PK_7d24c075ea2926dd32bd1c534ce'
}

/** input type for incrementing integer column in table "metric" */
export type Metric_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "metric" */
export type Metric_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Metric_Max_Fields = {
  __typename?: 'metric_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "metric" */
export type Metric_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Metric_Min_Fields = {
  __typename?: 'metric_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "metric" */
export type Metric_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
};

/** response of any mutation on the table "metric" */
export type Metric_Mutation_Response = {
  __typename?: 'metric_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Metric>;
};

/** input type for inserting object relation for remote table "metric" */
export type Metric_Obj_Rel_Insert_Input = {
  data: Metric_Insert_Input;
  on_conflict?: Maybe<Metric_On_Conflict>;
};

/** on conflict condition type for table "metric" */
export type Metric_On_Conflict = {
  constraint: Metric_Constraint;
  update_columns: Array<Metric_Update_Column>;
  where?: Maybe<Metric_Bool_Exp>;
};

/** ordering options when selecting data from "metric" */
export type Metric_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
};

/** primary key columns input for table: "metric" */
export type Metric_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "metric" */
export enum Metric_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Payload = 'payload'
}

/** input type for updating data in table "metric" */
export type Metric_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Metric_Stddev_Fields = {
  __typename?: 'metric_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "metric" */
export type Metric_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Metric_Stddev_Pop_Fields = {
  __typename?: 'metric_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "metric" */
export type Metric_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Metric_Stddev_Samp_Fields = {
  __typename?: 'metric_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "metric" */
export type Metric_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Metric_Sum_Fields = {
  __typename?: 'metric_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "metric" */
export type Metric_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "metric" */
export enum Metric_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Payload = 'payload'
}

/** aggregate var_pop on columns */
export type Metric_Var_Pop_Fields = {
  __typename?: 'metric_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "metric" */
export type Metric_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Metric_Var_Samp_Fields = {
  __typename?: 'metric_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "metric" */
export type Metric_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Metric_Variance_Fields = {
  __typename?: 'metric_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "metric" */
export type Metric_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** perform the action: "Login" */
  Login?: Maybe<LoginResponse>;
  /** perform the action: "RegisterUser" */
  RegisterUser: LoginResponse;
  /** delete data from the table: "authenticated" */
  delete_authenticated?: Maybe<Authenticated_Mutation_Response>;
  /** delete single row from the table: "authenticated" */
  delete_authenticated_by_pk?: Maybe<Authenticated>;
  /** delete data from the table: "contact" */
  delete_contact?: Maybe<Contact_Mutation_Response>;
  /** delete single row from the table: "contact" */
  delete_contact_by_pk?: Maybe<Contact>;
  /** delete data from the table: "cuisine" */
  delete_cuisine?: Maybe<Cuisine_Mutation_Response>;
  /** delete single row from the table: "cuisine" */
  delete_cuisine_by_pk?: Maybe<Cuisine>;
  /** delete data from the table: "favorite_item_entity" */
  delete_favorite_item_entity?: Maybe<Favorite_Item_Entity_Mutation_Response>;
  /** delete single row from the table: "favorite_item_entity" */
  delete_favorite_item_entity_by_pk?: Maybe<Favorite_Item_Entity>;
  /** delete data from the table: "food_item" */
  delete_food_item?: Maybe<Food_Item_Mutation_Response>;
  /** delete single row from the table: "food_item" */
  delete_food_item_by_pk?: Maybe<Food_Item>;
  /** delete data from the table: "food_item_media" */
  delete_food_item_media?: Maybe<Food_Item_Media_Mutation_Response>;
  /** delete single row from the table: "food_item_media" */
  delete_food_item_media_by_pk?: Maybe<Food_Item_Media>;
  /** delete data from the table: "game" */
  delete_game?: Maybe<Game_Mutation_Response>;
  /** delete single row from the table: "game" */
  delete_game_by_pk?: Maybe<Game>;
  /** delete data from the table: "game_choice" */
  delete_game_choice?: Maybe<Game_Choice_Mutation_Response>;
  /** delete single row from the table: "game_choice" */
  delete_game_choice_by_pk?: Maybe<Game_Choice>;
  /** delete data from the table: "game_cuisine" */
  delete_game_cuisine?: Maybe<Game_Cuisine_Mutation_Response>;
  /** delete single row from the table: "game_cuisine" */
  delete_game_cuisine_by_pk?: Maybe<Game_Cuisine>;
  /** delete data from the table: "game_player" */
  delete_game_player?: Maybe<Game_Player_Mutation_Response>;
  /** delete single row from the table: "game_player" */
  delete_game_player_by_pk?: Maybe<Game_Player>;
  /** delete data from the table: "log" */
  delete_log?: Maybe<Log_Mutation_Response>;
  /** delete single row from the table: "log" */
  delete_log_by_pk?: Maybe<Log>;
  /** delete data from the table: "media_author" */
  delete_media_author?: Maybe<Media_Author_Mutation_Response>;
  /** delete single row from the table: "media_author" */
  delete_media_author_by_pk?: Maybe<Media_Author>;
  /** delete data from the table: "menu" */
  delete_menu?: Maybe<Menu_Mutation_Response>;
  /** delete single row from the table: "menu" */
  delete_menu_by_pk?: Maybe<Menu>;
  /** delete data from the table: "menu_section" */
  delete_menu_section?: Maybe<Menu_Section_Mutation_Response>;
  /** delete single row from the table: "menu_section" */
  delete_menu_section_by_pk?: Maybe<Menu_Section>;
  /** delete data from the table: "metric" */
  delete_metric?: Maybe<Metric_Mutation_Response>;
  /** delete single row from the table: "metric" */
  delete_metric_by_pk?: Maybe<Metric>;
  /** delete data from the table: "restaurant" */
  delete_restaurant?: Maybe<Restaurant_Mutation_Response>;
  /** delete single row from the table: "restaurant" */
  delete_restaurant_by_pk?: Maybe<Restaurant>;
  /** delete data from the table: "restaurant_chain" */
  delete_restaurant_chain?: Maybe<Restaurant_Chain_Mutation_Response>;
  /** delete single row from the table: "restaurant_chain" */
  delete_restaurant_chain_by_pk?: Maybe<Restaurant_Chain>;
  /** delete data from the table: "restaurant_cuisine" */
  delete_restaurant_cuisine?: Maybe<Restaurant_Cuisine_Mutation_Response>;
  /** delete single row from the table: "restaurant_cuisine" */
  delete_restaurant_cuisine_by_pk?: Maybe<Restaurant_Cuisine>;
  /** delete data from the table: "restaurant_item" */
  delete_restaurant_item?: Maybe<Restaurant_Item_Mutation_Response>;
  /** delete single row from the table: "restaurant_item" */
  delete_restaurant_item_by_pk?: Maybe<Restaurant_Item>;
  /** delete data from the table: "restaurants_visited_entity" */
  delete_restaurants_visited_entity?: Maybe<Restaurants_Visited_Entity_Mutation_Response>;
  /** delete single row from the table: "restaurants_visited_entity" */
  delete_restaurants_visited_entity_by_pk?: Maybe<Restaurants_Visited_Entity>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_device" */
  delete_user_device?: Maybe<User_Device_Mutation_Response>;
  /** delete single row from the table: "user_device" */
  delete_user_device_by_pk?: Maybe<User_Device>;
  /** insert data into the table: "authenticated" */
  insert_authenticated?: Maybe<Authenticated_Mutation_Response>;
  /** insert a single row into the table: "authenticated" */
  insert_authenticated_one?: Maybe<Authenticated>;
  /** insert data into the table: "contact" */
  insert_contact?: Maybe<Contact_Mutation_Response>;
  /** insert a single row into the table: "contact" */
  insert_contact_one?: Maybe<Contact>;
  /** insert data into the table: "cuisine" */
  insert_cuisine?: Maybe<Cuisine_Mutation_Response>;
  /** insert a single row into the table: "cuisine" */
  insert_cuisine_one?: Maybe<Cuisine>;
  /** insert data into the table: "favorite_item_entity" */
  insert_favorite_item_entity?: Maybe<Favorite_Item_Entity_Mutation_Response>;
  /** insert a single row into the table: "favorite_item_entity" */
  insert_favorite_item_entity_one?: Maybe<Favorite_Item_Entity>;
  /** insert data into the table: "food_item" */
  insert_food_item?: Maybe<Food_Item_Mutation_Response>;
  /** insert data into the table: "food_item_media" */
  insert_food_item_media?: Maybe<Food_Item_Media_Mutation_Response>;
  /** insert a single row into the table: "food_item_media" */
  insert_food_item_media_one?: Maybe<Food_Item_Media>;
  /** insert a single row into the table: "food_item" */
  insert_food_item_one?: Maybe<Food_Item>;
  /** insert data into the table: "game" */
  insert_game?: Maybe<Game_Mutation_Response>;
  /** insert data into the table: "game_choice" */
  insert_game_choice?: Maybe<Game_Choice_Mutation_Response>;
  /** insert a single row into the table: "game_choice" */
  insert_game_choice_one?: Maybe<Game_Choice>;
  /** insert data into the table: "game_cuisine" */
  insert_game_cuisine?: Maybe<Game_Cuisine_Mutation_Response>;
  /** insert a single row into the table: "game_cuisine" */
  insert_game_cuisine_one?: Maybe<Game_Cuisine>;
  /** insert a single row into the table: "game" */
  insert_game_one?: Maybe<Game>;
  /** insert data into the table: "game_player" */
  insert_game_player?: Maybe<Game_Player_Mutation_Response>;
  /** insert a single row into the table: "game_player" */
  insert_game_player_one?: Maybe<Game_Player>;
  /** insert data into the table: "log" */
  insert_log?: Maybe<Log_Mutation_Response>;
  /** insert a single row into the table: "log" */
  insert_log_one?: Maybe<Log>;
  /** insert data into the table: "media_author" */
  insert_media_author?: Maybe<Media_Author_Mutation_Response>;
  /** insert a single row into the table: "media_author" */
  insert_media_author_one?: Maybe<Media_Author>;
  /** insert data into the table: "menu" */
  insert_menu?: Maybe<Menu_Mutation_Response>;
  /** insert a single row into the table: "menu" */
  insert_menu_one?: Maybe<Menu>;
  /** insert data into the table: "menu_section" */
  insert_menu_section?: Maybe<Menu_Section_Mutation_Response>;
  /** insert a single row into the table: "menu_section" */
  insert_menu_section_one?: Maybe<Menu_Section>;
  /** insert data into the table: "metric" */
  insert_metric?: Maybe<Metric_Mutation_Response>;
  /** insert a single row into the table: "metric" */
  insert_metric_one?: Maybe<Metric>;
  /** insert data into the table: "restaurant" */
  insert_restaurant?: Maybe<Restaurant_Mutation_Response>;
  /** insert data into the table: "restaurant_chain" */
  insert_restaurant_chain?: Maybe<Restaurant_Chain_Mutation_Response>;
  /** insert a single row into the table: "restaurant_chain" */
  insert_restaurant_chain_one?: Maybe<Restaurant_Chain>;
  /** insert data into the table: "restaurant_cuisine" */
  insert_restaurant_cuisine?: Maybe<Restaurant_Cuisine_Mutation_Response>;
  /** insert a single row into the table: "restaurant_cuisine" */
  insert_restaurant_cuisine_one?: Maybe<Restaurant_Cuisine>;
  /** insert data into the table: "restaurant_item" */
  insert_restaurant_item?: Maybe<Restaurant_Item_Mutation_Response>;
  /** insert a single row into the table: "restaurant_item" */
  insert_restaurant_item_one?: Maybe<Restaurant_Item>;
  /** insert a single row into the table: "restaurant" */
  insert_restaurant_one?: Maybe<Restaurant>;
  /** insert data into the table: "restaurants_visited_entity" */
  insert_restaurants_visited_entity?: Maybe<Restaurants_Visited_Entity_Mutation_Response>;
  /** insert a single row into the table: "restaurants_visited_entity" */
  insert_restaurants_visited_entity_one?: Maybe<Restaurants_Visited_Entity>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user_device" */
  insert_user_device?: Maybe<User_Device_Mutation_Response>;
  /** insert a single row into the table: "user_device" */
  insert_user_device_one?: Maybe<User_Device>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "authenticated" */
  update_authenticated?: Maybe<Authenticated_Mutation_Response>;
  /** update single row of the table: "authenticated" */
  update_authenticated_by_pk?: Maybe<Authenticated>;
  /** update data of the table: "contact" */
  update_contact?: Maybe<Contact_Mutation_Response>;
  /** update single row of the table: "contact" */
  update_contact_by_pk?: Maybe<Contact>;
  /** update data of the table: "cuisine" */
  update_cuisine?: Maybe<Cuisine_Mutation_Response>;
  /** update single row of the table: "cuisine" */
  update_cuisine_by_pk?: Maybe<Cuisine>;
  /** update data of the table: "favorite_item_entity" */
  update_favorite_item_entity?: Maybe<Favorite_Item_Entity_Mutation_Response>;
  /** update single row of the table: "favorite_item_entity" */
  update_favorite_item_entity_by_pk?: Maybe<Favorite_Item_Entity>;
  /** update data of the table: "food_item" */
  update_food_item?: Maybe<Food_Item_Mutation_Response>;
  /** update single row of the table: "food_item" */
  update_food_item_by_pk?: Maybe<Food_Item>;
  /** update data of the table: "food_item_media" */
  update_food_item_media?: Maybe<Food_Item_Media_Mutation_Response>;
  /** update single row of the table: "food_item_media" */
  update_food_item_media_by_pk?: Maybe<Food_Item_Media>;
  /** update data of the table: "game" */
  update_game?: Maybe<Game_Mutation_Response>;
  /** update single row of the table: "game" */
  update_game_by_pk?: Maybe<Game>;
  /** update data of the table: "game_choice" */
  update_game_choice?: Maybe<Game_Choice_Mutation_Response>;
  /** update single row of the table: "game_choice" */
  update_game_choice_by_pk?: Maybe<Game_Choice>;
  /** update data of the table: "game_cuisine" */
  update_game_cuisine?: Maybe<Game_Cuisine_Mutation_Response>;
  /** update single row of the table: "game_cuisine" */
  update_game_cuisine_by_pk?: Maybe<Game_Cuisine>;
  /** update data of the table: "game_player" */
  update_game_player?: Maybe<Game_Player_Mutation_Response>;
  /** update single row of the table: "game_player" */
  update_game_player_by_pk?: Maybe<Game_Player>;
  /** update data of the table: "log" */
  update_log?: Maybe<Log_Mutation_Response>;
  /** update single row of the table: "log" */
  update_log_by_pk?: Maybe<Log>;
  /** update data of the table: "media_author" */
  update_media_author?: Maybe<Media_Author_Mutation_Response>;
  /** update single row of the table: "media_author" */
  update_media_author_by_pk?: Maybe<Media_Author>;
  /** update data of the table: "menu" */
  update_menu?: Maybe<Menu_Mutation_Response>;
  /** update single row of the table: "menu" */
  update_menu_by_pk?: Maybe<Menu>;
  /** update data of the table: "menu_section" */
  update_menu_section?: Maybe<Menu_Section_Mutation_Response>;
  /** update single row of the table: "menu_section" */
  update_menu_section_by_pk?: Maybe<Menu_Section>;
  /** update data of the table: "metric" */
  update_metric?: Maybe<Metric_Mutation_Response>;
  /** update single row of the table: "metric" */
  update_metric_by_pk?: Maybe<Metric>;
  /** update data of the table: "restaurant" */
  update_restaurant?: Maybe<Restaurant_Mutation_Response>;
  /** update single row of the table: "restaurant" */
  update_restaurant_by_pk?: Maybe<Restaurant>;
  /** update data of the table: "restaurant_chain" */
  update_restaurant_chain?: Maybe<Restaurant_Chain_Mutation_Response>;
  /** update single row of the table: "restaurant_chain" */
  update_restaurant_chain_by_pk?: Maybe<Restaurant_Chain>;
  /** update data of the table: "restaurant_cuisine" */
  update_restaurant_cuisine?: Maybe<Restaurant_Cuisine_Mutation_Response>;
  /** update single row of the table: "restaurant_cuisine" */
  update_restaurant_cuisine_by_pk?: Maybe<Restaurant_Cuisine>;
  /** update data of the table: "restaurant_item" */
  update_restaurant_item?: Maybe<Restaurant_Item_Mutation_Response>;
  /** update single row of the table: "restaurant_item" */
  update_restaurant_item_by_pk?: Maybe<Restaurant_Item>;
  /** update data of the table: "restaurants_visited_entity" */
  update_restaurants_visited_entity?: Maybe<Restaurants_Visited_Entity_Mutation_Response>;
  /** update single row of the table: "restaurants_visited_entity" */
  update_restaurants_visited_entity_by_pk?: Maybe<Restaurants_Visited_Entity>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_device" */
  update_user_device?: Maybe<User_Device_Mutation_Response>;
  /** update single row of the table: "user_device" */
  update_user_device_by_pk?: Maybe<User_Device>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  identifier: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootRegisterUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_AuthenticatedArgs = {
  where: Authenticated_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Authenticated_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ContactArgs = {
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CuisineArgs = {
  where: Cuisine_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cuisine_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Favorite_Item_EntityArgs = {
  where: Favorite_Item_Entity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Favorite_Item_Entity_By_PkArgs = {
  foodItemId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Food_ItemArgs = {
  where: Food_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Food_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Food_Item_MediaArgs = {
  where: Food_Item_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Food_Item_Media_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_GameArgs = {
  where: Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Game_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Game_ChoiceArgs = {
  where: Game_Choice_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Game_Choice_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Game_CuisineArgs = {
  where: Game_Cuisine_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Game_Cuisine_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Game_PlayerArgs = {
  where: Game_Player_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Game_Player_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LogArgs = {
  where: Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Log_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Media_AuthorArgs = {
  where: Media_Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Media_Author_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MenuArgs = {
  where: Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Menu_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Menu_SectionArgs = {
  where: Menu_Section_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Menu_Section_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MetricArgs = {
  where: Metric_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Metric_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RestaurantArgs = {
  where: Restaurant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restaurant_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Restaurant_ChainArgs = {
  where: Restaurant_Chain_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restaurant_Chain_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Restaurant_CuisineArgs = {
  where: Restaurant_Cuisine_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restaurant_Cuisine_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Restaurant_ItemArgs = {
  where: Restaurant_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restaurant_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Restaurants_Visited_EntityArgs = {
  where: Restaurants_Visited_Entity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restaurants_Visited_Entity_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_DeviceArgs = {
  where: User_Device_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Device_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_AuthenticatedArgs = {
  objects: Array<Authenticated_Insert_Input>;
  on_conflict?: Maybe<Authenticated_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Authenticated_OneArgs = {
  object: Authenticated_Insert_Input;
  on_conflict?: Maybe<Authenticated_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContactArgs = {
  objects: Array<Contact_Insert_Input>;
  on_conflict?: Maybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_OneArgs = {
  object: Contact_Insert_Input;
  on_conflict?: Maybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CuisineArgs = {
  objects: Array<Cuisine_Insert_Input>;
  on_conflict?: Maybe<Cuisine_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cuisine_OneArgs = {
  object: Cuisine_Insert_Input;
  on_conflict?: Maybe<Cuisine_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Favorite_Item_EntityArgs = {
  objects: Array<Favorite_Item_Entity_Insert_Input>;
  on_conflict?: Maybe<Favorite_Item_Entity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Favorite_Item_Entity_OneArgs = {
  object: Favorite_Item_Entity_Insert_Input;
  on_conflict?: Maybe<Favorite_Item_Entity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Food_ItemArgs = {
  objects: Array<Food_Item_Insert_Input>;
  on_conflict?: Maybe<Food_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Food_Item_MediaArgs = {
  objects: Array<Food_Item_Media_Insert_Input>;
  on_conflict?: Maybe<Food_Item_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Food_Item_Media_OneArgs = {
  object: Food_Item_Media_Insert_Input;
  on_conflict?: Maybe<Food_Item_Media_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Food_Item_OneArgs = {
  object: Food_Item_Insert_Input;
  on_conflict?: Maybe<Food_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameArgs = {
  objects: Array<Game_Insert_Input>;
  on_conflict?: Maybe<Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_ChoiceArgs = {
  objects: Array<Game_Choice_Insert_Input>;
  on_conflict?: Maybe<Game_Choice_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_Choice_OneArgs = {
  object: Game_Choice_Insert_Input;
  on_conflict?: Maybe<Game_Choice_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_CuisineArgs = {
  objects: Array<Game_Cuisine_Insert_Input>;
  on_conflict?: Maybe<Game_Cuisine_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_Cuisine_OneArgs = {
  object: Game_Cuisine_Insert_Input;
  on_conflict?: Maybe<Game_Cuisine_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_OneArgs = {
  object: Game_Insert_Input;
  on_conflict?: Maybe<Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_PlayerArgs = {
  objects: Array<Game_Player_Insert_Input>;
  on_conflict?: Maybe<Game_Player_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_Player_OneArgs = {
  object: Game_Player_Insert_Input;
  on_conflict?: Maybe<Game_Player_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LogArgs = {
  objects: Array<Log_Insert_Input>;
  on_conflict?: Maybe<Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Log_OneArgs = {
  object: Log_Insert_Input;
  on_conflict?: Maybe<Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_AuthorArgs = {
  objects: Array<Media_Author_Insert_Input>;
  on_conflict?: Maybe<Media_Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Media_Author_OneArgs = {
  object: Media_Author_Insert_Input;
  on_conflict?: Maybe<Media_Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MenuArgs = {
  objects: Array<Menu_Insert_Input>;
  on_conflict?: Maybe<Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Menu_OneArgs = {
  object: Menu_Insert_Input;
  on_conflict?: Maybe<Menu_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Menu_SectionArgs = {
  objects: Array<Menu_Section_Insert_Input>;
  on_conflict?: Maybe<Menu_Section_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Menu_Section_OneArgs = {
  object: Menu_Section_Insert_Input;
  on_conflict?: Maybe<Menu_Section_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MetricArgs = {
  objects: Array<Metric_Insert_Input>;
  on_conflict?: Maybe<Metric_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Metric_OneArgs = {
  object: Metric_Insert_Input;
  on_conflict?: Maybe<Metric_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RestaurantArgs = {
  objects: Array<Restaurant_Insert_Input>;
  on_conflict?: Maybe<Restaurant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurant_ChainArgs = {
  objects: Array<Restaurant_Chain_Insert_Input>;
  on_conflict?: Maybe<Restaurant_Chain_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurant_Chain_OneArgs = {
  object: Restaurant_Chain_Insert_Input;
  on_conflict?: Maybe<Restaurant_Chain_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurant_CuisineArgs = {
  objects: Array<Restaurant_Cuisine_Insert_Input>;
  on_conflict?: Maybe<Restaurant_Cuisine_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurant_Cuisine_OneArgs = {
  object: Restaurant_Cuisine_Insert_Input;
  on_conflict?: Maybe<Restaurant_Cuisine_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurant_ItemArgs = {
  objects: Array<Restaurant_Item_Insert_Input>;
  on_conflict?: Maybe<Restaurant_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurant_Item_OneArgs = {
  object: Restaurant_Item_Insert_Input;
  on_conflict?: Maybe<Restaurant_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurant_OneArgs = {
  object: Restaurant_Insert_Input;
  on_conflict?: Maybe<Restaurant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurants_Visited_EntityArgs = {
  objects: Array<Restaurants_Visited_Entity_Insert_Input>;
  on_conflict?: Maybe<Restaurants_Visited_Entity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurants_Visited_Entity_OneArgs = {
  object: Restaurants_Visited_Entity_Insert_Input;
  on_conflict?: Maybe<Restaurants_Visited_Entity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_DeviceArgs = {
  objects: Array<User_Device_Insert_Input>;
  on_conflict?: Maybe<User_Device_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Device_OneArgs = {
  object: User_Device_Insert_Input;
  on_conflict?: Maybe<User_Device_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthenticatedArgs = {
  _inc?: Maybe<Authenticated_Inc_Input>;
  _set?: Maybe<Authenticated_Set_Input>;
  where: Authenticated_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Authenticated_By_PkArgs = {
  _inc?: Maybe<Authenticated_Inc_Input>;
  _set?: Maybe<Authenticated_Set_Input>;
  pk_columns: Authenticated_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ContactArgs = {
  _inc?: Maybe<Contact_Inc_Input>;
  _set?: Maybe<Contact_Set_Input>;
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_By_PkArgs = {
  _inc?: Maybe<Contact_Inc_Input>;
  _set?: Maybe<Contact_Set_Input>;
  pk_columns: Contact_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CuisineArgs = {
  _inc?: Maybe<Cuisine_Inc_Input>;
  _set?: Maybe<Cuisine_Set_Input>;
  where: Cuisine_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cuisine_By_PkArgs = {
  _inc?: Maybe<Cuisine_Inc_Input>;
  _set?: Maybe<Cuisine_Set_Input>;
  pk_columns: Cuisine_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Favorite_Item_EntityArgs = {
  _inc?: Maybe<Favorite_Item_Entity_Inc_Input>;
  _set?: Maybe<Favorite_Item_Entity_Set_Input>;
  where: Favorite_Item_Entity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Favorite_Item_Entity_By_PkArgs = {
  _inc?: Maybe<Favorite_Item_Entity_Inc_Input>;
  _set?: Maybe<Favorite_Item_Entity_Set_Input>;
  pk_columns: Favorite_Item_Entity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Food_ItemArgs = {
  _inc?: Maybe<Food_Item_Inc_Input>;
  _set?: Maybe<Food_Item_Set_Input>;
  where: Food_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Food_Item_By_PkArgs = {
  _inc?: Maybe<Food_Item_Inc_Input>;
  _set?: Maybe<Food_Item_Set_Input>;
  pk_columns: Food_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Food_Item_MediaArgs = {
  _inc?: Maybe<Food_Item_Media_Inc_Input>;
  _set?: Maybe<Food_Item_Media_Set_Input>;
  where: Food_Item_Media_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Food_Item_Media_By_PkArgs = {
  _inc?: Maybe<Food_Item_Media_Inc_Input>;
  _set?: Maybe<Food_Item_Media_Set_Input>;
  pk_columns: Food_Item_Media_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GameArgs = {
  _inc?: Maybe<Game_Inc_Input>;
  _set?: Maybe<Game_Set_Input>;
  where: Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Game_By_PkArgs = {
  _inc?: Maybe<Game_Inc_Input>;
  _set?: Maybe<Game_Set_Input>;
  pk_columns: Game_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Game_ChoiceArgs = {
  _inc?: Maybe<Game_Choice_Inc_Input>;
  _set?: Maybe<Game_Choice_Set_Input>;
  where: Game_Choice_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Game_Choice_By_PkArgs = {
  _inc?: Maybe<Game_Choice_Inc_Input>;
  _set?: Maybe<Game_Choice_Set_Input>;
  pk_columns: Game_Choice_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Game_CuisineArgs = {
  _inc?: Maybe<Game_Cuisine_Inc_Input>;
  _set?: Maybe<Game_Cuisine_Set_Input>;
  where: Game_Cuisine_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Game_Cuisine_By_PkArgs = {
  _inc?: Maybe<Game_Cuisine_Inc_Input>;
  _set?: Maybe<Game_Cuisine_Set_Input>;
  pk_columns: Game_Cuisine_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Game_PlayerArgs = {
  _inc?: Maybe<Game_Player_Inc_Input>;
  _set?: Maybe<Game_Player_Set_Input>;
  where: Game_Player_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Game_Player_By_PkArgs = {
  _inc?: Maybe<Game_Player_Inc_Input>;
  _set?: Maybe<Game_Player_Set_Input>;
  pk_columns: Game_Player_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LogArgs = {
  _inc?: Maybe<Log_Inc_Input>;
  _set?: Maybe<Log_Set_Input>;
  where: Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Log_By_PkArgs = {
  _inc?: Maybe<Log_Inc_Input>;
  _set?: Maybe<Log_Set_Input>;
  pk_columns: Log_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Media_AuthorArgs = {
  _inc?: Maybe<Media_Author_Inc_Input>;
  _set?: Maybe<Media_Author_Set_Input>;
  where: Media_Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Media_Author_By_PkArgs = {
  _inc?: Maybe<Media_Author_Inc_Input>;
  _set?: Maybe<Media_Author_Set_Input>;
  pk_columns: Media_Author_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MenuArgs = {
  _inc?: Maybe<Menu_Inc_Input>;
  _set?: Maybe<Menu_Set_Input>;
  where: Menu_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Menu_By_PkArgs = {
  _inc?: Maybe<Menu_Inc_Input>;
  _set?: Maybe<Menu_Set_Input>;
  pk_columns: Menu_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Menu_SectionArgs = {
  _inc?: Maybe<Menu_Section_Inc_Input>;
  _set?: Maybe<Menu_Section_Set_Input>;
  where: Menu_Section_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Menu_Section_By_PkArgs = {
  _inc?: Maybe<Menu_Section_Inc_Input>;
  _set?: Maybe<Menu_Section_Set_Input>;
  pk_columns: Menu_Section_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MetricArgs = {
  _inc?: Maybe<Metric_Inc_Input>;
  _set?: Maybe<Metric_Set_Input>;
  where: Metric_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Metric_By_PkArgs = {
  _inc?: Maybe<Metric_Inc_Input>;
  _set?: Maybe<Metric_Set_Input>;
  pk_columns: Metric_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RestaurantArgs = {
  _inc?: Maybe<Restaurant_Inc_Input>;
  _set?: Maybe<Restaurant_Set_Input>;
  where: Restaurant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurant_By_PkArgs = {
  _inc?: Maybe<Restaurant_Inc_Input>;
  _set?: Maybe<Restaurant_Set_Input>;
  pk_columns: Restaurant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurant_ChainArgs = {
  _inc?: Maybe<Restaurant_Chain_Inc_Input>;
  _set?: Maybe<Restaurant_Chain_Set_Input>;
  where: Restaurant_Chain_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurant_Chain_By_PkArgs = {
  _inc?: Maybe<Restaurant_Chain_Inc_Input>;
  _set?: Maybe<Restaurant_Chain_Set_Input>;
  pk_columns: Restaurant_Chain_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurant_CuisineArgs = {
  _inc?: Maybe<Restaurant_Cuisine_Inc_Input>;
  _set?: Maybe<Restaurant_Cuisine_Set_Input>;
  where: Restaurant_Cuisine_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurant_Cuisine_By_PkArgs = {
  _inc?: Maybe<Restaurant_Cuisine_Inc_Input>;
  _set?: Maybe<Restaurant_Cuisine_Set_Input>;
  pk_columns: Restaurant_Cuisine_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurant_ItemArgs = {
  _inc?: Maybe<Restaurant_Item_Inc_Input>;
  _set?: Maybe<Restaurant_Item_Set_Input>;
  where: Restaurant_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurant_Item_By_PkArgs = {
  _inc?: Maybe<Restaurant_Item_Inc_Input>;
  _set?: Maybe<Restaurant_Item_Set_Input>;
  pk_columns: Restaurant_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurants_Visited_EntityArgs = {
  _inc?: Maybe<Restaurants_Visited_Entity_Inc_Input>;
  _set?: Maybe<Restaurants_Visited_Entity_Set_Input>;
  where: Restaurants_Visited_Entity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurants_Visited_Entity_By_PkArgs = {
  _inc?: Maybe<Restaurants_Visited_Entity_Inc_Input>;
  _set?: Maybe<Restaurants_Visited_Entity_Set_Input>;
  pk_columns: Restaurants_Visited_Entity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_DeviceArgs = {
  _inc?: Maybe<User_Device_Inc_Input>;
  _set?: Maybe<User_Device_Set_Input>;
  where: User_Device_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Device_By_PkArgs = {
  _inc?: Maybe<User_Device_Inc_Input>;
  _set?: Maybe<User_Device_Set_Input>;
  pk_columns: User_Device_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "authenticated" */
  authenticated: Array<Authenticated>;
  /** fetch aggregated fields from the table: "authenticated" */
  authenticated_aggregate: Authenticated_Aggregate;
  /** fetch data from the table: "authenticated" using primary key columns */
  authenticated_by_pk?: Maybe<Authenticated>;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "cuisine" */
  cuisine: Array<Cuisine>;
  /** fetch aggregated fields from the table: "cuisine" */
  cuisine_aggregate: Cuisine_Aggregate;
  /** fetch data from the table: "cuisine" using primary key columns */
  cuisine_by_pk?: Maybe<Cuisine>;
  /** fetch data from the table: "favorite_item_entity" */
  favorite_item_entity: Array<Favorite_Item_Entity>;
  /** fetch aggregated fields from the table: "favorite_item_entity" */
  favorite_item_entity_aggregate: Favorite_Item_Entity_Aggregate;
  /** fetch data from the table: "favorite_item_entity" using primary key columns */
  favorite_item_entity_by_pk?: Maybe<Favorite_Item_Entity>;
  /** fetch data from the table: "food_item" */
  food_item: Array<Food_Item>;
  /** fetch aggregated fields from the table: "food_item" */
  food_item_aggregate: Food_Item_Aggregate;
  /** fetch data from the table: "food_item" using primary key columns */
  food_item_by_pk?: Maybe<Food_Item>;
  /** fetch data from the table: "food_item_media" */
  food_item_media: Array<Food_Item_Media>;
  /** fetch aggregated fields from the table: "food_item_media" */
  food_item_media_aggregate: Food_Item_Media_Aggregate;
  /** fetch data from the table: "food_item_media" using primary key columns */
  food_item_media_by_pk?: Maybe<Food_Item_Media>;
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "game_choice" */
  game_choice: Array<Game_Choice>;
  /** fetch aggregated fields from the table: "game_choice" */
  game_choice_aggregate: Game_Choice_Aggregate;
  /** fetch data from the table: "game_choice" using primary key columns */
  game_choice_by_pk?: Maybe<Game_Choice>;
  /** fetch data from the table: "game_cuisine" */
  game_cuisine: Array<Game_Cuisine>;
  /** fetch aggregated fields from the table: "game_cuisine" */
  game_cuisine_aggregate: Game_Cuisine_Aggregate;
  /** fetch data from the table: "game_cuisine" using primary key columns */
  game_cuisine_by_pk?: Maybe<Game_Cuisine>;
  /** fetch data from the table: "game_player" */
  game_player: Array<Game_Player>;
  /** fetch aggregated fields from the table: "game_player" */
  game_player_aggregate: Game_Player_Aggregate;
  /** fetch data from the table: "game_player" using primary key columns */
  game_player_by_pk?: Maybe<Game_Player>;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table: "media_author" */
  media_author: Array<Media_Author>;
  /** fetch aggregated fields from the table: "media_author" */
  media_author_aggregate: Media_Author_Aggregate;
  /** fetch data from the table: "media_author" using primary key columns */
  media_author_by_pk?: Maybe<Media_Author>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table: "menu_section" */
  menu_section: Array<Menu_Section>;
  /** fetch aggregated fields from the table: "menu_section" */
  menu_section_aggregate: Menu_Section_Aggregate;
  /** fetch data from the table: "menu_section" using primary key columns */
  menu_section_by_pk?: Maybe<Menu_Section>;
  /** fetch data from the table: "metric" */
  metric: Array<Metric>;
  /** fetch aggregated fields from the table: "metric" */
  metric_aggregate: Metric_Aggregate;
  /** fetch data from the table: "metric" using primary key columns */
  metric_by_pk?: Maybe<Metric>;
  /** fetch data from the table: "restaurant" */
  restaurant: Array<Restaurant>;
  /** fetch aggregated fields from the table: "restaurant" */
  restaurant_aggregate: Restaurant_Aggregate;
  /** fetch data from the table: "restaurant" using primary key columns */
  restaurant_by_pk?: Maybe<Restaurant>;
  /** fetch data from the table: "restaurant_chain" */
  restaurant_chain: Array<Restaurant_Chain>;
  /** fetch aggregated fields from the table: "restaurant_chain" */
  restaurant_chain_aggregate: Restaurant_Chain_Aggregate;
  /** fetch data from the table: "restaurant_chain" using primary key columns */
  restaurant_chain_by_pk?: Maybe<Restaurant_Chain>;
  /** fetch data from the table: "restaurant_cuisine" */
  restaurant_cuisine: Array<Restaurant_Cuisine>;
  /** fetch aggregated fields from the table: "restaurant_cuisine" */
  restaurant_cuisine_aggregate: Restaurant_Cuisine_Aggregate;
  /** fetch data from the table: "restaurant_cuisine" using primary key columns */
  restaurant_cuisine_by_pk?: Maybe<Restaurant_Cuisine>;
  /** fetch data from the table: "restaurant_item" */
  restaurant_item: Array<Restaurant_Item>;
  /** fetch aggregated fields from the table: "restaurant_item" */
  restaurant_item_aggregate: Restaurant_Item_Aggregate;
  /** fetch data from the table: "restaurant_item" using primary key columns */
  restaurant_item_by_pk?: Maybe<Restaurant_Item>;
  /** fetch data from the table: "restaurants_visited_entity" */
  restaurants_visited_entity: Array<Restaurants_Visited_Entity>;
  /** fetch aggregated fields from the table: "restaurants_visited_entity" */
  restaurants_visited_entity_aggregate: Restaurants_Visited_Entity_Aggregate;
  /** fetch data from the table: "restaurants_visited_entity" using primary key columns */
  restaurants_visited_entity_by_pk?: Maybe<Restaurants_Visited_Entity>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_device" */
  user_device: Array<User_Device>;
  /** fetch aggregated fields from the table: "user_device" */
  user_device_aggregate: User_Device_Aggregate;
  /** fetch data from the table: "user_device" using primary key columns */
  user_device_by_pk?: Maybe<User_Device>;
};


/** query root */
export type Query_RootAuthenticatedArgs = {
  distinct_on?: Maybe<Array<Authenticated_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Authenticated_Order_By>>;
  where?: Maybe<Authenticated_Bool_Exp>;
};


/** query root */
export type Query_RootAuthenticated_AggregateArgs = {
  distinct_on?: Maybe<Array<Authenticated_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Authenticated_Order_By>>;
  where?: Maybe<Authenticated_Bool_Exp>;
};


/** query root */
export type Query_RootAuthenticated_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootContactArgs = {
  distinct_on?: Maybe<Array<Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Order_By>>;
  where?: Maybe<Contact_Bool_Exp>;
};


/** query root */
export type Query_RootContact_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Order_By>>;
  where?: Maybe<Contact_Bool_Exp>;
};


/** query root */
export type Query_RootContact_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCuisineArgs = {
  distinct_on?: Maybe<Array<Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cuisine_Order_By>>;
  where?: Maybe<Cuisine_Bool_Exp>;
};


/** query root */
export type Query_RootCuisine_AggregateArgs = {
  distinct_on?: Maybe<Array<Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cuisine_Order_By>>;
  where?: Maybe<Cuisine_Bool_Exp>;
};


/** query root */
export type Query_RootCuisine_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootFavorite_Item_EntityArgs = {
  distinct_on?: Maybe<Array<Favorite_Item_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorite_Item_Entity_Order_By>>;
  where?: Maybe<Favorite_Item_Entity_Bool_Exp>;
};


/** query root */
export type Query_RootFavorite_Item_Entity_AggregateArgs = {
  distinct_on?: Maybe<Array<Favorite_Item_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorite_Item_Entity_Order_By>>;
  where?: Maybe<Favorite_Item_Entity_Bool_Exp>;
};


/** query root */
export type Query_RootFavorite_Item_Entity_By_PkArgs = {
  foodItemId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** query root */
export type Query_RootFood_ItemArgs = {
  distinct_on?: Maybe<Array<Food_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Order_By>>;
  where?: Maybe<Food_Item_Bool_Exp>;
};


/** query root */
export type Query_RootFood_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Order_By>>;
  where?: Maybe<Food_Item_Bool_Exp>;
};


/** query root */
export type Query_RootFood_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootFood_Item_MediaArgs = {
  distinct_on?: Maybe<Array<Food_Item_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Media_Order_By>>;
  where?: Maybe<Food_Item_Media_Bool_Exp>;
};


/** query root */
export type Query_RootFood_Item_Media_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Item_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Media_Order_By>>;
  where?: Maybe<Food_Item_Media_Bool_Exp>;
};


/** query root */
export type Query_RootFood_Item_Media_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootGameArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** query root */
export type Query_RootGame_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** query root */
export type Query_RootGame_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootGame_ChoiceArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};


/** query root */
export type Query_RootGame_Choice_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};


/** query root */
export type Query_RootGame_Choice_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootGame_CuisineArgs = {
  distinct_on?: Maybe<Array<Game_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Cuisine_Order_By>>;
  where?: Maybe<Game_Cuisine_Bool_Exp>;
};


/** query root */
export type Query_RootGame_Cuisine_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Cuisine_Order_By>>;
  where?: Maybe<Game_Cuisine_Bool_Exp>;
};


/** query root */
export type Query_RootGame_Cuisine_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootGame_PlayerArgs = {
  distinct_on?: Maybe<Array<Game_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Player_Order_By>>;
  where?: Maybe<Game_Player_Bool_Exp>;
};


/** query root */
export type Query_RootGame_Player_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Player_Order_By>>;
  where?: Maybe<Game_Player_Bool_Exp>;
};


/** query root */
export type Query_RootGame_Player_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootLogArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};


/** query root */
export type Query_RootLog_AggregateArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};


/** query root */
export type Query_RootLog_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMedia_AuthorArgs = {
  distinct_on?: Maybe<Array<Media_Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Media_Author_Order_By>>;
  where?: Maybe<Media_Author_Bool_Exp>;
};


/** query root */
export type Query_RootMedia_Author_AggregateArgs = {
  distinct_on?: Maybe<Array<Media_Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Media_Author_Order_By>>;
  where?: Maybe<Media_Author_Bool_Exp>;
};


/** query root */
export type Query_RootMedia_Author_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMenuArgs = {
  distinct_on?: Maybe<Array<Menu_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Menu_Order_By>>;
  where?: Maybe<Menu_Bool_Exp>;
};


/** query root */
export type Query_RootMenu_AggregateArgs = {
  distinct_on?: Maybe<Array<Menu_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Menu_Order_By>>;
  where?: Maybe<Menu_Bool_Exp>;
};


/** query root */
export type Query_RootMenu_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMenu_SectionArgs = {
  distinct_on?: Maybe<Array<Menu_Section_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Menu_Section_Order_By>>;
  where?: Maybe<Menu_Section_Bool_Exp>;
};


/** query root */
export type Query_RootMenu_Section_AggregateArgs = {
  distinct_on?: Maybe<Array<Menu_Section_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Menu_Section_Order_By>>;
  where?: Maybe<Menu_Section_Bool_Exp>;
};


/** query root */
export type Query_RootMenu_Section_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootMetricArgs = {
  distinct_on?: Maybe<Array<Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Order_By>>;
  where?: Maybe<Metric_Bool_Exp>;
};


/** query root */
export type Query_RootMetric_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Order_By>>;
  where?: Maybe<Metric_Bool_Exp>;
};


/** query root */
export type Query_RootMetric_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRestaurantArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Order_By>>;
  where?: Maybe<Restaurant_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurant_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Order_By>>;
  where?: Maybe<Restaurant_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurant_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRestaurant_ChainArgs = {
  distinct_on?: Maybe<Array<Restaurant_Chain_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Chain_Order_By>>;
  where?: Maybe<Restaurant_Chain_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurant_Chain_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Chain_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Chain_Order_By>>;
  where?: Maybe<Restaurant_Chain_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurant_Chain_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRestaurant_CuisineArgs = {
  distinct_on?: Maybe<Array<Restaurant_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Cuisine_Order_By>>;
  where?: Maybe<Restaurant_Cuisine_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurant_Cuisine_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Cuisine_Order_By>>;
  where?: Maybe<Restaurant_Cuisine_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurant_Cuisine_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRestaurant_ItemArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurant_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurant_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRestaurants_Visited_EntityArgs = {
  distinct_on?: Maybe<Array<Restaurants_Visited_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurants_Visited_Entity_Order_By>>;
  where?: Maybe<Restaurants_Visited_Entity_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurants_Visited_Entity_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurants_Visited_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurants_Visited_Entity_Order_By>>;
  where?: Maybe<Restaurants_Visited_Entity_Bool_Exp>;
};


/** query root */
export type Query_RootRestaurants_Visited_Entity_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUser_DeviceArgs = {
  distinct_on?: Maybe<Array<User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Device_Order_By>>;
  where?: Maybe<User_Device_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Device_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Device_Order_By>>;
  where?: Maybe<User_Device_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Device_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "restaurant" */
export type Restaurant = {
  __typename?: 'restaurant';
  chain_id: Scalars['Int'];
  city: Scalars['String'];
  /** An array relationship */
  game_choices: Array<Game_Choice>;
  /** An aggregated array relationship */
  game_choices_aggregate: Game_Choice_Aggregate;
  /** An array relationship */
  games: Array<Game>;
  /** An aggregated array relationship */
  games_aggregate: Game_Aggregate;
  id: Scalars['Int'];
  is_game_ready: Scalars['Boolean'];
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name: Scalars['String'];
  place_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  /** An object relationship */
  restaurant_chain: Restaurant_Chain;
  /** An array relationship */
  restaurant_cuisines: Array<Restaurant_Cuisine>;
  /** An aggregated array relationship */
  restaurant_cuisines_aggregate: Restaurant_Cuisine_Aggregate;
  /** An array relationship */
  restaurant_items: Array<Restaurant_Item>;
  /** An aggregated array relationship */
  restaurant_items_aggregate: Restaurant_Item_Aggregate;
  /** An object relationship */
  restaurants_visited_entity?: Maybe<Restaurants_Visited_Entity>;
  state: Scalars['String'];
  street_address: Scalars['String'];
  takeout_url: Scalars['String'];
  zip_code: Scalars['String'];
};


/** columns and relationships of "restaurant" */
export type RestaurantGame_ChoicesArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};


/** columns and relationships of "restaurant" */
export type RestaurantGame_Choices_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};


/** columns and relationships of "restaurant" */
export type RestaurantGamesArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** columns and relationships of "restaurant" */
export type RestaurantGames_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** columns and relationships of "restaurant" */
export type RestaurantRestaurant_CuisinesArgs = {
  distinct_on?: Maybe<Array<Restaurant_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Cuisine_Order_By>>;
  where?: Maybe<Restaurant_Cuisine_Bool_Exp>;
};


/** columns and relationships of "restaurant" */
export type RestaurantRestaurant_Cuisines_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Cuisine_Order_By>>;
  where?: Maybe<Restaurant_Cuisine_Bool_Exp>;
};


/** columns and relationships of "restaurant" */
export type RestaurantRestaurant_ItemsArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};


/** columns and relationships of "restaurant" */
export type RestaurantRestaurant_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};

/** aggregated selection of "restaurant" */
export type Restaurant_Aggregate = {
  __typename?: 'restaurant_aggregate';
  aggregate?: Maybe<Restaurant_Aggregate_Fields>;
  nodes: Array<Restaurant>;
};

/** aggregate fields of "restaurant" */
export type Restaurant_Aggregate_Fields = {
  __typename?: 'restaurant_aggregate_fields';
  avg?: Maybe<Restaurant_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Restaurant_Max_Fields>;
  min?: Maybe<Restaurant_Min_Fields>;
  stddev?: Maybe<Restaurant_Stddev_Fields>;
  stddev_pop?: Maybe<Restaurant_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Restaurant_Stddev_Samp_Fields>;
  sum?: Maybe<Restaurant_Sum_Fields>;
  var_pop?: Maybe<Restaurant_Var_Pop_Fields>;
  var_samp?: Maybe<Restaurant_Var_Samp_Fields>;
  variance?: Maybe<Restaurant_Variance_Fields>;
};


/** aggregate fields of "restaurant" */
export type Restaurant_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Restaurant_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "restaurant" */
export type Restaurant_Aggregate_Order_By = {
  avg?: Maybe<Restaurant_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Restaurant_Max_Order_By>;
  min?: Maybe<Restaurant_Min_Order_By>;
  stddev?: Maybe<Restaurant_Stddev_Order_By>;
  stddev_pop?: Maybe<Restaurant_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Restaurant_Stddev_Samp_Order_By>;
  sum?: Maybe<Restaurant_Sum_Order_By>;
  var_pop?: Maybe<Restaurant_Var_Pop_Order_By>;
  var_samp?: Maybe<Restaurant_Var_Samp_Order_By>;
  variance?: Maybe<Restaurant_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "restaurant" */
export type Restaurant_Arr_Rel_Insert_Input = {
  data: Array<Restaurant_Insert_Input>;
  on_conflict?: Maybe<Restaurant_On_Conflict>;
};

/** aggregate avg on columns */
export type Restaurant_Avg_Fields = {
  __typename?: 'restaurant_avg_fields';
  chain_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "restaurant" */
export type Restaurant_Avg_Order_By = {
  chain_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "restaurant". All fields are combined with a logical 'AND'. */
export type Restaurant_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Restaurant_Bool_Exp>>>;
  _not?: Maybe<Restaurant_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Restaurant_Bool_Exp>>>;
  chain_id?: Maybe<Int_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  game_choices?: Maybe<Game_Choice_Bool_Exp>;
  games?: Maybe<Game_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_game_ready?: Maybe<Boolean_Comparison_Exp>;
  latitude?: Maybe<Float8_Comparison_Exp>;
  longitude?: Maybe<Float8_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  place_id?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Int_Comparison_Exp>;
  restaurant_chain?: Maybe<Restaurant_Chain_Bool_Exp>;
  restaurant_cuisines?: Maybe<Restaurant_Cuisine_Bool_Exp>;
  restaurant_items?: Maybe<Restaurant_Item_Bool_Exp>;
  restaurants_visited_entity?: Maybe<Restaurants_Visited_Entity_Bool_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  street_address?: Maybe<String_Comparison_Exp>;
  takeout_url?: Maybe<String_Comparison_Exp>;
  zip_code?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "restaurant_chain" */
export type Restaurant_Chain = {
  __typename?: 'restaurant_chain';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  restaurants: Array<Restaurant>;
  /** An aggregated array relationship */
  restaurants_aggregate: Restaurant_Aggregate;
};


/** columns and relationships of "restaurant_chain" */
export type Restaurant_ChainRestaurantsArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Order_By>>;
  where?: Maybe<Restaurant_Bool_Exp>;
};


/** columns and relationships of "restaurant_chain" */
export type Restaurant_ChainRestaurants_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Order_By>>;
  where?: Maybe<Restaurant_Bool_Exp>;
};

/** aggregated selection of "restaurant_chain" */
export type Restaurant_Chain_Aggregate = {
  __typename?: 'restaurant_chain_aggregate';
  aggregate?: Maybe<Restaurant_Chain_Aggregate_Fields>;
  nodes: Array<Restaurant_Chain>;
};

/** aggregate fields of "restaurant_chain" */
export type Restaurant_Chain_Aggregate_Fields = {
  __typename?: 'restaurant_chain_aggregate_fields';
  avg?: Maybe<Restaurant_Chain_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Restaurant_Chain_Max_Fields>;
  min?: Maybe<Restaurant_Chain_Min_Fields>;
  stddev?: Maybe<Restaurant_Chain_Stddev_Fields>;
  stddev_pop?: Maybe<Restaurant_Chain_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Restaurant_Chain_Stddev_Samp_Fields>;
  sum?: Maybe<Restaurant_Chain_Sum_Fields>;
  var_pop?: Maybe<Restaurant_Chain_Var_Pop_Fields>;
  var_samp?: Maybe<Restaurant_Chain_Var_Samp_Fields>;
  variance?: Maybe<Restaurant_Chain_Variance_Fields>;
};


/** aggregate fields of "restaurant_chain" */
export type Restaurant_Chain_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Restaurant_Chain_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "restaurant_chain" */
export type Restaurant_Chain_Aggregate_Order_By = {
  avg?: Maybe<Restaurant_Chain_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Restaurant_Chain_Max_Order_By>;
  min?: Maybe<Restaurant_Chain_Min_Order_By>;
  stddev?: Maybe<Restaurant_Chain_Stddev_Order_By>;
  stddev_pop?: Maybe<Restaurant_Chain_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Restaurant_Chain_Stddev_Samp_Order_By>;
  sum?: Maybe<Restaurant_Chain_Sum_Order_By>;
  var_pop?: Maybe<Restaurant_Chain_Var_Pop_Order_By>;
  var_samp?: Maybe<Restaurant_Chain_Var_Samp_Order_By>;
  variance?: Maybe<Restaurant_Chain_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "restaurant_chain" */
export type Restaurant_Chain_Arr_Rel_Insert_Input = {
  data: Array<Restaurant_Chain_Insert_Input>;
  on_conflict?: Maybe<Restaurant_Chain_On_Conflict>;
};

/** aggregate avg on columns */
export type Restaurant_Chain_Avg_Fields = {
  __typename?: 'restaurant_chain_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "restaurant_chain" */
export type Restaurant_Chain_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "restaurant_chain". All fields are combined with a logical 'AND'. */
export type Restaurant_Chain_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Restaurant_Chain_Bool_Exp>>>;
  _not?: Maybe<Restaurant_Chain_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Restaurant_Chain_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  restaurants?: Maybe<Restaurant_Bool_Exp>;
};

/** unique or primary key constraints on table "restaurant_chain" */
export enum Restaurant_Chain_Constraint {
  /** unique or primary key constraint */
  PkD2a509385c30a3ea44dc032009e = 'PK_d2a509385c30a3ea44dc032009e'
}

/** input type for incrementing integer column in table "restaurant_chain" */
export type Restaurant_Chain_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "restaurant_chain" */
export type Restaurant_Chain_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  restaurants?: Maybe<Restaurant_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Restaurant_Chain_Max_Fields = {
  __typename?: 'restaurant_chain_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "restaurant_chain" */
export type Restaurant_Chain_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Restaurant_Chain_Min_Fields = {
  __typename?: 'restaurant_chain_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "restaurant_chain" */
export type Restaurant_Chain_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "restaurant_chain" */
export type Restaurant_Chain_Mutation_Response = {
  __typename?: 'restaurant_chain_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Restaurant_Chain>;
};

/** input type for inserting object relation for remote table "restaurant_chain" */
export type Restaurant_Chain_Obj_Rel_Insert_Input = {
  data: Restaurant_Chain_Insert_Input;
  on_conflict?: Maybe<Restaurant_Chain_On_Conflict>;
};

/** on conflict condition type for table "restaurant_chain" */
export type Restaurant_Chain_On_Conflict = {
  constraint: Restaurant_Chain_Constraint;
  update_columns: Array<Restaurant_Chain_Update_Column>;
  where?: Maybe<Restaurant_Chain_Bool_Exp>;
};

/** ordering options when selecting data from "restaurant_chain" */
export type Restaurant_Chain_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  restaurants_aggregate?: Maybe<Restaurant_Aggregate_Order_By>;
};

/** primary key columns input for table: "restaurant_chain" */
export type Restaurant_Chain_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "restaurant_chain" */
export enum Restaurant_Chain_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "restaurant_chain" */
export type Restaurant_Chain_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Restaurant_Chain_Stddev_Fields = {
  __typename?: 'restaurant_chain_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "restaurant_chain" */
export type Restaurant_Chain_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Restaurant_Chain_Stddev_Pop_Fields = {
  __typename?: 'restaurant_chain_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "restaurant_chain" */
export type Restaurant_Chain_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Restaurant_Chain_Stddev_Samp_Fields = {
  __typename?: 'restaurant_chain_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "restaurant_chain" */
export type Restaurant_Chain_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Restaurant_Chain_Sum_Fields = {
  __typename?: 'restaurant_chain_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "restaurant_chain" */
export type Restaurant_Chain_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "restaurant_chain" */
export enum Restaurant_Chain_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Restaurant_Chain_Var_Pop_Fields = {
  __typename?: 'restaurant_chain_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "restaurant_chain" */
export type Restaurant_Chain_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Restaurant_Chain_Var_Samp_Fields = {
  __typename?: 'restaurant_chain_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "restaurant_chain" */
export type Restaurant_Chain_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Restaurant_Chain_Variance_Fields = {
  __typename?: 'restaurant_chain_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "restaurant_chain" */
export type Restaurant_Chain_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** unique or primary key constraints on table "restaurant" */
export enum Restaurant_Constraint {
  /** unique or primary key constraint */
  Pk_649e250d8b8165cb406d99aa30f = 'PK_649e250d8b8165cb406d99aa30f'
}

/** columns and relationships of "restaurant_cuisine" */
export type Restaurant_Cuisine = {
  __typename?: 'restaurant_cuisine';
  /** An object relationship */
  cuisine: Cuisine;
  cuisine_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  restaurant: Restaurant;
  restaurant_id: Scalars['Int'];
};

/** aggregated selection of "restaurant_cuisine" */
export type Restaurant_Cuisine_Aggregate = {
  __typename?: 'restaurant_cuisine_aggregate';
  aggregate?: Maybe<Restaurant_Cuisine_Aggregate_Fields>;
  nodes: Array<Restaurant_Cuisine>;
};

/** aggregate fields of "restaurant_cuisine" */
export type Restaurant_Cuisine_Aggregate_Fields = {
  __typename?: 'restaurant_cuisine_aggregate_fields';
  avg?: Maybe<Restaurant_Cuisine_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Restaurant_Cuisine_Max_Fields>;
  min?: Maybe<Restaurant_Cuisine_Min_Fields>;
  stddev?: Maybe<Restaurant_Cuisine_Stddev_Fields>;
  stddev_pop?: Maybe<Restaurant_Cuisine_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Restaurant_Cuisine_Stddev_Samp_Fields>;
  sum?: Maybe<Restaurant_Cuisine_Sum_Fields>;
  var_pop?: Maybe<Restaurant_Cuisine_Var_Pop_Fields>;
  var_samp?: Maybe<Restaurant_Cuisine_Var_Samp_Fields>;
  variance?: Maybe<Restaurant_Cuisine_Variance_Fields>;
};


/** aggregate fields of "restaurant_cuisine" */
export type Restaurant_Cuisine_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Restaurant_Cuisine_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "restaurant_cuisine" */
export type Restaurant_Cuisine_Aggregate_Order_By = {
  avg?: Maybe<Restaurant_Cuisine_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Restaurant_Cuisine_Max_Order_By>;
  min?: Maybe<Restaurant_Cuisine_Min_Order_By>;
  stddev?: Maybe<Restaurant_Cuisine_Stddev_Order_By>;
  stddev_pop?: Maybe<Restaurant_Cuisine_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Restaurant_Cuisine_Stddev_Samp_Order_By>;
  sum?: Maybe<Restaurant_Cuisine_Sum_Order_By>;
  var_pop?: Maybe<Restaurant_Cuisine_Var_Pop_Order_By>;
  var_samp?: Maybe<Restaurant_Cuisine_Var_Samp_Order_By>;
  variance?: Maybe<Restaurant_Cuisine_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "restaurant_cuisine" */
export type Restaurant_Cuisine_Arr_Rel_Insert_Input = {
  data: Array<Restaurant_Cuisine_Insert_Input>;
  on_conflict?: Maybe<Restaurant_Cuisine_On_Conflict>;
};

/** aggregate avg on columns */
export type Restaurant_Cuisine_Avg_Fields = {
  __typename?: 'restaurant_cuisine_avg_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "restaurant_cuisine" */
export type Restaurant_Cuisine_Avg_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "restaurant_cuisine". All fields are combined with a logical 'AND'. */
export type Restaurant_Cuisine_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Restaurant_Cuisine_Bool_Exp>>>;
  _not?: Maybe<Restaurant_Cuisine_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Restaurant_Cuisine_Bool_Exp>>>;
  cuisine?: Maybe<Cuisine_Bool_Exp>;
  cuisine_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  restaurant?: Maybe<Restaurant_Bool_Exp>;
  restaurant_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "restaurant_cuisine" */
export enum Restaurant_Cuisine_Constraint {
  /** unique or primary key constraint */
  PkF9eb1abeb371c2225460d6cafad = 'PK_f9eb1abeb371c2225460d6cafad'
}

/** input type for incrementing integer column in table "restaurant_cuisine" */
export type Restaurant_Cuisine_Inc_Input = {
  cuisine_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "restaurant_cuisine" */
export type Restaurant_Cuisine_Insert_Input = {
  cuisine?: Maybe<Cuisine_Obj_Rel_Insert_Input>;
  cuisine_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  restaurant?: Maybe<Restaurant_Obj_Rel_Insert_Input>;
  restaurant_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Restaurant_Cuisine_Max_Fields = {
  __typename?: 'restaurant_cuisine_max_fields';
  cuisine_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "restaurant_cuisine" */
export type Restaurant_Cuisine_Max_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Restaurant_Cuisine_Min_Fields = {
  __typename?: 'restaurant_cuisine_min_fields';
  cuisine_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "restaurant_cuisine" */
export type Restaurant_Cuisine_Min_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "restaurant_cuisine" */
export type Restaurant_Cuisine_Mutation_Response = {
  __typename?: 'restaurant_cuisine_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Restaurant_Cuisine>;
};

/** input type for inserting object relation for remote table "restaurant_cuisine" */
export type Restaurant_Cuisine_Obj_Rel_Insert_Input = {
  data: Restaurant_Cuisine_Insert_Input;
  on_conflict?: Maybe<Restaurant_Cuisine_On_Conflict>;
};

/** on conflict condition type for table "restaurant_cuisine" */
export type Restaurant_Cuisine_On_Conflict = {
  constraint: Restaurant_Cuisine_Constraint;
  update_columns: Array<Restaurant_Cuisine_Update_Column>;
  where?: Maybe<Restaurant_Cuisine_Bool_Exp>;
};

/** ordering options when selecting data from "restaurant_cuisine" */
export type Restaurant_Cuisine_Order_By = {
  cuisine?: Maybe<Cuisine_Order_By>;
  cuisine_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  restaurant?: Maybe<Restaurant_Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "restaurant_cuisine" */
export type Restaurant_Cuisine_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "restaurant_cuisine" */
export enum Restaurant_Cuisine_Select_Column {
  /** column name */
  CuisineId = 'cuisine_id',
  /** column name */
  Id = 'id',
  /** column name */
  RestaurantId = 'restaurant_id'
}

/** input type for updating data in table "restaurant_cuisine" */
export type Restaurant_Cuisine_Set_Input = {
  cuisine_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Restaurant_Cuisine_Stddev_Fields = {
  __typename?: 'restaurant_cuisine_stddev_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "restaurant_cuisine" */
export type Restaurant_Cuisine_Stddev_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Restaurant_Cuisine_Stddev_Pop_Fields = {
  __typename?: 'restaurant_cuisine_stddev_pop_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "restaurant_cuisine" */
export type Restaurant_Cuisine_Stddev_Pop_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Restaurant_Cuisine_Stddev_Samp_Fields = {
  __typename?: 'restaurant_cuisine_stddev_samp_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "restaurant_cuisine" */
export type Restaurant_Cuisine_Stddev_Samp_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Restaurant_Cuisine_Sum_Fields = {
  __typename?: 'restaurant_cuisine_sum_fields';
  cuisine_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "restaurant_cuisine" */
export type Restaurant_Cuisine_Sum_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** update columns of table "restaurant_cuisine" */
export enum Restaurant_Cuisine_Update_Column {
  /** column name */
  CuisineId = 'cuisine_id',
  /** column name */
  Id = 'id',
  /** column name */
  RestaurantId = 'restaurant_id'
}

/** aggregate var_pop on columns */
export type Restaurant_Cuisine_Var_Pop_Fields = {
  __typename?: 'restaurant_cuisine_var_pop_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "restaurant_cuisine" */
export type Restaurant_Cuisine_Var_Pop_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Restaurant_Cuisine_Var_Samp_Fields = {
  __typename?: 'restaurant_cuisine_var_samp_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "restaurant_cuisine" */
export type Restaurant_Cuisine_Var_Samp_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Restaurant_Cuisine_Variance_Fields = {
  __typename?: 'restaurant_cuisine_variance_fields';
  cuisine_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "restaurant_cuisine" */
export type Restaurant_Cuisine_Variance_Order_By = {
  cuisine_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "restaurant" */
export type Restaurant_Inc_Input = {
  chain_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  price?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "restaurant" */
export type Restaurant_Insert_Input = {
  chain_id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  game_choices?: Maybe<Game_Choice_Arr_Rel_Insert_Input>;
  games?: Maybe<Game_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  is_game_ready?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  place_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  restaurant_chain?: Maybe<Restaurant_Chain_Obj_Rel_Insert_Input>;
  restaurant_cuisines?: Maybe<Restaurant_Cuisine_Arr_Rel_Insert_Input>;
  restaurant_items?: Maybe<Restaurant_Item_Arr_Rel_Insert_Input>;
  restaurants_visited_entity?: Maybe<Restaurants_Visited_Entity_Obj_Rel_Insert_Input>;
  state?: Maybe<Scalars['String']>;
  street_address?: Maybe<Scalars['String']>;
  takeout_url?: Maybe<Scalars['String']>;
  zip_code?: Maybe<Scalars['String']>;
};

/** columns and relationships of "restaurant_item" */
export type Restaurant_Item = {
  __typename?: 'restaurant_item';
  /** An object relationship */
  food_item: Food_Item;
  food_item_id: Scalars['Int'];
  /** An array relationship */
  game_choices: Array<Game_Choice>;
  /** An aggregated array relationship */
  game_choices_aggregate: Game_Choice_Aggregate;
  id: Scalars['Int'];
  is_game_ready: Scalars['Boolean'];
  /** An object relationship */
  menu: Menu;
  menu_id: Scalars['Int'];
  /** An object relationship */
  menu_section: Menu_Section;
  menu_section_id: Scalars['Int'];
  price?: Maybe<Scalars['float8']>;
  /** An object relationship */
  restaurant: Restaurant;
  restaurant_id: Scalars['Int'];
  times_served: Scalars['_varchar'];
};


/** columns and relationships of "restaurant_item" */
export type Restaurant_ItemGame_ChoicesArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};


/** columns and relationships of "restaurant_item" */
export type Restaurant_ItemGame_Choices_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};

/** aggregated selection of "restaurant_item" */
export type Restaurant_Item_Aggregate = {
  __typename?: 'restaurant_item_aggregate';
  aggregate?: Maybe<Restaurant_Item_Aggregate_Fields>;
  nodes: Array<Restaurant_Item>;
};

/** aggregate fields of "restaurant_item" */
export type Restaurant_Item_Aggregate_Fields = {
  __typename?: 'restaurant_item_aggregate_fields';
  avg?: Maybe<Restaurant_Item_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Restaurant_Item_Max_Fields>;
  min?: Maybe<Restaurant_Item_Min_Fields>;
  stddev?: Maybe<Restaurant_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Restaurant_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Restaurant_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Restaurant_Item_Sum_Fields>;
  var_pop?: Maybe<Restaurant_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Restaurant_Item_Var_Samp_Fields>;
  variance?: Maybe<Restaurant_Item_Variance_Fields>;
};


/** aggregate fields of "restaurant_item" */
export type Restaurant_Item_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Restaurant_Item_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "restaurant_item" */
export type Restaurant_Item_Aggregate_Order_By = {
  avg?: Maybe<Restaurant_Item_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Restaurant_Item_Max_Order_By>;
  min?: Maybe<Restaurant_Item_Min_Order_By>;
  stddev?: Maybe<Restaurant_Item_Stddev_Order_By>;
  stddev_pop?: Maybe<Restaurant_Item_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Restaurant_Item_Stddev_Samp_Order_By>;
  sum?: Maybe<Restaurant_Item_Sum_Order_By>;
  var_pop?: Maybe<Restaurant_Item_Var_Pop_Order_By>;
  var_samp?: Maybe<Restaurant_Item_Var_Samp_Order_By>;
  variance?: Maybe<Restaurant_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "restaurant_item" */
export type Restaurant_Item_Arr_Rel_Insert_Input = {
  data: Array<Restaurant_Item_Insert_Input>;
  on_conflict?: Maybe<Restaurant_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Restaurant_Item_Avg_Fields = {
  __typename?: 'restaurant_item_avg_fields';
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  menu_id?: Maybe<Scalars['Float']>;
  menu_section_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "restaurant_item" */
export type Restaurant_Item_Avg_Order_By = {
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  menu_id?: Maybe<Order_By>;
  menu_section_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "restaurant_item". All fields are combined with a logical 'AND'. */
export type Restaurant_Item_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Restaurant_Item_Bool_Exp>>>;
  _not?: Maybe<Restaurant_Item_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Restaurant_Item_Bool_Exp>>>;
  food_item?: Maybe<Food_Item_Bool_Exp>;
  food_item_id?: Maybe<Int_Comparison_Exp>;
  game_choices?: Maybe<Game_Choice_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_game_ready?: Maybe<Boolean_Comparison_Exp>;
  menu?: Maybe<Menu_Bool_Exp>;
  menu_id?: Maybe<Int_Comparison_Exp>;
  menu_section?: Maybe<Menu_Section_Bool_Exp>;
  menu_section_id?: Maybe<Int_Comparison_Exp>;
  price?: Maybe<Float8_Comparison_Exp>;
  restaurant?: Maybe<Restaurant_Bool_Exp>;
  restaurant_id?: Maybe<Int_Comparison_Exp>;
  times_served?: Maybe<_Varchar_Comparison_Exp>;
};

/** unique or primary key constraints on table "restaurant_item" */
export enum Restaurant_Item_Constraint {
  /** unique or primary key constraint */
  Pk_325a79252195bbf38d80dd9e0d6 = 'PK_325a79252195bbf38d80dd9e0d6'
}

/** input type for incrementing integer column in table "restaurant_item" */
export type Restaurant_Item_Inc_Input = {
  food_item_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  menu_id?: Maybe<Scalars['Int']>;
  menu_section_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  restaurant_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "restaurant_item" */
export type Restaurant_Item_Insert_Input = {
  food_item?: Maybe<Food_Item_Obj_Rel_Insert_Input>;
  food_item_id?: Maybe<Scalars['Int']>;
  game_choices?: Maybe<Game_Choice_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  is_game_ready?: Maybe<Scalars['Boolean']>;
  menu?: Maybe<Menu_Obj_Rel_Insert_Input>;
  menu_id?: Maybe<Scalars['Int']>;
  menu_section?: Maybe<Menu_Section_Obj_Rel_Insert_Input>;
  menu_section_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  restaurant?: Maybe<Restaurant_Obj_Rel_Insert_Input>;
  restaurant_id?: Maybe<Scalars['Int']>;
  times_served?: Maybe<Scalars['_varchar']>;
};

/** aggregate max on columns */
export type Restaurant_Item_Max_Fields = {
  __typename?: 'restaurant_item_max_fields';
  food_item_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  menu_id?: Maybe<Scalars['Int']>;
  menu_section_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  restaurant_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "restaurant_item" */
export type Restaurant_Item_Max_Order_By = {
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  menu_id?: Maybe<Order_By>;
  menu_section_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Restaurant_Item_Min_Fields = {
  __typename?: 'restaurant_item_min_fields';
  food_item_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  menu_id?: Maybe<Scalars['Int']>;
  menu_section_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  restaurant_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "restaurant_item" */
export type Restaurant_Item_Min_Order_By = {
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  menu_id?: Maybe<Order_By>;
  menu_section_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "restaurant_item" */
export type Restaurant_Item_Mutation_Response = {
  __typename?: 'restaurant_item_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Restaurant_Item>;
};

/** input type for inserting object relation for remote table "restaurant_item" */
export type Restaurant_Item_Obj_Rel_Insert_Input = {
  data: Restaurant_Item_Insert_Input;
  on_conflict?: Maybe<Restaurant_Item_On_Conflict>;
};

/** on conflict condition type for table "restaurant_item" */
export type Restaurant_Item_On_Conflict = {
  constraint: Restaurant_Item_Constraint;
  update_columns: Array<Restaurant_Item_Update_Column>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};

/** ordering options when selecting data from "restaurant_item" */
export type Restaurant_Item_Order_By = {
  food_item?: Maybe<Food_Item_Order_By>;
  food_item_id?: Maybe<Order_By>;
  game_choices_aggregate?: Maybe<Game_Choice_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  is_game_ready?: Maybe<Order_By>;
  menu?: Maybe<Menu_Order_By>;
  menu_id?: Maybe<Order_By>;
  menu_section?: Maybe<Menu_Section_Order_By>;
  menu_section_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant?: Maybe<Restaurant_Order_By>;
  restaurant_id?: Maybe<Order_By>;
  times_served?: Maybe<Order_By>;
};

/** primary key columns input for table: "restaurant_item" */
export type Restaurant_Item_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "restaurant_item" */
export enum Restaurant_Item_Select_Column {
  /** column name */
  FoodItemId = 'food_item_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsGameReady = 'is_game_ready',
  /** column name */
  MenuId = 'menu_id',
  /** column name */
  MenuSectionId = 'menu_section_id',
  /** column name */
  Price = 'price',
  /** column name */
  RestaurantId = 'restaurant_id',
  /** column name */
  TimesServed = 'times_served'
}

/** input type for updating data in table "restaurant_item" */
export type Restaurant_Item_Set_Input = {
  food_item_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_game_ready?: Maybe<Scalars['Boolean']>;
  menu_id?: Maybe<Scalars['Int']>;
  menu_section_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  restaurant_id?: Maybe<Scalars['Int']>;
  times_served?: Maybe<Scalars['_varchar']>;
};

/** aggregate stddev on columns */
export type Restaurant_Item_Stddev_Fields = {
  __typename?: 'restaurant_item_stddev_fields';
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  menu_id?: Maybe<Scalars['Float']>;
  menu_section_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "restaurant_item" */
export type Restaurant_Item_Stddev_Order_By = {
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  menu_id?: Maybe<Order_By>;
  menu_section_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Restaurant_Item_Stddev_Pop_Fields = {
  __typename?: 'restaurant_item_stddev_pop_fields';
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  menu_id?: Maybe<Scalars['Float']>;
  menu_section_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "restaurant_item" */
export type Restaurant_Item_Stddev_Pop_Order_By = {
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  menu_id?: Maybe<Order_By>;
  menu_section_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Restaurant_Item_Stddev_Samp_Fields = {
  __typename?: 'restaurant_item_stddev_samp_fields';
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  menu_id?: Maybe<Scalars['Float']>;
  menu_section_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "restaurant_item" */
export type Restaurant_Item_Stddev_Samp_Order_By = {
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  menu_id?: Maybe<Order_By>;
  menu_section_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Restaurant_Item_Sum_Fields = {
  __typename?: 'restaurant_item_sum_fields';
  food_item_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  menu_id?: Maybe<Scalars['Int']>;
  menu_section_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  restaurant_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "restaurant_item" */
export type Restaurant_Item_Sum_Order_By = {
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  menu_id?: Maybe<Order_By>;
  menu_section_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** update columns of table "restaurant_item" */
export enum Restaurant_Item_Update_Column {
  /** column name */
  FoodItemId = 'food_item_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsGameReady = 'is_game_ready',
  /** column name */
  MenuId = 'menu_id',
  /** column name */
  MenuSectionId = 'menu_section_id',
  /** column name */
  Price = 'price',
  /** column name */
  RestaurantId = 'restaurant_id',
  /** column name */
  TimesServed = 'times_served'
}

/** aggregate var_pop on columns */
export type Restaurant_Item_Var_Pop_Fields = {
  __typename?: 'restaurant_item_var_pop_fields';
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  menu_id?: Maybe<Scalars['Float']>;
  menu_section_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "restaurant_item" */
export type Restaurant_Item_Var_Pop_Order_By = {
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  menu_id?: Maybe<Order_By>;
  menu_section_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Restaurant_Item_Var_Samp_Fields = {
  __typename?: 'restaurant_item_var_samp_fields';
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  menu_id?: Maybe<Scalars['Float']>;
  menu_section_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "restaurant_item" */
export type Restaurant_Item_Var_Samp_Order_By = {
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  menu_id?: Maybe<Order_By>;
  menu_section_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Restaurant_Item_Variance_Fields = {
  __typename?: 'restaurant_item_variance_fields';
  food_item_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  menu_id?: Maybe<Scalars['Float']>;
  menu_section_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  restaurant_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "restaurant_item" */
export type Restaurant_Item_Variance_Order_By = {
  food_item_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  menu_id?: Maybe<Order_By>;
  menu_section_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant_id?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Restaurant_Max_Fields = {
  __typename?: 'restaurant_max_fields';
  chain_id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  place_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  street_address?: Maybe<Scalars['String']>;
  takeout_url?: Maybe<Scalars['String']>;
  zip_code?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "restaurant" */
export type Restaurant_Max_Order_By = {
  chain_id?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  street_address?: Maybe<Order_By>;
  takeout_url?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Restaurant_Min_Fields = {
  __typename?: 'restaurant_min_fields';
  chain_id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  place_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  street_address?: Maybe<Scalars['String']>;
  takeout_url?: Maybe<Scalars['String']>;
  zip_code?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "restaurant" */
export type Restaurant_Min_Order_By = {
  chain_id?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  street_address?: Maybe<Order_By>;
  takeout_url?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** response of any mutation on the table "restaurant" */
export type Restaurant_Mutation_Response = {
  __typename?: 'restaurant_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Restaurant>;
};

/** input type for inserting object relation for remote table "restaurant" */
export type Restaurant_Obj_Rel_Insert_Input = {
  data: Restaurant_Insert_Input;
  on_conflict?: Maybe<Restaurant_On_Conflict>;
};

/** on conflict condition type for table "restaurant" */
export type Restaurant_On_Conflict = {
  constraint: Restaurant_Constraint;
  update_columns: Array<Restaurant_Update_Column>;
  where?: Maybe<Restaurant_Bool_Exp>;
};

/** ordering options when selecting data from "restaurant" */
export type Restaurant_Order_By = {
  chain_id?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  game_choices_aggregate?: Maybe<Game_Choice_Aggregate_Order_By>;
  games_aggregate?: Maybe<Game_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  is_game_ready?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  restaurant_chain?: Maybe<Restaurant_Chain_Order_By>;
  restaurant_cuisines_aggregate?: Maybe<Restaurant_Cuisine_Aggregate_Order_By>;
  restaurant_items_aggregate?: Maybe<Restaurant_Item_Aggregate_Order_By>;
  restaurants_visited_entity?: Maybe<Restaurants_Visited_Entity_Order_By>;
  state?: Maybe<Order_By>;
  street_address?: Maybe<Order_By>;
  takeout_url?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** primary key columns input for table: "restaurant" */
export type Restaurant_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "restaurant" */
export enum Restaurant_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  City = 'city',
  /** column name */
  Id = 'id',
  /** column name */
  IsGameReady = 'is_game_ready',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  PlaceId = 'place_id',
  /** column name */
  Price = 'price',
  /** column name */
  State = 'state',
  /** column name */
  StreetAddress = 'street_address',
  /** column name */
  TakeoutUrl = 'takeout_url',
  /** column name */
  ZipCode = 'zip_code'
}

/** input type for updating data in table "restaurant" */
export type Restaurant_Set_Input = {
  chain_id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_game_ready?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  place_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  street_address?: Maybe<Scalars['String']>;
  takeout_url?: Maybe<Scalars['String']>;
  zip_code?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Restaurant_Stddev_Fields = {
  __typename?: 'restaurant_stddev_fields';
  chain_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "restaurant" */
export type Restaurant_Stddev_Order_By = {
  chain_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Restaurant_Stddev_Pop_Fields = {
  __typename?: 'restaurant_stddev_pop_fields';
  chain_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "restaurant" */
export type Restaurant_Stddev_Pop_Order_By = {
  chain_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Restaurant_Stddev_Samp_Fields = {
  __typename?: 'restaurant_stddev_samp_fields';
  chain_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "restaurant" */
export type Restaurant_Stddev_Samp_Order_By = {
  chain_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Restaurant_Sum_Fields = {
  __typename?: 'restaurant_sum_fields';
  chain_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "restaurant" */
export type Restaurant_Sum_Order_By = {
  chain_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** update columns of table "restaurant" */
export enum Restaurant_Update_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  City = 'city',
  /** column name */
  Id = 'id',
  /** column name */
  IsGameReady = 'is_game_ready',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  Name = 'name',
  /** column name */
  PlaceId = 'place_id',
  /** column name */
  Price = 'price',
  /** column name */
  State = 'state',
  /** column name */
  StreetAddress = 'street_address',
  /** column name */
  TakeoutUrl = 'takeout_url',
  /** column name */
  ZipCode = 'zip_code'
}

/** aggregate var_pop on columns */
export type Restaurant_Var_Pop_Fields = {
  __typename?: 'restaurant_var_pop_fields';
  chain_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "restaurant" */
export type Restaurant_Var_Pop_Order_By = {
  chain_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Restaurant_Var_Samp_Fields = {
  __typename?: 'restaurant_var_samp_fields';
  chain_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "restaurant" */
export type Restaurant_Var_Samp_Order_By = {
  chain_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Restaurant_Variance_Fields = {
  __typename?: 'restaurant_variance_fields';
  chain_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "restaurant" */
export type Restaurant_Variance_Order_By = {
  chain_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** columns and relationships of "restaurants_visited_entity" */
export type Restaurants_Visited_Entity = {
  __typename?: 'restaurants_visited_entity';
  id: Scalars['Int'];
  numTimesEaten: Scalars['Int'];
  /** An object relationship */
  restaurant?: Maybe<Restaurant>;
  restaurantId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Aggregate = {
  __typename?: 'restaurants_visited_entity_aggregate';
  aggregate?: Maybe<Restaurants_Visited_Entity_Aggregate_Fields>;
  nodes: Array<Restaurants_Visited_Entity>;
};

/** aggregate fields of "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Aggregate_Fields = {
  __typename?: 'restaurants_visited_entity_aggregate_fields';
  avg?: Maybe<Restaurants_Visited_Entity_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Restaurants_Visited_Entity_Max_Fields>;
  min?: Maybe<Restaurants_Visited_Entity_Min_Fields>;
  stddev?: Maybe<Restaurants_Visited_Entity_Stddev_Fields>;
  stddev_pop?: Maybe<Restaurants_Visited_Entity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Restaurants_Visited_Entity_Stddev_Samp_Fields>;
  sum?: Maybe<Restaurants_Visited_Entity_Sum_Fields>;
  var_pop?: Maybe<Restaurants_Visited_Entity_Var_Pop_Fields>;
  var_samp?: Maybe<Restaurants_Visited_Entity_Var_Samp_Fields>;
  variance?: Maybe<Restaurants_Visited_Entity_Variance_Fields>;
};


/** aggregate fields of "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Restaurants_Visited_Entity_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Aggregate_Order_By = {
  avg?: Maybe<Restaurants_Visited_Entity_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Restaurants_Visited_Entity_Max_Order_By>;
  min?: Maybe<Restaurants_Visited_Entity_Min_Order_By>;
  stddev?: Maybe<Restaurants_Visited_Entity_Stddev_Order_By>;
  stddev_pop?: Maybe<Restaurants_Visited_Entity_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Restaurants_Visited_Entity_Stddev_Samp_Order_By>;
  sum?: Maybe<Restaurants_Visited_Entity_Sum_Order_By>;
  var_pop?: Maybe<Restaurants_Visited_Entity_Var_Pop_Order_By>;
  var_samp?: Maybe<Restaurants_Visited_Entity_Var_Samp_Order_By>;
  variance?: Maybe<Restaurants_Visited_Entity_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Arr_Rel_Insert_Input = {
  data: Array<Restaurants_Visited_Entity_Insert_Input>;
  on_conflict?: Maybe<Restaurants_Visited_Entity_On_Conflict>;
};

/** aggregate avg on columns */
export type Restaurants_Visited_Entity_Avg_Fields = {
  __typename?: 'restaurants_visited_entity_avg_fields';
  id?: Maybe<Scalars['Float']>;
  numTimesEaten?: Maybe<Scalars['Float']>;
  restaurantId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Avg_Order_By = {
  id?: Maybe<Order_By>;
  numTimesEaten?: Maybe<Order_By>;
  restaurantId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "restaurants_visited_entity". All fields are combined with a logical 'AND'. */
export type Restaurants_Visited_Entity_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Restaurants_Visited_Entity_Bool_Exp>>>;
  _not?: Maybe<Restaurants_Visited_Entity_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Restaurants_Visited_Entity_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  numTimesEaten?: Maybe<Int_Comparison_Exp>;
  restaurant?: Maybe<Restaurant_Bool_Exp>;
  restaurantId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "restaurants_visited_entity" */
export enum Restaurants_Visited_Entity_Constraint {
  /** unique or primary key constraint */
  Pk_3ef088a9d0c887ec97a9b212b1b = 'PK_3ef088a9d0c887ec97a9b212b1b',
  /** unique or primary key constraint */
  Rel_56b99d348c4606c92bdf638804 = 'REL_56b99d348c4606c92bdf638804'
}

/** input type for incrementing integer column in table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  numTimesEaten?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  numTimesEaten?: Maybe<Scalars['Int']>;
  restaurant?: Maybe<Restaurant_Obj_Rel_Insert_Input>;
  restaurantId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Restaurants_Visited_Entity_Max_Fields = {
  __typename?: 'restaurants_visited_entity_max_fields';
  id?: Maybe<Scalars['Int']>;
  numTimesEaten?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Max_Order_By = {
  id?: Maybe<Order_By>;
  numTimesEaten?: Maybe<Order_By>;
  restaurantId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Restaurants_Visited_Entity_Min_Fields = {
  __typename?: 'restaurants_visited_entity_min_fields';
  id?: Maybe<Scalars['Int']>;
  numTimesEaten?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Min_Order_By = {
  id?: Maybe<Order_By>;
  numTimesEaten?: Maybe<Order_By>;
  restaurantId?: Maybe<Order_By>;
};

/** response of any mutation on the table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Mutation_Response = {
  __typename?: 'restaurants_visited_entity_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Restaurants_Visited_Entity>;
};

/** input type for inserting object relation for remote table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Obj_Rel_Insert_Input = {
  data: Restaurants_Visited_Entity_Insert_Input;
  on_conflict?: Maybe<Restaurants_Visited_Entity_On_Conflict>;
};

/** on conflict condition type for table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_On_Conflict = {
  constraint: Restaurants_Visited_Entity_Constraint;
  update_columns: Array<Restaurants_Visited_Entity_Update_Column>;
  where?: Maybe<Restaurants_Visited_Entity_Bool_Exp>;
};

/** ordering options when selecting data from "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Order_By = {
  id?: Maybe<Order_By>;
  numTimesEaten?: Maybe<Order_By>;
  restaurant?: Maybe<Restaurant_Order_By>;
  restaurantId?: Maybe<Order_By>;
};

/** primary key columns input for table: "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "restaurants_visited_entity" */
export enum Restaurants_Visited_Entity_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NumTimesEaten = 'numTimesEaten',
  /** column name */
  RestaurantId = 'restaurantId'
}

/** input type for updating data in table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  numTimesEaten?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Restaurants_Visited_Entity_Stddev_Fields = {
  __typename?: 'restaurants_visited_entity_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  numTimesEaten?: Maybe<Scalars['Float']>;
  restaurantId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  numTimesEaten?: Maybe<Order_By>;
  restaurantId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Restaurants_Visited_Entity_Stddev_Pop_Fields = {
  __typename?: 'restaurants_visited_entity_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  numTimesEaten?: Maybe<Scalars['Float']>;
  restaurantId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  numTimesEaten?: Maybe<Order_By>;
  restaurantId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Restaurants_Visited_Entity_Stddev_Samp_Fields = {
  __typename?: 'restaurants_visited_entity_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  numTimesEaten?: Maybe<Scalars['Float']>;
  restaurantId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  numTimesEaten?: Maybe<Order_By>;
  restaurantId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Restaurants_Visited_Entity_Sum_Fields = {
  __typename?: 'restaurants_visited_entity_sum_fields';
  id?: Maybe<Scalars['Int']>;
  numTimesEaten?: Maybe<Scalars['Int']>;
  restaurantId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Sum_Order_By = {
  id?: Maybe<Order_By>;
  numTimesEaten?: Maybe<Order_By>;
  restaurantId?: Maybe<Order_By>;
};

/** update columns of table "restaurants_visited_entity" */
export enum Restaurants_Visited_Entity_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NumTimesEaten = 'numTimesEaten',
  /** column name */
  RestaurantId = 'restaurantId'
}

/** aggregate var_pop on columns */
export type Restaurants_Visited_Entity_Var_Pop_Fields = {
  __typename?: 'restaurants_visited_entity_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  numTimesEaten?: Maybe<Scalars['Float']>;
  restaurantId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  numTimesEaten?: Maybe<Order_By>;
  restaurantId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Restaurants_Visited_Entity_Var_Samp_Fields = {
  __typename?: 'restaurants_visited_entity_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  numTimesEaten?: Maybe<Scalars['Float']>;
  restaurantId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  numTimesEaten?: Maybe<Order_By>;
  restaurantId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Restaurants_Visited_Entity_Variance_Fields = {
  __typename?: 'restaurants_visited_entity_variance_fields';
  id?: Maybe<Scalars['Float']>;
  numTimesEaten?: Maybe<Scalars['Float']>;
  restaurantId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "restaurants_visited_entity" */
export type Restaurants_Visited_Entity_Variance_Order_By = {
  id?: Maybe<Order_By>;
  numTimesEaten?: Maybe<Order_By>;
  restaurantId?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "authenticated" */
  authenticated: Array<Authenticated>;
  /** fetch aggregated fields from the table: "authenticated" */
  authenticated_aggregate: Authenticated_Aggregate;
  /** fetch data from the table: "authenticated" using primary key columns */
  authenticated_by_pk?: Maybe<Authenticated>;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "cuisine" */
  cuisine: Array<Cuisine>;
  /** fetch aggregated fields from the table: "cuisine" */
  cuisine_aggregate: Cuisine_Aggregate;
  /** fetch data from the table: "cuisine" using primary key columns */
  cuisine_by_pk?: Maybe<Cuisine>;
  /** fetch data from the table: "favorite_item_entity" */
  favorite_item_entity: Array<Favorite_Item_Entity>;
  /** fetch aggregated fields from the table: "favorite_item_entity" */
  favorite_item_entity_aggregate: Favorite_Item_Entity_Aggregate;
  /** fetch data from the table: "favorite_item_entity" using primary key columns */
  favorite_item_entity_by_pk?: Maybe<Favorite_Item_Entity>;
  /** fetch data from the table: "food_item" */
  food_item: Array<Food_Item>;
  /** fetch aggregated fields from the table: "food_item" */
  food_item_aggregate: Food_Item_Aggregate;
  /** fetch data from the table: "food_item" using primary key columns */
  food_item_by_pk?: Maybe<Food_Item>;
  /** fetch data from the table: "food_item_media" */
  food_item_media: Array<Food_Item_Media>;
  /** fetch aggregated fields from the table: "food_item_media" */
  food_item_media_aggregate: Food_Item_Media_Aggregate;
  /** fetch data from the table: "food_item_media" using primary key columns */
  food_item_media_by_pk?: Maybe<Food_Item_Media>;
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "game_choice" */
  game_choice: Array<Game_Choice>;
  /** fetch aggregated fields from the table: "game_choice" */
  game_choice_aggregate: Game_Choice_Aggregate;
  /** fetch data from the table: "game_choice" using primary key columns */
  game_choice_by_pk?: Maybe<Game_Choice>;
  /** fetch data from the table: "game_cuisine" */
  game_cuisine: Array<Game_Cuisine>;
  /** fetch aggregated fields from the table: "game_cuisine" */
  game_cuisine_aggregate: Game_Cuisine_Aggregate;
  /** fetch data from the table: "game_cuisine" using primary key columns */
  game_cuisine_by_pk?: Maybe<Game_Cuisine>;
  /** fetch data from the table: "game_player" */
  game_player: Array<Game_Player>;
  /** fetch aggregated fields from the table: "game_player" */
  game_player_aggregate: Game_Player_Aggregate;
  /** fetch data from the table: "game_player" using primary key columns */
  game_player_by_pk?: Maybe<Game_Player>;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table: "media_author" */
  media_author: Array<Media_Author>;
  /** fetch aggregated fields from the table: "media_author" */
  media_author_aggregate: Media_Author_Aggregate;
  /** fetch data from the table: "media_author" using primary key columns */
  media_author_by_pk?: Maybe<Media_Author>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table: "menu_section" */
  menu_section: Array<Menu_Section>;
  /** fetch aggregated fields from the table: "menu_section" */
  menu_section_aggregate: Menu_Section_Aggregate;
  /** fetch data from the table: "menu_section" using primary key columns */
  menu_section_by_pk?: Maybe<Menu_Section>;
  /** fetch data from the table: "metric" */
  metric: Array<Metric>;
  /** fetch aggregated fields from the table: "metric" */
  metric_aggregate: Metric_Aggregate;
  /** fetch data from the table: "metric" using primary key columns */
  metric_by_pk?: Maybe<Metric>;
  /** fetch data from the table: "restaurant" */
  restaurant: Array<Restaurant>;
  /** fetch aggregated fields from the table: "restaurant" */
  restaurant_aggregate: Restaurant_Aggregate;
  /** fetch data from the table: "restaurant" using primary key columns */
  restaurant_by_pk?: Maybe<Restaurant>;
  /** fetch data from the table: "restaurant_chain" */
  restaurant_chain: Array<Restaurant_Chain>;
  /** fetch aggregated fields from the table: "restaurant_chain" */
  restaurant_chain_aggregate: Restaurant_Chain_Aggregate;
  /** fetch data from the table: "restaurant_chain" using primary key columns */
  restaurant_chain_by_pk?: Maybe<Restaurant_Chain>;
  /** fetch data from the table: "restaurant_cuisine" */
  restaurant_cuisine: Array<Restaurant_Cuisine>;
  /** fetch aggregated fields from the table: "restaurant_cuisine" */
  restaurant_cuisine_aggregate: Restaurant_Cuisine_Aggregate;
  /** fetch data from the table: "restaurant_cuisine" using primary key columns */
  restaurant_cuisine_by_pk?: Maybe<Restaurant_Cuisine>;
  /** fetch data from the table: "restaurant_item" */
  restaurant_item: Array<Restaurant_Item>;
  /** fetch aggregated fields from the table: "restaurant_item" */
  restaurant_item_aggregate: Restaurant_Item_Aggregate;
  /** fetch data from the table: "restaurant_item" using primary key columns */
  restaurant_item_by_pk?: Maybe<Restaurant_Item>;
  /** fetch data from the table: "restaurants_visited_entity" */
  restaurants_visited_entity: Array<Restaurants_Visited_Entity>;
  /** fetch aggregated fields from the table: "restaurants_visited_entity" */
  restaurants_visited_entity_aggregate: Restaurants_Visited_Entity_Aggregate;
  /** fetch data from the table: "restaurants_visited_entity" using primary key columns */
  restaurants_visited_entity_by_pk?: Maybe<Restaurants_Visited_Entity>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_device" */
  user_device: Array<User_Device>;
  /** fetch aggregated fields from the table: "user_device" */
  user_device_aggregate: User_Device_Aggregate;
  /** fetch data from the table: "user_device" using primary key columns */
  user_device_by_pk?: Maybe<User_Device>;
};


/** subscription root */
export type Subscription_RootAuthenticatedArgs = {
  distinct_on?: Maybe<Array<Authenticated_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Authenticated_Order_By>>;
  where?: Maybe<Authenticated_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuthenticated_AggregateArgs = {
  distinct_on?: Maybe<Array<Authenticated_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Authenticated_Order_By>>;
  where?: Maybe<Authenticated_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAuthenticated_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootContactArgs = {
  distinct_on?: Maybe<Array<Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Order_By>>;
  where?: Maybe<Contact_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Order_By>>;
  where?: Maybe<Contact_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContact_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCuisineArgs = {
  distinct_on?: Maybe<Array<Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cuisine_Order_By>>;
  where?: Maybe<Cuisine_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCuisine_AggregateArgs = {
  distinct_on?: Maybe<Array<Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cuisine_Order_By>>;
  where?: Maybe<Cuisine_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCuisine_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFavorite_Item_EntityArgs = {
  distinct_on?: Maybe<Array<Favorite_Item_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorite_Item_Entity_Order_By>>;
  where?: Maybe<Favorite_Item_Entity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFavorite_Item_Entity_AggregateArgs = {
  distinct_on?: Maybe<Array<Favorite_Item_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Favorite_Item_Entity_Order_By>>;
  where?: Maybe<Favorite_Item_Entity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFavorite_Item_Entity_By_PkArgs = {
  foodItemId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFood_ItemArgs = {
  distinct_on?: Maybe<Array<Food_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Order_By>>;
  where?: Maybe<Food_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFood_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Order_By>>;
  where?: Maybe<Food_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFood_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFood_Item_MediaArgs = {
  distinct_on?: Maybe<Array<Food_Item_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Media_Order_By>>;
  where?: Maybe<Food_Item_Media_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFood_Item_Media_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Item_Media_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Item_Media_Order_By>>;
  where?: Maybe<Food_Item_Media_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFood_Item_Media_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGameArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGame_ChoiceArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_Choice_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Choice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Choice_Order_By>>;
  where?: Maybe<Game_Choice_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_Choice_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGame_CuisineArgs = {
  distinct_on?: Maybe<Array<Game_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Cuisine_Order_By>>;
  where?: Maybe<Game_Cuisine_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_Cuisine_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Cuisine_Order_By>>;
  where?: Maybe<Game_Cuisine_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_Cuisine_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGame_PlayerArgs = {
  distinct_on?: Maybe<Array<Game_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Player_Order_By>>;
  where?: Maybe<Game_Player_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_Player_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Player_Order_By>>;
  where?: Maybe<Game_Player_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGame_Player_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootLogArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLog_AggregateArgs = {
  distinct_on?: Maybe<Array<Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Log_Order_By>>;
  where?: Maybe<Log_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLog_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMedia_AuthorArgs = {
  distinct_on?: Maybe<Array<Media_Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Media_Author_Order_By>>;
  where?: Maybe<Media_Author_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMedia_Author_AggregateArgs = {
  distinct_on?: Maybe<Array<Media_Author_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Media_Author_Order_By>>;
  where?: Maybe<Media_Author_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMedia_Author_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMenuArgs = {
  distinct_on?: Maybe<Array<Menu_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Menu_Order_By>>;
  where?: Maybe<Menu_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMenu_AggregateArgs = {
  distinct_on?: Maybe<Array<Menu_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Menu_Order_By>>;
  where?: Maybe<Menu_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMenu_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMenu_SectionArgs = {
  distinct_on?: Maybe<Array<Menu_Section_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Menu_Section_Order_By>>;
  where?: Maybe<Menu_Section_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMenu_Section_AggregateArgs = {
  distinct_on?: Maybe<Array<Menu_Section_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Menu_Section_Order_By>>;
  where?: Maybe<Menu_Section_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMenu_Section_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMetricArgs = {
  distinct_on?: Maybe<Array<Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Order_By>>;
  where?: Maybe<Metric_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetric_AggregateArgs = {
  distinct_on?: Maybe<Array<Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Metric_Order_By>>;
  where?: Maybe<Metric_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMetric_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRestaurantArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Order_By>>;
  where?: Maybe<Restaurant_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurant_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Order_By>>;
  where?: Maybe<Restaurant_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurant_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRestaurant_ChainArgs = {
  distinct_on?: Maybe<Array<Restaurant_Chain_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Chain_Order_By>>;
  where?: Maybe<Restaurant_Chain_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurant_Chain_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Chain_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Chain_Order_By>>;
  where?: Maybe<Restaurant_Chain_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurant_Chain_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRestaurant_CuisineArgs = {
  distinct_on?: Maybe<Array<Restaurant_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Cuisine_Order_By>>;
  where?: Maybe<Restaurant_Cuisine_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurant_Cuisine_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Cuisine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Cuisine_Order_By>>;
  where?: Maybe<Restaurant_Cuisine_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurant_Cuisine_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRestaurant_ItemArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurant_Item_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurant_Item_Order_By>>;
  where?: Maybe<Restaurant_Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurant_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRestaurants_Visited_EntityArgs = {
  distinct_on?: Maybe<Array<Restaurants_Visited_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurants_Visited_Entity_Order_By>>;
  where?: Maybe<Restaurants_Visited_Entity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurants_Visited_Entity_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurants_Visited_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restaurants_Visited_Entity_Order_By>>;
  where?: Maybe<Restaurants_Visited_Entity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestaurants_Visited_Entity_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUser_DeviceArgs = {
  distinct_on?: Maybe<Array<User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Device_Order_By>>;
  where?: Maybe<User_Device_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Device_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Device_Order_By>>;
  where?: Maybe<User_Device_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Device_By_PkArgs = {
  id: Scalars['Int'];
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  active: Scalars['Boolean'];
  animal_products: Scalars['Boolean'];
  beef: Scalars['Boolean'];
  blocked_foods?: Maybe<Scalars['_int4']>;
  chicken: Scalars['Boolean'];
  /** An array relationship */
  contacts: Array<Contact>;
  /** An array relationship */
  contactsByContactId: Array<Contact>;
  /** An aggregated array relationship */
  contactsByContactId_aggregate: Contact_Aggregate;
  /** An aggregated array relationship */
  contacts_aggregate: Contact_Aggregate;
  created_at: Scalars['timestamp'];
  email: Scalars['String'];
  exotic: Scalars['Boolean'];
  first_name: Scalars['String'];
  fish: Scalars['Boolean'];
  /** An array relationship */
  game_players: Array<Game_Player>;
  /** An aggregated array relationship */
  game_players_aggregate: Game_Player_Aggregate;
  /** An array relationship */
  games: Array<Game>;
  /** An aggregated array relationship */
  games_aggregate: Game_Aggregate;
  gluten: Scalars['Boolean'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  phone_number?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  pork: Scalars['Boolean'];
  shellfish: Scalars['Boolean'];
  turkey: Scalars['Boolean'];
  /** An array relationship */
  user_devices: Array<User_Device>;
  /** An aggregated array relationship */
  user_devices_aggregate: User_Device_Aggregate;
  username: Scalars['String'];
  vegetables: Scalars['Boolean'];
};


/** columns and relationships of "user" */
export type UserContactsArgs = {
  distinct_on?: Maybe<Array<Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Order_By>>;
  where?: Maybe<Contact_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserContactsByContactIdArgs = {
  distinct_on?: Maybe<Array<Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Order_By>>;
  where?: Maybe<Contact_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserContactsByContactId_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Order_By>>;
  where?: Maybe<Contact_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserContacts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contact_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contact_Order_By>>;
  where?: Maybe<Contact_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserGame_PlayersArgs = {
  distinct_on?: Maybe<Array<Game_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Player_Order_By>>;
  where?: Maybe<Game_Player_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserGame_Players_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Player_Order_By>>;
  where?: Maybe<Game_Player_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserGamesArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserGames_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_DevicesArgs = {
  distinct_on?: Maybe<Array<User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Device_Order_By>>;
  where?: Maybe<User_Device_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Devices_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Device_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Device_Order_By>>;
  where?: Maybe<User_Device_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  animal_products?: Maybe<Boolean_Comparison_Exp>;
  beef?: Maybe<Boolean_Comparison_Exp>;
  blocked_foods?: Maybe<_Int4_Comparison_Exp>;
  chicken?: Maybe<Boolean_Comparison_Exp>;
  contacts?: Maybe<Contact_Bool_Exp>;
  contactsByContactId?: Maybe<Contact_Bool_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  exotic?: Maybe<Boolean_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  fish?: Maybe<Boolean_Comparison_Exp>;
  game_players?: Maybe<Game_Player_Bool_Exp>;
  games?: Maybe<Game_Bool_Exp>;
  gluten?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  phone_number?: Maybe<String_Comparison_Exp>;
  photo?: Maybe<String_Comparison_Exp>;
  pork?: Maybe<Boolean_Comparison_Exp>;
  shellfish?: Maybe<Boolean_Comparison_Exp>;
  turkey?: Maybe<Boolean_Comparison_Exp>;
  user_devices?: Maybe<User_Device_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
  vegetables?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  PkCace4a159ff9f2512dd42373760 = 'PK_cace4a159ff9f2512dd42373760',
  /** unique or primary key constraint */
  Uq_01eea41349b6c9275aec646eee0 = 'UQ_01eea41349b6c9275aec646eee0',
  /** unique or primary key constraint */
  Uq_78a916df40e02a9deb1c4b75edb = 'UQ_78a916df40e02a9deb1c4b75edb',
  /** unique or primary key constraint */
  UqE12875dfb3b1d92d7d7c5377e22 = 'UQ_e12875dfb3b1d92d7d7c5377e22'
}

/** columns and relationships of "user_device" */
export type User_Device = {
  __typename?: 'user_device';
  active: Scalars['Boolean'];
  createdOn: Scalars['timestamp'];
  device_token: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};

/** aggregated selection of "user_device" */
export type User_Device_Aggregate = {
  __typename?: 'user_device_aggregate';
  aggregate?: Maybe<User_Device_Aggregate_Fields>;
  nodes: Array<User_Device>;
};

/** aggregate fields of "user_device" */
export type User_Device_Aggregate_Fields = {
  __typename?: 'user_device_aggregate_fields';
  avg?: Maybe<User_Device_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Device_Max_Fields>;
  min?: Maybe<User_Device_Min_Fields>;
  stddev?: Maybe<User_Device_Stddev_Fields>;
  stddev_pop?: Maybe<User_Device_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Device_Stddev_Samp_Fields>;
  sum?: Maybe<User_Device_Sum_Fields>;
  var_pop?: Maybe<User_Device_Var_Pop_Fields>;
  var_samp?: Maybe<User_Device_Var_Samp_Fields>;
  variance?: Maybe<User_Device_Variance_Fields>;
};


/** aggregate fields of "user_device" */
export type User_Device_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Device_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_device" */
export type User_Device_Aggregate_Order_By = {
  avg?: Maybe<User_Device_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Device_Max_Order_By>;
  min?: Maybe<User_Device_Min_Order_By>;
  stddev?: Maybe<User_Device_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Device_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Device_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Device_Sum_Order_By>;
  var_pop?: Maybe<User_Device_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Device_Var_Samp_Order_By>;
  variance?: Maybe<User_Device_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_device" */
export type User_Device_Arr_Rel_Insert_Input = {
  data: Array<User_Device_Insert_Input>;
  on_conflict?: Maybe<User_Device_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Device_Avg_Fields = {
  __typename?: 'user_device_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_device" */
export type User_Device_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_device". All fields are combined with a logical 'AND'. */
export type User_Device_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Device_Bool_Exp>>>;
  _not?: Maybe<User_Device_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Device_Bool_Exp>>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  createdOn?: Maybe<Timestamp_Comparison_Exp>;
  device_token?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_device" */
export enum User_Device_Constraint {
  /** unique or primary key constraint */
  Pk_0232591a0b48e1eb92f3ec5d0d1 = 'PK_0232591a0b48e1eb92f3ec5d0d1',
  /** unique or primary key constraint */
  Uq_16dca93ee85ad8b976fdc6cb1a0 = 'UQ_16dca93ee85ad8b976fdc6cb1a0'
}

/** input type for incrementing integer column in table "user_device" */
export type User_Device_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_device" */
export type User_Device_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  createdOn?: Maybe<Scalars['timestamp']>;
  device_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Device_Max_Fields = {
  __typename?: 'user_device_max_fields';
  createdOn?: Maybe<Scalars['timestamp']>;
  device_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_device" */
export type User_Device_Max_Order_By = {
  createdOn?: Maybe<Order_By>;
  device_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Device_Min_Fields = {
  __typename?: 'user_device_min_fields';
  createdOn?: Maybe<Scalars['timestamp']>;
  device_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_device" */
export type User_Device_Min_Order_By = {
  createdOn?: Maybe<Order_By>;
  device_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_device" */
export type User_Device_Mutation_Response = {
  __typename?: 'user_device_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Device>;
};

/** input type for inserting object relation for remote table "user_device" */
export type User_Device_Obj_Rel_Insert_Input = {
  data: User_Device_Insert_Input;
  on_conflict?: Maybe<User_Device_On_Conflict>;
};

/** on conflict condition type for table "user_device" */
export type User_Device_On_Conflict = {
  constraint: User_Device_Constraint;
  update_columns: Array<User_Device_Update_Column>;
  where?: Maybe<User_Device_Bool_Exp>;
};

/** ordering options when selecting data from "user_device" */
export type User_Device_Order_By = {
  active?: Maybe<Order_By>;
  createdOn?: Maybe<Order_By>;
  device_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_device" */
export type User_Device_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_device" */
export enum User_Device_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedOn = 'createdOn',
  /** column name */
  DeviceToken = 'device_token',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_device" */
export type User_Device_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  createdOn?: Maybe<Scalars['timestamp']>;
  device_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Device_Stddev_Fields = {
  __typename?: 'user_device_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_device" */
export type User_Device_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Device_Stddev_Pop_Fields = {
  __typename?: 'user_device_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_device" */
export type User_Device_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Device_Stddev_Samp_Fields = {
  __typename?: 'user_device_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_device" */
export type User_Device_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Device_Sum_Fields = {
  __typename?: 'user_device_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_device" */
export type User_Device_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "user_device" */
export enum User_Device_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedOn = 'createdOn',
  /** column name */
  DeviceToken = 'device_token',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type User_Device_Var_Pop_Fields = {
  __typename?: 'user_device_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_device" */
export type User_Device_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Device_Var_Samp_Fields = {
  __typename?: 'user_device_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_device" */
export type User_Device_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Device_Variance_Fields = {
  __typename?: 'user_device_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_device" */
export type User_Device_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  animal_products?: Maybe<Scalars['Boolean']>;
  beef?: Maybe<Scalars['Boolean']>;
  blocked_foods?: Maybe<Scalars['_int4']>;
  chicken?: Maybe<Scalars['Boolean']>;
  contacts?: Maybe<Contact_Arr_Rel_Insert_Input>;
  contactsByContactId?: Maybe<Contact_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  exotic?: Maybe<Scalars['Boolean']>;
  first_name?: Maybe<Scalars['String']>;
  fish?: Maybe<Scalars['Boolean']>;
  game_players?: Maybe<Game_Player_Arr_Rel_Insert_Input>;
  games?: Maybe<Game_Arr_Rel_Insert_Input>;
  gluten?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  pork?: Maybe<Scalars['Boolean']>;
  shellfish?: Maybe<Scalars['Boolean']>;
  turkey?: Maybe<Scalars['Boolean']>;
  user_devices?: Maybe<User_Device_Arr_Rel_Insert_Input>;
  username?: Maybe<Scalars['String']>;
  vegetables?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  photo?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  photo?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  active?: Maybe<Order_By>;
  animal_products?: Maybe<Order_By>;
  beef?: Maybe<Order_By>;
  blocked_foods?: Maybe<Order_By>;
  chicken?: Maybe<Order_By>;
  contactsByContactId_aggregate?: Maybe<Contact_Aggregate_Order_By>;
  contacts_aggregate?: Maybe<Contact_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  exotic?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  fish?: Maybe<Order_By>;
  game_players_aggregate?: Maybe<Game_Player_Aggregate_Order_By>;
  games_aggregate?: Maybe<Game_Aggregate_Order_By>;
  gluten?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  photo?: Maybe<Order_By>;
  pork?: Maybe<Order_By>;
  shellfish?: Maybe<Order_By>;
  turkey?: Maybe<Order_By>;
  user_devices_aggregate?: Maybe<User_Device_Aggregate_Order_By>;
  username?: Maybe<Order_By>;
  vegetables?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  AnimalProducts = 'animal_products',
  /** column name */
  Beef = 'beef',
  /** column name */
  BlockedFoods = 'blocked_foods',
  /** column name */
  Chicken = 'chicken',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Exotic = 'exotic',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Fish = 'fish',
  /** column name */
  Gluten = 'gluten',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Photo = 'photo',
  /** column name */
  Pork = 'pork',
  /** column name */
  Shellfish = 'shellfish',
  /** column name */
  Turkey = 'turkey',
  /** column name */
  Username = 'username',
  /** column name */
  Vegetables = 'vegetables'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  animal_products?: Maybe<Scalars['Boolean']>;
  beef?: Maybe<Scalars['Boolean']>;
  blocked_foods?: Maybe<Scalars['_int4']>;
  chicken?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  exotic?: Maybe<Scalars['Boolean']>;
  first_name?: Maybe<Scalars['String']>;
  fish?: Maybe<Scalars['Boolean']>;
  gluten?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  pork?: Maybe<Scalars['Boolean']>;
  shellfish?: Maybe<Scalars['Boolean']>;
  turkey?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
  vegetables?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  AnimalProducts = 'animal_products',
  /** column name */
  Beef = 'beef',
  /** column name */
  BlockedFoods = 'blocked_foods',
  /** column name */
  Chicken = 'chicken',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Exotic = 'exotic',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Fish = 'fish',
  /** column name */
  Gluten = 'gluten',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Photo = 'photo',
  /** column name */
  Pork = 'pork',
  /** column name */
  Shellfish = 'shellfish',
  /** column name */
  Turkey = 'turkey',
  /** column name */
  Username = 'username',
  /** column name */
  Vegetables = 'vegetables'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int_comparison_exp: Int_Comparison_Exp;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  _food_contains_enum: ResolverTypeWrapper<Scalars['_food_contains_enum']>;
  _food_contains_enum_comparison_exp: _Food_Contains_Enum_Comparison_Exp;
  _int4: ResolverTypeWrapper<Scalars['_int4']>;
  _int4_comparison_exp: _Int4_Comparison_Exp;
  _varchar: ResolverTypeWrapper<Scalars['_varchar']>;
  _varchar_comparison_exp: _Varchar_Comparison_Exp;
  authenticated: ResolverTypeWrapper<Authenticated>;
  authenticated_aggregate: ResolverTypeWrapper<Authenticated_Aggregate>;
  authenticated_aggregate_fields: ResolverTypeWrapper<Authenticated_Aggregate_Fields>;
  authenticated_aggregate_order_by: Authenticated_Aggregate_Order_By;
  authenticated_arr_rel_insert_input: Authenticated_Arr_Rel_Insert_Input;
  authenticated_avg_fields: ResolverTypeWrapper<Authenticated_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  authenticated_avg_order_by: Authenticated_Avg_Order_By;
  authenticated_bool_exp: Authenticated_Bool_Exp;
  authenticated_constraint: Authenticated_Constraint;
  authenticated_inc_input: Authenticated_Inc_Input;
  authenticated_insert_input: Authenticated_Insert_Input;
  authenticated_max_fields: ResolverTypeWrapper<Authenticated_Max_Fields>;
  authenticated_max_order_by: Authenticated_Max_Order_By;
  authenticated_min_fields: ResolverTypeWrapper<Authenticated_Min_Fields>;
  authenticated_min_order_by: Authenticated_Min_Order_By;
  authenticated_mutation_response: ResolverTypeWrapper<Authenticated_Mutation_Response>;
  authenticated_obj_rel_insert_input: Authenticated_Obj_Rel_Insert_Input;
  authenticated_on_conflict: Authenticated_On_Conflict;
  authenticated_order_by: Authenticated_Order_By;
  authenticated_pk_columns_input: Authenticated_Pk_Columns_Input;
  authenticated_select_column: Authenticated_Select_Column;
  authenticated_set_input: Authenticated_Set_Input;
  authenticated_stddev_fields: ResolverTypeWrapper<Authenticated_Stddev_Fields>;
  authenticated_stddev_order_by: Authenticated_Stddev_Order_By;
  authenticated_stddev_pop_fields: ResolverTypeWrapper<Authenticated_Stddev_Pop_Fields>;
  authenticated_stddev_pop_order_by: Authenticated_Stddev_Pop_Order_By;
  authenticated_stddev_samp_fields: ResolverTypeWrapper<Authenticated_Stddev_Samp_Fields>;
  authenticated_stddev_samp_order_by: Authenticated_Stddev_Samp_Order_By;
  authenticated_sum_fields: ResolverTypeWrapper<Authenticated_Sum_Fields>;
  authenticated_sum_order_by: Authenticated_Sum_Order_By;
  authenticated_update_column: Authenticated_Update_Column;
  authenticated_var_pop_fields: ResolverTypeWrapper<Authenticated_Var_Pop_Fields>;
  authenticated_var_pop_order_by: Authenticated_Var_Pop_Order_By;
  authenticated_var_samp_fields: ResolverTypeWrapper<Authenticated_Var_Samp_Fields>;
  authenticated_var_samp_order_by: Authenticated_Var_Samp_Order_By;
  authenticated_variance_fields: ResolverTypeWrapper<Authenticated_Variance_Fields>;
  authenticated_variance_order_by: Authenticated_Variance_Order_By;
  contact: ResolverTypeWrapper<Contact>;
  contact_aggregate: ResolverTypeWrapper<Contact_Aggregate>;
  contact_aggregate_fields: ResolverTypeWrapper<Contact_Aggregate_Fields>;
  contact_aggregate_order_by: Contact_Aggregate_Order_By;
  contact_arr_rel_insert_input: Contact_Arr_Rel_Insert_Input;
  contact_avg_fields: ResolverTypeWrapper<Contact_Avg_Fields>;
  contact_avg_order_by: Contact_Avg_Order_By;
  contact_bool_exp: Contact_Bool_Exp;
  contact_constraint: Contact_Constraint;
  contact_inc_input: Contact_Inc_Input;
  contact_insert_input: Contact_Insert_Input;
  contact_max_fields: ResolverTypeWrapper<Contact_Max_Fields>;
  contact_max_order_by: Contact_Max_Order_By;
  contact_min_fields: ResolverTypeWrapper<Contact_Min_Fields>;
  contact_min_order_by: Contact_Min_Order_By;
  contact_mutation_response: ResolverTypeWrapper<Contact_Mutation_Response>;
  contact_obj_rel_insert_input: Contact_Obj_Rel_Insert_Input;
  contact_on_conflict: Contact_On_Conflict;
  contact_order_by: Contact_Order_By;
  contact_pk_columns_input: Contact_Pk_Columns_Input;
  contact_select_column: Contact_Select_Column;
  contact_set_input: Contact_Set_Input;
  contact_status_enum: ResolverTypeWrapper<Scalars['contact_status_enum']>;
  contact_status_enum_comparison_exp: Contact_Status_Enum_Comparison_Exp;
  contact_stddev_fields: ResolverTypeWrapper<Contact_Stddev_Fields>;
  contact_stddev_order_by: Contact_Stddev_Order_By;
  contact_stddev_pop_fields: ResolverTypeWrapper<Contact_Stddev_Pop_Fields>;
  contact_stddev_pop_order_by: Contact_Stddev_Pop_Order_By;
  contact_stddev_samp_fields: ResolverTypeWrapper<Contact_Stddev_Samp_Fields>;
  contact_stddev_samp_order_by: Contact_Stddev_Samp_Order_By;
  contact_sum_fields: ResolverTypeWrapper<Contact_Sum_Fields>;
  contact_sum_order_by: Contact_Sum_Order_By;
  contact_update_column: Contact_Update_Column;
  contact_var_pop_fields: ResolverTypeWrapper<Contact_Var_Pop_Fields>;
  contact_var_pop_order_by: Contact_Var_Pop_Order_By;
  contact_var_samp_fields: ResolverTypeWrapper<Contact_Var_Samp_Fields>;
  contact_var_samp_order_by: Contact_Var_Samp_Order_By;
  contact_variance_fields: ResolverTypeWrapper<Contact_Variance_Fields>;
  contact_variance_order_by: Contact_Variance_Order_By;
  cuisine: ResolverTypeWrapper<Cuisine>;
  cuisine_aggregate: ResolverTypeWrapper<Cuisine_Aggregate>;
  cuisine_aggregate_fields: ResolverTypeWrapper<Cuisine_Aggregate_Fields>;
  cuisine_aggregate_order_by: Cuisine_Aggregate_Order_By;
  cuisine_arr_rel_insert_input: Cuisine_Arr_Rel_Insert_Input;
  cuisine_avg_fields: ResolverTypeWrapper<Cuisine_Avg_Fields>;
  cuisine_avg_order_by: Cuisine_Avg_Order_By;
  cuisine_bool_exp: Cuisine_Bool_Exp;
  cuisine_constraint: Cuisine_Constraint;
  cuisine_inc_input: Cuisine_Inc_Input;
  cuisine_insert_input: Cuisine_Insert_Input;
  cuisine_max_fields: ResolverTypeWrapper<Cuisine_Max_Fields>;
  cuisine_max_order_by: Cuisine_Max_Order_By;
  cuisine_min_fields: ResolverTypeWrapper<Cuisine_Min_Fields>;
  cuisine_min_order_by: Cuisine_Min_Order_By;
  cuisine_mutation_response: ResolverTypeWrapper<Cuisine_Mutation_Response>;
  cuisine_obj_rel_insert_input: Cuisine_Obj_Rel_Insert_Input;
  cuisine_on_conflict: Cuisine_On_Conflict;
  cuisine_order_by: Cuisine_Order_By;
  cuisine_pk_columns_input: Cuisine_Pk_Columns_Input;
  cuisine_select_column: Cuisine_Select_Column;
  cuisine_set_input: Cuisine_Set_Input;
  cuisine_stddev_fields: ResolverTypeWrapper<Cuisine_Stddev_Fields>;
  cuisine_stddev_order_by: Cuisine_Stddev_Order_By;
  cuisine_stddev_pop_fields: ResolverTypeWrapper<Cuisine_Stddev_Pop_Fields>;
  cuisine_stddev_pop_order_by: Cuisine_Stddev_Pop_Order_By;
  cuisine_stddev_samp_fields: ResolverTypeWrapper<Cuisine_Stddev_Samp_Fields>;
  cuisine_stddev_samp_order_by: Cuisine_Stddev_Samp_Order_By;
  cuisine_sum_fields: ResolverTypeWrapper<Cuisine_Sum_Fields>;
  cuisine_sum_order_by: Cuisine_Sum_Order_By;
  cuisine_update_column: Cuisine_Update_Column;
  cuisine_var_pop_fields: ResolverTypeWrapper<Cuisine_Var_Pop_Fields>;
  cuisine_var_pop_order_by: Cuisine_Var_Pop_Order_By;
  cuisine_var_samp_fields: ResolverTypeWrapper<Cuisine_Var_Samp_Fields>;
  cuisine_var_samp_order_by: Cuisine_Var_Samp_Order_By;
  cuisine_variance_fields: ResolverTypeWrapper<Cuisine_Variance_Fields>;
  cuisine_variance_order_by: Cuisine_Variance_Order_By;
  favorite_item_entity: ResolverTypeWrapper<Favorite_Item_Entity>;
  favorite_item_entity_aggregate: ResolverTypeWrapper<Favorite_Item_Entity_Aggregate>;
  favorite_item_entity_aggregate_fields: ResolverTypeWrapper<Favorite_Item_Entity_Aggregate_Fields>;
  favorite_item_entity_aggregate_order_by: Favorite_Item_Entity_Aggregate_Order_By;
  favorite_item_entity_arr_rel_insert_input: Favorite_Item_Entity_Arr_Rel_Insert_Input;
  favorite_item_entity_avg_fields: ResolverTypeWrapper<Favorite_Item_Entity_Avg_Fields>;
  favorite_item_entity_avg_order_by: Favorite_Item_Entity_Avg_Order_By;
  favorite_item_entity_bool_exp: Favorite_Item_Entity_Bool_Exp;
  favorite_item_entity_constraint: Favorite_Item_Entity_Constraint;
  favorite_item_entity_inc_input: Favorite_Item_Entity_Inc_Input;
  favorite_item_entity_insert_input: Favorite_Item_Entity_Insert_Input;
  favorite_item_entity_max_fields: ResolverTypeWrapper<Favorite_Item_Entity_Max_Fields>;
  favorite_item_entity_max_order_by: Favorite_Item_Entity_Max_Order_By;
  favorite_item_entity_min_fields: ResolverTypeWrapper<Favorite_Item_Entity_Min_Fields>;
  favorite_item_entity_min_order_by: Favorite_Item_Entity_Min_Order_By;
  favorite_item_entity_mutation_response: ResolverTypeWrapper<Favorite_Item_Entity_Mutation_Response>;
  favorite_item_entity_obj_rel_insert_input: Favorite_Item_Entity_Obj_Rel_Insert_Input;
  favorite_item_entity_on_conflict: Favorite_Item_Entity_On_Conflict;
  favorite_item_entity_order_by: Favorite_Item_Entity_Order_By;
  favorite_item_entity_pk_columns_input: Favorite_Item_Entity_Pk_Columns_Input;
  favorite_item_entity_select_column: Favorite_Item_Entity_Select_Column;
  favorite_item_entity_set_input: Favorite_Item_Entity_Set_Input;
  favorite_item_entity_stddev_fields: ResolverTypeWrapper<Favorite_Item_Entity_Stddev_Fields>;
  favorite_item_entity_stddev_order_by: Favorite_Item_Entity_Stddev_Order_By;
  favorite_item_entity_stddev_pop_fields: ResolverTypeWrapper<Favorite_Item_Entity_Stddev_Pop_Fields>;
  favorite_item_entity_stddev_pop_order_by: Favorite_Item_Entity_Stddev_Pop_Order_By;
  favorite_item_entity_stddev_samp_fields: ResolverTypeWrapper<Favorite_Item_Entity_Stddev_Samp_Fields>;
  favorite_item_entity_stddev_samp_order_by: Favorite_Item_Entity_Stddev_Samp_Order_By;
  favorite_item_entity_sum_fields: ResolverTypeWrapper<Favorite_Item_Entity_Sum_Fields>;
  favorite_item_entity_sum_order_by: Favorite_Item_Entity_Sum_Order_By;
  favorite_item_entity_update_column: Favorite_Item_Entity_Update_Column;
  favorite_item_entity_var_pop_fields: ResolverTypeWrapper<Favorite_Item_Entity_Var_Pop_Fields>;
  favorite_item_entity_var_pop_order_by: Favorite_Item_Entity_Var_Pop_Order_By;
  favorite_item_entity_var_samp_fields: ResolverTypeWrapper<Favorite_Item_Entity_Var_Samp_Fields>;
  favorite_item_entity_var_samp_order_by: Favorite_Item_Entity_Var_Samp_Order_By;
  favorite_item_entity_variance_fields: ResolverTypeWrapper<Favorite_Item_Entity_Variance_Fields>;
  favorite_item_entity_variance_order_by: Favorite_Item_Entity_Variance_Order_By;
  float8: ResolverTypeWrapper<Scalars['float8']>;
  float8_comparison_exp: Float8_Comparison_Exp;
  food_item: ResolverTypeWrapper<Food_Item>;
  food_item_aggregate: ResolverTypeWrapper<Food_Item_Aggregate>;
  food_item_aggregate_fields: ResolverTypeWrapper<Food_Item_Aggregate_Fields>;
  food_item_aggregate_order_by: Food_Item_Aggregate_Order_By;
  food_item_arr_rel_insert_input: Food_Item_Arr_Rel_Insert_Input;
  food_item_avg_fields: ResolverTypeWrapper<Food_Item_Avg_Fields>;
  food_item_avg_order_by: Food_Item_Avg_Order_By;
  food_item_bool_exp: Food_Item_Bool_Exp;
  food_item_constraint: Food_Item_Constraint;
  food_item_inc_input: Food_Item_Inc_Input;
  food_item_insert_input: Food_Item_Insert_Input;
  food_item_max_fields: ResolverTypeWrapper<Food_Item_Max_Fields>;
  food_item_max_order_by: Food_Item_Max_Order_By;
  food_item_media: ResolverTypeWrapper<Food_Item_Media>;
  food_item_media_aggregate: ResolverTypeWrapper<Food_Item_Media_Aggregate>;
  food_item_media_aggregate_fields: ResolverTypeWrapper<Food_Item_Media_Aggregate_Fields>;
  food_item_media_aggregate_order_by: Food_Item_Media_Aggregate_Order_By;
  food_item_media_arr_rel_insert_input: Food_Item_Media_Arr_Rel_Insert_Input;
  food_item_media_avg_fields: ResolverTypeWrapper<Food_Item_Media_Avg_Fields>;
  food_item_media_avg_order_by: Food_Item_Media_Avg_Order_By;
  food_item_media_bool_exp: Food_Item_Media_Bool_Exp;
  food_item_media_constraint: Food_Item_Media_Constraint;
  food_item_media_inc_input: Food_Item_Media_Inc_Input;
  food_item_media_insert_input: Food_Item_Media_Insert_Input;
  food_item_media_max_fields: ResolverTypeWrapper<Food_Item_Media_Max_Fields>;
  food_item_media_max_order_by: Food_Item_Media_Max_Order_By;
  food_item_media_min_fields: ResolverTypeWrapper<Food_Item_Media_Min_Fields>;
  food_item_media_min_order_by: Food_Item_Media_Min_Order_By;
  food_item_media_mutation_response: ResolverTypeWrapper<Food_Item_Media_Mutation_Response>;
  food_item_media_obj_rel_insert_input: Food_Item_Media_Obj_Rel_Insert_Input;
  food_item_media_on_conflict: Food_Item_Media_On_Conflict;
  food_item_media_order_by: Food_Item_Media_Order_By;
  food_item_media_pk_columns_input: Food_Item_Media_Pk_Columns_Input;
  food_item_media_select_column: Food_Item_Media_Select_Column;
  food_item_media_set_input: Food_Item_Media_Set_Input;
  food_item_media_stddev_fields: ResolverTypeWrapper<Food_Item_Media_Stddev_Fields>;
  food_item_media_stddev_order_by: Food_Item_Media_Stddev_Order_By;
  food_item_media_stddev_pop_fields: ResolverTypeWrapper<Food_Item_Media_Stddev_Pop_Fields>;
  food_item_media_stddev_pop_order_by: Food_Item_Media_Stddev_Pop_Order_By;
  food_item_media_stddev_samp_fields: ResolverTypeWrapper<Food_Item_Media_Stddev_Samp_Fields>;
  food_item_media_stddev_samp_order_by: Food_Item_Media_Stddev_Samp_Order_By;
  food_item_media_sum_fields: ResolverTypeWrapper<Food_Item_Media_Sum_Fields>;
  food_item_media_sum_order_by: Food_Item_Media_Sum_Order_By;
  food_item_media_type_enum: ResolverTypeWrapper<Scalars['food_item_media_type_enum']>;
  food_item_media_type_enum_comparison_exp: Food_Item_Media_Type_Enum_Comparison_Exp;
  food_item_media_update_column: Food_Item_Media_Update_Column;
  food_item_media_var_pop_fields: ResolverTypeWrapper<Food_Item_Media_Var_Pop_Fields>;
  food_item_media_var_pop_order_by: Food_Item_Media_Var_Pop_Order_By;
  food_item_media_var_samp_fields: ResolverTypeWrapper<Food_Item_Media_Var_Samp_Fields>;
  food_item_media_var_samp_order_by: Food_Item_Media_Var_Samp_Order_By;
  food_item_media_variance_fields: ResolverTypeWrapper<Food_Item_Media_Variance_Fields>;
  food_item_media_variance_order_by: Food_Item_Media_Variance_Order_By;
  food_item_min_fields: ResolverTypeWrapper<Food_Item_Min_Fields>;
  food_item_min_order_by: Food_Item_Min_Order_By;
  food_item_mutation_response: ResolverTypeWrapper<Food_Item_Mutation_Response>;
  food_item_obj_rel_insert_input: Food_Item_Obj_Rel_Insert_Input;
  food_item_on_conflict: Food_Item_On_Conflict;
  food_item_order_by: Food_Item_Order_By;
  food_item_pk_columns_input: Food_Item_Pk_Columns_Input;
  food_item_select_column: Food_Item_Select_Column;
  food_item_set_input: Food_Item_Set_Input;
  food_item_stddev_fields: ResolverTypeWrapper<Food_Item_Stddev_Fields>;
  food_item_stddev_order_by: Food_Item_Stddev_Order_By;
  food_item_stddev_pop_fields: ResolverTypeWrapper<Food_Item_Stddev_Pop_Fields>;
  food_item_stddev_pop_order_by: Food_Item_Stddev_Pop_Order_By;
  food_item_stddev_samp_fields: ResolverTypeWrapper<Food_Item_Stddev_Samp_Fields>;
  food_item_stddev_samp_order_by: Food_Item_Stddev_Samp_Order_By;
  food_item_sum_fields: ResolverTypeWrapper<Food_Item_Sum_Fields>;
  food_item_sum_order_by: Food_Item_Sum_Order_By;
  food_item_update_column: Food_Item_Update_Column;
  food_item_var_pop_fields: ResolverTypeWrapper<Food_Item_Var_Pop_Fields>;
  food_item_var_pop_order_by: Food_Item_Var_Pop_Order_By;
  food_item_var_samp_fields: ResolverTypeWrapper<Food_Item_Var_Samp_Fields>;
  food_item_var_samp_order_by: Food_Item_Var_Samp_Order_By;
  food_item_variance_fields: ResolverTypeWrapper<Food_Item_Variance_Fields>;
  food_item_variance_order_by: Food_Item_Variance_Order_By;
  game: ResolverTypeWrapper<Game>;
  game_aggregate: ResolverTypeWrapper<Game_Aggregate>;
  game_aggregate_fields: ResolverTypeWrapper<Game_Aggregate_Fields>;
  game_aggregate_order_by: Game_Aggregate_Order_By;
  game_arr_rel_insert_input: Game_Arr_Rel_Insert_Input;
  game_avg_fields: ResolverTypeWrapper<Game_Avg_Fields>;
  game_avg_order_by: Game_Avg_Order_By;
  game_bool_exp: Game_Bool_Exp;
  game_choice: ResolverTypeWrapper<Game_Choice>;
  game_choice_aggregate: ResolverTypeWrapper<Game_Choice_Aggregate>;
  game_choice_aggregate_fields: ResolverTypeWrapper<Game_Choice_Aggregate_Fields>;
  game_choice_aggregate_order_by: Game_Choice_Aggregate_Order_By;
  game_choice_arr_rel_insert_input: Game_Choice_Arr_Rel_Insert_Input;
  game_choice_avg_fields: ResolverTypeWrapper<Game_Choice_Avg_Fields>;
  game_choice_avg_order_by: Game_Choice_Avg_Order_By;
  game_choice_bool_exp: Game_Choice_Bool_Exp;
  game_choice_constraint: Game_Choice_Constraint;
  game_choice_inc_input: Game_Choice_Inc_Input;
  game_choice_insert_input: Game_Choice_Insert_Input;
  game_choice_max_fields: ResolverTypeWrapper<Game_Choice_Max_Fields>;
  game_choice_max_order_by: Game_Choice_Max_Order_By;
  game_choice_min_fields: ResolverTypeWrapper<Game_Choice_Min_Fields>;
  game_choice_min_order_by: Game_Choice_Min_Order_By;
  game_choice_mutation_response: ResolverTypeWrapper<Game_Choice_Mutation_Response>;
  game_choice_obj_rel_insert_input: Game_Choice_Obj_Rel_Insert_Input;
  game_choice_on_conflict: Game_Choice_On_Conflict;
  game_choice_order_by: Game_Choice_Order_By;
  game_choice_pk_columns_input: Game_Choice_Pk_Columns_Input;
  game_choice_select_column: Game_Choice_Select_Column;
  game_choice_set_input: Game_Choice_Set_Input;
  game_choice_status_enum: ResolverTypeWrapper<Scalars['game_choice_status_enum']>;
  game_choice_status_enum_comparison_exp: Game_Choice_Status_Enum_Comparison_Exp;
  game_choice_stddev_fields: ResolverTypeWrapper<Game_Choice_Stddev_Fields>;
  game_choice_stddev_order_by: Game_Choice_Stddev_Order_By;
  game_choice_stddev_pop_fields: ResolverTypeWrapper<Game_Choice_Stddev_Pop_Fields>;
  game_choice_stddev_pop_order_by: Game_Choice_Stddev_Pop_Order_By;
  game_choice_stddev_samp_fields: ResolverTypeWrapper<Game_Choice_Stddev_Samp_Fields>;
  game_choice_stddev_samp_order_by: Game_Choice_Stddev_Samp_Order_By;
  game_choice_sum_fields: ResolverTypeWrapper<Game_Choice_Sum_Fields>;
  game_choice_sum_order_by: Game_Choice_Sum_Order_By;
  game_choice_update_column: Game_Choice_Update_Column;
  game_choice_var_pop_fields: ResolverTypeWrapper<Game_Choice_Var_Pop_Fields>;
  game_choice_var_pop_order_by: Game_Choice_Var_Pop_Order_By;
  game_choice_var_samp_fields: ResolverTypeWrapper<Game_Choice_Var_Samp_Fields>;
  game_choice_var_samp_order_by: Game_Choice_Var_Samp_Order_By;
  game_choice_variance_fields: ResolverTypeWrapper<Game_Choice_Variance_Fields>;
  game_choice_variance_order_by: Game_Choice_Variance_Order_By;
  game_constraint: Game_Constraint;
  game_cuisine: ResolverTypeWrapper<Game_Cuisine>;
  game_cuisine_aggregate: ResolverTypeWrapper<Game_Cuisine_Aggregate>;
  game_cuisine_aggregate_fields: ResolverTypeWrapper<Game_Cuisine_Aggregate_Fields>;
  game_cuisine_aggregate_order_by: Game_Cuisine_Aggregate_Order_By;
  game_cuisine_arr_rel_insert_input: Game_Cuisine_Arr_Rel_Insert_Input;
  game_cuisine_avg_fields: ResolverTypeWrapper<Game_Cuisine_Avg_Fields>;
  game_cuisine_avg_order_by: Game_Cuisine_Avg_Order_By;
  game_cuisine_bool_exp: Game_Cuisine_Bool_Exp;
  game_cuisine_constraint: Game_Cuisine_Constraint;
  game_cuisine_inc_input: Game_Cuisine_Inc_Input;
  game_cuisine_insert_input: Game_Cuisine_Insert_Input;
  game_cuisine_max_fields: ResolverTypeWrapper<Game_Cuisine_Max_Fields>;
  game_cuisine_max_order_by: Game_Cuisine_Max_Order_By;
  game_cuisine_min_fields: ResolverTypeWrapper<Game_Cuisine_Min_Fields>;
  game_cuisine_min_order_by: Game_Cuisine_Min_Order_By;
  game_cuisine_mutation_response: ResolverTypeWrapper<Game_Cuisine_Mutation_Response>;
  game_cuisine_obj_rel_insert_input: Game_Cuisine_Obj_Rel_Insert_Input;
  game_cuisine_on_conflict: Game_Cuisine_On_Conflict;
  game_cuisine_order_by: Game_Cuisine_Order_By;
  game_cuisine_pk_columns_input: Game_Cuisine_Pk_Columns_Input;
  game_cuisine_select_column: Game_Cuisine_Select_Column;
  game_cuisine_set_input: Game_Cuisine_Set_Input;
  game_cuisine_stddev_fields: ResolverTypeWrapper<Game_Cuisine_Stddev_Fields>;
  game_cuisine_stddev_order_by: Game_Cuisine_Stddev_Order_By;
  game_cuisine_stddev_pop_fields: ResolverTypeWrapper<Game_Cuisine_Stddev_Pop_Fields>;
  game_cuisine_stddev_pop_order_by: Game_Cuisine_Stddev_Pop_Order_By;
  game_cuisine_stddev_samp_fields: ResolverTypeWrapper<Game_Cuisine_Stddev_Samp_Fields>;
  game_cuisine_stddev_samp_order_by: Game_Cuisine_Stddev_Samp_Order_By;
  game_cuisine_sum_fields: ResolverTypeWrapper<Game_Cuisine_Sum_Fields>;
  game_cuisine_sum_order_by: Game_Cuisine_Sum_Order_By;
  game_cuisine_update_column: Game_Cuisine_Update_Column;
  game_cuisine_var_pop_fields: ResolverTypeWrapper<Game_Cuisine_Var_Pop_Fields>;
  game_cuisine_var_pop_order_by: Game_Cuisine_Var_Pop_Order_By;
  game_cuisine_var_samp_fields: ResolverTypeWrapper<Game_Cuisine_Var_Samp_Fields>;
  game_cuisine_var_samp_order_by: Game_Cuisine_Var_Samp_Order_By;
  game_cuisine_variance_fields: ResolverTypeWrapper<Game_Cuisine_Variance_Fields>;
  game_cuisine_variance_order_by: Game_Cuisine_Variance_Order_By;
  game_cuisines_filter_mode_enum: ResolverTypeWrapper<Scalars['game_cuisines_filter_mode_enum']>;
  game_cuisines_filter_mode_enum_comparison_exp: Game_Cuisines_Filter_Mode_Enum_Comparison_Exp;
  game_game_status_enum: ResolverTypeWrapper<Scalars['game_game_status_enum']>;
  game_game_status_enum_comparison_exp: Game_Game_Status_Enum_Comparison_Exp;
  game_inc_input: Game_Inc_Input;
  game_insert_input: Game_Insert_Input;
  game_max_fields: ResolverTypeWrapper<Game_Max_Fields>;
  game_max_order_by: Game_Max_Order_By;
  game_min_fields: ResolverTypeWrapper<Game_Min_Fields>;
  game_min_order_by: Game_Min_Order_By;
  game_mutation_response: ResolverTypeWrapper<Game_Mutation_Response>;
  game_obj_rel_insert_input: Game_Obj_Rel_Insert_Input;
  game_on_conflict: Game_On_Conflict;
  game_order_by: Game_Order_By;
  game_pk_columns_input: Game_Pk_Columns_Input;
  game_player: ResolverTypeWrapper<Game_Player>;
  game_player_aggregate: ResolverTypeWrapper<Game_Player_Aggregate>;
  game_player_aggregate_fields: ResolverTypeWrapper<Game_Player_Aggregate_Fields>;
  game_player_aggregate_order_by: Game_Player_Aggregate_Order_By;
  game_player_arr_rel_insert_input: Game_Player_Arr_Rel_Insert_Input;
  game_player_avg_fields: ResolverTypeWrapper<Game_Player_Avg_Fields>;
  game_player_avg_order_by: Game_Player_Avg_Order_By;
  game_player_bool_exp: Game_Player_Bool_Exp;
  game_player_constraint: Game_Player_Constraint;
  game_player_inc_input: Game_Player_Inc_Input;
  game_player_insert_input: Game_Player_Insert_Input;
  game_player_max_fields: ResolverTypeWrapper<Game_Player_Max_Fields>;
  game_player_max_order_by: Game_Player_Max_Order_By;
  game_player_min_fields: ResolverTypeWrapper<Game_Player_Min_Fields>;
  game_player_min_order_by: Game_Player_Min_Order_By;
  game_player_mutation_response: ResolverTypeWrapper<Game_Player_Mutation_Response>;
  game_player_obj_rel_insert_input: Game_Player_Obj_Rel_Insert_Input;
  game_player_on_conflict: Game_Player_On_Conflict;
  game_player_order_by: Game_Player_Order_By;
  game_player_pk_columns_input: Game_Player_Pk_Columns_Input;
  game_player_select_column: Game_Player_Select_Column;
  game_player_set_input: Game_Player_Set_Input;
  game_player_stddev_fields: ResolverTypeWrapper<Game_Player_Stddev_Fields>;
  game_player_stddev_order_by: Game_Player_Stddev_Order_By;
  game_player_stddev_pop_fields: ResolverTypeWrapper<Game_Player_Stddev_Pop_Fields>;
  game_player_stddev_pop_order_by: Game_Player_Stddev_Pop_Order_By;
  game_player_stddev_samp_fields: ResolverTypeWrapper<Game_Player_Stddev_Samp_Fields>;
  game_player_stddev_samp_order_by: Game_Player_Stddev_Samp_Order_By;
  game_player_sum_fields: ResolverTypeWrapper<Game_Player_Sum_Fields>;
  game_player_sum_order_by: Game_Player_Sum_Order_By;
  game_player_update_column: Game_Player_Update_Column;
  game_player_var_pop_fields: ResolverTypeWrapper<Game_Player_Var_Pop_Fields>;
  game_player_var_pop_order_by: Game_Player_Var_Pop_Order_By;
  game_player_var_samp_fields: ResolverTypeWrapper<Game_Player_Var_Samp_Fields>;
  game_player_var_samp_order_by: Game_Player_Var_Samp_Order_By;
  game_player_variance_fields: ResolverTypeWrapper<Game_Player_Variance_Fields>;
  game_player_variance_order_by: Game_Player_Variance_Order_By;
  game_select_column: Game_Select_Column;
  game_set_input: Game_Set_Input;
  game_stddev_fields: ResolverTypeWrapper<Game_Stddev_Fields>;
  game_stddev_order_by: Game_Stddev_Order_By;
  game_stddev_pop_fields: ResolverTypeWrapper<Game_Stddev_Pop_Fields>;
  game_stddev_pop_order_by: Game_Stddev_Pop_Order_By;
  game_stddev_samp_fields: ResolverTypeWrapper<Game_Stddev_Samp_Fields>;
  game_stddev_samp_order_by: Game_Stddev_Samp_Order_By;
  game_sum_fields: ResolverTypeWrapper<Game_Sum_Fields>;
  game_sum_order_by: Game_Sum_Order_By;
  game_unit_of_measure_enum: ResolverTypeWrapper<Scalars['game_unit_of_measure_enum']>;
  game_unit_of_measure_enum_comparison_exp: Game_Unit_Of_Measure_Enum_Comparison_Exp;
  game_update_column: Game_Update_Column;
  game_var_pop_fields: ResolverTypeWrapper<Game_Var_Pop_Fields>;
  game_var_pop_order_by: Game_Var_Pop_Order_By;
  game_var_samp_fields: ResolverTypeWrapper<Game_Var_Samp_Fields>;
  game_var_samp_order_by: Game_Var_Samp_Order_By;
  game_variance_fields: ResolverTypeWrapper<Game_Variance_Fields>;
  game_variance_order_by: Game_Variance_Order_By;
  json: ResolverTypeWrapper<Scalars['json']>;
  json_comparison_exp: Json_Comparison_Exp;
  log: ResolverTypeWrapper<Log>;
  log_aggregate: ResolverTypeWrapper<Log_Aggregate>;
  log_aggregate_fields: ResolverTypeWrapper<Log_Aggregate_Fields>;
  log_aggregate_order_by: Log_Aggregate_Order_By;
  log_arr_rel_insert_input: Log_Arr_Rel_Insert_Input;
  log_avg_fields: ResolverTypeWrapper<Log_Avg_Fields>;
  log_avg_order_by: Log_Avg_Order_By;
  log_bool_exp: Log_Bool_Exp;
  log_constraint: Log_Constraint;
  log_inc_input: Log_Inc_Input;
  log_insert_input: Log_Insert_Input;
  log_max_fields: ResolverTypeWrapper<Log_Max_Fields>;
  log_max_order_by: Log_Max_Order_By;
  log_min_fields: ResolverTypeWrapper<Log_Min_Fields>;
  log_min_order_by: Log_Min_Order_By;
  log_mutation_response: ResolverTypeWrapper<Log_Mutation_Response>;
  log_obj_rel_insert_input: Log_Obj_Rel_Insert_Input;
  log_on_conflict: Log_On_Conflict;
  log_order_by: Log_Order_By;
  log_pk_columns_input: Log_Pk_Columns_Input;
  log_select_column: Log_Select_Column;
  log_set_input: Log_Set_Input;
  log_stddev_fields: ResolverTypeWrapper<Log_Stddev_Fields>;
  log_stddev_order_by: Log_Stddev_Order_By;
  log_stddev_pop_fields: ResolverTypeWrapper<Log_Stddev_Pop_Fields>;
  log_stddev_pop_order_by: Log_Stddev_Pop_Order_By;
  log_stddev_samp_fields: ResolverTypeWrapper<Log_Stddev_Samp_Fields>;
  log_stddev_samp_order_by: Log_Stddev_Samp_Order_By;
  log_sum_fields: ResolverTypeWrapper<Log_Sum_Fields>;
  log_sum_order_by: Log_Sum_Order_By;
  log_update_column: Log_Update_Column;
  log_var_pop_fields: ResolverTypeWrapper<Log_Var_Pop_Fields>;
  log_var_pop_order_by: Log_Var_Pop_Order_By;
  log_var_samp_fields: ResolverTypeWrapper<Log_Var_Samp_Fields>;
  log_var_samp_order_by: Log_Var_Samp_Order_By;
  log_variance_fields: ResolverTypeWrapper<Log_Variance_Fields>;
  log_variance_order_by: Log_Variance_Order_By;
  media_author: ResolverTypeWrapper<Media_Author>;
  media_author_aggregate: ResolverTypeWrapper<Media_Author_Aggregate>;
  media_author_aggregate_fields: ResolverTypeWrapper<Media_Author_Aggregate_Fields>;
  media_author_aggregate_order_by: Media_Author_Aggregate_Order_By;
  media_author_arr_rel_insert_input: Media_Author_Arr_Rel_Insert_Input;
  media_author_avg_fields: ResolverTypeWrapper<Media_Author_Avg_Fields>;
  media_author_avg_order_by: Media_Author_Avg_Order_By;
  media_author_bool_exp: Media_Author_Bool_Exp;
  media_author_constraint: Media_Author_Constraint;
  media_author_inc_input: Media_Author_Inc_Input;
  media_author_insert_input: Media_Author_Insert_Input;
  media_author_max_fields: ResolverTypeWrapper<Media_Author_Max_Fields>;
  media_author_max_order_by: Media_Author_Max_Order_By;
  media_author_min_fields: ResolverTypeWrapper<Media_Author_Min_Fields>;
  media_author_min_order_by: Media_Author_Min_Order_By;
  media_author_mutation_response: ResolverTypeWrapper<Media_Author_Mutation_Response>;
  media_author_obj_rel_insert_input: Media_Author_Obj_Rel_Insert_Input;
  media_author_on_conflict: Media_Author_On_Conflict;
  media_author_order_by: Media_Author_Order_By;
  media_author_pk_columns_input: Media_Author_Pk_Columns_Input;
  media_author_select_column: Media_Author_Select_Column;
  media_author_set_input: Media_Author_Set_Input;
  media_author_stddev_fields: ResolverTypeWrapper<Media_Author_Stddev_Fields>;
  media_author_stddev_order_by: Media_Author_Stddev_Order_By;
  media_author_stddev_pop_fields: ResolverTypeWrapper<Media_Author_Stddev_Pop_Fields>;
  media_author_stddev_pop_order_by: Media_Author_Stddev_Pop_Order_By;
  media_author_stddev_samp_fields: ResolverTypeWrapper<Media_Author_Stddev_Samp_Fields>;
  media_author_stddev_samp_order_by: Media_Author_Stddev_Samp_Order_By;
  media_author_sum_fields: ResolverTypeWrapper<Media_Author_Sum_Fields>;
  media_author_sum_order_by: Media_Author_Sum_Order_By;
  media_author_update_column: Media_Author_Update_Column;
  media_author_var_pop_fields: ResolverTypeWrapper<Media_Author_Var_Pop_Fields>;
  media_author_var_pop_order_by: Media_Author_Var_Pop_Order_By;
  media_author_var_samp_fields: ResolverTypeWrapper<Media_Author_Var_Samp_Fields>;
  media_author_var_samp_order_by: Media_Author_Var_Samp_Order_By;
  media_author_variance_fields: ResolverTypeWrapper<Media_Author_Variance_Fields>;
  media_author_variance_order_by: Media_Author_Variance_Order_By;
  menu: ResolverTypeWrapper<Menu>;
  menu_aggregate: ResolverTypeWrapper<Menu_Aggregate>;
  menu_aggregate_fields: ResolverTypeWrapper<Menu_Aggregate_Fields>;
  menu_aggregate_order_by: Menu_Aggregate_Order_By;
  menu_arr_rel_insert_input: Menu_Arr_Rel_Insert_Input;
  menu_avg_fields: ResolverTypeWrapper<Menu_Avg_Fields>;
  menu_avg_order_by: Menu_Avg_Order_By;
  menu_bool_exp: Menu_Bool_Exp;
  menu_constraint: Menu_Constraint;
  menu_inc_input: Menu_Inc_Input;
  menu_insert_input: Menu_Insert_Input;
  menu_max_fields: ResolverTypeWrapper<Menu_Max_Fields>;
  menu_max_order_by: Menu_Max_Order_By;
  menu_min_fields: ResolverTypeWrapper<Menu_Min_Fields>;
  menu_min_order_by: Menu_Min_Order_By;
  menu_mutation_response: ResolverTypeWrapper<Menu_Mutation_Response>;
  menu_obj_rel_insert_input: Menu_Obj_Rel_Insert_Input;
  menu_on_conflict: Menu_On_Conflict;
  menu_order_by: Menu_Order_By;
  menu_pk_columns_input: Menu_Pk_Columns_Input;
  menu_section: ResolverTypeWrapper<Menu_Section>;
  menu_section_aggregate: ResolverTypeWrapper<Menu_Section_Aggregate>;
  menu_section_aggregate_fields: ResolverTypeWrapper<Menu_Section_Aggregate_Fields>;
  menu_section_aggregate_order_by: Menu_Section_Aggregate_Order_By;
  menu_section_arr_rel_insert_input: Menu_Section_Arr_Rel_Insert_Input;
  menu_section_avg_fields: ResolverTypeWrapper<Menu_Section_Avg_Fields>;
  menu_section_avg_order_by: Menu_Section_Avg_Order_By;
  menu_section_bool_exp: Menu_Section_Bool_Exp;
  menu_section_constraint: Menu_Section_Constraint;
  menu_section_inc_input: Menu_Section_Inc_Input;
  menu_section_insert_input: Menu_Section_Insert_Input;
  menu_section_max_fields: ResolverTypeWrapper<Menu_Section_Max_Fields>;
  menu_section_max_order_by: Menu_Section_Max_Order_By;
  menu_section_min_fields: ResolverTypeWrapper<Menu_Section_Min_Fields>;
  menu_section_min_order_by: Menu_Section_Min_Order_By;
  menu_section_mutation_response: ResolverTypeWrapper<Menu_Section_Mutation_Response>;
  menu_section_obj_rel_insert_input: Menu_Section_Obj_Rel_Insert_Input;
  menu_section_on_conflict: Menu_Section_On_Conflict;
  menu_section_order_by: Menu_Section_Order_By;
  menu_section_pk_columns_input: Menu_Section_Pk_Columns_Input;
  menu_section_select_column: Menu_Section_Select_Column;
  menu_section_set_input: Menu_Section_Set_Input;
  menu_section_stddev_fields: ResolverTypeWrapper<Menu_Section_Stddev_Fields>;
  menu_section_stddev_order_by: Menu_Section_Stddev_Order_By;
  menu_section_stddev_pop_fields: ResolverTypeWrapper<Menu_Section_Stddev_Pop_Fields>;
  menu_section_stddev_pop_order_by: Menu_Section_Stddev_Pop_Order_By;
  menu_section_stddev_samp_fields: ResolverTypeWrapper<Menu_Section_Stddev_Samp_Fields>;
  menu_section_stddev_samp_order_by: Menu_Section_Stddev_Samp_Order_By;
  menu_section_sum_fields: ResolverTypeWrapper<Menu_Section_Sum_Fields>;
  menu_section_sum_order_by: Menu_Section_Sum_Order_By;
  menu_section_update_column: Menu_Section_Update_Column;
  menu_section_var_pop_fields: ResolverTypeWrapper<Menu_Section_Var_Pop_Fields>;
  menu_section_var_pop_order_by: Menu_Section_Var_Pop_Order_By;
  menu_section_var_samp_fields: ResolverTypeWrapper<Menu_Section_Var_Samp_Fields>;
  menu_section_var_samp_order_by: Menu_Section_Var_Samp_Order_By;
  menu_section_variance_fields: ResolverTypeWrapper<Menu_Section_Variance_Fields>;
  menu_section_variance_order_by: Menu_Section_Variance_Order_By;
  menu_select_column: Menu_Select_Column;
  menu_set_input: Menu_Set_Input;
  menu_stddev_fields: ResolverTypeWrapper<Menu_Stddev_Fields>;
  menu_stddev_order_by: Menu_Stddev_Order_By;
  menu_stddev_pop_fields: ResolverTypeWrapper<Menu_Stddev_Pop_Fields>;
  menu_stddev_pop_order_by: Menu_Stddev_Pop_Order_By;
  menu_stddev_samp_fields: ResolverTypeWrapper<Menu_Stddev_Samp_Fields>;
  menu_stddev_samp_order_by: Menu_Stddev_Samp_Order_By;
  menu_sum_fields: ResolverTypeWrapper<Menu_Sum_Fields>;
  menu_sum_order_by: Menu_Sum_Order_By;
  menu_update_column: Menu_Update_Column;
  menu_var_pop_fields: ResolverTypeWrapper<Menu_Var_Pop_Fields>;
  menu_var_pop_order_by: Menu_Var_Pop_Order_By;
  menu_var_samp_fields: ResolverTypeWrapper<Menu_Var_Samp_Fields>;
  menu_var_samp_order_by: Menu_Var_Samp_Order_By;
  menu_variance_fields: ResolverTypeWrapper<Menu_Variance_Fields>;
  menu_variance_order_by: Menu_Variance_Order_By;
  metric: ResolverTypeWrapper<Metric>;
  metric_aggregate: ResolverTypeWrapper<Metric_Aggregate>;
  metric_aggregate_fields: ResolverTypeWrapper<Metric_Aggregate_Fields>;
  metric_aggregate_order_by: Metric_Aggregate_Order_By;
  metric_arr_rel_insert_input: Metric_Arr_Rel_Insert_Input;
  metric_avg_fields: ResolverTypeWrapper<Metric_Avg_Fields>;
  metric_avg_order_by: Metric_Avg_Order_By;
  metric_bool_exp: Metric_Bool_Exp;
  metric_constraint: Metric_Constraint;
  metric_inc_input: Metric_Inc_Input;
  metric_insert_input: Metric_Insert_Input;
  metric_max_fields: ResolverTypeWrapper<Metric_Max_Fields>;
  metric_max_order_by: Metric_Max_Order_By;
  metric_min_fields: ResolverTypeWrapper<Metric_Min_Fields>;
  metric_min_order_by: Metric_Min_Order_By;
  metric_mutation_response: ResolverTypeWrapper<Metric_Mutation_Response>;
  metric_obj_rel_insert_input: Metric_Obj_Rel_Insert_Input;
  metric_on_conflict: Metric_On_Conflict;
  metric_order_by: Metric_Order_By;
  metric_pk_columns_input: Metric_Pk_Columns_Input;
  metric_select_column: Metric_Select_Column;
  metric_set_input: Metric_Set_Input;
  metric_stddev_fields: ResolverTypeWrapper<Metric_Stddev_Fields>;
  metric_stddev_order_by: Metric_Stddev_Order_By;
  metric_stddev_pop_fields: ResolverTypeWrapper<Metric_Stddev_Pop_Fields>;
  metric_stddev_pop_order_by: Metric_Stddev_Pop_Order_By;
  metric_stddev_samp_fields: ResolverTypeWrapper<Metric_Stddev_Samp_Fields>;
  metric_stddev_samp_order_by: Metric_Stddev_Samp_Order_By;
  metric_sum_fields: ResolverTypeWrapper<Metric_Sum_Fields>;
  metric_sum_order_by: Metric_Sum_Order_By;
  metric_update_column: Metric_Update_Column;
  metric_var_pop_fields: ResolverTypeWrapper<Metric_Var_Pop_Fields>;
  metric_var_pop_order_by: Metric_Var_Pop_Order_By;
  metric_var_samp_fields: ResolverTypeWrapper<Metric_Var_Samp_Fields>;
  metric_var_samp_order_by: Metric_Var_Samp_Order_By;
  metric_variance_fields: ResolverTypeWrapper<Metric_Variance_Fields>;
  metric_variance_order_by: Metric_Variance_Order_By;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  restaurant: ResolverTypeWrapper<Restaurant>;
  restaurant_aggregate: ResolverTypeWrapper<Restaurant_Aggregate>;
  restaurant_aggregate_fields: ResolverTypeWrapper<Restaurant_Aggregate_Fields>;
  restaurant_aggregate_order_by: Restaurant_Aggregate_Order_By;
  restaurant_arr_rel_insert_input: Restaurant_Arr_Rel_Insert_Input;
  restaurant_avg_fields: ResolverTypeWrapper<Restaurant_Avg_Fields>;
  restaurant_avg_order_by: Restaurant_Avg_Order_By;
  restaurant_bool_exp: Restaurant_Bool_Exp;
  restaurant_chain: ResolverTypeWrapper<Restaurant_Chain>;
  restaurant_chain_aggregate: ResolverTypeWrapper<Restaurant_Chain_Aggregate>;
  restaurant_chain_aggregate_fields: ResolverTypeWrapper<Restaurant_Chain_Aggregate_Fields>;
  restaurant_chain_aggregate_order_by: Restaurant_Chain_Aggregate_Order_By;
  restaurant_chain_arr_rel_insert_input: Restaurant_Chain_Arr_Rel_Insert_Input;
  restaurant_chain_avg_fields: ResolverTypeWrapper<Restaurant_Chain_Avg_Fields>;
  restaurant_chain_avg_order_by: Restaurant_Chain_Avg_Order_By;
  restaurant_chain_bool_exp: Restaurant_Chain_Bool_Exp;
  restaurant_chain_constraint: Restaurant_Chain_Constraint;
  restaurant_chain_inc_input: Restaurant_Chain_Inc_Input;
  restaurant_chain_insert_input: Restaurant_Chain_Insert_Input;
  restaurant_chain_max_fields: ResolverTypeWrapper<Restaurant_Chain_Max_Fields>;
  restaurant_chain_max_order_by: Restaurant_Chain_Max_Order_By;
  restaurant_chain_min_fields: ResolverTypeWrapper<Restaurant_Chain_Min_Fields>;
  restaurant_chain_min_order_by: Restaurant_Chain_Min_Order_By;
  restaurant_chain_mutation_response: ResolverTypeWrapper<Restaurant_Chain_Mutation_Response>;
  restaurant_chain_obj_rel_insert_input: Restaurant_Chain_Obj_Rel_Insert_Input;
  restaurant_chain_on_conflict: Restaurant_Chain_On_Conflict;
  restaurant_chain_order_by: Restaurant_Chain_Order_By;
  restaurant_chain_pk_columns_input: Restaurant_Chain_Pk_Columns_Input;
  restaurant_chain_select_column: Restaurant_Chain_Select_Column;
  restaurant_chain_set_input: Restaurant_Chain_Set_Input;
  restaurant_chain_stddev_fields: ResolverTypeWrapper<Restaurant_Chain_Stddev_Fields>;
  restaurant_chain_stddev_order_by: Restaurant_Chain_Stddev_Order_By;
  restaurant_chain_stddev_pop_fields: ResolverTypeWrapper<Restaurant_Chain_Stddev_Pop_Fields>;
  restaurant_chain_stddev_pop_order_by: Restaurant_Chain_Stddev_Pop_Order_By;
  restaurant_chain_stddev_samp_fields: ResolverTypeWrapper<Restaurant_Chain_Stddev_Samp_Fields>;
  restaurant_chain_stddev_samp_order_by: Restaurant_Chain_Stddev_Samp_Order_By;
  restaurant_chain_sum_fields: ResolverTypeWrapper<Restaurant_Chain_Sum_Fields>;
  restaurant_chain_sum_order_by: Restaurant_Chain_Sum_Order_By;
  restaurant_chain_update_column: Restaurant_Chain_Update_Column;
  restaurant_chain_var_pop_fields: ResolverTypeWrapper<Restaurant_Chain_Var_Pop_Fields>;
  restaurant_chain_var_pop_order_by: Restaurant_Chain_Var_Pop_Order_By;
  restaurant_chain_var_samp_fields: ResolverTypeWrapper<Restaurant_Chain_Var_Samp_Fields>;
  restaurant_chain_var_samp_order_by: Restaurant_Chain_Var_Samp_Order_By;
  restaurant_chain_variance_fields: ResolverTypeWrapper<Restaurant_Chain_Variance_Fields>;
  restaurant_chain_variance_order_by: Restaurant_Chain_Variance_Order_By;
  restaurant_constraint: Restaurant_Constraint;
  restaurant_cuisine: ResolverTypeWrapper<Restaurant_Cuisine>;
  restaurant_cuisine_aggregate: ResolverTypeWrapper<Restaurant_Cuisine_Aggregate>;
  restaurant_cuisine_aggregate_fields: ResolverTypeWrapper<Restaurant_Cuisine_Aggregate_Fields>;
  restaurant_cuisine_aggregate_order_by: Restaurant_Cuisine_Aggregate_Order_By;
  restaurant_cuisine_arr_rel_insert_input: Restaurant_Cuisine_Arr_Rel_Insert_Input;
  restaurant_cuisine_avg_fields: ResolverTypeWrapper<Restaurant_Cuisine_Avg_Fields>;
  restaurant_cuisine_avg_order_by: Restaurant_Cuisine_Avg_Order_By;
  restaurant_cuisine_bool_exp: Restaurant_Cuisine_Bool_Exp;
  restaurant_cuisine_constraint: Restaurant_Cuisine_Constraint;
  restaurant_cuisine_inc_input: Restaurant_Cuisine_Inc_Input;
  restaurant_cuisine_insert_input: Restaurant_Cuisine_Insert_Input;
  restaurant_cuisine_max_fields: ResolverTypeWrapper<Restaurant_Cuisine_Max_Fields>;
  restaurant_cuisine_max_order_by: Restaurant_Cuisine_Max_Order_By;
  restaurant_cuisine_min_fields: ResolverTypeWrapper<Restaurant_Cuisine_Min_Fields>;
  restaurant_cuisine_min_order_by: Restaurant_Cuisine_Min_Order_By;
  restaurant_cuisine_mutation_response: ResolverTypeWrapper<Restaurant_Cuisine_Mutation_Response>;
  restaurant_cuisine_obj_rel_insert_input: Restaurant_Cuisine_Obj_Rel_Insert_Input;
  restaurant_cuisine_on_conflict: Restaurant_Cuisine_On_Conflict;
  restaurant_cuisine_order_by: Restaurant_Cuisine_Order_By;
  restaurant_cuisine_pk_columns_input: Restaurant_Cuisine_Pk_Columns_Input;
  restaurant_cuisine_select_column: Restaurant_Cuisine_Select_Column;
  restaurant_cuisine_set_input: Restaurant_Cuisine_Set_Input;
  restaurant_cuisine_stddev_fields: ResolverTypeWrapper<Restaurant_Cuisine_Stddev_Fields>;
  restaurant_cuisine_stddev_order_by: Restaurant_Cuisine_Stddev_Order_By;
  restaurant_cuisine_stddev_pop_fields: ResolverTypeWrapper<Restaurant_Cuisine_Stddev_Pop_Fields>;
  restaurant_cuisine_stddev_pop_order_by: Restaurant_Cuisine_Stddev_Pop_Order_By;
  restaurant_cuisine_stddev_samp_fields: ResolverTypeWrapper<Restaurant_Cuisine_Stddev_Samp_Fields>;
  restaurant_cuisine_stddev_samp_order_by: Restaurant_Cuisine_Stddev_Samp_Order_By;
  restaurant_cuisine_sum_fields: ResolverTypeWrapper<Restaurant_Cuisine_Sum_Fields>;
  restaurant_cuisine_sum_order_by: Restaurant_Cuisine_Sum_Order_By;
  restaurant_cuisine_update_column: Restaurant_Cuisine_Update_Column;
  restaurant_cuisine_var_pop_fields: ResolverTypeWrapper<Restaurant_Cuisine_Var_Pop_Fields>;
  restaurant_cuisine_var_pop_order_by: Restaurant_Cuisine_Var_Pop_Order_By;
  restaurant_cuisine_var_samp_fields: ResolverTypeWrapper<Restaurant_Cuisine_Var_Samp_Fields>;
  restaurant_cuisine_var_samp_order_by: Restaurant_Cuisine_Var_Samp_Order_By;
  restaurant_cuisine_variance_fields: ResolverTypeWrapper<Restaurant_Cuisine_Variance_Fields>;
  restaurant_cuisine_variance_order_by: Restaurant_Cuisine_Variance_Order_By;
  restaurant_inc_input: Restaurant_Inc_Input;
  restaurant_insert_input: Restaurant_Insert_Input;
  restaurant_item: ResolverTypeWrapper<Restaurant_Item>;
  restaurant_item_aggregate: ResolverTypeWrapper<Restaurant_Item_Aggregate>;
  restaurant_item_aggregate_fields: ResolverTypeWrapper<Restaurant_Item_Aggregate_Fields>;
  restaurant_item_aggregate_order_by: Restaurant_Item_Aggregate_Order_By;
  restaurant_item_arr_rel_insert_input: Restaurant_Item_Arr_Rel_Insert_Input;
  restaurant_item_avg_fields: ResolverTypeWrapper<Restaurant_Item_Avg_Fields>;
  restaurant_item_avg_order_by: Restaurant_Item_Avg_Order_By;
  restaurant_item_bool_exp: Restaurant_Item_Bool_Exp;
  restaurant_item_constraint: Restaurant_Item_Constraint;
  restaurant_item_inc_input: Restaurant_Item_Inc_Input;
  restaurant_item_insert_input: Restaurant_Item_Insert_Input;
  restaurant_item_max_fields: ResolverTypeWrapper<Restaurant_Item_Max_Fields>;
  restaurant_item_max_order_by: Restaurant_Item_Max_Order_By;
  restaurant_item_min_fields: ResolverTypeWrapper<Restaurant_Item_Min_Fields>;
  restaurant_item_min_order_by: Restaurant_Item_Min_Order_By;
  restaurant_item_mutation_response: ResolverTypeWrapper<Restaurant_Item_Mutation_Response>;
  restaurant_item_obj_rel_insert_input: Restaurant_Item_Obj_Rel_Insert_Input;
  restaurant_item_on_conflict: Restaurant_Item_On_Conflict;
  restaurant_item_order_by: Restaurant_Item_Order_By;
  restaurant_item_pk_columns_input: Restaurant_Item_Pk_Columns_Input;
  restaurant_item_select_column: Restaurant_Item_Select_Column;
  restaurant_item_set_input: Restaurant_Item_Set_Input;
  restaurant_item_stddev_fields: ResolverTypeWrapper<Restaurant_Item_Stddev_Fields>;
  restaurant_item_stddev_order_by: Restaurant_Item_Stddev_Order_By;
  restaurant_item_stddev_pop_fields: ResolverTypeWrapper<Restaurant_Item_Stddev_Pop_Fields>;
  restaurant_item_stddev_pop_order_by: Restaurant_Item_Stddev_Pop_Order_By;
  restaurant_item_stddev_samp_fields: ResolverTypeWrapper<Restaurant_Item_Stddev_Samp_Fields>;
  restaurant_item_stddev_samp_order_by: Restaurant_Item_Stddev_Samp_Order_By;
  restaurant_item_sum_fields: ResolverTypeWrapper<Restaurant_Item_Sum_Fields>;
  restaurant_item_sum_order_by: Restaurant_Item_Sum_Order_By;
  restaurant_item_update_column: Restaurant_Item_Update_Column;
  restaurant_item_var_pop_fields: ResolverTypeWrapper<Restaurant_Item_Var_Pop_Fields>;
  restaurant_item_var_pop_order_by: Restaurant_Item_Var_Pop_Order_By;
  restaurant_item_var_samp_fields: ResolverTypeWrapper<Restaurant_Item_Var_Samp_Fields>;
  restaurant_item_var_samp_order_by: Restaurant_Item_Var_Samp_Order_By;
  restaurant_item_variance_fields: ResolverTypeWrapper<Restaurant_Item_Variance_Fields>;
  restaurant_item_variance_order_by: Restaurant_Item_Variance_Order_By;
  restaurant_max_fields: ResolverTypeWrapper<Restaurant_Max_Fields>;
  restaurant_max_order_by: Restaurant_Max_Order_By;
  restaurant_min_fields: ResolverTypeWrapper<Restaurant_Min_Fields>;
  restaurant_min_order_by: Restaurant_Min_Order_By;
  restaurant_mutation_response: ResolverTypeWrapper<Restaurant_Mutation_Response>;
  restaurant_obj_rel_insert_input: Restaurant_Obj_Rel_Insert_Input;
  restaurant_on_conflict: Restaurant_On_Conflict;
  restaurant_order_by: Restaurant_Order_By;
  restaurant_pk_columns_input: Restaurant_Pk_Columns_Input;
  restaurant_select_column: Restaurant_Select_Column;
  restaurant_set_input: Restaurant_Set_Input;
  restaurant_stddev_fields: ResolverTypeWrapper<Restaurant_Stddev_Fields>;
  restaurant_stddev_order_by: Restaurant_Stddev_Order_By;
  restaurant_stddev_pop_fields: ResolverTypeWrapper<Restaurant_Stddev_Pop_Fields>;
  restaurant_stddev_pop_order_by: Restaurant_Stddev_Pop_Order_By;
  restaurant_stddev_samp_fields: ResolverTypeWrapper<Restaurant_Stddev_Samp_Fields>;
  restaurant_stddev_samp_order_by: Restaurant_Stddev_Samp_Order_By;
  restaurant_sum_fields: ResolverTypeWrapper<Restaurant_Sum_Fields>;
  restaurant_sum_order_by: Restaurant_Sum_Order_By;
  restaurant_update_column: Restaurant_Update_Column;
  restaurant_var_pop_fields: ResolverTypeWrapper<Restaurant_Var_Pop_Fields>;
  restaurant_var_pop_order_by: Restaurant_Var_Pop_Order_By;
  restaurant_var_samp_fields: ResolverTypeWrapper<Restaurant_Var_Samp_Fields>;
  restaurant_var_samp_order_by: Restaurant_Var_Samp_Order_By;
  restaurant_variance_fields: ResolverTypeWrapper<Restaurant_Variance_Fields>;
  restaurant_variance_order_by: Restaurant_Variance_Order_By;
  restaurants_visited_entity: ResolverTypeWrapper<Restaurants_Visited_Entity>;
  restaurants_visited_entity_aggregate: ResolverTypeWrapper<Restaurants_Visited_Entity_Aggregate>;
  restaurants_visited_entity_aggregate_fields: ResolverTypeWrapper<Restaurants_Visited_Entity_Aggregate_Fields>;
  restaurants_visited_entity_aggregate_order_by: Restaurants_Visited_Entity_Aggregate_Order_By;
  restaurants_visited_entity_arr_rel_insert_input: Restaurants_Visited_Entity_Arr_Rel_Insert_Input;
  restaurants_visited_entity_avg_fields: ResolverTypeWrapper<Restaurants_Visited_Entity_Avg_Fields>;
  restaurants_visited_entity_avg_order_by: Restaurants_Visited_Entity_Avg_Order_By;
  restaurants_visited_entity_bool_exp: Restaurants_Visited_Entity_Bool_Exp;
  restaurants_visited_entity_constraint: Restaurants_Visited_Entity_Constraint;
  restaurants_visited_entity_inc_input: Restaurants_Visited_Entity_Inc_Input;
  restaurants_visited_entity_insert_input: Restaurants_Visited_Entity_Insert_Input;
  restaurants_visited_entity_max_fields: ResolverTypeWrapper<Restaurants_Visited_Entity_Max_Fields>;
  restaurants_visited_entity_max_order_by: Restaurants_Visited_Entity_Max_Order_By;
  restaurants_visited_entity_min_fields: ResolverTypeWrapper<Restaurants_Visited_Entity_Min_Fields>;
  restaurants_visited_entity_min_order_by: Restaurants_Visited_Entity_Min_Order_By;
  restaurants_visited_entity_mutation_response: ResolverTypeWrapper<Restaurants_Visited_Entity_Mutation_Response>;
  restaurants_visited_entity_obj_rel_insert_input: Restaurants_Visited_Entity_Obj_Rel_Insert_Input;
  restaurants_visited_entity_on_conflict: Restaurants_Visited_Entity_On_Conflict;
  restaurants_visited_entity_order_by: Restaurants_Visited_Entity_Order_By;
  restaurants_visited_entity_pk_columns_input: Restaurants_Visited_Entity_Pk_Columns_Input;
  restaurants_visited_entity_select_column: Restaurants_Visited_Entity_Select_Column;
  restaurants_visited_entity_set_input: Restaurants_Visited_Entity_Set_Input;
  restaurants_visited_entity_stddev_fields: ResolverTypeWrapper<Restaurants_Visited_Entity_Stddev_Fields>;
  restaurants_visited_entity_stddev_order_by: Restaurants_Visited_Entity_Stddev_Order_By;
  restaurants_visited_entity_stddev_pop_fields: ResolverTypeWrapper<Restaurants_Visited_Entity_Stddev_Pop_Fields>;
  restaurants_visited_entity_stddev_pop_order_by: Restaurants_Visited_Entity_Stddev_Pop_Order_By;
  restaurants_visited_entity_stddev_samp_fields: ResolverTypeWrapper<Restaurants_Visited_Entity_Stddev_Samp_Fields>;
  restaurants_visited_entity_stddev_samp_order_by: Restaurants_Visited_Entity_Stddev_Samp_Order_By;
  restaurants_visited_entity_sum_fields: ResolverTypeWrapper<Restaurants_Visited_Entity_Sum_Fields>;
  restaurants_visited_entity_sum_order_by: Restaurants_Visited_Entity_Sum_Order_By;
  restaurants_visited_entity_update_column: Restaurants_Visited_Entity_Update_Column;
  restaurants_visited_entity_var_pop_fields: ResolverTypeWrapper<Restaurants_Visited_Entity_Var_Pop_Fields>;
  restaurants_visited_entity_var_pop_order_by: Restaurants_Visited_Entity_Var_Pop_Order_By;
  restaurants_visited_entity_var_samp_fields: ResolverTypeWrapper<Restaurants_Visited_Entity_Var_Samp_Fields>;
  restaurants_visited_entity_var_samp_order_by: Restaurants_Visited_Entity_Var_Samp_Order_By;
  restaurants_visited_entity_variance_fields: ResolverTypeWrapper<Restaurants_Visited_Entity_Variance_Fields>;
  restaurants_visited_entity_variance_order_by: Restaurants_Visited_Entity_Variance_Order_By;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamp: ResolverTypeWrapper<Scalars['timestamp']>;
  timestamp_comparison_exp: Timestamp_Comparison_Exp;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  user: ResolverTypeWrapper<User>;
  user_aggregate: ResolverTypeWrapper<User_Aggregate>;
  user_aggregate_fields: ResolverTypeWrapper<User_Aggregate_Fields>;
  user_aggregate_order_by: User_Aggregate_Order_By;
  user_arr_rel_insert_input: User_Arr_Rel_Insert_Input;
  user_avg_fields: ResolverTypeWrapper<User_Avg_Fields>;
  user_avg_order_by: User_Avg_Order_By;
  user_bool_exp: User_Bool_Exp;
  user_constraint: User_Constraint;
  user_device: ResolverTypeWrapper<User_Device>;
  user_device_aggregate: ResolverTypeWrapper<User_Device_Aggregate>;
  user_device_aggregate_fields: ResolverTypeWrapper<User_Device_Aggregate_Fields>;
  user_device_aggregate_order_by: User_Device_Aggregate_Order_By;
  user_device_arr_rel_insert_input: User_Device_Arr_Rel_Insert_Input;
  user_device_avg_fields: ResolverTypeWrapper<User_Device_Avg_Fields>;
  user_device_avg_order_by: User_Device_Avg_Order_By;
  user_device_bool_exp: User_Device_Bool_Exp;
  user_device_constraint: User_Device_Constraint;
  user_device_inc_input: User_Device_Inc_Input;
  user_device_insert_input: User_Device_Insert_Input;
  user_device_max_fields: ResolverTypeWrapper<User_Device_Max_Fields>;
  user_device_max_order_by: User_Device_Max_Order_By;
  user_device_min_fields: ResolverTypeWrapper<User_Device_Min_Fields>;
  user_device_min_order_by: User_Device_Min_Order_By;
  user_device_mutation_response: ResolverTypeWrapper<User_Device_Mutation_Response>;
  user_device_obj_rel_insert_input: User_Device_Obj_Rel_Insert_Input;
  user_device_on_conflict: User_Device_On_Conflict;
  user_device_order_by: User_Device_Order_By;
  user_device_pk_columns_input: User_Device_Pk_Columns_Input;
  user_device_select_column: User_Device_Select_Column;
  user_device_set_input: User_Device_Set_Input;
  user_device_stddev_fields: ResolverTypeWrapper<User_Device_Stddev_Fields>;
  user_device_stddev_order_by: User_Device_Stddev_Order_By;
  user_device_stddev_pop_fields: ResolverTypeWrapper<User_Device_Stddev_Pop_Fields>;
  user_device_stddev_pop_order_by: User_Device_Stddev_Pop_Order_By;
  user_device_stddev_samp_fields: ResolverTypeWrapper<User_Device_Stddev_Samp_Fields>;
  user_device_stddev_samp_order_by: User_Device_Stddev_Samp_Order_By;
  user_device_sum_fields: ResolverTypeWrapper<User_Device_Sum_Fields>;
  user_device_sum_order_by: User_Device_Sum_Order_By;
  user_device_update_column: User_Device_Update_Column;
  user_device_var_pop_fields: ResolverTypeWrapper<User_Device_Var_Pop_Fields>;
  user_device_var_pop_order_by: User_Device_Var_Pop_Order_By;
  user_device_var_samp_fields: ResolverTypeWrapper<User_Device_Var_Samp_Fields>;
  user_device_var_samp_order_by: User_Device_Var_Samp_Order_By;
  user_device_variance_fields: ResolverTypeWrapper<User_Device_Variance_Fields>;
  user_device_variance_order_by: User_Device_Variance_Order_By;
  user_inc_input: User_Inc_Input;
  user_insert_input: User_Insert_Input;
  user_max_fields: ResolverTypeWrapper<User_Max_Fields>;
  user_max_order_by: User_Max_Order_By;
  user_min_fields: ResolverTypeWrapper<User_Min_Fields>;
  user_min_order_by: User_Min_Order_By;
  user_mutation_response: ResolverTypeWrapper<User_Mutation_Response>;
  user_obj_rel_insert_input: User_Obj_Rel_Insert_Input;
  user_on_conflict: User_On_Conflict;
  user_order_by: User_Order_By;
  user_pk_columns_input: User_Pk_Columns_Input;
  user_select_column: User_Select_Column;
  user_set_input: User_Set_Input;
  user_stddev_fields: ResolverTypeWrapper<User_Stddev_Fields>;
  user_stddev_order_by: User_Stddev_Order_By;
  user_stddev_pop_fields: ResolverTypeWrapper<User_Stddev_Pop_Fields>;
  user_stddev_pop_order_by: User_Stddev_Pop_Order_By;
  user_stddev_samp_fields: ResolverTypeWrapper<User_Stddev_Samp_Fields>;
  user_stddev_samp_order_by: User_Stddev_Samp_Order_By;
  user_sum_fields: ResolverTypeWrapper<User_Sum_Fields>;
  user_sum_order_by: User_Sum_Order_By;
  user_update_column: User_Update_Column;
  user_var_pop_fields: ResolverTypeWrapper<User_Var_Pop_Fields>;
  user_var_pop_order_by: User_Var_Pop_Order_By;
  user_var_samp_fields: ResolverTypeWrapper<User_Var_Samp_Fields>;
  user_var_samp_order_by: User_Var_Samp_Order_By;
  user_variance_fields: ResolverTypeWrapper<User_Variance_Fields>;
  user_variance_order_by: User_Variance_Order_By;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Boolean: Scalars['Boolean'];
  Int_comparison_exp: Int_Comparison_Exp;
  Int: Scalars['Int'];
  LoginResponse: LoginResponse;
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  _food_contains_enum: Scalars['_food_contains_enum'];
  _food_contains_enum_comparison_exp: _Food_Contains_Enum_Comparison_Exp;
  _int4: Scalars['_int4'];
  _int4_comparison_exp: _Int4_Comparison_Exp;
  _varchar: Scalars['_varchar'];
  _varchar_comparison_exp: _Varchar_Comparison_Exp;
  authenticated: Authenticated;
  authenticated_aggregate: Authenticated_Aggregate;
  authenticated_aggregate_fields: Authenticated_Aggregate_Fields;
  authenticated_aggregate_order_by: Authenticated_Aggregate_Order_By;
  authenticated_arr_rel_insert_input: Authenticated_Arr_Rel_Insert_Input;
  authenticated_avg_fields: Authenticated_Avg_Fields;
  Float: Scalars['Float'];
  authenticated_avg_order_by: Authenticated_Avg_Order_By;
  authenticated_bool_exp: Authenticated_Bool_Exp;
  authenticated_inc_input: Authenticated_Inc_Input;
  authenticated_insert_input: Authenticated_Insert_Input;
  authenticated_max_fields: Authenticated_Max_Fields;
  authenticated_max_order_by: Authenticated_Max_Order_By;
  authenticated_min_fields: Authenticated_Min_Fields;
  authenticated_min_order_by: Authenticated_Min_Order_By;
  authenticated_mutation_response: Authenticated_Mutation_Response;
  authenticated_obj_rel_insert_input: Authenticated_Obj_Rel_Insert_Input;
  authenticated_on_conflict: Authenticated_On_Conflict;
  authenticated_order_by: Authenticated_Order_By;
  authenticated_pk_columns_input: Authenticated_Pk_Columns_Input;
  authenticated_set_input: Authenticated_Set_Input;
  authenticated_stddev_fields: Authenticated_Stddev_Fields;
  authenticated_stddev_order_by: Authenticated_Stddev_Order_By;
  authenticated_stddev_pop_fields: Authenticated_Stddev_Pop_Fields;
  authenticated_stddev_pop_order_by: Authenticated_Stddev_Pop_Order_By;
  authenticated_stddev_samp_fields: Authenticated_Stddev_Samp_Fields;
  authenticated_stddev_samp_order_by: Authenticated_Stddev_Samp_Order_By;
  authenticated_sum_fields: Authenticated_Sum_Fields;
  authenticated_sum_order_by: Authenticated_Sum_Order_By;
  authenticated_var_pop_fields: Authenticated_Var_Pop_Fields;
  authenticated_var_pop_order_by: Authenticated_Var_Pop_Order_By;
  authenticated_var_samp_fields: Authenticated_Var_Samp_Fields;
  authenticated_var_samp_order_by: Authenticated_Var_Samp_Order_By;
  authenticated_variance_fields: Authenticated_Variance_Fields;
  authenticated_variance_order_by: Authenticated_Variance_Order_By;
  contact: Contact;
  contact_aggregate: Contact_Aggregate;
  contact_aggregate_fields: Contact_Aggregate_Fields;
  contact_aggregate_order_by: Contact_Aggregate_Order_By;
  contact_arr_rel_insert_input: Contact_Arr_Rel_Insert_Input;
  contact_avg_fields: Contact_Avg_Fields;
  contact_avg_order_by: Contact_Avg_Order_By;
  contact_bool_exp: Contact_Bool_Exp;
  contact_inc_input: Contact_Inc_Input;
  contact_insert_input: Contact_Insert_Input;
  contact_max_fields: Contact_Max_Fields;
  contact_max_order_by: Contact_Max_Order_By;
  contact_min_fields: Contact_Min_Fields;
  contact_min_order_by: Contact_Min_Order_By;
  contact_mutation_response: Contact_Mutation_Response;
  contact_obj_rel_insert_input: Contact_Obj_Rel_Insert_Input;
  contact_on_conflict: Contact_On_Conflict;
  contact_order_by: Contact_Order_By;
  contact_pk_columns_input: Contact_Pk_Columns_Input;
  contact_set_input: Contact_Set_Input;
  contact_status_enum: Scalars['contact_status_enum'];
  contact_status_enum_comparison_exp: Contact_Status_Enum_Comparison_Exp;
  contact_stddev_fields: Contact_Stddev_Fields;
  contact_stddev_order_by: Contact_Stddev_Order_By;
  contact_stddev_pop_fields: Contact_Stddev_Pop_Fields;
  contact_stddev_pop_order_by: Contact_Stddev_Pop_Order_By;
  contact_stddev_samp_fields: Contact_Stddev_Samp_Fields;
  contact_stddev_samp_order_by: Contact_Stddev_Samp_Order_By;
  contact_sum_fields: Contact_Sum_Fields;
  contact_sum_order_by: Contact_Sum_Order_By;
  contact_var_pop_fields: Contact_Var_Pop_Fields;
  contact_var_pop_order_by: Contact_Var_Pop_Order_By;
  contact_var_samp_fields: Contact_Var_Samp_Fields;
  contact_var_samp_order_by: Contact_Var_Samp_Order_By;
  contact_variance_fields: Contact_Variance_Fields;
  contact_variance_order_by: Contact_Variance_Order_By;
  cuisine: Cuisine;
  cuisine_aggregate: Cuisine_Aggregate;
  cuisine_aggregate_fields: Cuisine_Aggregate_Fields;
  cuisine_aggregate_order_by: Cuisine_Aggregate_Order_By;
  cuisine_arr_rel_insert_input: Cuisine_Arr_Rel_Insert_Input;
  cuisine_avg_fields: Cuisine_Avg_Fields;
  cuisine_avg_order_by: Cuisine_Avg_Order_By;
  cuisine_bool_exp: Cuisine_Bool_Exp;
  cuisine_inc_input: Cuisine_Inc_Input;
  cuisine_insert_input: Cuisine_Insert_Input;
  cuisine_max_fields: Cuisine_Max_Fields;
  cuisine_max_order_by: Cuisine_Max_Order_By;
  cuisine_min_fields: Cuisine_Min_Fields;
  cuisine_min_order_by: Cuisine_Min_Order_By;
  cuisine_mutation_response: Cuisine_Mutation_Response;
  cuisine_obj_rel_insert_input: Cuisine_Obj_Rel_Insert_Input;
  cuisine_on_conflict: Cuisine_On_Conflict;
  cuisine_order_by: Cuisine_Order_By;
  cuisine_pk_columns_input: Cuisine_Pk_Columns_Input;
  cuisine_set_input: Cuisine_Set_Input;
  cuisine_stddev_fields: Cuisine_Stddev_Fields;
  cuisine_stddev_order_by: Cuisine_Stddev_Order_By;
  cuisine_stddev_pop_fields: Cuisine_Stddev_Pop_Fields;
  cuisine_stddev_pop_order_by: Cuisine_Stddev_Pop_Order_By;
  cuisine_stddev_samp_fields: Cuisine_Stddev_Samp_Fields;
  cuisine_stddev_samp_order_by: Cuisine_Stddev_Samp_Order_By;
  cuisine_sum_fields: Cuisine_Sum_Fields;
  cuisine_sum_order_by: Cuisine_Sum_Order_By;
  cuisine_var_pop_fields: Cuisine_Var_Pop_Fields;
  cuisine_var_pop_order_by: Cuisine_Var_Pop_Order_By;
  cuisine_var_samp_fields: Cuisine_Var_Samp_Fields;
  cuisine_var_samp_order_by: Cuisine_Var_Samp_Order_By;
  cuisine_variance_fields: Cuisine_Variance_Fields;
  cuisine_variance_order_by: Cuisine_Variance_Order_By;
  favorite_item_entity: Favorite_Item_Entity;
  favorite_item_entity_aggregate: Favorite_Item_Entity_Aggregate;
  favorite_item_entity_aggregate_fields: Favorite_Item_Entity_Aggregate_Fields;
  favorite_item_entity_aggregate_order_by: Favorite_Item_Entity_Aggregate_Order_By;
  favorite_item_entity_arr_rel_insert_input: Favorite_Item_Entity_Arr_Rel_Insert_Input;
  favorite_item_entity_avg_fields: Favorite_Item_Entity_Avg_Fields;
  favorite_item_entity_avg_order_by: Favorite_Item_Entity_Avg_Order_By;
  favorite_item_entity_bool_exp: Favorite_Item_Entity_Bool_Exp;
  favorite_item_entity_inc_input: Favorite_Item_Entity_Inc_Input;
  favorite_item_entity_insert_input: Favorite_Item_Entity_Insert_Input;
  favorite_item_entity_max_fields: Favorite_Item_Entity_Max_Fields;
  favorite_item_entity_max_order_by: Favorite_Item_Entity_Max_Order_By;
  favorite_item_entity_min_fields: Favorite_Item_Entity_Min_Fields;
  favorite_item_entity_min_order_by: Favorite_Item_Entity_Min_Order_By;
  favorite_item_entity_mutation_response: Favorite_Item_Entity_Mutation_Response;
  favorite_item_entity_obj_rel_insert_input: Favorite_Item_Entity_Obj_Rel_Insert_Input;
  favorite_item_entity_on_conflict: Favorite_Item_Entity_On_Conflict;
  favorite_item_entity_order_by: Favorite_Item_Entity_Order_By;
  favorite_item_entity_pk_columns_input: Favorite_Item_Entity_Pk_Columns_Input;
  favorite_item_entity_set_input: Favorite_Item_Entity_Set_Input;
  favorite_item_entity_stddev_fields: Favorite_Item_Entity_Stddev_Fields;
  favorite_item_entity_stddev_order_by: Favorite_Item_Entity_Stddev_Order_By;
  favorite_item_entity_stddev_pop_fields: Favorite_Item_Entity_Stddev_Pop_Fields;
  favorite_item_entity_stddev_pop_order_by: Favorite_Item_Entity_Stddev_Pop_Order_By;
  favorite_item_entity_stddev_samp_fields: Favorite_Item_Entity_Stddev_Samp_Fields;
  favorite_item_entity_stddev_samp_order_by: Favorite_Item_Entity_Stddev_Samp_Order_By;
  favorite_item_entity_sum_fields: Favorite_Item_Entity_Sum_Fields;
  favorite_item_entity_sum_order_by: Favorite_Item_Entity_Sum_Order_By;
  favorite_item_entity_var_pop_fields: Favorite_Item_Entity_Var_Pop_Fields;
  favorite_item_entity_var_pop_order_by: Favorite_Item_Entity_Var_Pop_Order_By;
  favorite_item_entity_var_samp_fields: Favorite_Item_Entity_Var_Samp_Fields;
  favorite_item_entity_var_samp_order_by: Favorite_Item_Entity_Var_Samp_Order_By;
  favorite_item_entity_variance_fields: Favorite_Item_Entity_Variance_Fields;
  favorite_item_entity_variance_order_by: Favorite_Item_Entity_Variance_Order_By;
  float8: Scalars['float8'];
  float8_comparison_exp: Float8_Comparison_Exp;
  food_item: Food_Item;
  food_item_aggregate: Food_Item_Aggregate;
  food_item_aggregate_fields: Food_Item_Aggregate_Fields;
  food_item_aggregate_order_by: Food_Item_Aggregate_Order_By;
  food_item_arr_rel_insert_input: Food_Item_Arr_Rel_Insert_Input;
  food_item_avg_fields: Food_Item_Avg_Fields;
  food_item_avg_order_by: Food_Item_Avg_Order_By;
  food_item_bool_exp: Food_Item_Bool_Exp;
  food_item_inc_input: Food_Item_Inc_Input;
  food_item_insert_input: Food_Item_Insert_Input;
  food_item_max_fields: Food_Item_Max_Fields;
  food_item_max_order_by: Food_Item_Max_Order_By;
  food_item_media: Food_Item_Media;
  food_item_media_aggregate: Food_Item_Media_Aggregate;
  food_item_media_aggregate_fields: Food_Item_Media_Aggregate_Fields;
  food_item_media_aggregate_order_by: Food_Item_Media_Aggregate_Order_By;
  food_item_media_arr_rel_insert_input: Food_Item_Media_Arr_Rel_Insert_Input;
  food_item_media_avg_fields: Food_Item_Media_Avg_Fields;
  food_item_media_avg_order_by: Food_Item_Media_Avg_Order_By;
  food_item_media_bool_exp: Food_Item_Media_Bool_Exp;
  food_item_media_inc_input: Food_Item_Media_Inc_Input;
  food_item_media_insert_input: Food_Item_Media_Insert_Input;
  food_item_media_max_fields: Food_Item_Media_Max_Fields;
  food_item_media_max_order_by: Food_Item_Media_Max_Order_By;
  food_item_media_min_fields: Food_Item_Media_Min_Fields;
  food_item_media_min_order_by: Food_Item_Media_Min_Order_By;
  food_item_media_mutation_response: Food_Item_Media_Mutation_Response;
  food_item_media_obj_rel_insert_input: Food_Item_Media_Obj_Rel_Insert_Input;
  food_item_media_on_conflict: Food_Item_Media_On_Conflict;
  food_item_media_order_by: Food_Item_Media_Order_By;
  food_item_media_pk_columns_input: Food_Item_Media_Pk_Columns_Input;
  food_item_media_set_input: Food_Item_Media_Set_Input;
  food_item_media_stddev_fields: Food_Item_Media_Stddev_Fields;
  food_item_media_stddev_order_by: Food_Item_Media_Stddev_Order_By;
  food_item_media_stddev_pop_fields: Food_Item_Media_Stddev_Pop_Fields;
  food_item_media_stddev_pop_order_by: Food_Item_Media_Stddev_Pop_Order_By;
  food_item_media_stddev_samp_fields: Food_Item_Media_Stddev_Samp_Fields;
  food_item_media_stddev_samp_order_by: Food_Item_Media_Stddev_Samp_Order_By;
  food_item_media_sum_fields: Food_Item_Media_Sum_Fields;
  food_item_media_sum_order_by: Food_Item_Media_Sum_Order_By;
  food_item_media_type_enum: Scalars['food_item_media_type_enum'];
  food_item_media_type_enum_comparison_exp: Food_Item_Media_Type_Enum_Comparison_Exp;
  food_item_media_var_pop_fields: Food_Item_Media_Var_Pop_Fields;
  food_item_media_var_pop_order_by: Food_Item_Media_Var_Pop_Order_By;
  food_item_media_var_samp_fields: Food_Item_Media_Var_Samp_Fields;
  food_item_media_var_samp_order_by: Food_Item_Media_Var_Samp_Order_By;
  food_item_media_variance_fields: Food_Item_Media_Variance_Fields;
  food_item_media_variance_order_by: Food_Item_Media_Variance_Order_By;
  food_item_min_fields: Food_Item_Min_Fields;
  food_item_min_order_by: Food_Item_Min_Order_By;
  food_item_mutation_response: Food_Item_Mutation_Response;
  food_item_obj_rel_insert_input: Food_Item_Obj_Rel_Insert_Input;
  food_item_on_conflict: Food_Item_On_Conflict;
  food_item_order_by: Food_Item_Order_By;
  food_item_pk_columns_input: Food_Item_Pk_Columns_Input;
  food_item_set_input: Food_Item_Set_Input;
  food_item_stddev_fields: Food_Item_Stddev_Fields;
  food_item_stddev_order_by: Food_Item_Stddev_Order_By;
  food_item_stddev_pop_fields: Food_Item_Stddev_Pop_Fields;
  food_item_stddev_pop_order_by: Food_Item_Stddev_Pop_Order_By;
  food_item_stddev_samp_fields: Food_Item_Stddev_Samp_Fields;
  food_item_stddev_samp_order_by: Food_Item_Stddev_Samp_Order_By;
  food_item_sum_fields: Food_Item_Sum_Fields;
  food_item_sum_order_by: Food_Item_Sum_Order_By;
  food_item_var_pop_fields: Food_Item_Var_Pop_Fields;
  food_item_var_pop_order_by: Food_Item_Var_Pop_Order_By;
  food_item_var_samp_fields: Food_Item_Var_Samp_Fields;
  food_item_var_samp_order_by: Food_Item_Var_Samp_Order_By;
  food_item_variance_fields: Food_Item_Variance_Fields;
  food_item_variance_order_by: Food_Item_Variance_Order_By;
  game: Game;
  game_aggregate: Game_Aggregate;
  game_aggregate_fields: Game_Aggregate_Fields;
  game_aggregate_order_by: Game_Aggregate_Order_By;
  game_arr_rel_insert_input: Game_Arr_Rel_Insert_Input;
  game_avg_fields: Game_Avg_Fields;
  game_avg_order_by: Game_Avg_Order_By;
  game_bool_exp: Game_Bool_Exp;
  game_choice: Game_Choice;
  game_choice_aggregate: Game_Choice_Aggregate;
  game_choice_aggregate_fields: Game_Choice_Aggregate_Fields;
  game_choice_aggregate_order_by: Game_Choice_Aggregate_Order_By;
  game_choice_arr_rel_insert_input: Game_Choice_Arr_Rel_Insert_Input;
  game_choice_avg_fields: Game_Choice_Avg_Fields;
  game_choice_avg_order_by: Game_Choice_Avg_Order_By;
  game_choice_bool_exp: Game_Choice_Bool_Exp;
  game_choice_inc_input: Game_Choice_Inc_Input;
  game_choice_insert_input: Game_Choice_Insert_Input;
  game_choice_max_fields: Game_Choice_Max_Fields;
  game_choice_max_order_by: Game_Choice_Max_Order_By;
  game_choice_min_fields: Game_Choice_Min_Fields;
  game_choice_min_order_by: Game_Choice_Min_Order_By;
  game_choice_mutation_response: Game_Choice_Mutation_Response;
  game_choice_obj_rel_insert_input: Game_Choice_Obj_Rel_Insert_Input;
  game_choice_on_conflict: Game_Choice_On_Conflict;
  game_choice_order_by: Game_Choice_Order_By;
  game_choice_pk_columns_input: Game_Choice_Pk_Columns_Input;
  game_choice_set_input: Game_Choice_Set_Input;
  game_choice_status_enum: Scalars['game_choice_status_enum'];
  game_choice_status_enum_comparison_exp: Game_Choice_Status_Enum_Comparison_Exp;
  game_choice_stddev_fields: Game_Choice_Stddev_Fields;
  game_choice_stddev_order_by: Game_Choice_Stddev_Order_By;
  game_choice_stddev_pop_fields: Game_Choice_Stddev_Pop_Fields;
  game_choice_stddev_pop_order_by: Game_Choice_Stddev_Pop_Order_By;
  game_choice_stddev_samp_fields: Game_Choice_Stddev_Samp_Fields;
  game_choice_stddev_samp_order_by: Game_Choice_Stddev_Samp_Order_By;
  game_choice_sum_fields: Game_Choice_Sum_Fields;
  game_choice_sum_order_by: Game_Choice_Sum_Order_By;
  game_choice_var_pop_fields: Game_Choice_Var_Pop_Fields;
  game_choice_var_pop_order_by: Game_Choice_Var_Pop_Order_By;
  game_choice_var_samp_fields: Game_Choice_Var_Samp_Fields;
  game_choice_var_samp_order_by: Game_Choice_Var_Samp_Order_By;
  game_choice_variance_fields: Game_Choice_Variance_Fields;
  game_choice_variance_order_by: Game_Choice_Variance_Order_By;
  game_cuisine: Game_Cuisine;
  game_cuisine_aggregate: Game_Cuisine_Aggregate;
  game_cuisine_aggregate_fields: Game_Cuisine_Aggregate_Fields;
  game_cuisine_aggregate_order_by: Game_Cuisine_Aggregate_Order_By;
  game_cuisine_arr_rel_insert_input: Game_Cuisine_Arr_Rel_Insert_Input;
  game_cuisine_avg_fields: Game_Cuisine_Avg_Fields;
  game_cuisine_avg_order_by: Game_Cuisine_Avg_Order_By;
  game_cuisine_bool_exp: Game_Cuisine_Bool_Exp;
  game_cuisine_inc_input: Game_Cuisine_Inc_Input;
  game_cuisine_insert_input: Game_Cuisine_Insert_Input;
  game_cuisine_max_fields: Game_Cuisine_Max_Fields;
  game_cuisine_max_order_by: Game_Cuisine_Max_Order_By;
  game_cuisine_min_fields: Game_Cuisine_Min_Fields;
  game_cuisine_min_order_by: Game_Cuisine_Min_Order_By;
  game_cuisine_mutation_response: Game_Cuisine_Mutation_Response;
  game_cuisine_obj_rel_insert_input: Game_Cuisine_Obj_Rel_Insert_Input;
  game_cuisine_on_conflict: Game_Cuisine_On_Conflict;
  game_cuisine_order_by: Game_Cuisine_Order_By;
  game_cuisine_pk_columns_input: Game_Cuisine_Pk_Columns_Input;
  game_cuisine_set_input: Game_Cuisine_Set_Input;
  game_cuisine_stddev_fields: Game_Cuisine_Stddev_Fields;
  game_cuisine_stddev_order_by: Game_Cuisine_Stddev_Order_By;
  game_cuisine_stddev_pop_fields: Game_Cuisine_Stddev_Pop_Fields;
  game_cuisine_stddev_pop_order_by: Game_Cuisine_Stddev_Pop_Order_By;
  game_cuisine_stddev_samp_fields: Game_Cuisine_Stddev_Samp_Fields;
  game_cuisine_stddev_samp_order_by: Game_Cuisine_Stddev_Samp_Order_By;
  game_cuisine_sum_fields: Game_Cuisine_Sum_Fields;
  game_cuisine_sum_order_by: Game_Cuisine_Sum_Order_By;
  game_cuisine_var_pop_fields: Game_Cuisine_Var_Pop_Fields;
  game_cuisine_var_pop_order_by: Game_Cuisine_Var_Pop_Order_By;
  game_cuisine_var_samp_fields: Game_Cuisine_Var_Samp_Fields;
  game_cuisine_var_samp_order_by: Game_Cuisine_Var_Samp_Order_By;
  game_cuisine_variance_fields: Game_Cuisine_Variance_Fields;
  game_cuisine_variance_order_by: Game_Cuisine_Variance_Order_By;
  game_cuisines_filter_mode_enum: Scalars['game_cuisines_filter_mode_enum'];
  game_cuisines_filter_mode_enum_comparison_exp: Game_Cuisines_Filter_Mode_Enum_Comparison_Exp;
  game_game_status_enum: Scalars['game_game_status_enum'];
  game_game_status_enum_comparison_exp: Game_Game_Status_Enum_Comparison_Exp;
  game_inc_input: Game_Inc_Input;
  game_insert_input: Game_Insert_Input;
  game_max_fields: Game_Max_Fields;
  game_max_order_by: Game_Max_Order_By;
  game_min_fields: Game_Min_Fields;
  game_min_order_by: Game_Min_Order_By;
  game_mutation_response: Game_Mutation_Response;
  game_obj_rel_insert_input: Game_Obj_Rel_Insert_Input;
  game_on_conflict: Game_On_Conflict;
  game_order_by: Game_Order_By;
  game_pk_columns_input: Game_Pk_Columns_Input;
  game_player: Game_Player;
  game_player_aggregate: Game_Player_Aggregate;
  game_player_aggregate_fields: Game_Player_Aggregate_Fields;
  game_player_aggregate_order_by: Game_Player_Aggregate_Order_By;
  game_player_arr_rel_insert_input: Game_Player_Arr_Rel_Insert_Input;
  game_player_avg_fields: Game_Player_Avg_Fields;
  game_player_avg_order_by: Game_Player_Avg_Order_By;
  game_player_bool_exp: Game_Player_Bool_Exp;
  game_player_inc_input: Game_Player_Inc_Input;
  game_player_insert_input: Game_Player_Insert_Input;
  game_player_max_fields: Game_Player_Max_Fields;
  game_player_max_order_by: Game_Player_Max_Order_By;
  game_player_min_fields: Game_Player_Min_Fields;
  game_player_min_order_by: Game_Player_Min_Order_By;
  game_player_mutation_response: Game_Player_Mutation_Response;
  game_player_obj_rel_insert_input: Game_Player_Obj_Rel_Insert_Input;
  game_player_on_conflict: Game_Player_On_Conflict;
  game_player_order_by: Game_Player_Order_By;
  game_player_pk_columns_input: Game_Player_Pk_Columns_Input;
  game_player_set_input: Game_Player_Set_Input;
  game_player_stddev_fields: Game_Player_Stddev_Fields;
  game_player_stddev_order_by: Game_Player_Stddev_Order_By;
  game_player_stddev_pop_fields: Game_Player_Stddev_Pop_Fields;
  game_player_stddev_pop_order_by: Game_Player_Stddev_Pop_Order_By;
  game_player_stddev_samp_fields: Game_Player_Stddev_Samp_Fields;
  game_player_stddev_samp_order_by: Game_Player_Stddev_Samp_Order_By;
  game_player_sum_fields: Game_Player_Sum_Fields;
  game_player_sum_order_by: Game_Player_Sum_Order_By;
  game_player_var_pop_fields: Game_Player_Var_Pop_Fields;
  game_player_var_pop_order_by: Game_Player_Var_Pop_Order_By;
  game_player_var_samp_fields: Game_Player_Var_Samp_Fields;
  game_player_var_samp_order_by: Game_Player_Var_Samp_Order_By;
  game_player_variance_fields: Game_Player_Variance_Fields;
  game_player_variance_order_by: Game_Player_Variance_Order_By;
  game_set_input: Game_Set_Input;
  game_stddev_fields: Game_Stddev_Fields;
  game_stddev_order_by: Game_Stddev_Order_By;
  game_stddev_pop_fields: Game_Stddev_Pop_Fields;
  game_stddev_pop_order_by: Game_Stddev_Pop_Order_By;
  game_stddev_samp_fields: Game_Stddev_Samp_Fields;
  game_stddev_samp_order_by: Game_Stddev_Samp_Order_By;
  game_sum_fields: Game_Sum_Fields;
  game_sum_order_by: Game_Sum_Order_By;
  game_unit_of_measure_enum: Scalars['game_unit_of_measure_enum'];
  game_unit_of_measure_enum_comparison_exp: Game_Unit_Of_Measure_Enum_Comparison_Exp;
  game_var_pop_fields: Game_Var_Pop_Fields;
  game_var_pop_order_by: Game_Var_Pop_Order_By;
  game_var_samp_fields: Game_Var_Samp_Fields;
  game_var_samp_order_by: Game_Var_Samp_Order_By;
  game_variance_fields: Game_Variance_Fields;
  game_variance_order_by: Game_Variance_Order_By;
  json: Scalars['json'];
  json_comparison_exp: Json_Comparison_Exp;
  log: Log;
  log_aggregate: Log_Aggregate;
  log_aggregate_fields: Log_Aggregate_Fields;
  log_aggregate_order_by: Log_Aggregate_Order_By;
  log_arr_rel_insert_input: Log_Arr_Rel_Insert_Input;
  log_avg_fields: Log_Avg_Fields;
  log_avg_order_by: Log_Avg_Order_By;
  log_bool_exp: Log_Bool_Exp;
  log_inc_input: Log_Inc_Input;
  log_insert_input: Log_Insert_Input;
  log_max_fields: Log_Max_Fields;
  log_max_order_by: Log_Max_Order_By;
  log_min_fields: Log_Min_Fields;
  log_min_order_by: Log_Min_Order_By;
  log_mutation_response: Log_Mutation_Response;
  log_obj_rel_insert_input: Log_Obj_Rel_Insert_Input;
  log_on_conflict: Log_On_Conflict;
  log_order_by: Log_Order_By;
  log_pk_columns_input: Log_Pk_Columns_Input;
  log_set_input: Log_Set_Input;
  log_stddev_fields: Log_Stddev_Fields;
  log_stddev_order_by: Log_Stddev_Order_By;
  log_stddev_pop_fields: Log_Stddev_Pop_Fields;
  log_stddev_pop_order_by: Log_Stddev_Pop_Order_By;
  log_stddev_samp_fields: Log_Stddev_Samp_Fields;
  log_stddev_samp_order_by: Log_Stddev_Samp_Order_By;
  log_sum_fields: Log_Sum_Fields;
  log_sum_order_by: Log_Sum_Order_By;
  log_var_pop_fields: Log_Var_Pop_Fields;
  log_var_pop_order_by: Log_Var_Pop_Order_By;
  log_var_samp_fields: Log_Var_Samp_Fields;
  log_var_samp_order_by: Log_Var_Samp_Order_By;
  log_variance_fields: Log_Variance_Fields;
  log_variance_order_by: Log_Variance_Order_By;
  media_author: Media_Author;
  media_author_aggregate: Media_Author_Aggregate;
  media_author_aggregate_fields: Media_Author_Aggregate_Fields;
  media_author_aggregate_order_by: Media_Author_Aggregate_Order_By;
  media_author_arr_rel_insert_input: Media_Author_Arr_Rel_Insert_Input;
  media_author_avg_fields: Media_Author_Avg_Fields;
  media_author_avg_order_by: Media_Author_Avg_Order_By;
  media_author_bool_exp: Media_Author_Bool_Exp;
  media_author_inc_input: Media_Author_Inc_Input;
  media_author_insert_input: Media_Author_Insert_Input;
  media_author_max_fields: Media_Author_Max_Fields;
  media_author_max_order_by: Media_Author_Max_Order_By;
  media_author_min_fields: Media_Author_Min_Fields;
  media_author_min_order_by: Media_Author_Min_Order_By;
  media_author_mutation_response: Media_Author_Mutation_Response;
  media_author_obj_rel_insert_input: Media_Author_Obj_Rel_Insert_Input;
  media_author_on_conflict: Media_Author_On_Conflict;
  media_author_order_by: Media_Author_Order_By;
  media_author_pk_columns_input: Media_Author_Pk_Columns_Input;
  media_author_set_input: Media_Author_Set_Input;
  media_author_stddev_fields: Media_Author_Stddev_Fields;
  media_author_stddev_order_by: Media_Author_Stddev_Order_By;
  media_author_stddev_pop_fields: Media_Author_Stddev_Pop_Fields;
  media_author_stddev_pop_order_by: Media_Author_Stddev_Pop_Order_By;
  media_author_stddev_samp_fields: Media_Author_Stddev_Samp_Fields;
  media_author_stddev_samp_order_by: Media_Author_Stddev_Samp_Order_By;
  media_author_sum_fields: Media_Author_Sum_Fields;
  media_author_sum_order_by: Media_Author_Sum_Order_By;
  media_author_var_pop_fields: Media_Author_Var_Pop_Fields;
  media_author_var_pop_order_by: Media_Author_Var_Pop_Order_By;
  media_author_var_samp_fields: Media_Author_Var_Samp_Fields;
  media_author_var_samp_order_by: Media_Author_Var_Samp_Order_By;
  media_author_variance_fields: Media_Author_Variance_Fields;
  media_author_variance_order_by: Media_Author_Variance_Order_By;
  menu: Menu;
  menu_aggregate: Menu_Aggregate;
  menu_aggregate_fields: Menu_Aggregate_Fields;
  menu_aggregate_order_by: Menu_Aggregate_Order_By;
  menu_arr_rel_insert_input: Menu_Arr_Rel_Insert_Input;
  menu_avg_fields: Menu_Avg_Fields;
  menu_avg_order_by: Menu_Avg_Order_By;
  menu_bool_exp: Menu_Bool_Exp;
  menu_inc_input: Menu_Inc_Input;
  menu_insert_input: Menu_Insert_Input;
  menu_max_fields: Menu_Max_Fields;
  menu_max_order_by: Menu_Max_Order_By;
  menu_min_fields: Menu_Min_Fields;
  menu_min_order_by: Menu_Min_Order_By;
  menu_mutation_response: Menu_Mutation_Response;
  menu_obj_rel_insert_input: Menu_Obj_Rel_Insert_Input;
  menu_on_conflict: Menu_On_Conflict;
  menu_order_by: Menu_Order_By;
  menu_pk_columns_input: Menu_Pk_Columns_Input;
  menu_section: Menu_Section;
  menu_section_aggregate: Menu_Section_Aggregate;
  menu_section_aggregate_fields: Menu_Section_Aggregate_Fields;
  menu_section_aggregate_order_by: Menu_Section_Aggregate_Order_By;
  menu_section_arr_rel_insert_input: Menu_Section_Arr_Rel_Insert_Input;
  menu_section_avg_fields: Menu_Section_Avg_Fields;
  menu_section_avg_order_by: Menu_Section_Avg_Order_By;
  menu_section_bool_exp: Menu_Section_Bool_Exp;
  menu_section_inc_input: Menu_Section_Inc_Input;
  menu_section_insert_input: Menu_Section_Insert_Input;
  menu_section_max_fields: Menu_Section_Max_Fields;
  menu_section_max_order_by: Menu_Section_Max_Order_By;
  menu_section_min_fields: Menu_Section_Min_Fields;
  menu_section_min_order_by: Menu_Section_Min_Order_By;
  menu_section_mutation_response: Menu_Section_Mutation_Response;
  menu_section_obj_rel_insert_input: Menu_Section_Obj_Rel_Insert_Input;
  menu_section_on_conflict: Menu_Section_On_Conflict;
  menu_section_order_by: Menu_Section_Order_By;
  menu_section_pk_columns_input: Menu_Section_Pk_Columns_Input;
  menu_section_set_input: Menu_Section_Set_Input;
  menu_section_stddev_fields: Menu_Section_Stddev_Fields;
  menu_section_stddev_order_by: Menu_Section_Stddev_Order_By;
  menu_section_stddev_pop_fields: Menu_Section_Stddev_Pop_Fields;
  menu_section_stddev_pop_order_by: Menu_Section_Stddev_Pop_Order_By;
  menu_section_stddev_samp_fields: Menu_Section_Stddev_Samp_Fields;
  menu_section_stddev_samp_order_by: Menu_Section_Stddev_Samp_Order_By;
  menu_section_sum_fields: Menu_Section_Sum_Fields;
  menu_section_sum_order_by: Menu_Section_Sum_Order_By;
  menu_section_var_pop_fields: Menu_Section_Var_Pop_Fields;
  menu_section_var_pop_order_by: Menu_Section_Var_Pop_Order_By;
  menu_section_var_samp_fields: Menu_Section_Var_Samp_Fields;
  menu_section_var_samp_order_by: Menu_Section_Var_Samp_Order_By;
  menu_section_variance_fields: Menu_Section_Variance_Fields;
  menu_section_variance_order_by: Menu_Section_Variance_Order_By;
  menu_set_input: Menu_Set_Input;
  menu_stddev_fields: Menu_Stddev_Fields;
  menu_stddev_order_by: Menu_Stddev_Order_By;
  menu_stddev_pop_fields: Menu_Stddev_Pop_Fields;
  menu_stddev_pop_order_by: Menu_Stddev_Pop_Order_By;
  menu_stddev_samp_fields: Menu_Stddev_Samp_Fields;
  menu_stddev_samp_order_by: Menu_Stddev_Samp_Order_By;
  menu_sum_fields: Menu_Sum_Fields;
  menu_sum_order_by: Menu_Sum_Order_By;
  menu_var_pop_fields: Menu_Var_Pop_Fields;
  menu_var_pop_order_by: Menu_Var_Pop_Order_By;
  menu_var_samp_fields: Menu_Var_Samp_Fields;
  menu_var_samp_order_by: Menu_Var_Samp_Order_By;
  menu_variance_fields: Menu_Variance_Fields;
  menu_variance_order_by: Menu_Variance_Order_By;
  metric: Metric;
  metric_aggregate: Metric_Aggregate;
  metric_aggregate_fields: Metric_Aggregate_Fields;
  metric_aggregate_order_by: Metric_Aggregate_Order_By;
  metric_arr_rel_insert_input: Metric_Arr_Rel_Insert_Input;
  metric_avg_fields: Metric_Avg_Fields;
  metric_avg_order_by: Metric_Avg_Order_By;
  metric_bool_exp: Metric_Bool_Exp;
  metric_inc_input: Metric_Inc_Input;
  metric_insert_input: Metric_Insert_Input;
  metric_max_fields: Metric_Max_Fields;
  metric_max_order_by: Metric_Max_Order_By;
  metric_min_fields: Metric_Min_Fields;
  metric_min_order_by: Metric_Min_Order_By;
  metric_mutation_response: Metric_Mutation_Response;
  metric_obj_rel_insert_input: Metric_Obj_Rel_Insert_Input;
  metric_on_conflict: Metric_On_Conflict;
  metric_order_by: Metric_Order_By;
  metric_pk_columns_input: Metric_Pk_Columns_Input;
  metric_set_input: Metric_Set_Input;
  metric_stddev_fields: Metric_Stddev_Fields;
  metric_stddev_order_by: Metric_Stddev_Order_By;
  metric_stddev_pop_fields: Metric_Stddev_Pop_Fields;
  metric_stddev_pop_order_by: Metric_Stddev_Pop_Order_By;
  metric_stddev_samp_fields: Metric_Stddev_Samp_Fields;
  metric_stddev_samp_order_by: Metric_Stddev_Samp_Order_By;
  metric_sum_fields: Metric_Sum_Fields;
  metric_sum_order_by: Metric_Sum_Order_By;
  metric_var_pop_fields: Metric_Var_Pop_Fields;
  metric_var_pop_order_by: Metric_Var_Pop_Order_By;
  metric_var_samp_fields: Metric_Var_Samp_Fields;
  metric_var_samp_order_by: Metric_Var_Samp_Order_By;
  metric_variance_fields: Metric_Variance_Fields;
  metric_variance_order_by: Metric_Variance_Order_By;
  mutation_root: {};
  query_root: {};
  restaurant: Restaurant;
  restaurant_aggregate: Restaurant_Aggregate;
  restaurant_aggregate_fields: Restaurant_Aggregate_Fields;
  restaurant_aggregate_order_by: Restaurant_Aggregate_Order_By;
  restaurant_arr_rel_insert_input: Restaurant_Arr_Rel_Insert_Input;
  restaurant_avg_fields: Restaurant_Avg_Fields;
  restaurant_avg_order_by: Restaurant_Avg_Order_By;
  restaurant_bool_exp: Restaurant_Bool_Exp;
  restaurant_chain: Restaurant_Chain;
  restaurant_chain_aggregate: Restaurant_Chain_Aggregate;
  restaurant_chain_aggregate_fields: Restaurant_Chain_Aggregate_Fields;
  restaurant_chain_aggregate_order_by: Restaurant_Chain_Aggregate_Order_By;
  restaurant_chain_arr_rel_insert_input: Restaurant_Chain_Arr_Rel_Insert_Input;
  restaurant_chain_avg_fields: Restaurant_Chain_Avg_Fields;
  restaurant_chain_avg_order_by: Restaurant_Chain_Avg_Order_By;
  restaurant_chain_bool_exp: Restaurant_Chain_Bool_Exp;
  restaurant_chain_inc_input: Restaurant_Chain_Inc_Input;
  restaurant_chain_insert_input: Restaurant_Chain_Insert_Input;
  restaurant_chain_max_fields: Restaurant_Chain_Max_Fields;
  restaurant_chain_max_order_by: Restaurant_Chain_Max_Order_By;
  restaurant_chain_min_fields: Restaurant_Chain_Min_Fields;
  restaurant_chain_min_order_by: Restaurant_Chain_Min_Order_By;
  restaurant_chain_mutation_response: Restaurant_Chain_Mutation_Response;
  restaurant_chain_obj_rel_insert_input: Restaurant_Chain_Obj_Rel_Insert_Input;
  restaurant_chain_on_conflict: Restaurant_Chain_On_Conflict;
  restaurant_chain_order_by: Restaurant_Chain_Order_By;
  restaurant_chain_pk_columns_input: Restaurant_Chain_Pk_Columns_Input;
  restaurant_chain_set_input: Restaurant_Chain_Set_Input;
  restaurant_chain_stddev_fields: Restaurant_Chain_Stddev_Fields;
  restaurant_chain_stddev_order_by: Restaurant_Chain_Stddev_Order_By;
  restaurant_chain_stddev_pop_fields: Restaurant_Chain_Stddev_Pop_Fields;
  restaurant_chain_stddev_pop_order_by: Restaurant_Chain_Stddev_Pop_Order_By;
  restaurant_chain_stddev_samp_fields: Restaurant_Chain_Stddev_Samp_Fields;
  restaurant_chain_stddev_samp_order_by: Restaurant_Chain_Stddev_Samp_Order_By;
  restaurant_chain_sum_fields: Restaurant_Chain_Sum_Fields;
  restaurant_chain_sum_order_by: Restaurant_Chain_Sum_Order_By;
  restaurant_chain_var_pop_fields: Restaurant_Chain_Var_Pop_Fields;
  restaurant_chain_var_pop_order_by: Restaurant_Chain_Var_Pop_Order_By;
  restaurant_chain_var_samp_fields: Restaurant_Chain_Var_Samp_Fields;
  restaurant_chain_var_samp_order_by: Restaurant_Chain_Var_Samp_Order_By;
  restaurant_chain_variance_fields: Restaurant_Chain_Variance_Fields;
  restaurant_chain_variance_order_by: Restaurant_Chain_Variance_Order_By;
  restaurant_cuisine: Restaurant_Cuisine;
  restaurant_cuisine_aggregate: Restaurant_Cuisine_Aggregate;
  restaurant_cuisine_aggregate_fields: Restaurant_Cuisine_Aggregate_Fields;
  restaurant_cuisine_aggregate_order_by: Restaurant_Cuisine_Aggregate_Order_By;
  restaurant_cuisine_arr_rel_insert_input: Restaurant_Cuisine_Arr_Rel_Insert_Input;
  restaurant_cuisine_avg_fields: Restaurant_Cuisine_Avg_Fields;
  restaurant_cuisine_avg_order_by: Restaurant_Cuisine_Avg_Order_By;
  restaurant_cuisine_bool_exp: Restaurant_Cuisine_Bool_Exp;
  restaurant_cuisine_inc_input: Restaurant_Cuisine_Inc_Input;
  restaurant_cuisine_insert_input: Restaurant_Cuisine_Insert_Input;
  restaurant_cuisine_max_fields: Restaurant_Cuisine_Max_Fields;
  restaurant_cuisine_max_order_by: Restaurant_Cuisine_Max_Order_By;
  restaurant_cuisine_min_fields: Restaurant_Cuisine_Min_Fields;
  restaurant_cuisine_min_order_by: Restaurant_Cuisine_Min_Order_By;
  restaurant_cuisine_mutation_response: Restaurant_Cuisine_Mutation_Response;
  restaurant_cuisine_obj_rel_insert_input: Restaurant_Cuisine_Obj_Rel_Insert_Input;
  restaurant_cuisine_on_conflict: Restaurant_Cuisine_On_Conflict;
  restaurant_cuisine_order_by: Restaurant_Cuisine_Order_By;
  restaurant_cuisine_pk_columns_input: Restaurant_Cuisine_Pk_Columns_Input;
  restaurant_cuisine_set_input: Restaurant_Cuisine_Set_Input;
  restaurant_cuisine_stddev_fields: Restaurant_Cuisine_Stddev_Fields;
  restaurant_cuisine_stddev_order_by: Restaurant_Cuisine_Stddev_Order_By;
  restaurant_cuisine_stddev_pop_fields: Restaurant_Cuisine_Stddev_Pop_Fields;
  restaurant_cuisine_stddev_pop_order_by: Restaurant_Cuisine_Stddev_Pop_Order_By;
  restaurant_cuisine_stddev_samp_fields: Restaurant_Cuisine_Stddev_Samp_Fields;
  restaurant_cuisine_stddev_samp_order_by: Restaurant_Cuisine_Stddev_Samp_Order_By;
  restaurant_cuisine_sum_fields: Restaurant_Cuisine_Sum_Fields;
  restaurant_cuisine_sum_order_by: Restaurant_Cuisine_Sum_Order_By;
  restaurant_cuisine_var_pop_fields: Restaurant_Cuisine_Var_Pop_Fields;
  restaurant_cuisine_var_pop_order_by: Restaurant_Cuisine_Var_Pop_Order_By;
  restaurant_cuisine_var_samp_fields: Restaurant_Cuisine_Var_Samp_Fields;
  restaurant_cuisine_var_samp_order_by: Restaurant_Cuisine_Var_Samp_Order_By;
  restaurant_cuisine_variance_fields: Restaurant_Cuisine_Variance_Fields;
  restaurant_cuisine_variance_order_by: Restaurant_Cuisine_Variance_Order_By;
  restaurant_inc_input: Restaurant_Inc_Input;
  restaurant_insert_input: Restaurant_Insert_Input;
  restaurant_item: Restaurant_Item;
  restaurant_item_aggregate: Restaurant_Item_Aggregate;
  restaurant_item_aggregate_fields: Restaurant_Item_Aggregate_Fields;
  restaurant_item_aggregate_order_by: Restaurant_Item_Aggregate_Order_By;
  restaurant_item_arr_rel_insert_input: Restaurant_Item_Arr_Rel_Insert_Input;
  restaurant_item_avg_fields: Restaurant_Item_Avg_Fields;
  restaurant_item_avg_order_by: Restaurant_Item_Avg_Order_By;
  restaurant_item_bool_exp: Restaurant_Item_Bool_Exp;
  restaurant_item_inc_input: Restaurant_Item_Inc_Input;
  restaurant_item_insert_input: Restaurant_Item_Insert_Input;
  restaurant_item_max_fields: Restaurant_Item_Max_Fields;
  restaurant_item_max_order_by: Restaurant_Item_Max_Order_By;
  restaurant_item_min_fields: Restaurant_Item_Min_Fields;
  restaurant_item_min_order_by: Restaurant_Item_Min_Order_By;
  restaurant_item_mutation_response: Restaurant_Item_Mutation_Response;
  restaurant_item_obj_rel_insert_input: Restaurant_Item_Obj_Rel_Insert_Input;
  restaurant_item_on_conflict: Restaurant_Item_On_Conflict;
  restaurant_item_order_by: Restaurant_Item_Order_By;
  restaurant_item_pk_columns_input: Restaurant_Item_Pk_Columns_Input;
  restaurant_item_set_input: Restaurant_Item_Set_Input;
  restaurant_item_stddev_fields: Restaurant_Item_Stddev_Fields;
  restaurant_item_stddev_order_by: Restaurant_Item_Stddev_Order_By;
  restaurant_item_stddev_pop_fields: Restaurant_Item_Stddev_Pop_Fields;
  restaurant_item_stddev_pop_order_by: Restaurant_Item_Stddev_Pop_Order_By;
  restaurant_item_stddev_samp_fields: Restaurant_Item_Stddev_Samp_Fields;
  restaurant_item_stddev_samp_order_by: Restaurant_Item_Stddev_Samp_Order_By;
  restaurant_item_sum_fields: Restaurant_Item_Sum_Fields;
  restaurant_item_sum_order_by: Restaurant_Item_Sum_Order_By;
  restaurant_item_var_pop_fields: Restaurant_Item_Var_Pop_Fields;
  restaurant_item_var_pop_order_by: Restaurant_Item_Var_Pop_Order_By;
  restaurant_item_var_samp_fields: Restaurant_Item_Var_Samp_Fields;
  restaurant_item_var_samp_order_by: Restaurant_Item_Var_Samp_Order_By;
  restaurant_item_variance_fields: Restaurant_Item_Variance_Fields;
  restaurant_item_variance_order_by: Restaurant_Item_Variance_Order_By;
  restaurant_max_fields: Restaurant_Max_Fields;
  restaurant_max_order_by: Restaurant_Max_Order_By;
  restaurant_min_fields: Restaurant_Min_Fields;
  restaurant_min_order_by: Restaurant_Min_Order_By;
  restaurant_mutation_response: Restaurant_Mutation_Response;
  restaurant_obj_rel_insert_input: Restaurant_Obj_Rel_Insert_Input;
  restaurant_on_conflict: Restaurant_On_Conflict;
  restaurant_order_by: Restaurant_Order_By;
  restaurant_pk_columns_input: Restaurant_Pk_Columns_Input;
  restaurant_set_input: Restaurant_Set_Input;
  restaurant_stddev_fields: Restaurant_Stddev_Fields;
  restaurant_stddev_order_by: Restaurant_Stddev_Order_By;
  restaurant_stddev_pop_fields: Restaurant_Stddev_Pop_Fields;
  restaurant_stddev_pop_order_by: Restaurant_Stddev_Pop_Order_By;
  restaurant_stddev_samp_fields: Restaurant_Stddev_Samp_Fields;
  restaurant_stddev_samp_order_by: Restaurant_Stddev_Samp_Order_By;
  restaurant_sum_fields: Restaurant_Sum_Fields;
  restaurant_sum_order_by: Restaurant_Sum_Order_By;
  restaurant_var_pop_fields: Restaurant_Var_Pop_Fields;
  restaurant_var_pop_order_by: Restaurant_Var_Pop_Order_By;
  restaurant_var_samp_fields: Restaurant_Var_Samp_Fields;
  restaurant_var_samp_order_by: Restaurant_Var_Samp_Order_By;
  restaurant_variance_fields: Restaurant_Variance_Fields;
  restaurant_variance_order_by: Restaurant_Variance_Order_By;
  restaurants_visited_entity: Restaurants_Visited_Entity;
  restaurants_visited_entity_aggregate: Restaurants_Visited_Entity_Aggregate;
  restaurants_visited_entity_aggregate_fields: Restaurants_Visited_Entity_Aggregate_Fields;
  restaurants_visited_entity_aggregate_order_by: Restaurants_Visited_Entity_Aggregate_Order_By;
  restaurants_visited_entity_arr_rel_insert_input: Restaurants_Visited_Entity_Arr_Rel_Insert_Input;
  restaurants_visited_entity_avg_fields: Restaurants_Visited_Entity_Avg_Fields;
  restaurants_visited_entity_avg_order_by: Restaurants_Visited_Entity_Avg_Order_By;
  restaurants_visited_entity_bool_exp: Restaurants_Visited_Entity_Bool_Exp;
  restaurants_visited_entity_inc_input: Restaurants_Visited_Entity_Inc_Input;
  restaurants_visited_entity_insert_input: Restaurants_Visited_Entity_Insert_Input;
  restaurants_visited_entity_max_fields: Restaurants_Visited_Entity_Max_Fields;
  restaurants_visited_entity_max_order_by: Restaurants_Visited_Entity_Max_Order_By;
  restaurants_visited_entity_min_fields: Restaurants_Visited_Entity_Min_Fields;
  restaurants_visited_entity_min_order_by: Restaurants_Visited_Entity_Min_Order_By;
  restaurants_visited_entity_mutation_response: Restaurants_Visited_Entity_Mutation_Response;
  restaurants_visited_entity_obj_rel_insert_input: Restaurants_Visited_Entity_Obj_Rel_Insert_Input;
  restaurants_visited_entity_on_conflict: Restaurants_Visited_Entity_On_Conflict;
  restaurants_visited_entity_order_by: Restaurants_Visited_Entity_Order_By;
  restaurants_visited_entity_pk_columns_input: Restaurants_Visited_Entity_Pk_Columns_Input;
  restaurants_visited_entity_set_input: Restaurants_Visited_Entity_Set_Input;
  restaurants_visited_entity_stddev_fields: Restaurants_Visited_Entity_Stddev_Fields;
  restaurants_visited_entity_stddev_order_by: Restaurants_Visited_Entity_Stddev_Order_By;
  restaurants_visited_entity_stddev_pop_fields: Restaurants_Visited_Entity_Stddev_Pop_Fields;
  restaurants_visited_entity_stddev_pop_order_by: Restaurants_Visited_Entity_Stddev_Pop_Order_By;
  restaurants_visited_entity_stddev_samp_fields: Restaurants_Visited_Entity_Stddev_Samp_Fields;
  restaurants_visited_entity_stddev_samp_order_by: Restaurants_Visited_Entity_Stddev_Samp_Order_By;
  restaurants_visited_entity_sum_fields: Restaurants_Visited_Entity_Sum_Fields;
  restaurants_visited_entity_sum_order_by: Restaurants_Visited_Entity_Sum_Order_By;
  restaurants_visited_entity_var_pop_fields: Restaurants_Visited_Entity_Var_Pop_Fields;
  restaurants_visited_entity_var_pop_order_by: Restaurants_Visited_Entity_Var_Pop_Order_By;
  restaurants_visited_entity_var_samp_fields: Restaurants_Visited_Entity_Var_Samp_Fields;
  restaurants_visited_entity_var_samp_order_by: Restaurants_Visited_Entity_Var_Samp_Order_By;
  restaurants_visited_entity_variance_fields: Restaurants_Visited_Entity_Variance_Fields;
  restaurants_visited_entity_variance_order_by: Restaurants_Visited_Entity_Variance_Order_By;
  subscription_root: {};
  timestamp: Scalars['timestamp'];
  timestamp_comparison_exp: Timestamp_Comparison_Exp;
  timestamptz: Scalars['timestamptz'];
  user: User;
  user_aggregate: User_Aggregate;
  user_aggregate_fields: User_Aggregate_Fields;
  user_aggregate_order_by: User_Aggregate_Order_By;
  user_arr_rel_insert_input: User_Arr_Rel_Insert_Input;
  user_avg_fields: User_Avg_Fields;
  user_avg_order_by: User_Avg_Order_By;
  user_bool_exp: User_Bool_Exp;
  user_device: User_Device;
  user_device_aggregate: User_Device_Aggregate;
  user_device_aggregate_fields: User_Device_Aggregate_Fields;
  user_device_aggregate_order_by: User_Device_Aggregate_Order_By;
  user_device_arr_rel_insert_input: User_Device_Arr_Rel_Insert_Input;
  user_device_avg_fields: User_Device_Avg_Fields;
  user_device_avg_order_by: User_Device_Avg_Order_By;
  user_device_bool_exp: User_Device_Bool_Exp;
  user_device_inc_input: User_Device_Inc_Input;
  user_device_insert_input: User_Device_Insert_Input;
  user_device_max_fields: User_Device_Max_Fields;
  user_device_max_order_by: User_Device_Max_Order_By;
  user_device_min_fields: User_Device_Min_Fields;
  user_device_min_order_by: User_Device_Min_Order_By;
  user_device_mutation_response: User_Device_Mutation_Response;
  user_device_obj_rel_insert_input: User_Device_Obj_Rel_Insert_Input;
  user_device_on_conflict: User_Device_On_Conflict;
  user_device_order_by: User_Device_Order_By;
  user_device_pk_columns_input: User_Device_Pk_Columns_Input;
  user_device_set_input: User_Device_Set_Input;
  user_device_stddev_fields: User_Device_Stddev_Fields;
  user_device_stddev_order_by: User_Device_Stddev_Order_By;
  user_device_stddev_pop_fields: User_Device_Stddev_Pop_Fields;
  user_device_stddev_pop_order_by: User_Device_Stddev_Pop_Order_By;
  user_device_stddev_samp_fields: User_Device_Stddev_Samp_Fields;
  user_device_stddev_samp_order_by: User_Device_Stddev_Samp_Order_By;
  user_device_sum_fields: User_Device_Sum_Fields;
  user_device_sum_order_by: User_Device_Sum_Order_By;
  user_device_var_pop_fields: User_Device_Var_Pop_Fields;
  user_device_var_pop_order_by: User_Device_Var_Pop_Order_By;
  user_device_var_samp_fields: User_Device_Var_Samp_Fields;
  user_device_var_samp_order_by: User_Device_Var_Samp_Order_By;
  user_device_variance_fields: User_Device_Variance_Fields;
  user_device_variance_order_by: User_Device_Variance_Order_By;
  user_inc_input: User_Inc_Input;
  user_insert_input: User_Insert_Input;
  user_max_fields: User_Max_Fields;
  user_max_order_by: User_Max_Order_By;
  user_min_fields: User_Min_Fields;
  user_min_order_by: User_Min_Order_By;
  user_mutation_response: User_Mutation_Response;
  user_obj_rel_insert_input: User_Obj_Rel_Insert_Input;
  user_on_conflict: User_On_Conflict;
  user_order_by: User_Order_By;
  user_pk_columns_input: User_Pk_Columns_Input;
  user_set_input: User_Set_Input;
  user_stddev_fields: User_Stddev_Fields;
  user_stddev_order_by: User_Stddev_Order_By;
  user_stddev_pop_fields: User_Stddev_Pop_Fields;
  user_stddev_pop_order_by: User_Stddev_Pop_Order_By;
  user_stddev_samp_fields: User_Stddev_Samp_Fields;
  user_stddev_samp_order_by: User_Stddev_Samp_Order_By;
  user_sum_fields: User_Sum_Fields;
  user_sum_order_by: User_Sum_Order_By;
  user_var_pop_fields: User_Var_Pop_Fields;
  user_var_pop_order_by: User_Var_Pop_Order_By;
  user_var_samp_fields: User_Var_Samp_Fields;
  user_var_samp_order_by: User_Var_Samp_Order_By;
  user_variance_fields: User_Variance_Fields;
  user_variance_order_by: User_Variance_Order_By;
  uuid: Scalars['uuid'];
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface _Food_Contains_EnumScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_food_contains_enum'], any> {
  name: '_food_contains_enum';
}

export interface _Int4ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_int4'], any> {
  name: '_int4';
}

export interface _VarcharScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_varchar'], any> {
  name: '_varchar';
}

export type AuthenticatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated'] = ResolversParentTypes['authenticated']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created_on?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  payload_hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_aggregate'] = ResolversParentTypes['authenticated_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['authenticated_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['authenticated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_aggregate_fields'] = ResolversParentTypes['authenticated_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['authenticated_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Authenticated_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['authenticated_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['authenticated_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['authenticated_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['authenticated_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['authenticated_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['authenticated_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['authenticated_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['authenticated_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['authenticated_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_avg_fields'] = ResolversParentTypes['authenticated_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_max_fields'] = ResolversParentTypes['authenticated_max_fields']> = {
  created_on?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  payload_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_min_fields'] = ResolversParentTypes['authenticated_min_fields']> = {
  created_on?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  payload_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_mutation_response'] = ResolversParentTypes['authenticated_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['authenticated']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_stddev_fields'] = ResolversParentTypes['authenticated_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_stddev_pop_fields'] = ResolversParentTypes['authenticated_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_stddev_samp_fields'] = ResolversParentTypes['authenticated_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_sum_fields'] = ResolversParentTypes['authenticated_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_var_pop_fields'] = ResolversParentTypes['authenticated_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_var_samp_fields'] = ResolversParentTypes['authenticated_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Authenticated_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['authenticated_variance_fields'] = ResolversParentTypes['authenticated_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact'] = ResolversParentTypes['contact']> = {
  contact?: Resolver<ResolversTypes['user'], ParentType, ContextType>;
  contact_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['contact_status_enum'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['user'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_aggregate'] = ResolversParentTypes['contact_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['contact_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['contact']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_aggregate_fields'] = ResolversParentTypes['contact_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['contact_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Contact_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['contact_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['contact_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['contact_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['contact_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['contact_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['contact_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['contact_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['contact_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['contact_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_avg_fields'] = ResolversParentTypes['contact_avg_fields']> = {
  contact_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_max_fields'] = ResolversParentTypes['contact_max_fields']> = {
  contact_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_min_fields'] = ResolversParentTypes['contact_min_fields']> = {
  contact_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_mutation_response'] = ResolversParentTypes['contact_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['contact']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface Contact_Status_EnumScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['contact_status_enum'], any> {
  name: 'contact_status_enum';
}

export type Contact_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_stddev_fields'] = ResolversParentTypes['contact_stddev_fields']> = {
  contact_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_stddev_pop_fields'] = ResolversParentTypes['contact_stddev_pop_fields']> = {
  contact_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_stddev_samp_fields'] = ResolversParentTypes['contact_stddev_samp_fields']> = {
  contact_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_sum_fields'] = ResolversParentTypes['contact_sum_fields']> = {
  contact_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_var_pop_fields'] = ResolversParentTypes['contact_var_pop_fields']> = {
  contact_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_var_samp_fields'] = ResolversParentTypes['contact_var_samp_fields']> = {
  contact_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Contact_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_variance_fields'] = ResolversParentTypes['contact_variance_fields']> = {
  contact_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CuisineResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine'] = ResolversParentTypes['cuisine']> = {
  game_cuisines?: Resolver<Array<ResolversTypes['game_cuisine']>, ParentType, ContextType, RequireFields<CuisineGame_CuisinesArgs, never>>;
  game_cuisines_aggregate?: Resolver<ResolversTypes['game_cuisine_aggregate'], ParentType, ContextType, RequireFields<CuisineGame_Cuisines_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  restaurant_cuisines?: Resolver<Array<ResolversTypes['restaurant_cuisine']>, ParentType, ContextType, RequireFields<CuisineRestaurant_CuisinesArgs, never>>;
  restaurant_cuisines_aggregate?: Resolver<ResolversTypes['restaurant_cuisine_aggregate'], ParentType, ContextType, RequireFields<CuisineRestaurant_Cuisines_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_aggregate'] = ResolversParentTypes['cuisine_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['cuisine_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['cuisine']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_aggregate_fields'] = ResolversParentTypes['cuisine_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['cuisine_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Cuisine_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['cuisine_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['cuisine_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['cuisine_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['cuisine_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['cuisine_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['cuisine_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['cuisine_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['cuisine_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['cuisine_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_avg_fields'] = ResolversParentTypes['cuisine_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_max_fields'] = ResolversParentTypes['cuisine_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_min_fields'] = ResolversParentTypes['cuisine_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_mutation_response'] = ResolversParentTypes['cuisine_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['cuisine']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_stddev_fields'] = ResolversParentTypes['cuisine_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_stddev_pop_fields'] = ResolversParentTypes['cuisine_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_stddev_samp_fields'] = ResolversParentTypes['cuisine_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_sum_fields'] = ResolversParentTypes['cuisine_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_var_pop_fields'] = ResolversParentTypes['cuisine_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_var_samp_fields'] = ResolversParentTypes['cuisine_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Cuisine_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['cuisine_variance_fields'] = ResolversParentTypes['cuisine_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity'] = ResolversParentTypes['favorite_item_entity']> = {
  foodItemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isFavorite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_aggregate'] = ResolversParentTypes['favorite_item_entity_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['favorite_item_entity_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['favorite_item_entity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_aggregate_fields'] = ResolversParentTypes['favorite_item_entity_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['favorite_item_entity_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Favorite_Item_Entity_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['favorite_item_entity_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['favorite_item_entity_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['favorite_item_entity_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['favorite_item_entity_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['favorite_item_entity_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['favorite_item_entity_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['favorite_item_entity_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['favorite_item_entity_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['favorite_item_entity_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_avg_fields'] = ResolversParentTypes['favorite_item_entity_avg_fields']> = {
  foodItemId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_max_fields'] = ResolversParentTypes['favorite_item_entity_max_fields']> = {
  foodItemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_min_fields'] = ResolversParentTypes['favorite_item_entity_min_fields']> = {
  foodItemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_mutation_response'] = ResolversParentTypes['favorite_item_entity_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['favorite_item_entity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_stddev_fields'] = ResolversParentTypes['favorite_item_entity_stddev_fields']> = {
  foodItemId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_stddev_pop_fields'] = ResolversParentTypes['favorite_item_entity_stddev_pop_fields']> = {
  foodItemId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_stddev_samp_fields'] = ResolversParentTypes['favorite_item_entity_stddev_samp_fields']> = {
  foodItemId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_sum_fields'] = ResolversParentTypes['favorite_item_entity_sum_fields']> = {
  foodItemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_var_pop_fields'] = ResolversParentTypes['favorite_item_entity_var_pop_fields']> = {
  foodItemId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_var_samp_fields'] = ResolversParentTypes['favorite_item_entity_var_samp_fields']> = {
  foodItemId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Favorite_Item_Entity_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['favorite_item_entity_variance_fields'] = ResolversParentTypes['favorite_item_entity_variance_fields']> = {
  foodItemId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface Float8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['float8'], any> {
  name: 'float8';
}

export type Food_ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item'] = ResolversParentTypes['food_item']> = {
  animal_products?: Resolver<ResolversTypes['_food_contains_enum'], ParentType, ContextType>;
  beef?: Resolver<ResolversTypes['_food_contains_enum'], ParentType, ContextType>;
  chicken?: Resolver<ResolversTypes['_food_contains_enum'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exotic?: Resolver<ResolversTypes['_food_contains_enum'], ParentType, ContextType>;
  fish?: Resolver<ResolversTypes['_food_contains_enum'], ParentType, ContextType>;
  food_item_media?: Resolver<Array<ResolversTypes['food_item_media']>, ParentType, ContextType, RequireFields<Food_ItemFood_Item_MediaArgs, never>>;
  food_item_media_aggregate?: Resolver<ResolversTypes['food_item_media_aggregate'], ParentType, ContextType, RequireFields<Food_ItemFood_Item_Media_AggregateArgs, never>>;
  gluten?: Resolver<ResolversTypes['_food_contains_enum'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_game_ready?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pork?: Resolver<ResolversTypes['_food_contains_enum'], ParentType, ContextType>;
  restaurant_items?: Resolver<Array<ResolversTypes['restaurant_item']>, ParentType, ContextType, RequireFields<Food_ItemRestaurant_ItemsArgs, never>>;
  restaurant_items_aggregate?: Resolver<ResolversTypes['restaurant_item_aggregate'], ParentType, ContextType, RequireFields<Food_ItemRestaurant_Items_AggregateArgs, never>>;
  shellfish?: Resolver<ResolversTypes['_food_contains_enum'], ParentType, ContextType>;
  turkey?: Resolver<ResolversTypes['_food_contains_enum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_aggregate'] = ResolversParentTypes['food_item_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['food_item_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['food_item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_aggregate_fields'] = ResolversParentTypes['food_item_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['food_item_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Food_Item_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['food_item_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['food_item_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['food_item_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['food_item_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['food_item_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['food_item_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['food_item_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['food_item_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['food_item_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_avg_fields'] = ResolversParentTypes['food_item_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_max_fields'] = ResolversParentTypes['food_item_max_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_MediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media'] = ResolversParentTypes['food_item_media']> = {
  author_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  food_item?: Resolver<ResolversTypes['food_item'], ParentType, ContextType>;
  food_item_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  game_choices?: Resolver<Array<ResolversTypes['game_choice']>, ParentType, ContextType, RequireFields<Food_Item_MediaGame_ChoicesArgs, never>>;
  game_choices_aggregate?: Resolver<ResolversTypes['game_choice_aggregate'], ParentType, ContextType, RequireFields<Food_Item_MediaGame_Choices_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  media_author?: Resolver<ResolversTypes['media_author'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['food_item_media_type_enum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_aggregate'] = ResolversParentTypes['food_item_media_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['food_item_media_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['food_item_media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_aggregate_fields'] = ResolversParentTypes['food_item_media_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['food_item_media_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Food_Item_Media_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['food_item_media_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['food_item_media_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['food_item_media_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['food_item_media_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['food_item_media_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['food_item_media_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['food_item_media_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['food_item_media_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['food_item_media_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_avg_fields'] = ResolversParentTypes['food_item_media_avg_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_max_fields'] = ResolversParentTypes['food_item_media_max_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  food_item_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_min_fields'] = ResolversParentTypes['food_item_media_min_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  food_item_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_mutation_response'] = ResolversParentTypes['food_item_media_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['food_item_media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_stddev_fields'] = ResolversParentTypes['food_item_media_stddev_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_stddev_pop_fields'] = ResolversParentTypes['food_item_media_stddev_pop_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_stddev_samp_fields'] = ResolversParentTypes['food_item_media_stddev_samp_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_sum_fields'] = ResolversParentTypes['food_item_media_sum_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  food_item_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface Food_Item_Media_Type_EnumScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['food_item_media_type_enum'], any> {
  name: 'food_item_media_type_enum';
}

export type Food_Item_Media_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_var_pop_fields'] = ResolversParentTypes['food_item_media_var_pop_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_var_samp_fields'] = ResolversParentTypes['food_item_media_var_samp_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Media_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_media_variance_fields'] = ResolversParentTypes['food_item_media_variance_fields']> = {
  author_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_min_fields'] = ResolversParentTypes['food_item_min_fields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_mutation_response'] = ResolversParentTypes['food_item_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['food_item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_stddev_fields'] = ResolversParentTypes['food_item_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_stddev_pop_fields'] = ResolversParentTypes['food_item_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_stddev_samp_fields'] = ResolversParentTypes['food_item_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_sum_fields'] = ResolversParentTypes['food_item_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_var_pop_fields'] = ResolversParentTypes['food_item_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_var_samp_fields'] = ResolversParentTypes['food_item_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Food_Item_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['food_item_variance_fields'] = ResolversParentTypes['food_item_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GameResolvers<ContextType = any, ParentType extends ResolversParentTypes['game'] = ResolversParentTypes['game']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cuisines_filter_mode?: Resolver<ResolversTypes['game_cuisines_filter_mode_enum'], ParentType, ContextType>;
  eat_time?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  game_choices?: Resolver<Array<ResolversTypes['game_choice']>, ParentType, ContextType, RequireFields<GameGame_ChoicesArgs, never>>;
  game_choices_aggregate?: Resolver<ResolversTypes['game_choice_aggregate'], ParentType, ContextType, RequireFields<GameGame_Choices_AggregateArgs, never>>;
  game_creator?: Resolver<ResolversTypes['user'], ParentType, ContextType>;
  game_creator_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  game_cuisines?: Resolver<Array<ResolversTypes['game_cuisine']>, ParentType, ContextType, RequireFields<GameGame_CuisinesArgs, never>>;
  game_cuisines_aggregate?: Resolver<ResolversTypes['game_cuisine_aggregate'], ParentType, ContextType, RequireFields<GameGame_Cuisines_AggregateArgs, never>>;
  game_players?: Resolver<Array<ResolversTypes['game_player']>, ParentType, ContextType, RequireFields<GameGame_PlayersArgs, never>>;
  game_players_aggregate?: Resolver<ResolversTypes['game_player_aggregate'], ParentType, ContextType, RequireFields<GameGame_Players_AggregateArgs, never>>;
  game_status?: Resolver<ResolversTypes['game_game_status_enum'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['float8'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['float8'], ParentType, ContextType>;
  menus_filter?: Resolver<ResolversTypes['_varchar'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prices?: Resolver<Maybe<ResolversTypes['_int4']>, ParentType, ContextType>;
  search_magnitude?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time_created?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  unit_of_measure?: Resolver<ResolversTypes['game_unit_of_measure_enum'], ParentType, ContextType>;
  winning_restaurant?: Resolver<Maybe<ResolversTypes['restaurant']>, ParentType, ContextType>;
  winning_restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_aggregate'] = ResolversParentTypes['game_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['game_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['game']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_aggregate_fields'] = ResolversParentTypes['game_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['game_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Game_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['game_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['game_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['game_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['game_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['game_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['game_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['game_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['game_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['game_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_avg_fields'] = ResolversParentTypes['game_avg_fields']> = {
  game_creator_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  search_magnitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  winning_restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_ChoiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice'] = ResolversParentTypes['game_choice']> = {
  chosen_media_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  food_item_medium?: Resolver<Maybe<ResolversTypes['food_item_media']>, ParentType, ContextType>;
  game?: Resolver<ResolversTypes['game'], ParentType, ContextType>;
  game_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  game_player?: Resolver<ResolversTypes['game_player'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pick_rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  player_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  restaurant?: Resolver<ResolversTypes['restaurant'], ParentType, ContextType>;
  restaurant_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  restaurant_item?: Resolver<ResolversTypes['restaurant_item'], ParentType, ContextType>;
  restaurant_item_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['game_choice_status_enum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_aggregate'] = ResolversParentTypes['game_choice_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['game_choice_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['game_choice']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_aggregate_fields'] = ResolversParentTypes['game_choice_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['game_choice_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Game_Choice_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['game_choice_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['game_choice_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['game_choice_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['game_choice_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['game_choice_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['game_choice_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['game_choice_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['game_choice_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['game_choice_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_avg_fields'] = ResolversParentTypes['game_choice_avg_fields']> = {
  chosen_media_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pick_rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  player_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_max_fields'] = ResolversParentTypes['game_choice_max_fields']> = {
  chosen_media_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pick_rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  player_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurant_item_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_min_fields'] = ResolversParentTypes['game_choice_min_fields']> = {
  chosen_media_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pick_rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  player_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurant_item_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_mutation_response'] = ResolversParentTypes['game_choice_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['game_choice']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface Game_Choice_Status_EnumScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['game_choice_status_enum'], any> {
  name: 'game_choice_status_enum';
}

export type Game_Choice_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_stddev_fields'] = ResolversParentTypes['game_choice_stddev_fields']> = {
  chosen_media_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pick_rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  player_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_stddev_pop_fields'] = ResolversParentTypes['game_choice_stddev_pop_fields']> = {
  chosen_media_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pick_rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  player_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_stddev_samp_fields'] = ResolversParentTypes['game_choice_stddev_samp_fields']> = {
  chosen_media_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pick_rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  player_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_sum_fields'] = ResolversParentTypes['game_choice_sum_fields']> = {
  chosen_media_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pick_rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  player_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurant_item_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_var_pop_fields'] = ResolversParentTypes['game_choice_var_pop_fields']> = {
  chosen_media_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pick_rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  player_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_var_samp_fields'] = ResolversParentTypes['game_choice_var_samp_fields']> = {
  chosen_media_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pick_rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  player_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Choice_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_choice_variance_fields'] = ResolversParentTypes['game_choice_variance_fields']> = {
  chosen_media_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pick_rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  player_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_CuisineResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine'] = ResolversParentTypes['game_cuisine']> = {
  cuisine?: Resolver<ResolversTypes['cuisine'], ParentType, ContextType>;
  cuisine_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  game?: Resolver<ResolversTypes['game'], ParentType, ContextType>;
  game_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_aggregate'] = ResolversParentTypes['game_cuisine_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['game_cuisine_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['game_cuisine']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_aggregate_fields'] = ResolversParentTypes['game_cuisine_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['game_cuisine_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Game_Cuisine_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['game_cuisine_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['game_cuisine_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['game_cuisine_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['game_cuisine_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['game_cuisine_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['game_cuisine_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['game_cuisine_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['game_cuisine_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['game_cuisine_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_avg_fields'] = ResolversParentTypes['game_cuisine_avg_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_max_fields'] = ResolversParentTypes['game_cuisine_max_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_min_fields'] = ResolversParentTypes['game_cuisine_min_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_mutation_response'] = ResolversParentTypes['game_cuisine_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['game_cuisine']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_stddev_fields'] = ResolversParentTypes['game_cuisine_stddev_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_stddev_pop_fields'] = ResolversParentTypes['game_cuisine_stddev_pop_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_stddev_samp_fields'] = ResolversParentTypes['game_cuisine_stddev_samp_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_sum_fields'] = ResolversParentTypes['game_cuisine_sum_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_var_pop_fields'] = ResolversParentTypes['game_cuisine_var_pop_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_var_samp_fields'] = ResolversParentTypes['game_cuisine_var_samp_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Cuisine_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_cuisine_variance_fields'] = ResolversParentTypes['game_cuisine_variance_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface Game_Cuisines_Filter_Mode_EnumScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['game_cuisines_filter_mode_enum'], any> {
  name: 'game_cuisines_filter_mode_enum';
}

export interface Game_Game_Status_EnumScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['game_game_status_enum'], any> {
  name: 'game_game_status_enum';
}

export type Game_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_max_fields'] = ResolversParentTypes['game_max_fields']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eat_time?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  game_creator_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  search_magnitude?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time_created?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  winning_restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_min_fields'] = ResolversParentTypes['game_min_fields']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eat_time?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  game_creator_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  mode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  search_magnitude?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time_created?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  winning_restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_mutation_response'] = ResolversParentTypes['game_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['game']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player'] = ResolversParentTypes['game_player']> = {
  game?: Resolver<ResolversTypes['game'], ParentType, ContextType>;
  game_choices?: Resolver<Array<ResolversTypes['game_choice']>, ParentType, ContextType, RequireFields<Game_PlayerGame_ChoicesArgs, never>>;
  game_choices_aggregate?: Resolver<ResolversTypes['game_choice_aggregate'], ParentType, ContextType, RequireFields<Game_PlayerGame_Choices_AggregateArgs, never>>;
  game_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['user'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_aggregate'] = ResolversParentTypes['game_player_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['game_player_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['game_player']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_aggregate_fields'] = ResolversParentTypes['game_player_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['game_player_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Game_Player_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['game_player_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['game_player_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['game_player_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['game_player_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['game_player_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['game_player_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['game_player_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['game_player_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['game_player_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_avg_fields'] = ResolversParentTypes['game_player_avg_fields']> = {
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_max_fields'] = ResolversParentTypes['game_player_max_fields']> = {
  game_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_min_fields'] = ResolversParentTypes['game_player_min_fields']> = {
  game_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_mutation_response'] = ResolversParentTypes['game_player_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['game_player']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_stddev_fields'] = ResolversParentTypes['game_player_stddev_fields']> = {
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_stddev_pop_fields'] = ResolversParentTypes['game_player_stddev_pop_fields']> = {
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_stddev_samp_fields'] = ResolversParentTypes['game_player_stddev_samp_fields']> = {
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_sum_fields'] = ResolversParentTypes['game_player_sum_fields']> = {
  game_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_var_pop_fields'] = ResolversParentTypes['game_player_var_pop_fields']> = {
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_var_samp_fields'] = ResolversParentTypes['game_player_var_samp_fields']> = {
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Player_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_player_variance_fields'] = ResolversParentTypes['game_player_variance_fields']> = {
  game_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_stddev_fields'] = ResolversParentTypes['game_stddev_fields']> = {
  game_creator_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  search_magnitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  winning_restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_stddev_pop_fields'] = ResolversParentTypes['game_stddev_pop_fields']> = {
  game_creator_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  search_magnitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  winning_restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_stddev_samp_fields'] = ResolversParentTypes['game_stddev_samp_fields']> = {
  game_creator_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  search_magnitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  winning_restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_sum_fields'] = ResolversParentTypes['game_sum_fields']> = {
  game_creator_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  search_magnitude?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winning_restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface Game_Unit_Of_Measure_EnumScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['game_unit_of_measure_enum'], any> {
  name: 'game_unit_of_measure_enum';
}

export type Game_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_var_pop_fields'] = ResolversParentTypes['game_var_pop_fields']> = {
  game_creator_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  search_magnitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  winning_restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_var_samp_fields'] = ResolversParentTypes['game_var_samp_fields']> = {
  game_creator_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  search_magnitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  winning_restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Game_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['game_variance_fields'] = ResolversParentTypes['game_variance_fields']> = {
  game_creator_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  search_magnitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  winning_restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['json'], any> {
  name: 'json';
}

export type LogResolvers<ContextType = any, ParentType extends ResolversParentTypes['log'] = ResolversParentTypes['log']> = {
  date_created?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_aggregate'] = ResolversParentTypes['log_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['log_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['log']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_aggregate_fields'] = ResolversParentTypes['log_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['log_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Log_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['log_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['log_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['log_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['log_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['log_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['log_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['log_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['log_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['log_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_avg_fields'] = ResolversParentTypes['log_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_max_fields'] = ResolversParentTypes['log_max_fields']> = {
  date_created?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_min_fields'] = ResolversParentTypes['log_min_fields']> = {
  date_created?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_mutation_response'] = ResolversParentTypes['log_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['log']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_stddev_fields'] = ResolversParentTypes['log_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_stddev_pop_fields'] = ResolversParentTypes['log_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_stddev_samp_fields'] = ResolversParentTypes['log_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_sum_fields'] = ResolversParentTypes['log_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_var_pop_fields'] = ResolversParentTypes['log_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_var_samp_fields'] = ResolversParentTypes['log_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Log_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['log_variance_fields'] = ResolversParentTypes['log_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author'] = ResolversParentTypes['media_author']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  food_item_media?: Resolver<Array<ResolversTypes['food_item_media']>, ParentType, ContextType, RequireFields<Media_AuthorFood_Item_MediaArgs, never>>;
  food_item_media_aggregate?: Resolver<ResolversTypes['food_item_media_aggregate'], ParentType, ContextType, RequireFields<Media_AuthorFood_Item_Media_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personalWebsite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_aggregate'] = ResolversParentTypes['media_author_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['media_author_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['media_author']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_aggregate_fields'] = ResolversParentTypes['media_author_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['media_author_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Media_Author_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['media_author_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['media_author_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['media_author_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['media_author_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['media_author_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['media_author_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['media_author_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['media_author_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['media_author_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_avg_fields'] = ResolversParentTypes['media_author_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_max_fields'] = ResolversParentTypes['media_author_max_fields']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personalWebsite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_min_fields'] = ResolversParentTypes['media_author_min_fields']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  personalWebsite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_mutation_response'] = ResolversParentTypes['media_author_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['media_author']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_stddev_fields'] = ResolversParentTypes['media_author_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_stddev_pop_fields'] = ResolversParentTypes['media_author_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_stddev_samp_fields'] = ResolversParentTypes['media_author_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_sum_fields'] = ResolversParentTypes['media_author_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_var_pop_fields'] = ResolversParentTypes['media_author_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_var_samp_fields'] = ResolversParentTypes['media_author_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Media_Author_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['media_author_variance_fields'] = ResolversParentTypes['media_author_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MenuResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu'] = ResolversParentTypes['menu']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_game_ready?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  restaurant_items?: Resolver<Array<ResolversTypes['restaurant_item']>, ParentType, ContextType, RequireFields<MenuRestaurant_ItemsArgs, never>>;
  restaurant_items_aggregate?: Resolver<ResolversTypes['restaurant_item_aggregate'], ParentType, ContextType, RequireFields<MenuRestaurant_Items_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_aggregate'] = ResolversParentTypes['menu_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['menu_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['menu']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_aggregate_fields'] = ResolversParentTypes['menu_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['menu_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Menu_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['menu_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['menu_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['menu_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['menu_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['menu_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['menu_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['menu_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['menu_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['menu_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_avg_fields'] = ResolversParentTypes['menu_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_max_fields'] = ResolversParentTypes['menu_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_min_fields'] = ResolversParentTypes['menu_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_mutation_response'] = ResolversParentTypes['menu_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['menu']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_SectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section'] = ResolversParentTypes['menu_section']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_dessert?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_drink?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_game_ready?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_kids?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  restaurant_items?: Resolver<Array<ResolversTypes['restaurant_item']>, ParentType, ContextType, RequireFields<Menu_SectionRestaurant_ItemsArgs, never>>;
  restaurant_items_aggregate?: Resolver<ResolversTypes['restaurant_item_aggregate'], ParentType, ContextType, RequireFields<Menu_SectionRestaurant_Items_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_aggregate'] = ResolversParentTypes['menu_section_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['menu_section_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['menu_section']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_aggregate_fields'] = ResolversParentTypes['menu_section_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['menu_section_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Menu_Section_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['menu_section_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['menu_section_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['menu_section_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['menu_section_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['menu_section_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['menu_section_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['menu_section_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['menu_section_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['menu_section_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_avg_fields'] = ResolversParentTypes['menu_section_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_max_fields'] = ResolversParentTypes['menu_section_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_min_fields'] = ResolversParentTypes['menu_section_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_mutation_response'] = ResolversParentTypes['menu_section_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['menu_section']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_stddev_fields'] = ResolversParentTypes['menu_section_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_stddev_pop_fields'] = ResolversParentTypes['menu_section_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_stddev_samp_fields'] = ResolversParentTypes['menu_section_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_sum_fields'] = ResolversParentTypes['menu_section_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_var_pop_fields'] = ResolversParentTypes['menu_section_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_var_samp_fields'] = ResolversParentTypes['menu_section_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Section_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_section_variance_fields'] = ResolversParentTypes['menu_section_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_stddev_fields'] = ResolversParentTypes['menu_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_stddev_pop_fields'] = ResolversParentTypes['menu_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_stddev_samp_fields'] = ResolversParentTypes['menu_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_sum_fields'] = ResolversParentTypes['menu_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_var_pop_fields'] = ResolversParentTypes['menu_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_var_samp_fields'] = ResolversParentTypes['menu_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Menu_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['menu_variance_fields'] = ResolversParentTypes['menu_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MetricResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric'] = ResolversParentTypes['metric']> = {
  created_at?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_aggregate'] = ResolversParentTypes['metric_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['metric_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['metric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_aggregate_fields'] = ResolversParentTypes['metric_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['metric_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Metric_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['metric_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['metric_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['metric_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['metric_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['metric_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['metric_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['metric_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['metric_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['metric_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_avg_fields'] = ResolversParentTypes['metric_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_max_fields'] = ResolversParentTypes['metric_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_min_fields'] = ResolversParentTypes['metric_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_mutation_response'] = ResolversParentTypes['metric_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['metric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_stddev_fields'] = ResolversParentTypes['metric_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_stddev_pop_fields'] = ResolversParentTypes['metric_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_stddev_samp_fields'] = ResolversParentTypes['metric_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_sum_fields'] = ResolversParentTypes['metric_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_var_pop_fields'] = ResolversParentTypes['metric_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_var_samp_fields'] = ResolversParentTypes['metric_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Metric_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['metric_variance_fields'] = ResolversParentTypes['metric_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  Login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<Mutation_RootLoginArgs, 'identifier' | 'password'>>;
  RegisterUser?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<Mutation_RootRegisterUserArgs, 'email' | 'firstName' | 'lastName' | 'password' | 'username'>>;
  delete_authenticated?: Resolver<Maybe<ResolversTypes['authenticated_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AuthenticatedArgs, 'where'>>;
  delete_authenticated_by_pk?: Resolver<Maybe<ResolversTypes['authenticated']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Authenticated_By_PkArgs, 'id'>>;
  delete_contact?: Resolver<Maybe<ResolversTypes['contact_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ContactArgs, 'where'>>;
  delete_contact_by_pk?: Resolver<Maybe<ResolversTypes['contact']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Contact_By_PkArgs, 'id'>>;
  delete_cuisine?: Resolver<Maybe<ResolversTypes['cuisine_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CuisineArgs, 'where'>>;
  delete_cuisine_by_pk?: Resolver<Maybe<ResolversTypes['cuisine']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Cuisine_By_PkArgs, 'id'>>;
  delete_favorite_item_entity?: Resolver<Maybe<ResolversTypes['favorite_item_entity_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Favorite_Item_EntityArgs, 'where'>>;
  delete_favorite_item_entity_by_pk?: Resolver<Maybe<ResolversTypes['favorite_item_entity']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Favorite_Item_Entity_By_PkArgs, 'foodItemId' | 'userId'>>;
  delete_food_item?: Resolver<Maybe<ResolversTypes['food_item_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Food_ItemArgs, 'where'>>;
  delete_food_item_by_pk?: Resolver<Maybe<ResolversTypes['food_item']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Food_Item_By_PkArgs, 'id'>>;
  delete_food_item_media?: Resolver<Maybe<ResolversTypes['food_item_media_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Food_Item_MediaArgs, 'where'>>;
  delete_food_item_media_by_pk?: Resolver<Maybe<ResolversTypes['food_item_media']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Food_Item_Media_By_PkArgs, 'id'>>;
  delete_game?: Resolver<Maybe<ResolversTypes['game_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_GameArgs, 'where'>>;
  delete_game_by_pk?: Resolver<Maybe<ResolversTypes['game']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Game_By_PkArgs, 'id'>>;
  delete_game_choice?: Resolver<Maybe<ResolversTypes['game_choice_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Game_ChoiceArgs, 'where'>>;
  delete_game_choice_by_pk?: Resolver<Maybe<ResolversTypes['game_choice']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Game_Choice_By_PkArgs, 'id'>>;
  delete_game_cuisine?: Resolver<Maybe<ResolversTypes['game_cuisine_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Game_CuisineArgs, 'where'>>;
  delete_game_cuisine_by_pk?: Resolver<Maybe<ResolversTypes['game_cuisine']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Game_Cuisine_By_PkArgs, 'id'>>;
  delete_game_player?: Resolver<Maybe<ResolversTypes['game_player_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Game_PlayerArgs, 'where'>>;
  delete_game_player_by_pk?: Resolver<Maybe<ResolversTypes['game_player']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Game_Player_By_PkArgs, 'id'>>;
  delete_log?: Resolver<Maybe<ResolversTypes['log_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_LogArgs, 'where'>>;
  delete_log_by_pk?: Resolver<Maybe<ResolversTypes['log']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Log_By_PkArgs, 'id'>>;
  delete_media_author?: Resolver<Maybe<ResolversTypes['media_author_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Media_AuthorArgs, 'where'>>;
  delete_media_author_by_pk?: Resolver<Maybe<ResolversTypes['media_author']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Media_Author_By_PkArgs, 'id'>>;
  delete_menu?: Resolver<Maybe<ResolversTypes['menu_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_MenuArgs, 'where'>>;
  delete_menu_by_pk?: Resolver<Maybe<ResolversTypes['menu']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Menu_By_PkArgs, 'id'>>;
  delete_menu_section?: Resolver<Maybe<ResolversTypes['menu_section_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Menu_SectionArgs, 'where'>>;
  delete_menu_section_by_pk?: Resolver<Maybe<ResolversTypes['menu_section']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Menu_Section_By_PkArgs, 'id'>>;
  delete_metric?: Resolver<Maybe<ResolversTypes['metric_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_MetricArgs, 'where'>>;
  delete_metric_by_pk?: Resolver<Maybe<ResolversTypes['metric']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Metric_By_PkArgs, 'id'>>;
  delete_restaurant?: Resolver<Maybe<ResolversTypes['restaurant_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_RestaurantArgs, 'where'>>;
  delete_restaurant_by_pk?: Resolver<Maybe<ResolversTypes['restaurant']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Restaurant_By_PkArgs, 'id'>>;
  delete_restaurant_chain?: Resolver<Maybe<ResolversTypes['restaurant_chain_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Restaurant_ChainArgs, 'where'>>;
  delete_restaurant_chain_by_pk?: Resolver<Maybe<ResolversTypes['restaurant_chain']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Restaurant_Chain_By_PkArgs, 'id'>>;
  delete_restaurant_cuisine?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Restaurant_CuisineArgs, 'where'>>;
  delete_restaurant_cuisine_by_pk?: Resolver<Maybe<ResolversTypes['restaurant_cuisine']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Restaurant_Cuisine_By_PkArgs, 'id'>>;
  delete_restaurant_item?: Resolver<Maybe<ResolversTypes['restaurant_item_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Restaurant_ItemArgs, 'where'>>;
  delete_restaurant_item_by_pk?: Resolver<Maybe<ResolversTypes['restaurant_item']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Restaurant_Item_By_PkArgs, 'id'>>;
  delete_restaurants_visited_entity?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Restaurants_Visited_EntityArgs, 'where'>>;
  delete_restaurants_visited_entity_by_pk?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Restaurants_Visited_Entity_By_PkArgs, 'id'>>;
  delete_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UserArgs, 'where'>>;
  delete_user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_By_PkArgs, 'id'>>;
  delete_user_device?: Resolver<Maybe<ResolversTypes['user_device_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_DeviceArgs, 'where'>>;
  delete_user_device_by_pk?: Resolver<Maybe<ResolversTypes['user_device']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_Device_By_PkArgs, 'id'>>;
  insert_authenticated?: Resolver<Maybe<ResolversTypes['authenticated_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_AuthenticatedArgs, 'objects'>>;
  insert_authenticated_one?: Resolver<Maybe<ResolversTypes['authenticated']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Authenticated_OneArgs, 'object'>>;
  insert_contact?: Resolver<Maybe<ResolversTypes['contact_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ContactArgs, 'objects'>>;
  insert_contact_one?: Resolver<Maybe<ResolversTypes['contact']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Contact_OneArgs, 'object'>>;
  insert_cuisine?: Resolver<Maybe<ResolversTypes['cuisine_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CuisineArgs, 'objects'>>;
  insert_cuisine_one?: Resolver<Maybe<ResolversTypes['cuisine']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Cuisine_OneArgs, 'object'>>;
  insert_favorite_item_entity?: Resolver<Maybe<ResolversTypes['favorite_item_entity_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Favorite_Item_EntityArgs, 'objects'>>;
  insert_favorite_item_entity_one?: Resolver<Maybe<ResolversTypes['favorite_item_entity']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Favorite_Item_Entity_OneArgs, 'object'>>;
  insert_food_item?: Resolver<Maybe<ResolversTypes['food_item_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Food_ItemArgs, 'objects'>>;
  insert_food_item_media?: Resolver<Maybe<ResolversTypes['food_item_media_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Food_Item_MediaArgs, 'objects'>>;
  insert_food_item_media_one?: Resolver<Maybe<ResolversTypes['food_item_media']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Food_Item_Media_OneArgs, 'object'>>;
  insert_food_item_one?: Resolver<Maybe<ResolversTypes['food_item']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Food_Item_OneArgs, 'object'>>;
  insert_game?: Resolver<Maybe<ResolversTypes['game_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_GameArgs, 'objects'>>;
  insert_game_choice?: Resolver<Maybe<ResolversTypes['game_choice_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Game_ChoiceArgs, 'objects'>>;
  insert_game_choice_one?: Resolver<Maybe<ResolversTypes['game_choice']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Game_Choice_OneArgs, 'object'>>;
  insert_game_cuisine?: Resolver<Maybe<ResolversTypes['game_cuisine_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Game_CuisineArgs, 'objects'>>;
  insert_game_cuisine_one?: Resolver<Maybe<ResolversTypes['game_cuisine']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Game_Cuisine_OneArgs, 'object'>>;
  insert_game_one?: Resolver<Maybe<ResolversTypes['game']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Game_OneArgs, 'object'>>;
  insert_game_player?: Resolver<Maybe<ResolversTypes['game_player_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Game_PlayerArgs, 'objects'>>;
  insert_game_player_one?: Resolver<Maybe<ResolversTypes['game_player']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Game_Player_OneArgs, 'object'>>;
  insert_log?: Resolver<Maybe<ResolversTypes['log_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_LogArgs, 'objects'>>;
  insert_log_one?: Resolver<Maybe<ResolversTypes['log']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Log_OneArgs, 'object'>>;
  insert_media_author?: Resolver<Maybe<ResolversTypes['media_author_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Media_AuthorArgs, 'objects'>>;
  insert_media_author_one?: Resolver<Maybe<ResolversTypes['media_author']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Media_Author_OneArgs, 'object'>>;
  insert_menu?: Resolver<Maybe<ResolversTypes['menu_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_MenuArgs, 'objects'>>;
  insert_menu_one?: Resolver<Maybe<ResolversTypes['menu']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Menu_OneArgs, 'object'>>;
  insert_menu_section?: Resolver<Maybe<ResolversTypes['menu_section_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Menu_SectionArgs, 'objects'>>;
  insert_menu_section_one?: Resolver<Maybe<ResolversTypes['menu_section']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Menu_Section_OneArgs, 'object'>>;
  insert_metric?: Resolver<Maybe<ResolversTypes['metric_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_MetricArgs, 'objects'>>;
  insert_metric_one?: Resolver<Maybe<ResolversTypes['metric']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Metric_OneArgs, 'object'>>;
  insert_restaurant?: Resolver<Maybe<ResolversTypes['restaurant_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_RestaurantArgs, 'objects'>>;
  insert_restaurant_chain?: Resolver<Maybe<ResolversTypes['restaurant_chain_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Restaurant_ChainArgs, 'objects'>>;
  insert_restaurant_chain_one?: Resolver<Maybe<ResolversTypes['restaurant_chain']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Restaurant_Chain_OneArgs, 'object'>>;
  insert_restaurant_cuisine?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Restaurant_CuisineArgs, 'objects'>>;
  insert_restaurant_cuisine_one?: Resolver<Maybe<ResolversTypes['restaurant_cuisine']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Restaurant_Cuisine_OneArgs, 'object'>>;
  insert_restaurant_item?: Resolver<Maybe<ResolversTypes['restaurant_item_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Restaurant_ItemArgs, 'objects'>>;
  insert_restaurant_item_one?: Resolver<Maybe<ResolversTypes['restaurant_item']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Restaurant_Item_OneArgs, 'object'>>;
  insert_restaurant_one?: Resolver<Maybe<ResolversTypes['restaurant']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Restaurant_OneArgs, 'object'>>;
  insert_restaurants_visited_entity?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Restaurants_Visited_EntityArgs, 'objects'>>;
  insert_restaurants_visited_entity_one?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Restaurants_Visited_Entity_OneArgs, 'object'>>;
  insert_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UserArgs, 'objects'>>;
  insert_user_device?: Resolver<Maybe<ResolversTypes['user_device_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_DeviceArgs, 'objects'>>;
  insert_user_device_one?: Resolver<Maybe<ResolversTypes['user_device']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_Device_OneArgs, 'object'>>;
  insert_user_one?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_OneArgs, 'object'>>;
  update_authenticated?: Resolver<Maybe<ResolversTypes['authenticated_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AuthenticatedArgs, 'where'>>;
  update_authenticated_by_pk?: Resolver<Maybe<ResolversTypes['authenticated']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Authenticated_By_PkArgs, 'pk_columns'>>;
  update_contact?: Resolver<Maybe<ResolversTypes['contact_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ContactArgs, 'where'>>;
  update_contact_by_pk?: Resolver<Maybe<ResolversTypes['contact']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Contact_By_PkArgs, 'pk_columns'>>;
  update_cuisine?: Resolver<Maybe<ResolversTypes['cuisine_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CuisineArgs, 'where'>>;
  update_cuisine_by_pk?: Resolver<Maybe<ResolversTypes['cuisine']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Cuisine_By_PkArgs, 'pk_columns'>>;
  update_favorite_item_entity?: Resolver<Maybe<ResolversTypes['favorite_item_entity_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Favorite_Item_EntityArgs, 'where'>>;
  update_favorite_item_entity_by_pk?: Resolver<Maybe<ResolversTypes['favorite_item_entity']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Favorite_Item_Entity_By_PkArgs, 'pk_columns'>>;
  update_food_item?: Resolver<Maybe<ResolversTypes['food_item_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Food_ItemArgs, 'where'>>;
  update_food_item_by_pk?: Resolver<Maybe<ResolversTypes['food_item']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Food_Item_By_PkArgs, 'pk_columns'>>;
  update_food_item_media?: Resolver<Maybe<ResolversTypes['food_item_media_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Food_Item_MediaArgs, 'where'>>;
  update_food_item_media_by_pk?: Resolver<Maybe<ResolversTypes['food_item_media']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Food_Item_Media_By_PkArgs, 'pk_columns'>>;
  update_game?: Resolver<Maybe<ResolversTypes['game_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_GameArgs, 'where'>>;
  update_game_by_pk?: Resolver<Maybe<ResolversTypes['game']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Game_By_PkArgs, 'pk_columns'>>;
  update_game_choice?: Resolver<Maybe<ResolversTypes['game_choice_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Game_ChoiceArgs, 'where'>>;
  update_game_choice_by_pk?: Resolver<Maybe<ResolversTypes['game_choice']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Game_Choice_By_PkArgs, 'pk_columns'>>;
  update_game_cuisine?: Resolver<Maybe<ResolversTypes['game_cuisine_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Game_CuisineArgs, 'where'>>;
  update_game_cuisine_by_pk?: Resolver<Maybe<ResolversTypes['game_cuisine']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Game_Cuisine_By_PkArgs, 'pk_columns'>>;
  update_game_player?: Resolver<Maybe<ResolversTypes['game_player_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Game_PlayerArgs, 'where'>>;
  update_game_player_by_pk?: Resolver<Maybe<ResolversTypes['game_player']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Game_Player_By_PkArgs, 'pk_columns'>>;
  update_log?: Resolver<Maybe<ResolversTypes['log_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_LogArgs, 'where'>>;
  update_log_by_pk?: Resolver<Maybe<ResolversTypes['log']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Log_By_PkArgs, 'pk_columns'>>;
  update_media_author?: Resolver<Maybe<ResolversTypes['media_author_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Media_AuthorArgs, 'where'>>;
  update_media_author_by_pk?: Resolver<Maybe<ResolversTypes['media_author']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Media_Author_By_PkArgs, 'pk_columns'>>;
  update_menu?: Resolver<Maybe<ResolversTypes['menu_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_MenuArgs, 'where'>>;
  update_menu_by_pk?: Resolver<Maybe<ResolversTypes['menu']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Menu_By_PkArgs, 'pk_columns'>>;
  update_menu_section?: Resolver<Maybe<ResolversTypes['menu_section_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Menu_SectionArgs, 'where'>>;
  update_menu_section_by_pk?: Resolver<Maybe<ResolversTypes['menu_section']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Menu_Section_By_PkArgs, 'pk_columns'>>;
  update_metric?: Resolver<Maybe<ResolversTypes['metric_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_MetricArgs, 'where'>>;
  update_metric_by_pk?: Resolver<Maybe<ResolversTypes['metric']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Metric_By_PkArgs, 'pk_columns'>>;
  update_restaurant?: Resolver<Maybe<ResolversTypes['restaurant_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_RestaurantArgs, 'where'>>;
  update_restaurant_by_pk?: Resolver<Maybe<ResolversTypes['restaurant']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Restaurant_By_PkArgs, 'pk_columns'>>;
  update_restaurant_chain?: Resolver<Maybe<ResolversTypes['restaurant_chain_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Restaurant_ChainArgs, 'where'>>;
  update_restaurant_chain_by_pk?: Resolver<Maybe<ResolversTypes['restaurant_chain']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Restaurant_Chain_By_PkArgs, 'pk_columns'>>;
  update_restaurant_cuisine?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Restaurant_CuisineArgs, 'where'>>;
  update_restaurant_cuisine_by_pk?: Resolver<Maybe<ResolversTypes['restaurant_cuisine']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Restaurant_Cuisine_By_PkArgs, 'pk_columns'>>;
  update_restaurant_item?: Resolver<Maybe<ResolversTypes['restaurant_item_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Restaurant_ItemArgs, 'where'>>;
  update_restaurant_item_by_pk?: Resolver<Maybe<ResolversTypes['restaurant_item']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Restaurant_Item_By_PkArgs, 'pk_columns'>>;
  update_restaurants_visited_entity?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Restaurants_Visited_EntityArgs, 'where'>>;
  update_restaurants_visited_entity_by_pk?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Restaurants_Visited_Entity_By_PkArgs, 'pk_columns'>>;
  update_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UserArgs, 'where'>>;
  update_user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_By_PkArgs, 'pk_columns'>>;
  update_user_device?: Resolver<Maybe<ResolversTypes['user_device_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_DeviceArgs, 'where'>>;
  update_user_device_by_pk?: Resolver<Maybe<ResolversTypes['user_device']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_Device_By_PkArgs, 'pk_columns'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  authenticated?: Resolver<Array<ResolversTypes['authenticated']>, ParentType, ContextType, RequireFields<Query_RootAuthenticatedArgs, never>>;
  authenticated_aggregate?: Resolver<ResolversTypes['authenticated_aggregate'], ParentType, ContextType, RequireFields<Query_RootAuthenticated_AggregateArgs, never>>;
  authenticated_by_pk?: Resolver<Maybe<ResolversTypes['authenticated']>, ParentType, ContextType, RequireFields<Query_RootAuthenticated_By_PkArgs, 'id'>>;
  contact?: Resolver<Array<ResolversTypes['contact']>, ParentType, ContextType, RequireFields<Query_RootContactArgs, never>>;
  contact_aggregate?: Resolver<ResolversTypes['contact_aggregate'], ParentType, ContextType, RequireFields<Query_RootContact_AggregateArgs, never>>;
  contact_by_pk?: Resolver<Maybe<ResolversTypes['contact']>, ParentType, ContextType, RequireFields<Query_RootContact_By_PkArgs, 'id'>>;
  cuisine?: Resolver<Array<ResolversTypes['cuisine']>, ParentType, ContextType, RequireFields<Query_RootCuisineArgs, never>>;
  cuisine_aggregate?: Resolver<ResolversTypes['cuisine_aggregate'], ParentType, ContextType, RequireFields<Query_RootCuisine_AggregateArgs, never>>;
  cuisine_by_pk?: Resolver<Maybe<ResolversTypes['cuisine']>, ParentType, ContextType, RequireFields<Query_RootCuisine_By_PkArgs, 'id'>>;
  favorite_item_entity?: Resolver<Array<ResolversTypes['favorite_item_entity']>, ParentType, ContextType, RequireFields<Query_RootFavorite_Item_EntityArgs, never>>;
  favorite_item_entity_aggregate?: Resolver<ResolversTypes['favorite_item_entity_aggregate'], ParentType, ContextType, RequireFields<Query_RootFavorite_Item_Entity_AggregateArgs, never>>;
  favorite_item_entity_by_pk?: Resolver<Maybe<ResolversTypes['favorite_item_entity']>, ParentType, ContextType, RequireFields<Query_RootFavorite_Item_Entity_By_PkArgs, 'foodItemId' | 'userId'>>;
  food_item?: Resolver<Array<ResolversTypes['food_item']>, ParentType, ContextType, RequireFields<Query_RootFood_ItemArgs, never>>;
  food_item_aggregate?: Resolver<ResolversTypes['food_item_aggregate'], ParentType, ContextType, RequireFields<Query_RootFood_Item_AggregateArgs, never>>;
  food_item_by_pk?: Resolver<Maybe<ResolversTypes['food_item']>, ParentType, ContextType, RequireFields<Query_RootFood_Item_By_PkArgs, 'id'>>;
  food_item_media?: Resolver<Array<ResolversTypes['food_item_media']>, ParentType, ContextType, RequireFields<Query_RootFood_Item_MediaArgs, never>>;
  food_item_media_aggregate?: Resolver<ResolversTypes['food_item_media_aggregate'], ParentType, ContextType, RequireFields<Query_RootFood_Item_Media_AggregateArgs, never>>;
  food_item_media_by_pk?: Resolver<Maybe<ResolversTypes['food_item_media']>, ParentType, ContextType, RequireFields<Query_RootFood_Item_Media_By_PkArgs, 'id'>>;
  game?: Resolver<Array<ResolversTypes['game']>, ParentType, ContextType, RequireFields<Query_RootGameArgs, never>>;
  game_aggregate?: Resolver<ResolversTypes['game_aggregate'], ParentType, ContextType, RequireFields<Query_RootGame_AggregateArgs, never>>;
  game_by_pk?: Resolver<Maybe<ResolversTypes['game']>, ParentType, ContextType, RequireFields<Query_RootGame_By_PkArgs, 'id'>>;
  game_choice?: Resolver<Array<ResolversTypes['game_choice']>, ParentType, ContextType, RequireFields<Query_RootGame_ChoiceArgs, never>>;
  game_choice_aggregate?: Resolver<ResolversTypes['game_choice_aggregate'], ParentType, ContextType, RequireFields<Query_RootGame_Choice_AggregateArgs, never>>;
  game_choice_by_pk?: Resolver<Maybe<ResolversTypes['game_choice']>, ParentType, ContextType, RequireFields<Query_RootGame_Choice_By_PkArgs, 'id'>>;
  game_cuisine?: Resolver<Array<ResolversTypes['game_cuisine']>, ParentType, ContextType, RequireFields<Query_RootGame_CuisineArgs, never>>;
  game_cuisine_aggregate?: Resolver<ResolversTypes['game_cuisine_aggregate'], ParentType, ContextType, RequireFields<Query_RootGame_Cuisine_AggregateArgs, never>>;
  game_cuisine_by_pk?: Resolver<Maybe<ResolversTypes['game_cuisine']>, ParentType, ContextType, RequireFields<Query_RootGame_Cuisine_By_PkArgs, 'id'>>;
  game_player?: Resolver<Array<ResolversTypes['game_player']>, ParentType, ContextType, RequireFields<Query_RootGame_PlayerArgs, never>>;
  game_player_aggregate?: Resolver<ResolversTypes['game_player_aggregate'], ParentType, ContextType, RequireFields<Query_RootGame_Player_AggregateArgs, never>>;
  game_player_by_pk?: Resolver<Maybe<ResolversTypes['game_player']>, ParentType, ContextType, RequireFields<Query_RootGame_Player_By_PkArgs, 'id'>>;
  log?: Resolver<Array<ResolversTypes['log']>, ParentType, ContextType, RequireFields<Query_RootLogArgs, never>>;
  log_aggregate?: Resolver<ResolversTypes['log_aggregate'], ParentType, ContextType, RequireFields<Query_RootLog_AggregateArgs, never>>;
  log_by_pk?: Resolver<Maybe<ResolversTypes['log']>, ParentType, ContextType, RequireFields<Query_RootLog_By_PkArgs, 'id'>>;
  media_author?: Resolver<Array<ResolversTypes['media_author']>, ParentType, ContextType, RequireFields<Query_RootMedia_AuthorArgs, never>>;
  media_author_aggregate?: Resolver<ResolversTypes['media_author_aggregate'], ParentType, ContextType, RequireFields<Query_RootMedia_Author_AggregateArgs, never>>;
  media_author_by_pk?: Resolver<Maybe<ResolversTypes['media_author']>, ParentType, ContextType, RequireFields<Query_RootMedia_Author_By_PkArgs, 'id'>>;
  menu?: Resolver<Array<ResolversTypes['menu']>, ParentType, ContextType, RequireFields<Query_RootMenuArgs, never>>;
  menu_aggregate?: Resolver<ResolversTypes['menu_aggregate'], ParentType, ContextType, RequireFields<Query_RootMenu_AggregateArgs, never>>;
  menu_by_pk?: Resolver<Maybe<ResolversTypes['menu']>, ParentType, ContextType, RequireFields<Query_RootMenu_By_PkArgs, 'id'>>;
  menu_section?: Resolver<Array<ResolversTypes['menu_section']>, ParentType, ContextType, RequireFields<Query_RootMenu_SectionArgs, never>>;
  menu_section_aggregate?: Resolver<ResolversTypes['menu_section_aggregate'], ParentType, ContextType, RequireFields<Query_RootMenu_Section_AggregateArgs, never>>;
  menu_section_by_pk?: Resolver<Maybe<ResolversTypes['menu_section']>, ParentType, ContextType, RequireFields<Query_RootMenu_Section_By_PkArgs, 'id'>>;
  metric?: Resolver<Array<ResolversTypes['metric']>, ParentType, ContextType, RequireFields<Query_RootMetricArgs, never>>;
  metric_aggregate?: Resolver<ResolversTypes['metric_aggregate'], ParentType, ContextType, RequireFields<Query_RootMetric_AggregateArgs, never>>;
  metric_by_pk?: Resolver<Maybe<ResolversTypes['metric']>, ParentType, ContextType, RequireFields<Query_RootMetric_By_PkArgs, 'id'>>;
  restaurant?: Resolver<Array<ResolversTypes['restaurant']>, ParentType, ContextType, RequireFields<Query_RootRestaurantArgs, never>>;
  restaurant_aggregate?: Resolver<ResolversTypes['restaurant_aggregate'], ParentType, ContextType, RequireFields<Query_RootRestaurant_AggregateArgs, never>>;
  restaurant_by_pk?: Resolver<Maybe<ResolversTypes['restaurant']>, ParentType, ContextType, RequireFields<Query_RootRestaurant_By_PkArgs, 'id'>>;
  restaurant_chain?: Resolver<Array<ResolversTypes['restaurant_chain']>, ParentType, ContextType, RequireFields<Query_RootRestaurant_ChainArgs, never>>;
  restaurant_chain_aggregate?: Resolver<ResolversTypes['restaurant_chain_aggregate'], ParentType, ContextType, RequireFields<Query_RootRestaurant_Chain_AggregateArgs, never>>;
  restaurant_chain_by_pk?: Resolver<Maybe<ResolversTypes['restaurant_chain']>, ParentType, ContextType, RequireFields<Query_RootRestaurant_Chain_By_PkArgs, 'id'>>;
  restaurant_cuisine?: Resolver<Array<ResolversTypes['restaurant_cuisine']>, ParentType, ContextType, RequireFields<Query_RootRestaurant_CuisineArgs, never>>;
  restaurant_cuisine_aggregate?: Resolver<ResolversTypes['restaurant_cuisine_aggregate'], ParentType, ContextType, RequireFields<Query_RootRestaurant_Cuisine_AggregateArgs, never>>;
  restaurant_cuisine_by_pk?: Resolver<Maybe<ResolversTypes['restaurant_cuisine']>, ParentType, ContextType, RequireFields<Query_RootRestaurant_Cuisine_By_PkArgs, 'id'>>;
  restaurant_item?: Resolver<Array<ResolversTypes['restaurant_item']>, ParentType, ContextType, RequireFields<Query_RootRestaurant_ItemArgs, never>>;
  restaurant_item_aggregate?: Resolver<ResolversTypes['restaurant_item_aggregate'], ParentType, ContextType, RequireFields<Query_RootRestaurant_Item_AggregateArgs, never>>;
  restaurant_item_by_pk?: Resolver<Maybe<ResolversTypes['restaurant_item']>, ParentType, ContextType, RequireFields<Query_RootRestaurant_Item_By_PkArgs, 'id'>>;
  restaurants_visited_entity?: Resolver<Array<ResolversTypes['restaurants_visited_entity']>, ParentType, ContextType, RequireFields<Query_RootRestaurants_Visited_EntityArgs, never>>;
  restaurants_visited_entity_aggregate?: Resolver<ResolversTypes['restaurants_visited_entity_aggregate'], ParentType, ContextType, RequireFields<Query_RootRestaurants_Visited_Entity_AggregateArgs, never>>;
  restaurants_visited_entity_by_pk?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity']>, ParentType, ContextType, RequireFields<Query_RootRestaurants_Visited_Entity_By_PkArgs, 'id'>>;
  user?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Query_RootUserArgs, never>>;
  user_aggregate?: Resolver<ResolversTypes['user_aggregate'], ParentType, ContextType, RequireFields<Query_RootUser_AggregateArgs, never>>;
  user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Query_RootUser_By_PkArgs, 'id'>>;
  user_device?: Resolver<Array<ResolversTypes['user_device']>, ParentType, ContextType, RequireFields<Query_RootUser_DeviceArgs, never>>;
  user_device_aggregate?: Resolver<ResolversTypes['user_device_aggregate'], ParentType, ContextType, RequireFields<Query_RootUser_Device_AggregateArgs, never>>;
  user_device_by_pk?: Resolver<Maybe<ResolversTypes['user_device']>, ParentType, ContextType, RequireFields<Query_RootUser_Device_By_PkArgs, 'id'>>;
};

export type RestaurantResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant'] = ResolversParentTypes['restaurant']> = {
  chain_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  game_choices?: Resolver<Array<ResolversTypes['game_choice']>, ParentType, ContextType, RequireFields<RestaurantGame_ChoicesArgs, never>>;
  game_choices_aggregate?: Resolver<ResolversTypes['game_choice_aggregate'], ParentType, ContextType, RequireFields<RestaurantGame_Choices_AggregateArgs, never>>;
  games?: Resolver<Array<ResolversTypes['game']>, ParentType, ContextType, RequireFields<RestaurantGamesArgs, never>>;
  games_aggregate?: Resolver<ResolversTypes['game_aggregate'], ParentType, ContextType, RequireFields<RestaurantGames_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_game_ready?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  place_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurant_chain?: Resolver<ResolversTypes['restaurant_chain'], ParentType, ContextType>;
  restaurant_cuisines?: Resolver<Array<ResolversTypes['restaurant_cuisine']>, ParentType, ContextType, RequireFields<RestaurantRestaurant_CuisinesArgs, never>>;
  restaurant_cuisines_aggregate?: Resolver<ResolversTypes['restaurant_cuisine_aggregate'], ParentType, ContextType, RequireFields<RestaurantRestaurant_Cuisines_AggregateArgs, never>>;
  restaurant_items?: Resolver<Array<ResolversTypes['restaurant_item']>, ParentType, ContextType, RequireFields<RestaurantRestaurant_ItemsArgs, never>>;
  restaurant_items_aggregate?: Resolver<ResolversTypes['restaurant_item_aggregate'], ParentType, ContextType, RequireFields<RestaurantRestaurant_Items_AggregateArgs, never>>;
  restaurants_visited_entity?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street_address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  takeout_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_aggregate'] = ResolversParentTypes['restaurant_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['restaurant_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['restaurant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_aggregate_fields'] = ResolversParentTypes['restaurant_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['restaurant_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Restaurant_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['restaurant_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['restaurant_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['restaurant_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['restaurant_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['restaurant_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['restaurant_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['restaurant_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['restaurant_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['restaurant_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_avg_fields'] = ResolversParentTypes['restaurant_avg_fields']> = {
  chain_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_ChainResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain'] = ResolversParentTypes['restaurant_chain']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  restaurants?: Resolver<Array<ResolversTypes['restaurant']>, ParentType, ContextType, RequireFields<Restaurant_ChainRestaurantsArgs, never>>;
  restaurants_aggregate?: Resolver<ResolversTypes['restaurant_aggregate'], ParentType, ContextType, RequireFields<Restaurant_ChainRestaurants_AggregateArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_aggregate'] = ResolversParentTypes['restaurant_chain_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['restaurant_chain_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['restaurant_chain']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_aggregate_fields'] = ResolversParentTypes['restaurant_chain_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['restaurant_chain_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Restaurant_Chain_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['restaurant_chain_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['restaurant_chain_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['restaurant_chain_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['restaurant_chain_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['restaurant_chain_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['restaurant_chain_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['restaurant_chain_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['restaurant_chain_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['restaurant_chain_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_avg_fields'] = ResolversParentTypes['restaurant_chain_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_max_fields'] = ResolversParentTypes['restaurant_chain_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_min_fields'] = ResolversParentTypes['restaurant_chain_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_mutation_response'] = ResolversParentTypes['restaurant_chain_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['restaurant_chain']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_stddev_fields'] = ResolversParentTypes['restaurant_chain_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_stddev_pop_fields'] = ResolversParentTypes['restaurant_chain_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_stddev_samp_fields'] = ResolversParentTypes['restaurant_chain_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_sum_fields'] = ResolversParentTypes['restaurant_chain_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_var_pop_fields'] = ResolversParentTypes['restaurant_chain_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_var_samp_fields'] = ResolversParentTypes['restaurant_chain_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Chain_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_chain_variance_fields'] = ResolversParentTypes['restaurant_chain_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_CuisineResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine'] = ResolversParentTypes['restaurant_cuisine']> = {
  cuisine?: Resolver<ResolversTypes['cuisine'], ParentType, ContextType>;
  cuisine_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  restaurant?: Resolver<ResolversTypes['restaurant'], ParentType, ContextType>;
  restaurant_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_aggregate'] = ResolversParentTypes['restaurant_cuisine_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['restaurant_cuisine']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_aggregate_fields'] = ResolversParentTypes['restaurant_cuisine_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Restaurant_Cuisine_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['restaurant_cuisine_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_avg_fields'] = ResolversParentTypes['restaurant_cuisine_avg_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_max_fields'] = ResolversParentTypes['restaurant_cuisine_max_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_min_fields'] = ResolversParentTypes['restaurant_cuisine_min_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_mutation_response'] = ResolversParentTypes['restaurant_cuisine_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['restaurant_cuisine']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_stddev_fields'] = ResolversParentTypes['restaurant_cuisine_stddev_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_stddev_pop_fields'] = ResolversParentTypes['restaurant_cuisine_stddev_pop_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_stddev_samp_fields'] = ResolversParentTypes['restaurant_cuisine_stddev_samp_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_sum_fields'] = ResolversParentTypes['restaurant_cuisine_sum_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_var_pop_fields'] = ResolversParentTypes['restaurant_cuisine_var_pop_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_var_samp_fields'] = ResolversParentTypes['restaurant_cuisine_var_samp_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Cuisine_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_cuisine_variance_fields'] = ResolversParentTypes['restaurant_cuisine_variance_fields']> = {
  cuisine_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item'] = ResolversParentTypes['restaurant_item']> = {
  food_item?: Resolver<ResolversTypes['food_item'], ParentType, ContextType>;
  food_item_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  game_choices?: Resolver<Array<ResolversTypes['game_choice']>, ParentType, ContextType, RequireFields<Restaurant_ItemGame_ChoicesArgs, never>>;
  game_choices_aggregate?: Resolver<ResolversTypes['game_choice_aggregate'], ParentType, ContextType, RequireFields<Restaurant_ItemGame_Choices_AggregateArgs, never>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_game_ready?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  menu?: Resolver<ResolversTypes['menu'], ParentType, ContextType>;
  menu_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  menu_section?: Resolver<ResolversTypes['menu_section'], ParentType, ContextType>;
  menu_section_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  restaurant?: Resolver<ResolversTypes['restaurant'], ParentType, ContextType>;
  restaurant_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  times_served?: Resolver<ResolversTypes['_varchar'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_aggregate'] = ResolversParentTypes['restaurant_item_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['restaurant_item_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['restaurant_item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_aggregate_fields'] = ResolversParentTypes['restaurant_item_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['restaurant_item_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Restaurant_Item_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['restaurant_item_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['restaurant_item_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['restaurant_item_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['restaurant_item_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['restaurant_item_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['restaurant_item_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['restaurant_item_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['restaurant_item_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['restaurant_item_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_avg_fields'] = ResolversParentTypes['restaurant_item_avg_fields']> = {
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_section_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_max_fields'] = ResolversParentTypes['restaurant_item_max_fields']> = {
  food_item_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  menu_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  menu_section_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_min_fields'] = ResolversParentTypes['restaurant_item_min_fields']> = {
  food_item_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  menu_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  menu_section_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_mutation_response'] = ResolversParentTypes['restaurant_item_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['restaurant_item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_stddev_fields'] = ResolversParentTypes['restaurant_item_stddev_fields']> = {
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_section_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_stddev_pop_fields'] = ResolversParentTypes['restaurant_item_stddev_pop_fields']> = {
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_section_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_stddev_samp_fields'] = ResolversParentTypes['restaurant_item_stddev_samp_fields']> = {
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_section_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_sum_fields'] = ResolversParentTypes['restaurant_item_sum_fields']> = {
  food_item_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  menu_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  menu_section_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_var_pop_fields'] = ResolversParentTypes['restaurant_item_var_pop_fields']> = {
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_section_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_var_samp_fields'] = ResolversParentTypes['restaurant_item_var_samp_fields']> = {
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_section_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Item_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_item_variance_fields'] = ResolversParentTypes['restaurant_item_variance_fields']> = {
  food_item_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menu_section_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurant_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_max_fields'] = ResolversParentTypes['restaurant_max_fields']> = {
  chain_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  place_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  takeout_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_min_fields'] = ResolversParentTypes['restaurant_min_fields']> = {
  chain_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  place_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  takeout_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zip_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_mutation_response'] = ResolversParentTypes['restaurant_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['restaurant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_stddev_fields'] = ResolversParentTypes['restaurant_stddev_fields']> = {
  chain_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_stddev_pop_fields'] = ResolversParentTypes['restaurant_stddev_pop_fields']> = {
  chain_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_stddev_samp_fields'] = ResolversParentTypes['restaurant_stddev_samp_fields']> = {
  chain_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_sum_fields'] = ResolversParentTypes['restaurant_sum_fields']> = {
  chain_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_var_pop_fields'] = ResolversParentTypes['restaurant_var_pop_fields']> = {
  chain_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_var_samp_fields'] = ResolversParentTypes['restaurant_var_samp_fields']> = {
  chain_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurant_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurant_variance_fields'] = ResolversParentTypes['restaurant_variance_fields']> = {
  chain_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity'] = ResolversParentTypes['restaurants_visited_entity']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numTimesEaten?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  restaurant?: Resolver<Maybe<ResolversTypes['restaurant']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_aggregate'] = ResolversParentTypes['restaurants_visited_entity_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['restaurants_visited_entity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_aggregate_fields'] = ResolversParentTypes['restaurants_visited_entity_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Restaurants_Visited_Entity_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['restaurants_visited_entity_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_avg_fields'] = ResolversParentTypes['restaurants_visited_entity_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numTimesEaten?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_max_fields'] = ResolversParentTypes['restaurants_visited_entity_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numTimesEaten?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_min_fields'] = ResolversParentTypes['restaurants_visited_entity_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numTimesEaten?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_mutation_response'] = ResolversParentTypes['restaurants_visited_entity_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['restaurants_visited_entity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_stddev_fields'] = ResolversParentTypes['restaurants_visited_entity_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numTimesEaten?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_stddev_pop_fields'] = ResolversParentTypes['restaurants_visited_entity_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numTimesEaten?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_stddev_samp_fields'] = ResolversParentTypes['restaurants_visited_entity_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numTimesEaten?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_sum_fields'] = ResolversParentTypes['restaurants_visited_entity_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numTimesEaten?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_var_pop_fields'] = ResolversParentTypes['restaurants_visited_entity_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numTimesEaten?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_var_samp_fields'] = ResolversParentTypes['restaurants_visited_entity_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numTimesEaten?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Restaurants_Visited_Entity_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['restaurants_visited_entity_variance_fields'] = ResolversParentTypes['restaurants_visited_entity_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  numTimesEaten?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  authenticated?: SubscriptionResolver<Array<ResolversTypes['authenticated']>, "authenticated", ParentType, ContextType, RequireFields<Subscription_RootAuthenticatedArgs, never>>;
  authenticated_aggregate?: SubscriptionResolver<ResolversTypes['authenticated_aggregate'], "authenticated_aggregate", ParentType, ContextType, RequireFields<Subscription_RootAuthenticated_AggregateArgs, never>>;
  authenticated_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['authenticated']>, "authenticated_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAuthenticated_By_PkArgs, 'id'>>;
  contact?: SubscriptionResolver<Array<ResolversTypes['contact']>, "contact", ParentType, ContextType, RequireFields<Subscription_RootContactArgs, never>>;
  contact_aggregate?: SubscriptionResolver<ResolversTypes['contact_aggregate'], "contact_aggregate", ParentType, ContextType, RequireFields<Subscription_RootContact_AggregateArgs, never>>;
  contact_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['contact']>, "contact_by_pk", ParentType, ContextType, RequireFields<Subscription_RootContact_By_PkArgs, 'id'>>;
  cuisine?: SubscriptionResolver<Array<ResolversTypes['cuisine']>, "cuisine", ParentType, ContextType, RequireFields<Subscription_RootCuisineArgs, never>>;
  cuisine_aggregate?: SubscriptionResolver<ResolversTypes['cuisine_aggregate'], "cuisine_aggregate", ParentType, ContextType, RequireFields<Subscription_RootCuisine_AggregateArgs, never>>;
  cuisine_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['cuisine']>, "cuisine_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCuisine_By_PkArgs, 'id'>>;
  favorite_item_entity?: SubscriptionResolver<Array<ResolversTypes['favorite_item_entity']>, "favorite_item_entity", ParentType, ContextType, RequireFields<Subscription_RootFavorite_Item_EntityArgs, never>>;
  favorite_item_entity_aggregate?: SubscriptionResolver<ResolversTypes['favorite_item_entity_aggregate'], "favorite_item_entity_aggregate", ParentType, ContextType, RequireFields<Subscription_RootFavorite_Item_Entity_AggregateArgs, never>>;
  favorite_item_entity_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['favorite_item_entity']>, "favorite_item_entity_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFavorite_Item_Entity_By_PkArgs, 'foodItemId' | 'userId'>>;
  food_item?: SubscriptionResolver<Array<ResolversTypes['food_item']>, "food_item", ParentType, ContextType, RequireFields<Subscription_RootFood_ItemArgs, never>>;
  food_item_aggregate?: SubscriptionResolver<ResolversTypes['food_item_aggregate'], "food_item_aggregate", ParentType, ContextType, RequireFields<Subscription_RootFood_Item_AggregateArgs, never>>;
  food_item_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['food_item']>, "food_item_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFood_Item_By_PkArgs, 'id'>>;
  food_item_media?: SubscriptionResolver<Array<ResolversTypes['food_item_media']>, "food_item_media", ParentType, ContextType, RequireFields<Subscription_RootFood_Item_MediaArgs, never>>;
  food_item_media_aggregate?: SubscriptionResolver<ResolversTypes['food_item_media_aggregate'], "food_item_media_aggregate", ParentType, ContextType, RequireFields<Subscription_RootFood_Item_Media_AggregateArgs, never>>;
  food_item_media_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['food_item_media']>, "food_item_media_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFood_Item_Media_By_PkArgs, 'id'>>;
  game?: SubscriptionResolver<Array<ResolversTypes['game']>, "game", ParentType, ContextType, RequireFields<Subscription_RootGameArgs, never>>;
  game_aggregate?: SubscriptionResolver<ResolversTypes['game_aggregate'], "game_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGame_AggregateArgs, never>>;
  game_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['game']>, "game_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGame_By_PkArgs, 'id'>>;
  game_choice?: SubscriptionResolver<Array<ResolversTypes['game_choice']>, "game_choice", ParentType, ContextType, RequireFields<Subscription_RootGame_ChoiceArgs, never>>;
  game_choice_aggregate?: SubscriptionResolver<ResolversTypes['game_choice_aggregate'], "game_choice_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGame_Choice_AggregateArgs, never>>;
  game_choice_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['game_choice']>, "game_choice_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGame_Choice_By_PkArgs, 'id'>>;
  game_cuisine?: SubscriptionResolver<Array<ResolversTypes['game_cuisine']>, "game_cuisine", ParentType, ContextType, RequireFields<Subscription_RootGame_CuisineArgs, never>>;
  game_cuisine_aggregate?: SubscriptionResolver<ResolversTypes['game_cuisine_aggregate'], "game_cuisine_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGame_Cuisine_AggregateArgs, never>>;
  game_cuisine_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['game_cuisine']>, "game_cuisine_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGame_Cuisine_By_PkArgs, 'id'>>;
  game_player?: SubscriptionResolver<Array<ResolversTypes['game_player']>, "game_player", ParentType, ContextType, RequireFields<Subscription_RootGame_PlayerArgs, never>>;
  game_player_aggregate?: SubscriptionResolver<ResolversTypes['game_player_aggregate'], "game_player_aggregate", ParentType, ContextType, RequireFields<Subscription_RootGame_Player_AggregateArgs, never>>;
  game_player_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['game_player']>, "game_player_by_pk", ParentType, ContextType, RequireFields<Subscription_RootGame_Player_By_PkArgs, 'id'>>;
  log?: SubscriptionResolver<Array<ResolversTypes['log']>, "log", ParentType, ContextType, RequireFields<Subscription_RootLogArgs, never>>;
  log_aggregate?: SubscriptionResolver<ResolversTypes['log_aggregate'], "log_aggregate", ParentType, ContextType, RequireFields<Subscription_RootLog_AggregateArgs, never>>;
  log_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['log']>, "log_by_pk", ParentType, ContextType, RequireFields<Subscription_RootLog_By_PkArgs, 'id'>>;
  media_author?: SubscriptionResolver<Array<ResolversTypes['media_author']>, "media_author", ParentType, ContextType, RequireFields<Subscription_RootMedia_AuthorArgs, never>>;
  media_author_aggregate?: SubscriptionResolver<ResolversTypes['media_author_aggregate'], "media_author_aggregate", ParentType, ContextType, RequireFields<Subscription_RootMedia_Author_AggregateArgs, never>>;
  media_author_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['media_author']>, "media_author_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMedia_Author_By_PkArgs, 'id'>>;
  menu?: SubscriptionResolver<Array<ResolversTypes['menu']>, "menu", ParentType, ContextType, RequireFields<Subscription_RootMenuArgs, never>>;
  menu_aggregate?: SubscriptionResolver<ResolversTypes['menu_aggregate'], "menu_aggregate", ParentType, ContextType, RequireFields<Subscription_RootMenu_AggregateArgs, never>>;
  menu_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['menu']>, "menu_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMenu_By_PkArgs, 'id'>>;
  menu_section?: SubscriptionResolver<Array<ResolversTypes['menu_section']>, "menu_section", ParentType, ContextType, RequireFields<Subscription_RootMenu_SectionArgs, never>>;
  menu_section_aggregate?: SubscriptionResolver<ResolversTypes['menu_section_aggregate'], "menu_section_aggregate", ParentType, ContextType, RequireFields<Subscription_RootMenu_Section_AggregateArgs, never>>;
  menu_section_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['menu_section']>, "menu_section_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMenu_Section_By_PkArgs, 'id'>>;
  metric?: SubscriptionResolver<Array<ResolversTypes['metric']>, "metric", ParentType, ContextType, RequireFields<Subscription_RootMetricArgs, never>>;
  metric_aggregate?: SubscriptionResolver<ResolversTypes['metric_aggregate'], "metric_aggregate", ParentType, ContextType, RequireFields<Subscription_RootMetric_AggregateArgs, never>>;
  metric_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['metric']>, "metric_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMetric_By_PkArgs, 'id'>>;
  restaurant?: SubscriptionResolver<Array<ResolversTypes['restaurant']>, "restaurant", ParentType, ContextType, RequireFields<Subscription_RootRestaurantArgs, never>>;
  restaurant_aggregate?: SubscriptionResolver<ResolversTypes['restaurant_aggregate'], "restaurant_aggregate", ParentType, ContextType, RequireFields<Subscription_RootRestaurant_AggregateArgs, never>>;
  restaurant_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['restaurant']>, "restaurant_by_pk", ParentType, ContextType, RequireFields<Subscription_RootRestaurant_By_PkArgs, 'id'>>;
  restaurant_chain?: SubscriptionResolver<Array<ResolversTypes['restaurant_chain']>, "restaurant_chain", ParentType, ContextType, RequireFields<Subscription_RootRestaurant_ChainArgs, never>>;
  restaurant_chain_aggregate?: SubscriptionResolver<ResolversTypes['restaurant_chain_aggregate'], "restaurant_chain_aggregate", ParentType, ContextType, RequireFields<Subscription_RootRestaurant_Chain_AggregateArgs, never>>;
  restaurant_chain_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['restaurant_chain']>, "restaurant_chain_by_pk", ParentType, ContextType, RequireFields<Subscription_RootRestaurant_Chain_By_PkArgs, 'id'>>;
  restaurant_cuisine?: SubscriptionResolver<Array<ResolversTypes['restaurant_cuisine']>, "restaurant_cuisine", ParentType, ContextType, RequireFields<Subscription_RootRestaurant_CuisineArgs, never>>;
  restaurant_cuisine_aggregate?: SubscriptionResolver<ResolversTypes['restaurant_cuisine_aggregate'], "restaurant_cuisine_aggregate", ParentType, ContextType, RequireFields<Subscription_RootRestaurant_Cuisine_AggregateArgs, never>>;
  restaurant_cuisine_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['restaurant_cuisine']>, "restaurant_cuisine_by_pk", ParentType, ContextType, RequireFields<Subscription_RootRestaurant_Cuisine_By_PkArgs, 'id'>>;
  restaurant_item?: SubscriptionResolver<Array<ResolversTypes['restaurant_item']>, "restaurant_item", ParentType, ContextType, RequireFields<Subscription_RootRestaurant_ItemArgs, never>>;
  restaurant_item_aggregate?: SubscriptionResolver<ResolversTypes['restaurant_item_aggregate'], "restaurant_item_aggregate", ParentType, ContextType, RequireFields<Subscription_RootRestaurant_Item_AggregateArgs, never>>;
  restaurant_item_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['restaurant_item']>, "restaurant_item_by_pk", ParentType, ContextType, RequireFields<Subscription_RootRestaurant_Item_By_PkArgs, 'id'>>;
  restaurants_visited_entity?: SubscriptionResolver<Array<ResolversTypes['restaurants_visited_entity']>, "restaurants_visited_entity", ParentType, ContextType, RequireFields<Subscription_RootRestaurants_Visited_EntityArgs, never>>;
  restaurants_visited_entity_aggregate?: SubscriptionResolver<ResolversTypes['restaurants_visited_entity_aggregate'], "restaurants_visited_entity_aggregate", ParentType, ContextType, RequireFields<Subscription_RootRestaurants_Visited_Entity_AggregateArgs, never>>;
  restaurants_visited_entity_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['restaurants_visited_entity']>, "restaurants_visited_entity_by_pk", ParentType, ContextType, RequireFields<Subscription_RootRestaurants_Visited_Entity_By_PkArgs, 'id'>>;
  user?: SubscriptionResolver<Array<ResolversTypes['user']>, "user", ParentType, ContextType, RequireFields<Subscription_RootUserArgs, never>>;
  user_aggregate?: SubscriptionResolver<ResolversTypes['user_aggregate'], "user_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUser_AggregateArgs, never>>;
  user_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user']>, "user_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_By_PkArgs, 'id'>>;
  user_device?: SubscriptionResolver<Array<ResolversTypes['user_device']>, "user_device", ParentType, ContextType, RequireFields<Subscription_RootUser_DeviceArgs, never>>;
  user_device_aggregate?: SubscriptionResolver<ResolversTypes['user_device_aggregate'], "user_device_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUser_Device_AggregateArgs, never>>;
  user_device_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user_device']>, "user_device_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_Device_By_PkArgs, 'id'>>;
};

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamp'], any> {
  name: 'timestamp';
}

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['user'] = ResolversParentTypes['user']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  animal_products?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  beef?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  blocked_foods?: Resolver<Maybe<ResolversTypes['_int4']>, ParentType, ContextType>;
  chicken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  contacts?: Resolver<Array<ResolversTypes['contact']>, ParentType, ContextType, RequireFields<UserContactsArgs, never>>;
  contactsByContactId?: Resolver<Array<ResolversTypes['contact']>, ParentType, ContextType, RequireFields<UserContactsByContactIdArgs, never>>;
  contactsByContactId_aggregate?: Resolver<ResolversTypes['contact_aggregate'], ParentType, ContextType, RequireFields<UserContactsByContactId_AggregateArgs, never>>;
  contacts_aggregate?: Resolver<ResolversTypes['contact_aggregate'], ParentType, ContextType, RequireFields<UserContacts_AggregateArgs, never>>;
  created_at?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exotic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fish?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  game_players?: Resolver<Array<ResolversTypes['game_player']>, ParentType, ContextType, RequireFields<UserGame_PlayersArgs, never>>;
  game_players_aggregate?: Resolver<ResolversTypes['game_player_aggregate'], ParentType, ContextType, RequireFields<UserGame_Players_AggregateArgs, never>>;
  games?: Resolver<Array<ResolversTypes['game']>, ParentType, ContextType, RequireFields<UserGamesArgs, never>>;
  games_aggregate?: Resolver<ResolversTypes['game_aggregate'], ParentType, ContextType, RequireFields<UserGames_AggregateArgs, never>>;
  gluten?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pork?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  shellfish?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  turkey?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user_devices?: Resolver<Array<ResolversTypes['user_device']>, ParentType, ContextType, RequireFields<UserUser_DevicesArgs, never>>;
  user_devices_aggregate?: Resolver<ResolversTypes['user_device_aggregate'], ParentType, ContextType, RequireFields<UserUser_Devices_AggregateArgs, never>>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vegetables?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_aggregate'] = ResolversParentTypes['user_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_aggregate_fields'] = ResolversParentTypes['user_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['user_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<User_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['user_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['user_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['user_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['user_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['user_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['user_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['user_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['user_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_avg_fields'] = ResolversParentTypes['user_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_DeviceResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device'] = ResolversParentTypes['user_device']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  device_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['user'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_aggregate'] = ResolversParentTypes['user_device_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_device_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user_device']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_aggregate_fields'] = ResolversParentTypes['user_device_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['user_device_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<User_Device_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['user_device_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_device_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['user_device_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['user_device_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['user_device_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['user_device_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['user_device_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['user_device_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['user_device_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_avg_fields'] = ResolversParentTypes['user_device_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_max_fields'] = ResolversParentTypes['user_device_max_fields']> = {
  createdOn?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  device_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_min_fields'] = ResolversParentTypes['user_device_min_fields']> = {
  createdOn?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  device_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_mutation_response'] = ResolversParentTypes['user_device_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user_device']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_stddev_fields'] = ResolversParentTypes['user_device_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_stddev_pop_fields'] = ResolversParentTypes['user_device_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_stddev_samp_fields'] = ResolversParentTypes['user_device_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_sum_fields'] = ResolversParentTypes['user_device_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_var_pop_fields'] = ResolversParentTypes['user_device_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_var_samp_fields'] = ResolversParentTypes['user_device_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Device_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_device_variance_fields'] = ResolversParentTypes['user_device_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_max_fields'] = ResolversParentTypes['user_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_min_fields'] = ResolversParentTypes['user_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_mutation_response'] = ResolversParentTypes['user_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_fields'] = ResolversParentTypes['user_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_pop_fields'] = ResolversParentTypes['user_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_samp_fields'] = ResolversParentTypes['user_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_sum_fields'] = ResolversParentTypes['user_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_var_pop_fields'] = ResolversParentTypes['user_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_var_samp_fields'] = ResolversParentTypes['user_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type User_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_variance_fields'] = ResolversParentTypes['user_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  LoginResponse?: LoginResponseResolvers<ContextType>;
  _food_contains_enum?: GraphQLScalarType;
  _int4?: GraphQLScalarType;
  _varchar?: GraphQLScalarType;
  authenticated?: AuthenticatedResolvers<ContextType>;
  authenticated_aggregate?: Authenticated_AggregateResolvers<ContextType>;
  authenticated_aggregate_fields?: Authenticated_Aggregate_FieldsResolvers<ContextType>;
  authenticated_avg_fields?: Authenticated_Avg_FieldsResolvers<ContextType>;
  authenticated_max_fields?: Authenticated_Max_FieldsResolvers<ContextType>;
  authenticated_min_fields?: Authenticated_Min_FieldsResolvers<ContextType>;
  authenticated_mutation_response?: Authenticated_Mutation_ResponseResolvers<ContextType>;
  authenticated_stddev_fields?: Authenticated_Stddev_FieldsResolvers<ContextType>;
  authenticated_stddev_pop_fields?: Authenticated_Stddev_Pop_FieldsResolvers<ContextType>;
  authenticated_stddev_samp_fields?: Authenticated_Stddev_Samp_FieldsResolvers<ContextType>;
  authenticated_sum_fields?: Authenticated_Sum_FieldsResolvers<ContextType>;
  authenticated_var_pop_fields?: Authenticated_Var_Pop_FieldsResolvers<ContextType>;
  authenticated_var_samp_fields?: Authenticated_Var_Samp_FieldsResolvers<ContextType>;
  authenticated_variance_fields?: Authenticated_Variance_FieldsResolvers<ContextType>;
  contact?: ContactResolvers<ContextType>;
  contact_aggregate?: Contact_AggregateResolvers<ContextType>;
  contact_aggregate_fields?: Contact_Aggregate_FieldsResolvers<ContextType>;
  contact_avg_fields?: Contact_Avg_FieldsResolvers<ContextType>;
  contact_max_fields?: Contact_Max_FieldsResolvers<ContextType>;
  contact_min_fields?: Contact_Min_FieldsResolvers<ContextType>;
  contact_mutation_response?: Contact_Mutation_ResponseResolvers<ContextType>;
  contact_status_enum?: GraphQLScalarType;
  contact_stddev_fields?: Contact_Stddev_FieldsResolvers<ContextType>;
  contact_stddev_pop_fields?: Contact_Stddev_Pop_FieldsResolvers<ContextType>;
  contact_stddev_samp_fields?: Contact_Stddev_Samp_FieldsResolvers<ContextType>;
  contact_sum_fields?: Contact_Sum_FieldsResolvers<ContextType>;
  contact_var_pop_fields?: Contact_Var_Pop_FieldsResolvers<ContextType>;
  contact_var_samp_fields?: Contact_Var_Samp_FieldsResolvers<ContextType>;
  contact_variance_fields?: Contact_Variance_FieldsResolvers<ContextType>;
  cuisine?: CuisineResolvers<ContextType>;
  cuisine_aggregate?: Cuisine_AggregateResolvers<ContextType>;
  cuisine_aggregate_fields?: Cuisine_Aggregate_FieldsResolvers<ContextType>;
  cuisine_avg_fields?: Cuisine_Avg_FieldsResolvers<ContextType>;
  cuisine_max_fields?: Cuisine_Max_FieldsResolvers<ContextType>;
  cuisine_min_fields?: Cuisine_Min_FieldsResolvers<ContextType>;
  cuisine_mutation_response?: Cuisine_Mutation_ResponseResolvers<ContextType>;
  cuisine_stddev_fields?: Cuisine_Stddev_FieldsResolvers<ContextType>;
  cuisine_stddev_pop_fields?: Cuisine_Stddev_Pop_FieldsResolvers<ContextType>;
  cuisine_stddev_samp_fields?: Cuisine_Stddev_Samp_FieldsResolvers<ContextType>;
  cuisine_sum_fields?: Cuisine_Sum_FieldsResolvers<ContextType>;
  cuisine_var_pop_fields?: Cuisine_Var_Pop_FieldsResolvers<ContextType>;
  cuisine_var_samp_fields?: Cuisine_Var_Samp_FieldsResolvers<ContextType>;
  cuisine_variance_fields?: Cuisine_Variance_FieldsResolvers<ContextType>;
  favorite_item_entity?: Favorite_Item_EntityResolvers<ContextType>;
  favorite_item_entity_aggregate?: Favorite_Item_Entity_AggregateResolvers<ContextType>;
  favorite_item_entity_aggregate_fields?: Favorite_Item_Entity_Aggregate_FieldsResolvers<ContextType>;
  favorite_item_entity_avg_fields?: Favorite_Item_Entity_Avg_FieldsResolvers<ContextType>;
  favorite_item_entity_max_fields?: Favorite_Item_Entity_Max_FieldsResolvers<ContextType>;
  favorite_item_entity_min_fields?: Favorite_Item_Entity_Min_FieldsResolvers<ContextType>;
  favorite_item_entity_mutation_response?: Favorite_Item_Entity_Mutation_ResponseResolvers<ContextType>;
  favorite_item_entity_stddev_fields?: Favorite_Item_Entity_Stddev_FieldsResolvers<ContextType>;
  favorite_item_entity_stddev_pop_fields?: Favorite_Item_Entity_Stddev_Pop_FieldsResolvers<ContextType>;
  favorite_item_entity_stddev_samp_fields?: Favorite_Item_Entity_Stddev_Samp_FieldsResolvers<ContextType>;
  favorite_item_entity_sum_fields?: Favorite_Item_Entity_Sum_FieldsResolvers<ContextType>;
  favorite_item_entity_var_pop_fields?: Favorite_Item_Entity_Var_Pop_FieldsResolvers<ContextType>;
  favorite_item_entity_var_samp_fields?: Favorite_Item_Entity_Var_Samp_FieldsResolvers<ContextType>;
  favorite_item_entity_variance_fields?: Favorite_Item_Entity_Variance_FieldsResolvers<ContextType>;
  float8?: GraphQLScalarType;
  food_item?: Food_ItemResolvers<ContextType>;
  food_item_aggregate?: Food_Item_AggregateResolvers<ContextType>;
  food_item_aggregate_fields?: Food_Item_Aggregate_FieldsResolvers<ContextType>;
  food_item_avg_fields?: Food_Item_Avg_FieldsResolvers<ContextType>;
  food_item_max_fields?: Food_Item_Max_FieldsResolvers<ContextType>;
  food_item_media?: Food_Item_MediaResolvers<ContextType>;
  food_item_media_aggregate?: Food_Item_Media_AggregateResolvers<ContextType>;
  food_item_media_aggregate_fields?: Food_Item_Media_Aggregate_FieldsResolvers<ContextType>;
  food_item_media_avg_fields?: Food_Item_Media_Avg_FieldsResolvers<ContextType>;
  food_item_media_max_fields?: Food_Item_Media_Max_FieldsResolvers<ContextType>;
  food_item_media_min_fields?: Food_Item_Media_Min_FieldsResolvers<ContextType>;
  food_item_media_mutation_response?: Food_Item_Media_Mutation_ResponseResolvers<ContextType>;
  food_item_media_stddev_fields?: Food_Item_Media_Stddev_FieldsResolvers<ContextType>;
  food_item_media_stddev_pop_fields?: Food_Item_Media_Stddev_Pop_FieldsResolvers<ContextType>;
  food_item_media_stddev_samp_fields?: Food_Item_Media_Stddev_Samp_FieldsResolvers<ContextType>;
  food_item_media_sum_fields?: Food_Item_Media_Sum_FieldsResolvers<ContextType>;
  food_item_media_type_enum?: GraphQLScalarType;
  food_item_media_var_pop_fields?: Food_Item_Media_Var_Pop_FieldsResolvers<ContextType>;
  food_item_media_var_samp_fields?: Food_Item_Media_Var_Samp_FieldsResolvers<ContextType>;
  food_item_media_variance_fields?: Food_Item_Media_Variance_FieldsResolvers<ContextType>;
  food_item_min_fields?: Food_Item_Min_FieldsResolvers<ContextType>;
  food_item_mutation_response?: Food_Item_Mutation_ResponseResolvers<ContextType>;
  food_item_stddev_fields?: Food_Item_Stddev_FieldsResolvers<ContextType>;
  food_item_stddev_pop_fields?: Food_Item_Stddev_Pop_FieldsResolvers<ContextType>;
  food_item_stddev_samp_fields?: Food_Item_Stddev_Samp_FieldsResolvers<ContextType>;
  food_item_sum_fields?: Food_Item_Sum_FieldsResolvers<ContextType>;
  food_item_var_pop_fields?: Food_Item_Var_Pop_FieldsResolvers<ContextType>;
  food_item_var_samp_fields?: Food_Item_Var_Samp_FieldsResolvers<ContextType>;
  food_item_variance_fields?: Food_Item_Variance_FieldsResolvers<ContextType>;
  game?: GameResolvers<ContextType>;
  game_aggregate?: Game_AggregateResolvers<ContextType>;
  game_aggregate_fields?: Game_Aggregate_FieldsResolvers<ContextType>;
  game_avg_fields?: Game_Avg_FieldsResolvers<ContextType>;
  game_choice?: Game_ChoiceResolvers<ContextType>;
  game_choice_aggregate?: Game_Choice_AggregateResolvers<ContextType>;
  game_choice_aggregate_fields?: Game_Choice_Aggregate_FieldsResolvers<ContextType>;
  game_choice_avg_fields?: Game_Choice_Avg_FieldsResolvers<ContextType>;
  game_choice_max_fields?: Game_Choice_Max_FieldsResolvers<ContextType>;
  game_choice_min_fields?: Game_Choice_Min_FieldsResolvers<ContextType>;
  game_choice_mutation_response?: Game_Choice_Mutation_ResponseResolvers<ContextType>;
  game_choice_status_enum?: GraphQLScalarType;
  game_choice_stddev_fields?: Game_Choice_Stddev_FieldsResolvers<ContextType>;
  game_choice_stddev_pop_fields?: Game_Choice_Stddev_Pop_FieldsResolvers<ContextType>;
  game_choice_stddev_samp_fields?: Game_Choice_Stddev_Samp_FieldsResolvers<ContextType>;
  game_choice_sum_fields?: Game_Choice_Sum_FieldsResolvers<ContextType>;
  game_choice_var_pop_fields?: Game_Choice_Var_Pop_FieldsResolvers<ContextType>;
  game_choice_var_samp_fields?: Game_Choice_Var_Samp_FieldsResolvers<ContextType>;
  game_choice_variance_fields?: Game_Choice_Variance_FieldsResolvers<ContextType>;
  game_cuisine?: Game_CuisineResolvers<ContextType>;
  game_cuisine_aggregate?: Game_Cuisine_AggregateResolvers<ContextType>;
  game_cuisine_aggregate_fields?: Game_Cuisine_Aggregate_FieldsResolvers<ContextType>;
  game_cuisine_avg_fields?: Game_Cuisine_Avg_FieldsResolvers<ContextType>;
  game_cuisine_max_fields?: Game_Cuisine_Max_FieldsResolvers<ContextType>;
  game_cuisine_min_fields?: Game_Cuisine_Min_FieldsResolvers<ContextType>;
  game_cuisine_mutation_response?: Game_Cuisine_Mutation_ResponseResolvers<ContextType>;
  game_cuisine_stddev_fields?: Game_Cuisine_Stddev_FieldsResolvers<ContextType>;
  game_cuisine_stddev_pop_fields?: Game_Cuisine_Stddev_Pop_FieldsResolvers<ContextType>;
  game_cuisine_stddev_samp_fields?: Game_Cuisine_Stddev_Samp_FieldsResolvers<ContextType>;
  game_cuisine_sum_fields?: Game_Cuisine_Sum_FieldsResolvers<ContextType>;
  game_cuisine_var_pop_fields?: Game_Cuisine_Var_Pop_FieldsResolvers<ContextType>;
  game_cuisine_var_samp_fields?: Game_Cuisine_Var_Samp_FieldsResolvers<ContextType>;
  game_cuisine_variance_fields?: Game_Cuisine_Variance_FieldsResolvers<ContextType>;
  game_cuisines_filter_mode_enum?: GraphQLScalarType;
  game_game_status_enum?: GraphQLScalarType;
  game_max_fields?: Game_Max_FieldsResolvers<ContextType>;
  game_min_fields?: Game_Min_FieldsResolvers<ContextType>;
  game_mutation_response?: Game_Mutation_ResponseResolvers<ContextType>;
  game_player?: Game_PlayerResolvers<ContextType>;
  game_player_aggregate?: Game_Player_AggregateResolvers<ContextType>;
  game_player_aggregate_fields?: Game_Player_Aggregate_FieldsResolvers<ContextType>;
  game_player_avg_fields?: Game_Player_Avg_FieldsResolvers<ContextType>;
  game_player_max_fields?: Game_Player_Max_FieldsResolvers<ContextType>;
  game_player_min_fields?: Game_Player_Min_FieldsResolvers<ContextType>;
  game_player_mutation_response?: Game_Player_Mutation_ResponseResolvers<ContextType>;
  game_player_stddev_fields?: Game_Player_Stddev_FieldsResolvers<ContextType>;
  game_player_stddev_pop_fields?: Game_Player_Stddev_Pop_FieldsResolvers<ContextType>;
  game_player_stddev_samp_fields?: Game_Player_Stddev_Samp_FieldsResolvers<ContextType>;
  game_player_sum_fields?: Game_Player_Sum_FieldsResolvers<ContextType>;
  game_player_var_pop_fields?: Game_Player_Var_Pop_FieldsResolvers<ContextType>;
  game_player_var_samp_fields?: Game_Player_Var_Samp_FieldsResolvers<ContextType>;
  game_player_variance_fields?: Game_Player_Variance_FieldsResolvers<ContextType>;
  game_stddev_fields?: Game_Stddev_FieldsResolvers<ContextType>;
  game_stddev_pop_fields?: Game_Stddev_Pop_FieldsResolvers<ContextType>;
  game_stddev_samp_fields?: Game_Stddev_Samp_FieldsResolvers<ContextType>;
  game_sum_fields?: Game_Sum_FieldsResolvers<ContextType>;
  game_unit_of_measure_enum?: GraphQLScalarType;
  game_var_pop_fields?: Game_Var_Pop_FieldsResolvers<ContextType>;
  game_var_samp_fields?: Game_Var_Samp_FieldsResolvers<ContextType>;
  game_variance_fields?: Game_Variance_FieldsResolvers<ContextType>;
  json?: GraphQLScalarType;
  log?: LogResolvers<ContextType>;
  log_aggregate?: Log_AggregateResolvers<ContextType>;
  log_aggregate_fields?: Log_Aggregate_FieldsResolvers<ContextType>;
  log_avg_fields?: Log_Avg_FieldsResolvers<ContextType>;
  log_max_fields?: Log_Max_FieldsResolvers<ContextType>;
  log_min_fields?: Log_Min_FieldsResolvers<ContextType>;
  log_mutation_response?: Log_Mutation_ResponseResolvers<ContextType>;
  log_stddev_fields?: Log_Stddev_FieldsResolvers<ContextType>;
  log_stddev_pop_fields?: Log_Stddev_Pop_FieldsResolvers<ContextType>;
  log_stddev_samp_fields?: Log_Stddev_Samp_FieldsResolvers<ContextType>;
  log_sum_fields?: Log_Sum_FieldsResolvers<ContextType>;
  log_var_pop_fields?: Log_Var_Pop_FieldsResolvers<ContextType>;
  log_var_samp_fields?: Log_Var_Samp_FieldsResolvers<ContextType>;
  log_variance_fields?: Log_Variance_FieldsResolvers<ContextType>;
  media_author?: Media_AuthorResolvers<ContextType>;
  media_author_aggregate?: Media_Author_AggregateResolvers<ContextType>;
  media_author_aggregate_fields?: Media_Author_Aggregate_FieldsResolvers<ContextType>;
  media_author_avg_fields?: Media_Author_Avg_FieldsResolvers<ContextType>;
  media_author_max_fields?: Media_Author_Max_FieldsResolvers<ContextType>;
  media_author_min_fields?: Media_Author_Min_FieldsResolvers<ContextType>;
  media_author_mutation_response?: Media_Author_Mutation_ResponseResolvers<ContextType>;
  media_author_stddev_fields?: Media_Author_Stddev_FieldsResolvers<ContextType>;
  media_author_stddev_pop_fields?: Media_Author_Stddev_Pop_FieldsResolvers<ContextType>;
  media_author_stddev_samp_fields?: Media_Author_Stddev_Samp_FieldsResolvers<ContextType>;
  media_author_sum_fields?: Media_Author_Sum_FieldsResolvers<ContextType>;
  media_author_var_pop_fields?: Media_Author_Var_Pop_FieldsResolvers<ContextType>;
  media_author_var_samp_fields?: Media_Author_Var_Samp_FieldsResolvers<ContextType>;
  media_author_variance_fields?: Media_Author_Variance_FieldsResolvers<ContextType>;
  menu?: MenuResolvers<ContextType>;
  menu_aggregate?: Menu_AggregateResolvers<ContextType>;
  menu_aggregate_fields?: Menu_Aggregate_FieldsResolvers<ContextType>;
  menu_avg_fields?: Menu_Avg_FieldsResolvers<ContextType>;
  menu_max_fields?: Menu_Max_FieldsResolvers<ContextType>;
  menu_min_fields?: Menu_Min_FieldsResolvers<ContextType>;
  menu_mutation_response?: Menu_Mutation_ResponseResolvers<ContextType>;
  menu_section?: Menu_SectionResolvers<ContextType>;
  menu_section_aggregate?: Menu_Section_AggregateResolvers<ContextType>;
  menu_section_aggregate_fields?: Menu_Section_Aggregate_FieldsResolvers<ContextType>;
  menu_section_avg_fields?: Menu_Section_Avg_FieldsResolvers<ContextType>;
  menu_section_max_fields?: Menu_Section_Max_FieldsResolvers<ContextType>;
  menu_section_min_fields?: Menu_Section_Min_FieldsResolvers<ContextType>;
  menu_section_mutation_response?: Menu_Section_Mutation_ResponseResolvers<ContextType>;
  menu_section_stddev_fields?: Menu_Section_Stddev_FieldsResolvers<ContextType>;
  menu_section_stddev_pop_fields?: Menu_Section_Stddev_Pop_FieldsResolvers<ContextType>;
  menu_section_stddev_samp_fields?: Menu_Section_Stddev_Samp_FieldsResolvers<ContextType>;
  menu_section_sum_fields?: Menu_Section_Sum_FieldsResolvers<ContextType>;
  menu_section_var_pop_fields?: Menu_Section_Var_Pop_FieldsResolvers<ContextType>;
  menu_section_var_samp_fields?: Menu_Section_Var_Samp_FieldsResolvers<ContextType>;
  menu_section_variance_fields?: Menu_Section_Variance_FieldsResolvers<ContextType>;
  menu_stddev_fields?: Menu_Stddev_FieldsResolvers<ContextType>;
  menu_stddev_pop_fields?: Menu_Stddev_Pop_FieldsResolvers<ContextType>;
  menu_stddev_samp_fields?: Menu_Stddev_Samp_FieldsResolvers<ContextType>;
  menu_sum_fields?: Menu_Sum_FieldsResolvers<ContextType>;
  menu_var_pop_fields?: Menu_Var_Pop_FieldsResolvers<ContextType>;
  menu_var_samp_fields?: Menu_Var_Samp_FieldsResolvers<ContextType>;
  menu_variance_fields?: Menu_Variance_FieldsResolvers<ContextType>;
  metric?: MetricResolvers<ContextType>;
  metric_aggregate?: Metric_AggregateResolvers<ContextType>;
  metric_aggregate_fields?: Metric_Aggregate_FieldsResolvers<ContextType>;
  metric_avg_fields?: Metric_Avg_FieldsResolvers<ContextType>;
  metric_max_fields?: Metric_Max_FieldsResolvers<ContextType>;
  metric_min_fields?: Metric_Min_FieldsResolvers<ContextType>;
  metric_mutation_response?: Metric_Mutation_ResponseResolvers<ContextType>;
  metric_stddev_fields?: Metric_Stddev_FieldsResolvers<ContextType>;
  metric_stddev_pop_fields?: Metric_Stddev_Pop_FieldsResolvers<ContextType>;
  metric_stddev_samp_fields?: Metric_Stddev_Samp_FieldsResolvers<ContextType>;
  metric_sum_fields?: Metric_Sum_FieldsResolvers<ContextType>;
  metric_var_pop_fields?: Metric_Var_Pop_FieldsResolvers<ContextType>;
  metric_var_samp_fields?: Metric_Var_Samp_FieldsResolvers<ContextType>;
  metric_variance_fields?: Metric_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  restaurant?: RestaurantResolvers<ContextType>;
  restaurant_aggregate?: Restaurant_AggregateResolvers<ContextType>;
  restaurant_aggregate_fields?: Restaurant_Aggregate_FieldsResolvers<ContextType>;
  restaurant_avg_fields?: Restaurant_Avg_FieldsResolvers<ContextType>;
  restaurant_chain?: Restaurant_ChainResolvers<ContextType>;
  restaurant_chain_aggregate?: Restaurant_Chain_AggregateResolvers<ContextType>;
  restaurant_chain_aggregate_fields?: Restaurant_Chain_Aggregate_FieldsResolvers<ContextType>;
  restaurant_chain_avg_fields?: Restaurant_Chain_Avg_FieldsResolvers<ContextType>;
  restaurant_chain_max_fields?: Restaurant_Chain_Max_FieldsResolvers<ContextType>;
  restaurant_chain_min_fields?: Restaurant_Chain_Min_FieldsResolvers<ContextType>;
  restaurant_chain_mutation_response?: Restaurant_Chain_Mutation_ResponseResolvers<ContextType>;
  restaurant_chain_stddev_fields?: Restaurant_Chain_Stddev_FieldsResolvers<ContextType>;
  restaurant_chain_stddev_pop_fields?: Restaurant_Chain_Stddev_Pop_FieldsResolvers<ContextType>;
  restaurant_chain_stddev_samp_fields?: Restaurant_Chain_Stddev_Samp_FieldsResolvers<ContextType>;
  restaurant_chain_sum_fields?: Restaurant_Chain_Sum_FieldsResolvers<ContextType>;
  restaurant_chain_var_pop_fields?: Restaurant_Chain_Var_Pop_FieldsResolvers<ContextType>;
  restaurant_chain_var_samp_fields?: Restaurant_Chain_Var_Samp_FieldsResolvers<ContextType>;
  restaurant_chain_variance_fields?: Restaurant_Chain_Variance_FieldsResolvers<ContextType>;
  restaurant_cuisine?: Restaurant_CuisineResolvers<ContextType>;
  restaurant_cuisine_aggregate?: Restaurant_Cuisine_AggregateResolvers<ContextType>;
  restaurant_cuisine_aggregate_fields?: Restaurant_Cuisine_Aggregate_FieldsResolvers<ContextType>;
  restaurant_cuisine_avg_fields?: Restaurant_Cuisine_Avg_FieldsResolvers<ContextType>;
  restaurant_cuisine_max_fields?: Restaurant_Cuisine_Max_FieldsResolvers<ContextType>;
  restaurant_cuisine_min_fields?: Restaurant_Cuisine_Min_FieldsResolvers<ContextType>;
  restaurant_cuisine_mutation_response?: Restaurant_Cuisine_Mutation_ResponseResolvers<ContextType>;
  restaurant_cuisine_stddev_fields?: Restaurant_Cuisine_Stddev_FieldsResolvers<ContextType>;
  restaurant_cuisine_stddev_pop_fields?: Restaurant_Cuisine_Stddev_Pop_FieldsResolvers<ContextType>;
  restaurant_cuisine_stddev_samp_fields?: Restaurant_Cuisine_Stddev_Samp_FieldsResolvers<ContextType>;
  restaurant_cuisine_sum_fields?: Restaurant_Cuisine_Sum_FieldsResolvers<ContextType>;
  restaurant_cuisine_var_pop_fields?: Restaurant_Cuisine_Var_Pop_FieldsResolvers<ContextType>;
  restaurant_cuisine_var_samp_fields?: Restaurant_Cuisine_Var_Samp_FieldsResolvers<ContextType>;
  restaurant_cuisine_variance_fields?: Restaurant_Cuisine_Variance_FieldsResolvers<ContextType>;
  restaurant_item?: Restaurant_ItemResolvers<ContextType>;
  restaurant_item_aggregate?: Restaurant_Item_AggregateResolvers<ContextType>;
  restaurant_item_aggregate_fields?: Restaurant_Item_Aggregate_FieldsResolvers<ContextType>;
  restaurant_item_avg_fields?: Restaurant_Item_Avg_FieldsResolvers<ContextType>;
  restaurant_item_max_fields?: Restaurant_Item_Max_FieldsResolvers<ContextType>;
  restaurant_item_min_fields?: Restaurant_Item_Min_FieldsResolvers<ContextType>;
  restaurant_item_mutation_response?: Restaurant_Item_Mutation_ResponseResolvers<ContextType>;
  restaurant_item_stddev_fields?: Restaurant_Item_Stddev_FieldsResolvers<ContextType>;
  restaurant_item_stddev_pop_fields?: Restaurant_Item_Stddev_Pop_FieldsResolvers<ContextType>;
  restaurant_item_stddev_samp_fields?: Restaurant_Item_Stddev_Samp_FieldsResolvers<ContextType>;
  restaurant_item_sum_fields?: Restaurant_Item_Sum_FieldsResolvers<ContextType>;
  restaurant_item_var_pop_fields?: Restaurant_Item_Var_Pop_FieldsResolvers<ContextType>;
  restaurant_item_var_samp_fields?: Restaurant_Item_Var_Samp_FieldsResolvers<ContextType>;
  restaurant_item_variance_fields?: Restaurant_Item_Variance_FieldsResolvers<ContextType>;
  restaurant_max_fields?: Restaurant_Max_FieldsResolvers<ContextType>;
  restaurant_min_fields?: Restaurant_Min_FieldsResolvers<ContextType>;
  restaurant_mutation_response?: Restaurant_Mutation_ResponseResolvers<ContextType>;
  restaurant_stddev_fields?: Restaurant_Stddev_FieldsResolvers<ContextType>;
  restaurant_stddev_pop_fields?: Restaurant_Stddev_Pop_FieldsResolvers<ContextType>;
  restaurant_stddev_samp_fields?: Restaurant_Stddev_Samp_FieldsResolvers<ContextType>;
  restaurant_sum_fields?: Restaurant_Sum_FieldsResolvers<ContextType>;
  restaurant_var_pop_fields?: Restaurant_Var_Pop_FieldsResolvers<ContextType>;
  restaurant_var_samp_fields?: Restaurant_Var_Samp_FieldsResolvers<ContextType>;
  restaurant_variance_fields?: Restaurant_Variance_FieldsResolvers<ContextType>;
  restaurants_visited_entity?: Restaurants_Visited_EntityResolvers<ContextType>;
  restaurants_visited_entity_aggregate?: Restaurants_Visited_Entity_AggregateResolvers<ContextType>;
  restaurants_visited_entity_aggregate_fields?: Restaurants_Visited_Entity_Aggregate_FieldsResolvers<ContextType>;
  restaurants_visited_entity_avg_fields?: Restaurants_Visited_Entity_Avg_FieldsResolvers<ContextType>;
  restaurants_visited_entity_max_fields?: Restaurants_Visited_Entity_Max_FieldsResolvers<ContextType>;
  restaurants_visited_entity_min_fields?: Restaurants_Visited_Entity_Min_FieldsResolvers<ContextType>;
  restaurants_visited_entity_mutation_response?: Restaurants_Visited_Entity_Mutation_ResponseResolvers<ContextType>;
  restaurants_visited_entity_stddev_fields?: Restaurants_Visited_Entity_Stddev_FieldsResolvers<ContextType>;
  restaurants_visited_entity_stddev_pop_fields?: Restaurants_Visited_Entity_Stddev_Pop_FieldsResolvers<ContextType>;
  restaurants_visited_entity_stddev_samp_fields?: Restaurants_Visited_Entity_Stddev_Samp_FieldsResolvers<ContextType>;
  restaurants_visited_entity_sum_fields?: Restaurants_Visited_Entity_Sum_FieldsResolvers<ContextType>;
  restaurants_visited_entity_var_pop_fields?: Restaurants_Visited_Entity_Var_Pop_FieldsResolvers<ContextType>;
  restaurants_visited_entity_var_samp_fields?: Restaurants_Visited_Entity_Var_Samp_FieldsResolvers<ContextType>;
  restaurants_visited_entity_variance_fields?: Restaurants_Visited_Entity_Variance_FieldsResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamp?: GraphQLScalarType;
  timestamptz?: GraphQLScalarType;
  user?: UserResolvers<ContextType>;
  user_aggregate?: User_AggregateResolvers<ContextType>;
  user_aggregate_fields?: User_Aggregate_FieldsResolvers<ContextType>;
  user_avg_fields?: User_Avg_FieldsResolvers<ContextType>;
  user_device?: User_DeviceResolvers<ContextType>;
  user_device_aggregate?: User_Device_AggregateResolvers<ContextType>;
  user_device_aggregate_fields?: User_Device_Aggregate_FieldsResolvers<ContextType>;
  user_device_avg_fields?: User_Device_Avg_FieldsResolvers<ContextType>;
  user_device_max_fields?: User_Device_Max_FieldsResolvers<ContextType>;
  user_device_min_fields?: User_Device_Min_FieldsResolvers<ContextType>;
  user_device_mutation_response?: User_Device_Mutation_ResponseResolvers<ContextType>;
  user_device_stddev_fields?: User_Device_Stddev_FieldsResolvers<ContextType>;
  user_device_stddev_pop_fields?: User_Device_Stddev_Pop_FieldsResolvers<ContextType>;
  user_device_stddev_samp_fields?: User_Device_Stddev_Samp_FieldsResolvers<ContextType>;
  user_device_sum_fields?: User_Device_Sum_FieldsResolvers<ContextType>;
  user_device_var_pop_fields?: User_Device_Var_Pop_FieldsResolvers<ContextType>;
  user_device_var_samp_fields?: User_Device_Var_Samp_FieldsResolvers<ContextType>;
  user_device_variance_fields?: User_Device_Variance_FieldsResolvers<ContextType>;
  user_max_fields?: User_Max_FieldsResolvers<ContextType>;
  user_min_fields?: User_Min_FieldsResolvers<ContextType>;
  user_mutation_response?: User_Mutation_ResponseResolvers<ContextType>;
  user_stddev_fields?: User_Stddev_FieldsResolvers<ContextType>;
  user_stddev_pop_fields?: User_Stddev_Pop_FieldsResolvers<ContextType>;
  user_stddev_samp_fields?: User_Stddev_Samp_FieldsResolvers<ContextType>;
  user_sum_fields?: User_Sum_FieldsResolvers<ContextType>;
  user_var_pop_fields?: User_Var_Pop_FieldsResolvers<ContextType>;
  user_var_samp_fields?: User_Var_Samp_FieldsResolvers<ContextType>;
  user_variance_fields?: User_Variance_FieldsResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
