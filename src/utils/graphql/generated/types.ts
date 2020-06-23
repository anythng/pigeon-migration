/* eslint-disable */
import * as extensions from '../extensions';
import {
  TypeData,
  ScalarType,
  FieldsType,
  EnumType,
  FieldsTypeArg,
} from 'gqless';

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<'Boolean'>
>;

/**
 * @name Boolean_comparison_exp
 * @type INPUT_OBJECT
 */
export type Boolean_comparison_exp = {
  _eq?: boolean | null;
  _gt?: boolean | null;
  _gte?: boolean | null;
  _in?: boolean[] | null;
  _is_null?: boolean | null;
  _lt?: boolean | null;
  _lte?: boolean | null;
  _neq?: boolean | null;
  _nin?: boolean[] | null;
};

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<'Float'>>;

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<'ID'>>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<'Int'>>;

/**
 * @name Int_comparison_exp
 * @type INPUT_OBJECT
 */
export type Int_comparison_exp = {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
};

/**
 * @name LoginResponse
 * @type OBJECT
 */
type t_LoginResponse = FieldsType<
  {
    __typename: t_String<'LoginResponse'>;
    accessToken: t_String;
    id: t_Int;
  },
  Extension<'LoginResponse'>
>;

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<'String'>>;

/**
 * @name String_comparison_exp
 * @type INPUT_OBJECT
 */
export type String_comparison_exp = {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
};

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<'__Directive'>;
    args: t___InputValue[];
    description?: t_String | null;
    locations: t___DirectiveLocation[];
    name: t_String;
  },
  Extension<'__Directive'>
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | 'ARGUMENT_DEFINITION'
  | 'ENUM'
  | 'ENUM_VALUE'
  | 'FIELD'
  | 'FIELD_DEFINITION'
  | 'FRAGMENT_DEFINITION'
  | 'FRAGMENT_SPREAD'
  | 'INLINE_FRAGMENT'
  | 'INPUT_FIELD_DEFINITION'
  | 'INPUT_OBJECT'
  | 'INTERFACE'
  | 'MUTATION'
  | 'OBJECT'
  | 'QUERY'
  | 'SCALAR'
  | 'SCHEMA'
  | 'SUBSCRIPTION'
  | 'UNION'
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<'__EnumValue'>;
    deprecationReason?: t_String | null;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
  },
  Extension<'__EnumValue'>
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<'__Field'>;
    args: t___InputValue[];
    deprecationReason?: t_String | null;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    name: t_String;
    type: t___Type;
  },
  Extension<'__Field'>
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<'__InputValue'>;
    defaultValue?: t_String | null;
    description?: t_String | null;
    name: t_String;
    type: t___Type;
  },
  Extension<'__InputValue'>
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<'__Schema'>;
    directives: t___Directive[];
    mutationType?: t___Type | null;
    queryType: t___Type;
    subscriptionType?: t___Type | null;
    types: t___Type[];
  },
  Extension<'__Schema'>
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<'__Type'>;
    description?: t_String | null;
    enumValues?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    fields?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    inputFields?: t___InputValue[] | null;
    interfaces?: t___Type[] | null;
    kind: t___TypeKind;
    name?: t_String | null;
    ofType?: t___Type | null;
    possibleTypes?: t___Type[] | null;
  },
  Extension<'__Type'>
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | 'ENUM'
  | 'INPUT_OBJECT'
  | 'INTERFACE'
  | 'LIST'
  | 'NON_NULL'
  | 'OBJECT'
  | 'SCALAR'
  | 'UNION'
>;

/**
 * @name _food_contains_enum
 * @type SCALAR
 */
type t__food_contains_enum<T extends any = any> = ScalarType<
  T,
  Extension<'_food_contains_enum'>
>;

/**
 * @name _food_contains_enum_comparison_exp
 * @type INPUT_OBJECT
 */
export type _food_contains_enum_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name _int4
 * @type SCALAR
 */
type t__int4<T extends any = any> = ScalarType<T, Extension<'_int4'>>;

/**
 * @name _int4_comparison_exp
 * @type INPUT_OBJECT
 */
export type _int4_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name _varchar
 * @type SCALAR
 */
type t__varchar<T extends any = any> = ScalarType<T, Extension<'_varchar'>>;

/**
 * @name _varchar_comparison_exp
 * @type INPUT_OBJECT
 */
export type _varchar_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name authenticated
 * @type OBJECT
 */
type t_authenticated = FieldsType<
  {
    __typename: t_String<'authenticated'>;
    active: t_Boolean;
    created_on: t_timestamp;
    id: t_Int;
    payload_hash: t_String;
    user_id: t_Int;
  },
  Extension<'authenticated'>
>;

/**
 * @name authenticated_aggregate
 * @type OBJECT
 */
type t_authenticated_aggregate = FieldsType<
  {
    __typename: t_String<'authenticated_aggregate'>;
    aggregate?: t_authenticated_aggregate_fields | null;
    nodes: t_authenticated[];
  },
  Extension<'authenticated_aggregate'>
>;

/**
 * @name authenticated_aggregate_fields
 * @type OBJECT
 */
type t_authenticated_aggregate_fields = FieldsType<
  {
    __typename: t_String<'authenticated_aggregate_fields'>;
    avg?: t_authenticated_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: authenticated_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_authenticated_max_fields | null;
    min?: t_authenticated_min_fields | null;
    stddev?: t_authenticated_stddev_fields | null;
    stddev_pop?: t_authenticated_stddev_pop_fields | null;
    stddev_samp?: t_authenticated_stddev_samp_fields | null;
    sum?: t_authenticated_sum_fields | null;
    var_pop?: t_authenticated_var_pop_fields | null;
    var_samp?: t_authenticated_var_samp_fields | null;
    variance?: t_authenticated_variance_fields | null;
  },
  Extension<'authenticated_aggregate_fields'>
>;

/**
 * @name authenticated_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_aggregate_order_by = {
  avg?: authenticated_avg_order_by | null;
  count?: order_by | null;
  max?: authenticated_max_order_by | null;
  min?: authenticated_min_order_by | null;
  stddev?: authenticated_stddev_order_by | null;
  stddev_pop?: authenticated_stddev_pop_order_by | null;
  stddev_samp?: authenticated_stddev_samp_order_by | null;
  sum?: authenticated_sum_order_by | null;
  var_pop?: authenticated_var_pop_order_by | null;
  var_samp?: authenticated_var_samp_order_by | null;
  variance?: authenticated_variance_order_by | null;
};

/**
 * @name authenticated_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type authenticated_arr_rel_insert_input = {
  data: authenticated_insert_input[];
  on_conflict?: authenticated_on_conflict | null;
};

/**
 * @name authenticated_avg_fields
 * @type OBJECT
 */
type t_authenticated_avg_fields = FieldsType<
  {
    __typename: t_String<'authenticated_avg_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'authenticated_avg_fields'>
>;

/**
 * @name authenticated_avg_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_avg_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name authenticated_bool_exp
 * @type INPUT_OBJECT
 */
export type authenticated_bool_exp = {
  _and?: (authenticated_bool_exp | null)[] | null;
  _not?: authenticated_bool_exp | null;
  _or?: (authenticated_bool_exp | null)[] | null;
  active?: Boolean_comparison_exp | null;
  created_on?: timestamp_comparison_exp | null;
  id?: Int_comparison_exp | null;
  payload_hash?: String_comparison_exp | null;
  user_id?: Int_comparison_exp | null;
};


/**
 * @name authenticated_inc_input
 * @type INPUT_OBJECT
 */
export type authenticated_inc_input = {
  id?: number | null;
  user_id?: number | null;
};

/**
 * @name authenticated_insert_input
 * @type INPUT_OBJECT
 */
export type authenticated_insert_input = {
  active?: boolean | null;
  created_on?: any | null;
  id?: number | null;
  payload_hash?: string | null;
  user_id?: number | null;
};

/**
 * @name authenticated_max_fields
 * @type OBJECT
 */
type t_authenticated_max_fields = FieldsType<
  {
    __typename: t_String<'authenticated_max_fields'>;
    created_on?: t_timestamp | null;
    id?: t_Int | null;
    payload_hash?: t_String | null;
    user_id?: t_Int | null;
  },
  Extension<'authenticated_max_fields'>
>;

/**
 * @name authenticated_max_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_max_order_by = {
  created_on?: order_by | null;
  id?: order_by | null;
  payload_hash?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name authenticated_min_fields
 * @type OBJECT
 */
type t_authenticated_min_fields = FieldsType<
  {
    __typename: t_String<'authenticated_min_fields'>;
    created_on?: t_timestamp | null;
    id?: t_Int | null;
    payload_hash?: t_String | null;
    user_id?: t_Int | null;
  },
  Extension<'authenticated_min_fields'>
>;

/**
 * @name authenticated_min_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_min_order_by = {
  created_on?: order_by | null;
  id?: order_by | null;
  payload_hash?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name authenticated_mutation_response
 * @type OBJECT
 */
type t_authenticated_mutation_response = FieldsType<
  {
    __typename: t_String<'authenticated_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_authenticated[];
  },
  Extension<'authenticated_mutation_response'>
>;

/**
 * @name authenticated_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type authenticated_obj_rel_insert_input = {
  data: authenticated_insert_input;
  on_conflict?: authenticated_on_conflict | null;
};

/**
 * @name authenticated_on_conflict
 * @type INPUT_OBJECT
 */
export type authenticated_on_conflict = {
  constraint: authenticated_constraint;
  update_columns: authenticated_update_column[];
  where?: authenticated_bool_exp | null;
};

/**
 * @name authenticated_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_order_by = {
  active?: order_by | null;
  created_on?: order_by | null;
  id?: order_by | null;
  payload_hash?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name authenticated_pk_columns_input
 * @type INPUT_OBJECT
 */
export type authenticated_pk_columns_input = { id: number };


/**
 * @name authenticated_set_input
 * @type INPUT_OBJECT
 */
export type authenticated_set_input = {
  active?: boolean | null;
  created_on?: any | null;
  id?: number | null;
  payload_hash?: string | null;
  user_id?: number | null;
};

/**
 * @name authenticated_stddev_fields
 * @type OBJECT
 */
type t_authenticated_stddev_fields = FieldsType<
  {
    __typename: t_String<'authenticated_stddev_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'authenticated_stddev_fields'>
>;

/**
 * @name authenticated_stddev_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_stddev_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name authenticated_stddev_pop_fields
 * @type OBJECT
 */
type t_authenticated_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'authenticated_stddev_pop_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'authenticated_stddev_pop_fields'>
>;

/**
 * @name authenticated_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_stddev_pop_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name authenticated_stddev_samp_fields
 * @type OBJECT
 */
type t_authenticated_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'authenticated_stddev_samp_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'authenticated_stddev_samp_fields'>
>;

/**
 * @name authenticated_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_stddev_samp_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name authenticated_sum_fields
 * @type OBJECT
 */
type t_authenticated_sum_fields = FieldsType<
  {
    __typename: t_String<'authenticated_sum_fields'>;
    id?: t_Int | null;
    user_id?: t_Int | null;
  },
  Extension<'authenticated_sum_fields'>
>;

/**
 * @name authenticated_sum_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_sum_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};


/**
 * @name authenticated_var_pop_fields
 * @type OBJECT
 */
type t_authenticated_var_pop_fields = FieldsType<
  {
    __typename: t_String<'authenticated_var_pop_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'authenticated_var_pop_fields'>
>;

/**
 * @name authenticated_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_var_pop_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name authenticated_var_samp_fields
 * @type OBJECT
 */
type t_authenticated_var_samp_fields = FieldsType<
  {
    __typename: t_String<'authenticated_var_samp_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'authenticated_var_samp_fields'>
>;

/**
 * @name authenticated_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_var_samp_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name authenticated_variance_fields
 * @type OBJECT
 */
type t_authenticated_variance_fields = FieldsType<
  {
    __typename: t_String<'authenticated_variance_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'authenticated_variance_fields'>
>;

/**
 * @name authenticated_variance_order_by
 * @type INPUT_OBJECT
 */
export type authenticated_variance_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name contact
 * @type OBJECT
 */
type t_contact = FieldsType<
  {
    __typename: t_String<'contact'>;

    /**
     * An object relationship
     */
    contact: t_user;
    contact_id: t_Int;
    id: t_Int;
    status: t_contact_status_enum;

    /**
     * An object relationship
     */
    user: t_user;
    user_id: t_Int;
  },
  Extension<'contact'>
>;

/**
 * @name contact_aggregate
 * @type OBJECT
 */
type t_contact_aggregate = FieldsType<
  {
    __typename: t_String<'contact_aggregate'>;
    aggregate?: t_contact_aggregate_fields | null;
    nodes: t_contact[];
  },
  Extension<'contact_aggregate'>
>;

/**
 * @name contact_aggregate_fields
 * @type OBJECT
 */
type t_contact_aggregate_fields = FieldsType<
  {
    __typename: t_String<'contact_aggregate_fields'>;
    avg?: t_contact_avg_fields | null;
    count?: FieldsTypeArg<
      { columns?: contact_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_contact_max_fields | null;
    min?: t_contact_min_fields | null;
    stddev?: t_contact_stddev_fields | null;
    stddev_pop?: t_contact_stddev_pop_fields | null;
    stddev_samp?: t_contact_stddev_samp_fields | null;
    sum?: t_contact_sum_fields | null;
    var_pop?: t_contact_var_pop_fields | null;
    var_samp?: t_contact_var_samp_fields | null;
    variance?: t_contact_variance_fields | null;
  },
  Extension<'contact_aggregate_fields'>
>;

/**
 * @name contact_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type contact_aggregate_order_by = {
  avg?: contact_avg_order_by | null;
  count?: order_by | null;
  max?: contact_max_order_by | null;
  min?: contact_min_order_by | null;
  stddev?: contact_stddev_order_by | null;
  stddev_pop?: contact_stddev_pop_order_by | null;
  stddev_samp?: contact_stddev_samp_order_by | null;
  sum?: contact_sum_order_by | null;
  var_pop?: contact_var_pop_order_by | null;
  var_samp?: contact_var_samp_order_by | null;
  variance?: contact_variance_order_by | null;
};

/**
 * @name contact_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type contact_arr_rel_insert_input = {
  data: contact_insert_input[];
  on_conflict?: contact_on_conflict | null;
};

/**
 * @name contact_avg_fields
 * @type OBJECT
 */
type t_contact_avg_fields = FieldsType<
  {
    __typename: t_String<'contact_avg_fields'>;
    contact_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'contact_avg_fields'>
>;

/**
 * @name contact_avg_order_by
 * @type INPUT_OBJECT
 */
export type contact_avg_order_by = {
  contact_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name contact_bool_exp
 * @type INPUT_OBJECT
 */
export type contact_bool_exp = {
  _and?: (contact_bool_exp | null)[] | null;
  _not?: contact_bool_exp | null;
  _or?: (contact_bool_exp | null)[] | null;
  contact?: user_bool_exp | null;
  contact_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  status?: contact_status_enum_comparison_exp | null;
  user?: user_bool_exp | null;
  user_id?: Int_comparison_exp | null;
};


/**
 * @name contact_inc_input
 * @type INPUT_OBJECT
 */
export type contact_inc_input = {
  contact_id?: number | null;
  id?: number | null;
  user_id?: number | null;
};

/**
 * @name contact_insert_input
 * @type INPUT_OBJECT
 */
export type contact_insert_input = {
  contact?: user_obj_rel_insert_input | null;
  contact_id?: number | null;
  id?: number | null;
  status?: any | null;
  user?: user_obj_rel_insert_input | null;
  user_id?: number | null;
};

/**
 * @name contact_max_fields
 * @type OBJECT
 */
type t_contact_max_fields = FieldsType<
  {
    __typename: t_String<'contact_max_fields'>;
    contact_id?: t_Int | null;
    id?: t_Int | null;
    user_id?: t_Int | null;
  },
  Extension<'contact_max_fields'>
>;

/**
 * @name contact_max_order_by
 * @type INPUT_OBJECT
 */
export type contact_max_order_by = {
  contact_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name contact_min_fields
 * @type OBJECT
 */
type t_contact_min_fields = FieldsType<
  {
    __typename: t_String<'contact_min_fields'>;
    contact_id?: t_Int | null;
    id?: t_Int | null;
    user_id?: t_Int | null;
  },
  Extension<'contact_min_fields'>
>;

/**
 * @name contact_min_order_by
 * @type INPUT_OBJECT
 */
export type contact_min_order_by = {
  contact_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name contact_mutation_response
 * @type OBJECT
 */
type t_contact_mutation_response = FieldsType<
  {
    __typename: t_String<'contact_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_contact[];
  },
  Extension<'contact_mutation_response'>
>;

/**
 * @name contact_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type contact_obj_rel_insert_input = {
  data: contact_insert_input;
  on_conflict?: contact_on_conflict | null;
};

/**
 * @name contact_on_conflict
 * @type INPUT_OBJECT
 */
export type contact_on_conflict = {
  constraint: contact_constraint;
  update_columns: contact_update_column[];
  where?: contact_bool_exp | null;
};

/**
 * @name contact_order_by
 * @type INPUT_OBJECT
 */
export type contact_order_by = {
  contact?: user_order_by | null;
  contact_id?: order_by | null;
  id?: order_by | null;
  status?: order_by | null;
  user?: user_order_by | null;
  user_id?: order_by | null;
};

/**
 * @name contact_pk_columns_input
 * @type INPUT_OBJECT
 */
export type contact_pk_columns_input = { id: number };


/**
 * @name contact_set_input
 * @type INPUT_OBJECT
 */
export type contact_set_input = {
  contact_id?: number | null;
  id?: number | null;
  status?: any | null;
  user_id?: number | null;
};

/**
 * @name contact_status_enum
 * @type SCALAR
 */
type t_contact_status_enum<T extends any = any> = ScalarType<
  T,
  Extension<'contact_status_enum'>
>;

/**
 * @name contact_status_enum_comparison_exp
 * @type INPUT_OBJECT
 */
export type contact_status_enum_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name contact_stddev_fields
 * @type OBJECT
 */
type t_contact_stddev_fields = FieldsType<
  {
    __typename: t_String<'contact_stddev_fields'>;
    contact_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'contact_stddev_fields'>
>;

/**
 * @name contact_stddev_order_by
 * @type INPUT_OBJECT
 */
export type contact_stddev_order_by = {
  contact_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name contact_stddev_pop_fields
 * @type OBJECT
 */
type t_contact_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'contact_stddev_pop_fields'>;
    contact_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'contact_stddev_pop_fields'>
>;

/**
 * @name contact_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type contact_stddev_pop_order_by = {
  contact_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name contact_stddev_samp_fields
 * @type OBJECT
 */
type t_contact_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'contact_stddev_samp_fields'>;
    contact_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'contact_stddev_samp_fields'>
>;

/**
 * @name contact_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type contact_stddev_samp_order_by = {
  contact_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name contact_sum_fields
 * @type OBJECT
 */
type t_contact_sum_fields = FieldsType<
  {
    __typename: t_String<'contact_sum_fields'>;
    contact_id?: t_Int | null;
    id?: t_Int | null;
    user_id?: t_Int | null;
  },
  Extension<'contact_sum_fields'>
>;

/**
 * @name contact_sum_order_by
 * @type INPUT_OBJECT
 */
export type contact_sum_order_by = {
  contact_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};


/**
 * @name contact_var_pop_fields
 * @type OBJECT
 */
type t_contact_var_pop_fields = FieldsType<
  {
    __typename: t_String<'contact_var_pop_fields'>;
    contact_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'contact_var_pop_fields'>
>;

/**
 * @name contact_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type contact_var_pop_order_by = {
  contact_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name contact_var_samp_fields
 * @type OBJECT
 */
type t_contact_var_samp_fields = FieldsType<
  {
    __typename: t_String<'contact_var_samp_fields'>;
    contact_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'contact_var_samp_fields'>
>;

/**
 * @name contact_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type contact_var_samp_order_by = {
  contact_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name contact_variance_fields
 * @type OBJECT
 */
type t_contact_variance_fields = FieldsType<
  {
    __typename: t_String<'contact_variance_fields'>;
    contact_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'contact_variance_fields'>
>;

/**
 * @name contact_variance_order_by
 * @type INPUT_OBJECT
 */
export type contact_variance_order_by = {
  contact_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name cuisine
 * @type OBJECT
 */
type t_cuisine = FieldsType<
  {
    __typename: t_String<'cuisine'>;

    /**
     * An array relationship
     */
    game_cuisines: FieldsTypeArg<
      {
        distinct_on?: game_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_cuisine_order_by[] | null;
        where?: game_cuisine_bool_exp | null;
      },
      t_game_cuisine[]
    >;

    /**
     * An aggregated array relationship
     */
    game_cuisines_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_cuisine_order_by[] | null;
        where?: game_cuisine_bool_exp | null;
      },
      t_game_cuisine_aggregate
    >;
    id: t_Int;
    name: t_String;

    /**
     * An array relationship
     */
    restaurant_cuisines: FieldsTypeArg<
      {
        distinct_on?: restaurant_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_cuisine_order_by[] | null;
        where?: restaurant_cuisine_bool_exp | null;
      },
      t_restaurant_cuisine[]
    >;

    /**
     * An aggregated array relationship
     */
    restaurant_cuisines_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_cuisine_order_by[] | null;
        where?: restaurant_cuisine_bool_exp | null;
      },
      t_restaurant_cuisine_aggregate
    >;
  },
  Extension<'cuisine'>
>;

/**
 * @name cuisine_aggregate
 * @type OBJECT
 */
type t_cuisine_aggregate = FieldsType<
  {
    __typename: t_String<'cuisine_aggregate'>;
    aggregate?: t_cuisine_aggregate_fields | null;
    nodes: t_cuisine[];
  },
  Extension<'cuisine_aggregate'>
>;

/**
 * @name cuisine_aggregate_fields
 * @type OBJECT
 */
type t_cuisine_aggregate_fields = FieldsType<
  {
    __typename: t_String<'cuisine_aggregate_fields'>;
    avg?: t_cuisine_avg_fields | null;
    count?: FieldsTypeArg<
      { columns?: cuisine_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_cuisine_max_fields | null;
    min?: t_cuisine_min_fields | null;
    stddev?: t_cuisine_stddev_fields | null;
    stddev_pop?: t_cuisine_stddev_pop_fields | null;
    stddev_samp?: t_cuisine_stddev_samp_fields | null;
    sum?: t_cuisine_sum_fields | null;
    var_pop?: t_cuisine_var_pop_fields | null;
    var_samp?: t_cuisine_var_samp_fields | null;
    variance?: t_cuisine_variance_fields | null;
  },
  Extension<'cuisine_aggregate_fields'>
>;

/**
 * @name cuisine_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_aggregate_order_by = {
  avg?: cuisine_avg_order_by | null;
  count?: order_by | null;
  max?: cuisine_max_order_by | null;
  min?: cuisine_min_order_by | null;
  stddev?: cuisine_stddev_order_by | null;
  stddev_pop?: cuisine_stddev_pop_order_by | null;
  stddev_samp?: cuisine_stddev_samp_order_by | null;
  sum?: cuisine_sum_order_by | null;
  var_pop?: cuisine_var_pop_order_by | null;
  var_samp?: cuisine_var_samp_order_by | null;
  variance?: cuisine_variance_order_by | null;
};

/**
 * @name cuisine_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type cuisine_arr_rel_insert_input = {
  data: cuisine_insert_input[];
  on_conflict?: cuisine_on_conflict | null;
};

/**
 * @name cuisine_avg_fields
 * @type OBJECT
 */
type t_cuisine_avg_fields = FieldsType<
  {
    __typename: t_String<'cuisine_avg_fields'>;
    id?: t_Float | null;
  },
  Extension<'cuisine_avg_fields'>
>;

/**
 * @name cuisine_avg_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_avg_order_by = { id?: order_by | null };

/**
 * @name cuisine_bool_exp
 * @type INPUT_OBJECT
 */
export type cuisine_bool_exp = {
  _and?: (cuisine_bool_exp | null)[] | null;
  _not?: cuisine_bool_exp | null;
  _or?: (cuisine_bool_exp | null)[] | null;
  game_cuisines?: game_cuisine_bool_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  restaurant_cuisines?: restaurant_cuisine_bool_exp | null;
};


/**
 * @name cuisine_inc_input
 * @type INPUT_OBJECT
 */
export type cuisine_inc_input = { id?: number | null };

/**
 * @name cuisine_insert_input
 * @type INPUT_OBJECT
 */
export type cuisine_insert_input = {
  game_cuisines?: game_cuisine_arr_rel_insert_input | null;
  id?: number | null;
  name?: string | null;
  restaurant_cuisines?: restaurant_cuisine_arr_rel_insert_input | null;
};

/**
 * @name cuisine_max_fields
 * @type OBJECT
 */
type t_cuisine_max_fields = FieldsType<
  {
    __typename: t_String<'cuisine_max_fields'>;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<'cuisine_max_fields'>
>;

/**
 * @name cuisine_max_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_max_order_by = {
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name cuisine_min_fields
 * @type OBJECT
 */
type t_cuisine_min_fields = FieldsType<
  {
    __typename: t_String<'cuisine_min_fields'>;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<'cuisine_min_fields'>
>;

/**
 * @name cuisine_min_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_min_order_by = {
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name cuisine_mutation_response
 * @type OBJECT
 */
type t_cuisine_mutation_response = FieldsType<
  {
    __typename: t_String<'cuisine_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_cuisine[];
  },
  Extension<'cuisine_mutation_response'>
>;

/**
 * @name cuisine_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type cuisine_obj_rel_insert_input = {
  data: cuisine_insert_input;
  on_conflict?: cuisine_on_conflict | null;
};

/**
 * @name cuisine_on_conflict
 * @type INPUT_OBJECT
 */
export type cuisine_on_conflict = {
  constraint: cuisine_constraint;
  update_columns: cuisine_update_column[];
  where?: cuisine_bool_exp | null;
};

/**
 * @name cuisine_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_order_by = {
  game_cuisines_aggregate?: game_cuisine_aggregate_order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  restaurant_cuisines_aggregate?: restaurant_cuisine_aggregate_order_by | null;
};

/**
 * @name cuisine_pk_columns_input
 * @type INPUT_OBJECT
 */
export type cuisine_pk_columns_input = { id: number };


/**
 * @name cuisine_set_input
 * @type INPUT_OBJECT
 */
export type cuisine_set_input = { id?: number | null; name?: string | null };

/**
 * @name cuisine_stddev_fields
 * @type OBJECT
 */
type t_cuisine_stddev_fields = FieldsType<
  {
    __typename: t_String<'cuisine_stddev_fields'>;
    id?: t_Float | null;
  },
  Extension<'cuisine_stddev_fields'>
>;

/**
 * @name cuisine_stddev_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_stddev_order_by = { id?: order_by | null };

/**
 * @name cuisine_stddev_pop_fields
 * @type OBJECT
 */
type t_cuisine_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'cuisine_stddev_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'cuisine_stddev_pop_fields'>
>;

/**
 * @name cuisine_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_stddev_pop_order_by = { id?: order_by | null };

/**
 * @name cuisine_stddev_samp_fields
 * @type OBJECT
 */
type t_cuisine_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'cuisine_stddev_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'cuisine_stddev_samp_fields'>
>;

/**
 * @name cuisine_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_stddev_samp_order_by = { id?: order_by | null };

/**
 * @name cuisine_sum_fields
 * @type OBJECT
 */
type t_cuisine_sum_fields = FieldsType<
  {
    __typename: t_String<'cuisine_sum_fields'>;
    id?: t_Int | null;
  },
  Extension<'cuisine_sum_fields'>
>;

/**
 * @name cuisine_sum_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_sum_order_by = { id?: order_by | null };


/**
 * @name cuisine_var_pop_fields
 * @type OBJECT
 */
type t_cuisine_var_pop_fields = FieldsType<
  {
    __typename: t_String<'cuisine_var_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'cuisine_var_pop_fields'>
>;

/**
 * @name cuisine_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_var_pop_order_by = { id?: order_by | null };

/**
 * @name cuisine_var_samp_fields
 * @type OBJECT
 */
type t_cuisine_var_samp_fields = FieldsType<
  {
    __typename: t_String<'cuisine_var_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'cuisine_var_samp_fields'>
>;

/**
 * @name cuisine_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_var_samp_order_by = { id?: order_by | null };

/**
 * @name cuisine_variance_fields
 * @type OBJECT
 */
type t_cuisine_variance_fields = FieldsType<
  {
    __typename: t_String<'cuisine_variance_fields'>;
    id?: t_Float | null;
  },
  Extension<'cuisine_variance_fields'>
>;

/**
 * @name cuisine_variance_order_by
 * @type INPUT_OBJECT
 */
export type cuisine_variance_order_by = { id?: order_by | null };

/**
 * @name favorite_item_entity
 * @type OBJECT
 */
type t_favorite_item_entity = FieldsType<
  {
    __typename: t_String<'favorite_item_entity'>;
    foodItemId: t_Int;
    isFavorite: t_Boolean;
    userId: t_Int;
  },
  Extension<'favorite_item_entity'>
>;

/**
 * @name favorite_item_entity_aggregate
 * @type OBJECT
 */
type t_favorite_item_entity_aggregate = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_aggregate'>;
    aggregate?: t_favorite_item_entity_aggregate_fields | null;
    nodes: t_favorite_item_entity[];
  },
  Extension<'favorite_item_entity_aggregate'>
>;

/**
 * @name favorite_item_entity_aggregate_fields
 * @type OBJECT
 */
type t_favorite_item_entity_aggregate_fields = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_aggregate_fields'>;
    avg?: t_favorite_item_entity_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: favorite_item_entity_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_favorite_item_entity_max_fields | null;
    min?: t_favorite_item_entity_min_fields | null;
    stddev?: t_favorite_item_entity_stddev_fields | null;
    stddev_pop?: t_favorite_item_entity_stddev_pop_fields | null;
    stddev_samp?: t_favorite_item_entity_stddev_samp_fields | null;
    sum?: t_favorite_item_entity_sum_fields | null;
    var_pop?: t_favorite_item_entity_var_pop_fields | null;
    var_samp?: t_favorite_item_entity_var_samp_fields | null;
    variance?: t_favorite_item_entity_variance_fields | null;
  },
  Extension<'favorite_item_entity_aggregate_fields'>
>;

/**
 * @name favorite_item_entity_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_aggregate_order_by = {
  avg?: favorite_item_entity_avg_order_by | null;
  count?: order_by | null;
  max?: favorite_item_entity_max_order_by | null;
  min?: favorite_item_entity_min_order_by | null;
  stddev?: favorite_item_entity_stddev_order_by | null;
  stddev_pop?: favorite_item_entity_stddev_pop_order_by | null;
  stddev_samp?: favorite_item_entity_stddev_samp_order_by | null;
  sum?: favorite_item_entity_sum_order_by | null;
  var_pop?: favorite_item_entity_var_pop_order_by | null;
  var_samp?: favorite_item_entity_var_samp_order_by | null;
  variance?: favorite_item_entity_variance_order_by | null;
};

/**
 * @name favorite_item_entity_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_arr_rel_insert_input = {
  data: favorite_item_entity_insert_input[];
  on_conflict?: favorite_item_entity_on_conflict | null;
};

/**
 * @name favorite_item_entity_avg_fields
 * @type OBJECT
 */
type t_favorite_item_entity_avg_fields = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_avg_fields'>;
    foodItemId?: t_Float | null;
    userId?: t_Float | null;
  },
  Extension<'favorite_item_entity_avg_fields'>
>;

/**
 * @name favorite_item_entity_avg_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_avg_order_by = {
  foodItemId?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name favorite_item_entity_bool_exp
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_bool_exp = {
  _and?: (favorite_item_entity_bool_exp | null)[] | null;
  _not?: favorite_item_entity_bool_exp | null;
  _or?: (favorite_item_entity_bool_exp | null)[] | null;
  foodItemId?: Int_comparison_exp | null;
  isFavorite?: Boolean_comparison_exp | null;
  userId?: Int_comparison_exp | null;
};


/**
 * @name favorite_item_entity_inc_input
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_inc_input = {
  foodItemId?: number | null;
  userId?: number | null;
};

/**
 * @name favorite_item_entity_insert_input
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_insert_input = {
  foodItemId?: number | null;
  isFavorite?: boolean | null;
  userId?: number | null;
};

/**
 * @name favorite_item_entity_max_fields
 * @type OBJECT
 */
type t_favorite_item_entity_max_fields = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_max_fields'>;
    foodItemId?: t_Int | null;
    userId?: t_Int | null;
  },
  Extension<'favorite_item_entity_max_fields'>
>;

/**
 * @name favorite_item_entity_max_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_max_order_by = {
  foodItemId?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name favorite_item_entity_min_fields
 * @type OBJECT
 */
type t_favorite_item_entity_min_fields = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_min_fields'>;
    foodItemId?: t_Int | null;
    userId?: t_Int | null;
  },
  Extension<'favorite_item_entity_min_fields'>
>;

/**
 * @name favorite_item_entity_min_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_min_order_by = {
  foodItemId?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name favorite_item_entity_mutation_response
 * @type OBJECT
 */
type t_favorite_item_entity_mutation_response = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_favorite_item_entity[];
  },
  Extension<'favorite_item_entity_mutation_response'>
>;

/**
 * @name favorite_item_entity_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_obj_rel_insert_input = {
  data: favorite_item_entity_insert_input;
  on_conflict?: favorite_item_entity_on_conflict | null;
};

/**
 * @name favorite_item_entity_on_conflict
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_on_conflict = {
  constraint: favorite_item_entity_constraint;
  update_columns: favorite_item_entity_update_column[];
  where?: favorite_item_entity_bool_exp | null;
};

/**
 * @name favorite_item_entity_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_order_by = {
  foodItemId?: order_by | null;
  isFavorite?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name favorite_item_entity_pk_columns_input
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_pk_columns_input = {
  foodItemId: number;
  userId: number;
};


/**
 * @name favorite_item_entity_set_input
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_set_input = {
  foodItemId?: number | null;
  isFavorite?: boolean | null;
  userId?: number | null;
};

/**
 * @name favorite_item_entity_stddev_fields
 * @type OBJECT
 */
type t_favorite_item_entity_stddev_fields = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_stddev_fields'>;
    foodItemId?: t_Float | null;
    userId?: t_Float | null;
  },
  Extension<'favorite_item_entity_stddev_fields'>
>;

/**
 * @name favorite_item_entity_stddev_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_stddev_order_by = {
  foodItemId?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name favorite_item_entity_stddev_pop_fields
 * @type OBJECT
 */
type t_favorite_item_entity_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_stddev_pop_fields'>;
    foodItemId?: t_Float | null;
    userId?: t_Float | null;
  },
  Extension<'favorite_item_entity_stddev_pop_fields'>
>;

/**
 * @name favorite_item_entity_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_stddev_pop_order_by = {
  foodItemId?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name favorite_item_entity_stddev_samp_fields
 * @type OBJECT
 */
type t_favorite_item_entity_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_stddev_samp_fields'>;
    foodItemId?: t_Float | null;
    userId?: t_Float | null;
  },
  Extension<'favorite_item_entity_stddev_samp_fields'>
>;

/**
 * @name favorite_item_entity_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_stddev_samp_order_by = {
  foodItemId?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name favorite_item_entity_sum_fields
 * @type OBJECT
 */
type t_favorite_item_entity_sum_fields = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_sum_fields'>;
    foodItemId?: t_Int | null;
    userId?: t_Int | null;
  },
  Extension<'favorite_item_entity_sum_fields'>
>;

/**
 * @name favorite_item_entity_sum_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_sum_order_by = {
  foodItemId?: order_by | null;
  userId?: order_by | null;
};


/**
 * @name favorite_item_entity_var_pop_fields
 * @type OBJECT
 */
type t_favorite_item_entity_var_pop_fields = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_var_pop_fields'>;
    foodItemId?: t_Float | null;
    userId?: t_Float | null;
  },
  Extension<'favorite_item_entity_var_pop_fields'>
>;

/**
 * @name favorite_item_entity_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_var_pop_order_by = {
  foodItemId?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name favorite_item_entity_var_samp_fields
 * @type OBJECT
 */
type t_favorite_item_entity_var_samp_fields = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_var_samp_fields'>;
    foodItemId?: t_Float | null;
    userId?: t_Float | null;
  },
  Extension<'favorite_item_entity_var_samp_fields'>
>;

/**
 * @name favorite_item_entity_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_var_samp_order_by = {
  foodItemId?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name favorite_item_entity_variance_fields
 * @type OBJECT
 */
type t_favorite_item_entity_variance_fields = FieldsType<
  {
    __typename: t_String<'favorite_item_entity_variance_fields'>;
    foodItemId?: t_Float | null;
    userId?: t_Float | null;
  },
  Extension<'favorite_item_entity_variance_fields'>
>;

/**
 * @name favorite_item_entity_variance_order_by
 * @type INPUT_OBJECT
 */
export type favorite_item_entity_variance_order_by = {
  foodItemId?: order_by | null;
  userId?: order_by | null;
};

/**
 * @name float8
 * @type SCALAR
 */
type t_float8<T extends any = any> = ScalarType<T, Extension<'float8'>>;

/**
 * @name float8_comparison_exp
 * @type INPUT_OBJECT
 */
export type float8_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name food_item
 * @type OBJECT
 */
type t_food_item = FieldsType<
  {
    __typename: t_String<'food_item'>;
    animal_products: t__food_contains_enum;
    beef: t__food_contains_enum;
    chicken: t__food_contains_enum;
    description: t_String;
    exotic: t__food_contains_enum;
    fish: t__food_contains_enum;

    /**
     * An array relationship
     */
    food_item_media: FieldsTypeArg<
      {
        distinct_on?: food_item_media_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_media_order_by[] | null;
        where?: food_item_media_bool_exp | null;
      },
      t_food_item_media[]
    >;

    /**
     * An aggregated array relationship
     */
    food_item_media_aggregate: FieldsTypeArg<
      {
        distinct_on?: food_item_media_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_media_order_by[] | null;
        where?: food_item_media_bool_exp | null;
      },
      t_food_item_media_aggregate
    >;
    gluten: t__food_contains_enum;
    id: t_Int;
    is_game_ready: t_Boolean;
    name: t_String;
    pork: t__food_contains_enum;

    /**
     * An array relationship
     */
    restaurant_items: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item[]
    >;

    /**
     * An aggregated array relationship
     */
    restaurant_items_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item_aggregate
    >;
    shellfish: t__food_contains_enum;
    turkey: t__food_contains_enum;
  },
  Extension<'food_item'>
>;

/**
 * @name food_item_aggregate
 * @type OBJECT
 */
type t_food_item_aggregate = FieldsType<
  {
    __typename: t_String<'food_item_aggregate'>;
    aggregate?: t_food_item_aggregate_fields | null;
    nodes: t_food_item[];
  },
  Extension<'food_item_aggregate'>
>;

/**
 * @name food_item_aggregate_fields
 * @type OBJECT
 */
type t_food_item_aggregate_fields = FieldsType<
  {
    __typename: t_String<'food_item_aggregate_fields'>;
    avg?: t_food_item_avg_fields | null;
    count?: FieldsTypeArg<
      { columns?: food_item_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_food_item_max_fields | null;
    min?: t_food_item_min_fields | null;
    stddev?: t_food_item_stddev_fields | null;
    stddev_pop?: t_food_item_stddev_pop_fields | null;
    stddev_samp?: t_food_item_stddev_samp_fields | null;
    sum?: t_food_item_sum_fields | null;
    var_pop?: t_food_item_var_pop_fields | null;
    var_samp?: t_food_item_var_samp_fields | null;
    variance?: t_food_item_variance_fields | null;
  },
  Extension<'food_item_aggregate_fields'>
>;

/**
 * @name food_item_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type food_item_aggregate_order_by = {
  avg?: food_item_avg_order_by | null;
  count?: order_by | null;
  max?: food_item_max_order_by | null;
  min?: food_item_min_order_by | null;
  stddev?: food_item_stddev_order_by | null;
  stddev_pop?: food_item_stddev_pop_order_by | null;
  stddev_samp?: food_item_stddev_samp_order_by | null;
  sum?: food_item_sum_order_by | null;
  var_pop?: food_item_var_pop_order_by | null;
  var_samp?: food_item_var_samp_order_by | null;
  variance?: food_item_variance_order_by | null;
};

/**
 * @name food_item_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type food_item_arr_rel_insert_input = {
  data: food_item_insert_input[];
  on_conflict?: food_item_on_conflict | null;
};

/**
 * @name food_item_avg_fields
 * @type OBJECT
 */
type t_food_item_avg_fields = FieldsType<
  {
    __typename: t_String<'food_item_avg_fields'>;
    id?: t_Float | null;
  },
  Extension<'food_item_avg_fields'>
>;

/**
 * @name food_item_avg_order_by
 * @type INPUT_OBJECT
 */
export type food_item_avg_order_by = { id?: order_by | null };

/**
 * @name food_item_bool_exp
 * @type INPUT_OBJECT
 */
export type food_item_bool_exp = {
  _and?: (food_item_bool_exp | null)[] | null;
  _not?: food_item_bool_exp | null;
  _or?: (food_item_bool_exp | null)[] | null;
  animal_products?: _food_contains_enum_comparison_exp | null;
  beef?: _food_contains_enum_comparison_exp | null;
  chicken?: _food_contains_enum_comparison_exp | null;
  description?: String_comparison_exp | null;
  exotic?: _food_contains_enum_comparison_exp | null;
  fish?: _food_contains_enum_comparison_exp | null;
  food_item_media?: food_item_media_bool_exp | null;
  gluten?: _food_contains_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  is_game_ready?: Boolean_comparison_exp | null;
  name?: String_comparison_exp | null;
  pork?: _food_contains_enum_comparison_exp | null;
  restaurant_items?: restaurant_item_bool_exp | null;
  shellfish?: _food_contains_enum_comparison_exp | null;
  turkey?: _food_contains_enum_comparison_exp | null;
};


/**
 * @name food_item_inc_input
 * @type INPUT_OBJECT
 */
export type food_item_inc_input = { id?: number | null };

/**
 * @name food_item_insert_input
 * @type INPUT_OBJECT
 */
export type food_item_insert_input = {
  animal_products?: any | null;
  beef?: any | null;
  chicken?: any | null;
  description?: string | null;
  exotic?: any | null;
  fish?: any | null;
  food_item_media?: food_item_media_arr_rel_insert_input | null;
  gluten?: any | null;
  id?: number | null;
  is_game_ready?: boolean | null;
  name?: string | null;
  pork?: any | null;
  restaurant_items?: restaurant_item_arr_rel_insert_input | null;
  shellfish?: any | null;
  turkey?: any | null;
};

/**
 * @name food_item_max_fields
 * @type OBJECT
 */
type t_food_item_max_fields = FieldsType<
  {
    __typename: t_String<'food_item_max_fields'>;
    description?: t_String | null;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<'food_item_max_fields'>
>;

/**
 * @name food_item_max_order_by
 * @type INPUT_OBJECT
 */
export type food_item_max_order_by = {
  description?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name food_item_media
 * @type OBJECT
 */
type t_food_item_media = FieldsType<
  {
    __typename: t_String<'food_item_media'>;
    author_id: t_Int;
    caption?: t_String | null;

    /**
     * An object relationship
     */
    food_item: t_food_item;
    food_item_id: t_Int;

    /**
     * An array relationship
     */
    game_choices: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice[]
    >;

    /**
     * An aggregated array relationship
     */
    game_choices_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice_aggregate
    >;
    id: t_Int;

    /**
     * An object relationship
     */
    media_author: t_media_author;
    src: t_String;
    type: t_food_item_media_type_enum;
  },
  Extension<'food_item_media'>
>;

/**
 * @name food_item_media_aggregate
 * @type OBJECT
 */
type t_food_item_media_aggregate = FieldsType<
  {
    __typename: t_String<'food_item_media_aggregate'>;
    aggregate?: t_food_item_media_aggregate_fields | null;
    nodes: t_food_item_media[];
  },
  Extension<'food_item_media_aggregate'>
>;

/**
 * @name food_item_media_aggregate_fields
 * @type OBJECT
 */
type t_food_item_media_aggregate_fields = FieldsType<
  {
    __typename: t_String<'food_item_media_aggregate_fields'>;
    avg?: t_food_item_media_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: food_item_media_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_food_item_media_max_fields | null;
    min?: t_food_item_media_min_fields | null;
    stddev?: t_food_item_media_stddev_fields | null;
    stddev_pop?: t_food_item_media_stddev_pop_fields | null;
    stddev_samp?: t_food_item_media_stddev_samp_fields | null;
    sum?: t_food_item_media_sum_fields | null;
    var_pop?: t_food_item_media_var_pop_fields | null;
    var_samp?: t_food_item_media_var_samp_fields | null;
    variance?: t_food_item_media_variance_fields | null;
  },
  Extension<'food_item_media_aggregate_fields'>
>;

/**
 * @name food_item_media_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_aggregate_order_by = {
  avg?: food_item_media_avg_order_by | null;
  count?: order_by | null;
  max?: food_item_media_max_order_by | null;
  min?: food_item_media_min_order_by | null;
  stddev?: food_item_media_stddev_order_by | null;
  stddev_pop?: food_item_media_stddev_pop_order_by | null;
  stddev_samp?: food_item_media_stddev_samp_order_by | null;
  sum?: food_item_media_sum_order_by | null;
  var_pop?: food_item_media_var_pop_order_by | null;
  var_samp?: food_item_media_var_samp_order_by | null;
  variance?: food_item_media_variance_order_by | null;
};

/**
 * @name food_item_media_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type food_item_media_arr_rel_insert_input = {
  data: food_item_media_insert_input[];
  on_conflict?: food_item_media_on_conflict | null;
};

/**
 * @name food_item_media_avg_fields
 * @type OBJECT
 */
type t_food_item_media_avg_fields = FieldsType<
  {
    __typename: t_String<'food_item_media_avg_fields'>;
    author_id?: t_Float | null;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'food_item_media_avg_fields'>
>;

/**
 * @name food_item_media_avg_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_avg_order_by = {
  author_id?: order_by | null;
  food_item_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name food_item_media_bool_exp
 * @type INPUT_OBJECT
 */
export type food_item_media_bool_exp = {
  _and?: (food_item_media_bool_exp | null)[] | null;
  _not?: food_item_media_bool_exp | null;
  _or?: (food_item_media_bool_exp | null)[] | null;
  author_id?: Int_comparison_exp | null;
  caption?: String_comparison_exp | null;
  food_item?: food_item_bool_exp | null;
  food_item_id?: Int_comparison_exp | null;
  game_choices?: game_choice_bool_exp | null;
  id?: Int_comparison_exp | null;
  media_author?: media_author_bool_exp | null;
  src?: String_comparison_exp | null;
  type?: food_item_media_type_enum_comparison_exp | null;
};


/**
 * @name food_item_media_inc_input
 * @type INPUT_OBJECT
 */
export type food_item_media_inc_input = {
  author_id?: number | null;
  food_item_id?: number | null;
  id?: number | null;
};

/**
 * @name food_item_media_insert_input
 * @type INPUT_OBJECT
 */
export type food_item_media_insert_input = {
  author_id?: number | null;
  caption?: string | null;
  food_item?: food_item_obj_rel_insert_input | null;
  food_item_id?: number | null;
  game_choices?: game_choice_arr_rel_insert_input | null;
  id?: number | null;
  media_author?: media_author_obj_rel_insert_input | null;
  src?: string | null;
  type?: any | null;
};

/**
 * @name food_item_media_max_fields
 * @type OBJECT
 */
type t_food_item_media_max_fields = FieldsType<
  {
    __typename: t_String<'food_item_media_max_fields'>;
    author_id?: t_Int | null;
    caption?: t_String | null;
    food_item_id?: t_Int | null;
    id?: t_Int | null;
    src?: t_String | null;
  },
  Extension<'food_item_media_max_fields'>
>;

/**
 * @name food_item_media_max_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_max_order_by = {
  author_id?: order_by | null;
  caption?: order_by | null;
  food_item_id?: order_by | null;
  id?: order_by | null;
  src?: order_by | null;
};

/**
 * @name food_item_media_min_fields
 * @type OBJECT
 */
type t_food_item_media_min_fields = FieldsType<
  {
    __typename: t_String<'food_item_media_min_fields'>;
    author_id?: t_Int | null;
    caption?: t_String | null;
    food_item_id?: t_Int | null;
    id?: t_Int | null;
    src?: t_String | null;
  },
  Extension<'food_item_media_min_fields'>
>;

/**
 * @name food_item_media_min_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_min_order_by = {
  author_id?: order_by | null;
  caption?: order_by | null;
  food_item_id?: order_by | null;
  id?: order_by | null;
  src?: order_by | null;
};

/**
 * @name food_item_media_mutation_response
 * @type OBJECT
 */
type t_food_item_media_mutation_response = FieldsType<
  {
    __typename: t_String<'food_item_media_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_food_item_media[];
  },
  Extension<'food_item_media_mutation_response'>
>;

/**
 * @name food_item_media_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type food_item_media_obj_rel_insert_input = {
  data: food_item_media_insert_input;
  on_conflict?: food_item_media_on_conflict | null;
};

/**
 * @name food_item_media_on_conflict
 * @type INPUT_OBJECT
 */
export type food_item_media_on_conflict = {
  constraint: food_item_media_constraint;
  update_columns: food_item_media_update_column[];
  where?: food_item_media_bool_exp | null;
};

/**
 * @name food_item_media_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_order_by = {
  author_id?: order_by | null;
  caption?: order_by | null;
  food_item?: food_item_order_by | null;
  food_item_id?: order_by | null;
  game_choices_aggregate?: game_choice_aggregate_order_by | null;
  id?: order_by | null;
  media_author?: media_author_order_by | null;
  src?: order_by | null;
  type?: order_by | null;
};

/**
 * @name food_item_media_pk_columns_input
 * @type INPUT_OBJECT
 */
export type food_item_media_pk_columns_input = { id: number };


/**
 * @name food_item_media_set_input
 * @type INPUT_OBJECT
 */
export type food_item_media_set_input = {
  author_id?: number | null;
  caption?: string | null;
  food_item_id?: number | null;
  id?: number | null;
  src?: string | null;
  type?: any | null;
};

/**
 * @name food_item_media_stddev_fields
 * @type OBJECT
 */
type t_food_item_media_stddev_fields = FieldsType<
  {
    __typename: t_String<'food_item_media_stddev_fields'>;
    author_id?: t_Float | null;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'food_item_media_stddev_fields'>
>;

/**
 * @name food_item_media_stddev_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_stddev_order_by = {
  author_id?: order_by | null;
  food_item_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name food_item_media_stddev_pop_fields
 * @type OBJECT
 */
type t_food_item_media_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'food_item_media_stddev_pop_fields'>;
    author_id?: t_Float | null;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'food_item_media_stddev_pop_fields'>
>;

/**
 * @name food_item_media_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_stddev_pop_order_by = {
  author_id?: order_by | null;
  food_item_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name food_item_media_stddev_samp_fields
 * @type OBJECT
 */
type t_food_item_media_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'food_item_media_stddev_samp_fields'>;
    author_id?: t_Float | null;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'food_item_media_stddev_samp_fields'>
>;

/**
 * @name food_item_media_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_stddev_samp_order_by = {
  author_id?: order_by | null;
  food_item_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name food_item_media_sum_fields
 * @type OBJECT
 */
type t_food_item_media_sum_fields = FieldsType<
  {
    __typename: t_String<'food_item_media_sum_fields'>;
    author_id?: t_Int | null;
    food_item_id?: t_Int | null;
    id?: t_Int | null;
  },
  Extension<'food_item_media_sum_fields'>
>;

/**
 * @name food_item_media_sum_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_sum_order_by = {
  author_id?: order_by | null;
  food_item_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name food_item_media_type_enum
 * @type SCALAR
 */
type t_food_item_media_type_enum<T extends any = any> = ScalarType<
  T,
  Extension<'food_item_media_type_enum'>
>;

/**
 * @name food_item_media_type_enum_comparison_exp
 * @type INPUT_OBJECT
 */
export type food_item_media_type_enum_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};


/**
 * @name food_item_media_var_pop_fields
 * @type OBJECT
 */
type t_food_item_media_var_pop_fields = FieldsType<
  {
    __typename: t_String<'food_item_media_var_pop_fields'>;
    author_id?: t_Float | null;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'food_item_media_var_pop_fields'>
>;

/**
 * @name food_item_media_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_var_pop_order_by = {
  author_id?: order_by | null;
  food_item_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name food_item_media_var_samp_fields
 * @type OBJECT
 */
type t_food_item_media_var_samp_fields = FieldsType<
  {
    __typename: t_String<'food_item_media_var_samp_fields'>;
    author_id?: t_Float | null;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'food_item_media_var_samp_fields'>
>;

/**
 * @name food_item_media_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_var_samp_order_by = {
  author_id?: order_by | null;
  food_item_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name food_item_media_variance_fields
 * @type OBJECT
 */
type t_food_item_media_variance_fields = FieldsType<
  {
    __typename: t_String<'food_item_media_variance_fields'>;
    author_id?: t_Float | null;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'food_item_media_variance_fields'>
>;

/**
 * @name food_item_media_variance_order_by
 * @type INPUT_OBJECT
 */
export type food_item_media_variance_order_by = {
  author_id?: order_by | null;
  food_item_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name food_item_min_fields
 * @type OBJECT
 */
type t_food_item_min_fields = FieldsType<
  {
    __typename: t_String<'food_item_min_fields'>;
    description?: t_String | null;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<'food_item_min_fields'>
>;

/**
 * @name food_item_min_order_by
 * @type INPUT_OBJECT
 */
export type food_item_min_order_by = {
  description?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name food_item_mutation_response
 * @type OBJECT
 */
type t_food_item_mutation_response = FieldsType<
  {
    __typename: t_String<'food_item_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_food_item[];
  },
  Extension<'food_item_mutation_response'>
>;

/**
 * @name food_item_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type food_item_obj_rel_insert_input = {
  data: food_item_insert_input;
  on_conflict?: food_item_on_conflict | null;
};

/**
 * @name food_item_on_conflict
 * @type INPUT_OBJECT
 */
export type food_item_on_conflict = {
  constraint: food_item_constraint;
  update_columns: food_item_update_column[];
  where?: food_item_bool_exp | null;
};

/**
 * @name food_item_order_by
 * @type INPUT_OBJECT
 */
export type food_item_order_by = {
  animal_products?: order_by | null;
  beef?: order_by | null;
  chicken?: order_by | null;
  description?: order_by | null;
  exotic?: order_by | null;
  fish?: order_by | null;
  food_item_media_aggregate?: food_item_media_aggregate_order_by | null;
  gluten?: order_by | null;
  id?: order_by | null;
  is_game_ready?: order_by | null;
  name?: order_by | null;
  pork?: order_by | null;
  restaurant_items_aggregate?: restaurant_item_aggregate_order_by | null;
  shellfish?: order_by | null;
  turkey?: order_by | null;
};

/**
 * @name food_item_pk_columns_input
 * @type INPUT_OBJECT
 */
export type food_item_pk_columns_input = { id: number };


/**
 * @name food_item_set_input
 * @type INPUT_OBJECT
 */
export type food_item_set_input = {
  animal_products?: any | null;
  beef?: any | null;
  chicken?: any | null;
  description?: string | null;
  exotic?: any | null;
  fish?: any | null;
  gluten?: any | null;
  id?: number | null;
  is_game_ready?: boolean | null;
  name?: string | null;
  pork?: any | null;
  shellfish?: any | null;
  turkey?: any | null;
};

/**
 * @name food_item_stddev_fields
 * @type OBJECT
 */
type t_food_item_stddev_fields = FieldsType<
  {
    __typename: t_String<'food_item_stddev_fields'>;
    id?: t_Float | null;
  },
  Extension<'food_item_stddev_fields'>
>;

/**
 * @name food_item_stddev_order_by
 * @type INPUT_OBJECT
 */
export type food_item_stddev_order_by = { id?: order_by | null };

/**
 * @name food_item_stddev_pop_fields
 * @type OBJECT
 */
type t_food_item_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'food_item_stddev_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'food_item_stddev_pop_fields'>
>;

/**
 * @name food_item_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type food_item_stddev_pop_order_by = { id?: order_by | null };

/**
 * @name food_item_stddev_samp_fields
 * @type OBJECT
 */
type t_food_item_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'food_item_stddev_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'food_item_stddev_samp_fields'>
>;

/**
 * @name food_item_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type food_item_stddev_samp_order_by = { id?: order_by | null };

/**
 * @name food_item_sum_fields
 * @type OBJECT
 */
type t_food_item_sum_fields = FieldsType<
  {
    __typename: t_String<'food_item_sum_fields'>;
    id?: t_Int | null;
  },
  Extension<'food_item_sum_fields'>
>;

/**
 * @name food_item_sum_order_by
 * @type INPUT_OBJECT
 */
export type food_item_sum_order_by = { id?: order_by | null };


/**
 * @name food_item_var_pop_fields
 * @type OBJECT
 */
type t_food_item_var_pop_fields = FieldsType<
  {
    __typename: t_String<'food_item_var_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'food_item_var_pop_fields'>
>;

/**
 * @name food_item_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type food_item_var_pop_order_by = { id?: order_by | null };

/**
 * @name food_item_var_samp_fields
 * @type OBJECT
 */
type t_food_item_var_samp_fields = FieldsType<
  {
    __typename: t_String<'food_item_var_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'food_item_var_samp_fields'>
>;

/**
 * @name food_item_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type food_item_var_samp_order_by = { id?: order_by | null };

/**
 * @name food_item_variance_fields
 * @type OBJECT
 */
type t_food_item_variance_fields = FieldsType<
  {
    __typename: t_String<'food_item_variance_fields'>;
    id?: t_Float | null;
  },
  Extension<'food_item_variance_fields'>
>;

/**
 * @name food_item_variance_order_by
 * @type INPUT_OBJECT
 */
export type food_item_variance_order_by = { id?: order_by | null };

/**
 * @name game
 * @type OBJECT
 */
type t_game = FieldsType<
  {
    __typename: t_String<'game'>;
    address?: t_String | null;
    cuisines_filter_mode: t_game_cuisines_filter_mode_enum;
    eat_time: t_timestamp;

    /**
     * An array relationship
     */
    game_choices: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice[]
    >;

    /**
     * An aggregated array relationship
     */
    game_choices_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice_aggregate
    >;

    /**
     * An object relationship
     */
    game_creator: t_user;
    game_creator_id: t_Int;

    /**
     * An array relationship
     */
    game_cuisines: FieldsTypeArg<
      {
        distinct_on?: game_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_cuisine_order_by[] | null;
        where?: game_cuisine_bool_exp | null;
      },
      t_game_cuisine[]
    >;

    /**
     * An aggregated array relationship
     */
    game_cuisines_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_cuisine_order_by[] | null;
        where?: game_cuisine_bool_exp | null;
      },
      t_game_cuisine_aggregate
    >;

    /**
     * An array relationship
     */
    game_players: FieldsTypeArg<
      {
        distinct_on?: game_player_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_player_order_by[] | null;
        where?: game_player_bool_exp | null;
      },
      t_game_player[]
    >;

    /**
     * An aggregated array relationship
     */
    game_players_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_player_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_player_order_by[] | null;
        where?: game_player_bool_exp | null;
      },
      t_game_player_aggregate
    >;
    game_status: t_game_game_status_enum;
    id: t_Int;
    latitude: t_float8;
    longitude: t_float8;
    menus_filter: t__varchar;
    mode: t_String;
    prices?: t__int4 | null;
    search_magnitude: t_Int;
    time_created: t_timestamp;
    unit_of_measure: t_game_unit_of_measure_enum;

    /**
     * An object relationship
     */
    winning_restaurant?: t_restaurant | null;
    winning_restaurant_id?: t_Int | null;
  },
  Extension<'game'>
>;

/**
 * @name game_aggregate
 * @type OBJECT
 */
type t_game_aggregate = FieldsType<
  {
    __typename: t_String<'game_aggregate'>;
    aggregate?: t_game_aggregate_fields | null;
    nodes: t_game[];
  },
  Extension<'game_aggregate'>
>;

/**
 * @name game_aggregate_fields
 * @type OBJECT
 */
type t_game_aggregate_fields = FieldsType<
  {
    __typename: t_String<'game_aggregate_fields'>;
    avg?: t_game_avg_fields | null;
    count?: FieldsTypeArg<
      { columns?: game_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_game_max_fields | null;
    min?: t_game_min_fields | null;
    stddev?: t_game_stddev_fields | null;
    stddev_pop?: t_game_stddev_pop_fields | null;
    stddev_samp?: t_game_stddev_samp_fields | null;
    sum?: t_game_sum_fields | null;
    var_pop?: t_game_var_pop_fields | null;
    var_samp?: t_game_var_samp_fields | null;
    variance?: t_game_variance_fields | null;
  },
  Extension<'game_aggregate_fields'>
>;

/**
 * @name game_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type game_aggregate_order_by = {
  avg?: game_avg_order_by | null;
  count?: order_by | null;
  max?: game_max_order_by | null;
  min?: game_min_order_by | null;
  stddev?: game_stddev_order_by | null;
  stddev_pop?: game_stddev_pop_order_by | null;
  stddev_samp?: game_stddev_samp_order_by | null;
  sum?: game_sum_order_by | null;
  var_pop?: game_var_pop_order_by | null;
  var_samp?: game_var_samp_order_by | null;
  variance?: game_variance_order_by | null;
};

/**
 * @name game_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type game_arr_rel_insert_input = {
  data: game_insert_input[];
  on_conflict?: game_on_conflict | null;
};

/**
 * @name game_avg_fields
 * @type OBJECT
 */
type t_game_avg_fields = FieldsType<
  {
    __typename: t_String<'game_avg_fields'>;
    game_creator_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    search_magnitude?: t_Float | null;
    winning_restaurant_id?: t_Float | null;
  },
  Extension<'game_avg_fields'>
>;

/**
 * @name game_avg_order_by
 * @type INPUT_OBJECT
 */
export type game_avg_order_by = {
  game_creator_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  search_magnitude?: order_by | null;
  winning_restaurant_id?: order_by | null;
};

/**
 * @name game_bool_exp
 * @type INPUT_OBJECT
 */
export type game_bool_exp = {
  _and?: (game_bool_exp | null)[] | null;
  _not?: game_bool_exp | null;
  _or?: (game_bool_exp | null)[] | null;
  address?: String_comparison_exp | null;
  cuisines_filter_mode?: game_cuisines_filter_mode_enum_comparison_exp | null;
  eat_time?: timestamp_comparison_exp | null;
  game_choices?: game_choice_bool_exp | null;
  game_creator?: user_bool_exp | null;
  game_creator_id?: Int_comparison_exp | null;
  game_cuisines?: game_cuisine_bool_exp | null;
  game_players?: game_player_bool_exp | null;
  game_status?: game_game_status_enum_comparison_exp | null;
  id?: Int_comparison_exp | null;
  latitude?: float8_comparison_exp | null;
  longitude?: float8_comparison_exp | null;
  menus_filter?: _varchar_comparison_exp | null;
  mode?: String_comparison_exp | null;
  prices?: _int4_comparison_exp | null;
  search_magnitude?: Int_comparison_exp | null;
  time_created?: timestamp_comparison_exp | null;
  unit_of_measure?: game_unit_of_measure_enum_comparison_exp | null;
  winning_restaurant?: restaurant_bool_exp | null;
  winning_restaurant_id?: Int_comparison_exp | null;
};

/**
 * @name game_choice
 * @type OBJECT
 */
type t_game_choice = FieldsType<
  {
    __typename: t_String<'game_choice'>;
    chosen_media_id?: t_Int | null;

    /**
     * An object relationship
     */
    food_item_medium?: t_food_item_media | null;

    /**
     * An object relationship
     */
    game: t_game;
    game_id: t_Int;

    /**
     * An object relationship
     */
    game_player: t_game_player;
    id: t_Int;
    pick_rank?: t_Int | null;
    player_id: t_Int;

    /**
     * An object relationship
     */
    restaurant: t_restaurant;
    restaurant_id: t_Int;

    /**
     * An object relationship
     */
    restaurant_item: t_restaurant_item;
    restaurant_item_id: t_Int;
    status: t_game_choice_status_enum;
  },
  Extension<'game_choice'>
>;

/**
 * @name game_choice_aggregate
 * @type OBJECT
 */
type t_game_choice_aggregate = FieldsType<
  {
    __typename: t_String<'game_choice_aggregate'>;
    aggregate?: t_game_choice_aggregate_fields | null;
    nodes: t_game_choice[];
  },
  Extension<'game_choice_aggregate'>
>;

/**
 * @name game_choice_aggregate_fields
 * @type OBJECT
 */
type t_game_choice_aggregate_fields = FieldsType<
  {
    __typename: t_String<'game_choice_aggregate_fields'>;
    avg?: t_game_choice_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: game_choice_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_game_choice_max_fields | null;
    min?: t_game_choice_min_fields | null;
    stddev?: t_game_choice_stddev_fields | null;
    stddev_pop?: t_game_choice_stddev_pop_fields | null;
    stddev_samp?: t_game_choice_stddev_samp_fields | null;
    sum?: t_game_choice_sum_fields | null;
    var_pop?: t_game_choice_var_pop_fields | null;
    var_samp?: t_game_choice_var_samp_fields | null;
    variance?: t_game_choice_variance_fields | null;
  },
  Extension<'game_choice_aggregate_fields'>
>;

/**
 * @name game_choice_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_aggregate_order_by = {
  avg?: game_choice_avg_order_by | null;
  count?: order_by | null;
  max?: game_choice_max_order_by | null;
  min?: game_choice_min_order_by | null;
  stddev?: game_choice_stddev_order_by | null;
  stddev_pop?: game_choice_stddev_pop_order_by | null;
  stddev_samp?: game_choice_stddev_samp_order_by | null;
  sum?: game_choice_sum_order_by | null;
  var_pop?: game_choice_var_pop_order_by | null;
  var_samp?: game_choice_var_samp_order_by | null;
  variance?: game_choice_variance_order_by | null;
};

/**
 * @name game_choice_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type game_choice_arr_rel_insert_input = {
  data: game_choice_insert_input[];
  on_conflict?: game_choice_on_conflict | null;
};

/**
 * @name game_choice_avg_fields
 * @type OBJECT
 */
type t_game_choice_avg_fields = FieldsType<
  {
    __typename: t_String<'game_choice_avg_fields'>;
    chosen_media_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
    pick_rank?: t_Float | null;
    player_id?: t_Float | null;
    restaurant_id?: t_Float | null;
    restaurant_item_id?: t_Float | null;
  },
  Extension<'game_choice_avg_fields'>
>;

/**
 * @name game_choice_avg_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_avg_order_by = {
  chosen_media_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
  pick_rank?: order_by | null;
  player_id?: order_by | null;
  restaurant_id?: order_by | null;
  restaurant_item_id?: order_by | null;
};

/**
 * @name game_choice_bool_exp
 * @type INPUT_OBJECT
 */
export type game_choice_bool_exp = {
  _and?: (game_choice_bool_exp | null)[] | null;
  _not?: game_choice_bool_exp | null;
  _or?: (game_choice_bool_exp | null)[] | null;
  chosen_media_id?: Int_comparison_exp | null;
  food_item_medium?: food_item_media_bool_exp | null;
  game?: game_bool_exp | null;
  game_id?: Int_comparison_exp | null;
  game_player?: game_player_bool_exp | null;
  id?: Int_comparison_exp | null;
  pick_rank?: Int_comparison_exp | null;
  player_id?: Int_comparison_exp | null;
  restaurant?: restaurant_bool_exp | null;
  restaurant_id?: Int_comparison_exp | null;
  restaurant_item?: restaurant_item_bool_exp | null;
  restaurant_item_id?: Int_comparison_exp | null;
  status?: game_choice_status_enum_comparison_exp | null;
};


/**
 * @name game_choice_inc_input
 * @type INPUT_OBJECT
 */
export type game_choice_inc_input = {
  chosen_media_id?: number | null;
  game_id?: number | null;
  id?: number | null;
  pick_rank?: number | null;
  player_id?: number | null;
  restaurant_id?: number | null;
  restaurant_item_id?: number | null;
};

/**
 * @name game_choice_insert_input
 * @type INPUT_OBJECT
 */
export type game_choice_insert_input = {
  chosen_media_id?: number | null;
  food_item_medium?: food_item_media_obj_rel_insert_input | null;
  game?: game_obj_rel_insert_input | null;
  game_id?: number | null;
  game_player?: game_player_obj_rel_insert_input | null;
  id?: number | null;
  pick_rank?: number | null;
  player_id?: number | null;
  restaurant?: restaurant_obj_rel_insert_input | null;
  restaurant_id?: number | null;
  restaurant_item?: restaurant_item_obj_rel_insert_input | null;
  restaurant_item_id?: number | null;
  status?: any | null;
};

/**
 * @name game_choice_max_fields
 * @type OBJECT
 */
type t_game_choice_max_fields = FieldsType<
  {
    __typename: t_String<'game_choice_max_fields'>;
    chosen_media_id?: t_Int | null;
    game_id?: t_Int | null;
    id?: t_Int | null;
    pick_rank?: t_Int | null;
    player_id?: t_Int | null;
    restaurant_id?: t_Int | null;
    restaurant_item_id?: t_Int | null;
  },
  Extension<'game_choice_max_fields'>
>;

/**
 * @name game_choice_max_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_max_order_by = {
  chosen_media_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
  pick_rank?: order_by | null;
  player_id?: order_by | null;
  restaurant_id?: order_by | null;
  restaurant_item_id?: order_by | null;
};

/**
 * @name game_choice_min_fields
 * @type OBJECT
 */
type t_game_choice_min_fields = FieldsType<
  {
    __typename: t_String<'game_choice_min_fields'>;
    chosen_media_id?: t_Int | null;
    game_id?: t_Int | null;
    id?: t_Int | null;
    pick_rank?: t_Int | null;
    player_id?: t_Int | null;
    restaurant_id?: t_Int | null;
    restaurant_item_id?: t_Int | null;
  },
  Extension<'game_choice_min_fields'>
>;

/**
 * @name game_choice_min_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_min_order_by = {
  chosen_media_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
  pick_rank?: order_by | null;
  player_id?: order_by | null;
  restaurant_id?: order_by | null;
  restaurant_item_id?: order_by | null;
};

/**
 * @name game_choice_mutation_response
 * @type OBJECT
 */
type t_game_choice_mutation_response = FieldsType<
  {
    __typename: t_String<'game_choice_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_game_choice[];
  },
  Extension<'game_choice_mutation_response'>
>;

/**
 * @name game_choice_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type game_choice_obj_rel_insert_input = {
  data: game_choice_insert_input;
  on_conflict?: game_choice_on_conflict | null;
};

/**
 * @name game_choice_on_conflict
 * @type INPUT_OBJECT
 */
export type game_choice_on_conflict = {
  constraint: game_choice_constraint;
  update_columns: game_choice_update_column[];
  where?: game_choice_bool_exp | null;
};

/**
 * @name game_choice_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_order_by = {
  chosen_media_id?: order_by | null;
  food_item_medium?: food_item_media_order_by | null;
  game?: game_order_by | null;
  game_id?: order_by | null;
  game_player?: game_player_order_by | null;
  id?: order_by | null;
  pick_rank?: order_by | null;
  player_id?: order_by | null;
  restaurant?: restaurant_order_by | null;
  restaurant_id?: order_by | null;
  restaurant_item?: restaurant_item_order_by | null;
  restaurant_item_id?: order_by | null;
  status?: order_by | null;
};

/**
 * @name game_choice_pk_columns_input
 * @type INPUT_OBJECT
 */
export type game_choice_pk_columns_input = { id: number };


/**
 * @name game_choice_set_input
 * @type INPUT_OBJECT
 */
export type game_choice_set_input = {
  chosen_media_id?: number | null;
  game_id?: number | null;
  id?: number | null;
  pick_rank?: number | null;
  player_id?: number | null;
  restaurant_id?: number | null;
  restaurant_item_id?: number | null;
  status?: any | null;
};

/**
 * @name game_choice_status_enum
 * @type SCALAR
 */
type t_game_choice_status_enum<T extends any = any> = ScalarType<
  T,
  Extension<'game_choice_status_enum'>
>;

/**
 * @name game_choice_status_enum_comparison_exp
 * @type INPUT_OBJECT
 */
export type game_choice_status_enum_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name game_choice_stddev_fields
 * @type OBJECT
 */
type t_game_choice_stddev_fields = FieldsType<
  {
    __typename: t_String<'game_choice_stddev_fields'>;
    chosen_media_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
    pick_rank?: t_Float | null;
    player_id?: t_Float | null;
    restaurant_id?: t_Float | null;
    restaurant_item_id?: t_Float | null;
  },
  Extension<'game_choice_stddev_fields'>
>;

/**
 * @name game_choice_stddev_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_stddev_order_by = {
  chosen_media_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
  pick_rank?: order_by | null;
  player_id?: order_by | null;
  restaurant_id?: order_by | null;
  restaurant_item_id?: order_by | null;
};

/**
 * @name game_choice_stddev_pop_fields
 * @type OBJECT
 */
type t_game_choice_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'game_choice_stddev_pop_fields'>;
    chosen_media_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
    pick_rank?: t_Float | null;
    player_id?: t_Float | null;
    restaurant_id?: t_Float | null;
    restaurant_item_id?: t_Float | null;
  },
  Extension<'game_choice_stddev_pop_fields'>
>;

/**
 * @name game_choice_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_stddev_pop_order_by = {
  chosen_media_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
  pick_rank?: order_by | null;
  player_id?: order_by | null;
  restaurant_id?: order_by | null;
  restaurant_item_id?: order_by | null;
};

/**
 * @name game_choice_stddev_samp_fields
 * @type OBJECT
 */
type t_game_choice_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'game_choice_stddev_samp_fields'>;
    chosen_media_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
    pick_rank?: t_Float | null;
    player_id?: t_Float | null;
    restaurant_id?: t_Float | null;
    restaurant_item_id?: t_Float | null;
  },
  Extension<'game_choice_stddev_samp_fields'>
>;

/**
 * @name game_choice_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_stddev_samp_order_by = {
  chosen_media_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
  pick_rank?: order_by | null;
  player_id?: order_by | null;
  restaurant_id?: order_by | null;
  restaurant_item_id?: order_by | null;
};

/**
 * @name game_choice_sum_fields
 * @type OBJECT
 */
type t_game_choice_sum_fields = FieldsType<
  {
    __typename: t_String<'game_choice_sum_fields'>;
    chosen_media_id?: t_Int | null;
    game_id?: t_Int | null;
    id?: t_Int | null;
    pick_rank?: t_Int | null;
    player_id?: t_Int | null;
    restaurant_id?: t_Int | null;
    restaurant_item_id?: t_Int | null;
  },
  Extension<'game_choice_sum_fields'>
>;

/**
 * @name game_choice_sum_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_sum_order_by = {
  chosen_media_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
  pick_rank?: order_by | null;
  player_id?: order_by | null;
  restaurant_id?: order_by | null;
  restaurant_item_id?: order_by | null;
};


/**
 * @name game_choice_var_pop_fields
 * @type OBJECT
 */
type t_game_choice_var_pop_fields = FieldsType<
  {
    __typename: t_String<'game_choice_var_pop_fields'>;
    chosen_media_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
    pick_rank?: t_Float | null;
    player_id?: t_Float | null;
    restaurant_id?: t_Float | null;
    restaurant_item_id?: t_Float | null;
  },
  Extension<'game_choice_var_pop_fields'>
>;

/**
 * @name game_choice_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_var_pop_order_by = {
  chosen_media_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
  pick_rank?: order_by | null;
  player_id?: order_by | null;
  restaurant_id?: order_by | null;
  restaurant_item_id?: order_by | null;
};

/**
 * @name game_choice_var_samp_fields
 * @type OBJECT
 */
type t_game_choice_var_samp_fields = FieldsType<
  {
    __typename: t_String<'game_choice_var_samp_fields'>;
    chosen_media_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
    pick_rank?: t_Float | null;
    player_id?: t_Float | null;
    restaurant_id?: t_Float | null;
    restaurant_item_id?: t_Float | null;
  },
  Extension<'game_choice_var_samp_fields'>
>;

/**
 * @name game_choice_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_var_samp_order_by = {
  chosen_media_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
  pick_rank?: order_by | null;
  player_id?: order_by | null;
  restaurant_id?: order_by | null;
  restaurant_item_id?: order_by | null;
};

/**
 * @name game_choice_variance_fields
 * @type OBJECT
 */
type t_game_choice_variance_fields = FieldsType<
  {
    __typename: t_String<'game_choice_variance_fields'>;
    chosen_media_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
    pick_rank?: t_Float | null;
    player_id?: t_Float | null;
    restaurant_id?: t_Float | null;
    restaurant_item_id?: t_Float | null;
  },
  Extension<'game_choice_variance_fields'>
>;

/**
 * @name game_choice_variance_order_by
 * @type INPUT_OBJECT
 */
export type game_choice_variance_order_by = {
  chosen_media_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
  pick_rank?: order_by | null;
  player_id?: order_by | null;
  restaurant_id?: order_by | null;
  restaurant_item_id?: order_by | null;
};


/**
 * @name game_cuisine
 * @type OBJECT
 */
type t_game_cuisine = FieldsType<
  {
    __typename: t_String<'game_cuisine'>;

    /**
     * An object relationship
     */
    cuisine: t_cuisine;
    cuisine_id: t_Int;

    /**
     * An object relationship
     */
    game: t_game;
    game_id: t_Int;
    id: t_Int;
  },
  Extension<'game_cuisine'>
>;

/**
 * @name game_cuisine_aggregate
 * @type OBJECT
 */
type t_game_cuisine_aggregate = FieldsType<
  {
    __typename: t_String<'game_cuisine_aggregate'>;
    aggregate?: t_game_cuisine_aggregate_fields | null;
    nodes: t_game_cuisine[];
  },
  Extension<'game_cuisine_aggregate'>
>;

/**
 * @name game_cuisine_aggregate_fields
 * @type OBJECT
 */
type t_game_cuisine_aggregate_fields = FieldsType<
  {
    __typename: t_String<'game_cuisine_aggregate_fields'>;
    avg?: t_game_cuisine_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: game_cuisine_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_game_cuisine_max_fields | null;
    min?: t_game_cuisine_min_fields | null;
    stddev?: t_game_cuisine_stddev_fields | null;
    stddev_pop?: t_game_cuisine_stddev_pop_fields | null;
    stddev_samp?: t_game_cuisine_stddev_samp_fields | null;
    sum?: t_game_cuisine_sum_fields | null;
    var_pop?: t_game_cuisine_var_pop_fields | null;
    var_samp?: t_game_cuisine_var_samp_fields | null;
    variance?: t_game_cuisine_variance_fields | null;
  },
  Extension<'game_cuisine_aggregate_fields'>
>;

/**
 * @name game_cuisine_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_aggregate_order_by = {
  avg?: game_cuisine_avg_order_by | null;
  count?: order_by | null;
  max?: game_cuisine_max_order_by | null;
  min?: game_cuisine_min_order_by | null;
  stddev?: game_cuisine_stddev_order_by | null;
  stddev_pop?: game_cuisine_stddev_pop_order_by | null;
  stddev_samp?: game_cuisine_stddev_samp_order_by | null;
  sum?: game_cuisine_sum_order_by | null;
  var_pop?: game_cuisine_var_pop_order_by | null;
  var_samp?: game_cuisine_var_samp_order_by | null;
  variance?: game_cuisine_variance_order_by | null;
};

/**
 * @name game_cuisine_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type game_cuisine_arr_rel_insert_input = {
  data: game_cuisine_insert_input[];
  on_conflict?: game_cuisine_on_conflict | null;
};

/**
 * @name game_cuisine_avg_fields
 * @type OBJECT
 */
type t_game_cuisine_avg_fields = FieldsType<
  {
    __typename: t_String<'game_cuisine_avg_fields'>;
    cuisine_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'game_cuisine_avg_fields'>
>;

/**
 * @name game_cuisine_avg_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_avg_order_by = {
  cuisine_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name game_cuisine_bool_exp
 * @type INPUT_OBJECT
 */
export type game_cuisine_bool_exp = {
  _and?: (game_cuisine_bool_exp | null)[] | null;
  _not?: game_cuisine_bool_exp | null;
  _or?: (game_cuisine_bool_exp | null)[] | null;
  cuisine?: cuisine_bool_exp | null;
  cuisine_id?: Int_comparison_exp | null;
  game?: game_bool_exp | null;
  game_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
};


/**
 * @name game_cuisine_inc_input
 * @type INPUT_OBJECT
 */
export type game_cuisine_inc_input = {
  cuisine_id?: number | null;
  game_id?: number | null;
  id?: number | null;
};

/**
 * @name game_cuisine_insert_input
 * @type INPUT_OBJECT
 */
export type game_cuisine_insert_input = {
  cuisine?: cuisine_obj_rel_insert_input | null;
  cuisine_id?: number | null;
  game?: game_obj_rel_insert_input | null;
  game_id?: number | null;
  id?: number | null;
};

/**
 * @name game_cuisine_max_fields
 * @type OBJECT
 */
type t_game_cuisine_max_fields = FieldsType<
  {
    __typename: t_String<'game_cuisine_max_fields'>;
    cuisine_id?: t_Int | null;
    game_id?: t_Int | null;
    id?: t_Int | null;
  },
  Extension<'game_cuisine_max_fields'>
>;

/**
 * @name game_cuisine_max_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_max_order_by = {
  cuisine_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name game_cuisine_min_fields
 * @type OBJECT
 */
type t_game_cuisine_min_fields = FieldsType<
  {
    __typename: t_String<'game_cuisine_min_fields'>;
    cuisine_id?: t_Int | null;
    game_id?: t_Int | null;
    id?: t_Int | null;
  },
  Extension<'game_cuisine_min_fields'>
>;

/**
 * @name game_cuisine_min_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_min_order_by = {
  cuisine_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name game_cuisine_mutation_response
 * @type OBJECT
 */
type t_game_cuisine_mutation_response = FieldsType<
  {
    __typename: t_String<'game_cuisine_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_game_cuisine[];
  },
  Extension<'game_cuisine_mutation_response'>
>;

/**
 * @name game_cuisine_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type game_cuisine_obj_rel_insert_input = {
  data: game_cuisine_insert_input;
  on_conflict?: game_cuisine_on_conflict | null;
};

/**
 * @name game_cuisine_on_conflict
 * @type INPUT_OBJECT
 */
export type game_cuisine_on_conflict = {
  constraint: game_cuisine_constraint;
  update_columns: game_cuisine_update_column[];
  where?: game_cuisine_bool_exp | null;
};

/**
 * @name game_cuisine_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_order_by = {
  cuisine?: cuisine_order_by | null;
  cuisine_id?: order_by | null;
  game?: game_order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name game_cuisine_pk_columns_input
 * @type INPUT_OBJECT
 */
export type game_cuisine_pk_columns_input = { id: number };


/**
 * @name game_cuisine_set_input
 * @type INPUT_OBJECT
 */
export type game_cuisine_set_input = {
  cuisine_id?: number | null;
  game_id?: number | null;
  id?: number | null;
};

/**
 * @name game_cuisine_stddev_fields
 * @type OBJECT
 */
type t_game_cuisine_stddev_fields = FieldsType<
  {
    __typename: t_String<'game_cuisine_stddev_fields'>;
    cuisine_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'game_cuisine_stddev_fields'>
>;

/**
 * @name game_cuisine_stddev_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_stddev_order_by = {
  cuisine_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name game_cuisine_stddev_pop_fields
 * @type OBJECT
 */
type t_game_cuisine_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'game_cuisine_stddev_pop_fields'>;
    cuisine_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'game_cuisine_stddev_pop_fields'>
>;

/**
 * @name game_cuisine_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_stddev_pop_order_by = {
  cuisine_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name game_cuisine_stddev_samp_fields
 * @type OBJECT
 */
type t_game_cuisine_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'game_cuisine_stddev_samp_fields'>;
    cuisine_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'game_cuisine_stddev_samp_fields'>
>;

/**
 * @name game_cuisine_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_stddev_samp_order_by = {
  cuisine_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name game_cuisine_sum_fields
 * @type OBJECT
 */
type t_game_cuisine_sum_fields = FieldsType<
  {
    __typename: t_String<'game_cuisine_sum_fields'>;
    cuisine_id?: t_Int | null;
    game_id?: t_Int | null;
    id?: t_Int | null;
  },
  Extension<'game_cuisine_sum_fields'>
>;

/**
 * @name game_cuisine_sum_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_sum_order_by = {
  cuisine_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
};


/**
 * @name game_cuisine_var_pop_fields
 * @type OBJECT
 */
type t_game_cuisine_var_pop_fields = FieldsType<
  {
    __typename: t_String<'game_cuisine_var_pop_fields'>;
    cuisine_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'game_cuisine_var_pop_fields'>
>;

/**
 * @name game_cuisine_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_var_pop_order_by = {
  cuisine_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name game_cuisine_var_samp_fields
 * @type OBJECT
 */
type t_game_cuisine_var_samp_fields = FieldsType<
  {
    __typename: t_String<'game_cuisine_var_samp_fields'>;
    cuisine_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'game_cuisine_var_samp_fields'>
>;

/**
 * @name game_cuisine_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_var_samp_order_by = {
  cuisine_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name game_cuisine_variance_fields
 * @type OBJECT
 */
type t_game_cuisine_variance_fields = FieldsType<
  {
    __typename: t_String<'game_cuisine_variance_fields'>;
    cuisine_id?: t_Float | null;
    game_id?: t_Float | null;
    id?: t_Float | null;
  },
  Extension<'game_cuisine_variance_fields'>
>;

/**
 * @name game_cuisine_variance_order_by
 * @type INPUT_OBJECT
 */
export type game_cuisine_variance_order_by = {
  cuisine_id?: order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
};

/**
 * @name game_cuisines_filter_mode_enum
 * @type SCALAR
 */
type t_game_cuisines_filter_mode_enum<T extends any = any> = ScalarType<
  T,
  Extension<'game_cuisines_filter_mode_enum'>
>;

/**
 * @name game_cuisines_filter_mode_enum_comparison_exp
 * @type INPUT_OBJECT
 */
export type game_cuisines_filter_mode_enum_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name game_game_status_enum
 * @type SCALAR
 */
type t_game_game_status_enum<T extends any = any> = ScalarType<
  T,
  Extension<'game_game_status_enum'>
>;

/**
 * @name game_game_status_enum_comparison_exp
 * @type INPUT_OBJECT
 */
export type game_game_status_enum_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name game_inc_input
 * @type INPUT_OBJECT
 */
export type game_inc_input = {
  game_creator_id?: number | null;
  id?: number | null;
  latitude?: any | null;
  longitude?: any | null;
  search_magnitude?: number | null;
  winning_restaurant_id?: number | null;
};

/**
 * @name game_insert_input
 * @type INPUT_OBJECT
 */
export type game_insert_input = {
  address?: string | null;
  cuisines_filter_mode?: any | null;
  eat_time?: any | null;
  game_choices?: game_choice_arr_rel_insert_input | null;
  game_creator?: user_obj_rel_insert_input | null;
  game_creator_id?: number | null;
  game_cuisines?: game_cuisine_arr_rel_insert_input | null;
  game_players?: game_player_arr_rel_insert_input | null;
  game_status?: any | null;
  id?: number | null;
  latitude?: any | null;
  longitude?: any | null;
  menus_filter?: any | null;
  mode?: string | null;
  prices?: any | null;
  search_magnitude?: number | null;
  time_created?: any | null;
  unit_of_measure?: any | null;
  winning_restaurant?: restaurant_obj_rel_insert_input | null;
  winning_restaurant_id?: number | null;
};

/**
 * @name game_max_fields
 * @type OBJECT
 */
type t_game_max_fields = FieldsType<
  {
    __typename: t_String<'game_max_fields'>;
    address?: t_String | null;
    eat_time?: t_timestamp | null;
    game_creator_id?: t_Int | null;
    id?: t_Int | null;
    latitude?: t_float8 | null;
    longitude?: t_float8 | null;
    mode?: t_String | null;
    search_magnitude?: t_Int | null;
    time_created?: t_timestamp | null;
    winning_restaurant_id?: t_Int | null;
  },
  Extension<'game_max_fields'>
>;

/**
 * @name game_max_order_by
 * @type INPUT_OBJECT
 */
export type game_max_order_by = {
  address?: order_by | null;
  eat_time?: order_by | null;
  game_creator_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  mode?: order_by | null;
  search_magnitude?: order_by | null;
  time_created?: order_by | null;
  winning_restaurant_id?: order_by | null;
};

/**
 * @name game_min_fields
 * @type OBJECT
 */
type t_game_min_fields = FieldsType<
  {
    __typename: t_String<'game_min_fields'>;
    address?: t_String | null;
    eat_time?: t_timestamp | null;
    game_creator_id?: t_Int | null;
    id?: t_Int | null;
    latitude?: t_float8 | null;
    longitude?: t_float8 | null;
    mode?: t_String | null;
    search_magnitude?: t_Int | null;
    time_created?: t_timestamp | null;
    winning_restaurant_id?: t_Int | null;
  },
  Extension<'game_min_fields'>
>;

/**
 * @name game_min_order_by
 * @type INPUT_OBJECT
 */
export type game_min_order_by = {
  address?: order_by | null;
  eat_time?: order_by | null;
  game_creator_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  mode?: order_by | null;
  search_magnitude?: order_by | null;
  time_created?: order_by | null;
  winning_restaurant_id?: order_by | null;
};

/**
 * @name game_mutation_response
 * @type OBJECT
 */
type t_game_mutation_response = FieldsType<
  {
    __typename: t_String<'game_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_game[];
  },
  Extension<'game_mutation_response'>
>;

/**
 * @name game_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type game_obj_rel_insert_input = {
  data: game_insert_input;
  on_conflict?: game_on_conflict | null;
};

/**
 * @name game_on_conflict
 * @type INPUT_OBJECT
 */
export type game_on_conflict = {
  constraint: game_constraint;
  update_columns: game_update_column[];
  where?: game_bool_exp | null;
};

/**
 * @name game_order_by
 * @type INPUT_OBJECT
 */
export type game_order_by = {
  address?: order_by | null;
  cuisines_filter_mode?: order_by | null;
  eat_time?: order_by | null;
  game_choices_aggregate?: game_choice_aggregate_order_by | null;
  game_creator?: user_order_by | null;
  game_creator_id?: order_by | null;
  game_cuisines_aggregate?: game_cuisine_aggregate_order_by | null;
  game_players_aggregate?: game_player_aggregate_order_by | null;
  game_status?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  menus_filter?: order_by | null;
  mode?: order_by | null;
  prices?: order_by | null;
  search_magnitude?: order_by | null;
  time_created?: order_by | null;
  unit_of_measure?: order_by | null;
  winning_restaurant?: restaurant_order_by | null;
  winning_restaurant_id?: order_by | null;
};

/**
 * @name game_pk_columns_input
 * @type INPUT_OBJECT
 */
export type game_pk_columns_input = { id: number };

/**
 * @name game_player
 * @type OBJECT
 */
type t_game_player = FieldsType<
  {
    __typename: t_String<'game_player'>;

    /**
     * An object relationship
     */
    game: t_game;

    /**
     * An array relationship
     */
    game_choices: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice[]
    >;

    /**
     * An aggregated array relationship
     */
    game_choices_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice_aggregate
    >;
    game_id: t_Int;
    id: t_Int;

    /**
     * An object relationship
     */
    user: t_user;
    user_id: t_Int;
  },
  Extension<'game_player'>
>;

/**
 * @name game_player_aggregate
 * @type OBJECT
 */
type t_game_player_aggregate = FieldsType<
  {
    __typename: t_String<'game_player_aggregate'>;
    aggregate?: t_game_player_aggregate_fields | null;
    nodes: t_game_player[];
  },
  Extension<'game_player_aggregate'>
>;

/**
 * @name game_player_aggregate_fields
 * @type OBJECT
 */
type t_game_player_aggregate_fields = FieldsType<
  {
    __typename: t_String<'game_player_aggregate_fields'>;
    avg?: t_game_player_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: game_player_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_game_player_max_fields | null;
    min?: t_game_player_min_fields | null;
    stddev?: t_game_player_stddev_fields | null;
    stddev_pop?: t_game_player_stddev_pop_fields | null;
    stddev_samp?: t_game_player_stddev_samp_fields | null;
    sum?: t_game_player_sum_fields | null;
    var_pop?: t_game_player_var_pop_fields | null;
    var_samp?: t_game_player_var_samp_fields | null;
    variance?: t_game_player_variance_fields | null;
  },
  Extension<'game_player_aggregate_fields'>
>;

/**
 * @name game_player_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type game_player_aggregate_order_by = {
  avg?: game_player_avg_order_by | null;
  count?: order_by | null;
  max?: game_player_max_order_by | null;
  min?: game_player_min_order_by | null;
  stddev?: game_player_stddev_order_by | null;
  stddev_pop?: game_player_stddev_pop_order_by | null;
  stddev_samp?: game_player_stddev_samp_order_by | null;
  sum?: game_player_sum_order_by | null;
  var_pop?: game_player_var_pop_order_by | null;
  var_samp?: game_player_var_samp_order_by | null;
  variance?: game_player_variance_order_by | null;
};

/**
 * @name game_player_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type game_player_arr_rel_insert_input = {
  data: game_player_insert_input[];
  on_conflict?: game_player_on_conflict | null;
};

/**
 * @name game_player_avg_fields
 * @type OBJECT
 */
type t_game_player_avg_fields = FieldsType<
  {
    __typename: t_String<'game_player_avg_fields'>;
    game_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'game_player_avg_fields'>
>;

/**
 * @name game_player_avg_order_by
 * @type INPUT_OBJECT
 */
export type game_player_avg_order_by = {
  game_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name game_player_bool_exp
 * @type INPUT_OBJECT
 */
export type game_player_bool_exp = {
  _and?: (game_player_bool_exp | null)[] | null;
  _not?: game_player_bool_exp | null;
  _or?: (game_player_bool_exp | null)[] | null;
  game?: game_bool_exp | null;
  game_choices?: game_choice_bool_exp | null;
  game_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  user?: user_bool_exp | null;
  user_id?: Int_comparison_exp | null;
};


/**
 * @name game_player_inc_input
 * @type INPUT_OBJECT
 */
export type game_player_inc_input = {
  game_id?: number | null;
  id?: number | null;
  user_id?: number | null;
};

/**
 * @name game_player_insert_input
 * @type INPUT_OBJECT
 */
export type game_player_insert_input = {
  game?: game_obj_rel_insert_input | null;
  game_choices?: game_choice_arr_rel_insert_input | null;
  game_id?: number | null;
  id?: number | null;
  user?: user_obj_rel_insert_input | null;
  user_id?: number | null;
};

/**
 * @name game_player_max_fields
 * @type OBJECT
 */
type t_game_player_max_fields = FieldsType<
  {
    __typename: t_String<'game_player_max_fields'>;
    game_id?: t_Int | null;
    id?: t_Int | null;
    user_id?: t_Int | null;
  },
  Extension<'game_player_max_fields'>
>;

/**
 * @name game_player_max_order_by
 * @type INPUT_OBJECT
 */
export type game_player_max_order_by = {
  game_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name game_player_min_fields
 * @type OBJECT
 */
type t_game_player_min_fields = FieldsType<
  {
    __typename: t_String<'game_player_min_fields'>;
    game_id?: t_Int | null;
    id?: t_Int | null;
    user_id?: t_Int | null;
  },
  Extension<'game_player_min_fields'>
>;

/**
 * @name game_player_min_order_by
 * @type INPUT_OBJECT
 */
export type game_player_min_order_by = {
  game_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name game_player_mutation_response
 * @type OBJECT
 */
type t_game_player_mutation_response = FieldsType<
  {
    __typename: t_String<'game_player_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_game_player[];
  },
  Extension<'game_player_mutation_response'>
>;

/**
 * @name game_player_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type game_player_obj_rel_insert_input = {
  data: game_player_insert_input;
  on_conflict?: game_player_on_conflict | null;
};

/**
 * @name game_player_on_conflict
 * @type INPUT_OBJECT
 */
export type game_player_on_conflict = {
  constraint: game_player_constraint;
  update_columns: game_player_update_column[];
  where?: game_player_bool_exp | null;
};

/**
 * @name game_player_order_by
 * @type INPUT_OBJECT
 */
export type game_player_order_by = {
  game?: game_order_by | null;
  game_choices_aggregate?: game_choice_aggregate_order_by | null;
  game_id?: order_by | null;
  id?: order_by | null;
  user?: user_order_by | null;
  user_id?: order_by | null;
};

/**
 * @name game_player_pk_columns_input
 * @type INPUT_OBJECT
 */
export type game_player_pk_columns_input = { id: number };


/**
 * @name game_player_set_input
 * @type INPUT_OBJECT
 */
export type game_player_set_input = {
  game_id?: number | null;
  id?: number | null;
  user_id?: number | null;
};

/**
 * @name game_player_stddev_fields
 * @type OBJECT
 */
type t_game_player_stddev_fields = FieldsType<
  {
    __typename: t_String<'game_player_stddev_fields'>;
    game_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'game_player_stddev_fields'>
>;

/**
 * @name game_player_stddev_order_by
 * @type INPUT_OBJECT
 */
export type game_player_stddev_order_by = {
  game_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name game_player_stddev_pop_fields
 * @type OBJECT
 */
type t_game_player_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'game_player_stddev_pop_fields'>;
    game_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'game_player_stddev_pop_fields'>
>;

/**
 * @name game_player_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type game_player_stddev_pop_order_by = {
  game_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name game_player_stddev_samp_fields
 * @type OBJECT
 */
type t_game_player_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'game_player_stddev_samp_fields'>;
    game_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'game_player_stddev_samp_fields'>
>;

/**
 * @name game_player_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type game_player_stddev_samp_order_by = {
  game_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name game_player_sum_fields
 * @type OBJECT
 */
type t_game_player_sum_fields = FieldsType<
  {
    __typename: t_String<'game_player_sum_fields'>;
    game_id?: t_Int | null;
    id?: t_Int | null;
    user_id?: t_Int | null;
  },
  Extension<'game_player_sum_fields'>
>;

/**
 * @name game_player_sum_order_by
 * @type INPUT_OBJECT
 */
export type game_player_sum_order_by = {
  game_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};


/**
 * @name game_player_var_pop_fields
 * @type OBJECT
 */
type t_game_player_var_pop_fields = FieldsType<
  {
    __typename: t_String<'game_player_var_pop_fields'>;
    game_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'game_player_var_pop_fields'>
>;

/**
 * @name game_player_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type game_player_var_pop_order_by = {
  game_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name game_player_var_samp_fields
 * @type OBJECT
 */
type t_game_player_var_samp_fields = FieldsType<
  {
    __typename: t_String<'game_player_var_samp_fields'>;
    game_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'game_player_var_samp_fields'>
>;

/**
 * @name game_player_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type game_player_var_samp_order_by = {
  game_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name game_player_variance_fields
 * @type OBJECT
 */
type t_game_player_variance_fields = FieldsType<
  {
    __typename: t_String<'game_player_variance_fields'>;
    game_id?: t_Float | null;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'game_player_variance_fields'>
>;

/**
 * @name game_player_variance_order_by
 * @type INPUT_OBJECT
 */
export type game_player_variance_order_by = {
  game_id?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};


/**
 * @name game_set_input
 * @type INPUT_OBJECT
 */
export type game_set_input = {
  address?: string | null;
  cuisines_filter_mode?: any | null;
  eat_time?: any | null;
  game_creator_id?: number | null;
  game_status?: any | null;
  id?: number | null;
  latitude?: any | null;
  longitude?: any | null;
  menus_filter?: any | null;
  mode?: string | null;
  prices?: any | null;
  search_magnitude?: number | null;
  time_created?: any | null;
  unit_of_measure?: any | null;
  winning_restaurant_id?: number | null;
};

/**
 * @name game_stddev_fields
 * @type OBJECT
 */
type t_game_stddev_fields = FieldsType<
  {
    __typename: t_String<'game_stddev_fields'>;
    game_creator_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    search_magnitude?: t_Float | null;
    winning_restaurant_id?: t_Float | null;
  },
  Extension<'game_stddev_fields'>
>;

/**
 * @name game_stddev_order_by
 * @type INPUT_OBJECT
 */
export type game_stddev_order_by = {
  game_creator_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  search_magnitude?: order_by | null;
  winning_restaurant_id?: order_by | null;
};

/**
 * @name game_stddev_pop_fields
 * @type OBJECT
 */
type t_game_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'game_stddev_pop_fields'>;
    game_creator_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    search_magnitude?: t_Float | null;
    winning_restaurant_id?: t_Float | null;
  },
  Extension<'game_stddev_pop_fields'>
>;

/**
 * @name game_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type game_stddev_pop_order_by = {
  game_creator_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  search_magnitude?: order_by | null;
  winning_restaurant_id?: order_by | null;
};

/**
 * @name game_stddev_samp_fields
 * @type OBJECT
 */
type t_game_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'game_stddev_samp_fields'>;
    game_creator_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    search_magnitude?: t_Float | null;
    winning_restaurant_id?: t_Float | null;
  },
  Extension<'game_stddev_samp_fields'>
>;

/**
 * @name game_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type game_stddev_samp_order_by = {
  game_creator_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  search_magnitude?: order_by | null;
  winning_restaurant_id?: order_by | null;
};

/**
 * @name game_sum_fields
 * @type OBJECT
 */
type t_game_sum_fields = FieldsType<
  {
    __typename: t_String<'game_sum_fields'>;
    game_creator_id?: t_Int | null;
    id?: t_Int | null;
    latitude?: t_float8 | null;
    longitude?: t_float8 | null;
    search_magnitude?: t_Int | null;
    winning_restaurant_id?: t_Int | null;
  },
  Extension<'game_sum_fields'>
>;

/**
 * @name game_sum_order_by
 * @type INPUT_OBJECT
 */
export type game_sum_order_by = {
  game_creator_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  search_magnitude?: order_by | null;
  winning_restaurant_id?: order_by | null;
};

/**
 * @name game_unit_of_measure_enum
 * @type SCALAR
 */
type t_game_unit_of_measure_enum<T extends any = any> = ScalarType<
  T,
  Extension<'game_unit_of_measure_enum'>
>;

/**
 * @name game_unit_of_measure_enum_comparison_exp
 * @type INPUT_OBJECT
 */
export type game_unit_of_measure_enum_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};


/**
 * @name game_var_pop_fields
 * @type OBJECT
 */
type t_game_var_pop_fields = FieldsType<
  {
    __typename: t_String<'game_var_pop_fields'>;
    game_creator_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    search_magnitude?: t_Float | null;
    winning_restaurant_id?: t_Float | null;
  },
  Extension<'game_var_pop_fields'>
>;

/**
 * @name game_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type game_var_pop_order_by = {
  game_creator_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  search_magnitude?: order_by | null;
  winning_restaurant_id?: order_by | null;
};

/**
 * @name game_var_samp_fields
 * @type OBJECT
 */
type t_game_var_samp_fields = FieldsType<
  {
    __typename: t_String<'game_var_samp_fields'>;
    game_creator_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    search_magnitude?: t_Float | null;
    winning_restaurant_id?: t_Float | null;
  },
  Extension<'game_var_samp_fields'>
>;

/**
 * @name game_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type game_var_samp_order_by = {
  game_creator_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  search_magnitude?: order_by | null;
  winning_restaurant_id?: order_by | null;
};

/**
 * @name game_variance_fields
 * @type OBJECT
 */
type t_game_variance_fields = FieldsType<
  {
    __typename: t_String<'game_variance_fields'>;
    game_creator_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    search_magnitude?: t_Float | null;
    winning_restaurant_id?: t_Float | null;
  },
  Extension<'game_variance_fields'>
>;

/**
 * @name game_variance_order_by
 * @type INPUT_OBJECT
 */
export type game_variance_order_by = {
  game_creator_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  search_magnitude?: order_by | null;
  winning_restaurant_id?: order_by | null;
};

/**
 * @name json
 * @type SCALAR
 */
type t_json<T extends any = any> = ScalarType<T, Extension<'json'>>;

/**
 * @name json_comparison_exp
 * @type INPUT_OBJECT
 */
export type json_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name log
 * @type OBJECT
 */
type t_log = FieldsType<
  {
    __typename: t_String<'log'>;
    date_created: t_timestamp;
    id: t_Int;
    name: t_String;
    payload: t_String;
  },
  Extension<'log'>
>;

/**
 * @name log_aggregate
 * @type OBJECT
 */
type t_log_aggregate = FieldsType<
  {
    __typename: t_String<'log_aggregate'>;
    aggregate?: t_log_aggregate_fields | null;
    nodes: t_log[];
  },
  Extension<'log_aggregate'>
>;

/**
 * @name log_aggregate_fields
 * @type OBJECT
 */
type t_log_aggregate_fields = FieldsType<
  {
    __typename: t_String<'log_aggregate_fields'>;
    avg?: t_log_avg_fields | null;
    count?: FieldsTypeArg<
      { columns?: log_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_log_max_fields | null;
    min?: t_log_min_fields | null;
    stddev?: t_log_stddev_fields | null;
    stddev_pop?: t_log_stddev_pop_fields | null;
    stddev_samp?: t_log_stddev_samp_fields | null;
    sum?: t_log_sum_fields | null;
    var_pop?: t_log_var_pop_fields | null;
    var_samp?: t_log_var_samp_fields | null;
    variance?: t_log_variance_fields | null;
  },
  Extension<'log_aggregate_fields'>
>;

/**
 * @name log_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type log_aggregate_order_by = {
  avg?: log_avg_order_by | null;
  count?: order_by | null;
  max?: log_max_order_by | null;
  min?: log_min_order_by | null;
  stddev?: log_stddev_order_by | null;
  stddev_pop?: log_stddev_pop_order_by | null;
  stddev_samp?: log_stddev_samp_order_by | null;
  sum?: log_sum_order_by | null;
  var_pop?: log_var_pop_order_by | null;
  var_samp?: log_var_samp_order_by | null;
  variance?: log_variance_order_by | null;
};

/**
 * @name log_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type log_arr_rel_insert_input = {
  data: log_insert_input[];
  on_conflict?: log_on_conflict | null;
};

/**
 * @name log_avg_fields
 * @type OBJECT
 */
type t_log_avg_fields = FieldsType<
  {
    __typename: t_String<'log_avg_fields'>;
    id?: t_Float | null;
  },
  Extension<'log_avg_fields'>
>;

/**
 * @name log_avg_order_by
 * @type INPUT_OBJECT
 */
export type log_avg_order_by = { id?: order_by | null };

/**
 * @name log_bool_exp
 * @type INPUT_OBJECT
 */
export type log_bool_exp = {
  _and?: (log_bool_exp | null)[] | null;
  _not?: log_bool_exp | null;
  _or?: (log_bool_exp | null)[] | null;
  date_created?: timestamp_comparison_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  payload?: String_comparison_exp | null;
};


/**
 * @name log_inc_input
 * @type INPUT_OBJECT
 */
export type log_inc_input = { id?: number | null };

/**
 * @name log_insert_input
 * @type INPUT_OBJECT
 */
export type log_insert_input = {
  date_created?: any | null;
  id?: number | null;
  name?: string | null;
  payload?: string | null;
};

/**
 * @name log_max_fields
 * @type OBJECT
 */
type t_log_max_fields = FieldsType<
  {
    __typename: t_String<'log_max_fields'>;
    date_created?: t_timestamp | null;
    id?: t_Int | null;
    name?: t_String | null;
    payload?: t_String | null;
  },
  Extension<'log_max_fields'>
>;

/**
 * @name log_max_order_by
 * @type INPUT_OBJECT
 */
export type log_max_order_by = {
  date_created?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  payload?: order_by | null;
};

/**
 * @name log_min_fields
 * @type OBJECT
 */
type t_log_min_fields = FieldsType<
  {
    __typename: t_String<'log_min_fields'>;
    date_created?: t_timestamp | null;
    id?: t_Int | null;
    name?: t_String | null;
    payload?: t_String | null;
  },
  Extension<'log_min_fields'>
>;

/**
 * @name log_min_order_by
 * @type INPUT_OBJECT
 */
export type log_min_order_by = {
  date_created?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  payload?: order_by | null;
};

/**
 * @name log_mutation_response
 * @type OBJECT
 */
type t_log_mutation_response = FieldsType<
  {
    __typename: t_String<'log_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_log[];
  },
  Extension<'log_mutation_response'>
>;

/**
 * @name log_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type log_obj_rel_insert_input = {
  data: log_insert_input;
  on_conflict?: log_on_conflict | null;
};

/**
 * @name log_on_conflict
 * @type INPUT_OBJECT
 */
export type log_on_conflict = {
  constraint: log_constraint;
  update_columns: log_update_column[];
  where?: log_bool_exp | null;
};

/**
 * @name log_order_by
 * @type INPUT_OBJECT
 */
export type log_order_by = {
  date_created?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  payload?: order_by | null;
};

/**
 * @name log_pk_columns_input
 * @type INPUT_OBJECT
 */
export type log_pk_columns_input = { id: number };


/**
 * @name log_set_input
 * @type INPUT_OBJECT
 */
export type log_set_input = {
  date_created?: any | null;
  id?: number | null;
  name?: string | null;
  payload?: string | null;
};

/**
 * @name log_stddev_fields
 * @type OBJECT
 */
type t_log_stddev_fields = FieldsType<
  {
    __typename: t_String<'log_stddev_fields'>;
    id?: t_Float | null;
  },
  Extension<'log_stddev_fields'>
>;

/**
 * @name log_stddev_order_by
 * @type INPUT_OBJECT
 */
export type log_stddev_order_by = { id?: order_by | null };

/**
 * @name log_stddev_pop_fields
 * @type OBJECT
 */
type t_log_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'log_stddev_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'log_stddev_pop_fields'>
>;

/**
 * @name log_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type log_stddev_pop_order_by = { id?: order_by | null };

/**
 * @name log_stddev_samp_fields
 * @type OBJECT
 */
type t_log_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'log_stddev_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'log_stddev_samp_fields'>
>;

/**
 * @name log_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type log_stddev_samp_order_by = { id?: order_by | null };

/**
 * @name log_sum_fields
 * @type OBJECT
 */
type t_log_sum_fields = FieldsType<
  {
    __typename: t_String<'log_sum_fields'>;
    id?: t_Int | null;
  },
  Extension<'log_sum_fields'>
>;

/**
 * @name log_sum_order_by
 * @type INPUT_OBJECT
 */
export type log_sum_order_by = { id?: order_by | null };


/**
 * @name log_var_pop_fields
 * @type OBJECT
 */
type t_log_var_pop_fields = FieldsType<
  {
    __typename: t_String<'log_var_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'log_var_pop_fields'>
>;

/**
 * @name log_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type log_var_pop_order_by = { id?: order_by | null };

/**
 * @name log_var_samp_fields
 * @type OBJECT
 */
type t_log_var_samp_fields = FieldsType<
  {
    __typename: t_String<'log_var_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'log_var_samp_fields'>
>;

/**
 * @name log_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type log_var_samp_order_by = { id?: order_by | null };

/**
 * @name log_variance_fields
 * @type OBJECT
 */
type t_log_variance_fields = FieldsType<
  {
    __typename: t_String<'log_variance_fields'>;
    id?: t_Float | null;
  },
  Extension<'log_variance_fields'>
>;

/**
 * @name log_variance_order_by
 * @type INPUT_OBJECT
 */
export type log_variance_order_by = { id?: order_by | null };

/**
 * @name media_author
 * @type OBJECT
 */
type t_media_author = FieldsType<
  {
    __typename: t_String<'media_author'>;
    email?: t_String | null;
    facebook?: t_String | null;

    /**
     * An array relationship
     */
    food_item_media: FieldsTypeArg<
      {
        distinct_on?: food_item_media_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_media_order_by[] | null;
        where?: food_item_media_bool_exp | null;
      },
      t_food_item_media[]
    >;

    /**
     * An aggregated array relationship
     */
    food_item_media_aggregate: FieldsTypeArg<
      {
        distinct_on?: food_item_media_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_media_order_by[] | null;
        where?: food_item_media_bool_exp | null;
      },
      t_food_item_media_aggregate
    >;
    id: t_Int;
    instagram?: t_String | null;
    name: t_String;
    personalWebsite?: t_String | null;
    twitter?: t_String | null;
  },
  Extension<'media_author'>
>;

/**
 * @name media_author_aggregate
 * @type OBJECT
 */
type t_media_author_aggregate = FieldsType<
  {
    __typename: t_String<'media_author_aggregate'>;
    aggregate?: t_media_author_aggregate_fields | null;
    nodes: t_media_author[];
  },
  Extension<'media_author_aggregate'>
>;

/**
 * @name media_author_aggregate_fields
 * @type OBJECT
 */
type t_media_author_aggregate_fields = FieldsType<
  {
    __typename: t_String<'media_author_aggregate_fields'>;
    avg?: t_media_author_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: media_author_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_media_author_max_fields | null;
    min?: t_media_author_min_fields | null;
    stddev?: t_media_author_stddev_fields | null;
    stddev_pop?: t_media_author_stddev_pop_fields | null;
    stddev_samp?: t_media_author_stddev_samp_fields | null;
    sum?: t_media_author_sum_fields | null;
    var_pop?: t_media_author_var_pop_fields | null;
    var_samp?: t_media_author_var_samp_fields | null;
    variance?: t_media_author_variance_fields | null;
  },
  Extension<'media_author_aggregate_fields'>
>;

/**
 * @name media_author_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type media_author_aggregate_order_by = {
  avg?: media_author_avg_order_by | null;
  count?: order_by | null;
  max?: media_author_max_order_by | null;
  min?: media_author_min_order_by | null;
  stddev?: media_author_stddev_order_by | null;
  stddev_pop?: media_author_stddev_pop_order_by | null;
  stddev_samp?: media_author_stddev_samp_order_by | null;
  sum?: media_author_sum_order_by | null;
  var_pop?: media_author_var_pop_order_by | null;
  var_samp?: media_author_var_samp_order_by | null;
  variance?: media_author_variance_order_by | null;
};

/**
 * @name media_author_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type media_author_arr_rel_insert_input = {
  data: media_author_insert_input[];
  on_conflict?: media_author_on_conflict | null;
};

/**
 * @name media_author_avg_fields
 * @type OBJECT
 */
type t_media_author_avg_fields = FieldsType<
  {
    __typename: t_String<'media_author_avg_fields'>;
    id?: t_Float | null;
  },
  Extension<'media_author_avg_fields'>
>;

/**
 * @name media_author_avg_order_by
 * @type INPUT_OBJECT
 */
export type media_author_avg_order_by = { id?: order_by | null };

/**
 * @name media_author_bool_exp
 * @type INPUT_OBJECT
 */
export type media_author_bool_exp = {
  _and?: (media_author_bool_exp | null)[] | null;
  _not?: media_author_bool_exp | null;
  _or?: (media_author_bool_exp | null)[] | null;
  email?: String_comparison_exp | null;
  facebook?: String_comparison_exp | null;
  food_item_media?: food_item_media_bool_exp | null;
  id?: Int_comparison_exp | null;
  instagram?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  personalWebsite?: String_comparison_exp | null;
  twitter?: String_comparison_exp | null;
};


/**
 * @name media_author_inc_input
 * @type INPUT_OBJECT
 */
export type media_author_inc_input = { id?: number | null };

/**
 * @name media_author_insert_input
 * @type INPUT_OBJECT
 */
export type media_author_insert_input = {
  email?: string | null;
  facebook?: string | null;
  food_item_media?: food_item_media_arr_rel_insert_input | null;
  id?: number | null;
  instagram?: string | null;
  name?: string | null;
  personalWebsite?: string | null;
  twitter?: string | null;
};

/**
 * @name media_author_max_fields
 * @type OBJECT
 */
type t_media_author_max_fields = FieldsType<
  {
    __typename: t_String<'media_author_max_fields'>;
    email?: t_String | null;
    facebook?: t_String | null;
    id?: t_Int | null;
    instagram?: t_String | null;
    name?: t_String | null;
    personalWebsite?: t_String | null;
    twitter?: t_String | null;
  },
  Extension<'media_author_max_fields'>
>;

/**
 * @name media_author_max_order_by
 * @type INPUT_OBJECT
 */
export type media_author_max_order_by = {
  email?: order_by | null;
  facebook?: order_by | null;
  id?: order_by | null;
  instagram?: order_by | null;
  name?: order_by | null;
  personalWebsite?: order_by | null;
  twitter?: order_by | null;
};

/**
 * @name media_author_min_fields
 * @type OBJECT
 */
type t_media_author_min_fields = FieldsType<
  {
    __typename: t_String<'media_author_min_fields'>;
    email?: t_String | null;
    facebook?: t_String | null;
    id?: t_Int | null;
    instagram?: t_String | null;
    name?: t_String | null;
    personalWebsite?: t_String | null;
    twitter?: t_String | null;
  },
  Extension<'media_author_min_fields'>
>;

/**
 * @name media_author_min_order_by
 * @type INPUT_OBJECT
 */
export type media_author_min_order_by = {
  email?: order_by | null;
  facebook?: order_by | null;
  id?: order_by | null;
  instagram?: order_by | null;
  name?: order_by | null;
  personalWebsite?: order_by | null;
  twitter?: order_by | null;
};

/**
 * @name media_author_mutation_response
 * @type OBJECT
 */
type t_media_author_mutation_response = FieldsType<
  {
    __typename: t_String<'media_author_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_media_author[];
  },
  Extension<'media_author_mutation_response'>
>;

/**
 * @name media_author_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type media_author_obj_rel_insert_input = {
  data: media_author_insert_input;
  on_conflict?: media_author_on_conflict | null;
};

/**
 * @name media_author_on_conflict
 * @type INPUT_OBJECT
 */
export type media_author_on_conflict = {
  constraint: media_author_constraint;
  update_columns: media_author_update_column[];
  where?: media_author_bool_exp | null;
};

/**
 * @name media_author_order_by
 * @type INPUT_OBJECT
 */
export type media_author_order_by = {
  email?: order_by | null;
  facebook?: order_by | null;
  food_item_media_aggregate?: food_item_media_aggregate_order_by | null;
  id?: order_by | null;
  instagram?: order_by | null;
  name?: order_by | null;
  personalWebsite?: order_by | null;
  twitter?: order_by | null;
};

/**
 * @name media_author_pk_columns_input
 * @type INPUT_OBJECT
 */
export type media_author_pk_columns_input = { id: number };


/**
 * @name media_author_set_input
 * @type INPUT_OBJECT
 */
export type media_author_set_input = {
  email?: string | null;
  facebook?: string | null;
  id?: number | null;
  instagram?: string | null;
  name?: string | null;
  personalWebsite?: string | null;
  twitter?: string | null;
};

/**
 * @name media_author_stddev_fields
 * @type OBJECT
 */
type t_media_author_stddev_fields = FieldsType<
  {
    __typename: t_String<'media_author_stddev_fields'>;
    id?: t_Float | null;
  },
  Extension<'media_author_stddev_fields'>
>;

/**
 * @name media_author_stddev_order_by
 * @type INPUT_OBJECT
 */
export type media_author_stddev_order_by = { id?: order_by | null };

/**
 * @name media_author_stddev_pop_fields
 * @type OBJECT
 */
type t_media_author_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'media_author_stddev_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'media_author_stddev_pop_fields'>
>;

/**
 * @name media_author_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type media_author_stddev_pop_order_by = { id?: order_by | null };

/**
 * @name media_author_stddev_samp_fields
 * @type OBJECT
 */
type t_media_author_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'media_author_stddev_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'media_author_stddev_samp_fields'>
>;

/**
 * @name media_author_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type media_author_stddev_samp_order_by = { id?: order_by | null };

/**
 * @name media_author_sum_fields
 * @type OBJECT
 */
type t_media_author_sum_fields = FieldsType<
  {
    __typename: t_String<'media_author_sum_fields'>;
    id?: t_Int | null;
  },
  Extension<'media_author_sum_fields'>
>;

/**
 * @name media_author_sum_order_by
 * @type INPUT_OBJECT
 */
export type media_author_sum_order_by = { id?: order_by | null };


/**
 * @name media_author_var_pop_fields
 * @type OBJECT
 */
type t_media_author_var_pop_fields = FieldsType<
  {
    __typename: t_String<'media_author_var_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'media_author_var_pop_fields'>
>;

/**
 * @name media_author_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type media_author_var_pop_order_by = { id?: order_by | null };

/**
 * @name media_author_var_samp_fields
 * @type OBJECT
 */
type t_media_author_var_samp_fields = FieldsType<
  {
    __typename: t_String<'media_author_var_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'media_author_var_samp_fields'>
>;

/**
 * @name media_author_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type media_author_var_samp_order_by = { id?: order_by | null };

/**
 * @name media_author_variance_fields
 * @type OBJECT
 */
type t_media_author_variance_fields = FieldsType<
  {
    __typename: t_String<'media_author_variance_fields'>;
    id?: t_Float | null;
  },
  Extension<'media_author_variance_fields'>
>;

/**
 * @name media_author_variance_order_by
 * @type INPUT_OBJECT
 */
export type media_author_variance_order_by = { id?: order_by | null };

/**
 * @name menu
 * @type OBJECT
 */
type t_menu = FieldsType<
  {
    __typename: t_String<'menu'>;
    id: t_Int;
    is_game_ready: t_Boolean;
    name: t_String;

    /**
     * An array relationship
     */
    restaurant_items: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item[]
    >;

    /**
     * An aggregated array relationship
     */
    restaurant_items_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item_aggregate
    >;
  },
  Extension<'menu'>
>;

/**
 * @name menu_aggregate
 * @type OBJECT
 */
type t_menu_aggregate = FieldsType<
  {
    __typename: t_String<'menu_aggregate'>;
    aggregate?: t_menu_aggregate_fields | null;
    nodes: t_menu[];
  },
  Extension<'menu_aggregate'>
>;

/**
 * @name menu_aggregate_fields
 * @type OBJECT
 */
type t_menu_aggregate_fields = FieldsType<
  {
    __typename: t_String<'menu_aggregate_fields'>;
    avg?: t_menu_avg_fields | null;
    count?: FieldsTypeArg<
      { columns?: menu_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_menu_max_fields | null;
    min?: t_menu_min_fields | null;
    stddev?: t_menu_stddev_fields | null;
    stddev_pop?: t_menu_stddev_pop_fields | null;
    stddev_samp?: t_menu_stddev_samp_fields | null;
    sum?: t_menu_sum_fields | null;
    var_pop?: t_menu_var_pop_fields | null;
    var_samp?: t_menu_var_samp_fields | null;
    variance?: t_menu_variance_fields | null;
  },
  Extension<'menu_aggregate_fields'>
>;

/**
 * @name menu_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type menu_aggregate_order_by = {
  avg?: menu_avg_order_by | null;
  count?: order_by | null;
  max?: menu_max_order_by | null;
  min?: menu_min_order_by | null;
  stddev?: menu_stddev_order_by | null;
  stddev_pop?: menu_stddev_pop_order_by | null;
  stddev_samp?: menu_stddev_samp_order_by | null;
  sum?: menu_sum_order_by | null;
  var_pop?: menu_var_pop_order_by | null;
  var_samp?: menu_var_samp_order_by | null;
  variance?: menu_variance_order_by | null;
};

/**
 * @name menu_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type menu_arr_rel_insert_input = {
  data: menu_insert_input[];
  on_conflict?: menu_on_conflict | null;
};

/**
 * @name menu_avg_fields
 * @type OBJECT
 */
type t_menu_avg_fields = FieldsType<
  {
    __typename: t_String<'menu_avg_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_avg_fields'>
>;

/**
 * @name menu_avg_order_by
 * @type INPUT_OBJECT
 */
export type menu_avg_order_by = { id?: order_by | null };

/**
 * @name menu_bool_exp
 * @type INPUT_OBJECT
 */
export type menu_bool_exp = {
  _and?: (menu_bool_exp | null)[] | null;
  _not?: menu_bool_exp | null;
  _or?: (menu_bool_exp | null)[] | null;
  id?: Int_comparison_exp | null;
  is_game_ready?: Boolean_comparison_exp | null;
  name?: String_comparison_exp | null;
  restaurant_items?: restaurant_item_bool_exp | null;
};


/**
 * @name menu_inc_input
 * @type INPUT_OBJECT
 */
export type menu_inc_input = { id?: number | null };

/**
 * @name menu_insert_input
 * @type INPUT_OBJECT
 */
export type menu_insert_input = {
  id?: number | null;
  is_game_ready?: boolean | null;
  name?: string | null;
  restaurant_items?: restaurant_item_arr_rel_insert_input | null;
};

/**
 * @name menu_max_fields
 * @type OBJECT
 */
type t_menu_max_fields = FieldsType<
  {
    __typename: t_String<'menu_max_fields'>;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<'menu_max_fields'>
>;

/**
 * @name menu_max_order_by
 * @type INPUT_OBJECT
 */
export type menu_max_order_by = {
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name menu_min_fields
 * @type OBJECT
 */
type t_menu_min_fields = FieldsType<
  {
    __typename: t_String<'menu_min_fields'>;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<'menu_min_fields'>
>;

/**
 * @name menu_min_order_by
 * @type INPUT_OBJECT
 */
export type menu_min_order_by = {
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name menu_mutation_response
 * @type OBJECT
 */
type t_menu_mutation_response = FieldsType<
  {
    __typename: t_String<'menu_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_menu[];
  },
  Extension<'menu_mutation_response'>
>;

/**
 * @name menu_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type menu_obj_rel_insert_input = {
  data: menu_insert_input;
  on_conflict?: menu_on_conflict | null;
};

/**
 * @name menu_on_conflict
 * @type INPUT_OBJECT
 */
export type menu_on_conflict = {
  constraint: menu_constraint;
  update_columns: menu_update_column[];
  where?: menu_bool_exp | null;
};

/**
 * @name menu_order_by
 * @type INPUT_OBJECT
 */
export type menu_order_by = {
  id?: order_by | null;
  is_game_ready?: order_by | null;
  name?: order_by | null;
  restaurant_items_aggregate?: restaurant_item_aggregate_order_by | null;
};

/**
 * @name menu_pk_columns_input
 * @type INPUT_OBJECT
 */
export type menu_pk_columns_input = { id: number };

/**
 * @name menu_section
 * @type OBJECT
 */
type t_menu_section = FieldsType<
  {
    __typename: t_String<'menu_section'>;
    id: t_Int;
    is_dessert: t_Boolean;
    is_drink: t_Boolean;
    is_game_ready: t_Boolean;
    is_kids: t_Boolean;
    name: t_String;

    /**
     * An array relationship
     */
    restaurant_items: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item[]
    >;

    /**
     * An aggregated array relationship
     */
    restaurant_items_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item_aggregate
    >;
  },
  Extension<'menu_section'>
>;

/**
 * @name menu_section_aggregate
 * @type OBJECT
 */
type t_menu_section_aggregate = FieldsType<
  {
    __typename: t_String<'menu_section_aggregate'>;
    aggregate?: t_menu_section_aggregate_fields | null;
    nodes: t_menu_section[];
  },
  Extension<'menu_section_aggregate'>
>;

/**
 * @name menu_section_aggregate_fields
 * @type OBJECT
 */
type t_menu_section_aggregate_fields = FieldsType<
  {
    __typename: t_String<'menu_section_aggregate_fields'>;
    avg?: t_menu_section_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: menu_section_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_menu_section_max_fields | null;
    min?: t_menu_section_min_fields | null;
    stddev?: t_menu_section_stddev_fields | null;
    stddev_pop?: t_menu_section_stddev_pop_fields | null;
    stddev_samp?: t_menu_section_stddev_samp_fields | null;
    sum?: t_menu_section_sum_fields | null;
    var_pop?: t_menu_section_var_pop_fields | null;
    var_samp?: t_menu_section_var_samp_fields | null;
    variance?: t_menu_section_variance_fields | null;
  },
  Extension<'menu_section_aggregate_fields'>
>;

/**
 * @name menu_section_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_aggregate_order_by = {
  avg?: menu_section_avg_order_by | null;
  count?: order_by | null;
  max?: menu_section_max_order_by | null;
  min?: menu_section_min_order_by | null;
  stddev?: menu_section_stddev_order_by | null;
  stddev_pop?: menu_section_stddev_pop_order_by | null;
  stddev_samp?: menu_section_stddev_samp_order_by | null;
  sum?: menu_section_sum_order_by | null;
  var_pop?: menu_section_var_pop_order_by | null;
  var_samp?: menu_section_var_samp_order_by | null;
  variance?: menu_section_variance_order_by | null;
};

/**
 * @name menu_section_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type menu_section_arr_rel_insert_input = {
  data: menu_section_insert_input[];
  on_conflict?: menu_section_on_conflict | null;
};

/**
 * @name menu_section_avg_fields
 * @type OBJECT
 */
type t_menu_section_avg_fields = FieldsType<
  {
    __typename: t_String<'menu_section_avg_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_section_avg_fields'>
>;

/**
 * @name menu_section_avg_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_avg_order_by = { id?: order_by | null };

/**
 * @name menu_section_bool_exp
 * @type INPUT_OBJECT
 */
export type menu_section_bool_exp = {
  _and?: (menu_section_bool_exp | null)[] | null;
  _not?: menu_section_bool_exp | null;
  _or?: (menu_section_bool_exp | null)[] | null;
  id?: Int_comparison_exp | null;
  is_dessert?: Boolean_comparison_exp | null;
  is_drink?: Boolean_comparison_exp | null;
  is_game_ready?: Boolean_comparison_exp | null;
  is_kids?: Boolean_comparison_exp | null;
  name?: String_comparison_exp | null;
  restaurant_items?: restaurant_item_bool_exp | null;
};


/**
 * @name menu_section_inc_input
 * @type INPUT_OBJECT
 */
export type menu_section_inc_input = { id?: number | null };

/**
 * @name menu_section_insert_input
 * @type INPUT_OBJECT
 */
export type menu_section_insert_input = {
  id?: number | null;
  is_dessert?: boolean | null;
  is_drink?: boolean | null;
  is_game_ready?: boolean | null;
  is_kids?: boolean | null;
  name?: string | null;
  restaurant_items?: restaurant_item_arr_rel_insert_input | null;
};

/**
 * @name menu_section_max_fields
 * @type OBJECT
 */
type t_menu_section_max_fields = FieldsType<
  {
    __typename: t_String<'menu_section_max_fields'>;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<'menu_section_max_fields'>
>;

/**
 * @name menu_section_max_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_max_order_by = {
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name menu_section_min_fields
 * @type OBJECT
 */
type t_menu_section_min_fields = FieldsType<
  {
    __typename: t_String<'menu_section_min_fields'>;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<'menu_section_min_fields'>
>;

/**
 * @name menu_section_min_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_min_order_by = {
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name menu_section_mutation_response
 * @type OBJECT
 */
type t_menu_section_mutation_response = FieldsType<
  {
    __typename: t_String<'menu_section_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_menu_section[];
  },
  Extension<'menu_section_mutation_response'>
>;

/**
 * @name menu_section_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type menu_section_obj_rel_insert_input = {
  data: menu_section_insert_input;
  on_conflict?: menu_section_on_conflict | null;
};

/**
 * @name menu_section_on_conflict
 * @type INPUT_OBJECT
 */
export type menu_section_on_conflict = {
  constraint: menu_section_constraint;
  update_columns: menu_section_update_column[];
  where?: menu_section_bool_exp | null;
};

/**
 * @name menu_section_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_order_by = {
  id?: order_by | null;
  is_dessert?: order_by | null;
  is_drink?: order_by | null;
  is_game_ready?: order_by | null;
  is_kids?: order_by | null;
  name?: order_by | null;
  restaurant_items_aggregate?: restaurant_item_aggregate_order_by | null;
};

/**
 * @name menu_section_pk_columns_input
 * @type INPUT_OBJECT
 */
export type menu_section_pk_columns_input = { id: number };


/**
 * @name menu_section_set_input
 * @type INPUT_OBJECT
 */
export type menu_section_set_input = {
  id?: number | null;
  is_dessert?: boolean | null;
  is_drink?: boolean | null;
  is_game_ready?: boolean | null;
  is_kids?: boolean | null;
  name?: string | null;
};

/**
 * @name menu_section_stddev_fields
 * @type OBJECT
 */
type t_menu_section_stddev_fields = FieldsType<
  {
    __typename: t_String<'menu_section_stddev_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_section_stddev_fields'>
>;

/**
 * @name menu_section_stddev_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_stddev_order_by = { id?: order_by | null };

/**
 * @name menu_section_stddev_pop_fields
 * @type OBJECT
 */
type t_menu_section_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'menu_section_stddev_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_section_stddev_pop_fields'>
>;

/**
 * @name menu_section_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_stddev_pop_order_by = { id?: order_by | null };

/**
 * @name menu_section_stddev_samp_fields
 * @type OBJECT
 */
type t_menu_section_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'menu_section_stddev_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_section_stddev_samp_fields'>
>;

/**
 * @name menu_section_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_stddev_samp_order_by = { id?: order_by | null };

/**
 * @name menu_section_sum_fields
 * @type OBJECT
 */
type t_menu_section_sum_fields = FieldsType<
  {
    __typename: t_String<'menu_section_sum_fields'>;
    id?: t_Int | null;
  },
  Extension<'menu_section_sum_fields'>
>;

/**
 * @name menu_section_sum_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_sum_order_by = { id?: order_by | null };


/**
 * @name menu_section_var_pop_fields
 * @type OBJECT
 */
type t_menu_section_var_pop_fields = FieldsType<
  {
    __typename: t_String<'menu_section_var_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_section_var_pop_fields'>
>;

/**
 * @name menu_section_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_var_pop_order_by = { id?: order_by | null };

/**
 * @name menu_section_var_samp_fields
 * @type OBJECT
 */
type t_menu_section_var_samp_fields = FieldsType<
  {
    __typename: t_String<'menu_section_var_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_section_var_samp_fields'>
>;

/**
 * @name menu_section_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_var_samp_order_by = { id?: order_by | null };

/**
 * @name menu_section_variance_fields
 * @type OBJECT
 */
type t_menu_section_variance_fields = FieldsType<
  {
    __typename: t_String<'menu_section_variance_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_section_variance_fields'>
>;

/**
 * @name menu_section_variance_order_by
 * @type INPUT_OBJECT
 */
export type menu_section_variance_order_by = { id?: order_by | null };


/**
 * @name menu_set_input
 * @type INPUT_OBJECT
 */
export type menu_set_input = {
  id?: number | null;
  is_game_ready?: boolean | null;
  name?: string | null;
};

/**
 * @name menu_stddev_fields
 * @type OBJECT
 */
type t_menu_stddev_fields = FieldsType<
  {
    __typename: t_String<'menu_stddev_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_stddev_fields'>
>;

/**
 * @name menu_stddev_order_by
 * @type INPUT_OBJECT
 */
export type menu_stddev_order_by = { id?: order_by | null };

/**
 * @name menu_stddev_pop_fields
 * @type OBJECT
 */
type t_menu_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'menu_stddev_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_stddev_pop_fields'>
>;

/**
 * @name menu_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type menu_stddev_pop_order_by = { id?: order_by | null };

/**
 * @name menu_stddev_samp_fields
 * @type OBJECT
 */
type t_menu_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'menu_stddev_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_stddev_samp_fields'>
>;

/**
 * @name menu_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type menu_stddev_samp_order_by = { id?: order_by | null };

/**
 * @name menu_sum_fields
 * @type OBJECT
 */
type t_menu_sum_fields = FieldsType<
  {
    __typename: t_String<'menu_sum_fields'>;
    id?: t_Int | null;
  },
  Extension<'menu_sum_fields'>
>;

/**
 * @name menu_sum_order_by
 * @type INPUT_OBJECT
 */
export type menu_sum_order_by = { id?: order_by | null };


/**
 * @name menu_var_pop_fields
 * @type OBJECT
 */
type t_menu_var_pop_fields = FieldsType<
  {
    __typename: t_String<'menu_var_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_var_pop_fields'>
>;

/**
 * @name menu_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type menu_var_pop_order_by = { id?: order_by | null };

/**
 * @name menu_var_samp_fields
 * @type OBJECT
 */
type t_menu_var_samp_fields = FieldsType<
  {
    __typename: t_String<'menu_var_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_var_samp_fields'>
>;

/**
 * @name menu_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type menu_var_samp_order_by = { id?: order_by | null };

/**
 * @name menu_variance_fields
 * @type OBJECT
 */
type t_menu_variance_fields = FieldsType<
  {
    __typename: t_String<'menu_variance_fields'>;
    id?: t_Float | null;
  },
  Extension<'menu_variance_fields'>
>;

/**
 * @name menu_variance_order_by
 * @type INPUT_OBJECT
 */
export type menu_variance_order_by = { id?: order_by | null };

/**
 * @name metric
 * @type OBJECT
 */
type t_metric = FieldsType<
  {
    __typename: t_String<'metric'>;
    created_at: t_timestamp;
    id: t_Int;
    name: t_String;
    payload: t_String;
  },
  Extension<'metric'>
>;

/**
 * @name metric_aggregate
 * @type OBJECT
 */
type t_metric_aggregate = FieldsType<
  {
    __typename: t_String<'metric_aggregate'>;
    aggregate?: t_metric_aggregate_fields | null;
    nodes: t_metric[];
  },
  Extension<'metric_aggregate'>
>;

/**
 * @name metric_aggregate_fields
 * @type OBJECT
 */
type t_metric_aggregate_fields = FieldsType<
  {
    __typename: t_String<'metric_aggregate_fields'>;
    avg?: t_metric_avg_fields | null;
    count?: FieldsTypeArg<
      { columns?: metric_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_metric_max_fields | null;
    min?: t_metric_min_fields | null;
    stddev?: t_metric_stddev_fields | null;
    stddev_pop?: t_metric_stddev_pop_fields | null;
    stddev_samp?: t_metric_stddev_samp_fields | null;
    sum?: t_metric_sum_fields | null;
    var_pop?: t_metric_var_pop_fields | null;
    var_samp?: t_metric_var_samp_fields | null;
    variance?: t_metric_variance_fields | null;
  },
  Extension<'metric_aggregate_fields'>
>;

/**
 * @name metric_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type metric_aggregate_order_by = {
  avg?: metric_avg_order_by | null;
  count?: order_by | null;
  max?: metric_max_order_by | null;
  min?: metric_min_order_by | null;
  stddev?: metric_stddev_order_by | null;
  stddev_pop?: metric_stddev_pop_order_by | null;
  stddev_samp?: metric_stddev_samp_order_by | null;
  sum?: metric_sum_order_by | null;
  var_pop?: metric_var_pop_order_by | null;
  var_samp?: metric_var_samp_order_by | null;
  variance?: metric_variance_order_by | null;
};

/**
 * @name metric_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type metric_arr_rel_insert_input = {
  data: metric_insert_input[];
  on_conflict?: metric_on_conflict | null;
};

/**
 * @name metric_avg_fields
 * @type OBJECT
 */
type t_metric_avg_fields = FieldsType<
  {
    __typename: t_String<'metric_avg_fields'>;
    id?: t_Float | null;
  },
  Extension<'metric_avg_fields'>
>;

/**
 * @name metric_avg_order_by
 * @type INPUT_OBJECT
 */
export type metric_avg_order_by = { id?: order_by | null };

/**
 * @name metric_bool_exp
 * @type INPUT_OBJECT
 */
export type metric_bool_exp = {
  _and?: (metric_bool_exp | null)[] | null;
  _not?: metric_bool_exp | null;
  _or?: (metric_bool_exp | null)[] | null;
  created_at?: timestamp_comparison_exp | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  payload?: String_comparison_exp | null;
};


/**
 * @name metric_inc_input
 * @type INPUT_OBJECT
 */
export type metric_inc_input = { id?: number | null };

/**
 * @name metric_insert_input
 * @type INPUT_OBJECT
 */
export type metric_insert_input = {
  created_at?: any | null;
  id?: number | null;
  name?: string | null;
  payload?: string | null;
};

/**
 * @name metric_max_fields
 * @type OBJECT
 */
type t_metric_max_fields = FieldsType<
  {
    __typename: t_String<'metric_max_fields'>;
    created_at?: t_timestamp | null;
    id?: t_Int | null;
    name?: t_String | null;
    payload?: t_String | null;
  },
  Extension<'metric_max_fields'>
>;

/**
 * @name metric_max_order_by
 * @type INPUT_OBJECT
 */
export type metric_max_order_by = {
  created_at?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  payload?: order_by | null;
};

/**
 * @name metric_min_fields
 * @type OBJECT
 */
type t_metric_min_fields = FieldsType<
  {
    __typename: t_String<'metric_min_fields'>;
    created_at?: t_timestamp | null;
    id?: t_Int | null;
    name?: t_String | null;
    payload?: t_String | null;
  },
  Extension<'metric_min_fields'>
>;

/**
 * @name metric_min_order_by
 * @type INPUT_OBJECT
 */
export type metric_min_order_by = {
  created_at?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  payload?: order_by | null;
};

/**
 * @name metric_mutation_response
 * @type OBJECT
 */
type t_metric_mutation_response = FieldsType<
  {
    __typename: t_String<'metric_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_metric[];
  },
  Extension<'metric_mutation_response'>
>;

/**
 * @name metric_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type metric_obj_rel_insert_input = {
  data: metric_insert_input;
  on_conflict?: metric_on_conflict | null;
};

/**
 * @name metric_on_conflict
 * @type INPUT_OBJECT
 */
export type metric_on_conflict = {
  constraint: metric_constraint;
  update_columns: metric_update_column[];
  where?: metric_bool_exp | null;
};

/**
 * @name metric_order_by
 * @type INPUT_OBJECT
 */
export type metric_order_by = {
  created_at?: order_by | null;
  id?: order_by | null;
  name?: order_by | null;
  payload?: order_by | null;
};

/**
 * @name metric_pk_columns_input
 * @type INPUT_OBJECT
 */
export type metric_pk_columns_input = { id: number };


/**
 * @name metric_set_input
 * @type INPUT_OBJECT
 */
export type metric_set_input = {
  created_at?: any | null;
  id?: number | null;
  name?: string | null;
  payload?: string | null;
};

/**
 * @name metric_stddev_fields
 * @type OBJECT
 */
type t_metric_stddev_fields = FieldsType<
  {
    __typename: t_String<'metric_stddev_fields'>;
    id?: t_Float | null;
  },
  Extension<'metric_stddev_fields'>
>;

/**
 * @name metric_stddev_order_by
 * @type INPUT_OBJECT
 */
export type metric_stddev_order_by = { id?: order_by | null };

/**
 * @name metric_stddev_pop_fields
 * @type OBJECT
 */
type t_metric_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'metric_stddev_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'metric_stddev_pop_fields'>
>;

/**
 * @name metric_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type metric_stddev_pop_order_by = { id?: order_by | null };

/**
 * @name metric_stddev_samp_fields
 * @type OBJECT
 */
type t_metric_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'metric_stddev_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'metric_stddev_samp_fields'>
>;

/**
 * @name metric_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type metric_stddev_samp_order_by = { id?: order_by | null };

/**
 * @name metric_sum_fields
 * @type OBJECT
 */
type t_metric_sum_fields = FieldsType<
  {
    __typename: t_String<'metric_sum_fields'>;
    id?: t_Int | null;
  },
  Extension<'metric_sum_fields'>
>;

/**
 * @name metric_sum_order_by
 * @type INPUT_OBJECT
 */
export type metric_sum_order_by = { id?: order_by | null };


/**
 * @name metric_var_pop_fields
 * @type OBJECT
 */
type t_metric_var_pop_fields = FieldsType<
  {
    __typename: t_String<'metric_var_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'metric_var_pop_fields'>
>;

/**
 * @name metric_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type metric_var_pop_order_by = { id?: order_by | null };

/**
 * @name metric_var_samp_fields
 * @type OBJECT
 */
type t_metric_var_samp_fields = FieldsType<
  {
    __typename: t_String<'metric_var_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'metric_var_samp_fields'>
>;

/**
 * @name metric_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type metric_var_samp_order_by = { id?: order_by | null };

/**
 * @name metric_variance_fields
 * @type OBJECT
 */
type t_metric_variance_fields = FieldsType<
  {
    __typename: t_String<'metric_variance_fields'>;
    id?: t_Float | null;
  },
  Extension<'metric_variance_fields'>
>;

/**
 * @name metric_variance_order_by
 * @type INPUT_OBJECT
 */
export type metric_variance_order_by = { id?: order_by | null };

/**
 * @name mutation_root
 * @type OBJECT
 */
type t_mutation_root = FieldsType<
  {
    __typename: t_String<'mutation_root'>;

    /**
     * perform the action: "Login"
     */
    Login?: FieldsTypeArg<
      { identifier: string; password: string },
      t_LoginResponse | null
    >;

    /**
     * perform the action: "RegisterUser"
     */
    RegisterUser: FieldsTypeArg<
      {
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        username: string;
      },
      t_LoginResponse
    >;

    /**
     * delete data from the table: "authenticated"
     */
    delete_authenticated?: FieldsTypeArg<
      { where: authenticated_bool_exp },
      t_authenticated_mutation_response | null
    >;

    /**
     * delete single row from the table: "authenticated"
     */
    delete_authenticated_by_pk?: FieldsTypeArg<
      { id: number },
      t_authenticated | null
    >;

    /**
     * delete data from the table: "contact"
     */
    delete_contact?: FieldsTypeArg<
      { where: contact_bool_exp },
      t_contact_mutation_response | null
    >;

    /**
     * delete single row from the table: "contact"
     */
    delete_contact_by_pk?: FieldsTypeArg<{ id: number }, t_contact | null>;

    /**
     * delete data from the table: "cuisine"
     */
    delete_cuisine?: FieldsTypeArg<
      { where: cuisine_bool_exp },
      t_cuisine_mutation_response | null
    >;

    /**
     * delete single row from the table: "cuisine"
     */
    delete_cuisine_by_pk?: FieldsTypeArg<{ id: number }, t_cuisine | null>;

    /**
     * delete data from the table: "favorite_item_entity"
     */
    delete_favorite_item_entity?: FieldsTypeArg<
      { where: favorite_item_entity_bool_exp },
      t_favorite_item_entity_mutation_response | null
    >;

    /**
     * delete single row from the table: "favorite_item_entity"
     */
    delete_favorite_item_entity_by_pk?: FieldsTypeArg<
      { foodItemId: number; userId: number },
      t_favorite_item_entity | null
    >;

    /**
     * delete data from the table: "food_item"
     */
    delete_food_item?: FieldsTypeArg<
      { where: food_item_bool_exp },
      t_food_item_mutation_response | null
    >;

    /**
     * delete single row from the table: "food_item"
     */
    delete_food_item_by_pk?: FieldsTypeArg<{ id: number }, t_food_item | null>;

    /**
     * delete data from the table: "food_item_media"
     */
    delete_food_item_media?: FieldsTypeArg<
      { where: food_item_media_bool_exp },
      t_food_item_media_mutation_response | null
    >;

    /**
     * delete single row from the table: "food_item_media"
     */
    delete_food_item_media_by_pk?: FieldsTypeArg<
      { id: number },
      t_food_item_media | null
    >;

    /**
     * delete data from the table: "game"
     */
    delete_game?: FieldsTypeArg<
      { where: game_bool_exp },
      t_game_mutation_response | null
    >;

    /**
     * delete single row from the table: "game"
     */
    delete_game_by_pk?: FieldsTypeArg<{ id: number }, t_game | null>;

    /**
     * delete data from the table: "game_choice"
     */
    delete_game_choice?: FieldsTypeArg<
      { where: game_choice_bool_exp },
      t_game_choice_mutation_response | null
    >;

    /**
     * delete single row from the table: "game_choice"
     */
    delete_game_choice_by_pk?: FieldsTypeArg<
      { id: number },
      t_game_choice | null
    >;

    /**
     * delete data from the table: "game_cuisine"
     */
    delete_game_cuisine?: FieldsTypeArg<
      { where: game_cuisine_bool_exp },
      t_game_cuisine_mutation_response | null
    >;

    /**
     * delete single row from the table: "game_cuisine"
     */
    delete_game_cuisine_by_pk?: FieldsTypeArg<
      { id: number },
      t_game_cuisine | null
    >;

    /**
     * delete data from the table: "game_player"
     */
    delete_game_player?: FieldsTypeArg<
      { where: game_player_bool_exp },
      t_game_player_mutation_response | null
    >;

    /**
     * delete single row from the table: "game_player"
     */
    delete_game_player_by_pk?: FieldsTypeArg<
      { id: number },
      t_game_player | null
    >;

    /**
     * delete data from the table: "log"
     */
    delete_log?: FieldsTypeArg<
      { where: log_bool_exp },
      t_log_mutation_response | null
    >;

    /**
     * delete single row from the table: "log"
     */
    delete_log_by_pk?: FieldsTypeArg<{ id: number }, t_log | null>;

    /**
     * delete data from the table: "media_author"
     */
    delete_media_author?: FieldsTypeArg<
      { where: media_author_bool_exp },
      t_media_author_mutation_response | null
    >;

    /**
     * delete single row from the table: "media_author"
     */
    delete_media_author_by_pk?: FieldsTypeArg<
      { id: number },
      t_media_author | null
    >;

    /**
     * delete data from the table: "menu"
     */
    delete_menu?: FieldsTypeArg<
      { where: menu_bool_exp },
      t_menu_mutation_response | null
    >;

    /**
     * delete single row from the table: "menu"
     */
    delete_menu_by_pk?: FieldsTypeArg<{ id: number }, t_menu | null>;

    /**
     * delete data from the table: "menu_section"
     */
    delete_menu_section?: FieldsTypeArg<
      { where: menu_section_bool_exp },
      t_menu_section_mutation_response | null
    >;

    /**
     * delete single row from the table: "menu_section"
     */
    delete_menu_section_by_pk?: FieldsTypeArg<
      { id: number },
      t_menu_section | null
    >;

    /**
     * delete data from the table: "metric"
     */
    delete_metric?: FieldsTypeArg<
      { where: metric_bool_exp },
      t_metric_mutation_response | null
    >;

    /**
     * delete single row from the table: "metric"
     */
    delete_metric_by_pk?: FieldsTypeArg<{ id: number }, t_metric | null>;

    /**
     * delete data from the table: "restaurant"
     */
    delete_restaurant?: FieldsTypeArg<
      { where: restaurant_bool_exp },
      t_restaurant_mutation_response | null
    >;

    /**
     * delete single row from the table: "restaurant"
     */
    delete_restaurant_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurant | null
    >;

    /**
     * delete data from the table: "restaurant_chain"
     */
    delete_restaurant_chain?: FieldsTypeArg<
      { where: restaurant_chain_bool_exp },
      t_restaurant_chain_mutation_response | null
    >;

    /**
     * delete single row from the table: "restaurant_chain"
     */
    delete_restaurant_chain_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurant_chain | null
    >;

    /**
     * delete data from the table: "restaurant_cuisine"
     */
    delete_restaurant_cuisine?: FieldsTypeArg<
      { where: restaurant_cuisine_bool_exp },
      t_restaurant_cuisine_mutation_response | null
    >;

    /**
     * delete single row from the table: "restaurant_cuisine"
     */
    delete_restaurant_cuisine_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurant_cuisine | null
    >;

    /**
     * delete data from the table: "restaurant_item"
     */
    delete_restaurant_item?: FieldsTypeArg<
      { where: restaurant_item_bool_exp },
      t_restaurant_item_mutation_response | null
    >;

    /**
     * delete single row from the table: "restaurant_item"
     */
    delete_restaurant_item_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurant_item | null
    >;

    /**
     * delete data from the table: "restaurants_visited_entity"
     */
    delete_restaurants_visited_entity?: FieldsTypeArg<
      { where: restaurants_visited_entity_bool_exp },
      t_restaurants_visited_entity_mutation_response | null
    >;

    /**
     * delete single row from the table: "restaurants_visited_entity"
     */
    delete_restaurants_visited_entity_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurants_visited_entity | null
    >;

    /**
     * delete data from the table: "test_table"
     */
    delete_test_table?: FieldsTypeArg<
      { where: test_table_bool_exp },
      t_test_table_mutation_response | null
    >;

    /**
     * delete single row from the table: "test_table"
     */
    delete_test_table_by_pk?: FieldsTypeArg<{ id: any }, t_test_table | null>;

    /**
     * delete data from the table: "user"
     */
    delete_user?: FieldsTypeArg<
      { where: user_bool_exp },
      t_user_mutation_response | null
    >;

    /**
     * delete single row from the table: "user"
     */
    delete_user_by_pk?: FieldsTypeArg<{ id: number }, t_user | null>;

    /**
     * delete data from the table: "user_device"
     */
    delete_user_device?: FieldsTypeArg<
      { where: user_device_bool_exp },
      t_user_device_mutation_response | null
    >;

    /**
     * delete single row from the table: "user_device"
     */
    delete_user_device_by_pk?: FieldsTypeArg<
      { id: number },
      t_user_device | null
    >;

    /**
     * insert data into the table: "authenticated"
     */
    insert_authenticated?: FieldsTypeArg<
      {
        objects: authenticated_insert_input[];
        on_conflict?: authenticated_on_conflict | null;
      },
      t_authenticated_mutation_response | null
    >;

    /**
     * insert a single row into the table: "authenticated"
     */
    insert_authenticated_one?: FieldsTypeArg<
      {
        object: authenticated_insert_input;
        on_conflict?: authenticated_on_conflict | null;
      },
      t_authenticated | null
    >;

    /**
     * insert data into the table: "contact"
     */
    insert_contact?: FieldsTypeArg<
      {
        objects: contact_insert_input[];
        on_conflict?: contact_on_conflict | null;
      },
      t_contact_mutation_response | null
    >;

    /**
     * insert a single row into the table: "contact"
     */
    insert_contact_one?: FieldsTypeArg<
      {
        object: contact_insert_input;
        on_conflict?: contact_on_conflict | null;
      },
      t_contact | null
    >;

    /**
     * insert data into the table: "cuisine"
     */
    insert_cuisine?: FieldsTypeArg<
      {
        objects: cuisine_insert_input[];
        on_conflict?: cuisine_on_conflict | null;
      },
      t_cuisine_mutation_response | null
    >;

    /**
     * insert a single row into the table: "cuisine"
     */
    insert_cuisine_one?: FieldsTypeArg<
      {
        object: cuisine_insert_input;
        on_conflict?: cuisine_on_conflict | null;
      },
      t_cuisine | null
    >;

    /**
     * insert data into the table: "favorite_item_entity"
     */
    insert_favorite_item_entity?: FieldsTypeArg<
      {
        objects: favorite_item_entity_insert_input[];
        on_conflict?: favorite_item_entity_on_conflict | null;
      },
      t_favorite_item_entity_mutation_response | null
    >;

    /**
     * insert a single row into the table: "favorite_item_entity"
     */
    insert_favorite_item_entity_one?: FieldsTypeArg<
      {
        object: favorite_item_entity_insert_input;
        on_conflict?: favorite_item_entity_on_conflict | null;
      },
      t_favorite_item_entity | null
    >;

    /**
     * insert data into the table: "food_item"
     */
    insert_food_item?: FieldsTypeArg<
      {
        objects: food_item_insert_input[];
        on_conflict?: food_item_on_conflict | null;
      },
      t_food_item_mutation_response | null
    >;

    /**
     * insert data into the table: "food_item_media"
     */
    insert_food_item_media?: FieldsTypeArg<
      {
        objects: food_item_media_insert_input[];
        on_conflict?: food_item_media_on_conflict | null;
      },
      t_food_item_media_mutation_response | null
    >;

    /**
     * insert a single row into the table: "food_item_media"
     */
    insert_food_item_media_one?: FieldsTypeArg<
      {
        object: food_item_media_insert_input;
        on_conflict?: food_item_media_on_conflict | null;
      },
      t_food_item_media | null
    >;

    /**
     * insert a single row into the table: "food_item"
     */
    insert_food_item_one?: FieldsTypeArg<
      {
        object: food_item_insert_input;
        on_conflict?: food_item_on_conflict | null;
      },
      t_food_item | null
    >;

    /**
     * insert data into the table: "game"
     */
    insert_game?: FieldsTypeArg<
      { objects: game_insert_input[]; on_conflict?: game_on_conflict | null },
      t_game_mutation_response | null
    >;

    /**
     * insert data into the table: "game_choice"
     */
    insert_game_choice?: FieldsTypeArg<
      {
        objects: game_choice_insert_input[];
        on_conflict?: game_choice_on_conflict | null;
      },
      t_game_choice_mutation_response | null
    >;

    /**
     * insert a single row into the table: "game_choice"
     */
    insert_game_choice_one?: FieldsTypeArg<
      {
        object: game_choice_insert_input;
        on_conflict?: game_choice_on_conflict | null;
      },
      t_game_choice | null
    >;

    /**
     * insert data into the table: "game_cuisine"
     */
    insert_game_cuisine?: FieldsTypeArg<
      {
        objects: game_cuisine_insert_input[];
        on_conflict?: game_cuisine_on_conflict | null;
      },
      t_game_cuisine_mutation_response | null
    >;

    /**
     * insert a single row into the table: "game_cuisine"
     */
    insert_game_cuisine_one?: FieldsTypeArg<
      {
        object: game_cuisine_insert_input;
        on_conflict?: game_cuisine_on_conflict | null;
      },
      t_game_cuisine | null
    >;

    /**
     * insert a single row into the table: "game"
     */
    insert_game_one?: FieldsTypeArg<
      { object: game_insert_input; on_conflict?: game_on_conflict | null },
      t_game | null
    >;

    /**
     * insert data into the table: "game_player"
     */
    insert_game_player?: FieldsTypeArg<
      {
        objects: game_player_insert_input[];
        on_conflict?: game_player_on_conflict | null;
      },
      t_game_player_mutation_response | null
    >;

    /**
     * insert a single row into the table: "game_player"
     */
    insert_game_player_one?: FieldsTypeArg<
      {
        object: game_player_insert_input;
        on_conflict?: game_player_on_conflict | null;
      },
      t_game_player | null
    >;

    /**
     * insert data into the table: "log"
     */
    insert_log?: FieldsTypeArg<
      { objects: log_insert_input[]; on_conflict?: log_on_conflict | null },
      t_log_mutation_response | null
    >;

    /**
     * insert a single row into the table: "log"
     */
    insert_log_one?: FieldsTypeArg<
      { object: log_insert_input; on_conflict?: log_on_conflict | null },
      t_log | null
    >;

    /**
     * insert data into the table: "media_author"
     */
    insert_media_author?: FieldsTypeArg<
      {
        objects: media_author_insert_input[];
        on_conflict?: media_author_on_conflict | null;
      },
      t_media_author_mutation_response | null
    >;

    /**
     * insert a single row into the table: "media_author"
     */
    insert_media_author_one?: FieldsTypeArg<
      {
        object: media_author_insert_input;
        on_conflict?: media_author_on_conflict | null;
      },
      t_media_author | null
    >;

    /**
     * insert data into the table: "menu"
     */
    insert_menu?: FieldsTypeArg<
      { objects: menu_insert_input[]; on_conflict?: menu_on_conflict | null },
      t_menu_mutation_response | null
    >;

    /**
     * insert a single row into the table: "menu"
     */
    insert_menu_one?: FieldsTypeArg<
      { object: menu_insert_input; on_conflict?: menu_on_conflict | null },
      t_menu | null
    >;

    /**
     * insert data into the table: "menu_section"
     */
    insert_menu_section?: FieldsTypeArg<
      {
        objects: menu_section_insert_input[];
        on_conflict?: menu_section_on_conflict | null;
      },
      t_menu_section_mutation_response | null
    >;

    /**
     * insert a single row into the table: "menu_section"
     */
    insert_menu_section_one?: FieldsTypeArg<
      {
        object: menu_section_insert_input;
        on_conflict?: menu_section_on_conflict | null;
      },
      t_menu_section | null
    >;

    /**
     * insert data into the table: "metric"
     */
    insert_metric?: FieldsTypeArg<
      {
        objects: metric_insert_input[];
        on_conflict?: metric_on_conflict | null;
      },
      t_metric_mutation_response | null
    >;

    /**
     * insert a single row into the table: "metric"
     */
    insert_metric_one?: FieldsTypeArg<
      { object: metric_insert_input; on_conflict?: metric_on_conflict | null },
      t_metric | null
    >;

    /**
     * insert data into the table: "restaurant"
     */
    insert_restaurant?: FieldsTypeArg<
      {
        objects: restaurant_insert_input[];
        on_conflict?: restaurant_on_conflict | null;
      },
      t_restaurant_mutation_response | null
    >;

    /**
     * insert data into the table: "restaurant_chain"
     */
    insert_restaurant_chain?: FieldsTypeArg<
      {
        objects: restaurant_chain_insert_input[];
        on_conflict?: restaurant_chain_on_conflict | null;
      },
      t_restaurant_chain_mutation_response | null
    >;

    /**
     * insert a single row into the table: "restaurant_chain"
     */
    insert_restaurant_chain_one?: FieldsTypeArg<
      {
        object: restaurant_chain_insert_input;
        on_conflict?: restaurant_chain_on_conflict | null;
      },
      t_restaurant_chain | null
    >;

    /**
     * insert data into the table: "restaurant_cuisine"
     */
    insert_restaurant_cuisine?: FieldsTypeArg<
      {
        objects: restaurant_cuisine_insert_input[];
        on_conflict?: restaurant_cuisine_on_conflict | null;
      },
      t_restaurant_cuisine_mutation_response | null
    >;

    /**
     * insert a single row into the table: "restaurant_cuisine"
     */
    insert_restaurant_cuisine_one?: FieldsTypeArg<
      {
        object: restaurant_cuisine_insert_input;
        on_conflict?: restaurant_cuisine_on_conflict | null;
      },
      t_restaurant_cuisine | null
    >;

    /**
     * insert data into the table: "restaurant_item"
     */
    insert_restaurant_item?: FieldsTypeArg<
      {
        objects: restaurant_item_insert_input[];
        on_conflict?: restaurant_item_on_conflict | null;
      },
      t_restaurant_item_mutation_response | null
    >;

    /**
     * insert a single row into the table: "restaurant_item"
     */
    insert_restaurant_item_one?: FieldsTypeArg<
      {
        object: restaurant_item_insert_input;
        on_conflict?: restaurant_item_on_conflict | null;
      },
      t_restaurant_item | null
    >;

    /**
     * insert a single row into the table: "restaurant"
     */
    insert_restaurant_one?: FieldsTypeArg<
      {
        object: restaurant_insert_input;
        on_conflict?: restaurant_on_conflict | null;
      },
      t_restaurant | null
    >;

    /**
     * insert data into the table: "restaurants_visited_entity"
     */
    insert_restaurants_visited_entity?: FieldsTypeArg<
      {
        objects: restaurants_visited_entity_insert_input[];
        on_conflict?: restaurants_visited_entity_on_conflict | null;
      },
      t_restaurants_visited_entity_mutation_response | null
    >;

    /**
     * insert a single row into the table: "restaurants_visited_entity"
     */
    insert_restaurants_visited_entity_one?: FieldsTypeArg<
      {
        object: restaurants_visited_entity_insert_input;
        on_conflict?: restaurants_visited_entity_on_conflict | null;
      },
      t_restaurants_visited_entity | null
    >;

    /**
     * insert data into the table: "test_table"
     */
    insert_test_table?: FieldsTypeArg<
      {
        objects: test_table_insert_input[];
        on_conflict?: test_table_on_conflict | null;
      },
      t_test_table_mutation_response | null
    >;

    /**
     * insert a single row into the table: "test_table"
     */
    insert_test_table_one?: FieldsTypeArg<
      {
        object: test_table_insert_input;
        on_conflict?: test_table_on_conflict | null;
      },
      t_test_table | null
    >;

    /**
     * insert data into the table: "user"
     */
    insert_user?: FieldsTypeArg<
      { objects: user_insert_input[]; on_conflict?: user_on_conflict | null },
      t_user_mutation_response | null
    >;

    /**
     * insert data into the table: "user_device"
     */
    insert_user_device?: FieldsTypeArg<
      {
        objects: user_device_insert_input[];
        on_conflict?: user_device_on_conflict | null;
      },
      t_user_device_mutation_response | null
    >;

    /**
     * insert a single row into the table: "user_device"
     */
    insert_user_device_one?: FieldsTypeArg<
      {
        object: user_device_insert_input;
        on_conflict?: user_device_on_conflict | null;
      },
      t_user_device | null
    >;

    /**
     * insert a single row into the table: "user"
     */
    insert_user_one?: FieldsTypeArg<
      { object: user_insert_input; on_conflict?: user_on_conflict | null },
      t_user | null
    >;

    /**
     * update data of the table: "authenticated"
     */
    update_authenticated?: FieldsTypeArg<
      {
        _inc?: authenticated_inc_input | null;
        _set?: authenticated_set_input | null;
        where: authenticated_bool_exp;
      },
      t_authenticated_mutation_response | null
    >;

    /**
     * update single row of the table: "authenticated"
     */
    update_authenticated_by_pk?: FieldsTypeArg<
      {
        _inc?: authenticated_inc_input | null;
        _set?: authenticated_set_input | null;
        pk_columns: authenticated_pk_columns_input;
      },
      t_authenticated | null
    >;

    /**
     * update data of the table: "contact"
     */
    update_contact?: FieldsTypeArg<
      {
        _inc?: contact_inc_input | null;
        _set?: contact_set_input | null;
        where: contact_bool_exp;
      },
      t_contact_mutation_response | null
    >;

    /**
     * update single row of the table: "contact"
     */
    update_contact_by_pk?: FieldsTypeArg<
      {
        _inc?: contact_inc_input | null;
        _set?: contact_set_input | null;
        pk_columns: contact_pk_columns_input;
      },
      t_contact | null
    >;

    /**
     * update data of the table: "cuisine"
     */
    update_cuisine?: FieldsTypeArg<
      {
        _inc?: cuisine_inc_input | null;
        _set?: cuisine_set_input | null;
        where: cuisine_bool_exp;
      },
      t_cuisine_mutation_response | null
    >;

    /**
     * update single row of the table: "cuisine"
     */
    update_cuisine_by_pk?: FieldsTypeArg<
      {
        _inc?: cuisine_inc_input | null;
        _set?: cuisine_set_input | null;
        pk_columns: cuisine_pk_columns_input;
      },
      t_cuisine | null
    >;

    /**
     * update data of the table: "favorite_item_entity"
     */
    update_favorite_item_entity?: FieldsTypeArg<
      {
        _inc?: favorite_item_entity_inc_input | null;
        _set?: favorite_item_entity_set_input | null;
        where: favorite_item_entity_bool_exp;
      },
      t_favorite_item_entity_mutation_response | null
    >;

    /**
     * update single row of the table: "favorite_item_entity"
     */
    update_favorite_item_entity_by_pk?: FieldsTypeArg<
      {
        _inc?: favorite_item_entity_inc_input | null;
        _set?: favorite_item_entity_set_input | null;
        pk_columns: favorite_item_entity_pk_columns_input;
      },
      t_favorite_item_entity | null
    >;

    /**
     * update data of the table: "food_item"
     */
    update_food_item?: FieldsTypeArg<
      {
        _inc?: food_item_inc_input | null;
        _set?: food_item_set_input | null;
        where: food_item_bool_exp;
      },
      t_food_item_mutation_response | null
    >;

    /**
     * update single row of the table: "food_item"
     */
    update_food_item_by_pk?: FieldsTypeArg<
      {
        _inc?: food_item_inc_input | null;
        _set?: food_item_set_input | null;
        pk_columns: food_item_pk_columns_input;
      },
      t_food_item | null
    >;

    /**
     * update data of the table: "food_item_media"
     */
    update_food_item_media?: FieldsTypeArg<
      {
        _inc?: food_item_media_inc_input | null;
        _set?: food_item_media_set_input | null;
        where: food_item_media_bool_exp;
      },
      t_food_item_media_mutation_response | null
    >;

    /**
     * update single row of the table: "food_item_media"
     */
    update_food_item_media_by_pk?: FieldsTypeArg<
      {
        _inc?: food_item_media_inc_input | null;
        _set?: food_item_media_set_input | null;
        pk_columns: food_item_media_pk_columns_input;
      },
      t_food_item_media | null
    >;

    /**
     * update data of the table: "game"
     */
    update_game?: FieldsTypeArg<
      {
        _inc?: game_inc_input | null;
        _set?: game_set_input | null;
        where: game_bool_exp;
      },
      t_game_mutation_response | null
    >;

    /**
     * update single row of the table: "game"
     */
    update_game_by_pk?: FieldsTypeArg<
      {
        _inc?: game_inc_input | null;
        _set?: game_set_input | null;
        pk_columns: game_pk_columns_input;
      },
      t_game | null
    >;

    /**
     * update data of the table: "game_choice"
     */
    update_game_choice?: FieldsTypeArg<
      {
        _inc?: game_choice_inc_input | null;
        _set?: game_choice_set_input | null;
        where: game_choice_bool_exp;
      },
      t_game_choice_mutation_response | null
    >;

    /**
     * update single row of the table: "game_choice"
     */
    update_game_choice_by_pk?: FieldsTypeArg<
      {
        _inc?: game_choice_inc_input | null;
        _set?: game_choice_set_input | null;
        pk_columns: game_choice_pk_columns_input;
      },
      t_game_choice | null
    >;

    /**
     * update data of the table: "game_cuisine"
     */
    update_game_cuisine?: FieldsTypeArg<
      {
        _inc?: game_cuisine_inc_input | null;
        _set?: game_cuisine_set_input | null;
        where: game_cuisine_bool_exp;
      },
      t_game_cuisine_mutation_response | null
    >;

    /**
     * update single row of the table: "game_cuisine"
     */
    update_game_cuisine_by_pk?: FieldsTypeArg<
      {
        _inc?: game_cuisine_inc_input | null;
        _set?: game_cuisine_set_input | null;
        pk_columns: game_cuisine_pk_columns_input;
      },
      t_game_cuisine | null
    >;

    /**
     * update data of the table: "game_player"
     */
    update_game_player?: FieldsTypeArg<
      {
        _inc?: game_player_inc_input | null;
        _set?: game_player_set_input | null;
        where: game_player_bool_exp;
      },
      t_game_player_mutation_response | null
    >;

    /**
     * update single row of the table: "game_player"
     */
    update_game_player_by_pk?: FieldsTypeArg<
      {
        _inc?: game_player_inc_input | null;
        _set?: game_player_set_input | null;
        pk_columns: game_player_pk_columns_input;
      },
      t_game_player | null
    >;

    /**
     * update data of the table: "log"
     */
    update_log?: FieldsTypeArg<
      {
        _inc?: log_inc_input | null;
        _set?: log_set_input | null;
        where: log_bool_exp;
      },
      t_log_mutation_response | null
    >;

    /**
     * update single row of the table: "log"
     */
    update_log_by_pk?: FieldsTypeArg<
      {
        _inc?: log_inc_input | null;
        _set?: log_set_input | null;
        pk_columns: log_pk_columns_input;
      },
      t_log | null
    >;

    /**
     * update data of the table: "media_author"
     */
    update_media_author?: FieldsTypeArg<
      {
        _inc?: media_author_inc_input | null;
        _set?: media_author_set_input | null;
        where: media_author_bool_exp;
      },
      t_media_author_mutation_response | null
    >;

    /**
     * update single row of the table: "media_author"
     */
    update_media_author_by_pk?: FieldsTypeArg<
      {
        _inc?: media_author_inc_input | null;
        _set?: media_author_set_input | null;
        pk_columns: media_author_pk_columns_input;
      },
      t_media_author | null
    >;

    /**
     * update data of the table: "menu"
     */
    update_menu?: FieldsTypeArg<
      {
        _inc?: menu_inc_input | null;
        _set?: menu_set_input | null;
        where: menu_bool_exp;
      },
      t_menu_mutation_response | null
    >;

    /**
     * update single row of the table: "menu"
     */
    update_menu_by_pk?: FieldsTypeArg<
      {
        _inc?: menu_inc_input | null;
        _set?: menu_set_input | null;
        pk_columns: menu_pk_columns_input;
      },
      t_menu | null
    >;

    /**
     * update data of the table: "menu_section"
     */
    update_menu_section?: FieldsTypeArg<
      {
        _inc?: menu_section_inc_input | null;
        _set?: menu_section_set_input | null;
        where: menu_section_bool_exp;
      },
      t_menu_section_mutation_response | null
    >;

    /**
     * update single row of the table: "menu_section"
     */
    update_menu_section_by_pk?: FieldsTypeArg<
      {
        _inc?: menu_section_inc_input | null;
        _set?: menu_section_set_input | null;
        pk_columns: menu_section_pk_columns_input;
      },
      t_menu_section | null
    >;

    /**
     * update data of the table: "metric"
     */
    update_metric?: FieldsTypeArg<
      {
        _inc?: metric_inc_input | null;
        _set?: metric_set_input | null;
        where: metric_bool_exp;
      },
      t_metric_mutation_response | null
    >;

    /**
     * update single row of the table: "metric"
     */
    update_metric_by_pk?: FieldsTypeArg<
      {
        _inc?: metric_inc_input | null;
        _set?: metric_set_input | null;
        pk_columns: metric_pk_columns_input;
      },
      t_metric | null
    >;

    /**
     * update data of the table: "restaurant"
     */
    update_restaurant?: FieldsTypeArg<
      {
        _inc?: restaurant_inc_input | null;
        _set?: restaurant_set_input | null;
        where: restaurant_bool_exp;
      },
      t_restaurant_mutation_response | null
    >;

    /**
     * update single row of the table: "restaurant"
     */
    update_restaurant_by_pk?: FieldsTypeArg<
      {
        _inc?: restaurant_inc_input | null;
        _set?: restaurant_set_input | null;
        pk_columns: restaurant_pk_columns_input;
      },
      t_restaurant | null
    >;

    /**
     * update data of the table: "restaurant_chain"
     */
    update_restaurant_chain?: FieldsTypeArg<
      {
        _inc?: restaurant_chain_inc_input | null;
        _set?: restaurant_chain_set_input | null;
        where: restaurant_chain_bool_exp;
      },
      t_restaurant_chain_mutation_response | null
    >;

    /**
     * update single row of the table: "restaurant_chain"
     */
    update_restaurant_chain_by_pk?: FieldsTypeArg<
      {
        _inc?: restaurant_chain_inc_input | null;
        _set?: restaurant_chain_set_input | null;
        pk_columns: restaurant_chain_pk_columns_input;
      },
      t_restaurant_chain | null
    >;

    /**
     * update data of the table: "restaurant_cuisine"
     */
    update_restaurant_cuisine?: FieldsTypeArg<
      {
        _inc?: restaurant_cuisine_inc_input | null;
        _set?: restaurant_cuisine_set_input | null;
        where: restaurant_cuisine_bool_exp;
      },
      t_restaurant_cuisine_mutation_response | null
    >;

    /**
     * update single row of the table: "restaurant_cuisine"
     */
    update_restaurant_cuisine_by_pk?: FieldsTypeArg<
      {
        _inc?: restaurant_cuisine_inc_input | null;
        _set?: restaurant_cuisine_set_input | null;
        pk_columns: restaurant_cuisine_pk_columns_input;
      },
      t_restaurant_cuisine | null
    >;

    /**
     * update data of the table: "restaurant_item"
     */
    update_restaurant_item?: FieldsTypeArg<
      {
        _inc?: restaurant_item_inc_input | null;
        _set?: restaurant_item_set_input | null;
        where: restaurant_item_bool_exp;
      },
      t_restaurant_item_mutation_response | null
    >;

    /**
     * update single row of the table: "restaurant_item"
     */
    update_restaurant_item_by_pk?: FieldsTypeArg<
      {
        _inc?: restaurant_item_inc_input | null;
        _set?: restaurant_item_set_input | null;
        pk_columns: restaurant_item_pk_columns_input;
      },
      t_restaurant_item | null
    >;

    /**
     * update data of the table: "restaurants_visited_entity"
     */
    update_restaurants_visited_entity?: FieldsTypeArg<
      {
        _inc?: restaurants_visited_entity_inc_input | null;
        _set?: restaurants_visited_entity_set_input | null;
        where: restaurants_visited_entity_bool_exp;
      },
      t_restaurants_visited_entity_mutation_response | null
    >;

    /**
     * update single row of the table: "restaurants_visited_entity"
     */
    update_restaurants_visited_entity_by_pk?: FieldsTypeArg<
      {
        _inc?: restaurants_visited_entity_inc_input | null;
        _set?: restaurants_visited_entity_set_input | null;
        pk_columns: restaurants_visited_entity_pk_columns_input;
      },
      t_restaurants_visited_entity | null
    >;

    /**
     * update data of the table: "test_table"
     */
    update_test_table?: FieldsTypeArg<
      { _set?: test_table_set_input | null; where: test_table_bool_exp },
      t_test_table_mutation_response | null
    >;

    /**
     * update single row of the table: "test_table"
     */
    update_test_table_by_pk?: FieldsTypeArg<
      {
        _set?: test_table_set_input | null;
        pk_columns: test_table_pk_columns_input;
      },
      t_test_table | null
    >;

    /**
     * update data of the table: "user"
     */
    update_user?: FieldsTypeArg<
      {
        _inc?: user_inc_input | null;
        _set?: user_set_input | null;
        where: user_bool_exp;
      },
      t_user_mutation_response | null
    >;

    /**
     * update single row of the table: "user"
     */
    update_user_by_pk?: FieldsTypeArg<
      {
        _inc?: user_inc_input | null;
        _set?: user_set_input | null;
        pk_columns: user_pk_columns_input;
      },
      t_user | null
    >;

    /**
     * update data of the table: "user_device"
     */
    update_user_device?: FieldsTypeArg<
      {
        _inc?: user_device_inc_input | null;
        _set?: user_device_set_input | null;
        where: user_device_bool_exp;
      },
      t_user_device_mutation_response | null
    >;

    /**
     * update single row of the table: "user_device"
     */
    update_user_device_by_pk?: FieldsTypeArg<
      {
        _inc?: user_device_inc_input | null;
        _set?: user_device_set_input | null;
        pk_columns: user_device_pk_columns_input;
      },
      t_user_device | null
    >;
  },
  Extension<'mutation_root'>
>;


/**
 * @name query_root
 * @type OBJECT
 */
type t_query_root = FieldsType<
  {
    __typename: t_String<'query_root'>;

    /**
     * fetch data from the table: "authenticated"
     */
    authenticated: FieldsTypeArg<
      {
        distinct_on?: authenticated_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: authenticated_order_by[] | null;
        where?: authenticated_bool_exp | null;
      },
      t_authenticated[]
    >;

    /**
     * fetch aggregated fields from the table: "authenticated"
     */
    authenticated_aggregate: FieldsTypeArg<
      {
        distinct_on?: authenticated_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: authenticated_order_by[] | null;
        where?: authenticated_bool_exp | null;
      },
      t_authenticated_aggregate
    >;

    /**
     * fetch data from the table: "authenticated" using primary key columns
     */
    authenticated_by_pk?: FieldsTypeArg<{ id: number }, t_authenticated | null>;

    /**
     * fetch data from the table: "contact"
     */
    contact: FieldsTypeArg<
      {
        distinct_on?: contact_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contact_order_by[] | null;
        where?: contact_bool_exp | null;
      },
      t_contact[]
    >;

    /**
     * fetch aggregated fields from the table: "contact"
     */
    contact_aggregate: FieldsTypeArg<
      {
        distinct_on?: contact_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contact_order_by[] | null;
        where?: contact_bool_exp | null;
      },
      t_contact_aggregate
    >;

    /**
     * fetch data from the table: "contact" using primary key columns
     */
    contact_by_pk?: FieldsTypeArg<{ id: number }, t_contact | null>;

    /**
     * fetch data from the table: "cuisine"
     */
    cuisine: FieldsTypeArg<
      {
        distinct_on?: cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: cuisine_order_by[] | null;
        where?: cuisine_bool_exp | null;
      },
      t_cuisine[]
    >;

    /**
     * fetch aggregated fields from the table: "cuisine"
     */
    cuisine_aggregate: FieldsTypeArg<
      {
        distinct_on?: cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: cuisine_order_by[] | null;
        where?: cuisine_bool_exp | null;
      },
      t_cuisine_aggregate
    >;

    /**
     * fetch data from the table: "cuisine" using primary key columns
     */
    cuisine_by_pk?: FieldsTypeArg<{ id: number }, t_cuisine | null>;

    /**
     * fetch data from the table: "favorite_item_entity"
     */
    favorite_item_entity: FieldsTypeArg<
      {
        distinct_on?: favorite_item_entity_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: favorite_item_entity_order_by[] | null;
        where?: favorite_item_entity_bool_exp | null;
      },
      t_favorite_item_entity[]
    >;

    /**
     * fetch aggregated fields from the table: "favorite_item_entity"
     */
    favorite_item_entity_aggregate: FieldsTypeArg<
      {
        distinct_on?: favorite_item_entity_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: favorite_item_entity_order_by[] | null;
        where?: favorite_item_entity_bool_exp | null;
      },
      t_favorite_item_entity_aggregate
    >;

    /**
     * fetch data from the table: "favorite_item_entity" using primary key columns
     */
    favorite_item_entity_by_pk?: FieldsTypeArg<
      { foodItemId: number; userId: number },
      t_favorite_item_entity | null
    >;

    /**
     * fetch data from the table: "food_item"
     */
    food_item: FieldsTypeArg<
      {
        distinct_on?: food_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_order_by[] | null;
        where?: food_item_bool_exp | null;
      },
      t_food_item[]
    >;

    /**
     * fetch aggregated fields from the table: "food_item"
     */
    food_item_aggregate: FieldsTypeArg<
      {
        distinct_on?: food_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_order_by[] | null;
        where?: food_item_bool_exp | null;
      },
      t_food_item_aggregate
    >;

    /**
     * fetch data from the table: "food_item" using primary key columns
     */
    food_item_by_pk?: FieldsTypeArg<{ id: number }, t_food_item | null>;

    /**
     * fetch data from the table: "food_item_media"
     */
    food_item_media: FieldsTypeArg<
      {
        distinct_on?: food_item_media_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_media_order_by[] | null;
        where?: food_item_media_bool_exp | null;
      },
      t_food_item_media[]
    >;

    /**
     * fetch aggregated fields from the table: "food_item_media"
     */
    food_item_media_aggregate: FieldsTypeArg<
      {
        distinct_on?: food_item_media_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_media_order_by[] | null;
        where?: food_item_media_bool_exp | null;
      },
      t_food_item_media_aggregate
    >;

    /**
     * fetch data from the table: "food_item_media" using primary key columns
     */
    food_item_media_by_pk?: FieldsTypeArg<
      { id: number },
      t_food_item_media | null
    >;

    /**
     * fetch data from the table: "game"
     */
    game: FieldsTypeArg<
      {
        distinct_on?: game_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_order_by[] | null;
        where?: game_bool_exp | null;
      },
      t_game[]
    >;

    /**
     * fetch aggregated fields from the table: "game"
     */
    game_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_order_by[] | null;
        where?: game_bool_exp | null;
      },
      t_game_aggregate
    >;

    /**
     * fetch data from the table: "game" using primary key columns
     */
    game_by_pk?: FieldsTypeArg<{ id: number }, t_game | null>;

    /**
     * fetch data from the table: "game_choice"
     */
    game_choice: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice[]
    >;

    /**
     * fetch aggregated fields from the table: "game_choice"
     */
    game_choice_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice_aggregate
    >;

    /**
     * fetch data from the table: "game_choice" using primary key columns
     */
    game_choice_by_pk?: FieldsTypeArg<{ id: number }, t_game_choice | null>;

    /**
     * fetch data from the table: "game_cuisine"
     */
    game_cuisine: FieldsTypeArg<
      {
        distinct_on?: game_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_cuisine_order_by[] | null;
        where?: game_cuisine_bool_exp | null;
      },
      t_game_cuisine[]
    >;

    /**
     * fetch aggregated fields from the table: "game_cuisine"
     */
    game_cuisine_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_cuisine_order_by[] | null;
        where?: game_cuisine_bool_exp | null;
      },
      t_game_cuisine_aggregate
    >;

    /**
     * fetch data from the table: "game_cuisine" using primary key columns
     */
    game_cuisine_by_pk?: FieldsTypeArg<{ id: number }, t_game_cuisine | null>;

    /**
     * fetch data from the table: "game_player"
     */
    game_player: FieldsTypeArg<
      {
        distinct_on?: game_player_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_player_order_by[] | null;
        where?: game_player_bool_exp | null;
      },
      t_game_player[]
    >;

    /**
     * fetch aggregated fields from the table: "game_player"
     */
    game_player_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_player_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_player_order_by[] | null;
        where?: game_player_bool_exp | null;
      },
      t_game_player_aggregate
    >;

    /**
     * fetch data from the table: "game_player" using primary key columns
     */
    game_player_by_pk?: FieldsTypeArg<{ id: number }, t_game_player | null>;

    /**
     * fetch data from the table: "log"
     */
    log: FieldsTypeArg<
      {
        distinct_on?: log_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: log_order_by[] | null;
        where?: log_bool_exp | null;
      },
      t_log[]
    >;

    /**
     * fetch aggregated fields from the table: "log"
     */
    log_aggregate: FieldsTypeArg<
      {
        distinct_on?: log_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: log_order_by[] | null;
        where?: log_bool_exp | null;
      },
      t_log_aggregate
    >;

    /**
     * fetch data from the table: "log" using primary key columns
     */
    log_by_pk?: FieldsTypeArg<{ id: number }, t_log | null>;

    /**
     * fetch data from the table: "media_author"
     */
    media_author: FieldsTypeArg<
      {
        distinct_on?: media_author_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: media_author_order_by[] | null;
        where?: media_author_bool_exp | null;
      },
      t_media_author[]
    >;

    /**
     * fetch aggregated fields from the table: "media_author"
     */
    media_author_aggregate: FieldsTypeArg<
      {
        distinct_on?: media_author_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: media_author_order_by[] | null;
        where?: media_author_bool_exp | null;
      },
      t_media_author_aggregate
    >;

    /**
     * fetch data from the table: "media_author" using primary key columns
     */
    media_author_by_pk?: FieldsTypeArg<{ id: number }, t_media_author | null>;

    /**
     * fetch data from the table: "menu"
     */
    menu: FieldsTypeArg<
      {
        distinct_on?: menu_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: menu_order_by[] | null;
        where?: menu_bool_exp | null;
      },
      t_menu[]
    >;

    /**
     * fetch aggregated fields from the table: "menu"
     */
    menu_aggregate: FieldsTypeArg<
      {
        distinct_on?: menu_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: menu_order_by[] | null;
        where?: menu_bool_exp | null;
      },
      t_menu_aggregate
    >;

    /**
     * fetch data from the table: "menu" using primary key columns
     */
    menu_by_pk?: FieldsTypeArg<{ id: number }, t_menu | null>;

    /**
     * fetch data from the table: "menu_section"
     */
    menu_section: FieldsTypeArg<
      {
        distinct_on?: menu_section_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: menu_section_order_by[] | null;
        where?: menu_section_bool_exp | null;
      },
      t_menu_section[]
    >;

    /**
     * fetch aggregated fields from the table: "menu_section"
     */
    menu_section_aggregate: FieldsTypeArg<
      {
        distinct_on?: menu_section_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: menu_section_order_by[] | null;
        where?: menu_section_bool_exp | null;
      },
      t_menu_section_aggregate
    >;

    /**
     * fetch data from the table: "menu_section" using primary key columns
     */
    menu_section_by_pk?: FieldsTypeArg<{ id: number }, t_menu_section | null>;

    /**
     * fetch data from the table: "metric"
     */
    metric: FieldsTypeArg<
      {
        distinct_on?: metric_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: metric_order_by[] | null;
        where?: metric_bool_exp | null;
      },
      t_metric[]
    >;

    /**
     * fetch aggregated fields from the table: "metric"
     */
    metric_aggregate: FieldsTypeArg<
      {
        distinct_on?: metric_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: metric_order_by[] | null;
        where?: metric_bool_exp | null;
      },
      t_metric_aggregate
    >;

    /**
     * fetch data from the table: "metric" using primary key columns
     */
    metric_by_pk?: FieldsTypeArg<{ id: number }, t_metric | null>;

    /**
     * fetch data from the table: "restaurant"
     */
    restaurant: FieldsTypeArg<
      {
        distinct_on?: restaurant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_order_by[] | null;
        where?: restaurant_bool_exp | null;
      },
      t_restaurant[]
    >;

    /**
     * fetch aggregated fields from the table: "restaurant"
     */
    restaurant_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_order_by[] | null;
        where?: restaurant_bool_exp | null;
      },
      t_restaurant_aggregate
    >;

    /**
     * fetch data from the table: "restaurant" using primary key columns
     */
    restaurant_by_pk?: FieldsTypeArg<{ id: number }, t_restaurant | null>;

    /**
     * fetch data from the table: "restaurant_chain"
     */
    restaurant_chain: FieldsTypeArg<
      {
        distinct_on?: restaurant_chain_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_chain_order_by[] | null;
        where?: restaurant_chain_bool_exp | null;
      },
      t_restaurant_chain[]
    >;

    /**
     * fetch aggregated fields from the table: "restaurant_chain"
     */
    restaurant_chain_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_chain_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_chain_order_by[] | null;
        where?: restaurant_chain_bool_exp | null;
      },
      t_restaurant_chain_aggregate
    >;

    /**
     * fetch data from the table: "restaurant_chain" using primary key columns
     */
    restaurant_chain_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurant_chain | null
    >;

    /**
     * fetch data from the table: "restaurant_cuisine"
     */
    restaurant_cuisine: FieldsTypeArg<
      {
        distinct_on?: restaurant_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_cuisine_order_by[] | null;
        where?: restaurant_cuisine_bool_exp | null;
      },
      t_restaurant_cuisine[]
    >;

    /**
     * fetch aggregated fields from the table: "restaurant_cuisine"
     */
    restaurant_cuisine_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_cuisine_order_by[] | null;
        where?: restaurant_cuisine_bool_exp | null;
      },
      t_restaurant_cuisine_aggregate
    >;

    /**
     * fetch data from the table: "restaurant_cuisine" using primary key columns
     */
    restaurant_cuisine_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurant_cuisine | null
    >;

    /**
     * fetch data from the table: "restaurant_item"
     */
    restaurant_item: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item[]
    >;

    /**
     * fetch aggregated fields from the table: "restaurant_item"
     */
    restaurant_item_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item_aggregate
    >;

    /**
     * fetch data from the table: "restaurant_item" using primary key columns
     */
    restaurant_item_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurant_item | null
    >;

    /**
     * fetch data from the table: "restaurants_visited_entity"
     */
    restaurants_visited_entity: FieldsTypeArg<
      {
        distinct_on?: restaurants_visited_entity_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurants_visited_entity_order_by[] | null;
        where?: restaurants_visited_entity_bool_exp | null;
      },
      t_restaurants_visited_entity[]
    >;

    /**
     * fetch aggregated fields from the table: "restaurants_visited_entity"
     */
    restaurants_visited_entity_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurants_visited_entity_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurants_visited_entity_order_by[] | null;
        where?: restaurants_visited_entity_bool_exp | null;
      },
      t_restaurants_visited_entity_aggregate
    >;

    /**
     * fetch data from the table: "restaurants_visited_entity" using primary key columns
     */
    restaurants_visited_entity_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurants_visited_entity | null
    >;

    /**
     * fetch data from the table: "test_table"
     */
    test_table: FieldsTypeArg<
      {
        distinct_on?: test_table_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: test_table_order_by[] | null;
        where?: test_table_bool_exp | null;
      },
      t_test_table[]
    >;

    /**
     * fetch aggregated fields from the table: "test_table"
     */
    test_table_aggregate: FieldsTypeArg<
      {
        distinct_on?: test_table_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: test_table_order_by[] | null;
        where?: test_table_bool_exp | null;
      },
      t_test_table_aggregate
    >;

    /**
     * fetch data from the table: "test_table" using primary key columns
     */
    test_table_by_pk?: FieldsTypeArg<{ id: any }, t_test_table | null>;

    /**
     * fetch data from the table: "user"
     */
    user: FieldsTypeArg<
      {
        distinct_on?: user_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_order_by[] | null;
        where?: user_bool_exp | null;
      },
      t_user[]
    >;

    /**
     * fetch aggregated fields from the table: "user"
     */
    user_aggregate: FieldsTypeArg<
      {
        distinct_on?: user_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_order_by[] | null;
        where?: user_bool_exp | null;
      },
      t_user_aggregate
    >;

    /**
     * fetch data from the table: "user" using primary key columns
     */
    user_by_pk?: FieldsTypeArg<{ id: number }, t_user | null>;

    /**
     * fetch data from the table: "user_device"
     */
    user_device: FieldsTypeArg<
      {
        distinct_on?: user_device_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_device_order_by[] | null;
        where?: user_device_bool_exp | null;
      },
      t_user_device[]
    >;

    /**
     * fetch aggregated fields from the table: "user_device"
     */
    user_device_aggregate: FieldsTypeArg<
      {
        distinct_on?: user_device_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_device_order_by[] | null;
        where?: user_device_bool_exp | null;
      },
      t_user_device_aggregate
    >;

    /**
     * fetch data from the table: "user_device" using primary key columns
     */
    user_device_by_pk?: FieldsTypeArg<{ id: number }, t_user_device | null>;
  },
  Extension<'query_root'>
>;

/**
 * @name restaurant
 * @type OBJECT
 */
type t_restaurant = FieldsType<
  {
    __typename: t_String<'restaurant'>;
    chain_id: t_Int;
    city: t_String;

    /**
     * An array relationship
     */
    game_choices: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice[]
    >;

    /**
     * An aggregated array relationship
     */
    game_choices_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice_aggregate
    >;

    /**
     * An array relationship
     */
    games: FieldsTypeArg<
      {
        distinct_on?: game_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_order_by[] | null;
        where?: game_bool_exp | null;
      },
      t_game[]
    >;

    /**
     * An aggregated array relationship
     */
    games_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_order_by[] | null;
        where?: game_bool_exp | null;
      },
      t_game_aggregate
    >;
    id: t_Int;
    is_game_ready: t_Boolean;
    latitude?: t_float8 | null;
    longitude?: t_float8 | null;
    name: t_String;
    place_id?: t_String | null;
    price?: t_Int | null;

    /**
     * An object relationship
     */
    restaurant_chain: t_restaurant_chain;

    /**
     * An array relationship
     */
    restaurant_cuisines: FieldsTypeArg<
      {
        distinct_on?: restaurant_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_cuisine_order_by[] | null;
        where?: restaurant_cuisine_bool_exp | null;
      },
      t_restaurant_cuisine[]
    >;

    /**
     * An aggregated array relationship
     */
    restaurant_cuisines_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_cuisine_order_by[] | null;
        where?: restaurant_cuisine_bool_exp | null;
      },
      t_restaurant_cuisine_aggregate
    >;

    /**
     * An array relationship
     */
    restaurant_items: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item[]
    >;

    /**
     * An aggregated array relationship
     */
    restaurant_items_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item_aggregate
    >;

    /**
     * An object relationship
     */
    restaurants_visited_entity?: t_restaurants_visited_entity | null;
    state: t_String;
    street_address: t_String;
    takeout_url: t_String;
    zip_code: t_String;
  },
  Extension<'restaurant'>
>;

/**
 * @name restaurant_aggregate
 * @type OBJECT
 */
type t_restaurant_aggregate = FieldsType<
  {
    __typename: t_String<'restaurant_aggregate'>;
    aggregate?: t_restaurant_aggregate_fields | null;
    nodes: t_restaurant[];
  },
  Extension<'restaurant_aggregate'>
>;

/**
 * @name restaurant_aggregate_fields
 * @type OBJECT
 */
type t_restaurant_aggregate_fields = FieldsType<
  {
    __typename: t_String<'restaurant_aggregate_fields'>;
    avg?: t_restaurant_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: restaurant_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_restaurant_max_fields | null;
    min?: t_restaurant_min_fields | null;
    stddev?: t_restaurant_stddev_fields | null;
    stddev_pop?: t_restaurant_stddev_pop_fields | null;
    stddev_samp?: t_restaurant_stddev_samp_fields | null;
    sum?: t_restaurant_sum_fields | null;
    var_pop?: t_restaurant_var_pop_fields | null;
    var_samp?: t_restaurant_var_samp_fields | null;
    variance?: t_restaurant_variance_fields | null;
  },
  Extension<'restaurant_aggregate_fields'>
>;

/**
 * @name restaurant_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_aggregate_order_by = {
  avg?: restaurant_avg_order_by | null;
  count?: order_by | null;
  max?: restaurant_max_order_by | null;
  min?: restaurant_min_order_by | null;
  stddev?: restaurant_stddev_order_by | null;
  stddev_pop?: restaurant_stddev_pop_order_by | null;
  stddev_samp?: restaurant_stddev_samp_order_by | null;
  sum?: restaurant_sum_order_by | null;
  var_pop?: restaurant_var_pop_order_by | null;
  var_samp?: restaurant_var_samp_order_by | null;
  variance?: restaurant_variance_order_by | null;
};

/**
 * @name restaurant_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_arr_rel_insert_input = {
  data: restaurant_insert_input[];
  on_conflict?: restaurant_on_conflict | null;
};

/**
 * @name restaurant_avg_fields
 * @type OBJECT
 */
type t_restaurant_avg_fields = FieldsType<
  {
    __typename: t_String<'restaurant_avg_fields'>;
    chain_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    price?: t_Float | null;
  },
  Extension<'restaurant_avg_fields'>
>;

/**
 * @name restaurant_avg_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_avg_order_by = {
  chain_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  price?: order_by | null;
};

/**
 * @name restaurant_bool_exp
 * @type INPUT_OBJECT
 */
export type restaurant_bool_exp = {
  _and?: (restaurant_bool_exp | null)[] | null;
  _not?: restaurant_bool_exp | null;
  _or?: (restaurant_bool_exp | null)[] | null;
  chain_id?: Int_comparison_exp | null;
  city?: String_comparison_exp | null;
  game_choices?: game_choice_bool_exp | null;
  games?: game_bool_exp | null;
  id?: Int_comparison_exp | null;
  is_game_ready?: Boolean_comparison_exp | null;
  latitude?: float8_comparison_exp | null;
  longitude?: float8_comparison_exp | null;
  name?: String_comparison_exp | null;
  place_id?: String_comparison_exp | null;
  price?: Int_comparison_exp | null;
  restaurant_chain?: restaurant_chain_bool_exp | null;
  restaurant_cuisines?: restaurant_cuisine_bool_exp | null;
  restaurant_items?: restaurant_item_bool_exp | null;
  restaurants_visited_entity?: restaurants_visited_entity_bool_exp | null;
  state?: String_comparison_exp | null;
  street_address?: String_comparison_exp | null;
  takeout_url?: String_comparison_exp | null;
  zip_code?: String_comparison_exp | null;
};

/**
 * @name restaurant_chain
 * @type OBJECT
 */
type t_restaurant_chain = FieldsType<
  {
    __typename: t_String<'restaurant_chain'>;
    id: t_Int;
    name: t_String;

    /**
     * An array relationship
     */
    restaurants: FieldsTypeArg<
      {
        distinct_on?: restaurant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_order_by[] | null;
        where?: restaurant_bool_exp | null;
      },
      t_restaurant[]
    >;

    /**
     * An aggregated array relationship
     */
    restaurants_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_order_by[] | null;
        where?: restaurant_bool_exp | null;
      },
      t_restaurant_aggregate
    >;
  },
  Extension<'restaurant_chain'>
>;

/**
 * @name restaurant_chain_aggregate
 * @type OBJECT
 */
type t_restaurant_chain_aggregate = FieldsType<
  {
    __typename: t_String<'restaurant_chain_aggregate'>;
    aggregate?: t_restaurant_chain_aggregate_fields | null;
    nodes: t_restaurant_chain[];
  },
  Extension<'restaurant_chain_aggregate'>
>;

/**
 * @name restaurant_chain_aggregate_fields
 * @type OBJECT
 */
type t_restaurant_chain_aggregate_fields = FieldsType<
  {
    __typename: t_String<'restaurant_chain_aggregate_fields'>;
    avg?: t_restaurant_chain_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: restaurant_chain_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_restaurant_chain_max_fields | null;
    min?: t_restaurant_chain_min_fields | null;
    stddev?: t_restaurant_chain_stddev_fields | null;
    stddev_pop?: t_restaurant_chain_stddev_pop_fields | null;
    stddev_samp?: t_restaurant_chain_stddev_samp_fields | null;
    sum?: t_restaurant_chain_sum_fields | null;
    var_pop?: t_restaurant_chain_var_pop_fields | null;
    var_samp?: t_restaurant_chain_var_samp_fields | null;
    variance?: t_restaurant_chain_variance_fields | null;
  },
  Extension<'restaurant_chain_aggregate_fields'>
>;

/**
 * @name restaurant_chain_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_aggregate_order_by = {
  avg?: restaurant_chain_avg_order_by | null;
  count?: order_by | null;
  max?: restaurant_chain_max_order_by | null;
  min?: restaurant_chain_min_order_by | null;
  stddev?: restaurant_chain_stddev_order_by | null;
  stddev_pop?: restaurant_chain_stddev_pop_order_by | null;
  stddev_samp?: restaurant_chain_stddev_samp_order_by | null;
  sum?: restaurant_chain_sum_order_by | null;
  var_pop?: restaurant_chain_var_pop_order_by | null;
  var_samp?: restaurant_chain_var_samp_order_by | null;
  variance?: restaurant_chain_variance_order_by | null;
};

/**
 * @name restaurant_chain_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_chain_arr_rel_insert_input = {
  data: restaurant_chain_insert_input[];
  on_conflict?: restaurant_chain_on_conflict | null;
};

/**
 * @name restaurant_chain_avg_fields
 * @type OBJECT
 */
type t_restaurant_chain_avg_fields = FieldsType<
  {
    __typename: t_String<'restaurant_chain_avg_fields'>;
    id?: t_Float | null;
  },
  Extension<'restaurant_chain_avg_fields'>
>;

/**
 * @name restaurant_chain_avg_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_avg_order_by = { id?: order_by | null };

/**
 * @name restaurant_chain_bool_exp
 * @type INPUT_OBJECT
 */
export type restaurant_chain_bool_exp = {
  _and?: (restaurant_chain_bool_exp | null)[] | null;
  _not?: restaurant_chain_bool_exp | null;
  _or?: (restaurant_chain_bool_exp | null)[] | null;
  id?: Int_comparison_exp | null;
  name?: String_comparison_exp | null;
  restaurants?: restaurant_bool_exp | null;
};


/**
 * @name restaurant_chain_inc_input
 * @type INPUT_OBJECT
 */
export type restaurant_chain_inc_input = { id?: number | null };

/**
 * @name restaurant_chain_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_chain_insert_input = {
  id?: number | null;
  name?: string | null;
  restaurants?: restaurant_arr_rel_insert_input | null;
};

/**
 * @name restaurant_chain_max_fields
 * @type OBJECT
 */
type t_restaurant_chain_max_fields = FieldsType<
  {
    __typename: t_String<'restaurant_chain_max_fields'>;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<'restaurant_chain_max_fields'>
>;

/**
 * @name restaurant_chain_max_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_max_order_by = {
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name restaurant_chain_min_fields
 * @type OBJECT
 */
type t_restaurant_chain_min_fields = FieldsType<
  {
    __typename: t_String<'restaurant_chain_min_fields'>;
    id?: t_Int | null;
    name?: t_String | null;
  },
  Extension<'restaurant_chain_min_fields'>
>;

/**
 * @name restaurant_chain_min_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_min_order_by = {
  id?: order_by | null;
  name?: order_by | null;
};

/**
 * @name restaurant_chain_mutation_response
 * @type OBJECT
 */
type t_restaurant_chain_mutation_response = FieldsType<
  {
    __typename: t_String<'restaurant_chain_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_restaurant_chain[];
  },
  Extension<'restaurant_chain_mutation_response'>
>;

/**
 * @name restaurant_chain_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_chain_obj_rel_insert_input = {
  data: restaurant_chain_insert_input;
  on_conflict?: restaurant_chain_on_conflict | null;
};

/**
 * @name restaurant_chain_on_conflict
 * @type INPUT_OBJECT
 */
export type restaurant_chain_on_conflict = {
  constraint: restaurant_chain_constraint;
  update_columns: restaurant_chain_update_column[];
  where?: restaurant_chain_bool_exp | null;
};

/**
 * @name restaurant_chain_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_order_by = {
  id?: order_by | null;
  name?: order_by | null;
  restaurants_aggregate?: restaurant_aggregate_order_by | null;
};

/**
 * @name restaurant_chain_pk_columns_input
 * @type INPUT_OBJECT
 */
export type restaurant_chain_pk_columns_input = { id: number };


/**
 * @name restaurant_chain_set_input
 * @type INPUT_OBJECT
 */
export type restaurant_chain_set_input = {
  id?: number | null;
  name?: string | null;
};

/**
 * @name restaurant_chain_stddev_fields
 * @type OBJECT
 */
type t_restaurant_chain_stddev_fields = FieldsType<
  {
    __typename: t_String<'restaurant_chain_stddev_fields'>;
    id?: t_Float | null;
  },
  Extension<'restaurant_chain_stddev_fields'>
>;

/**
 * @name restaurant_chain_stddev_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_stddev_order_by = { id?: order_by | null };

/**
 * @name restaurant_chain_stddev_pop_fields
 * @type OBJECT
 */
type t_restaurant_chain_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'restaurant_chain_stddev_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'restaurant_chain_stddev_pop_fields'>
>;

/**
 * @name restaurant_chain_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_stddev_pop_order_by = { id?: order_by | null };

/**
 * @name restaurant_chain_stddev_samp_fields
 * @type OBJECT
 */
type t_restaurant_chain_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'restaurant_chain_stddev_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'restaurant_chain_stddev_samp_fields'>
>;

/**
 * @name restaurant_chain_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_stddev_samp_order_by = { id?: order_by | null };

/**
 * @name restaurant_chain_sum_fields
 * @type OBJECT
 */
type t_restaurant_chain_sum_fields = FieldsType<
  {
    __typename: t_String<'restaurant_chain_sum_fields'>;
    id?: t_Int | null;
  },
  Extension<'restaurant_chain_sum_fields'>
>;

/**
 * @name restaurant_chain_sum_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_sum_order_by = { id?: order_by | null };


/**
 * @name restaurant_chain_var_pop_fields
 * @type OBJECT
 */
type t_restaurant_chain_var_pop_fields = FieldsType<
  {
    __typename: t_String<'restaurant_chain_var_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'restaurant_chain_var_pop_fields'>
>;

/**
 * @name restaurant_chain_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_var_pop_order_by = { id?: order_by | null };

/**
 * @name restaurant_chain_var_samp_fields
 * @type OBJECT
 */
type t_restaurant_chain_var_samp_fields = FieldsType<
  {
    __typename: t_String<'restaurant_chain_var_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'restaurant_chain_var_samp_fields'>
>;

/**
 * @name restaurant_chain_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_var_samp_order_by = { id?: order_by | null };

/**
 * @name restaurant_chain_variance_fields
 * @type OBJECT
 */
type t_restaurant_chain_variance_fields = FieldsType<
  {
    __typename: t_String<'restaurant_chain_variance_fields'>;
    id?: t_Float | null;
  },
  Extension<'restaurant_chain_variance_fields'>
>;

/**
 * @name restaurant_chain_variance_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_chain_variance_order_by = { id?: order_by | null };


/**
 * @name restaurant_cuisine
 * @type OBJECT
 */
type t_restaurant_cuisine = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine'>;

    /**
     * An object relationship
     */
    cuisine: t_cuisine;
    cuisine_id: t_Int;
    id: t_Int;

    /**
     * An object relationship
     */
    restaurant: t_restaurant;
    restaurant_id: t_Int;
  },
  Extension<'restaurant_cuisine'>
>;

/**
 * @name restaurant_cuisine_aggregate
 * @type OBJECT
 */
type t_restaurant_cuisine_aggregate = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_aggregate'>;
    aggregate?: t_restaurant_cuisine_aggregate_fields | null;
    nodes: t_restaurant_cuisine[];
  },
  Extension<'restaurant_cuisine_aggregate'>
>;

/**
 * @name restaurant_cuisine_aggregate_fields
 * @type OBJECT
 */
type t_restaurant_cuisine_aggregate_fields = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_aggregate_fields'>;
    avg?: t_restaurant_cuisine_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: restaurant_cuisine_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_restaurant_cuisine_max_fields | null;
    min?: t_restaurant_cuisine_min_fields | null;
    stddev?: t_restaurant_cuisine_stddev_fields | null;
    stddev_pop?: t_restaurant_cuisine_stddev_pop_fields | null;
    stddev_samp?: t_restaurant_cuisine_stddev_samp_fields | null;
    sum?: t_restaurant_cuisine_sum_fields | null;
    var_pop?: t_restaurant_cuisine_var_pop_fields | null;
    var_samp?: t_restaurant_cuisine_var_samp_fields | null;
    variance?: t_restaurant_cuisine_variance_fields | null;
  },
  Extension<'restaurant_cuisine_aggregate_fields'>
>;

/**
 * @name restaurant_cuisine_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_aggregate_order_by = {
  avg?: restaurant_cuisine_avg_order_by | null;
  count?: order_by | null;
  max?: restaurant_cuisine_max_order_by | null;
  min?: restaurant_cuisine_min_order_by | null;
  stddev?: restaurant_cuisine_stddev_order_by | null;
  stddev_pop?: restaurant_cuisine_stddev_pop_order_by | null;
  stddev_samp?: restaurant_cuisine_stddev_samp_order_by | null;
  sum?: restaurant_cuisine_sum_order_by | null;
  var_pop?: restaurant_cuisine_var_pop_order_by | null;
  var_samp?: restaurant_cuisine_var_samp_order_by | null;
  variance?: restaurant_cuisine_variance_order_by | null;
};

/**
 * @name restaurant_cuisine_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_arr_rel_insert_input = {
  data: restaurant_cuisine_insert_input[];
  on_conflict?: restaurant_cuisine_on_conflict | null;
};

/**
 * @name restaurant_cuisine_avg_fields
 * @type OBJECT
 */
type t_restaurant_cuisine_avg_fields = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_avg_fields'>;
    cuisine_id?: t_Float | null;
    id?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_cuisine_avg_fields'>
>;

/**
 * @name restaurant_cuisine_avg_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_avg_order_by = {
  cuisine_id?: order_by | null;
  id?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_cuisine_bool_exp
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_bool_exp = {
  _and?: (restaurant_cuisine_bool_exp | null)[] | null;
  _not?: restaurant_cuisine_bool_exp | null;
  _or?: (restaurant_cuisine_bool_exp | null)[] | null;
  cuisine?: cuisine_bool_exp | null;
  cuisine_id?: Int_comparison_exp | null;
  id?: Int_comparison_exp | null;
  restaurant?: restaurant_bool_exp | null;
  restaurant_id?: Int_comparison_exp | null;
};


/**
 * @name restaurant_cuisine_inc_input
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_inc_input = {
  cuisine_id?: number | null;
  id?: number | null;
  restaurant_id?: number | null;
};

/**
 * @name restaurant_cuisine_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_insert_input = {
  cuisine?: cuisine_obj_rel_insert_input | null;
  cuisine_id?: number | null;
  id?: number | null;
  restaurant?: restaurant_obj_rel_insert_input | null;
  restaurant_id?: number | null;
};

/**
 * @name restaurant_cuisine_max_fields
 * @type OBJECT
 */
type t_restaurant_cuisine_max_fields = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_max_fields'>;
    cuisine_id?: t_Int | null;
    id?: t_Int | null;
    restaurant_id?: t_Int | null;
  },
  Extension<'restaurant_cuisine_max_fields'>
>;

/**
 * @name restaurant_cuisine_max_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_max_order_by = {
  cuisine_id?: order_by | null;
  id?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_cuisine_min_fields
 * @type OBJECT
 */
type t_restaurant_cuisine_min_fields = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_min_fields'>;
    cuisine_id?: t_Int | null;
    id?: t_Int | null;
    restaurant_id?: t_Int | null;
  },
  Extension<'restaurant_cuisine_min_fields'>
>;

/**
 * @name restaurant_cuisine_min_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_min_order_by = {
  cuisine_id?: order_by | null;
  id?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_cuisine_mutation_response
 * @type OBJECT
 */
type t_restaurant_cuisine_mutation_response = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_restaurant_cuisine[];
  },
  Extension<'restaurant_cuisine_mutation_response'>
>;

/**
 * @name restaurant_cuisine_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_obj_rel_insert_input = {
  data: restaurant_cuisine_insert_input;
  on_conflict?: restaurant_cuisine_on_conflict | null;
};

/**
 * @name restaurant_cuisine_on_conflict
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_on_conflict = {
  constraint: restaurant_cuisine_constraint;
  update_columns: restaurant_cuisine_update_column[];
  where?: restaurant_cuisine_bool_exp | null;
};

/**
 * @name restaurant_cuisine_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_order_by = {
  cuisine?: cuisine_order_by | null;
  cuisine_id?: order_by | null;
  id?: order_by | null;
  restaurant?: restaurant_order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_cuisine_pk_columns_input
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_pk_columns_input = { id: number };


/**
 * @name restaurant_cuisine_set_input
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_set_input = {
  cuisine_id?: number | null;
  id?: number | null;
  restaurant_id?: number | null;
};

/**
 * @name restaurant_cuisine_stddev_fields
 * @type OBJECT
 */
type t_restaurant_cuisine_stddev_fields = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_stddev_fields'>;
    cuisine_id?: t_Float | null;
    id?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_cuisine_stddev_fields'>
>;

/**
 * @name restaurant_cuisine_stddev_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_stddev_order_by = {
  cuisine_id?: order_by | null;
  id?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_cuisine_stddev_pop_fields
 * @type OBJECT
 */
type t_restaurant_cuisine_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_stddev_pop_fields'>;
    cuisine_id?: t_Float | null;
    id?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_cuisine_stddev_pop_fields'>
>;

/**
 * @name restaurant_cuisine_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_stddev_pop_order_by = {
  cuisine_id?: order_by | null;
  id?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_cuisine_stddev_samp_fields
 * @type OBJECT
 */
type t_restaurant_cuisine_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_stddev_samp_fields'>;
    cuisine_id?: t_Float | null;
    id?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_cuisine_stddev_samp_fields'>
>;

/**
 * @name restaurant_cuisine_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_stddev_samp_order_by = {
  cuisine_id?: order_by | null;
  id?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_cuisine_sum_fields
 * @type OBJECT
 */
type t_restaurant_cuisine_sum_fields = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_sum_fields'>;
    cuisine_id?: t_Int | null;
    id?: t_Int | null;
    restaurant_id?: t_Int | null;
  },
  Extension<'restaurant_cuisine_sum_fields'>
>;

/**
 * @name restaurant_cuisine_sum_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_sum_order_by = {
  cuisine_id?: order_by | null;
  id?: order_by | null;
  restaurant_id?: order_by | null;
};


/**
 * @name restaurant_cuisine_var_pop_fields
 * @type OBJECT
 */
type t_restaurant_cuisine_var_pop_fields = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_var_pop_fields'>;
    cuisine_id?: t_Float | null;
    id?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_cuisine_var_pop_fields'>
>;

/**
 * @name restaurant_cuisine_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_var_pop_order_by = {
  cuisine_id?: order_by | null;
  id?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_cuisine_var_samp_fields
 * @type OBJECT
 */
type t_restaurant_cuisine_var_samp_fields = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_var_samp_fields'>;
    cuisine_id?: t_Float | null;
    id?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_cuisine_var_samp_fields'>
>;

/**
 * @name restaurant_cuisine_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_var_samp_order_by = {
  cuisine_id?: order_by | null;
  id?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_cuisine_variance_fields
 * @type OBJECT
 */
type t_restaurant_cuisine_variance_fields = FieldsType<
  {
    __typename: t_String<'restaurant_cuisine_variance_fields'>;
    cuisine_id?: t_Float | null;
    id?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_cuisine_variance_fields'>
>;

/**
 * @name restaurant_cuisine_variance_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_cuisine_variance_order_by = {
  cuisine_id?: order_by | null;
  id?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_inc_input
 * @type INPUT_OBJECT
 */
export type restaurant_inc_input = {
  chain_id?: number | null;
  id?: number | null;
  latitude?: any | null;
  longitude?: any | null;
  price?: number | null;
};

/**
 * @name restaurant_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_insert_input = {
  chain_id?: number | null;
  city?: string | null;
  game_choices?: game_choice_arr_rel_insert_input | null;
  games?: game_arr_rel_insert_input | null;
  id?: number | null;
  is_game_ready?: boolean | null;
  latitude?: any | null;
  longitude?: any | null;
  name?: string | null;
  place_id?: string | null;
  price?: number | null;
  restaurant_chain?: restaurant_chain_obj_rel_insert_input | null;
  restaurant_cuisines?: restaurant_cuisine_arr_rel_insert_input | null;
  restaurant_items?: restaurant_item_arr_rel_insert_input | null;
  restaurants_visited_entity?: restaurants_visited_entity_obj_rel_insert_input | null;
  state?: string | null;
  street_address?: string | null;
  takeout_url?: string | null;
  zip_code?: string | null;
};

/**
 * @name restaurant_item
 * @type OBJECT
 */
type t_restaurant_item = FieldsType<
  {
    __typename: t_String<'restaurant_item'>;

    /**
     * An object relationship
     */
    food_item: t_food_item;
    food_item_id: t_Int;

    /**
     * An array relationship
     */
    game_choices: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice[]
    >;

    /**
     * An aggregated array relationship
     */
    game_choices_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice_aggregate
    >;
    id: t_Int;
    is_game_ready: t_Boolean;

    /**
     * An object relationship
     */
    menu: t_menu;
    menu_id: t_Int;

    /**
     * An object relationship
     */
    menu_section: t_menu_section;
    menu_section_id: t_Int;
    price?: t_float8 | null;

    /**
     * An object relationship
     */
    restaurant: t_restaurant;
    restaurant_id: t_Int;
    times_served: t__varchar;
  },
  Extension<'restaurant_item'>
>;

/**
 * @name restaurant_item_aggregate
 * @type OBJECT
 */
type t_restaurant_item_aggregate = FieldsType<
  {
    __typename: t_String<'restaurant_item_aggregate'>;
    aggregate?: t_restaurant_item_aggregate_fields | null;
    nodes: t_restaurant_item[];
  },
  Extension<'restaurant_item_aggregate'>
>;

/**
 * @name restaurant_item_aggregate_fields
 * @type OBJECT
 */
type t_restaurant_item_aggregate_fields = FieldsType<
  {
    __typename: t_String<'restaurant_item_aggregate_fields'>;
    avg?: t_restaurant_item_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: restaurant_item_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_restaurant_item_max_fields | null;
    min?: t_restaurant_item_min_fields | null;
    stddev?: t_restaurant_item_stddev_fields | null;
    stddev_pop?: t_restaurant_item_stddev_pop_fields | null;
    stddev_samp?: t_restaurant_item_stddev_samp_fields | null;
    sum?: t_restaurant_item_sum_fields | null;
    var_pop?: t_restaurant_item_var_pop_fields | null;
    var_samp?: t_restaurant_item_var_samp_fields | null;
    variance?: t_restaurant_item_variance_fields | null;
  },
  Extension<'restaurant_item_aggregate_fields'>
>;

/**
 * @name restaurant_item_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_aggregate_order_by = {
  avg?: restaurant_item_avg_order_by | null;
  count?: order_by | null;
  max?: restaurant_item_max_order_by | null;
  min?: restaurant_item_min_order_by | null;
  stddev?: restaurant_item_stddev_order_by | null;
  stddev_pop?: restaurant_item_stddev_pop_order_by | null;
  stddev_samp?: restaurant_item_stddev_samp_order_by | null;
  sum?: restaurant_item_sum_order_by | null;
  var_pop?: restaurant_item_var_pop_order_by | null;
  var_samp?: restaurant_item_var_samp_order_by | null;
  variance?: restaurant_item_variance_order_by | null;
};

/**
 * @name restaurant_item_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_item_arr_rel_insert_input = {
  data: restaurant_item_insert_input[];
  on_conflict?: restaurant_item_on_conflict | null;
};

/**
 * @name restaurant_item_avg_fields
 * @type OBJECT
 */
type t_restaurant_item_avg_fields = FieldsType<
  {
    __typename: t_String<'restaurant_item_avg_fields'>;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
    menu_id?: t_Float | null;
    menu_section_id?: t_Float | null;
    price?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_item_avg_fields'>
>;

/**
 * @name restaurant_item_avg_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_avg_order_by = {
  food_item_id?: order_by | null;
  id?: order_by | null;
  menu_id?: order_by | null;
  menu_section_id?: order_by | null;
  price?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_item_bool_exp
 * @type INPUT_OBJECT
 */
export type restaurant_item_bool_exp = {
  _and?: (restaurant_item_bool_exp | null)[] | null;
  _not?: restaurant_item_bool_exp | null;
  _or?: (restaurant_item_bool_exp | null)[] | null;
  food_item?: food_item_bool_exp | null;
  food_item_id?: Int_comparison_exp | null;
  game_choices?: game_choice_bool_exp | null;
  id?: Int_comparison_exp | null;
  is_game_ready?: Boolean_comparison_exp | null;
  menu?: menu_bool_exp | null;
  menu_id?: Int_comparison_exp | null;
  menu_section?: menu_section_bool_exp | null;
  menu_section_id?: Int_comparison_exp | null;
  price?: float8_comparison_exp | null;
  restaurant?: restaurant_bool_exp | null;
  restaurant_id?: Int_comparison_exp | null;
  times_served?: _varchar_comparison_exp | null;
};


/**
 * @name restaurant_item_inc_input
 * @type INPUT_OBJECT
 */
export type restaurant_item_inc_input = {
  food_item_id?: number | null;
  id?: number | null;
  menu_id?: number | null;
  menu_section_id?: number | null;
  price?: any | null;
  restaurant_id?: number | null;
};

/**
 * @name restaurant_item_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_item_insert_input = {
  food_item?: food_item_obj_rel_insert_input | null;
  food_item_id?: number | null;
  game_choices?: game_choice_arr_rel_insert_input | null;
  id?: number | null;
  is_game_ready?: boolean | null;
  menu?: menu_obj_rel_insert_input | null;
  menu_id?: number | null;
  menu_section?: menu_section_obj_rel_insert_input | null;
  menu_section_id?: number | null;
  price?: any | null;
  restaurant?: restaurant_obj_rel_insert_input | null;
  restaurant_id?: number | null;
  times_served?: any | null;
};

/**
 * @name restaurant_item_max_fields
 * @type OBJECT
 */
type t_restaurant_item_max_fields = FieldsType<
  {
    __typename: t_String<'restaurant_item_max_fields'>;
    food_item_id?: t_Int | null;
    id?: t_Int | null;
    menu_id?: t_Int | null;
    menu_section_id?: t_Int | null;
    price?: t_float8 | null;
    restaurant_id?: t_Int | null;
  },
  Extension<'restaurant_item_max_fields'>
>;

/**
 * @name restaurant_item_max_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_max_order_by = {
  food_item_id?: order_by | null;
  id?: order_by | null;
  menu_id?: order_by | null;
  menu_section_id?: order_by | null;
  price?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_item_min_fields
 * @type OBJECT
 */
type t_restaurant_item_min_fields = FieldsType<
  {
    __typename: t_String<'restaurant_item_min_fields'>;
    food_item_id?: t_Int | null;
    id?: t_Int | null;
    menu_id?: t_Int | null;
    menu_section_id?: t_Int | null;
    price?: t_float8 | null;
    restaurant_id?: t_Int | null;
  },
  Extension<'restaurant_item_min_fields'>
>;

/**
 * @name restaurant_item_min_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_min_order_by = {
  food_item_id?: order_by | null;
  id?: order_by | null;
  menu_id?: order_by | null;
  menu_section_id?: order_by | null;
  price?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_item_mutation_response
 * @type OBJECT
 */
type t_restaurant_item_mutation_response = FieldsType<
  {
    __typename: t_String<'restaurant_item_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_restaurant_item[];
  },
  Extension<'restaurant_item_mutation_response'>
>;

/**
 * @name restaurant_item_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_item_obj_rel_insert_input = {
  data: restaurant_item_insert_input;
  on_conflict?: restaurant_item_on_conflict | null;
};

/**
 * @name restaurant_item_on_conflict
 * @type INPUT_OBJECT
 */
export type restaurant_item_on_conflict = {
  constraint: restaurant_item_constraint;
  update_columns: restaurant_item_update_column[];
  where?: restaurant_item_bool_exp | null;
};

/**
 * @name restaurant_item_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_order_by = {
  food_item?: food_item_order_by | null;
  food_item_id?: order_by | null;
  game_choices_aggregate?: game_choice_aggregate_order_by | null;
  id?: order_by | null;
  is_game_ready?: order_by | null;
  menu?: menu_order_by | null;
  menu_id?: order_by | null;
  menu_section?: menu_section_order_by | null;
  menu_section_id?: order_by | null;
  price?: order_by | null;
  restaurant?: restaurant_order_by | null;
  restaurant_id?: order_by | null;
  times_served?: order_by | null;
};

/**
 * @name restaurant_item_pk_columns_input
 * @type INPUT_OBJECT
 */
export type restaurant_item_pk_columns_input = { id: number };


/**
 * @name restaurant_item_set_input
 * @type INPUT_OBJECT
 */
export type restaurant_item_set_input = {
  food_item_id?: number | null;
  id?: number | null;
  is_game_ready?: boolean | null;
  menu_id?: number | null;
  menu_section_id?: number | null;
  price?: any | null;
  restaurant_id?: number | null;
  times_served?: any | null;
};

/**
 * @name restaurant_item_stddev_fields
 * @type OBJECT
 */
type t_restaurant_item_stddev_fields = FieldsType<
  {
    __typename: t_String<'restaurant_item_stddev_fields'>;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
    menu_id?: t_Float | null;
    menu_section_id?: t_Float | null;
    price?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_item_stddev_fields'>
>;

/**
 * @name restaurant_item_stddev_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_stddev_order_by = {
  food_item_id?: order_by | null;
  id?: order_by | null;
  menu_id?: order_by | null;
  menu_section_id?: order_by | null;
  price?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_item_stddev_pop_fields
 * @type OBJECT
 */
type t_restaurant_item_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'restaurant_item_stddev_pop_fields'>;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
    menu_id?: t_Float | null;
    menu_section_id?: t_Float | null;
    price?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_item_stddev_pop_fields'>
>;

/**
 * @name restaurant_item_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_stddev_pop_order_by = {
  food_item_id?: order_by | null;
  id?: order_by | null;
  menu_id?: order_by | null;
  menu_section_id?: order_by | null;
  price?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_item_stddev_samp_fields
 * @type OBJECT
 */
type t_restaurant_item_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'restaurant_item_stddev_samp_fields'>;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
    menu_id?: t_Float | null;
    menu_section_id?: t_Float | null;
    price?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_item_stddev_samp_fields'>
>;

/**
 * @name restaurant_item_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_stddev_samp_order_by = {
  food_item_id?: order_by | null;
  id?: order_by | null;
  menu_id?: order_by | null;
  menu_section_id?: order_by | null;
  price?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_item_sum_fields
 * @type OBJECT
 */
type t_restaurant_item_sum_fields = FieldsType<
  {
    __typename: t_String<'restaurant_item_sum_fields'>;
    food_item_id?: t_Int | null;
    id?: t_Int | null;
    menu_id?: t_Int | null;
    menu_section_id?: t_Int | null;
    price?: t_float8 | null;
    restaurant_id?: t_Int | null;
  },
  Extension<'restaurant_item_sum_fields'>
>;

/**
 * @name restaurant_item_sum_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_sum_order_by = {
  food_item_id?: order_by | null;
  id?: order_by | null;
  menu_id?: order_by | null;
  menu_section_id?: order_by | null;
  price?: order_by | null;
  restaurant_id?: order_by | null;
};


/**
 * @name restaurant_item_var_pop_fields
 * @type OBJECT
 */
type t_restaurant_item_var_pop_fields = FieldsType<
  {
    __typename: t_String<'restaurant_item_var_pop_fields'>;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
    menu_id?: t_Float | null;
    menu_section_id?: t_Float | null;
    price?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_item_var_pop_fields'>
>;

/**
 * @name restaurant_item_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_var_pop_order_by = {
  food_item_id?: order_by | null;
  id?: order_by | null;
  menu_id?: order_by | null;
  menu_section_id?: order_by | null;
  price?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_item_var_samp_fields
 * @type OBJECT
 */
type t_restaurant_item_var_samp_fields = FieldsType<
  {
    __typename: t_String<'restaurant_item_var_samp_fields'>;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
    menu_id?: t_Float | null;
    menu_section_id?: t_Float | null;
    price?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_item_var_samp_fields'>
>;

/**
 * @name restaurant_item_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_var_samp_order_by = {
  food_item_id?: order_by | null;
  id?: order_by | null;
  menu_id?: order_by | null;
  menu_section_id?: order_by | null;
  price?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_item_variance_fields
 * @type OBJECT
 */
type t_restaurant_item_variance_fields = FieldsType<
  {
    __typename: t_String<'restaurant_item_variance_fields'>;
    food_item_id?: t_Float | null;
    id?: t_Float | null;
    menu_id?: t_Float | null;
    menu_section_id?: t_Float | null;
    price?: t_Float | null;
    restaurant_id?: t_Float | null;
  },
  Extension<'restaurant_item_variance_fields'>
>;

/**
 * @name restaurant_item_variance_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_item_variance_order_by = {
  food_item_id?: order_by | null;
  id?: order_by | null;
  menu_id?: order_by | null;
  menu_section_id?: order_by | null;
  price?: order_by | null;
  restaurant_id?: order_by | null;
};

/**
 * @name restaurant_max_fields
 * @type OBJECT
 */
type t_restaurant_max_fields = FieldsType<
  {
    __typename: t_String<'restaurant_max_fields'>;
    chain_id?: t_Int | null;
    city?: t_String | null;
    id?: t_Int | null;
    latitude?: t_float8 | null;
    longitude?: t_float8 | null;
    name?: t_String | null;
    place_id?: t_String | null;
    price?: t_Int | null;
    state?: t_String | null;
    street_address?: t_String | null;
    takeout_url?: t_String | null;
    zip_code?: t_String | null;
  },
  Extension<'restaurant_max_fields'>
>;

/**
 * @name restaurant_max_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_max_order_by = {
  chain_id?: order_by | null;
  city?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  name?: order_by | null;
  place_id?: order_by | null;
  price?: order_by | null;
  state?: order_by | null;
  street_address?: order_by | null;
  takeout_url?: order_by | null;
  zip_code?: order_by | null;
};

/**
 * @name restaurant_min_fields
 * @type OBJECT
 */
type t_restaurant_min_fields = FieldsType<
  {
    __typename: t_String<'restaurant_min_fields'>;
    chain_id?: t_Int | null;
    city?: t_String | null;
    id?: t_Int | null;
    latitude?: t_float8 | null;
    longitude?: t_float8 | null;
    name?: t_String | null;
    place_id?: t_String | null;
    price?: t_Int | null;
    state?: t_String | null;
    street_address?: t_String | null;
    takeout_url?: t_String | null;
    zip_code?: t_String | null;
  },
  Extension<'restaurant_min_fields'>
>;

/**
 * @name restaurant_min_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_min_order_by = {
  chain_id?: order_by | null;
  city?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  name?: order_by | null;
  place_id?: order_by | null;
  price?: order_by | null;
  state?: order_by | null;
  street_address?: order_by | null;
  takeout_url?: order_by | null;
  zip_code?: order_by | null;
};

/**
 * @name restaurant_mutation_response
 * @type OBJECT
 */
type t_restaurant_mutation_response = FieldsType<
  {
    __typename: t_String<'restaurant_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_restaurant[];
  },
  Extension<'restaurant_mutation_response'>
>;

/**
 * @name restaurant_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type restaurant_obj_rel_insert_input = {
  data: restaurant_insert_input;
  on_conflict?: restaurant_on_conflict | null;
};

/**
 * @name restaurant_on_conflict
 * @type INPUT_OBJECT
 */
export type restaurant_on_conflict = {
  constraint: restaurant_constraint;
  update_columns: restaurant_update_column[];
  where?: restaurant_bool_exp | null;
};

/**
 * @name restaurant_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_order_by = {
  chain_id?: order_by | null;
  city?: order_by | null;
  game_choices_aggregate?: game_choice_aggregate_order_by | null;
  games_aggregate?: game_aggregate_order_by | null;
  id?: order_by | null;
  is_game_ready?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  name?: order_by | null;
  place_id?: order_by | null;
  price?: order_by | null;
  restaurant_chain?: restaurant_chain_order_by | null;
  restaurant_cuisines_aggregate?: restaurant_cuisine_aggregate_order_by | null;
  restaurant_items_aggregate?: restaurant_item_aggregate_order_by | null;
  restaurants_visited_entity?: restaurants_visited_entity_order_by | null;
  state?: order_by | null;
  street_address?: order_by | null;
  takeout_url?: order_by | null;
  zip_code?: order_by | null;
};

/**
 * @name restaurant_pk_columns_input
 * @type INPUT_OBJECT
 */
export type restaurant_pk_columns_input = { id: number };


/**
 * @name restaurant_set_input
 * @type INPUT_OBJECT
 */
export type restaurant_set_input = {
  chain_id?: number | null;
  city?: string | null;
  id?: number | null;
  is_game_ready?: boolean | null;
  latitude?: any | null;
  longitude?: any | null;
  name?: string | null;
  place_id?: string | null;
  price?: number | null;
  state?: string | null;
  street_address?: string | null;
  takeout_url?: string | null;
  zip_code?: string | null;
};

/**
 * @name restaurant_stddev_fields
 * @type OBJECT
 */
type t_restaurant_stddev_fields = FieldsType<
  {
    __typename: t_String<'restaurant_stddev_fields'>;
    chain_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    price?: t_Float | null;
  },
  Extension<'restaurant_stddev_fields'>
>;

/**
 * @name restaurant_stddev_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_stddev_order_by = {
  chain_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  price?: order_by | null;
};

/**
 * @name restaurant_stddev_pop_fields
 * @type OBJECT
 */
type t_restaurant_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'restaurant_stddev_pop_fields'>;
    chain_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    price?: t_Float | null;
  },
  Extension<'restaurant_stddev_pop_fields'>
>;

/**
 * @name restaurant_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_stddev_pop_order_by = {
  chain_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  price?: order_by | null;
};

/**
 * @name restaurant_stddev_samp_fields
 * @type OBJECT
 */
type t_restaurant_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'restaurant_stddev_samp_fields'>;
    chain_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    price?: t_Float | null;
  },
  Extension<'restaurant_stddev_samp_fields'>
>;

/**
 * @name restaurant_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_stddev_samp_order_by = {
  chain_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  price?: order_by | null;
};

/**
 * @name restaurant_sum_fields
 * @type OBJECT
 */
type t_restaurant_sum_fields = FieldsType<
  {
    __typename: t_String<'restaurant_sum_fields'>;
    chain_id?: t_Int | null;
    id?: t_Int | null;
    latitude?: t_float8 | null;
    longitude?: t_float8 | null;
    price?: t_Int | null;
  },
  Extension<'restaurant_sum_fields'>
>;

/**
 * @name restaurant_sum_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_sum_order_by = {
  chain_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  price?: order_by | null;
};


/**
 * @name restaurant_var_pop_fields
 * @type OBJECT
 */
type t_restaurant_var_pop_fields = FieldsType<
  {
    __typename: t_String<'restaurant_var_pop_fields'>;
    chain_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    price?: t_Float | null;
  },
  Extension<'restaurant_var_pop_fields'>
>;

/**
 * @name restaurant_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_var_pop_order_by = {
  chain_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  price?: order_by | null;
};

/**
 * @name restaurant_var_samp_fields
 * @type OBJECT
 */
type t_restaurant_var_samp_fields = FieldsType<
  {
    __typename: t_String<'restaurant_var_samp_fields'>;
    chain_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    price?: t_Float | null;
  },
  Extension<'restaurant_var_samp_fields'>
>;

/**
 * @name restaurant_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_var_samp_order_by = {
  chain_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  price?: order_by | null;
};

/**
 * @name restaurant_variance_fields
 * @type OBJECT
 */
type t_restaurant_variance_fields = FieldsType<
  {
    __typename: t_String<'restaurant_variance_fields'>;
    chain_id?: t_Float | null;
    id?: t_Float | null;
    latitude?: t_Float | null;
    longitude?: t_Float | null;
    price?: t_Float | null;
  },
  Extension<'restaurant_variance_fields'>
>;

/**
 * @name restaurant_variance_order_by
 * @type INPUT_OBJECT
 */
export type restaurant_variance_order_by = {
  chain_id?: order_by | null;
  id?: order_by | null;
  latitude?: order_by | null;
  longitude?: order_by | null;
  price?: order_by | null;
};

/**
 * @name restaurants_visited_entity
 * @type OBJECT
 */
type t_restaurants_visited_entity = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity'>;
    id: t_Int;
    numTimesEaten: t_Int;

    /**
     * An object relationship
     */
    restaurant?: t_restaurant | null;
    restaurantId?: t_Int | null;
  },
  Extension<'restaurants_visited_entity'>
>;

/**
 * @name restaurants_visited_entity_aggregate
 * @type OBJECT
 */
type t_restaurants_visited_entity_aggregate = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_aggregate'>;
    aggregate?: t_restaurants_visited_entity_aggregate_fields | null;
    nodes: t_restaurants_visited_entity[];
  },
  Extension<'restaurants_visited_entity_aggregate'>
>;

/**
 * @name restaurants_visited_entity_aggregate_fields
 * @type OBJECT
 */
type t_restaurants_visited_entity_aggregate_fields = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_aggregate_fields'>;
    avg?: t_restaurants_visited_entity_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: restaurants_visited_entity_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_restaurants_visited_entity_max_fields | null;
    min?: t_restaurants_visited_entity_min_fields | null;
    stddev?: t_restaurants_visited_entity_stddev_fields | null;
    stddev_pop?: t_restaurants_visited_entity_stddev_pop_fields | null;
    stddev_samp?: t_restaurants_visited_entity_stddev_samp_fields | null;
    sum?: t_restaurants_visited_entity_sum_fields | null;
    var_pop?: t_restaurants_visited_entity_var_pop_fields | null;
    var_samp?: t_restaurants_visited_entity_var_samp_fields | null;
    variance?: t_restaurants_visited_entity_variance_fields | null;
  },
  Extension<'restaurants_visited_entity_aggregate_fields'>
>;

/**
 * @name restaurants_visited_entity_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_aggregate_order_by = {
  avg?: restaurants_visited_entity_avg_order_by | null;
  count?: order_by | null;
  max?: restaurants_visited_entity_max_order_by | null;
  min?: restaurants_visited_entity_min_order_by | null;
  stddev?: restaurants_visited_entity_stddev_order_by | null;
  stddev_pop?: restaurants_visited_entity_stddev_pop_order_by | null;
  stddev_samp?: restaurants_visited_entity_stddev_samp_order_by | null;
  sum?: restaurants_visited_entity_sum_order_by | null;
  var_pop?: restaurants_visited_entity_var_pop_order_by | null;
  var_samp?: restaurants_visited_entity_var_samp_order_by | null;
  variance?: restaurants_visited_entity_variance_order_by | null;
};

/**
 * @name restaurants_visited_entity_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_arr_rel_insert_input = {
  data: restaurants_visited_entity_insert_input[];
  on_conflict?: restaurants_visited_entity_on_conflict | null;
};

/**
 * @name restaurants_visited_entity_avg_fields
 * @type OBJECT
 */
type t_restaurants_visited_entity_avg_fields = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_avg_fields'>;
    id?: t_Float | null;
    numTimesEaten?: t_Float | null;
    restaurantId?: t_Float | null;
  },
  Extension<'restaurants_visited_entity_avg_fields'>
>;

/**
 * @name restaurants_visited_entity_avg_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_avg_order_by = {
  id?: order_by | null;
  numTimesEaten?: order_by | null;
  restaurantId?: order_by | null;
};

/**
 * @name restaurants_visited_entity_bool_exp
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_bool_exp = {
  _and?: (restaurants_visited_entity_bool_exp | null)[] | null;
  _not?: restaurants_visited_entity_bool_exp | null;
  _or?: (restaurants_visited_entity_bool_exp | null)[] | null;
  id?: Int_comparison_exp | null;
  numTimesEaten?: Int_comparison_exp | null;
  restaurant?: restaurant_bool_exp | null;
  restaurantId?: Int_comparison_exp | null;
};


/**
 * @name restaurants_visited_entity_inc_input
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_inc_input = {
  id?: number | null;
  numTimesEaten?: number | null;
  restaurantId?: number | null;
};

/**
 * @name restaurants_visited_entity_insert_input
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_insert_input = {
  id?: number | null;
  numTimesEaten?: number | null;
  restaurant?: restaurant_obj_rel_insert_input | null;
  restaurantId?: number | null;
};

/**
 * @name restaurants_visited_entity_max_fields
 * @type OBJECT
 */
type t_restaurants_visited_entity_max_fields = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_max_fields'>;
    id?: t_Int | null;
    numTimesEaten?: t_Int | null;
    restaurantId?: t_Int | null;
  },
  Extension<'restaurants_visited_entity_max_fields'>
>;

/**
 * @name restaurants_visited_entity_max_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_max_order_by = {
  id?: order_by | null;
  numTimesEaten?: order_by | null;
  restaurantId?: order_by | null;
};

/**
 * @name restaurants_visited_entity_min_fields
 * @type OBJECT
 */
type t_restaurants_visited_entity_min_fields = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_min_fields'>;
    id?: t_Int | null;
    numTimesEaten?: t_Int | null;
    restaurantId?: t_Int | null;
  },
  Extension<'restaurants_visited_entity_min_fields'>
>;

/**
 * @name restaurants_visited_entity_min_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_min_order_by = {
  id?: order_by | null;
  numTimesEaten?: order_by | null;
  restaurantId?: order_by | null;
};

/**
 * @name restaurants_visited_entity_mutation_response
 * @type OBJECT
 */
type t_restaurants_visited_entity_mutation_response = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_restaurants_visited_entity[];
  },
  Extension<'restaurants_visited_entity_mutation_response'>
>;

/**
 * @name restaurants_visited_entity_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_obj_rel_insert_input = {
  data: restaurants_visited_entity_insert_input;
  on_conflict?: restaurants_visited_entity_on_conflict | null;
};

/**
 * @name restaurants_visited_entity_on_conflict
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_on_conflict = {
  constraint: restaurants_visited_entity_constraint;
  update_columns: restaurants_visited_entity_update_column[];
  where?: restaurants_visited_entity_bool_exp | null;
};

/**
 * @name restaurants_visited_entity_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_order_by = {
  id?: order_by | null;
  numTimesEaten?: order_by | null;
  restaurant?: restaurant_order_by | null;
  restaurantId?: order_by | null;
};

/**
 * @name restaurants_visited_entity_pk_columns_input
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_pk_columns_input = { id: number };


/**
 * @name restaurants_visited_entity_set_input
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_set_input = {
  id?: number | null;
  numTimesEaten?: number | null;
  restaurantId?: number | null;
};

/**
 * @name restaurants_visited_entity_stddev_fields
 * @type OBJECT
 */
type t_restaurants_visited_entity_stddev_fields = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_stddev_fields'>;
    id?: t_Float | null;
    numTimesEaten?: t_Float | null;
    restaurantId?: t_Float | null;
  },
  Extension<'restaurants_visited_entity_stddev_fields'>
>;

/**
 * @name restaurants_visited_entity_stddev_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_stddev_order_by = {
  id?: order_by | null;
  numTimesEaten?: order_by | null;
  restaurantId?: order_by | null;
};

/**
 * @name restaurants_visited_entity_stddev_pop_fields
 * @type OBJECT
 */
type t_restaurants_visited_entity_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_stddev_pop_fields'>;
    id?: t_Float | null;
    numTimesEaten?: t_Float | null;
    restaurantId?: t_Float | null;
  },
  Extension<'restaurants_visited_entity_stddev_pop_fields'>
>;

/**
 * @name restaurants_visited_entity_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_stddev_pop_order_by = {
  id?: order_by | null;
  numTimesEaten?: order_by | null;
  restaurantId?: order_by | null;
};

/**
 * @name restaurants_visited_entity_stddev_samp_fields
 * @type OBJECT
 */
type t_restaurants_visited_entity_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_stddev_samp_fields'>;
    id?: t_Float | null;
    numTimesEaten?: t_Float | null;
    restaurantId?: t_Float | null;
  },
  Extension<'restaurants_visited_entity_stddev_samp_fields'>
>;

/**
 * @name restaurants_visited_entity_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_stddev_samp_order_by = {
  id?: order_by | null;
  numTimesEaten?: order_by | null;
  restaurantId?: order_by | null;
};

/**
 * @name restaurants_visited_entity_sum_fields
 * @type OBJECT
 */
type t_restaurants_visited_entity_sum_fields = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_sum_fields'>;
    id?: t_Int | null;
    numTimesEaten?: t_Int | null;
    restaurantId?: t_Int | null;
  },
  Extension<'restaurants_visited_entity_sum_fields'>
>;

/**
 * @name restaurants_visited_entity_sum_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_sum_order_by = {
  id?: order_by | null;
  numTimesEaten?: order_by | null;
  restaurantId?: order_by | null;
};


/**
 * @name restaurants_visited_entity_var_pop_fields
 * @type OBJECT
 */
type t_restaurants_visited_entity_var_pop_fields = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_var_pop_fields'>;
    id?: t_Float | null;
    numTimesEaten?: t_Float | null;
    restaurantId?: t_Float | null;
  },
  Extension<'restaurants_visited_entity_var_pop_fields'>
>;

/**
 * @name restaurants_visited_entity_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_var_pop_order_by = {
  id?: order_by | null;
  numTimesEaten?: order_by | null;
  restaurantId?: order_by | null;
};

/**
 * @name restaurants_visited_entity_var_samp_fields
 * @type OBJECT
 */
type t_restaurants_visited_entity_var_samp_fields = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_var_samp_fields'>;
    id?: t_Float | null;
    numTimesEaten?: t_Float | null;
    restaurantId?: t_Float | null;
  },
  Extension<'restaurants_visited_entity_var_samp_fields'>
>;

/**
 * @name restaurants_visited_entity_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_var_samp_order_by = {
  id?: order_by | null;
  numTimesEaten?: order_by | null;
  restaurantId?: order_by | null;
};

/**
 * @name restaurants_visited_entity_variance_fields
 * @type OBJECT
 */
type t_restaurants_visited_entity_variance_fields = FieldsType<
  {
    __typename: t_String<'restaurants_visited_entity_variance_fields'>;
    id?: t_Float | null;
    numTimesEaten?: t_Float | null;
    restaurantId?: t_Float | null;
  },
  Extension<'restaurants_visited_entity_variance_fields'>
>;

/**
 * @name restaurants_visited_entity_variance_order_by
 * @type INPUT_OBJECT
 */
export type restaurants_visited_entity_variance_order_by = {
  id?: order_by | null;
  numTimesEaten?: order_by | null;
  restaurantId?: order_by | null;
};

/**
 * @name subscription_root
 * @type OBJECT
 */
type t_subscription_root = FieldsType<
  {
    __typename: t_String<'subscription_root'>;

    /**
     * fetch data from the table: "authenticated"
     */
    authenticated: FieldsTypeArg<
      {
        distinct_on?: authenticated_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: authenticated_order_by[] | null;
        where?: authenticated_bool_exp | null;
      },
      t_authenticated[]
    >;

    /**
     * fetch aggregated fields from the table: "authenticated"
     */
    authenticated_aggregate: FieldsTypeArg<
      {
        distinct_on?: authenticated_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: authenticated_order_by[] | null;
        where?: authenticated_bool_exp | null;
      },
      t_authenticated_aggregate
    >;

    /**
     * fetch data from the table: "authenticated" using primary key columns
     */
    authenticated_by_pk?: FieldsTypeArg<{ id: number }, t_authenticated | null>;

    /**
     * fetch data from the table: "contact"
     */
    contact: FieldsTypeArg<
      {
        distinct_on?: contact_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contact_order_by[] | null;
        where?: contact_bool_exp | null;
      },
      t_contact[]
    >;

    /**
     * fetch aggregated fields from the table: "contact"
     */
    contact_aggregate: FieldsTypeArg<
      {
        distinct_on?: contact_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contact_order_by[] | null;
        where?: contact_bool_exp | null;
      },
      t_contact_aggregate
    >;

    /**
     * fetch data from the table: "contact" using primary key columns
     */
    contact_by_pk?: FieldsTypeArg<{ id: number }, t_contact | null>;

    /**
     * fetch data from the table: "cuisine"
     */
    cuisine: FieldsTypeArg<
      {
        distinct_on?: cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: cuisine_order_by[] | null;
        where?: cuisine_bool_exp | null;
      },
      t_cuisine[]
    >;

    /**
     * fetch aggregated fields from the table: "cuisine"
     */
    cuisine_aggregate: FieldsTypeArg<
      {
        distinct_on?: cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: cuisine_order_by[] | null;
        where?: cuisine_bool_exp | null;
      },
      t_cuisine_aggregate
    >;

    /**
     * fetch data from the table: "cuisine" using primary key columns
     */
    cuisine_by_pk?: FieldsTypeArg<{ id: number }, t_cuisine | null>;

    /**
     * fetch data from the table: "favorite_item_entity"
     */
    favorite_item_entity: FieldsTypeArg<
      {
        distinct_on?: favorite_item_entity_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: favorite_item_entity_order_by[] | null;
        where?: favorite_item_entity_bool_exp | null;
      },
      t_favorite_item_entity[]
    >;

    /**
     * fetch aggregated fields from the table: "favorite_item_entity"
     */
    favorite_item_entity_aggregate: FieldsTypeArg<
      {
        distinct_on?: favorite_item_entity_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: favorite_item_entity_order_by[] | null;
        where?: favorite_item_entity_bool_exp | null;
      },
      t_favorite_item_entity_aggregate
    >;

    /**
     * fetch data from the table: "favorite_item_entity" using primary key columns
     */
    favorite_item_entity_by_pk?: FieldsTypeArg<
      { foodItemId: number; userId: number },
      t_favorite_item_entity | null
    >;

    /**
     * fetch data from the table: "food_item"
     */
    food_item: FieldsTypeArg<
      {
        distinct_on?: food_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_order_by[] | null;
        where?: food_item_bool_exp | null;
      },
      t_food_item[]
    >;

    /**
     * fetch aggregated fields from the table: "food_item"
     */
    food_item_aggregate: FieldsTypeArg<
      {
        distinct_on?: food_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_order_by[] | null;
        where?: food_item_bool_exp | null;
      },
      t_food_item_aggregate
    >;

    /**
     * fetch data from the table: "food_item" using primary key columns
     */
    food_item_by_pk?: FieldsTypeArg<{ id: number }, t_food_item | null>;

    /**
     * fetch data from the table: "food_item_media"
     */
    food_item_media: FieldsTypeArg<
      {
        distinct_on?: food_item_media_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_media_order_by[] | null;
        where?: food_item_media_bool_exp | null;
      },
      t_food_item_media[]
    >;

    /**
     * fetch aggregated fields from the table: "food_item_media"
     */
    food_item_media_aggregate: FieldsTypeArg<
      {
        distinct_on?: food_item_media_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: food_item_media_order_by[] | null;
        where?: food_item_media_bool_exp | null;
      },
      t_food_item_media_aggregate
    >;

    /**
     * fetch data from the table: "food_item_media" using primary key columns
     */
    food_item_media_by_pk?: FieldsTypeArg<
      { id: number },
      t_food_item_media | null
    >;

    /**
     * fetch data from the table: "game"
     */
    game: FieldsTypeArg<
      {
        distinct_on?: game_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_order_by[] | null;
        where?: game_bool_exp | null;
      },
      t_game[]
    >;

    /**
     * fetch aggregated fields from the table: "game"
     */
    game_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_order_by[] | null;
        where?: game_bool_exp | null;
      },
      t_game_aggregate
    >;

    /**
     * fetch data from the table: "game" using primary key columns
     */
    game_by_pk?: FieldsTypeArg<{ id: number }, t_game | null>;

    /**
     * fetch data from the table: "game_choice"
     */
    game_choice: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice[]
    >;

    /**
     * fetch aggregated fields from the table: "game_choice"
     */
    game_choice_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_choice_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_choice_order_by[] | null;
        where?: game_choice_bool_exp | null;
      },
      t_game_choice_aggregate
    >;

    /**
     * fetch data from the table: "game_choice" using primary key columns
     */
    game_choice_by_pk?: FieldsTypeArg<{ id: number }, t_game_choice | null>;

    /**
     * fetch data from the table: "game_cuisine"
     */
    game_cuisine: FieldsTypeArg<
      {
        distinct_on?: game_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_cuisine_order_by[] | null;
        where?: game_cuisine_bool_exp | null;
      },
      t_game_cuisine[]
    >;

    /**
     * fetch aggregated fields from the table: "game_cuisine"
     */
    game_cuisine_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_cuisine_order_by[] | null;
        where?: game_cuisine_bool_exp | null;
      },
      t_game_cuisine_aggregate
    >;

    /**
     * fetch data from the table: "game_cuisine" using primary key columns
     */
    game_cuisine_by_pk?: FieldsTypeArg<{ id: number }, t_game_cuisine | null>;

    /**
     * fetch data from the table: "game_player"
     */
    game_player: FieldsTypeArg<
      {
        distinct_on?: game_player_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_player_order_by[] | null;
        where?: game_player_bool_exp | null;
      },
      t_game_player[]
    >;

    /**
     * fetch aggregated fields from the table: "game_player"
     */
    game_player_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_player_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_player_order_by[] | null;
        where?: game_player_bool_exp | null;
      },
      t_game_player_aggregate
    >;

    /**
     * fetch data from the table: "game_player" using primary key columns
     */
    game_player_by_pk?: FieldsTypeArg<{ id: number }, t_game_player | null>;

    /**
     * fetch data from the table: "log"
     */
    log: FieldsTypeArg<
      {
        distinct_on?: log_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: log_order_by[] | null;
        where?: log_bool_exp | null;
      },
      t_log[]
    >;

    /**
     * fetch aggregated fields from the table: "log"
     */
    log_aggregate: FieldsTypeArg<
      {
        distinct_on?: log_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: log_order_by[] | null;
        where?: log_bool_exp | null;
      },
      t_log_aggregate
    >;

    /**
     * fetch data from the table: "log" using primary key columns
     */
    log_by_pk?: FieldsTypeArg<{ id: number }, t_log | null>;

    /**
     * fetch data from the table: "media_author"
     */
    media_author: FieldsTypeArg<
      {
        distinct_on?: media_author_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: media_author_order_by[] | null;
        where?: media_author_bool_exp | null;
      },
      t_media_author[]
    >;

    /**
     * fetch aggregated fields from the table: "media_author"
     */
    media_author_aggregate: FieldsTypeArg<
      {
        distinct_on?: media_author_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: media_author_order_by[] | null;
        where?: media_author_bool_exp | null;
      },
      t_media_author_aggregate
    >;

    /**
     * fetch data from the table: "media_author" using primary key columns
     */
    media_author_by_pk?: FieldsTypeArg<{ id: number }, t_media_author | null>;

    /**
     * fetch data from the table: "menu"
     */
    menu: FieldsTypeArg<
      {
        distinct_on?: menu_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: menu_order_by[] | null;
        where?: menu_bool_exp | null;
      },
      t_menu[]
    >;

    /**
     * fetch aggregated fields from the table: "menu"
     */
    menu_aggregate: FieldsTypeArg<
      {
        distinct_on?: menu_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: menu_order_by[] | null;
        where?: menu_bool_exp | null;
      },
      t_menu_aggregate
    >;

    /**
     * fetch data from the table: "menu" using primary key columns
     */
    menu_by_pk?: FieldsTypeArg<{ id: number }, t_menu | null>;

    /**
     * fetch data from the table: "menu_section"
     */
    menu_section: FieldsTypeArg<
      {
        distinct_on?: menu_section_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: menu_section_order_by[] | null;
        where?: menu_section_bool_exp | null;
      },
      t_menu_section[]
    >;

    /**
     * fetch aggregated fields from the table: "menu_section"
     */
    menu_section_aggregate: FieldsTypeArg<
      {
        distinct_on?: menu_section_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: menu_section_order_by[] | null;
        where?: menu_section_bool_exp | null;
      },
      t_menu_section_aggregate
    >;

    /**
     * fetch data from the table: "menu_section" using primary key columns
     */
    menu_section_by_pk?: FieldsTypeArg<{ id: number }, t_menu_section | null>;

    /**
     * fetch data from the table: "metric"
     */
    metric: FieldsTypeArg<
      {
        distinct_on?: metric_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: metric_order_by[] | null;
        where?: metric_bool_exp | null;
      },
      t_metric[]
    >;

    /**
     * fetch aggregated fields from the table: "metric"
     */
    metric_aggregate: FieldsTypeArg<
      {
        distinct_on?: metric_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: metric_order_by[] | null;
        where?: metric_bool_exp | null;
      },
      t_metric_aggregate
    >;

    /**
     * fetch data from the table: "metric" using primary key columns
     */
    metric_by_pk?: FieldsTypeArg<{ id: number }, t_metric | null>;

    /**
     * fetch data from the table: "restaurant"
     */
    restaurant: FieldsTypeArg<
      {
        distinct_on?: restaurant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_order_by[] | null;
        where?: restaurant_bool_exp | null;
      },
      t_restaurant[]
    >;

    /**
     * fetch aggregated fields from the table: "restaurant"
     */
    restaurant_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_order_by[] | null;
        where?: restaurant_bool_exp | null;
      },
      t_restaurant_aggregate
    >;

    /**
     * fetch data from the table: "restaurant" using primary key columns
     */
    restaurant_by_pk?: FieldsTypeArg<{ id: number }, t_restaurant | null>;

    /**
     * fetch data from the table: "restaurant_chain"
     */
    restaurant_chain: FieldsTypeArg<
      {
        distinct_on?: restaurant_chain_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_chain_order_by[] | null;
        where?: restaurant_chain_bool_exp | null;
      },
      t_restaurant_chain[]
    >;

    /**
     * fetch aggregated fields from the table: "restaurant_chain"
     */
    restaurant_chain_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_chain_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_chain_order_by[] | null;
        where?: restaurant_chain_bool_exp | null;
      },
      t_restaurant_chain_aggregate
    >;

    /**
     * fetch data from the table: "restaurant_chain" using primary key columns
     */
    restaurant_chain_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurant_chain | null
    >;

    /**
     * fetch data from the table: "restaurant_cuisine"
     */
    restaurant_cuisine: FieldsTypeArg<
      {
        distinct_on?: restaurant_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_cuisine_order_by[] | null;
        where?: restaurant_cuisine_bool_exp | null;
      },
      t_restaurant_cuisine[]
    >;

    /**
     * fetch aggregated fields from the table: "restaurant_cuisine"
     */
    restaurant_cuisine_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_cuisine_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_cuisine_order_by[] | null;
        where?: restaurant_cuisine_bool_exp | null;
      },
      t_restaurant_cuisine_aggregate
    >;

    /**
     * fetch data from the table: "restaurant_cuisine" using primary key columns
     */
    restaurant_cuisine_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurant_cuisine | null
    >;

    /**
     * fetch data from the table: "restaurant_item"
     */
    restaurant_item: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item[]
    >;

    /**
     * fetch aggregated fields from the table: "restaurant_item"
     */
    restaurant_item_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurant_item_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurant_item_order_by[] | null;
        where?: restaurant_item_bool_exp | null;
      },
      t_restaurant_item_aggregate
    >;

    /**
     * fetch data from the table: "restaurant_item" using primary key columns
     */
    restaurant_item_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurant_item | null
    >;

    /**
     * fetch data from the table: "restaurants_visited_entity"
     */
    restaurants_visited_entity: FieldsTypeArg<
      {
        distinct_on?: restaurants_visited_entity_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurants_visited_entity_order_by[] | null;
        where?: restaurants_visited_entity_bool_exp | null;
      },
      t_restaurants_visited_entity[]
    >;

    /**
     * fetch aggregated fields from the table: "restaurants_visited_entity"
     */
    restaurants_visited_entity_aggregate: FieldsTypeArg<
      {
        distinct_on?: restaurants_visited_entity_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: restaurants_visited_entity_order_by[] | null;
        where?: restaurants_visited_entity_bool_exp | null;
      },
      t_restaurants_visited_entity_aggregate
    >;

    /**
     * fetch data from the table: "restaurants_visited_entity" using primary key columns
     */
    restaurants_visited_entity_by_pk?: FieldsTypeArg<
      { id: number },
      t_restaurants_visited_entity | null
    >;

    /**
     * fetch data from the table: "test_table"
     */
    test_table: FieldsTypeArg<
      {
        distinct_on?: test_table_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: test_table_order_by[] | null;
        where?: test_table_bool_exp | null;
      },
      t_test_table[]
    >;

    /**
     * fetch aggregated fields from the table: "test_table"
     */
    test_table_aggregate: FieldsTypeArg<
      {
        distinct_on?: test_table_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: test_table_order_by[] | null;
        where?: test_table_bool_exp | null;
      },
      t_test_table_aggregate
    >;

    /**
     * fetch data from the table: "test_table" using primary key columns
     */
    test_table_by_pk?: FieldsTypeArg<{ id: any }, t_test_table | null>;

    /**
     * fetch data from the table: "user"
     */
    user: FieldsTypeArg<
      {
        distinct_on?: user_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_order_by[] | null;
        where?: user_bool_exp | null;
      },
      t_user[]
    >;

    /**
     * fetch aggregated fields from the table: "user"
     */
    user_aggregate: FieldsTypeArg<
      {
        distinct_on?: user_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_order_by[] | null;
        where?: user_bool_exp | null;
      },
      t_user_aggregate
    >;

    /**
     * fetch data from the table: "user" using primary key columns
     */
    user_by_pk?: FieldsTypeArg<{ id: number }, t_user | null>;

    /**
     * fetch data from the table: "user_device"
     */
    user_device: FieldsTypeArg<
      {
        distinct_on?: user_device_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_device_order_by[] | null;
        where?: user_device_bool_exp | null;
      },
      t_user_device[]
    >;

    /**
     * fetch aggregated fields from the table: "user_device"
     */
    user_device_aggregate: FieldsTypeArg<
      {
        distinct_on?: user_device_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_device_order_by[] | null;
        where?: user_device_bool_exp | null;
      },
      t_user_device_aggregate
    >;

    /**
     * fetch data from the table: "user_device" using primary key columns
     */
    user_device_by_pk?: FieldsTypeArg<{ id: number }, t_user_device | null>;
  },
  Extension<'subscription_root'>
>;

/**
 * @name test_table
 * @type OBJECT
 */
type t_test_table = FieldsType<
  {
    __typename: t_String<'test_table'>;
    id: t_uuid;
    testcolumn?: t_String | null;
  },
  Extension<'test_table'>
>;

/**
 * @name test_table_aggregate
 * @type OBJECT
 */
type t_test_table_aggregate = FieldsType<
  {
    __typename: t_String<'test_table_aggregate'>;
    aggregate?: t_test_table_aggregate_fields | null;
    nodes: t_test_table[];
  },
  Extension<'test_table_aggregate'>
>;

/**
 * @name test_table_aggregate_fields
 * @type OBJECT
 */
type t_test_table_aggregate_fields = FieldsType<
  {
    __typename: t_String<'test_table_aggregate_fields'>;
    count?: FieldsTypeArg<
      {
        columns?: test_table_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_test_table_max_fields | null;
    min?: t_test_table_min_fields | null;
  },
  Extension<'test_table_aggregate_fields'>
>;

/**
 * @name test_table_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type test_table_aggregate_order_by = {
  count?: order_by | null;
  max?: test_table_max_order_by | null;
  min?: test_table_min_order_by | null;
};

/**
 * @name test_table_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type test_table_arr_rel_insert_input = {
  data: test_table_insert_input[];
  on_conflict?: test_table_on_conflict | null;
};

/**
 * @name test_table_bool_exp
 * @type INPUT_OBJECT
 */
export type test_table_bool_exp = {
  _and?: (test_table_bool_exp | null)[] | null;
  _not?: test_table_bool_exp | null;
  _or?: (test_table_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  testcolumn?: String_comparison_exp | null;
};


/**
 * @name test_table_insert_input
 * @type INPUT_OBJECT
 */
export type test_table_insert_input = {
  id?: any | null;
  testcolumn?: string | null;
};

/**
 * @name test_table_max_fields
 * @type OBJECT
 */
type t_test_table_max_fields = FieldsType<
  {
    __typename: t_String<'test_table_max_fields'>;
    id?: t_uuid | null;
    testcolumn?: t_String | null;
  },
  Extension<'test_table_max_fields'>
>;

/**
 * @name test_table_max_order_by
 * @type INPUT_OBJECT
 */
export type test_table_max_order_by = {
  id?: order_by | null;
  testcolumn?: order_by | null;
};

/**
 * @name test_table_min_fields
 * @type OBJECT
 */
type t_test_table_min_fields = FieldsType<
  {
    __typename: t_String<'test_table_min_fields'>;
    id?: t_uuid | null;
    testcolumn?: t_String | null;
  },
  Extension<'test_table_min_fields'>
>;

/**
 * @name test_table_min_order_by
 * @type INPUT_OBJECT
 */
export type test_table_min_order_by = {
  id?: order_by | null;
  testcolumn?: order_by | null;
};

/**
 * @name test_table_mutation_response
 * @type OBJECT
 */
type t_test_table_mutation_response = FieldsType<
  {
    __typename: t_String<'test_table_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_test_table[];
  },
  Extension<'test_table_mutation_response'>
>;

/**
 * @name test_table_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type test_table_obj_rel_insert_input = {
  data: test_table_insert_input;
  on_conflict?: test_table_on_conflict | null;
};

/**
 * @name test_table_on_conflict
 * @type INPUT_OBJECT
 */
export type test_table_on_conflict = {
  constraint: test_table_constraint;
  update_columns: test_table_update_column[];
  where?: test_table_bool_exp | null;
};

/**
 * @name test_table_order_by
 * @type INPUT_OBJECT
 */
export type test_table_order_by = {
  id?: order_by | null;
  testcolumn?: order_by | null;
};

/**
 * @name test_table_pk_columns_input
 * @type INPUT_OBJECT
 */
export type test_table_pk_columns_input = { id: any };


/**
 * @name test_table_set_input
 * @type INPUT_OBJECT
 */
export type test_table_set_input = {
  id?: any | null;
  testcolumn?: string | null;
};


/**
 * @name timestamp
 * @type SCALAR
 */
type t_timestamp<T extends any = any> = ScalarType<T, Extension<'timestamp'>>;

/**
 * @name timestamp_comparison_exp
 * @type INPUT_OBJECT
 */
export type timestamp_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name timestamptz
 * @type SCALAR
 */
type t_timestamptz<T extends any = any> = ScalarType<
  T,
  Extension<'timestamptz'>
>;

/**
 * @name user
 * @type OBJECT
 */
type t_user = FieldsType<
  {
    __typename: t_String<'user'>;
    active: t_Boolean;
    animal_products: t_Boolean;
    beef: t_Boolean;
    chicken: t_Boolean;

    /**
     * An array relationship
     */
    contacts: FieldsTypeArg<
      {
        distinct_on?: contact_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contact_order_by[] | null;
        where?: contact_bool_exp | null;
      },
      t_contact[]
    >;

    /**
     * An array relationship
     */
    contactsByContactId: FieldsTypeArg<
      {
        distinct_on?: contact_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contact_order_by[] | null;
        where?: contact_bool_exp | null;
      },
      t_contact[]
    >;

    /**
     * An aggregated array relationship
     */
    contactsByContactId_aggregate: FieldsTypeArg<
      {
        distinct_on?: contact_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contact_order_by[] | null;
        where?: contact_bool_exp | null;
      },
      t_contact_aggregate
    >;

    /**
     * An aggregated array relationship
     */
    contacts_aggregate: FieldsTypeArg<
      {
        distinct_on?: contact_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: contact_order_by[] | null;
        where?: contact_bool_exp | null;
      },
      t_contact_aggregate
    >;
    created_at: t_timestamp;
    diet: t_user_diet_enum;
    email: t_String;
    exotic: t_Boolean;
    first_name: t_String;
    fish: t_Boolean;

    /**
     * An array relationship
     */
    game_players: FieldsTypeArg<
      {
        distinct_on?: game_player_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_player_order_by[] | null;
        where?: game_player_bool_exp | null;
      },
      t_game_player[]
    >;

    /**
     * An aggregated array relationship
     */
    game_players_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_player_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_player_order_by[] | null;
        where?: game_player_bool_exp | null;
      },
      t_game_player_aggregate
    >;

    /**
     * An array relationship
     */
    games: FieldsTypeArg<
      {
        distinct_on?: game_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_order_by[] | null;
        where?: game_bool_exp | null;
      },
      t_game[]
    >;

    /**
     * An aggregated array relationship
     */
    games_aggregate: FieldsTypeArg<
      {
        distinct_on?: game_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: game_order_by[] | null;
        where?: game_bool_exp | null;
      },
      t_game_aggregate
    >;
    gluten: t_Boolean;
    id: t_Int;
    last_name: t_String;
    password: t_String;
    phone_number?: t_String | null;
    pork: t_Boolean;
    shellfish: t_Boolean;
    turkey: t_Boolean;

    /**
     * An array relationship
     */
    user_devices: FieldsTypeArg<
      {
        distinct_on?: user_device_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_device_order_by[] | null;
        where?: user_device_bool_exp | null;
      },
      t_user_device[]
    >;

    /**
     * An aggregated array relationship
     */
    user_devices_aggregate: FieldsTypeArg<
      {
        distinct_on?: user_device_select_column[] | null;
        limit?: number | null;
        offset?: number | null;
        order_by?: user_device_order_by[] | null;
        where?: user_device_bool_exp | null;
      },
      t_user_device_aggregate
    >;
    username: t_String;
    vegan: t_Boolean;
    vegetables: t_Boolean;
    vegetarian: t_Boolean;
  },
  Extension<'user'>
>;

/**
 * @name user_aggregate
 * @type OBJECT
 */
type t_user_aggregate = FieldsType<
  {
    __typename: t_String<'user_aggregate'>;
    aggregate?: t_user_aggregate_fields | null;
    nodes: t_user[];
  },
  Extension<'user_aggregate'>
>;

/**
 * @name user_aggregate_fields
 * @type OBJECT
 */
type t_user_aggregate_fields = FieldsType<
  {
    __typename: t_String<'user_aggregate_fields'>;
    avg?: t_user_avg_fields | null;
    count?: FieldsTypeArg<
      { columns?: user_select_column[] | null; distinct?: boolean | null },
      t_Int | null
    >;
    max?: t_user_max_fields | null;
    min?: t_user_min_fields | null;
    stddev?: t_user_stddev_fields | null;
    stddev_pop?: t_user_stddev_pop_fields | null;
    stddev_samp?: t_user_stddev_samp_fields | null;
    sum?: t_user_sum_fields | null;
    var_pop?: t_user_var_pop_fields | null;
    var_samp?: t_user_var_samp_fields | null;
    variance?: t_user_variance_fields | null;
  },
  Extension<'user_aggregate_fields'>
>;

/**
 * @name user_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type user_aggregate_order_by = {
  avg?: user_avg_order_by | null;
  count?: order_by | null;
  max?: user_max_order_by | null;
  min?: user_min_order_by | null;
  stddev?: user_stddev_order_by | null;
  stddev_pop?: user_stddev_pop_order_by | null;
  stddev_samp?: user_stddev_samp_order_by | null;
  sum?: user_sum_order_by | null;
  var_pop?: user_var_pop_order_by | null;
  var_samp?: user_var_samp_order_by | null;
  variance?: user_variance_order_by | null;
};

/**
 * @name user_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type user_arr_rel_insert_input = {
  data: user_insert_input[];
  on_conflict?: user_on_conflict | null;
};

/**
 * @name user_avg_fields
 * @type OBJECT
 */
type t_user_avg_fields = FieldsType<
  {
    __typename: t_String<'user_avg_fields'>;
    id?: t_Float | null;
  },
  Extension<'user_avg_fields'>
>;

/**
 * @name user_avg_order_by
 * @type INPUT_OBJECT
 */
export type user_avg_order_by = { id?: order_by | null };

/**
 * @name user_bool_exp
 * @type INPUT_OBJECT
 */
export type user_bool_exp = {
  _and?: (user_bool_exp | null)[] | null;
  _not?: user_bool_exp | null;
  _or?: (user_bool_exp | null)[] | null;
  active?: Boolean_comparison_exp | null;
  animal_products?: Boolean_comparison_exp | null;
  beef?: Boolean_comparison_exp | null;
  chicken?: Boolean_comparison_exp | null;
  contacts?: contact_bool_exp | null;
  contactsByContactId?: contact_bool_exp | null;
  created_at?: timestamp_comparison_exp | null;
  diet?: user_diet_enum_comparison_exp | null;
  email?: String_comparison_exp | null;
  exotic?: Boolean_comparison_exp | null;
  first_name?: String_comparison_exp | null;
  fish?: Boolean_comparison_exp | null;
  game_players?: game_player_bool_exp | null;
  games?: game_bool_exp | null;
  gluten?: Boolean_comparison_exp | null;
  id?: Int_comparison_exp | null;
  last_name?: String_comparison_exp | null;
  password?: String_comparison_exp | null;
  phone_number?: String_comparison_exp | null;
  pork?: Boolean_comparison_exp | null;
  shellfish?: Boolean_comparison_exp | null;
  turkey?: Boolean_comparison_exp | null;
  user_devices?: user_device_bool_exp | null;
  username?: String_comparison_exp | null;
  vegan?: Boolean_comparison_exp | null;
  vegetables?: Boolean_comparison_exp | null;
  vegetarian?: Boolean_comparison_exp | null;
};


/**
 * @name user_device
 * @type OBJECT
 */
type t_user_device = FieldsType<
  {
    __typename: t_String<'user_device'>;
    active: t_Boolean;
    createdOn: t_timestamp;
    device_token: t_String;
    id: t_Int;

    /**
     * An object relationship
     */
    user: t_user;
    user_id: t_Int;
  },
  Extension<'user_device'>
>;

/**
 * @name user_device_aggregate
 * @type OBJECT
 */
type t_user_device_aggregate = FieldsType<
  {
    __typename: t_String<'user_device_aggregate'>;
    aggregate?: t_user_device_aggregate_fields | null;
    nodes: t_user_device[];
  },
  Extension<'user_device_aggregate'>
>;

/**
 * @name user_device_aggregate_fields
 * @type OBJECT
 */
type t_user_device_aggregate_fields = FieldsType<
  {
    __typename: t_String<'user_device_aggregate_fields'>;
    avg?: t_user_device_avg_fields | null;
    count?: FieldsTypeArg<
      {
        columns?: user_device_select_column[] | null;
        distinct?: boolean | null;
      },
      t_Int | null
    >;
    max?: t_user_device_max_fields | null;
    min?: t_user_device_min_fields | null;
    stddev?: t_user_device_stddev_fields | null;
    stddev_pop?: t_user_device_stddev_pop_fields | null;
    stddev_samp?: t_user_device_stddev_samp_fields | null;
    sum?: t_user_device_sum_fields | null;
    var_pop?: t_user_device_var_pop_fields | null;
    var_samp?: t_user_device_var_samp_fields | null;
    variance?: t_user_device_variance_fields | null;
  },
  Extension<'user_device_aggregate_fields'>
>;

/**
 * @name user_device_aggregate_order_by
 * @type INPUT_OBJECT
 */
export type user_device_aggregate_order_by = {
  avg?: user_device_avg_order_by | null;
  count?: order_by | null;
  max?: user_device_max_order_by | null;
  min?: user_device_min_order_by | null;
  stddev?: user_device_stddev_order_by | null;
  stddev_pop?: user_device_stddev_pop_order_by | null;
  stddev_samp?: user_device_stddev_samp_order_by | null;
  sum?: user_device_sum_order_by | null;
  var_pop?: user_device_var_pop_order_by | null;
  var_samp?: user_device_var_samp_order_by | null;
  variance?: user_device_variance_order_by | null;
};

/**
 * @name user_device_arr_rel_insert_input
 * @type INPUT_OBJECT
 */
export type user_device_arr_rel_insert_input = {
  data: user_device_insert_input[];
  on_conflict?: user_device_on_conflict | null;
};

/**
 * @name user_device_avg_fields
 * @type OBJECT
 */
type t_user_device_avg_fields = FieldsType<
  {
    __typename: t_String<'user_device_avg_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'user_device_avg_fields'>
>;

/**
 * @name user_device_avg_order_by
 * @type INPUT_OBJECT
 */
export type user_device_avg_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name user_device_bool_exp
 * @type INPUT_OBJECT
 */
export type user_device_bool_exp = {
  _and?: (user_device_bool_exp | null)[] | null;
  _not?: user_device_bool_exp | null;
  _or?: (user_device_bool_exp | null)[] | null;
  active?: Boolean_comparison_exp | null;
  createdOn?: timestamp_comparison_exp | null;
  device_token?: String_comparison_exp | null;
  id?: Int_comparison_exp | null;
  user?: user_bool_exp | null;
  user_id?: Int_comparison_exp | null;
};


/**
 * @name user_device_inc_input
 * @type INPUT_OBJECT
 */
export type user_device_inc_input = {
  id?: number | null;
  user_id?: number | null;
};

/**
 * @name user_device_insert_input
 * @type INPUT_OBJECT
 */
export type user_device_insert_input = {
  active?: boolean | null;
  createdOn?: any | null;
  device_token?: string | null;
  id?: number | null;
  user?: user_obj_rel_insert_input | null;
  user_id?: number | null;
};

/**
 * @name user_device_max_fields
 * @type OBJECT
 */
type t_user_device_max_fields = FieldsType<
  {
    __typename: t_String<'user_device_max_fields'>;
    createdOn?: t_timestamp | null;
    device_token?: t_String | null;
    id?: t_Int | null;
    user_id?: t_Int | null;
  },
  Extension<'user_device_max_fields'>
>;

/**
 * @name user_device_max_order_by
 * @type INPUT_OBJECT
 */
export type user_device_max_order_by = {
  createdOn?: order_by | null;
  device_token?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name user_device_min_fields
 * @type OBJECT
 */
type t_user_device_min_fields = FieldsType<
  {
    __typename: t_String<'user_device_min_fields'>;
    createdOn?: t_timestamp | null;
    device_token?: t_String | null;
    id?: t_Int | null;
    user_id?: t_Int | null;
  },
  Extension<'user_device_min_fields'>
>;

/**
 * @name user_device_min_order_by
 * @type INPUT_OBJECT
 */
export type user_device_min_order_by = {
  createdOn?: order_by | null;
  device_token?: order_by | null;
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name user_device_mutation_response
 * @type OBJECT
 */
type t_user_device_mutation_response = FieldsType<
  {
    __typename: t_String<'user_device_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_user_device[];
  },
  Extension<'user_device_mutation_response'>
>;

/**
 * @name user_device_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type user_device_obj_rel_insert_input = {
  data: user_device_insert_input;
  on_conflict?: user_device_on_conflict | null;
};

/**
 * @name user_device_on_conflict
 * @type INPUT_OBJECT
 */
export type user_device_on_conflict = {
  constraint: user_device_constraint;
  update_columns: user_device_update_column[];
  where?: user_device_bool_exp | null;
};

/**
 * @name user_device_order_by
 * @type INPUT_OBJECT
 */
export type user_device_order_by = {
  active?: order_by | null;
  createdOn?: order_by | null;
  device_token?: order_by | null;
  id?: order_by | null;
  user?: user_order_by | null;
  user_id?: order_by | null;
};

/**
 * @name user_device_pk_columns_input
 * @type INPUT_OBJECT
 */
export type user_device_pk_columns_input = { id: number };


/**
 * @name user_device_set_input
 * @type INPUT_OBJECT
 */
export type user_device_set_input = {
  active?: boolean | null;
  createdOn?: any | null;
  device_token?: string | null;
  id?: number | null;
  user_id?: number | null;
};

/**
 * @name user_device_stddev_fields
 * @type OBJECT
 */
type t_user_device_stddev_fields = FieldsType<
  {
    __typename: t_String<'user_device_stddev_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'user_device_stddev_fields'>
>;

/**
 * @name user_device_stddev_order_by
 * @type INPUT_OBJECT
 */
export type user_device_stddev_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name user_device_stddev_pop_fields
 * @type OBJECT
 */
type t_user_device_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'user_device_stddev_pop_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'user_device_stddev_pop_fields'>
>;

/**
 * @name user_device_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type user_device_stddev_pop_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name user_device_stddev_samp_fields
 * @type OBJECT
 */
type t_user_device_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'user_device_stddev_samp_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'user_device_stddev_samp_fields'>
>;

/**
 * @name user_device_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type user_device_stddev_samp_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name user_device_sum_fields
 * @type OBJECT
 */
type t_user_device_sum_fields = FieldsType<
  {
    __typename: t_String<'user_device_sum_fields'>;
    id?: t_Int | null;
    user_id?: t_Int | null;
  },
  Extension<'user_device_sum_fields'>
>;

/**
 * @name user_device_sum_order_by
 * @type INPUT_OBJECT
 */
export type user_device_sum_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};


/**
 * @name user_device_var_pop_fields
 * @type OBJECT
 */
type t_user_device_var_pop_fields = FieldsType<
  {
    __typename: t_String<'user_device_var_pop_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'user_device_var_pop_fields'>
>;

/**
 * @name user_device_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type user_device_var_pop_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name user_device_var_samp_fields
 * @type OBJECT
 */
type t_user_device_var_samp_fields = FieldsType<
  {
    __typename: t_String<'user_device_var_samp_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'user_device_var_samp_fields'>
>;

/**
 * @name user_device_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type user_device_var_samp_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name user_device_variance_fields
 * @type OBJECT
 */
type t_user_device_variance_fields = FieldsType<
  {
    __typename: t_String<'user_device_variance_fields'>;
    id?: t_Float | null;
    user_id?: t_Float | null;
  },
  Extension<'user_device_variance_fields'>
>;

/**
 * @name user_device_variance_order_by
 * @type INPUT_OBJECT
 */
export type user_device_variance_order_by = {
  id?: order_by | null;
  user_id?: order_by | null;
};

/**
 * @name user_diet_enum
 * @type SCALAR
 */
type t_user_diet_enum<T extends any = any> = ScalarType<
  T,
  Extension<'user_diet_enum'>
>;

/**
 * @name user_diet_enum_comparison_exp
 * @type INPUT_OBJECT
 */
export type user_diet_enum_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name user_inc_input
 * @type INPUT_OBJECT
 */
export type user_inc_input = { id?: number | null };

/**
 * @name user_insert_input
 * @type INPUT_OBJECT
 */
export type user_insert_input = {
  active?: boolean | null;
  animal_products?: boolean | null;
  beef?: boolean | null;
  chicken?: boolean | null;
  contacts?: contact_arr_rel_insert_input | null;
  contactsByContactId?: contact_arr_rel_insert_input | null;
  created_at?: any | null;
  diet?: any | null;
  email?: string | null;
  exotic?: boolean | null;
  first_name?: string | null;
  fish?: boolean | null;
  game_players?: game_player_arr_rel_insert_input | null;
  games?: game_arr_rel_insert_input | null;
  gluten?: boolean | null;
  id?: number | null;
  last_name?: string | null;
  password?: string | null;
  phone_number?: string | null;
  pork?: boolean | null;
  shellfish?: boolean | null;
  turkey?: boolean | null;
  user_devices?: user_device_arr_rel_insert_input | null;
  username?: string | null;
  vegan?: boolean | null;
  vegetables?: boolean | null;
  vegetarian?: boolean | null;
};

/**
 * @name user_max_fields
 * @type OBJECT
 */
type t_user_max_fields = FieldsType<
  {
    __typename: t_String<'user_max_fields'>;
    created_at?: t_timestamp | null;
    email?: t_String | null;
    first_name?: t_String | null;
    id?: t_Int | null;
    last_name?: t_String | null;
    password?: t_String | null;
    phone_number?: t_String | null;
    username?: t_String | null;
  },
  Extension<'user_max_fields'>
>;

/**
 * @name user_max_order_by
 * @type INPUT_OBJECT
 */
export type user_max_order_by = {
  created_at?: order_by | null;
  email?: order_by | null;
  first_name?: order_by | null;
  id?: order_by | null;
  last_name?: order_by | null;
  password?: order_by | null;
  phone_number?: order_by | null;
  username?: order_by | null;
};

/**
 * @name user_min_fields
 * @type OBJECT
 */
type t_user_min_fields = FieldsType<
  {
    __typename: t_String<'user_min_fields'>;
    created_at?: t_timestamp | null;
    email?: t_String | null;
    first_name?: t_String | null;
    id?: t_Int | null;
    last_name?: t_String | null;
    password?: t_String | null;
    phone_number?: t_String | null;
    username?: t_String | null;
  },
  Extension<'user_min_fields'>
>;

/**
 * @name user_min_order_by
 * @type INPUT_OBJECT
 */
export type user_min_order_by = {
  created_at?: order_by | null;
  email?: order_by | null;
  first_name?: order_by | null;
  id?: order_by | null;
  last_name?: order_by | null;
  password?: order_by | null;
  phone_number?: order_by | null;
  username?: order_by | null;
};

/**
 * @name user_mutation_response
 * @type OBJECT
 */
type t_user_mutation_response = FieldsType<
  {
    __typename: t_String<'user_mutation_response'>;

    /**
     * number of affected rows by the mutation
     */
    affected_rows: t_Int;

    /**
     * data of the affected rows by the mutation
     */
    returning: t_user[];
  },
  Extension<'user_mutation_response'>
>;

/**
 * @name user_obj_rel_insert_input
 * @type INPUT_OBJECT
 */
export type user_obj_rel_insert_input = {
  data: user_insert_input;
  on_conflict?: user_on_conflict | null;
};

/**
 * @name user_on_conflict
 * @type INPUT_OBJECT
 */
export type user_on_conflict = {
  constraint: user_constraint;
  update_columns: user_update_column[];
  where?: user_bool_exp | null;
};

/**
 * @name user_order_by
 * @type INPUT_OBJECT
 */
export type user_order_by = {
  active?: order_by | null;
  animal_products?: order_by | null;
  beef?: order_by | null;
  chicken?: order_by | null;
  contactsByContactId_aggregate?: contact_aggregate_order_by | null;
  contacts_aggregate?: contact_aggregate_order_by | null;
  created_at?: order_by | null;
  diet?: order_by | null;
  email?: order_by | null;
  exotic?: order_by | null;
  first_name?: order_by | null;
  fish?: order_by | null;
  game_players_aggregate?: game_player_aggregate_order_by | null;
  games_aggregate?: game_aggregate_order_by | null;
  gluten?: order_by | null;
  id?: order_by | null;
  last_name?: order_by | null;
  password?: order_by | null;
  phone_number?: order_by | null;
  pork?: order_by | null;
  shellfish?: order_by | null;
  turkey?: order_by | null;
  user_devices_aggregate?: user_device_aggregate_order_by | null;
  username?: order_by | null;
  vegan?: order_by | null;
  vegetables?: order_by | null;
  vegetarian?: order_by | null;
};

/**
 * @name user_pk_columns_input
 * @type INPUT_OBJECT
 */
export type user_pk_columns_input = { id: number };


/**
 * @name user_set_input
 * @type INPUT_OBJECT
 */
export type user_set_input = {
  active?: boolean | null;
  animal_products?: boolean | null;
  beef?: boolean | null;
  chicken?: boolean | null;
  created_at?: any | null;
  diet?: any | null;
  email?: string | null;
  exotic?: boolean | null;
  first_name?: string | null;
  fish?: boolean | null;
  gluten?: boolean | null;
  id?: number | null;
  last_name?: string | null;
  password?: string | null;
  phone_number?: string | null;
  pork?: boolean | null;
  shellfish?: boolean | null;
  turkey?: boolean | null;
  username?: string | null;
  vegan?: boolean | null;
  vegetables?: boolean | null;
  vegetarian?: boolean | null;
};

/**
 * @name user_stddev_fields
 * @type OBJECT
 */
type t_user_stddev_fields = FieldsType<
  {
    __typename: t_String<'user_stddev_fields'>;
    id?: t_Float | null;
  },
  Extension<'user_stddev_fields'>
>;

/**
 * @name user_stddev_order_by
 * @type INPUT_OBJECT
 */
export type user_stddev_order_by = { id?: order_by | null };

/**
 * @name user_stddev_pop_fields
 * @type OBJECT
 */
type t_user_stddev_pop_fields = FieldsType<
  {
    __typename: t_String<'user_stddev_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'user_stddev_pop_fields'>
>;

/**
 * @name user_stddev_pop_order_by
 * @type INPUT_OBJECT
 */
export type user_stddev_pop_order_by = { id?: order_by | null };

/**
 * @name user_stddev_samp_fields
 * @type OBJECT
 */
type t_user_stddev_samp_fields = FieldsType<
  {
    __typename: t_String<'user_stddev_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'user_stddev_samp_fields'>
>;

/**
 * @name user_stddev_samp_order_by
 * @type INPUT_OBJECT
 */
export type user_stddev_samp_order_by = { id?: order_by | null };

/**
 * @name user_sum_fields
 * @type OBJECT
 */
type t_user_sum_fields = FieldsType<
  {
    __typename: t_String<'user_sum_fields'>;
    id?: t_Int | null;
  },
  Extension<'user_sum_fields'>
>;

/**
 * @name user_sum_order_by
 * @type INPUT_OBJECT
 */
export type user_sum_order_by = { id?: order_by | null };


/**
 * @name user_var_pop_fields
 * @type OBJECT
 */
type t_user_var_pop_fields = FieldsType<
  {
    __typename: t_String<'user_var_pop_fields'>;
    id?: t_Float | null;
  },
  Extension<'user_var_pop_fields'>
>;

/**
 * @name user_var_pop_order_by
 * @type INPUT_OBJECT
 */
export type user_var_pop_order_by = { id?: order_by | null };

/**
 * @name user_var_samp_fields
 * @type OBJECT
 */
type t_user_var_samp_fields = FieldsType<
  {
    __typename: t_String<'user_var_samp_fields'>;
    id?: t_Float | null;
  },
  Extension<'user_var_samp_fields'>
>;

/**
 * @name user_var_samp_order_by
 * @type INPUT_OBJECT
 */
export type user_var_samp_order_by = { id?: order_by | null };

/**
 * @name user_variance_fields
 * @type OBJECT
 */
type t_user_variance_fields = FieldsType<
  {
    __typename: t_String<'user_variance_fields'>;
    id?: t_Float | null;
  },
  Extension<'user_variance_fields'>
>;

/**
 * @name user_variance_order_by
 * @type INPUT_OBJECT
 */
export type user_variance_order_by = { id?: order_by | null };

/**
 * @name uuid
 * @type SCALAR
 */
type t_uuid<T extends any = any> = ScalarType<T, Extension<'uuid'>>;

/**
 * @name uuid_comparison_exp
 * @type INPUT_OBJECT
 */
export type uuid_comparison_exp = {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
};

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name LoginResponse
 * @type OBJECT
 */
export type LoginResponse = TypeData<t_LoginResponse>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export enum __DirectiveLocation {
  ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION',
  ENUM = 'ENUM',
  ENUM_VALUE = 'ENUM_VALUE',
  FIELD = 'FIELD',
  FIELD_DEFINITION = 'FIELD_DEFINITION',
  FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD = 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT = 'INLINE_FRAGMENT',
  INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION',
  INPUT_OBJECT = 'INPUT_OBJECT',
  INTERFACE = 'INTERFACE',
  MUTATION = 'MUTATION',
  OBJECT = 'OBJECT',
  QUERY = 'QUERY',
  SCALAR = 'SCALAR',
  SCHEMA = 'SCHEMA',
  SUBSCRIPTION = 'SUBSCRIPTION',
  UNION = 'UNION',
}

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export enum __TypeKind {
  ENUM = 'ENUM',
  INPUT_OBJECT = 'INPUT_OBJECT',
  INTERFACE = 'INTERFACE',
  LIST = 'LIST',
  NON_NULL = 'NON_NULL',
  OBJECT = 'OBJECT',
  SCALAR = 'SCALAR',
  UNION = 'UNION',
}

/**
 * @name _food_contains_enum
 * @type SCALAR
 */
export type _food_contains_enum = TypeData<t__food_contains_enum>;

/**
 * @name _int4
 * @type SCALAR
 */
export type _int4 = TypeData<t__int4>;

/**
 * @name _varchar
 * @type SCALAR
 */
export type _varchar = TypeData<t__varchar>;

/**
 * @name authenticated
 * @type OBJECT
 */
export type authenticated = TypeData<t_authenticated>;

/**
 * @name authenticated_aggregate
 * @type OBJECT
 */
export type authenticated_aggregate = TypeData<t_authenticated_aggregate>;

/**
 * @name authenticated_aggregate_fields
 * @type OBJECT
 */
export type authenticated_aggregate_fields = TypeData<
  t_authenticated_aggregate_fields
>;

/**
 * @name authenticated_avg_fields
 * @type OBJECT
 */
export type authenticated_avg_fields = TypeData<t_authenticated_avg_fields>;

/**
 * @name authenticated_constraint
 * @type ENUM
 */
export enum authenticated_constraint {
  PK_170fa06690c73d5f53d44b76e90 = 'PK_170fa06690c73d5f53d44b76e90',
}

/**
 * @name authenticated_max_fields
 * @type OBJECT
 */
export type authenticated_max_fields = TypeData<t_authenticated_max_fields>;

/**
 * @name authenticated_min_fields
 * @type OBJECT
 */
export type authenticated_min_fields = TypeData<t_authenticated_min_fields>;

/**
 * @name authenticated_mutation_response
 * @type OBJECT
 */
export type authenticated_mutation_response = TypeData<
  t_authenticated_mutation_response
>;

/**
 * @name authenticated_select_column
 * @type ENUM
 */
export enum authenticated_select_column {
  active = 'active',
  created_on = 'created_on',
  id = 'id',
  payload_hash = 'payload_hash',
  user_id = 'user_id',
}

/**
 * @name authenticated_stddev_fields
 * @type OBJECT
 */
export type authenticated_stddev_fields = TypeData<
  t_authenticated_stddev_fields
>;

/**
 * @name authenticated_stddev_pop_fields
 * @type OBJECT
 */
export type authenticated_stddev_pop_fields = TypeData<
  t_authenticated_stddev_pop_fields
>;

/**
 * @name authenticated_stddev_samp_fields
 * @type OBJECT
 */
export type authenticated_stddev_samp_fields = TypeData<
  t_authenticated_stddev_samp_fields
>;

/**
 * @name authenticated_sum_fields
 * @type OBJECT
 */
export type authenticated_sum_fields = TypeData<t_authenticated_sum_fields>;

/**
 * @name authenticated_update_column
 * @type ENUM
 */
export enum authenticated_update_column {
  active = 'active',
  created_on = 'created_on',
  id = 'id',
  payload_hash = 'payload_hash',
  user_id = 'user_id',
}

/**
 * @name authenticated_var_pop_fields
 * @type OBJECT
 */
export type authenticated_var_pop_fields = TypeData<
  t_authenticated_var_pop_fields
>;

/**
 * @name authenticated_var_samp_fields
 * @type OBJECT
 */
export type authenticated_var_samp_fields = TypeData<
  t_authenticated_var_samp_fields
>;

/**
 * @name authenticated_variance_fields
 * @type OBJECT
 */
export type authenticated_variance_fields = TypeData<
  t_authenticated_variance_fields
>;

/**
 * @name contact
 * @type OBJECT
 */
export type contact = TypeData<t_contact>;

/**
 * @name contact_aggregate
 * @type OBJECT
 */
export type contact_aggregate = TypeData<t_contact_aggregate>;

/**
 * @name contact_aggregate_fields
 * @type OBJECT
 */
export type contact_aggregate_fields = TypeData<t_contact_aggregate_fields>;

/**
 * @name contact_avg_fields
 * @type OBJECT
 */
export type contact_avg_fields = TypeData<t_contact_avg_fields>;

/**
 * @name contact_constraint
 * @type ENUM
 */
export enum contact_constraint {
  PK_2cbbe00f59ab6b3bb5b8d19f989 = 'PK_2cbbe00f59ab6b3bb5b8d19f989',
}

/**
 * @name contact_max_fields
 * @type OBJECT
 */
export type contact_max_fields = TypeData<t_contact_max_fields>;

/**
 * @name contact_min_fields
 * @type OBJECT
 */
export type contact_min_fields = TypeData<t_contact_min_fields>;

/**
 * @name contact_mutation_response
 * @type OBJECT
 */
export type contact_mutation_response = TypeData<t_contact_mutation_response>;

/**
 * @name contact_select_column
 * @type ENUM
 */
export enum contact_select_column {
  contact_id = 'contact_id',
  id = 'id',
  status = 'status',
  user_id = 'user_id',
}

/**
 * @name contact_status_enum
 * @type SCALAR
 */
export type contact_status_enum = TypeData<t_contact_status_enum>;

/**
 * @name contact_stddev_fields
 * @type OBJECT
 */
export type contact_stddev_fields = TypeData<t_contact_stddev_fields>;

/**
 * @name contact_stddev_pop_fields
 * @type OBJECT
 */
export type contact_stddev_pop_fields = TypeData<t_contact_stddev_pop_fields>;

/**
 * @name contact_stddev_samp_fields
 * @type OBJECT
 */
export type contact_stddev_samp_fields = TypeData<t_contact_stddev_samp_fields>;

/**
 * @name contact_sum_fields
 * @type OBJECT
 */
export type contact_sum_fields = TypeData<t_contact_sum_fields>;

/**
 * @name contact_update_column
 * @type ENUM
 */
export enum contact_update_column {
  contact_id = 'contact_id',
  id = 'id',
  status = 'status',
  user_id = 'user_id',
}

/**
 * @name contact_var_pop_fields
 * @type OBJECT
 */
export type contact_var_pop_fields = TypeData<t_contact_var_pop_fields>;

/**
 * @name contact_var_samp_fields
 * @type OBJECT
 */
export type contact_var_samp_fields = TypeData<t_contact_var_samp_fields>;

/**
 * @name contact_variance_fields
 * @type OBJECT
 */
export type contact_variance_fields = TypeData<t_contact_variance_fields>;

/**
 * @name cuisine
 * @type OBJECT
 */
export type cuisine = TypeData<t_cuisine>;

/**
 * @name cuisine_aggregate
 * @type OBJECT
 */
export type cuisine_aggregate = TypeData<t_cuisine_aggregate>;

/**
 * @name cuisine_aggregate_fields
 * @type OBJECT
 */
export type cuisine_aggregate_fields = TypeData<t_cuisine_aggregate_fields>;

/**
 * @name cuisine_avg_fields
 * @type OBJECT
 */
export type cuisine_avg_fields = TypeData<t_cuisine_avg_fields>;

/**
 * @name cuisine_constraint
 * @type ENUM
 */
export enum cuisine_constraint {
  PK_d4c1e9427b94335350fecaf238e = 'PK_d4c1e9427b94335350fecaf238e',
}

/**
 * @name cuisine_max_fields
 * @type OBJECT
 */
export type cuisine_max_fields = TypeData<t_cuisine_max_fields>;

/**
 * @name cuisine_min_fields
 * @type OBJECT
 */
export type cuisine_min_fields = TypeData<t_cuisine_min_fields>;

/**
 * @name cuisine_mutation_response
 * @type OBJECT
 */
export type cuisine_mutation_response = TypeData<t_cuisine_mutation_response>;

/**
 * @name cuisine_select_column
 * @type ENUM
 */
export enum cuisine_select_column {
  id = 'id',
  name = 'name',
}

/**
 * @name cuisine_stddev_fields
 * @type OBJECT
 */
export type cuisine_stddev_fields = TypeData<t_cuisine_stddev_fields>;

/**
 * @name cuisine_stddev_pop_fields
 * @type OBJECT
 */
export type cuisine_stddev_pop_fields = TypeData<t_cuisine_stddev_pop_fields>;

/**
 * @name cuisine_stddev_samp_fields
 * @type OBJECT
 */
export type cuisine_stddev_samp_fields = TypeData<t_cuisine_stddev_samp_fields>;

/**
 * @name cuisine_sum_fields
 * @type OBJECT
 */
export type cuisine_sum_fields = TypeData<t_cuisine_sum_fields>;

/**
 * @name cuisine_update_column
 * @type ENUM
 */
export enum cuisine_update_column {
  id = 'id',
  name = 'name',
}

/**
 * @name cuisine_var_pop_fields
 * @type OBJECT
 */
export type cuisine_var_pop_fields = TypeData<t_cuisine_var_pop_fields>;

/**
 * @name cuisine_var_samp_fields
 * @type OBJECT
 */
export type cuisine_var_samp_fields = TypeData<t_cuisine_var_samp_fields>;

/**
 * @name cuisine_variance_fields
 * @type OBJECT
 */
export type cuisine_variance_fields = TypeData<t_cuisine_variance_fields>;

/**
 * @name favorite_item_entity
 * @type OBJECT
 */
export type favorite_item_entity = TypeData<t_favorite_item_entity>;

/**
 * @name favorite_item_entity_aggregate
 * @type OBJECT
 */
export type favorite_item_entity_aggregate = TypeData<
  t_favorite_item_entity_aggregate
>;

/**
 * @name favorite_item_entity_aggregate_fields
 * @type OBJECT
 */
export type favorite_item_entity_aggregate_fields = TypeData<
  t_favorite_item_entity_aggregate_fields
>;

/**
 * @name favorite_item_entity_avg_fields
 * @type OBJECT
 */
export type favorite_item_entity_avg_fields = TypeData<
  t_favorite_item_entity_avg_fields
>;

/**
 * @name favorite_item_entity_constraint
 * @type ENUM
 */
export enum favorite_item_entity_constraint {
  PK_0c940960af1d3bffcb1ae7bc2c8 = 'PK_0c940960af1d3bffcb1ae7bc2c8',
}

/**
 * @name favorite_item_entity_max_fields
 * @type OBJECT
 */
export type favorite_item_entity_max_fields = TypeData<
  t_favorite_item_entity_max_fields
>;

/**
 * @name favorite_item_entity_min_fields
 * @type OBJECT
 */
export type favorite_item_entity_min_fields = TypeData<
  t_favorite_item_entity_min_fields
>;

/**
 * @name favorite_item_entity_mutation_response
 * @type OBJECT
 */
export type favorite_item_entity_mutation_response = TypeData<
  t_favorite_item_entity_mutation_response
>;

/**
 * @name favorite_item_entity_select_column
 * @type ENUM
 */
export enum favorite_item_entity_select_column {
  foodItemId = 'foodItemId',
  isFavorite = 'isFavorite',
  userId = 'userId',
}

/**
 * @name favorite_item_entity_stddev_fields
 * @type OBJECT
 */
export type favorite_item_entity_stddev_fields = TypeData<
  t_favorite_item_entity_stddev_fields
>;

/**
 * @name favorite_item_entity_stddev_pop_fields
 * @type OBJECT
 */
export type favorite_item_entity_stddev_pop_fields = TypeData<
  t_favorite_item_entity_stddev_pop_fields
>;

/**
 * @name favorite_item_entity_stddev_samp_fields
 * @type OBJECT
 */
export type favorite_item_entity_stddev_samp_fields = TypeData<
  t_favorite_item_entity_stddev_samp_fields
>;

/**
 * @name favorite_item_entity_sum_fields
 * @type OBJECT
 */
export type favorite_item_entity_sum_fields = TypeData<
  t_favorite_item_entity_sum_fields
>;

/**
 * @name favorite_item_entity_update_column
 * @type ENUM
 */
export enum favorite_item_entity_update_column {
  foodItemId = 'foodItemId',
  isFavorite = 'isFavorite',
  userId = 'userId',
}

/**
 * @name favorite_item_entity_var_pop_fields
 * @type OBJECT
 */
export type favorite_item_entity_var_pop_fields = TypeData<
  t_favorite_item_entity_var_pop_fields
>;

/**
 * @name favorite_item_entity_var_samp_fields
 * @type OBJECT
 */
export type favorite_item_entity_var_samp_fields = TypeData<
  t_favorite_item_entity_var_samp_fields
>;

/**
 * @name favorite_item_entity_variance_fields
 * @type OBJECT
 */
export type favorite_item_entity_variance_fields = TypeData<
  t_favorite_item_entity_variance_fields
>;

/**
 * @name float8
 * @type SCALAR
 */
export type float8 = TypeData<t_float8>;

/**
 * @name food_item
 * @type OBJECT
 */
export type food_item = TypeData<t_food_item>;

/**
 * @name food_item_aggregate
 * @type OBJECT
 */
export type food_item_aggregate = TypeData<t_food_item_aggregate>;

/**
 * @name food_item_aggregate_fields
 * @type OBJECT
 */
export type food_item_aggregate_fields = TypeData<t_food_item_aggregate_fields>;

/**
 * @name food_item_avg_fields
 * @type OBJECT
 */
export type food_item_avg_fields = TypeData<t_food_item_avg_fields>;

/**
 * @name food_item_constraint
 * @type ENUM
 */
export enum food_item_constraint {
  PK_057940b0225785ec693de562cf4 = 'PK_057940b0225785ec693de562cf4',
}

/**
 * @name food_item_max_fields
 * @type OBJECT
 */
export type food_item_max_fields = TypeData<t_food_item_max_fields>;

/**
 * @name food_item_media
 * @type OBJECT
 */
export type food_item_media = TypeData<t_food_item_media>;

/**
 * @name food_item_media_aggregate
 * @type OBJECT
 */
export type food_item_media_aggregate = TypeData<t_food_item_media_aggregate>;

/**
 * @name food_item_media_aggregate_fields
 * @type OBJECT
 */
export type food_item_media_aggregate_fields = TypeData<
  t_food_item_media_aggregate_fields
>;

/**
 * @name food_item_media_avg_fields
 * @type OBJECT
 */
export type food_item_media_avg_fields = TypeData<t_food_item_media_avg_fields>;

/**
 * @name food_item_media_constraint
 * @type ENUM
 */
export enum food_item_media_constraint {
  PK_605b244ba6ab5b71a7debce9006 = 'PK_605b244ba6ab5b71a7debce9006',
}

/**
 * @name food_item_media_max_fields
 * @type OBJECT
 */
export type food_item_media_max_fields = TypeData<t_food_item_media_max_fields>;

/**
 * @name food_item_media_min_fields
 * @type OBJECT
 */
export type food_item_media_min_fields = TypeData<t_food_item_media_min_fields>;

/**
 * @name food_item_media_mutation_response
 * @type OBJECT
 */
export type food_item_media_mutation_response = TypeData<
  t_food_item_media_mutation_response
>;

/**
 * @name food_item_media_select_column
 * @type ENUM
 */
export enum food_item_media_select_column {
  author_id = 'author_id',
  caption = 'caption',
  food_item_id = 'food_item_id',
  id = 'id',
  src = 'src',
  type = 'type',
}

/**
 * @name food_item_media_stddev_fields
 * @type OBJECT
 */
export type food_item_media_stddev_fields = TypeData<
  t_food_item_media_stddev_fields
>;

/**
 * @name food_item_media_stddev_pop_fields
 * @type OBJECT
 */
export type food_item_media_stddev_pop_fields = TypeData<
  t_food_item_media_stddev_pop_fields
>;

/**
 * @name food_item_media_stddev_samp_fields
 * @type OBJECT
 */
export type food_item_media_stddev_samp_fields = TypeData<
  t_food_item_media_stddev_samp_fields
>;

/**
 * @name food_item_media_sum_fields
 * @type OBJECT
 */
export type food_item_media_sum_fields = TypeData<t_food_item_media_sum_fields>;

/**
 * @name food_item_media_type_enum
 * @type SCALAR
 */
export type food_item_media_type_enum = TypeData<t_food_item_media_type_enum>;

/**
 * @name food_item_media_update_column
 * @type ENUM
 */
export enum food_item_media_update_column {
  author_id = 'author_id',
  caption = 'caption',
  food_item_id = 'food_item_id',
  id = 'id',
  src = 'src',
  type = 'type',
}

/**
 * @name food_item_media_var_pop_fields
 * @type OBJECT
 */
export type food_item_media_var_pop_fields = TypeData<
  t_food_item_media_var_pop_fields
>;

/**
 * @name food_item_media_var_samp_fields
 * @type OBJECT
 */
export type food_item_media_var_samp_fields = TypeData<
  t_food_item_media_var_samp_fields
>;

/**
 * @name food_item_media_variance_fields
 * @type OBJECT
 */
export type food_item_media_variance_fields = TypeData<
  t_food_item_media_variance_fields
>;

/**
 * @name food_item_min_fields
 * @type OBJECT
 */
export type food_item_min_fields = TypeData<t_food_item_min_fields>;

/**
 * @name food_item_mutation_response
 * @type OBJECT
 */
export type food_item_mutation_response = TypeData<
  t_food_item_mutation_response
>;

/**
 * @name food_item_select_column
 * @type ENUM
 */
export enum food_item_select_column {
  animal_products = 'animal_products',
  beef = 'beef',
  chicken = 'chicken',
  description = 'description',
  exotic = 'exotic',
  fish = 'fish',
  gluten = 'gluten',
  id = 'id',
  is_game_ready = 'is_game_ready',
  name = 'name',
  pork = 'pork',
  shellfish = 'shellfish',
  turkey = 'turkey',
}

/**
 * @name food_item_stddev_fields
 * @type OBJECT
 */
export type food_item_stddev_fields = TypeData<t_food_item_stddev_fields>;

/**
 * @name food_item_stddev_pop_fields
 * @type OBJECT
 */
export type food_item_stddev_pop_fields = TypeData<
  t_food_item_stddev_pop_fields
>;

/**
 * @name food_item_stddev_samp_fields
 * @type OBJECT
 */
export type food_item_stddev_samp_fields = TypeData<
  t_food_item_stddev_samp_fields
>;

/**
 * @name food_item_sum_fields
 * @type OBJECT
 */
export type food_item_sum_fields = TypeData<t_food_item_sum_fields>;

/**
 * @name food_item_update_column
 * @type ENUM
 */
export enum food_item_update_column {
  animal_products = 'animal_products',
  beef = 'beef',
  chicken = 'chicken',
  description = 'description',
  exotic = 'exotic',
  fish = 'fish',
  gluten = 'gluten',
  id = 'id',
  is_game_ready = 'is_game_ready',
  name = 'name',
  pork = 'pork',
  shellfish = 'shellfish',
  turkey = 'turkey',
}

/**
 * @name food_item_var_pop_fields
 * @type OBJECT
 */
export type food_item_var_pop_fields = TypeData<t_food_item_var_pop_fields>;

/**
 * @name food_item_var_samp_fields
 * @type OBJECT
 */
export type food_item_var_samp_fields = TypeData<t_food_item_var_samp_fields>;

/**
 * @name food_item_variance_fields
 * @type OBJECT
 */
export type food_item_variance_fields = TypeData<t_food_item_variance_fields>;

/**
 * @name game
 * @type OBJECT
 */
export type game = TypeData<t_game>;

/**
 * @name game_aggregate
 * @type OBJECT
 */
export type game_aggregate = TypeData<t_game_aggregate>;

/**
 * @name game_aggregate_fields
 * @type OBJECT
 */
export type game_aggregate_fields = TypeData<t_game_aggregate_fields>;

/**
 * @name game_avg_fields
 * @type OBJECT
 */
export type game_avg_fields = TypeData<t_game_avg_fields>;

/**
 * @name game_choice
 * @type OBJECT
 */
export type game_choice = TypeData<t_game_choice>;

/**
 * @name game_choice_aggregate
 * @type OBJECT
 */
export type game_choice_aggregate = TypeData<t_game_choice_aggregate>;

/**
 * @name game_choice_aggregate_fields
 * @type OBJECT
 */
export type game_choice_aggregate_fields = TypeData<
  t_game_choice_aggregate_fields
>;

/**
 * @name game_choice_avg_fields
 * @type OBJECT
 */
export type game_choice_avg_fields = TypeData<t_game_choice_avg_fields>;

/**
 * @name game_choice_constraint
 * @type ENUM
 */
export enum game_choice_constraint {
  PK_cb7ff566e4fe7f36d11f4e9c625 = 'PK_cb7ff566e4fe7f36d11f4e9c625',
}

/**
 * @name game_choice_max_fields
 * @type OBJECT
 */
export type game_choice_max_fields = TypeData<t_game_choice_max_fields>;

/**
 * @name game_choice_min_fields
 * @type OBJECT
 */
export type game_choice_min_fields = TypeData<t_game_choice_min_fields>;

/**
 * @name game_choice_mutation_response
 * @type OBJECT
 */
export type game_choice_mutation_response = TypeData<
  t_game_choice_mutation_response
>;

/**
 * @name game_choice_select_column
 * @type ENUM
 */
export enum game_choice_select_column {
  chosen_media_id = 'chosen_media_id',
  game_id = 'game_id',
  id = 'id',
  pick_rank = 'pick_rank',
  player_id = 'player_id',
  restaurant_id = 'restaurant_id',
  restaurant_item_id = 'restaurant_item_id',
  status = 'status',
}

/**
 * @name game_choice_status_enum
 * @type SCALAR
 */
export type game_choice_status_enum = TypeData<t_game_choice_status_enum>;

/**
 * @name game_choice_stddev_fields
 * @type OBJECT
 */
export type game_choice_stddev_fields = TypeData<t_game_choice_stddev_fields>;

/**
 * @name game_choice_stddev_pop_fields
 * @type OBJECT
 */
export type game_choice_stddev_pop_fields = TypeData<
  t_game_choice_stddev_pop_fields
>;

/**
 * @name game_choice_stddev_samp_fields
 * @type OBJECT
 */
export type game_choice_stddev_samp_fields = TypeData<
  t_game_choice_stddev_samp_fields
>;

/**
 * @name game_choice_sum_fields
 * @type OBJECT
 */
export type game_choice_sum_fields = TypeData<t_game_choice_sum_fields>;

/**
 * @name game_choice_update_column
 * @type ENUM
 */
export enum game_choice_update_column {
  chosen_media_id = 'chosen_media_id',
  game_id = 'game_id',
  id = 'id',
  pick_rank = 'pick_rank',
  player_id = 'player_id',
  restaurant_id = 'restaurant_id',
  restaurant_item_id = 'restaurant_item_id',
  status = 'status',
}

/**
 * @name game_choice_var_pop_fields
 * @type OBJECT
 */
export type game_choice_var_pop_fields = TypeData<t_game_choice_var_pop_fields>;

/**
 * @name game_choice_var_samp_fields
 * @type OBJECT
 */
export type game_choice_var_samp_fields = TypeData<
  t_game_choice_var_samp_fields
>;

/**
 * @name game_choice_variance_fields
 * @type OBJECT
 */
export type game_choice_variance_fields = TypeData<
  t_game_choice_variance_fields
>;

/**
 * @name game_constraint
 * @type ENUM
 */
export enum game_constraint {
  PK_352a30652cd352f552fef73dec5 = 'PK_352a30652cd352f552fef73dec5',
}

/**
 * @name game_cuisine
 * @type OBJECT
 */
export type game_cuisine = TypeData<t_game_cuisine>;

/**
 * @name game_cuisine_aggregate
 * @type OBJECT
 */
export type game_cuisine_aggregate = TypeData<t_game_cuisine_aggregate>;

/**
 * @name game_cuisine_aggregate_fields
 * @type OBJECT
 */
export type game_cuisine_aggregate_fields = TypeData<
  t_game_cuisine_aggregate_fields
>;

/**
 * @name game_cuisine_avg_fields
 * @type OBJECT
 */
export type game_cuisine_avg_fields = TypeData<t_game_cuisine_avg_fields>;

/**
 * @name game_cuisine_constraint
 * @type ENUM
 */
export enum game_cuisine_constraint {
  PK_3db9fe08222c1f2bb0916eb2b03 = 'PK_3db9fe08222c1f2bb0916eb2b03',
}

/**
 * @name game_cuisine_max_fields
 * @type OBJECT
 */
export type game_cuisine_max_fields = TypeData<t_game_cuisine_max_fields>;

/**
 * @name game_cuisine_min_fields
 * @type OBJECT
 */
export type game_cuisine_min_fields = TypeData<t_game_cuisine_min_fields>;

/**
 * @name game_cuisine_mutation_response
 * @type OBJECT
 */
export type game_cuisine_mutation_response = TypeData<
  t_game_cuisine_mutation_response
>;

/**
 * @name game_cuisine_select_column
 * @type ENUM
 */
export enum game_cuisine_select_column {
  cuisine_id = 'cuisine_id',
  game_id = 'game_id',
  id = 'id',
}

/**
 * @name game_cuisine_stddev_fields
 * @type OBJECT
 */
export type game_cuisine_stddev_fields = TypeData<t_game_cuisine_stddev_fields>;

/**
 * @name game_cuisine_stddev_pop_fields
 * @type OBJECT
 */
export type game_cuisine_stddev_pop_fields = TypeData<
  t_game_cuisine_stddev_pop_fields
>;

/**
 * @name game_cuisine_stddev_samp_fields
 * @type OBJECT
 */
export type game_cuisine_stddev_samp_fields = TypeData<
  t_game_cuisine_stddev_samp_fields
>;

/**
 * @name game_cuisine_sum_fields
 * @type OBJECT
 */
export type game_cuisine_sum_fields = TypeData<t_game_cuisine_sum_fields>;

/**
 * @name game_cuisine_update_column
 * @type ENUM
 */
export enum game_cuisine_update_column {
  cuisine_id = 'cuisine_id',
  game_id = 'game_id',
  id = 'id',
}

/**
 * @name game_cuisine_var_pop_fields
 * @type OBJECT
 */
export type game_cuisine_var_pop_fields = TypeData<
  t_game_cuisine_var_pop_fields
>;

/**
 * @name game_cuisine_var_samp_fields
 * @type OBJECT
 */
export type game_cuisine_var_samp_fields = TypeData<
  t_game_cuisine_var_samp_fields
>;

/**
 * @name game_cuisine_variance_fields
 * @type OBJECT
 */
export type game_cuisine_variance_fields = TypeData<
  t_game_cuisine_variance_fields
>;

/**
 * @name game_cuisines_filter_mode_enum
 * @type SCALAR
 */
export type game_cuisines_filter_mode_enum = TypeData<
  t_game_cuisines_filter_mode_enum
>;

/**
 * @name game_game_status_enum
 * @type SCALAR
 */
export type game_game_status_enum = TypeData<t_game_game_status_enum>;

/**
 * @name game_max_fields
 * @type OBJECT
 */
export type game_max_fields = TypeData<t_game_max_fields>;

/**
 * @name game_min_fields
 * @type OBJECT
 */
export type game_min_fields = TypeData<t_game_min_fields>;

/**
 * @name game_mutation_response
 * @type OBJECT
 */
export type game_mutation_response = TypeData<t_game_mutation_response>;

/**
 * @name game_player
 * @type OBJECT
 */
export type game_player = TypeData<t_game_player>;

/**
 * @name game_player_aggregate
 * @type OBJECT
 */
export type game_player_aggregate = TypeData<t_game_player_aggregate>;

/**
 * @name game_player_aggregate_fields
 * @type OBJECT
 */
export type game_player_aggregate_fields = TypeData<
  t_game_player_aggregate_fields
>;

/**
 * @name game_player_avg_fields
 * @type OBJECT
 */
export type game_player_avg_fields = TypeData<t_game_player_avg_fields>;

/**
 * @name game_player_constraint
 * @type ENUM
 */
export enum game_player_constraint {
  PK_67f6a08d68fa1e4c683736027eb = 'PK_67f6a08d68fa1e4c683736027eb',
}

/**
 * @name game_player_max_fields
 * @type OBJECT
 */
export type game_player_max_fields = TypeData<t_game_player_max_fields>;

/**
 * @name game_player_min_fields
 * @type OBJECT
 */
export type game_player_min_fields = TypeData<t_game_player_min_fields>;

/**
 * @name game_player_mutation_response
 * @type OBJECT
 */
export type game_player_mutation_response = TypeData<
  t_game_player_mutation_response
>;

/**
 * @name game_player_select_column
 * @type ENUM
 */
export enum game_player_select_column {
  game_id = 'game_id',
  id = 'id',
  user_id = 'user_id',
}

/**
 * @name game_player_stddev_fields
 * @type OBJECT
 */
export type game_player_stddev_fields = TypeData<t_game_player_stddev_fields>;

/**
 * @name game_player_stddev_pop_fields
 * @type OBJECT
 */
export type game_player_stddev_pop_fields = TypeData<
  t_game_player_stddev_pop_fields
>;

/**
 * @name game_player_stddev_samp_fields
 * @type OBJECT
 */
export type game_player_stddev_samp_fields = TypeData<
  t_game_player_stddev_samp_fields
>;

/**
 * @name game_player_sum_fields
 * @type OBJECT
 */
export type game_player_sum_fields = TypeData<t_game_player_sum_fields>;

/**
 * @name game_player_update_column
 * @type ENUM
 */
export enum game_player_update_column {
  game_id = 'game_id',
  id = 'id',
  user_id = 'user_id',
}

/**
 * @name game_player_var_pop_fields
 * @type OBJECT
 */
export type game_player_var_pop_fields = TypeData<t_game_player_var_pop_fields>;

/**
 * @name game_player_var_samp_fields
 * @type OBJECT
 */
export type game_player_var_samp_fields = TypeData<
  t_game_player_var_samp_fields
>;

/**
 * @name game_player_variance_fields
 * @type OBJECT
 */
export type game_player_variance_fields = TypeData<
  t_game_player_variance_fields
>;

/**
 * @name game_select_column
 * @type ENUM
 */
export enum game_select_column {
  address = 'address',
  cuisines_filter_mode = 'cuisines_filter_mode',
  eat_time = 'eat_time',
  game_creator_id = 'game_creator_id',
  game_status = 'game_status',
  id = 'id',
  latitude = 'latitude',
  longitude = 'longitude',
  menus_filter = 'menus_filter',
  mode = 'mode',
  prices = 'prices',
  search_magnitude = 'search_magnitude',
  time_created = 'time_created',
  unit_of_measure = 'unit_of_measure',
  winning_restaurant_id = 'winning_restaurant_id',
}

/**
 * @name game_stddev_fields
 * @type OBJECT
 */
export type game_stddev_fields = TypeData<t_game_stddev_fields>;

/**
 * @name game_stddev_pop_fields
 * @type OBJECT
 */
export type game_stddev_pop_fields = TypeData<t_game_stddev_pop_fields>;

/**
 * @name game_stddev_samp_fields
 * @type OBJECT
 */
export type game_stddev_samp_fields = TypeData<t_game_stddev_samp_fields>;

/**
 * @name game_sum_fields
 * @type OBJECT
 */
export type game_sum_fields = TypeData<t_game_sum_fields>;

/**
 * @name game_unit_of_measure_enum
 * @type SCALAR
 */
export type game_unit_of_measure_enum = TypeData<t_game_unit_of_measure_enum>;

/**
 * @name game_update_column
 * @type ENUM
 */
export enum game_update_column {
  address = 'address',
  cuisines_filter_mode = 'cuisines_filter_mode',
  eat_time = 'eat_time',
  game_creator_id = 'game_creator_id',
  game_status = 'game_status',
  id = 'id',
  latitude = 'latitude',
  longitude = 'longitude',
  menus_filter = 'menus_filter',
  mode = 'mode',
  prices = 'prices',
  search_magnitude = 'search_magnitude',
  time_created = 'time_created',
  unit_of_measure = 'unit_of_measure',
  winning_restaurant_id = 'winning_restaurant_id',
}

/**
 * @name game_var_pop_fields
 * @type OBJECT
 */
export type game_var_pop_fields = TypeData<t_game_var_pop_fields>;

/**
 * @name game_var_samp_fields
 * @type OBJECT
 */
export type game_var_samp_fields = TypeData<t_game_var_samp_fields>;

/**
 * @name game_variance_fields
 * @type OBJECT
 */
export type game_variance_fields = TypeData<t_game_variance_fields>;

/**
 * @name json
 * @type SCALAR
 */
export type json = TypeData<t_json>;

/**
 * @name log
 * @type OBJECT
 */
export type log = TypeData<t_log>;

/**
 * @name log_aggregate
 * @type OBJECT
 */
export type log_aggregate = TypeData<t_log_aggregate>;

/**
 * @name log_aggregate_fields
 * @type OBJECT
 */
export type log_aggregate_fields = TypeData<t_log_aggregate_fields>;

/**
 * @name log_avg_fields
 * @type OBJECT
 */
export type log_avg_fields = TypeData<t_log_avg_fields>;

/**
 * @name log_constraint
 * @type ENUM
 */
export enum log_constraint {
  PK_350604cbdf991d5930d9e618fbd = 'PK_350604cbdf991d5930d9e618fbd',
}

/**
 * @name log_max_fields
 * @type OBJECT
 */
export type log_max_fields = TypeData<t_log_max_fields>;

/**
 * @name log_min_fields
 * @type OBJECT
 */
export type log_min_fields = TypeData<t_log_min_fields>;

/**
 * @name log_mutation_response
 * @type OBJECT
 */
export type log_mutation_response = TypeData<t_log_mutation_response>;

/**
 * @name log_select_column
 * @type ENUM
 */
export enum log_select_column {
  date_created = 'date_created',
  id = 'id',
  name = 'name',
  payload = 'payload',
}

/**
 * @name log_stddev_fields
 * @type OBJECT
 */
export type log_stddev_fields = TypeData<t_log_stddev_fields>;

/**
 * @name log_stddev_pop_fields
 * @type OBJECT
 */
export type log_stddev_pop_fields = TypeData<t_log_stddev_pop_fields>;

/**
 * @name log_stddev_samp_fields
 * @type OBJECT
 */
export type log_stddev_samp_fields = TypeData<t_log_stddev_samp_fields>;

/**
 * @name log_sum_fields
 * @type OBJECT
 */
export type log_sum_fields = TypeData<t_log_sum_fields>;

/**
 * @name log_update_column
 * @type ENUM
 */
export enum log_update_column {
  date_created = 'date_created',
  id = 'id',
  name = 'name',
  payload = 'payload',
}

/**
 * @name log_var_pop_fields
 * @type OBJECT
 */
export type log_var_pop_fields = TypeData<t_log_var_pop_fields>;

/**
 * @name log_var_samp_fields
 * @type OBJECT
 */
export type log_var_samp_fields = TypeData<t_log_var_samp_fields>;

/**
 * @name log_variance_fields
 * @type OBJECT
 */
export type log_variance_fields = TypeData<t_log_variance_fields>;

/**
 * @name media_author
 * @type OBJECT
 */
export type media_author = TypeData<t_media_author>;

/**
 * @name media_author_aggregate
 * @type OBJECT
 */
export type media_author_aggregate = TypeData<t_media_author_aggregate>;

/**
 * @name media_author_aggregate_fields
 * @type OBJECT
 */
export type media_author_aggregate_fields = TypeData<
  t_media_author_aggregate_fields
>;

/**
 * @name media_author_avg_fields
 * @type OBJECT
 */
export type media_author_avg_fields = TypeData<t_media_author_avg_fields>;

/**
 * @name media_author_constraint
 * @type ENUM
 */
export enum media_author_constraint {
  PK_439ea773c817c560dd83cf133d7 = 'PK_439ea773c817c560dd83cf133d7',
}

/**
 * @name media_author_max_fields
 * @type OBJECT
 */
export type media_author_max_fields = TypeData<t_media_author_max_fields>;

/**
 * @name media_author_min_fields
 * @type OBJECT
 */
export type media_author_min_fields = TypeData<t_media_author_min_fields>;

/**
 * @name media_author_mutation_response
 * @type OBJECT
 */
export type media_author_mutation_response = TypeData<
  t_media_author_mutation_response
>;

/**
 * @name media_author_select_column
 * @type ENUM
 */
export enum media_author_select_column {
  email = 'email',
  facebook = 'facebook',
  id = 'id',
  instagram = 'instagram',
  name = 'name',
  personalWebsite = 'personalWebsite',
  twitter = 'twitter',
}

/**
 * @name media_author_stddev_fields
 * @type OBJECT
 */
export type media_author_stddev_fields = TypeData<t_media_author_stddev_fields>;

/**
 * @name media_author_stddev_pop_fields
 * @type OBJECT
 */
export type media_author_stddev_pop_fields = TypeData<
  t_media_author_stddev_pop_fields
>;

/**
 * @name media_author_stddev_samp_fields
 * @type OBJECT
 */
export type media_author_stddev_samp_fields = TypeData<
  t_media_author_stddev_samp_fields
>;

/**
 * @name media_author_sum_fields
 * @type OBJECT
 */
export type media_author_sum_fields = TypeData<t_media_author_sum_fields>;

/**
 * @name media_author_update_column
 * @type ENUM
 */
export enum media_author_update_column {
  email = 'email',
  facebook = 'facebook',
  id = 'id',
  instagram = 'instagram',
  name = 'name',
  personalWebsite = 'personalWebsite',
  twitter = 'twitter',
}

/**
 * @name media_author_var_pop_fields
 * @type OBJECT
 */
export type media_author_var_pop_fields = TypeData<
  t_media_author_var_pop_fields
>;

/**
 * @name media_author_var_samp_fields
 * @type OBJECT
 */
export type media_author_var_samp_fields = TypeData<
  t_media_author_var_samp_fields
>;

/**
 * @name media_author_variance_fields
 * @type OBJECT
 */
export type media_author_variance_fields = TypeData<
  t_media_author_variance_fields
>;

/**
 * @name menu
 * @type OBJECT
 */
export type menu = TypeData<t_menu>;

/**
 * @name menu_aggregate
 * @type OBJECT
 */
export type menu_aggregate = TypeData<t_menu_aggregate>;

/**
 * @name menu_aggregate_fields
 * @type OBJECT
 */
export type menu_aggregate_fields = TypeData<t_menu_aggregate_fields>;

/**
 * @name menu_avg_fields
 * @type OBJECT
 */
export type menu_avg_fields = TypeData<t_menu_avg_fields>;

/**
 * @name menu_constraint
 * @type ENUM
 */
export enum menu_constraint {
  PK_35b2a8f47d153ff7a41860cceeb = 'PK_35b2a8f47d153ff7a41860cceeb',
}

/**
 * @name menu_max_fields
 * @type OBJECT
 */
export type menu_max_fields = TypeData<t_menu_max_fields>;

/**
 * @name menu_min_fields
 * @type OBJECT
 */
export type menu_min_fields = TypeData<t_menu_min_fields>;

/**
 * @name menu_mutation_response
 * @type OBJECT
 */
export type menu_mutation_response = TypeData<t_menu_mutation_response>;

/**
 * @name menu_section
 * @type OBJECT
 */
export type menu_section = TypeData<t_menu_section>;

/**
 * @name menu_section_aggregate
 * @type OBJECT
 */
export type menu_section_aggregate = TypeData<t_menu_section_aggregate>;

/**
 * @name menu_section_aggregate_fields
 * @type OBJECT
 */
export type menu_section_aggregate_fields = TypeData<
  t_menu_section_aggregate_fields
>;

/**
 * @name menu_section_avg_fields
 * @type OBJECT
 */
export type menu_section_avg_fields = TypeData<t_menu_section_avg_fields>;

/**
 * @name menu_section_constraint
 * @type ENUM
 */
export enum menu_section_constraint {
  PK_bdb64b3aaf192ece146d3d232f7 = 'PK_bdb64b3aaf192ece146d3d232f7',
}

/**
 * @name menu_section_max_fields
 * @type OBJECT
 */
export type menu_section_max_fields = TypeData<t_menu_section_max_fields>;

/**
 * @name menu_section_min_fields
 * @type OBJECT
 */
export type menu_section_min_fields = TypeData<t_menu_section_min_fields>;

/**
 * @name menu_section_mutation_response
 * @type OBJECT
 */
export type menu_section_mutation_response = TypeData<
  t_menu_section_mutation_response
>;

/**
 * @name menu_section_select_column
 * @type ENUM
 */
export enum menu_section_select_column {
  id = 'id',
  is_dessert = 'is_dessert',
  is_drink = 'is_drink',
  is_game_ready = 'is_game_ready',
  is_kids = 'is_kids',
  name = 'name',
}

/**
 * @name menu_section_stddev_fields
 * @type OBJECT
 */
export type menu_section_stddev_fields = TypeData<t_menu_section_stddev_fields>;

/**
 * @name menu_section_stddev_pop_fields
 * @type OBJECT
 */
export type menu_section_stddev_pop_fields = TypeData<
  t_menu_section_stddev_pop_fields
>;

/**
 * @name menu_section_stddev_samp_fields
 * @type OBJECT
 */
export type menu_section_stddev_samp_fields = TypeData<
  t_menu_section_stddev_samp_fields
>;

/**
 * @name menu_section_sum_fields
 * @type OBJECT
 */
export type menu_section_sum_fields = TypeData<t_menu_section_sum_fields>;

/**
 * @name menu_section_update_column
 * @type ENUM
 */
export enum menu_section_update_column {
  id = 'id',
  is_dessert = 'is_dessert',
  is_drink = 'is_drink',
  is_game_ready = 'is_game_ready',
  is_kids = 'is_kids',
  name = 'name',
}

/**
 * @name menu_section_var_pop_fields
 * @type OBJECT
 */
export type menu_section_var_pop_fields = TypeData<
  t_menu_section_var_pop_fields
>;

/**
 * @name menu_section_var_samp_fields
 * @type OBJECT
 */
export type menu_section_var_samp_fields = TypeData<
  t_menu_section_var_samp_fields
>;

/**
 * @name menu_section_variance_fields
 * @type OBJECT
 */
export type menu_section_variance_fields = TypeData<
  t_menu_section_variance_fields
>;

/**
 * @name menu_select_column
 * @type ENUM
 */
export enum menu_select_column {
  id = 'id',
  is_game_ready = 'is_game_ready',
  name = 'name',
}

/**
 * @name menu_stddev_fields
 * @type OBJECT
 */
export type menu_stddev_fields = TypeData<t_menu_stddev_fields>;

/**
 * @name menu_stddev_pop_fields
 * @type OBJECT
 */
export type menu_stddev_pop_fields = TypeData<t_menu_stddev_pop_fields>;

/**
 * @name menu_stddev_samp_fields
 * @type OBJECT
 */
export type menu_stddev_samp_fields = TypeData<t_menu_stddev_samp_fields>;

/**
 * @name menu_sum_fields
 * @type OBJECT
 */
export type menu_sum_fields = TypeData<t_menu_sum_fields>;

/**
 * @name menu_update_column
 * @type ENUM
 */
export enum menu_update_column {
  id = 'id',
  is_game_ready = 'is_game_ready',
  name = 'name',
}

/**
 * @name menu_var_pop_fields
 * @type OBJECT
 */
export type menu_var_pop_fields = TypeData<t_menu_var_pop_fields>;

/**
 * @name menu_var_samp_fields
 * @type OBJECT
 */
export type menu_var_samp_fields = TypeData<t_menu_var_samp_fields>;

/**
 * @name menu_variance_fields
 * @type OBJECT
 */
export type menu_variance_fields = TypeData<t_menu_variance_fields>;

/**
 * @name metric
 * @type OBJECT
 */
export type metric = TypeData<t_metric>;

/**
 * @name metric_aggregate
 * @type OBJECT
 */
export type metric_aggregate = TypeData<t_metric_aggregate>;

/**
 * @name metric_aggregate_fields
 * @type OBJECT
 */
export type metric_aggregate_fields = TypeData<t_metric_aggregate_fields>;

/**
 * @name metric_avg_fields
 * @type OBJECT
 */
export type metric_avg_fields = TypeData<t_metric_avg_fields>;

/**
 * @name metric_constraint
 * @type ENUM
 */
export enum metric_constraint {
  PK_7d24c075ea2926dd32bd1c534ce = 'PK_7d24c075ea2926dd32bd1c534ce',
}

/**
 * @name metric_max_fields
 * @type OBJECT
 */
export type metric_max_fields = TypeData<t_metric_max_fields>;

/**
 * @name metric_min_fields
 * @type OBJECT
 */
export type metric_min_fields = TypeData<t_metric_min_fields>;

/**
 * @name metric_mutation_response
 * @type OBJECT
 */
export type metric_mutation_response = TypeData<t_metric_mutation_response>;

/**
 * @name metric_select_column
 * @type ENUM
 */
export enum metric_select_column {
  created_at = 'created_at',
  id = 'id',
  name = 'name',
  payload = 'payload',
}

/**
 * @name metric_stddev_fields
 * @type OBJECT
 */
export type metric_stddev_fields = TypeData<t_metric_stddev_fields>;

/**
 * @name metric_stddev_pop_fields
 * @type OBJECT
 */
export type metric_stddev_pop_fields = TypeData<t_metric_stddev_pop_fields>;

/**
 * @name metric_stddev_samp_fields
 * @type OBJECT
 */
export type metric_stddev_samp_fields = TypeData<t_metric_stddev_samp_fields>;

/**
 * @name metric_sum_fields
 * @type OBJECT
 */
export type metric_sum_fields = TypeData<t_metric_sum_fields>;

/**
 * @name metric_update_column
 * @type ENUM
 */
export enum metric_update_column {
  created_at = 'created_at',
  id = 'id',
  name = 'name',
  payload = 'payload',
}

/**
 * @name metric_var_pop_fields
 * @type OBJECT
 */
export type metric_var_pop_fields = TypeData<t_metric_var_pop_fields>;

/**
 * @name metric_var_samp_fields
 * @type OBJECT
 */
export type metric_var_samp_fields = TypeData<t_metric_var_samp_fields>;

/**
 * @name metric_variance_fields
 * @type OBJECT
 */
export type metric_variance_fields = TypeData<t_metric_variance_fields>;

/**
 * @name mutation_root
 * @type OBJECT
 */
export type mutation_root = TypeData<t_mutation_root>;

/**
 * @name order_by
 * @type ENUM
 */
export enum order_by {
  asc = 'asc',
  asc_nulls_first = 'asc_nulls_first',
  asc_nulls_last = 'asc_nulls_last',
  desc = 'desc',
  desc_nulls_first = 'desc_nulls_first',
  desc_nulls_last = 'desc_nulls_last',
}

/**
 * @name query_root
 * @type OBJECT
 */
export type query_root = TypeData<t_query_root>;

/**
 * @name restaurant
 * @type OBJECT
 */
export type restaurant = TypeData<t_restaurant>;

/**
 * @name restaurant_aggregate
 * @type OBJECT
 */
export type restaurant_aggregate = TypeData<t_restaurant_aggregate>;

/**
 * @name restaurant_aggregate_fields
 * @type OBJECT
 */
export type restaurant_aggregate_fields = TypeData<
  t_restaurant_aggregate_fields
>;

/**
 * @name restaurant_avg_fields
 * @type OBJECT
 */
export type restaurant_avg_fields = TypeData<t_restaurant_avg_fields>;

/**
 * @name restaurant_chain
 * @type OBJECT
 */
export type restaurant_chain = TypeData<t_restaurant_chain>;

/**
 * @name restaurant_chain_aggregate
 * @type OBJECT
 */
export type restaurant_chain_aggregate = TypeData<t_restaurant_chain_aggregate>;

/**
 * @name restaurant_chain_aggregate_fields
 * @type OBJECT
 */
export type restaurant_chain_aggregate_fields = TypeData<
  t_restaurant_chain_aggregate_fields
>;

/**
 * @name restaurant_chain_avg_fields
 * @type OBJECT
 */
export type restaurant_chain_avg_fields = TypeData<
  t_restaurant_chain_avg_fields
>;

/**
 * @name restaurant_chain_constraint
 * @type ENUM
 */
export enum restaurant_chain_constraint {
  PK_d2a509385c30a3ea44dc032009e = 'PK_d2a509385c30a3ea44dc032009e',
}

/**
 * @name restaurant_chain_max_fields
 * @type OBJECT
 */
export type restaurant_chain_max_fields = TypeData<
  t_restaurant_chain_max_fields
>;

/**
 * @name restaurant_chain_min_fields
 * @type OBJECT
 */
export type restaurant_chain_min_fields = TypeData<
  t_restaurant_chain_min_fields
>;

/**
 * @name restaurant_chain_mutation_response
 * @type OBJECT
 */
export type restaurant_chain_mutation_response = TypeData<
  t_restaurant_chain_mutation_response
>;

/**
 * @name restaurant_chain_select_column
 * @type ENUM
 */
export enum restaurant_chain_select_column {
  id = 'id',
  name = 'name',
}

/**
 * @name restaurant_chain_stddev_fields
 * @type OBJECT
 */
export type restaurant_chain_stddev_fields = TypeData<
  t_restaurant_chain_stddev_fields
>;

/**
 * @name restaurant_chain_stddev_pop_fields
 * @type OBJECT
 */
export type restaurant_chain_stddev_pop_fields = TypeData<
  t_restaurant_chain_stddev_pop_fields
>;

/**
 * @name restaurant_chain_stddev_samp_fields
 * @type OBJECT
 */
export type restaurant_chain_stddev_samp_fields = TypeData<
  t_restaurant_chain_stddev_samp_fields
>;

/**
 * @name restaurant_chain_sum_fields
 * @type OBJECT
 */
export type restaurant_chain_sum_fields = TypeData<
  t_restaurant_chain_sum_fields
>;

/**
 * @name restaurant_chain_update_column
 * @type ENUM
 */
export enum restaurant_chain_update_column {
  id = 'id',
  name = 'name',
}

/**
 * @name restaurant_chain_var_pop_fields
 * @type OBJECT
 */
export type restaurant_chain_var_pop_fields = TypeData<
  t_restaurant_chain_var_pop_fields
>;

/**
 * @name restaurant_chain_var_samp_fields
 * @type OBJECT
 */
export type restaurant_chain_var_samp_fields = TypeData<
  t_restaurant_chain_var_samp_fields
>;

/**
 * @name restaurant_chain_variance_fields
 * @type OBJECT
 */
export type restaurant_chain_variance_fields = TypeData<
  t_restaurant_chain_variance_fields
>;

/**
 * @name restaurant_constraint
 * @type ENUM
 */
export enum restaurant_constraint {
  PK_649e250d8b8165cb406d99aa30f = 'PK_649e250d8b8165cb406d99aa30f',
}

/**
 * @name restaurant_cuisine
 * @type OBJECT
 */
export type restaurant_cuisine = TypeData<t_restaurant_cuisine>;

/**
 * @name restaurant_cuisine_aggregate
 * @type OBJECT
 */
export type restaurant_cuisine_aggregate = TypeData<
  t_restaurant_cuisine_aggregate
>;

/**
 * @name restaurant_cuisine_aggregate_fields
 * @type OBJECT
 */
export type restaurant_cuisine_aggregate_fields = TypeData<
  t_restaurant_cuisine_aggregate_fields
>;

/**
 * @name restaurant_cuisine_avg_fields
 * @type OBJECT
 */
export type restaurant_cuisine_avg_fields = TypeData<
  t_restaurant_cuisine_avg_fields
>;

/**
 * @name restaurant_cuisine_constraint
 * @type ENUM
 */
export enum restaurant_cuisine_constraint {
  PK_f9eb1abeb371c2225460d6cafad = 'PK_f9eb1abeb371c2225460d6cafad',
}

/**
 * @name restaurant_cuisine_max_fields
 * @type OBJECT
 */
export type restaurant_cuisine_max_fields = TypeData<
  t_restaurant_cuisine_max_fields
>;

/**
 * @name restaurant_cuisine_min_fields
 * @type OBJECT
 */
export type restaurant_cuisine_min_fields = TypeData<
  t_restaurant_cuisine_min_fields
>;

/**
 * @name restaurant_cuisine_mutation_response
 * @type OBJECT
 */
export type restaurant_cuisine_mutation_response = TypeData<
  t_restaurant_cuisine_mutation_response
>;

/**
 * @name restaurant_cuisine_select_column
 * @type ENUM
 */
export enum restaurant_cuisine_select_column {
  cuisine_id = 'cuisine_id',
  id = 'id',
  restaurant_id = 'restaurant_id',
}

/**
 * @name restaurant_cuisine_stddev_fields
 * @type OBJECT
 */
export type restaurant_cuisine_stddev_fields = TypeData<
  t_restaurant_cuisine_stddev_fields
>;

/**
 * @name restaurant_cuisine_stddev_pop_fields
 * @type OBJECT
 */
export type restaurant_cuisine_stddev_pop_fields = TypeData<
  t_restaurant_cuisine_stddev_pop_fields
>;

/**
 * @name restaurant_cuisine_stddev_samp_fields
 * @type OBJECT
 */
export type restaurant_cuisine_stddev_samp_fields = TypeData<
  t_restaurant_cuisine_stddev_samp_fields
>;

/**
 * @name restaurant_cuisine_sum_fields
 * @type OBJECT
 */
export type restaurant_cuisine_sum_fields = TypeData<
  t_restaurant_cuisine_sum_fields
>;

/**
 * @name restaurant_cuisine_update_column
 * @type ENUM
 */
export enum restaurant_cuisine_update_column {
  cuisine_id = 'cuisine_id',
  id = 'id',
  restaurant_id = 'restaurant_id',
}

/**
 * @name restaurant_cuisine_var_pop_fields
 * @type OBJECT
 */
export type restaurant_cuisine_var_pop_fields = TypeData<
  t_restaurant_cuisine_var_pop_fields
>;

/**
 * @name restaurant_cuisine_var_samp_fields
 * @type OBJECT
 */
export type restaurant_cuisine_var_samp_fields = TypeData<
  t_restaurant_cuisine_var_samp_fields
>;

/**
 * @name restaurant_cuisine_variance_fields
 * @type OBJECT
 */
export type restaurant_cuisine_variance_fields = TypeData<
  t_restaurant_cuisine_variance_fields
>;

/**
 * @name restaurant_item
 * @type OBJECT
 */
export type restaurant_item = TypeData<t_restaurant_item>;

/**
 * @name restaurant_item_aggregate
 * @type OBJECT
 */
export type restaurant_item_aggregate = TypeData<t_restaurant_item_aggregate>;

/**
 * @name restaurant_item_aggregate_fields
 * @type OBJECT
 */
export type restaurant_item_aggregate_fields = TypeData<
  t_restaurant_item_aggregate_fields
>;

/**
 * @name restaurant_item_avg_fields
 * @type OBJECT
 */
export type restaurant_item_avg_fields = TypeData<t_restaurant_item_avg_fields>;

/**
 * @name restaurant_item_constraint
 * @type ENUM
 */
export enum restaurant_item_constraint {
  PK_325a79252195bbf38d80dd9e0d6 = 'PK_325a79252195bbf38d80dd9e0d6',
}

/**
 * @name restaurant_item_max_fields
 * @type OBJECT
 */
export type restaurant_item_max_fields = TypeData<t_restaurant_item_max_fields>;

/**
 * @name restaurant_item_min_fields
 * @type OBJECT
 */
export type restaurant_item_min_fields = TypeData<t_restaurant_item_min_fields>;

/**
 * @name restaurant_item_mutation_response
 * @type OBJECT
 */
export type restaurant_item_mutation_response = TypeData<
  t_restaurant_item_mutation_response
>;

/**
 * @name restaurant_item_select_column
 * @type ENUM
 */
export enum restaurant_item_select_column {
  food_item_id = 'food_item_id',
  id = 'id',
  is_game_ready = 'is_game_ready',
  menu_id = 'menu_id',
  menu_section_id = 'menu_section_id',
  price = 'price',
  restaurant_id = 'restaurant_id',
  times_served = 'times_served',
}

/**
 * @name restaurant_item_stddev_fields
 * @type OBJECT
 */
export type restaurant_item_stddev_fields = TypeData<
  t_restaurant_item_stddev_fields
>;

/**
 * @name restaurant_item_stddev_pop_fields
 * @type OBJECT
 */
export type restaurant_item_stddev_pop_fields = TypeData<
  t_restaurant_item_stddev_pop_fields
>;

/**
 * @name restaurant_item_stddev_samp_fields
 * @type OBJECT
 */
export type restaurant_item_stddev_samp_fields = TypeData<
  t_restaurant_item_stddev_samp_fields
>;

/**
 * @name restaurant_item_sum_fields
 * @type OBJECT
 */
export type restaurant_item_sum_fields = TypeData<t_restaurant_item_sum_fields>;

/**
 * @name restaurant_item_update_column
 * @type ENUM
 */
export enum restaurant_item_update_column {
  food_item_id = 'food_item_id',
  id = 'id',
  is_game_ready = 'is_game_ready',
  menu_id = 'menu_id',
  menu_section_id = 'menu_section_id',
  price = 'price',
  restaurant_id = 'restaurant_id',
  times_served = 'times_served',
}

/**
 * @name restaurant_item_var_pop_fields
 * @type OBJECT
 */
export type restaurant_item_var_pop_fields = TypeData<
  t_restaurant_item_var_pop_fields
>;

/**
 * @name restaurant_item_var_samp_fields
 * @type OBJECT
 */
export type restaurant_item_var_samp_fields = TypeData<
  t_restaurant_item_var_samp_fields
>;

/**
 * @name restaurant_item_variance_fields
 * @type OBJECT
 */
export type restaurant_item_variance_fields = TypeData<
  t_restaurant_item_variance_fields
>;

/**
 * @name restaurant_max_fields
 * @type OBJECT
 */
export type restaurant_max_fields = TypeData<t_restaurant_max_fields>;

/**
 * @name restaurant_min_fields
 * @type OBJECT
 */
export type restaurant_min_fields = TypeData<t_restaurant_min_fields>;

/**
 * @name restaurant_mutation_response
 * @type OBJECT
 */
export type restaurant_mutation_response = TypeData<
  t_restaurant_mutation_response
>;

/**
 * @name restaurant_select_column
 * @type ENUM
 */
export enum restaurant_select_column {
  chain_id = 'chain_id',
  city = 'city',
  id = 'id',
  is_game_ready = 'is_game_ready',
  latitude = 'latitude',
  longitude = 'longitude',
  name = 'name',
  place_id = 'place_id',
  price = 'price',
  state = 'state',
  street_address = 'street_address',
  takeout_url = 'takeout_url',
  zip_code = 'zip_code',
}

/**
 * @name restaurant_stddev_fields
 * @type OBJECT
 */
export type restaurant_stddev_fields = TypeData<t_restaurant_stddev_fields>;

/**
 * @name restaurant_stddev_pop_fields
 * @type OBJECT
 */
export type restaurant_stddev_pop_fields = TypeData<
  t_restaurant_stddev_pop_fields
>;

/**
 * @name restaurant_stddev_samp_fields
 * @type OBJECT
 */
export type restaurant_stddev_samp_fields = TypeData<
  t_restaurant_stddev_samp_fields
>;

/**
 * @name restaurant_sum_fields
 * @type OBJECT
 */
export type restaurant_sum_fields = TypeData<t_restaurant_sum_fields>;

/**
 * @name restaurant_update_column
 * @type ENUM
 */
export enum restaurant_update_column {
  chain_id = 'chain_id',
  city = 'city',
  id = 'id',
  is_game_ready = 'is_game_ready',
  latitude = 'latitude',
  longitude = 'longitude',
  name = 'name',
  place_id = 'place_id',
  price = 'price',
  state = 'state',
  street_address = 'street_address',
  takeout_url = 'takeout_url',
  zip_code = 'zip_code',
}

/**
 * @name restaurant_var_pop_fields
 * @type OBJECT
 */
export type restaurant_var_pop_fields = TypeData<t_restaurant_var_pop_fields>;

/**
 * @name restaurant_var_samp_fields
 * @type OBJECT
 */
export type restaurant_var_samp_fields = TypeData<t_restaurant_var_samp_fields>;

/**
 * @name restaurant_variance_fields
 * @type OBJECT
 */
export type restaurant_variance_fields = TypeData<t_restaurant_variance_fields>;

/**
 * @name restaurants_visited_entity
 * @type OBJECT
 */
export type restaurants_visited_entity = TypeData<t_restaurants_visited_entity>;

/**
 * @name restaurants_visited_entity_aggregate
 * @type OBJECT
 */
export type restaurants_visited_entity_aggregate = TypeData<
  t_restaurants_visited_entity_aggregate
>;

/**
 * @name restaurants_visited_entity_aggregate_fields
 * @type OBJECT
 */
export type restaurants_visited_entity_aggregate_fields = TypeData<
  t_restaurants_visited_entity_aggregate_fields
>;

/**
 * @name restaurants_visited_entity_avg_fields
 * @type OBJECT
 */
export type restaurants_visited_entity_avg_fields = TypeData<
  t_restaurants_visited_entity_avg_fields
>;

/**
 * @name restaurants_visited_entity_constraint
 * @type ENUM
 */
export enum restaurants_visited_entity_constraint {
  PK_3ef088a9d0c887ec97a9b212b1b = 'PK_3ef088a9d0c887ec97a9b212b1b',
  REL_56b99d348c4606c92bdf638804 = 'REL_56b99d348c4606c92bdf638804',
}

/**
 * @name restaurants_visited_entity_max_fields
 * @type OBJECT
 */
export type restaurants_visited_entity_max_fields = TypeData<
  t_restaurants_visited_entity_max_fields
>;

/**
 * @name restaurants_visited_entity_min_fields
 * @type OBJECT
 */
export type restaurants_visited_entity_min_fields = TypeData<
  t_restaurants_visited_entity_min_fields
>;

/**
 * @name restaurants_visited_entity_mutation_response
 * @type OBJECT
 */
export type restaurants_visited_entity_mutation_response = TypeData<
  t_restaurants_visited_entity_mutation_response
>;

/**
 * @name restaurants_visited_entity_select_column
 * @type ENUM
 */
export enum restaurants_visited_entity_select_column {
  id = 'id',
  numTimesEaten = 'numTimesEaten',
  restaurantId = 'restaurantId',
}

/**
 * @name restaurants_visited_entity_stddev_fields
 * @type OBJECT
 */
export type restaurants_visited_entity_stddev_fields = TypeData<
  t_restaurants_visited_entity_stddev_fields
>;

/**
 * @name restaurants_visited_entity_stddev_pop_fields
 * @type OBJECT
 */
export type restaurants_visited_entity_stddev_pop_fields = TypeData<
  t_restaurants_visited_entity_stddev_pop_fields
>;

/**
 * @name restaurants_visited_entity_stddev_samp_fields
 * @type OBJECT
 */
export type restaurants_visited_entity_stddev_samp_fields = TypeData<
  t_restaurants_visited_entity_stddev_samp_fields
>;

/**
 * @name restaurants_visited_entity_sum_fields
 * @type OBJECT
 */
export type restaurants_visited_entity_sum_fields = TypeData<
  t_restaurants_visited_entity_sum_fields
>;

/**
 * @name restaurants_visited_entity_update_column
 * @type ENUM
 */
export enum restaurants_visited_entity_update_column {
  id = 'id',
  numTimesEaten = 'numTimesEaten',
  restaurantId = 'restaurantId',
}

/**
 * @name restaurants_visited_entity_var_pop_fields
 * @type OBJECT
 */
export type restaurants_visited_entity_var_pop_fields = TypeData<
  t_restaurants_visited_entity_var_pop_fields
>;

/**
 * @name restaurants_visited_entity_var_samp_fields
 * @type OBJECT
 */
export type restaurants_visited_entity_var_samp_fields = TypeData<
  t_restaurants_visited_entity_var_samp_fields
>;

/**
 * @name restaurants_visited_entity_variance_fields
 * @type OBJECT
 */
export type restaurants_visited_entity_variance_fields = TypeData<
  t_restaurants_visited_entity_variance_fields
>;

/**
 * @name subscription_root
 * @type OBJECT
 */
export type subscription_root = TypeData<t_subscription_root>;

/**
 * @name test_table
 * @type OBJECT
 */
export type test_table = TypeData<t_test_table>;

/**
 * @name test_table_aggregate
 * @type OBJECT
 */
export type test_table_aggregate = TypeData<t_test_table_aggregate>;

/**
 * @name test_table_aggregate_fields
 * @type OBJECT
 */
export type test_table_aggregate_fields = TypeData<
  t_test_table_aggregate_fields
>;

/**
 * @name test_table_constraint
 * @type ENUM
 */
export enum test_table_constraint {
  test_table_pkey = 'test_table_pkey',
}

/**
 * @name test_table_max_fields
 * @type OBJECT
 */
export type test_table_max_fields = TypeData<t_test_table_max_fields>;

/**
 * @name test_table_min_fields
 * @type OBJECT
 */
export type test_table_min_fields = TypeData<t_test_table_min_fields>;

/**
 * @name test_table_mutation_response
 * @type OBJECT
 */
export type test_table_mutation_response = TypeData<
  t_test_table_mutation_response
>;

/**
 * @name test_table_select_column
 * @type ENUM
 */
export enum test_table_select_column {
  id = 'id',
  testcolumn = 'testcolumn',
}

/**
 * @name test_table_update_column
 * @type ENUM
 */
export enum test_table_update_column {
  id = 'id',
  testcolumn = 'testcolumn',
}

/**
 * @name timestamp
 * @type SCALAR
 */
export type timestamp = TypeData<t_timestamp>;

/**
 * @name timestamptz
 * @type SCALAR
 */
export type timestamptz = TypeData<t_timestamptz>;

/**
 * @name user
 * @type OBJECT
 */
export type user = TypeData<t_user>;

/**
 * @name user_aggregate
 * @type OBJECT
 */
export type user_aggregate = TypeData<t_user_aggregate>;

/**
 * @name user_aggregate_fields
 * @type OBJECT
 */
export type user_aggregate_fields = TypeData<t_user_aggregate_fields>;

/**
 * @name user_avg_fields
 * @type OBJECT
 */
export type user_avg_fields = TypeData<t_user_avg_fields>;

/**
 * @name user_constraint
 * @type ENUM
 */
export enum user_constraint {
  PK_cace4a159ff9f2512dd42373760 = 'PK_cace4a159ff9f2512dd42373760',
  UQ_01eea41349b6c9275aec646eee0 = 'UQ_01eea41349b6c9275aec646eee0',
  UQ_78a916df40e02a9deb1c4b75edb = 'UQ_78a916df40e02a9deb1c4b75edb',
  UQ_e12875dfb3b1d92d7d7c5377e22 = 'UQ_e12875dfb3b1d92d7d7c5377e22',
}

/**
 * @name user_device
 * @type OBJECT
 */
export type user_device = TypeData<t_user_device>;

/**
 * @name user_device_aggregate
 * @type OBJECT
 */
export type user_device_aggregate = TypeData<t_user_device_aggregate>;

/**
 * @name user_device_aggregate_fields
 * @type OBJECT
 */
export type user_device_aggregate_fields = TypeData<
  t_user_device_aggregate_fields
>;

/**
 * @name user_device_avg_fields
 * @type OBJECT
 */
export type user_device_avg_fields = TypeData<t_user_device_avg_fields>;

/**
 * @name user_device_constraint
 * @type ENUM
 */
export enum user_device_constraint {
  PK_0232591a0b48e1eb92f3ec5d0d1 = 'PK_0232591a0b48e1eb92f3ec5d0d1',
  UQ_16dca93ee85ad8b976fdc6cb1a0 = 'UQ_16dca93ee85ad8b976fdc6cb1a0',
}

/**
 * @name user_device_max_fields
 * @type OBJECT
 */
export type user_device_max_fields = TypeData<t_user_device_max_fields>;

/**
 * @name user_device_min_fields
 * @type OBJECT
 */
export type user_device_min_fields = TypeData<t_user_device_min_fields>;

/**
 * @name user_device_mutation_response
 * @type OBJECT
 */
export type user_device_mutation_response = TypeData<
  t_user_device_mutation_response
>;

/**
 * @name user_device_select_column
 * @type ENUM
 */
export enum user_device_select_column {
  active = 'active',
  createdOn = 'createdOn',
  device_token = 'device_token',
  id = 'id',
  user_id = 'user_id',
}

/**
 * @name user_device_stddev_fields
 * @type OBJECT
 */
export type user_device_stddev_fields = TypeData<t_user_device_stddev_fields>;

/**
 * @name user_device_stddev_pop_fields
 * @type OBJECT
 */
export type user_device_stddev_pop_fields = TypeData<
  t_user_device_stddev_pop_fields
>;

/**
 * @name user_device_stddev_samp_fields
 * @type OBJECT
 */
export type user_device_stddev_samp_fields = TypeData<
  t_user_device_stddev_samp_fields
>;

/**
 * @name user_device_sum_fields
 * @type OBJECT
 */
export type user_device_sum_fields = TypeData<t_user_device_sum_fields>;

/**
 * @name user_device_update_column
 * @type ENUM
 */
export enum user_device_update_column {
  active = 'active',
  createdOn = 'createdOn',
  device_token = 'device_token',
  id = 'id',
  user_id = 'user_id',
}

/**
 * @name user_device_var_pop_fields
 * @type OBJECT
 */
export type user_device_var_pop_fields = TypeData<t_user_device_var_pop_fields>;

/**
 * @name user_device_var_samp_fields
 * @type OBJECT
 */
export type user_device_var_samp_fields = TypeData<
  t_user_device_var_samp_fields
>;

/**
 * @name user_device_variance_fields
 * @type OBJECT
 */
export type user_device_variance_fields = TypeData<
  t_user_device_variance_fields
>;

/**
 * @name user_diet_enum
 * @type SCALAR
 */
export type user_diet_enum = TypeData<t_user_diet_enum>;

/**
 * @name user_max_fields
 * @type OBJECT
 */
export type user_max_fields = TypeData<t_user_max_fields>;

/**
 * @name user_min_fields
 * @type OBJECT
 */
export type user_min_fields = TypeData<t_user_min_fields>;

/**
 * @name user_mutation_response
 * @type OBJECT
 */
export type user_mutation_response = TypeData<t_user_mutation_response>;

/**
 * @name user_select_column
 * @type ENUM
 */
export enum user_select_column {
  active = 'active',
  animal_products = 'animal_products',
  beef = 'beef',
  chicken = 'chicken',
  created_at = 'created_at',
  diet = 'diet',
  email = 'email',
  exotic = 'exotic',
  first_name = 'first_name',
  fish = 'fish',
  gluten = 'gluten',
  id = 'id',
  last_name = 'last_name',
  password = 'password',
  phone_number = 'phone_number',
  pork = 'pork',
  shellfish = 'shellfish',
  turkey = 'turkey',
  username = 'username',
  vegan = 'vegan',
  vegetables = 'vegetables',
  vegetarian = 'vegetarian',
}

/**
 * @name user_stddev_fields
 * @type OBJECT
 */
export type user_stddev_fields = TypeData<t_user_stddev_fields>;

/**
 * @name user_stddev_pop_fields
 * @type OBJECT
 */
export type user_stddev_pop_fields = TypeData<t_user_stddev_pop_fields>;

/**
 * @name user_stddev_samp_fields
 * @type OBJECT
 */
export type user_stddev_samp_fields = TypeData<t_user_stddev_samp_fields>;

/**
 * @name user_sum_fields
 * @type OBJECT
 */
export type user_sum_fields = TypeData<t_user_sum_fields>;

/**
 * @name user_update_column
 * @type ENUM
 */
export enum user_update_column {
  active = 'active',
  animal_products = 'animal_products',
  beef = 'beef',
  chicken = 'chicken',
  created_at = 'created_at',
  diet = 'diet',
  email = 'email',
  exotic = 'exotic',
  first_name = 'first_name',
  fish = 'fish',
  gluten = 'gluten',
  id = 'id',
  last_name = 'last_name',
  password = 'password',
  phone_number = 'phone_number',
  pork = 'pork',
  shellfish = 'shellfish',
  turkey = 'turkey',
  username = 'username',
  vegan = 'vegan',
  vegetables = 'vegetables',
  vegetarian = 'vegetarian',
}

/**
 * @name user_var_pop_fields
 * @type OBJECT
 */
export type user_var_pop_fields = TypeData<t_user_var_pop_fields>;

/**
 * @name user_var_samp_fields
 * @type OBJECT
 */
export type user_var_samp_fields = TypeData<t_user_var_samp_fields>;

/**
 * @name user_variance_fields
 * @type OBJECT
 */
export type user_variance_fields = TypeData<t_user_variance_fields>;

/**
 * @name uuid
 * @type SCALAR
 */
export type uuid = TypeData<t_uuid>;
