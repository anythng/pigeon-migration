// @ts-nocheck
import * as extensions from '../extensions';
import { lazyGetters } from '@gqless/utils';
import {
  ScalarNode,
  InputNode,
  InputNodeField,
  ArrayNode,
  ObjectNode,
  FieldNode,
  EnumNode,
  Arguments,
  ArgumentsField,
} from 'gqless';

export const schema = {
  get Boolean() {
    return new ScalarNode({
      name: 'Boolean',
      extension: ((extensions as any) || {}).Boolean,
    });
  },
  get Boolean_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _gt() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _gte() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.Boolean, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lte() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _neq() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.Boolean, true), true);
        },
      },
      { name: 'Boolean_comparison_exp' },
    );
  },
  get Float() {
    return new ScalarNode({
      name: 'Float',
      extension: ((extensions as any) || {}).Float,
    });
  },
  get ID() {
    return new ScalarNode({
      name: 'ID',
      extension: ((extensions as any) || {}).ID,
    });
  },
  get Int() {
    return new ScalarNode({
      name: 'Int',
      extension: ((extensions as any) || {}).Int,
    });
  },
  get Int_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.Int, true);
        },
        get _gt() {
          return new InputNodeField(schema.Int, true);
        },
        get _gte() {
          return new InputNodeField(schema.Int, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.Int, true);
        },
        get _lte() {
          return new InputNodeField(schema.Int, true);
        },
        get _neq() {
          return new InputNodeField(schema.Int, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.Int, true), true);
        },
      },
      { name: 'Int_comparison_exp' },
    );
  },
  get LoginResponse() {
    return new ObjectNode(
      {
        get accessToken() {
          return new FieldNode(schema.String, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
      },
      {
        name: 'LoginResponse',
        extension: ((extensions as any) || {}).LoginResponse,
      },
    );
  },
  get String() {
    return new ScalarNode({
      name: 'String',
      extension: ((extensions as any) || {}).String,
    });
  },
  get String_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.String, true);
        },
        get _gt() {
          return new InputNodeField(schema.String, true);
        },
        get _gte() {
          return new InputNodeField(schema.String, true);
        },
        get _ilike() {
          return new InputNodeField(schema.String, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _like() {
          return new InputNodeField(schema.String, true);
        },
        get _lt() {
          return new InputNodeField(schema.String, true);
        },
        get _lte() {
          return new InputNodeField(schema.String, true);
        },
        get _neq() {
          return new InputNodeField(schema.String, true);
        },
        get _nilike() {
          return new InputNodeField(schema.String, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get _nlike() {
          return new InputNodeField(schema.String, true);
        },
        get _nsimilar() {
          return new InputNodeField(schema.String, true);
        },
        get _similar() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'String_comparison_exp' },
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false,
          );
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false,
          );
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
      },
      {
        name: '__Directive',
        extension: ((extensions as any) || {}).__Directive,
      },
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: '__DirectiveLocation' });
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
      },
      {
        name: '__EnumValue',
        extension: ((extensions as any) || {}).__EnumValue,
      },
    );
  },
  get __Field() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false,
          );
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
      },
      { name: '__Field', extension: ((extensions as any) || {}).__Field },
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
      },
      {
        name: '__InputValue',
        extension: ((extensions as any) || {}).__InputValue,
      },
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false,
          );
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false,
          );
        },
      },
      { name: '__Schema', extension: ((extensions as any) || {}).__Schema },
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true,
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true,
          );
        },
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true,
          );
        },
      },
      { name: '__Type', extension: ((extensions as any) || {}).__Type },
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: '__TypeKind' });
  },
  get _food_contains_enum() {
    return new ScalarNode({
      name: '_food_contains_enum',
      extension: ((extensions as any) || {})._food_contains_enum,
    });
  },
  get _food_contains_enum_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get _gt() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get _gte() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema._food_contains_enum, true),
            true,
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get _lte() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get _neq() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema._food_contains_enum, true),
            true,
          );
        },
      },
      { name: '_food_contains_enum_comparison_exp' },
    );
  },
  get _int4() {
    return new ScalarNode({
      name: '_int4',
      extension: ((extensions as any) || {})._int4,
    });
  },
  get _int4_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema._int4, true);
        },
        get _gt() {
          return new InputNodeField(schema._int4, true);
        },
        get _gte() {
          return new InputNodeField(schema._int4, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema._int4, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema._int4, true);
        },
        get _lte() {
          return new InputNodeField(schema._int4, true);
        },
        get _neq() {
          return new InputNodeField(schema._int4, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema._int4, true), true);
        },
      },
      { name: '_int4_comparison_exp' },
    );
  },
  get _varchar() {
    return new ScalarNode({
      name: '_varchar',
      extension: ((extensions as any) || {})._varchar,
    });
  },
  get _varchar_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema._varchar, true);
        },
        get _gt() {
          return new InputNodeField(schema._varchar, true);
        },
        get _gte() {
          return new InputNodeField(schema._varchar, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema._varchar, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema._varchar, true);
        },
        get _lte() {
          return new InputNodeField(schema._varchar, true);
        },
        get _neq() {
          return new InputNodeField(schema._varchar, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema._varchar, true), true);
        },
      },
      { name: '_varchar_comparison_exp' },
    );
  },
  get authenticated() {
    return new ObjectNode(
      {
        get active() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get created_on() {
          return new FieldNode(schema.timestamp, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get payload_hash() {
          return new FieldNode(schema.String, undefined, false);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
      },
      {
        name: 'authenticated',
        extension: ((extensions as any) || {}).authenticated,
      },
    );
  },
  get authenticated_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.authenticated_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.authenticated, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'authenticated_aggregate',
        extension: ((extensions as any) || {}).authenticated_aggregate,
      },
    );
  },
  get authenticated_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(
            schema.authenticated_avg_fields,
            undefined,
            true,
          );
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.authenticated_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(
            schema.authenticated_max_fields,
            undefined,
            true,
          );
        },
        get min() {
          return new FieldNode(
            schema.authenticated_min_fields,
            undefined,
            true,
          );
        },
        get stddev() {
          return new FieldNode(
            schema.authenticated_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.authenticated_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.authenticated_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(
            schema.authenticated_sum_fields,
            undefined,
            true,
          );
        },
        get var_pop() {
          return new FieldNode(
            schema.authenticated_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.authenticated_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.authenticated_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'authenticated_aggregate_fields',
        extension: ((extensions as any) || {}).authenticated_aggregate_fields,
      },
    );
  },
  get authenticated_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.authenticated_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.authenticated_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.authenticated_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.authenticated_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.authenticated_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.authenticated_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.authenticated_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(
            schema.authenticated_var_pop_order_by,
            true,
          );
        },
        get var_samp() {
          return new InputNodeField(
            schema.authenticated_var_samp_order_by,
            true,
          );
        },
        get variance() {
          return new InputNodeField(
            schema.authenticated_variance_order_by,
            true,
          );
        },
      },
      { name: 'authenticated_aggregate_order_by' },
    );
  },
  get authenticated_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.authenticated_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.authenticated_on_conflict, true);
        },
      },
      { name: 'authenticated_arr_rel_insert_input' },
    );
  },
  get authenticated_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'authenticated_avg_fields',
        extension: ((extensions as any) || {}).authenticated_avg_fields,
      },
    );
  },
  get authenticated_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'authenticated_avg_order_by' },
    );
  },
  get authenticated_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.authenticated_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.authenticated_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.authenticated_bool_exp, true),
            true,
          );
        },
        get active() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get created_on() {
          return new InputNodeField(schema.timestamp_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get payload_hash() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
      },
      { name: 'authenticated_bool_exp' },
    );
  },
  get authenticated_constraint() {
    return new EnumNode({ name: 'authenticated_constraint' });
  },
  get authenticated_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'authenticated_inc_input' },
    );
  },
  get authenticated_insert_input() {
    return new InputNode(
      {
        get active() {
          return new InputNodeField(schema.Boolean, true);
        },
        get created_on() {
          return new InputNodeField(schema.timestamp, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get payload_hash() {
          return new InputNodeField(schema.String, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'authenticated_insert_input' },
    );
  },
  get authenticated_max_fields() {
    return new ObjectNode(
      {
        get created_on() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get payload_hash() {
          return new FieldNode(schema.String, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'authenticated_max_fields',
        extension: ((extensions as any) || {}).authenticated_max_fields,
      },
    );
  },
  get authenticated_max_order_by() {
    return new InputNode(
      {
        get created_on() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get payload_hash() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'authenticated_max_order_by' },
    );
  },
  get authenticated_min_fields() {
    return new ObjectNode(
      {
        get created_on() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get payload_hash() {
          return new FieldNode(schema.String, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'authenticated_min_fields',
        extension: ((extensions as any) || {}).authenticated_min_fields,
      },
    );
  },
  get authenticated_min_order_by() {
    return new InputNode(
      {
        get created_on() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get payload_hash() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'authenticated_min_order_by' },
    );
  },
  get authenticated_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.authenticated, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'authenticated_mutation_response',
        extension: ((extensions as any) || {}).authenticated_mutation_response,
      },
    );
  },
  get authenticated_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.authenticated_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.authenticated_on_conflict, true);
        },
      },
      { name: 'authenticated_obj_rel_insert_input' },
    );
  },
  get authenticated_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.authenticated_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.authenticated_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.authenticated_bool_exp, true);
        },
      },
      { name: 'authenticated_on_conflict' },
    );
  },
  get authenticated_order_by() {
    return new InputNode(
      {
        get active() {
          return new InputNodeField(schema.order_by, true);
        },
        get created_on() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get payload_hash() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'authenticated_order_by' },
    );
  },
  get authenticated_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'authenticated_pk_columns_input' },
    );
  },
  get authenticated_select_column() {
    return new EnumNode({ name: 'authenticated_select_column' });
  },
  get authenticated_set_input() {
    return new InputNode(
      {
        get active() {
          return new InputNodeField(schema.Boolean, true);
        },
        get created_on() {
          return new InputNodeField(schema.timestamp, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get payload_hash() {
          return new InputNodeField(schema.String, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'authenticated_set_input' },
    );
  },
  get authenticated_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'authenticated_stddev_fields',
        extension: ((extensions as any) || {}).authenticated_stddev_fields,
      },
    );
  },
  get authenticated_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'authenticated_stddev_order_by' },
    );
  },
  get authenticated_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'authenticated_stddev_pop_fields',
        extension: ((extensions as any) || {}).authenticated_stddev_pop_fields,
      },
    );
  },
  get authenticated_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'authenticated_stddev_pop_order_by' },
    );
  },
  get authenticated_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'authenticated_stddev_samp_fields',
        extension: ((extensions as any) || {}).authenticated_stddev_samp_fields,
      },
    );
  },
  get authenticated_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'authenticated_stddev_samp_order_by' },
    );
  },
  get authenticated_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'authenticated_sum_fields',
        extension: ((extensions as any) || {}).authenticated_sum_fields,
      },
    );
  },
  get authenticated_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'authenticated_sum_order_by' },
    );
  },
  get authenticated_update_column() {
    return new EnumNode({ name: 'authenticated_update_column' });
  },
  get authenticated_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'authenticated_var_pop_fields',
        extension: ((extensions as any) || {}).authenticated_var_pop_fields,
      },
    );
  },
  get authenticated_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'authenticated_var_pop_order_by' },
    );
  },
  get authenticated_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'authenticated_var_samp_fields',
        extension: ((extensions as any) || {}).authenticated_var_samp_fields,
      },
    );
  },
  get authenticated_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'authenticated_var_samp_order_by' },
    );
  },
  get authenticated_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'authenticated_variance_fields',
        extension: ((extensions as any) || {}).authenticated_variance_fields,
      },
    );
  },
  get authenticated_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'authenticated_variance_order_by' },
    );
  },
  get contact() {
    return new ObjectNode(
      {
        get contact() {
          return new FieldNode(schema.user, undefined, false);
        },
        get contact_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get status() {
          return new FieldNode(schema.contact_status_enum, undefined, false);
        },
        get user() {
          return new FieldNode(schema.user, undefined, false);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
      },
      { name: 'contact', extension: ((extensions as any) || {}).contact },
    );
  },
  get contact_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.contact_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.contact, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'contact_aggregate',
        extension: ((extensions as any) || {}).contact_aggregate,
      },
    );
  },
  get contact_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.contact_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.contact_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.contact_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.contact_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(
            schema.contact_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.contact_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(schema.contact_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(schema.contact_var_pop_fields, undefined, true);
        },
        get var_samp() {
          return new FieldNode(schema.contact_var_samp_fields, undefined, true);
        },
        get variance() {
          return new FieldNode(schema.contact_variance_fields, undefined, true);
        },
      },
      {
        name: 'contact_aggregate_fields',
        extension: ((extensions as any) || {}).contact_aggregate_fields,
      },
    );
  },
  get contact_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.contact_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.contact_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.contact_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.contact_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.contact_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(schema.contact_stddev_samp_order_by, true);
        },
        get sum() {
          return new InputNodeField(schema.contact_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.contact_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.contact_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.contact_variance_order_by, true);
        },
      },
      { name: 'contact_aggregate_order_by' },
    );
  },
  get contact_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.contact_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.contact_on_conflict, true);
        },
      },
      { name: 'contact_arr_rel_insert_input' },
    );
  },
  get contact_avg_fields() {
    return new ObjectNode(
      {
        get contact_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'contact_avg_fields',
        extension: ((extensions as any) || {}).contact_avg_fields,
      },
    );
  },
  get contact_avg_order_by() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'contact_avg_order_by' },
    );
  },
  get contact_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.contact_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.contact_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.contact_bool_exp, true),
            true,
          );
        },
        get contact() {
          return new InputNodeField(schema.user_bool_exp, true);
        },
        get contact_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get status() {
          return new InputNodeField(
            schema.contact_status_enum_comparison_exp,
            true,
          );
        },
        get user() {
          return new InputNodeField(schema.user_bool_exp, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
      },
      { name: 'contact_bool_exp' },
    );
  },
  get contact_constraint() {
    return new EnumNode({ name: 'contact_constraint' });
  },
  get contact_inc_input() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'contact_inc_input' },
    );
  },
  get contact_insert_input() {
    return new InputNode(
      {
        get contact() {
          return new InputNodeField(schema.user_obj_rel_insert_input, true);
        },
        get contact_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get status() {
          return new InputNodeField(schema.contact_status_enum, true);
        },
        get user() {
          return new InputNodeField(schema.user_obj_rel_insert_input, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'contact_insert_input' },
    );
  },
  get contact_max_fields() {
    return new ObjectNode(
      {
        get contact_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'contact_max_fields',
        extension: ((extensions as any) || {}).contact_max_fields,
      },
    );
  },
  get contact_max_order_by() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'contact_max_order_by' },
    );
  },
  get contact_min_fields() {
    return new ObjectNode(
      {
        get contact_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'contact_min_fields',
        extension: ((extensions as any) || {}).contact_min_fields,
      },
    );
  },
  get contact_min_order_by() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'contact_min_order_by' },
    );
  },
  get contact_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.contact, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'contact_mutation_response',
        extension: ((extensions as any) || {}).contact_mutation_response,
      },
    );
  },
  get contact_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.contact_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.contact_on_conflict, true);
        },
      },
      { name: 'contact_obj_rel_insert_input' },
    );
  },
  get contact_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.contact_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.contact_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.contact_bool_exp, true);
        },
      },
      { name: 'contact_on_conflict' },
    );
  },
  get contact_order_by() {
    return new InputNode(
      {
        get contact() {
          return new InputNodeField(schema.user_order_by, true);
        },
        get contact_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get status() {
          return new InputNodeField(schema.order_by, true);
        },
        get user() {
          return new InputNodeField(schema.user_order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'contact_order_by' },
    );
  },
  get contact_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'contact_pk_columns_input' },
    );
  },
  get contact_select_column() {
    return new EnumNode({ name: 'contact_select_column' });
  },
  get contact_set_input() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get status() {
          return new InputNodeField(schema.contact_status_enum, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'contact_set_input' },
    );
  },
  get contact_status_enum() {
    return new ScalarNode({
      name: 'contact_status_enum',
      extension: ((extensions as any) || {}).contact_status_enum,
    });
  },
  get contact_status_enum_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.contact_status_enum, true);
        },
        get _gt() {
          return new InputNodeField(schema.contact_status_enum, true);
        },
        get _gte() {
          return new InputNodeField(schema.contact_status_enum, true);
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema.contact_status_enum, true),
            true,
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.contact_status_enum, true);
        },
        get _lte() {
          return new InputNodeField(schema.contact_status_enum, true);
        },
        get _neq() {
          return new InputNodeField(schema.contact_status_enum, true);
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema.contact_status_enum, true),
            true,
          );
        },
      },
      { name: 'contact_status_enum_comparison_exp' },
    );
  },
  get contact_stddev_fields() {
    return new ObjectNode(
      {
        get contact_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'contact_stddev_fields',
        extension: ((extensions as any) || {}).contact_stddev_fields,
      },
    );
  },
  get contact_stddev_order_by() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'contact_stddev_order_by' },
    );
  },
  get contact_stddev_pop_fields() {
    return new ObjectNode(
      {
        get contact_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'contact_stddev_pop_fields',
        extension: ((extensions as any) || {}).contact_stddev_pop_fields,
      },
    );
  },
  get contact_stddev_pop_order_by() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'contact_stddev_pop_order_by' },
    );
  },
  get contact_stddev_samp_fields() {
    return new ObjectNode(
      {
        get contact_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'contact_stddev_samp_fields',
        extension: ((extensions as any) || {}).contact_stddev_samp_fields,
      },
    );
  },
  get contact_stddev_samp_order_by() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'contact_stddev_samp_order_by' },
    );
  },
  get contact_sum_fields() {
    return new ObjectNode(
      {
        get contact_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'contact_sum_fields',
        extension: ((extensions as any) || {}).contact_sum_fields,
      },
    );
  },
  get contact_sum_order_by() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'contact_sum_order_by' },
    );
  },
  get contact_update_column() {
    return new EnumNode({ name: 'contact_update_column' });
  },
  get contact_var_pop_fields() {
    return new ObjectNode(
      {
        get contact_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'contact_var_pop_fields',
        extension: ((extensions as any) || {}).contact_var_pop_fields,
      },
    );
  },
  get contact_var_pop_order_by() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'contact_var_pop_order_by' },
    );
  },
  get contact_var_samp_fields() {
    return new ObjectNode(
      {
        get contact_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'contact_var_samp_fields',
        extension: ((extensions as any) || {}).contact_var_samp_fields,
      },
    );
  },
  get contact_var_samp_order_by() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'contact_var_samp_order_by' },
    );
  },
  get contact_variance_fields() {
    return new ObjectNode(
      {
        get contact_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'contact_variance_fields',
        extension: ((extensions as any) || {}).contact_variance_fields,
      },
    );
  },
  get contact_variance_order_by() {
    return new InputNode(
      {
        get contact_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'contact_variance_order_by' },
    );
  },
  get cuisine() {
    return new ObjectNode(
      {
        get game_cuisines() {
          return new FieldNode(
            new ArrayNode(schema.game_cuisine, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_cuisines_aggregate() {
          return new FieldNode(
            schema.game_cuisine_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get restaurant_cuisines() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_cuisine, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_cuisines_aggregate() {
          return new FieldNode(
            schema.restaurant_cuisine_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
      },
      { name: 'cuisine', extension: ((extensions as any) || {}).cuisine },
    );
  },
  get cuisine_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.cuisine_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.cuisine, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'cuisine_aggregate',
        extension: ((extensions as any) || {}).cuisine_aggregate,
      },
    );
  },
  get cuisine_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.cuisine_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.cuisine_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.cuisine_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.cuisine_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.cuisine_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(
            schema.cuisine_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.cuisine_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(schema.cuisine_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(schema.cuisine_var_pop_fields, undefined, true);
        },
        get var_samp() {
          return new FieldNode(schema.cuisine_var_samp_fields, undefined, true);
        },
        get variance() {
          return new FieldNode(schema.cuisine_variance_fields, undefined, true);
        },
      },
      {
        name: 'cuisine_aggregate_fields',
        extension: ((extensions as any) || {}).cuisine_aggregate_fields,
      },
    );
  },
  get cuisine_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.cuisine_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.cuisine_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.cuisine_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.cuisine_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.cuisine_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(schema.cuisine_stddev_samp_order_by, true);
        },
        get sum() {
          return new InputNodeField(schema.cuisine_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.cuisine_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.cuisine_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.cuisine_variance_order_by, true);
        },
      },
      { name: 'cuisine_aggregate_order_by' },
    );
  },
  get cuisine_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.cuisine_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.cuisine_on_conflict, true);
        },
      },
      { name: 'cuisine_arr_rel_insert_input' },
    );
  },
  get cuisine_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'cuisine_avg_fields',
        extension: ((extensions as any) || {}).cuisine_avg_fields,
      },
    );
  },
  get cuisine_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'cuisine_avg_order_by' },
    );
  },
  get cuisine_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.cuisine_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.cuisine_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.cuisine_bool_exp, true),
            true,
          );
        },
        get game_cuisines() {
          return new InputNodeField(schema.game_cuisine_bool_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get restaurant_cuisines() {
          return new InputNodeField(schema.restaurant_cuisine_bool_exp, true);
        },
      },
      { name: 'cuisine_bool_exp' },
    );
  },
  get cuisine_constraint() {
    return new EnumNode({ name: 'cuisine_constraint' });
  },
  get cuisine_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'cuisine_inc_input' },
    );
  },
  get cuisine_insert_input() {
    return new InputNode(
      {
        get game_cuisines() {
          return new InputNodeField(
            schema.game_cuisine_arr_rel_insert_input,
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get restaurant_cuisines() {
          return new InputNodeField(
            schema.restaurant_cuisine_arr_rel_insert_input,
            true,
          );
        },
      },
      { name: 'cuisine_insert_input' },
    );
  },
  get cuisine_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'cuisine_max_fields',
        extension: ((extensions as any) || {}).cuisine_max_fields,
      },
    );
  },
  get cuisine_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'cuisine_max_order_by' },
    );
  },
  get cuisine_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'cuisine_min_fields',
        extension: ((extensions as any) || {}).cuisine_min_fields,
      },
    );
  },
  get cuisine_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'cuisine_min_order_by' },
    );
  },
  get cuisine_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.cuisine, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'cuisine_mutation_response',
        extension: ((extensions as any) || {}).cuisine_mutation_response,
      },
    );
  },
  get cuisine_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.cuisine_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.cuisine_on_conflict, true);
        },
      },
      { name: 'cuisine_obj_rel_insert_input' },
    );
  },
  get cuisine_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.cuisine_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.cuisine_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.cuisine_bool_exp, true);
        },
      },
      { name: 'cuisine_on_conflict' },
    );
  },
  get cuisine_order_by() {
    return new InputNode(
      {
        get game_cuisines_aggregate() {
          return new InputNodeField(
            schema.game_cuisine_aggregate_order_by,
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_cuisines_aggregate() {
          return new InputNodeField(
            schema.restaurant_cuisine_aggregate_order_by,
            true,
          );
        },
      },
      { name: 'cuisine_order_by' },
    );
  },
  get cuisine_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'cuisine_pk_columns_input' },
    );
  },
  get cuisine_select_column() {
    return new EnumNode({ name: 'cuisine_select_column' });
  },
  get cuisine_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'cuisine_set_input' },
    );
  },
  get cuisine_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'cuisine_stddev_fields',
        extension: ((extensions as any) || {}).cuisine_stddev_fields,
      },
    );
  },
  get cuisine_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'cuisine_stddev_order_by' },
    );
  },
  get cuisine_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'cuisine_stddev_pop_fields',
        extension: ((extensions as any) || {}).cuisine_stddev_pop_fields,
      },
    );
  },
  get cuisine_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'cuisine_stddev_pop_order_by' },
    );
  },
  get cuisine_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'cuisine_stddev_samp_fields',
        extension: ((extensions as any) || {}).cuisine_stddev_samp_fields,
      },
    );
  },
  get cuisine_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'cuisine_stddev_samp_order_by' },
    );
  },
  get cuisine_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'cuisine_sum_fields',
        extension: ((extensions as any) || {}).cuisine_sum_fields,
      },
    );
  },
  get cuisine_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'cuisine_sum_order_by' },
    );
  },
  get cuisine_update_column() {
    return new EnumNode({ name: 'cuisine_update_column' });
  },
  get cuisine_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'cuisine_var_pop_fields',
        extension: ((extensions as any) || {}).cuisine_var_pop_fields,
      },
    );
  },
  get cuisine_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'cuisine_var_pop_order_by' },
    );
  },
  get cuisine_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'cuisine_var_samp_fields',
        extension: ((extensions as any) || {}).cuisine_var_samp_fields,
      },
    );
  },
  get cuisine_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'cuisine_var_samp_order_by' },
    );
  },
  get cuisine_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'cuisine_variance_fields',
        extension: ((extensions as any) || {}).cuisine_variance_fields,
      },
    );
  },
  get cuisine_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'cuisine_variance_order_by' },
    );
  },
  get favorite_item_entity() {
    return new ObjectNode(
      {
        get foodItemId() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get isFavorite() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get userId() {
          return new FieldNode(schema.Int, undefined, false);
        },
      },
      {
        name: 'favorite_item_entity',
        extension: ((extensions as any) || {}).favorite_item_entity,
      },
    );
  },
  get favorite_item_entity_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.favorite_item_entity_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.favorite_item_entity, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'favorite_item_entity_aggregate',
        extension: ((extensions as any) || {}).favorite_item_entity_aggregate,
      },
    );
  },
  get favorite_item_entity_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(
            schema.favorite_item_entity_avg_fields,
            undefined,
            true,
          );
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.favorite_item_entity_select_column,
                    true,
                  ),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(
            schema.favorite_item_entity_max_fields,
            undefined,
            true,
          );
        },
        get min() {
          return new FieldNode(
            schema.favorite_item_entity_min_fields,
            undefined,
            true,
          );
        },
        get stddev() {
          return new FieldNode(
            schema.favorite_item_entity_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.favorite_item_entity_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.favorite_item_entity_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(
            schema.favorite_item_entity_sum_fields,
            undefined,
            true,
          );
        },
        get var_pop() {
          return new FieldNode(
            schema.favorite_item_entity_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.favorite_item_entity_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.favorite_item_entity_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'favorite_item_entity_aggregate_fields',
        extension: ((extensions as any) || {})
          .favorite_item_entity_aggregate_fields,
      },
    );
  },
  get favorite_item_entity_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(
            schema.favorite_item_entity_avg_order_by,
            true,
          );
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(
            schema.favorite_item_entity_max_order_by,
            true,
          );
        },
        get min() {
          return new InputNodeField(
            schema.favorite_item_entity_min_order_by,
            true,
          );
        },
        get stddev() {
          return new InputNodeField(
            schema.favorite_item_entity_stddev_order_by,
            true,
          );
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.favorite_item_entity_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.favorite_item_entity_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(
            schema.favorite_item_entity_sum_order_by,
            true,
          );
        },
        get var_pop() {
          return new InputNodeField(
            schema.favorite_item_entity_var_pop_order_by,
            true,
          );
        },
        get var_samp() {
          return new InputNodeField(
            schema.favorite_item_entity_var_samp_order_by,
            true,
          );
        },
        get variance() {
          return new InputNodeField(
            schema.favorite_item_entity_variance_order_by,
            true,
          );
        },
      },
      { name: 'favorite_item_entity_aggregate_order_by' },
    );
  },
  get favorite_item_entity_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.favorite_item_entity_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(
            schema.favorite_item_entity_on_conflict,
            true,
          );
        },
      },
      { name: 'favorite_item_entity_arr_rel_insert_input' },
    );
  },
  get favorite_item_entity_avg_fields() {
    return new ObjectNode(
      {
        get foodItemId() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'favorite_item_entity_avg_fields',
        extension: ((extensions as any) || {}).favorite_item_entity_avg_fields,
      },
    );
  },
  get favorite_item_entity_avg_order_by() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'favorite_item_entity_avg_order_by' },
    );
  },
  get favorite_item_entity_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.favorite_item_entity_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.favorite_item_entity_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.favorite_item_entity_bool_exp, true),
            true,
          );
        },
        get foodItemId() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get isFavorite() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get userId() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
      },
      { name: 'favorite_item_entity_bool_exp' },
    );
  },
  get favorite_item_entity_constraint() {
    return new EnumNode({ name: 'favorite_item_entity_constraint' });
  },
  get favorite_item_entity_inc_input() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.Int, true);
        },
        get userId() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'favorite_item_entity_inc_input' },
    );
  },
  get favorite_item_entity_insert_input() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.Int, true);
        },
        get isFavorite() {
          return new InputNodeField(schema.Boolean, true);
        },
        get userId() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'favorite_item_entity_insert_input' },
    );
  },
  get favorite_item_entity_max_fields() {
    return new ObjectNode(
      {
        get foodItemId() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'favorite_item_entity_max_fields',
        extension: ((extensions as any) || {}).favorite_item_entity_max_fields,
      },
    );
  },
  get favorite_item_entity_max_order_by() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'favorite_item_entity_max_order_by' },
    );
  },
  get favorite_item_entity_min_fields() {
    return new ObjectNode(
      {
        get foodItemId() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'favorite_item_entity_min_fields',
        extension: ((extensions as any) || {}).favorite_item_entity_min_fields,
      },
    );
  },
  get favorite_item_entity_min_order_by() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'favorite_item_entity_min_order_by' },
    );
  },
  get favorite_item_entity_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.favorite_item_entity, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'favorite_item_entity_mutation_response',
        extension: ((extensions as any) || {})
          .favorite_item_entity_mutation_response,
      },
    );
  },
  get favorite_item_entity_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            schema.favorite_item_entity_insert_input,
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(
            schema.favorite_item_entity_on_conflict,
            true,
          );
        },
      },
      { name: 'favorite_item_entity_obj_rel_insert_input' },
    );
  },
  get favorite_item_entity_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(
            schema.favorite_item_entity_constraint,
            false,
          );
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.favorite_item_entity_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.favorite_item_entity_bool_exp, true);
        },
      },
      { name: 'favorite_item_entity_on_conflict' },
    );
  },
  get favorite_item_entity_order_by() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.order_by, true);
        },
        get isFavorite() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'favorite_item_entity_order_by' },
    );
  },
  get favorite_item_entity_pk_columns_input() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.Int, false);
        },
        get userId() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'favorite_item_entity_pk_columns_input' },
    );
  },
  get favorite_item_entity_select_column() {
    return new EnumNode({ name: 'favorite_item_entity_select_column' });
  },
  get favorite_item_entity_set_input() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.Int, true);
        },
        get isFavorite() {
          return new InputNodeField(schema.Boolean, true);
        },
        get userId() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'favorite_item_entity_set_input' },
    );
  },
  get favorite_item_entity_stddev_fields() {
    return new ObjectNode(
      {
        get foodItemId() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'favorite_item_entity_stddev_fields',
        extension: ((extensions as any) || {})
          .favorite_item_entity_stddev_fields,
      },
    );
  },
  get favorite_item_entity_stddev_order_by() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'favorite_item_entity_stddev_order_by' },
    );
  },
  get favorite_item_entity_stddev_pop_fields() {
    return new ObjectNode(
      {
        get foodItemId() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'favorite_item_entity_stddev_pop_fields',
        extension: ((extensions as any) || {})
          .favorite_item_entity_stddev_pop_fields,
      },
    );
  },
  get favorite_item_entity_stddev_pop_order_by() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'favorite_item_entity_stddev_pop_order_by' },
    );
  },
  get favorite_item_entity_stddev_samp_fields() {
    return new ObjectNode(
      {
        get foodItemId() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'favorite_item_entity_stddev_samp_fields',
        extension: ((extensions as any) || {})
          .favorite_item_entity_stddev_samp_fields,
      },
    );
  },
  get favorite_item_entity_stddev_samp_order_by() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'favorite_item_entity_stddev_samp_order_by' },
    );
  },
  get favorite_item_entity_sum_fields() {
    return new ObjectNode(
      {
        get foodItemId() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'favorite_item_entity_sum_fields',
        extension: ((extensions as any) || {}).favorite_item_entity_sum_fields,
      },
    );
  },
  get favorite_item_entity_sum_order_by() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'favorite_item_entity_sum_order_by' },
    );
  },
  get favorite_item_entity_update_column() {
    return new EnumNode({ name: 'favorite_item_entity_update_column' });
  },
  get favorite_item_entity_var_pop_fields() {
    return new ObjectNode(
      {
        get foodItemId() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'favorite_item_entity_var_pop_fields',
        extension: ((extensions as any) || {})
          .favorite_item_entity_var_pop_fields,
      },
    );
  },
  get favorite_item_entity_var_pop_order_by() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'favorite_item_entity_var_pop_order_by' },
    );
  },
  get favorite_item_entity_var_samp_fields() {
    return new ObjectNode(
      {
        get foodItemId() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'favorite_item_entity_var_samp_fields',
        extension: ((extensions as any) || {})
          .favorite_item_entity_var_samp_fields,
      },
    );
  },
  get favorite_item_entity_var_samp_order_by() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'favorite_item_entity_var_samp_order_by' },
    );
  },
  get favorite_item_entity_variance_fields() {
    return new ObjectNode(
      {
        get foodItemId() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get userId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'favorite_item_entity_variance_fields',
        extension: ((extensions as any) || {})
          .favorite_item_entity_variance_fields,
      },
    );
  },
  get favorite_item_entity_variance_order_by() {
    return new InputNode(
      {
        get foodItemId() {
          return new InputNodeField(schema.order_by, true);
        },
        get userId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'favorite_item_entity_variance_order_by' },
    );
  },
  get float8() {
    return new ScalarNode({
      name: 'float8',
      extension: ((extensions as any) || {}).float8,
    });
  },
  get float8_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.float8, true);
        },
        get _gt() {
          return new InputNodeField(schema.float8, true);
        },
        get _gte() {
          return new InputNodeField(schema.float8, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.float8, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.float8, true);
        },
        get _lte() {
          return new InputNodeField(schema.float8, true);
        },
        get _neq() {
          return new InputNodeField(schema.float8, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.float8, true), true);
        },
      },
      { name: 'float8_comparison_exp' },
    );
  },
  get food_item() {
    return new ObjectNode(
      {
        get animal_products() {
          return new FieldNode(schema._food_contains_enum, undefined, false);
        },
        get beef() {
          return new FieldNode(schema._food_contains_enum, undefined, false);
        },
        get chicken() {
          return new FieldNode(schema._food_contains_enum, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, false);
        },
        get exotic() {
          return new FieldNode(schema._food_contains_enum, undefined, false);
        },
        get fish() {
          return new FieldNode(schema._food_contains_enum, undefined, false);
        },
        get food_item_media() {
          return new FieldNode(
            new ArrayNode(schema.food_item_media, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.food_item_media_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get food_item_media_aggregate() {
          return new FieldNode(
            schema.food_item_media_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.food_item_media_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get gluten() {
          return new FieldNode(schema._food_contains_enum, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get is_game_ready() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get pork() {
          return new FieldNode(schema._food_contains_enum, undefined, false);
        },
        get restaurant_items() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_item, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_items_aggregate() {
          return new FieldNode(
            schema.restaurant_item_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get shellfish() {
          return new FieldNode(schema._food_contains_enum, undefined, false);
        },
        get turkey() {
          return new FieldNode(schema._food_contains_enum, undefined, false);
        },
      },
      { name: 'food_item', extension: ((extensions as any) || {}).food_item },
    );
  },
  get food_item_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.food_item_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.food_item, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'food_item_aggregate',
        extension: ((extensions as any) || {}).food_item_aggregate,
      },
    );
  },
  get food_item_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.food_item_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.food_item_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.food_item_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.food_item_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(
            schema.food_item_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.food_item_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(schema.food_item_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(
            schema.food_item_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.food_item_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.food_item_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'food_item_aggregate_fields',
        extension: ((extensions as any) || {}).food_item_aggregate_fields,
      },
    );
  },
  get food_item_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.food_item_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.food_item_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.food_item_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.food_item_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.food_item_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.food_item_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.food_item_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.food_item_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.food_item_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.food_item_variance_order_by, true);
        },
      },
      { name: 'food_item_aggregate_order_by' },
    );
  },
  get food_item_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.food_item_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.food_item_on_conflict, true);
        },
      },
      { name: 'food_item_arr_rel_insert_input' },
    );
  },
  get food_item_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_avg_fields',
        extension: ((extensions as any) || {}).food_item_avg_fields,
      },
    );
  },
  get food_item_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_avg_order_by' },
    );
  },
  get food_item_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.food_item_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.food_item_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.food_item_bool_exp, true),
            true,
          );
        },
        get animal_products() {
          return new InputNodeField(
            schema._food_contains_enum_comparison_exp,
            true,
          );
        },
        get beef() {
          return new InputNodeField(
            schema._food_contains_enum_comparison_exp,
            true,
          );
        },
        get chicken() {
          return new InputNodeField(
            schema._food_contains_enum_comparison_exp,
            true,
          );
        },
        get description() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get exotic() {
          return new InputNodeField(
            schema._food_contains_enum_comparison_exp,
            true,
          );
        },
        get fish() {
          return new InputNodeField(
            schema._food_contains_enum_comparison_exp,
            true,
          );
        },
        get food_item_media() {
          return new InputNodeField(schema.food_item_media_bool_exp, true);
        },
        get gluten() {
          return new InputNodeField(
            schema._food_contains_enum_comparison_exp,
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get pork() {
          return new InputNodeField(
            schema._food_contains_enum_comparison_exp,
            true,
          );
        },
        get restaurant_items() {
          return new InputNodeField(schema.restaurant_item_bool_exp, true);
        },
        get shellfish() {
          return new InputNodeField(
            schema._food_contains_enum_comparison_exp,
            true,
          );
        },
        get turkey() {
          return new InputNodeField(
            schema._food_contains_enum_comparison_exp,
            true,
          );
        },
      },
      { name: 'food_item_bool_exp' },
    );
  },
  get food_item_constraint() {
    return new EnumNode({ name: 'food_item_constraint' });
  },
  get food_item_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'food_item_inc_input' },
    );
  },
  get food_item_insert_input() {
    return new InputNode(
      {
        get animal_products() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get beef() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get chicken() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get description() {
          return new InputNodeField(schema.String, true);
        },
        get exotic() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get fish() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get food_item_media() {
          return new InputNodeField(
            schema.food_item_media_arr_rel_insert_input,
            true,
          );
        },
        get gluten() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get pork() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get restaurant_items() {
          return new InputNodeField(
            schema.restaurant_item_arr_rel_insert_input,
            true,
          );
        },
        get shellfish() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get turkey() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
      },
      { name: 'food_item_insert_input' },
    );
  },
  get food_item_max_fields() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'food_item_max_fields',
        extension: ((extensions as any) || {}).food_item_max_fields,
      },
    );
  },
  get food_item_max_order_by() {
    return new InputNode(
      {
        get description() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_max_order_by' },
    );
  },
  get food_item_media() {
    return new ObjectNode(
      {
        get author_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get caption() {
          return new FieldNode(schema.String, undefined, true);
        },
        get food_item() {
          return new FieldNode(schema.food_item, undefined, false);
        },
        get food_item_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get game_choices() {
          return new FieldNode(
            new ArrayNode(schema.game_choice, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_choices_aggregate() {
          return new FieldNode(
            schema.game_choice_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get media_author() {
          return new FieldNode(schema.media_author, undefined, false);
        },
        get src() {
          return new FieldNode(schema.String, undefined, false);
        },
        get type() {
          return new FieldNode(
            schema.food_item_media_type_enum,
            undefined,
            false,
          );
        },
      },
      {
        name: 'food_item_media',
        extension: ((extensions as any) || {}).food_item_media,
      },
    );
  },
  get food_item_media_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.food_item_media_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.food_item_media, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'food_item_media_aggregate',
        extension: ((extensions as any) || {}).food_item_media_aggregate,
      },
    );
  },
  get food_item_media_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(
            schema.food_item_media_avg_fields,
            undefined,
            true,
          );
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(
            schema.food_item_media_max_fields,
            undefined,
            true,
          );
        },
        get min() {
          return new FieldNode(
            schema.food_item_media_min_fields,
            undefined,
            true,
          );
        },
        get stddev() {
          return new FieldNode(
            schema.food_item_media_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.food_item_media_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.food_item_media_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(
            schema.food_item_media_sum_fields,
            undefined,
            true,
          );
        },
        get var_pop() {
          return new FieldNode(
            schema.food_item_media_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.food_item_media_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.food_item_media_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'food_item_media_aggregate_fields',
        extension: ((extensions as any) || {}).food_item_media_aggregate_fields,
      },
    );
  },
  get food_item_media_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.food_item_media_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.food_item_media_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.food_item_media_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(
            schema.food_item_media_stddev_order_by,
            true,
          );
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.food_item_media_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.food_item_media_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.food_item_media_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(
            schema.food_item_media_var_pop_order_by,
            true,
          );
        },
        get var_samp() {
          return new InputNodeField(
            schema.food_item_media_var_samp_order_by,
            true,
          );
        },
        get variance() {
          return new InputNodeField(
            schema.food_item_media_variance_order_by,
            true,
          );
        },
      },
      { name: 'food_item_media_aggregate_order_by' },
    );
  },
  get food_item_media_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.food_item_media_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.food_item_media_on_conflict, true);
        },
      },
      { name: 'food_item_media_arr_rel_insert_input' },
    );
  },
  get food_item_media_avg_fields() {
    return new ObjectNode(
      {
        get author_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_media_avg_fields',
        extension: ((extensions as any) || {}).food_item_media_avg_fields,
      },
    );
  },
  get food_item_media_avg_order_by() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_media_avg_order_by' },
    );
  },
  get food_item_media_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.food_item_media_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.food_item_media_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.food_item_media_bool_exp, true),
            true,
          );
        },
        get author_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get caption() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get food_item() {
          return new InputNodeField(schema.food_item_bool_exp, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get game_choices() {
          return new InputNodeField(schema.game_choice_bool_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get media_author() {
          return new InputNodeField(schema.media_author_bool_exp, true);
        },
        get src() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get type() {
          return new InputNodeField(
            schema.food_item_media_type_enum_comparison_exp,
            true,
          );
        },
      },
      { name: 'food_item_media_bool_exp' },
    );
  },
  get food_item_media_constraint() {
    return new EnumNode({ name: 'food_item_media_constraint' });
  },
  get food_item_media_inc_input() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.Int, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'food_item_media_inc_input' },
    );
  },
  get food_item_media_insert_input() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.Int, true);
        },
        get caption() {
          return new InputNodeField(schema.String, true);
        },
        get food_item() {
          return new InputNodeField(
            schema.food_item_obj_rel_insert_input,
            true,
          );
        },
        get food_item_id() {
          return new InputNodeField(schema.Int, true);
        },
        get game_choices() {
          return new InputNodeField(
            schema.game_choice_arr_rel_insert_input,
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get media_author() {
          return new InputNodeField(
            schema.media_author_obj_rel_insert_input,
            true,
          );
        },
        get src() {
          return new InputNodeField(schema.String, true);
        },
        get type() {
          return new InputNodeField(schema.food_item_media_type_enum, true);
        },
      },
      { name: 'food_item_media_insert_input' },
    );
  },
  get food_item_media_max_fields() {
    return new ObjectNode(
      {
        get author_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get caption() {
          return new FieldNode(schema.String, undefined, true);
        },
        get food_item_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get src() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'food_item_media_max_fields',
        extension: ((extensions as any) || {}).food_item_media_max_fields,
      },
    );
  },
  get food_item_media_max_order_by() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get caption() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get src() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_media_max_order_by' },
    );
  },
  get food_item_media_min_fields() {
    return new ObjectNode(
      {
        get author_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get caption() {
          return new FieldNode(schema.String, undefined, true);
        },
        get food_item_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get src() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'food_item_media_min_fields',
        extension: ((extensions as any) || {}).food_item_media_min_fields,
      },
    );
  },
  get food_item_media_min_order_by() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get caption() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get src() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_media_min_order_by' },
    );
  },
  get food_item_media_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.food_item_media, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'food_item_media_mutation_response',
        extension: ((extensions as any) || {})
          .food_item_media_mutation_response,
      },
    );
  },
  get food_item_media_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.food_item_media_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.food_item_media_on_conflict, true);
        },
      },
      { name: 'food_item_media_obj_rel_insert_input' },
    );
  },
  get food_item_media_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.food_item_media_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.food_item_media_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.food_item_media_bool_exp, true);
        },
      },
      { name: 'food_item_media_on_conflict' },
    );
  },
  get food_item_media_order_by() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get caption() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item() {
          return new InputNodeField(schema.food_item_order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_choices_aggregate() {
          return new InputNodeField(
            schema.game_choice_aggregate_order_by,
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get media_author() {
          return new InputNodeField(schema.media_author_order_by, true);
        },
        get src() {
          return new InputNodeField(schema.order_by, true);
        },
        get type() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_media_order_by' },
    );
  },
  get food_item_media_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'food_item_media_pk_columns_input' },
    );
  },
  get food_item_media_select_column() {
    return new EnumNode({ name: 'food_item_media_select_column' });
  },
  get food_item_media_set_input() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.Int, true);
        },
        get caption() {
          return new InputNodeField(schema.String, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get src() {
          return new InputNodeField(schema.String, true);
        },
        get type() {
          return new InputNodeField(schema.food_item_media_type_enum, true);
        },
      },
      { name: 'food_item_media_set_input' },
    );
  },
  get food_item_media_stddev_fields() {
    return new ObjectNode(
      {
        get author_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_media_stddev_fields',
        extension: ((extensions as any) || {}).food_item_media_stddev_fields,
      },
    );
  },
  get food_item_media_stddev_order_by() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_media_stddev_order_by' },
    );
  },
  get food_item_media_stddev_pop_fields() {
    return new ObjectNode(
      {
        get author_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_media_stddev_pop_fields',
        extension: ((extensions as any) || {})
          .food_item_media_stddev_pop_fields,
      },
    );
  },
  get food_item_media_stddev_pop_order_by() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_media_stddev_pop_order_by' },
    );
  },
  get food_item_media_stddev_samp_fields() {
    return new ObjectNode(
      {
        get author_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_media_stddev_samp_fields',
        extension: ((extensions as any) || {})
          .food_item_media_stddev_samp_fields,
      },
    );
  },
  get food_item_media_stddev_samp_order_by() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_media_stddev_samp_order_by' },
    );
  },
  get food_item_media_sum_fields() {
    return new ObjectNode(
      {
        get author_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get food_item_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'food_item_media_sum_fields',
        extension: ((extensions as any) || {}).food_item_media_sum_fields,
      },
    );
  },
  get food_item_media_sum_order_by() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_media_sum_order_by' },
    );
  },
  get food_item_media_type_enum() {
    return new ScalarNode({
      name: 'food_item_media_type_enum',
      extension: ((extensions as any) || {}).food_item_media_type_enum,
    });
  },
  get food_item_media_type_enum_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.food_item_media_type_enum, true);
        },
        get _gt() {
          return new InputNodeField(schema.food_item_media_type_enum, true);
        },
        get _gte() {
          return new InputNodeField(schema.food_item_media_type_enum, true);
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema.food_item_media_type_enum, true),
            true,
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.food_item_media_type_enum, true);
        },
        get _lte() {
          return new InputNodeField(schema.food_item_media_type_enum, true);
        },
        get _neq() {
          return new InputNodeField(schema.food_item_media_type_enum, true);
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema.food_item_media_type_enum, true),
            true,
          );
        },
      },
      { name: 'food_item_media_type_enum_comparison_exp' },
    );
  },
  get food_item_media_update_column() {
    return new EnumNode({ name: 'food_item_media_update_column' });
  },
  get food_item_media_var_pop_fields() {
    return new ObjectNode(
      {
        get author_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_media_var_pop_fields',
        extension: ((extensions as any) || {}).food_item_media_var_pop_fields,
      },
    );
  },
  get food_item_media_var_pop_order_by() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_media_var_pop_order_by' },
    );
  },
  get food_item_media_var_samp_fields() {
    return new ObjectNode(
      {
        get author_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_media_var_samp_fields',
        extension: ((extensions as any) || {}).food_item_media_var_samp_fields,
      },
    );
  },
  get food_item_media_var_samp_order_by() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_media_var_samp_order_by' },
    );
  },
  get food_item_media_variance_fields() {
    return new ObjectNode(
      {
        get author_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_media_variance_fields',
        extension: ((extensions as any) || {}).food_item_media_variance_fields,
      },
    );
  },
  get food_item_media_variance_order_by() {
    return new InputNode(
      {
        get author_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_media_variance_order_by' },
    );
  },
  get food_item_min_fields() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'food_item_min_fields',
        extension: ((extensions as any) || {}).food_item_min_fields,
      },
    );
  },
  get food_item_min_order_by() {
    return new InputNode(
      {
        get description() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_min_order_by' },
    );
  },
  get food_item_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.food_item, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'food_item_mutation_response',
        extension: ((extensions as any) || {}).food_item_mutation_response,
      },
    );
  },
  get food_item_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.food_item_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.food_item_on_conflict, true);
        },
      },
      { name: 'food_item_obj_rel_insert_input' },
    );
  },
  get food_item_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.food_item_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.food_item_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.food_item_bool_exp, true);
        },
      },
      { name: 'food_item_on_conflict' },
    );
  },
  get food_item_order_by() {
    return new InputNode(
      {
        get animal_products() {
          return new InputNodeField(schema.order_by, true);
        },
        get beef() {
          return new InputNodeField(schema.order_by, true);
        },
        get chicken() {
          return new InputNodeField(schema.order_by, true);
        },
        get description() {
          return new InputNodeField(schema.order_by, true);
        },
        get exotic() {
          return new InputNodeField(schema.order_by, true);
        },
        get fish() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_media_aggregate() {
          return new InputNodeField(
            schema.food_item_media_aggregate_order_by,
            true,
          );
        },
        get gluten() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get pork() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_items_aggregate() {
          return new InputNodeField(
            schema.restaurant_item_aggregate_order_by,
            true,
          );
        },
        get shellfish() {
          return new InputNodeField(schema.order_by, true);
        },
        get turkey() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_order_by' },
    );
  },
  get food_item_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'food_item_pk_columns_input' },
    );
  },
  get food_item_select_column() {
    return new EnumNode({ name: 'food_item_select_column' });
  },
  get food_item_set_input() {
    return new InputNode(
      {
        get animal_products() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get beef() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get chicken() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get description() {
          return new InputNodeField(schema.String, true);
        },
        get exotic() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get fish() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get gluten() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get pork() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get shellfish() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
        get turkey() {
          return new InputNodeField(schema._food_contains_enum, true);
        },
      },
      { name: 'food_item_set_input' },
    );
  },
  get food_item_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_stddev_fields',
        extension: ((extensions as any) || {}).food_item_stddev_fields,
      },
    );
  },
  get food_item_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_stddev_order_by' },
    );
  },
  get food_item_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_stddev_pop_fields',
        extension: ((extensions as any) || {}).food_item_stddev_pop_fields,
      },
    );
  },
  get food_item_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_stddev_pop_order_by' },
    );
  },
  get food_item_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_stddev_samp_fields',
        extension: ((extensions as any) || {}).food_item_stddev_samp_fields,
      },
    );
  },
  get food_item_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_stddev_samp_order_by' },
    );
  },
  get food_item_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'food_item_sum_fields',
        extension: ((extensions as any) || {}).food_item_sum_fields,
      },
    );
  },
  get food_item_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_sum_order_by' },
    );
  },
  get food_item_update_column() {
    return new EnumNode({ name: 'food_item_update_column' });
  },
  get food_item_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_var_pop_fields',
        extension: ((extensions as any) || {}).food_item_var_pop_fields,
      },
    );
  },
  get food_item_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_var_pop_order_by' },
    );
  },
  get food_item_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_var_samp_fields',
        extension: ((extensions as any) || {}).food_item_var_samp_fields,
      },
    );
  },
  get food_item_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_var_samp_order_by' },
    );
  },
  get food_item_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'food_item_variance_fields',
        extension: ((extensions as any) || {}).food_item_variance_fields,
      },
    );
  },
  get food_item_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'food_item_variance_order_by' },
    );
  },
  get game() {
    return new ObjectNode(
      {
        get address() {
          return new FieldNode(schema.String, undefined, true);
        },
        get cuisines_filter_mode() {
          return new FieldNode(
            schema.game_cuisines_filter_mode_enum,
            undefined,
            false,
          );
        },
        get eat_time() {
          return new FieldNode(schema.timestamp, undefined, false);
        },
        get game_choices() {
          return new FieldNode(
            new ArrayNode(schema.game_choice, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_choices_aggregate() {
          return new FieldNode(
            schema.game_choice_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_creator() {
          return new FieldNode(schema.user, undefined, false);
        },
        get game_creator_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get game_cuisines() {
          return new FieldNode(
            new ArrayNode(schema.game_cuisine, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_cuisines_aggregate() {
          return new FieldNode(
            schema.game_cuisine_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_players() {
          return new FieldNode(
            new ArrayNode(schema.game_player, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_player_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_players_aggregate() {
          return new FieldNode(
            schema.game_player_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_player_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_status() {
          return new FieldNode(schema.game_game_status_enum, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get latitude() {
          return new FieldNode(schema.float8, undefined, false);
        },
        get longitude() {
          return new FieldNode(schema.float8, undefined, false);
        },
        get menus_filter() {
          return new FieldNode(schema._varchar, undefined, false);
        },
        get mode() {
          return new FieldNode(schema.String, undefined, false);
        },
        get prices() {
          return new FieldNode(schema._int4, undefined, true);
        },
        get search_magnitude() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get time_created() {
          return new FieldNode(schema.timestamp, undefined, false);
        },
        get unit_of_measure() {
          return new FieldNode(
            schema.game_unit_of_measure_enum,
            undefined,
            false,
          );
        },
        get winning_restaurant() {
          return new FieldNode(schema.restaurant, undefined, true);
        },
        get winning_restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      { name: 'game', extension: ((extensions as any) || {}).game },
    );
  },
  get game_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.game_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.game, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'game_aggregate',
        extension: ((extensions as any) || {}).game_aggregate,
      },
    );
  },
  get game_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.game_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.game_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.game_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.game_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(schema.game_stddev_pop_fields, undefined, true);
        },
        get stddev_samp() {
          return new FieldNode(schema.game_stddev_samp_fields, undefined, true);
        },
        get sum() {
          return new FieldNode(schema.game_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(schema.game_var_pop_fields, undefined, true);
        },
        get var_samp() {
          return new FieldNode(schema.game_var_samp_fields, undefined, true);
        },
        get variance() {
          return new FieldNode(schema.game_variance_fields, undefined, true);
        },
      },
      {
        name: 'game_aggregate_fields',
        extension: ((extensions as any) || {}).game_aggregate_fields,
      },
    );
  },
  get game_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.game_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.game_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.game_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.game_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.game_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(schema.game_stddev_samp_order_by, true);
        },
        get sum() {
          return new InputNodeField(schema.game_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.game_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.game_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.game_variance_order_by, true);
        },
      },
      { name: 'game_aggregate_order_by' },
    );
  },
  get game_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.game_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.game_on_conflict, true);
        },
      },
      { name: 'game_arr_rel_insert_input' },
    );
  },
  get game_avg_fields() {
    return new ObjectNode(
      {
        get game_creator_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get search_magnitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get winning_restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_avg_fields',
        extension: ((extensions as any) || {}).game_avg_fields,
      },
    );
  },
  get game_avg_order_by() {
    return new InputNode(
      {
        get game_creator_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_avg_order_by' },
    );
  },
  get game_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.game_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.game_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.game_bool_exp, true),
            true,
          );
        },
        get address() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get cuisines_filter_mode() {
          return new InputNodeField(
            schema.game_cuisines_filter_mode_enum_comparison_exp,
            true,
          );
        },
        get eat_time() {
          return new InputNodeField(schema.timestamp_comparison_exp, true);
        },
        get game_choices() {
          return new InputNodeField(schema.game_choice_bool_exp, true);
        },
        get game_creator() {
          return new InputNodeField(schema.user_bool_exp, true);
        },
        get game_creator_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get game_cuisines() {
          return new InputNodeField(schema.game_cuisine_bool_exp, true);
        },
        get game_players() {
          return new InputNodeField(schema.game_player_bool_exp, true);
        },
        get game_status() {
          return new InputNodeField(
            schema.game_game_status_enum_comparison_exp,
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get latitude() {
          return new InputNodeField(schema.float8_comparison_exp, true);
        },
        get longitude() {
          return new InputNodeField(schema.float8_comparison_exp, true);
        },
        get menus_filter() {
          return new InputNodeField(schema._varchar_comparison_exp, true);
        },
        get mode() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get prices() {
          return new InputNodeField(schema._int4_comparison_exp, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get time_created() {
          return new InputNodeField(schema.timestamp_comparison_exp, true);
        },
        get unit_of_measure() {
          return new InputNodeField(
            schema.game_unit_of_measure_enum_comparison_exp,
            true,
          );
        },
        get winning_restaurant() {
          return new InputNodeField(schema.restaurant_bool_exp, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
      },
      { name: 'game_bool_exp' },
    );
  },
  get game_choice() {
    return new ObjectNode(
      {
        get chosen_media_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get food_item_medium() {
          return new FieldNode(schema.food_item_media, undefined, true);
        },
        get game() {
          return new FieldNode(schema.game, undefined, false);
        },
        get game_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get game_player() {
          return new FieldNode(schema.game_player, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get pick_rank() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get player_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get restaurant() {
          return new FieldNode(schema.restaurant, undefined, false);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get restaurant_item() {
          return new FieldNode(schema.restaurant_item, undefined, false);
        },
        get restaurant_item_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get status() {
          return new FieldNode(
            schema.game_choice_status_enum,
            undefined,
            false,
          );
        },
      },
      {
        name: 'game_choice',
        extension: ((extensions as any) || {}).game_choice,
      },
    );
  },
  get game_choice_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.game_choice_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.game_choice, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'game_choice_aggregate',
        extension: ((extensions as any) || {}).game_choice_aggregate,
      },
    );
  },
  get game_choice_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.game_choice_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.game_choice_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.game_choice_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(
            schema.game_choice_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.game_choice_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.game_choice_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(schema.game_choice_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(
            schema.game_choice_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.game_choice_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.game_choice_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'game_choice_aggregate_fields',
        extension: ((extensions as any) || {}).game_choice_aggregate_fields,
      },
    );
  },
  get game_choice_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.game_choice_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.game_choice_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.game_choice_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.game_choice_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.game_choice_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.game_choice_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.game_choice_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.game_choice_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.game_choice_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.game_choice_variance_order_by, true);
        },
      },
      { name: 'game_choice_aggregate_order_by' },
    );
  },
  get game_choice_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.game_choice_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.game_choice_on_conflict, true);
        },
      },
      { name: 'game_choice_arr_rel_insert_input' },
    );
  },
  get game_choice_avg_fields() {
    return new ObjectNode(
      {
        get chosen_media_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get pick_rank() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get player_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_choice_avg_fields',
        extension: ((extensions as any) || {}).game_choice_avg_fields,
      },
    );
  },
  get game_choice_avg_order_by() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get player_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_choice_avg_order_by' },
    );
  },
  get game_choice_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.game_choice_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.game_choice_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.game_choice_bool_exp, true),
            true,
          );
        },
        get chosen_media_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get food_item_medium() {
          return new InputNodeField(schema.food_item_media_bool_exp, true);
        },
        get game() {
          return new InputNodeField(schema.game_bool_exp, true);
        },
        get game_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get game_player() {
          return new InputNodeField(schema.game_player_bool_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get player_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get restaurant() {
          return new InputNodeField(schema.restaurant_bool_exp, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get restaurant_item() {
          return new InputNodeField(schema.restaurant_item_bool_exp, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get status() {
          return new InputNodeField(
            schema.game_choice_status_enum_comparison_exp,
            true,
          );
        },
      },
      { name: 'game_choice_bool_exp' },
    );
  },
  get game_choice_constraint() {
    return new EnumNode({ name: 'game_choice_constraint' });
  },
  get game_choice_inc_input() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.Int, true);
        },
        get game_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.Int, true);
        },
        get player_id() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'game_choice_inc_input' },
    );
  },
  get game_choice_insert_input() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.Int, true);
        },
        get food_item_medium() {
          return new InputNodeField(
            schema.food_item_media_obj_rel_insert_input,
            true,
          );
        },
        get game() {
          return new InputNodeField(schema.game_obj_rel_insert_input, true);
        },
        get game_id() {
          return new InputNodeField(schema.Int, true);
        },
        get game_player() {
          return new InputNodeField(
            schema.game_player_obj_rel_insert_input,
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.Int, true);
        },
        get player_id() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurant() {
          return new InputNodeField(
            schema.restaurant_obj_rel_insert_input,
            true,
          );
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurant_item() {
          return new InputNodeField(
            schema.restaurant_item_obj_rel_insert_input,
            true,
          );
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.Int, true);
        },
        get status() {
          return new InputNodeField(schema.game_choice_status_enum, true);
        },
      },
      { name: 'game_choice_insert_input' },
    );
  },
  get game_choice_max_fields() {
    return new ObjectNode(
      {
        get chosen_media_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get pick_rank() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get player_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurant_item_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_choice_max_fields',
        extension: ((extensions as any) || {}).game_choice_max_fields,
      },
    );
  },
  get game_choice_max_order_by() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get player_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_choice_max_order_by' },
    );
  },
  get game_choice_min_fields() {
    return new ObjectNode(
      {
        get chosen_media_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get pick_rank() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get player_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurant_item_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_choice_min_fields',
        extension: ((extensions as any) || {}).game_choice_min_fields,
      },
    );
  },
  get game_choice_min_order_by() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get player_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_choice_min_order_by' },
    );
  },
  get game_choice_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.game_choice, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'game_choice_mutation_response',
        extension: ((extensions as any) || {}).game_choice_mutation_response,
      },
    );
  },
  get game_choice_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.game_choice_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.game_choice_on_conflict, true);
        },
      },
      { name: 'game_choice_obj_rel_insert_input' },
    );
  },
  get game_choice_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.game_choice_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.game_choice_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.game_choice_bool_exp, true);
        },
      },
      { name: 'game_choice_on_conflict' },
    );
  },
  get game_choice_order_by() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_medium() {
          return new InputNodeField(schema.food_item_media_order_by, true);
        },
        get game() {
          return new InputNodeField(schema.game_order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_player() {
          return new InputNodeField(schema.game_player_order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get player_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant() {
          return new InputNodeField(schema.restaurant_order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_item() {
          return new InputNodeField(schema.restaurant_item_order_by, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get status() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_choice_order_by' },
    );
  },
  get game_choice_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'game_choice_pk_columns_input' },
    );
  },
  get game_choice_select_column() {
    return new EnumNode({ name: 'game_choice_select_column' });
  },
  get game_choice_set_input() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.Int, true);
        },
        get game_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.Int, true);
        },
        get player_id() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.Int, true);
        },
        get status() {
          return new InputNodeField(schema.game_choice_status_enum, true);
        },
      },
      { name: 'game_choice_set_input' },
    );
  },
  get game_choice_status_enum() {
    return new ScalarNode({
      name: 'game_choice_status_enum',
      extension: ((extensions as any) || {}).game_choice_status_enum,
    });
  },
  get game_choice_status_enum_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.game_choice_status_enum, true);
        },
        get _gt() {
          return new InputNodeField(schema.game_choice_status_enum, true);
        },
        get _gte() {
          return new InputNodeField(schema.game_choice_status_enum, true);
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema.game_choice_status_enum, true),
            true,
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.game_choice_status_enum, true);
        },
        get _lte() {
          return new InputNodeField(schema.game_choice_status_enum, true);
        },
        get _neq() {
          return new InputNodeField(schema.game_choice_status_enum, true);
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema.game_choice_status_enum, true),
            true,
          );
        },
      },
      { name: 'game_choice_status_enum_comparison_exp' },
    );
  },
  get game_choice_stddev_fields() {
    return new ObjectNode(
      {
        get chosen_media_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get pick_rank() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get player_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_choice_stddev_fields',
        extension: ((extensions as any) || {}).game_choice_stddev_fields,
      },
    );
  },
  get game_choice_stddev_order_by() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get player_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_choice_stddev_order_by' },
    );
  },
  get game_choice_stddev_pop_fields() {
    return new ObjectNode(
      {
        get chosen_media_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get pick_rank() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get player_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_choice_stddev_pop_fields',
        extension: ((extensions as any) || {}).game_choice_stddev_pop_fields,
      },
    );
  },
  get game_choice_stddev_pop_order_by() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get player_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_choice_stddev_pop_order_by' },
    );
  },
  get game_choice_stddev_samp_fields() {
    return new ObjectNode(
      {
        get chosen_media_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get pick_rank() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get player_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_choice_stddev_samp_fields',
        extension: ((extensions as any) || {}).game_choice_stddev_samp_fields,
      },
    );
  },
  get game_choice_stddev_samp_order_by() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get player_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_choice_stddev_samp_order_by' },
    );
  },
  get game_choice_sum_fields() {
    return new ObjectNode(
      {
        get chosen_media_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get pick_rank() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get player_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurant_item_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_choice_sum_fields',
        extension: ((extensions as any) || {}).game_choice_sum_fields,
      },
    );
  },
  get game_choice_sum_order_by() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get player_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_choice_sum_order_by' },
    );
  },
  get game_choice_update_column() {
    return new EnumNode({ name: 'game_choice_update_column' });
  },
  get game_choice_var_pop_fields() {
    return new ObjectNode(
      {
        get chosen_media_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get pick_rank() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get player_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_choice_var_pop_fields',
        extension: ((extensions as any) || {}).game_choice_var_pop_fields,
      },
    );
  },
  get game_choice_var_pop_order_by() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get player_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_choice_var_pop_order_by' },
    );
  },
  get game_choice_var_samp_fields() {
    return new ObjectNode(
      {
        get chosen_media_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get pick_rank() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get player_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_choice_var_samp_fields',
        extension: ((extensions as any) || {}).game_choice_var_samp_fields,
      },
    );
  },
  get game_choice_var_samp_order_by() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get player_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_choice_var_samp_order_by' },
    );
  },
  get game_choice_variance_fields() {
    return new ObjectNode(
      {
        get chosen_media_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get pick_rank() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get player_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_choice_variance_fields',
        extension: ((extensions as any) || {}).game_choice_variance_fields,
      },
    );
  },
  get game_choice_variance_order_by() {
    return new InputNode(
      {
        get chosen_media_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get pick_rank() {
          return new InputNodeField(schema.order_by, true);
        },
        get player_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_choice_variance_order_by' },
    );
  },
  get game_constraint() {
    return new EnumNode({ name: 'game_constraint' });
  },
  get game_cuisine() {
    return new ObjectNode(
      {
        get cuisine() {
          return new FieldNode(schema.cuisine, undefined, false);
        },
        get cuisine_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get game() {
          return new FieldNode(schema.game, undefined, false);
        },
        get game_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
      },
      {
        name: 'game_cuisine',
        extension: ((extensions as any) || {}).game_cuisine,
      },
    );
  },
  get game_cuisine_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.game_cuisine_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.game_cuisine, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'game_cuisine_aggregate',
        extension: ((extensions as any) || {}).game_cuisine_aggregate,
      },
    );
  },
  get game_cuisine_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.game_cuisine_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.game_cuisine_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.game_cuisine_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(
            schema.game_cuisine_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.game_cuisine_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.game_cuisine_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(schema.game_cuisine_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(
            schema.game_cuisine_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.game_cuisine_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.game_cuisine_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'game_cuisine_aggregate_fields',
        extension: ((extensions as any) || {}).game_cuisine_aggregate_fields,
      },
    );
  },
  get game_cuisine_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.game_cuisine_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.game_cuisine_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.game_cuisine_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.game_cuisine_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.game_cuisine_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.game_cuisine_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.game_cuisine_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.game_cuisine_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(
            schema.game_cuisine_var_samp_order_by,
            true,
          );
        },
        get variance() {
          return new InputNodeField(
            schema.game_cuisine_variance_order_by,
            true,
          );
        },
      },
      { name: 'game_cuisine_aggregate_order_by' },
    );
  },
  get game_cuisine_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.game_cuisine_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.game_cuisine_on_conflict, true);
        },
      },
      { name: 'game_cuisine_arr_rel_insert_input' },
    );
  },
  get game_cuisine_avg_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_cuisine_avg_fields',
        extension: ((extensions as any) || {}).game_cuisine_avg_fields,
      },
    );
  },
  get game_cuisine_avg_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_cuisine_avg_order_by' },
    );
  },
  get game_cuisine_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.game_cuisine_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.game_cuisine_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.game_cuisine_bool_exp, true),
            true,
          );
        },
        get cuisine() {
          return new InputNodeField(schema.cuisine_bool_exp, true);
        },
        get cuisine_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get game() {
          return new InputNodeField(schema.game_bool_exp, true);
        },
        get game_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
      },
      { name: 'game_cuisine_bool_exp' },
    );
  },
  get game_cuisine_constraint() {
    return new EnumNode({ name: 'game_cuisine_constraint' });
  },
  get game_cuisine_inc_input() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.Int, true);
        },
        get game_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'game_cuisine_inc_input' },
    );
  },
  get game_cuisine_insert_input() {
    return new InputNode(
      {
        get cuisine() {
          return new InputNodeField(schema.cuisine_obj_rel_insert_input, true);
        },
        get cuisine_id() {
          return new InputNodeField(schema.Int, true);
        },
        get game() {
          return new InputNodeField(schema.game_obj_rel_insert_input, true);
        },
        get game_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'game_cuisine_insert_input' },
    );
  },
  get game_cuisine_max_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_cuisine_max_fields',
        extension: ((extensions as any) || {}).game_cuisine_max_fields,
      },
    );
  },
  get game_cuisine_max_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_cuisine_max_order_by' },
    );
  },
  get game_cuisine_min_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_cuisine_min_fields',
        extension: ((extensions as any) || {}).game_cuisine_min_fields,
      },
    );
  },
  get game_cuisine_min_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_cuisine_min_order_by' },
    );
  },
  get game_cuisine_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.game_cuisine, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'game_cuisine_mutation_response',
        extension: ((extensions as any) || {}).game_cuisine_mutation_response,
      },
    );
  },
  get game_cuisine_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.game_cuisine_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.game_cuisine_on_conflict, true);
        },
      },
      { name: 'game_cuisine_obj_rel_insert_input' },
    );
  },
  get game_cuisine_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.game_cuisine_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.game_cuisine_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.game_cuisine_bool_exp, true);
        },
      },
      { name: 'game_cuisine_on_conflict' },
    );
  },
  get game_cuisine_order_by() {
    return new InputNode(
      {
        get cuisine() {
          return new InputNodeField(schema.cuisine_order_by, true);
        },
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game() {
          return new InputNodeField(schema.game_order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_cuisine_order_by' },
    );
  },
  get game_cuisine_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'game_cuisine_pk_columns_input' },
    );
  },
  get game_cuisine_select_column() {
    return new EnumNode({ name: 'game_cuisine_select_column' });
  },
  get game_cuisine_set_input() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.Int, true);
        },
        get game_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'game_cuisine_set_input' },
    );
  },
  get game_cuisine_stddev_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_cuisine_stddev_fields',
        extension: ((extensions as any) || {}).game_cuisine_stddev_fields,
      },
    );
  },
  get game_cuisine_stddev_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_cuisine_stddev_order_by' },
    );
  },
  get game_cuisine_stddev_pop_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_cuisine_stddev_pop_fields',
        extension: ((extensions as any) || {}).game_cuisine_stddev_pop_fields,
      },
    );
  },
  get game_cuisine_stddev_pop_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_cuisine_stddev_pop_order_by' },
    );
  },
  get game_cuisine_stddev_samp_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_cuisine_stddev_samp_fields',
        extension: ((extensions as any) || {}).game_cuisine_stddev_samp_fields,
      },
    );
  },
  get game_cuisine_stddev_samp_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_cuisine_stddev_samp_order_by' },
    );
  },
  get game_cuisine_sum_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_cuisine_sum_fields',
        extension: ((extensions as any) || {}).game_cuisine_sum_fields,
      },
    );
  },
  get game_cuisine_sum_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_cuisine_sum_order_by' },
    );
  },
  get game_cuisine_update_column() {
    return new EnumNode({ name: 'game_cuisine_update_column' });
  },
  get game_cuisine_var_pop_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_cuisine_var_pop_fields',
        extension: ((extensions as any) || {}).game_cuisine_var_pop_fields,
      },
    );
  },
  get game_cuisine_var_pop_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_cuisine_var_pop_order_by' },
    );
  },
  get game_cuisine_var_samp_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_cuisine_var_samp_fields',
        extension: ((extensions as any) || {}).game_cuisine_var_samp_fields,
      },
    );
  },
  get game_cuisine_var_samp_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_cuisine_var_samp_order_by' },
    );
  },
  get game_cuisine_variance_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_cuisine_variance_fields',
        extension: ((extensions as any) || {}).game_cuisine_variance_fields,
      },
    );
  },
  get game_cuisine_variance_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_cuisine_variance_order_by' },
    );
  },
  get game_cuisines_filter_mode_enum() {
    return new ScalarNode({
      name: 'game_cuisines_filter_mode_enum',
      extension: ((extensions as any) || {}).game_cuisines_filter_mode_enum,
    });
  },
  get game_cuisines_filter_mode_enum_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(
            schema.game_cuisines_filter_mode_enum,
            true,
          );
        },
        get _gt() {
          return new InputNodeField(
            schema.game_cuisines_filter_mode_enum,
            true,
          );
        },
        get _gte() {
          return new InputNodeField(
            schema.game_cuisines_filter_mode_enum,
            true,
          );
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema.game_cuisines_filter_mode_enum, true),
            true,
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(
            schema.game_cuisines_filter_mode_enum,
            true,
          );
        },
        get _lte() {
          return new InputNodeField(
            schema.game_cuisines_filter_mode_enum,
            true,
          );
        },
        get _neq() {
          return new InputNodeField(
            schema.game_cuisines_filter_mode_enum,
            true,
          );
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema.game_cuisines_filter_mode_enum, true),
            true,
          );
        },
      },
      { name: 'game_cuisines_filter_mode_enum_comparison_exp' },
    );
  },
  get game_game_status_enum() {
    return new ScalarNode({
      name: 'game_game_status_enum',
      extension: ((extensions as any) || {}).game_game_status_enum,
    });
  },
  get game_game_status_enum_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.game_game_status_enum, true);
        },
        get _gt() {
          return new InputNodeField(schema.game_game_status_enum, true);
        },
        get _gte() {
          return new InputNodeField(schema.game_game_status_enum, true);
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema.game_game_status_enum, true),
            true,
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.game_game_status_enum, true);
        },
        get _lte() {
          return new InputNodeField(schema.game_game_status_enum, true);
        },
        get _neq() {
          return new InputNodeField(schema.game_game_status_enum, true);
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema.game_game_status_enum, true),
            true,
          );
        },
      },
      { name: 'game_game_status_enum_comparison_exp' },
    );
  },
  get game_inc_input() {
    return new InputNode(
      {
        get game_creator_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get latitude() {
          return new InputNodeField(schema.float8, true);
        },
        get longitude() {
          return new InputNodeField(schema.float8, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.Int, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'game_inc_input' },
    );
  },
  get game_insert_input() {
    return new InputNode(
      {
        get address() {
          return new InputNodeField(schema.String, true);
        },
        get cuisines_filter_mode() {
          return new InputNodeField(
            schema.game_cuisines_filter_mode_enum,
            true,
          );
        },
        get eat_time() {
          return new InputNodeField(schema.timestamp, true);
        },
        get game_choices() {
          return new InputNodeField(
            schema.game_choice_arr_rel_insert_input,
            true,
          );
        },
        get game_creator() {
          return new InputNodeField(schema.user_obj_rel_insert_input, true);
        },
        get game_creator_id() {
          return new InputNodeField(schema.Int, true);
        },
        get game_cuisines() {
          return new InputNodeField(
            schema.game_cuisine_arr_rel_insert_input,
            true,
          );
        },
        get game_players() {
          return new InputNodeField(
            schema.game_player_arr_rel_insert_input,
            true,
          );
        },
        get game_status() {
          return new InputNodeField(schema.game_game_status_enum, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get latitude() {
          return new InputNodeField(schema.float8, true);
        },
        get longitude() {
          return new InputNodeField(schema.float8, true);
        },
        get menus_filter() {
          return new InputNodeField(schema._varchar, true);
        },
        get mode() {
          return new InputNodeField(schema.String, true);
        },
        get prices() {
          return new InputNodeField(schema._int4, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.Int, true);
        },
        get time_created() {
          return new InputNodeField(schema.timestamp, true);
        },
        get unit_of_measure() {
          return new InputNodeField(schema.game_unit_of_measure_enum, true);
        },
        get winning_restaurant() {
          return new InputNodeField(
            schema.restaurant_obj_rel_insert_input,
            true,
          );
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'game_insert_input' },
    );
  },
  get game_max_fields() {
    return new ObjectNode(
      {
        get address() {
          return new FieldNode(schema.String, undefined, true);
        },
        get eat_time() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get game_creator_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get mode() {
          return new FieldNode(schema.String, undefined, true);
        },
        get search_magnitude() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get time_created() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get winning_restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_max_fields',
        extension: ((extensions as any) || {}).game_max_fields,
      },
    );
  },
  get game_max_order_by() {
    return new InputNode(
      {
        get address() {
          return new InputNodeField(schema.order_by, true);
        },
        get eat_time() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_creator_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get mode() {
          return new InputNodeField(schema.order_by, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get time_created() {
          return new InputNodeField(schema.order_by, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_max_order_by' },
    );
  },
  get game_min_fields() {
    return new ObjectNode(
      {
        get address() {
          return new FieldNode(schema.String, undefined, true);
        },
        get eat_time() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get game_creator_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get mode() {
          return new FieldNode(schema.String, undefined, true);
        },
        get search_magnitude() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get time_created() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get winning_restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_min_fields',
        extension: ((extensions as any) || {}).game_min_fields,
      },
    );
  },
  get game_min_order_by() {
    return new InputNode(
      {
        get address() {
          return new InputNodeField(schema.order_by, true);
        },
        get eat_time() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_creator_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get mode() {
          return new InputNodeField(schema.order_by, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get time_created() {
          return new InputNodeField(schema.order_by, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_min_order_by' },
    );
  },
  get game_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.game, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'game_mutation_response',
        extension: ((extensions as any) || {}).game_mutation_response,
      },
    );
  },
  get game_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.game_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.game_on_conflict, true);
        },
      },
      { name: 'game_obj_rel_insert_input' },
    );
  },
  get game_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.game_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.game_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.game_bool_exp, true);
        },
      },
      { name: 'game_on_conflict' },
    );
  },
  get game_order_by() {
    return new InputNode(
      {
        get address() {
          return new InputNodeField(schema.order_by, true);
        },
        get cuisines_filter_mode() {
          return new InputNodeField(schema.order_by, true);
        },
        get eat_time() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_choices_aggregate() {
          return new InputNodeField(
            schema.game_choice_aggregate_order_by,
            true,
          );
        },
        get game_creator() {
          return new InputNodeField(schema.user_order_by, true);
        },
        get game_creator_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_cuisines_aggregate() {
          return new InputNodeField(
            schema.game_cuisine_aggregate_order_by,
            true,
          );
        },
        get game_players_aggregate() {
          return new InputNodeField(
            schema.game_player_aggregate_order_by,
            true,
          );
        },
        get game_status() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get menus_filter() {
          return new InputNodeField(schema.order_by, true);
        },
        get mode() {
          return new InputNodeField(schema.order_by, true);
        },
        get prices() {
          return new InputNodeField(schema.order_by, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get time_created() {
          return new InputNodeField(schema.order_by, true);
        },
        get unit_of_measure() {
          return new InputNodeField(schema.order_by, true);
        },
        get winning_restaurant() {
          return new InputNodeField(schema.restaurant_order_by, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_order_by' },
    );
  },
  get game_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'game_pk_columns_input' },
    );
  },
  get game_player() {
    return new ObjectNode(
      {
        get game() {
          return new FieldNode(schema.game, undefined, false);
        },
        get game_choices() {
          return new FieldNode(
            new ArrayNode(schema.game_choice, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_choices_aggregate() {
          return new FieldNode(
            schema.game_choice_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get user() {
          return new FieldNode(schema.user, undefined, false);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
      },
      {
        name: 'game_player',
        extension: ((extensions as any) || {}).game_player,
      },
    );
  },
  get game_player_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.game_player_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.game_player, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'game_player_aggregate',
        extension: ((extensions as any) || {}).game_player_aggregate,
      },
    );
  },
  get game_player_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.game_player_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.game_player_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.game_player_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(
            schema.game_player_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.game_player_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.game_player_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(schema.game_player_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(
            schema.game_player_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.game_player_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.game_player_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'game_player_aggregate_fields',
        extension: ((extensions as any) || {}).game_player_aggregate_fields,
      },
    );
  },
  get game_player_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.game_player_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.game_player_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.game_player_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.game_player_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.game_player_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.game_player_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.game_player_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.game_player_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.game_player_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.game_player_variance_order_by, true);
        },
      },
      { name: 'game_player_aggregate_order_by' },
    );
  },
  get game_player_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.game_player_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.game_player_on_conflict, true);
        },
      },
      { name: 'game_player_arr_rel_insert_input' },
    );
  },
  get game_player_avg_fields() {
    return new ObjectNode(
      {
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_player_avg_fields',
        extension: ((extensions as any) || {}).game_player_avg_fields,
      },
    );
  },
  get game_player_avg_order_by() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_player_avg_order_by' },
    );
  },
  get game_player_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.game_player_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.game_player_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.game_player_bool_exp, true),
            true,
          );
        },
        get game() {
          return new InputNodeField(schema.game_bool_exp, true);
        },
        get game_choices() {
          return new InputNodeField(schema.game_choice_bool_exp, true);
        },
        get game_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get user() {
          return new InputNodeField(schema.user_bool_exp, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
      },
      { name: 'game_player_bool_exp' },
    );
  },
  get game_player_constraint() {
    return new EnumNode({ name: 'game_player_constraint' });
  },
  get game_player_inc_input() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'game_player_inc_input' },
    );
  },
  get game_player_insert_input() {
    return new InputNode(
      {
        get game() {
          return new InputNodeField(schema.game_obj_rel_insert_input, true);
        },
        get game_choices() {
          return new InputNodeField(
            schema.game_choice_arr_rel_insert_input,
            true,
          );
        },
        get game_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get user() {
          return new InputNodeField(schema.user_obj_rel_insert_input, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'game_player_insert_input' },
    );
  },
  get game_player_max_fields() {
    return new ObjectNode(
      {
        get game_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_player_max_fields',
        extension: ((extensions as any) || {}).game_player_max_fields,
      },
    );
  },
  get game_player_max_order_by() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_player_max_order_by' },
    );
  },
  get game_player_min_fields() {
    return new ObjectNode(
      {
        get game_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_player_min_fields',
        extension: ((extensions as any) || {}).game_player_min_fields,
      },
    );
  },
  get game_player_min_order_by() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_player_min_order_by' },
    );
  },
  get game_player_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.game_player, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'game_player_mutation_response',
        extension: ((extensions as any) || {}).game_player_mutation_response,
      },
    );
  },
  get game_player_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.game_player_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.game_player_on_conflict, true);
        },
      },
      { name: 'game_player_obj_rel_insert_input' },
    );
  },
  get game_player_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.game_player_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.game_player_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.game_player_bool_exp, true);
        },
      },
      { name: 'game_player_on_conflict' },
    );
  },
  get game_player_order_by() {
    return new InputNode(
      {
        get game() {
          return new InputNodeField(schema.game_order_by, true);
        },
        get game_choices_aggregate() {
          return new InputNodeField(
            schema.game_choice_aggregate_order_by,
            true,
          );
        },
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user() {
          return new InputNodeField(schema.user_order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_player_order_by' },
    );
  },
  get game_player_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'game_player_pk_columns_input' },
    );
  },
  get game_player_select_column() {
    return new EnumNode({ name: 'game_player_select_column' });
  },
  get game_player_set_input() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'game_player_set_input' },
    );
  },
  get game_player_stddev_fields() {
    return new ObjectNode(
      {
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_player_stddev_fields',
        extension: ((extensions as any) || {}).game_player_stddev_fields,
      },
    );
  },
  get game_player_stddev_order_by() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_player_stddev_order_by' },
    );
  },
  get game_player_stddev_pop_fields() {
    return new ObjectNode(
      {
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_player_stddev_pop_fields',
        extension: ((extensions as any) || {}).game_player_stddev_pop_fields,
      },
    );
  },
  get game_player_stddev_pop_order_by() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_player_stddev_pop_order_by' },
    );
  },
  get game_player_stddev_samp_fields() {
    return new ObjectNode(
      {
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_player_stddev_samp_fields',
        extension: ((extensions as any) || {}).game_player_stddev_samp_fields,
      },
    );
  },
  get game_player_stddev_samp_order_by() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_player_stddev_samp_order_by' },
    );
  },
  get game_player_sum_fields() {
    return new ObjectNode(
      {
        get game_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_player_sum_fields',
        extension: ((extensions as any) || {}).game_player_sum_fields,
      },
    );
  },
  get game_player_sum_order_by() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_player_sum_order_by' },
    );
  },
  get game_player_update_column() {
    return new EnumNode({ name: 'game_player_update_column' });
  },
  get game_player_var_pop_fields() {
    return new ObjectNode(
      {
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_player_var_pop_fields',
        extension: ((extensions as any) || {}).game_player_var_pop_fields,
      },
    );
  },
  get game_player_var_pop_order_by() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_player_var_pop_order_by' },
    );
  },
  get game_player_var_samp_fields() {
    return new ObjectNode(
      {
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_player_var_samp_fields',
        extension: ((extensions as any) || {}).game_player_var_samp_fields,
      },
    );
  },
  get game_player_var_samp_order_by() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_player_var_samp_order_by' },
    );
  },
  get game_player_variance_fields() {
    return new ObjectNode(
      {
        get game_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_player_variance_fields',
        extension: ((extensions as any) || {}).game_player_variance_fields,
      },
    );
  },
  get game_player_variance_order_by() {
    return new InputNode(
      {
        get game_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_player_variance_order_by' },
    );
  },
  get game_select_column() {
    return new EnumNode({ name: 'game_select_column' });
  },
  get game_set_input() {
    return new InputNode(
      {
        get address() {
          return new InputNodeField(schema.String, true);
        },
        get cuisines_filter_mode() {
          return new InputNodeField(
            schema.game_cuisines_filter_mode_enum,
            true,
          );
        },
        get eat_time() {
          return new InputNodeField(schema.timestamp, true);
        },
        get game_creator_id() {
          return new InputNodeField(schema.Int, true);
        },
        get game_status() {
          return new InputNodeField(schema.game_game_status_enum, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get latitude() {
          return new InputNodeField(schema.float8, true);
        },
        get longitude() {
          return new InputNodeField(schema.float8, true);
        },
        get menus_filter() {
          return new InputNodeField(schema._varchar, true);
        },
        get mode() {
          return new InputNodeField(schema.String, true);
        },
        get prices() {
          return new InputNodeField(schema._int4, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.Int, true);
        },
        get time_created() {
          return new InputNodeField(schema.timestamp, true);
        },
        get unit_of_measure() {
          return new InputNodeField(schema.game_unit_of_measure_enum, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'game_set_input' },
    );
  },
  get game_stddev_fields() {
    return new ObjectNode(
      {
        get game_creator_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get search_magnitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get winning_restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_stddev_fields',
        extension: ((extensions as any) || {}).game_stddev_fields,
      },
    );
  },
  get game_stddev_order_by() {
    return new InputNode(
      {
        get game_creator_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_stddev_order_by' },
    );
  },
  get game_stddev_pop_fields() {
    return new ObjectNode(
      {
        get game_creator_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get search_magnitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get winning_restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_stddev_pop_fields',
        extension: ((extensions as any) || {}).game_stddev_pop_fields,
      },
    );
  },
  get game_stddev_pop_order_by() {
    return new InputNode(
      {
        get game_creator_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_stddev_pop_order_by' },
    );
  },
  get game_stddev_samp_fields() {
    return new ObjectNode(
      {
        get game_creator_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get search_magnitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get winning_restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_stddev_samp_fields',
        extension: ((extensions as any) || {}).game_stddev_samp_fields,
      },
    );
  },
  get game_stddev_samp_order_by() {
    return new InputNode(
      {
        get game_creator_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_stddev_samp_order_by' },
    );
  },
  get game_sum_fields() {
    return new ObjectNode(
      {
        get game_creator_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get search_magnitude() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get winning_restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'game_sum_fields',
        extension: ((extensions as any) || {}).game_sum_fields,
      },
    );
  },
  get game_sum_order_by() {
    return new InputNode(
      {
        get game_creator_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_sum_order_by' },
    );
  },
  get game_unit_of_measure_enum() {
    return new ScalarNode({
      name: 'game_unit_of_measure_enum',
      extension: ((extensions as any) || {}).game_unit_of_measure_enum,
    });
  },
  get game_unit_of_measure_enum_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.game_unit_of_measure_enum, true);
        },
        get _gt() {
          return new InputNodeField(schema.game_unit_of_measure_enum, true);
        },
        get _gte() {
          return new InputNodeField(schema.game_unit_of_measure_enum, true);
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema.game_unit_of_measure_enum, true),
            true,
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.game_unit_of_measure_enum, true);
        },
        get _lte() {
          return new InputNodeField(schema.game_unit_of_measure_enum, true);
        },
        get _neq() {
          return new InputNodeField(schema.game_unit_of_measure_enum, true);
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema.game_unit_of_measure_enum, true),
            true,
          );
        },
      },
      { name: 'game_unit_of_measure_enum_comparison_exp' },
    );
  },
  get game_update_column() {
    return new EnumNode({ name: 'game_update_column' });
  },
  get game_var_pop_fields() {
    return new ObjectNode(
      {
        get game_creator_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get search_magnitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get winning_restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_var_pop_fields',
        extension: ((extensions as any) || {}).game_var_pop_fields,
      },
    );
  },
  get game_var_pop_order_by() {
    return new InputNode(
      {
        get game_creator_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_var_pop_order_by' },
    );
  },
  get game_var_samp_fields() {
    return new ObjectNode(
      {
        get game_creator_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get search_magnitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get winning_restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_var_samp_fields',
        extension: ((extensions as any) || {}).game_var_samp_fields,
      },
    );
  },
  get game_var_samp_order_by() {
    return new InputNode(
      {
        get game_creator_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_var_samp_order_by' },
    );
  },
  get game_variance_fields() {
    return new ObjectNode(
      {
        get game_creator_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get search_magnitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get winning_restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'game_variance_fields',
        extension: ((extensions as any) || {}).game_variance_fields,
      },
    );
  },
  get game_variance_order_by() {
    return new InputNode(
      {
        get game_creator_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get search_magnitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get winning_restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'game_variance_order_by' },
    );
  },
  get json() {
    return new ScalarNode({
      name: 'json',
      extension: ((extensions as any) || {}).json,
    });
  },
  get json_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.json, true);
        },
        get _gt() {
          return new InputNodeField(schema.json, true);
        },
        get _gte() {
          return new InputNodeField(schema.json, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.json, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.json, true);
        },
        get _lte() {
          return new InputNodeField(schema.json, true);
        },
        get _neq() {
          return new InputNodeField(schema.json, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.json, true), true);
        },
      },
      { name: 'json_comparison_exp' },
    );
  },
  get log() {
    return new ObjectNode(
      {
        get date_created() {
          return new FieldNode(schema.timestamp, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get payload() {
          return new FieldNode(schema.String, undefined, false);
        },
      },
      { name: 'log', extension: ((extensions as any) || {}).log },
    );
  },
  get log_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.log_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.log, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'log_aggregate',
        extension: ((extensions as any) || {}).log_aggregate,
      },
    );
  },
  get log_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.log_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.log_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.log_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.log_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.log_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(schema.log_stddev_pop_fields, undefined, true);
        },
        get stddev_samp() {
          return new FieldNode(schema.log_stddev_samp_fields, undefined, true);
        },
        get sum() {
          return new FieldNode(schema.log_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(schema.log_var_pop_fields, undefined, true);
        },
        get var_samp() {
          return new FieldNode(schema.log_var_samp_fields, undefined, true);
        },
        get variance() {
          return new FieldNode(schema.log_variance_fields, undefined, true);
        },
      },
      {
        name: 'log_aggregate_fields',
        extension: ((extensions as any) || {}).log_aggregate_fields,
      },
    );
  },
  get log_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.log_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.log_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.log_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.log_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.log_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(schema.log_stddev_samp_order_by, true);
        },
        get sum() {
          return new InputNodeField(schema.log_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.log_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.log_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.log_variance_order_by, true);
        },
      },
      { name: 'log_aggregate_order_by' },
    );
  },
  get log_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.log_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.log_on_conflict, true);
        },
      },
      { name: 'log_arr_rel_insert_input' },
    );
  },
  get log_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'log_avg_fields',
        extension: ((extensions as any) || {}).log_avg_fields,
      },
    );
  },
  get log_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'log_avg_order_by' },
    );
  },
  get log_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.log_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.log_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.log_bool_exp, true),
            true,
          );
        },
        get date_created() {
          return new InputNodeField(schema.timestamp_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get payload() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
      },
      { name: 'log_bool_exp' },
    );
  },
  get log_constraint() {
    return new EnumNode({ name: 'log_constraint' });
  },
  get log_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'log_inc_input' },
    );
  },
  get log_insert_input() {
    return new InputNode(
      {
        get date_created() {
          return new InputNodeField(schema.timestamp, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get payload() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'log_insert_input' },
    );
  },
  get log_max_fields() {
    return new ObjectNode(
      {
        get date_created() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get payload() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'log_max_fields',
        extension: ((extensions as any) || {}).log_max_fields,
      },
    );
  },
  get log_max_order_by() {
    return new InputNode(
      {
        get date_created() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get payload() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'log_max_order_by' },
    );
  },
  get log_min_fields() {
    return new ObjectNode(
      {
        get date_created() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get payload() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'log_min_fields',
        extension: ((extensions as any) || {}).log_min_fields,
      },
    );
  },
  get log_min_order_by() {
    return new InputNode(
      {
        get date_created() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get payload() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'log_min_order_by' },
    );
  },
  get log_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.log, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'log_mutation_response',
        extension: ((extensions as any) || {}).log_mutation_response,
      },
    );
  },
  get log_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.log_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.log_on_conflict, true);
        },
      },
      { name: 'log_obj_rel_insert_input' },
    );
  },
  get log_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.log_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.log_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.log_bool_exp, true);
        },
      },
      { name: 'log_on_conflict' },
    );
  },
  get log_order_by() {
    return new InputNode(
      {
        get date_created() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get payload() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'log_order_by' },
    );
  },
  get log_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'log_pk_columns_input' },
    );
  },
  get log_select_column() {
    return new EnumNode({ name: 'log_select_column' });
  },
  get log_set_input() {
    return new InputNode(
      {
        get date_created() {
          return new InputNodeField(schema.timestamp, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get payload() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'log_set_input' },
    );
  },
  get log_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'log_stddev_fields',
        extension: ((extensions as any) || {}).log_stddev_fields,
      },
    );
  },
  get log_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'log_stddev_order_by' },
    );
  },
  get log_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'log_stddev_pop_fields',
        extension: ((extensions as any) || {}).log_stddev_pop_fields,
      },
    );
  },
  get log_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'log_stddev_pop_order_by' },
    );
  },
  get log_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'log_stddev_samp_fields',
        extension: ((extensions as any) || {}).log_stddev_samp_fields,
      },
    );
  },
  get log_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'log_stddev_samp_order_by' },
    );
  },
  get log_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'log_sum_fields',
        extension: ((extensions as any) || {}).log_sum_fields,
      },
    );
  },
  get log_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'log_sum_order_by' },
    );
  },
  get log_update_column() {
    return new EnumNode({ name: 'log_update_column' });
  },
  get log_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'log_var_pop_fields',
        extension: ((extensions as any) || {}).log_var_pop_fields,
      },
    );
  },
  get log_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'log_var_pop_order_by' },
    );
  },
  get log_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'log_var_samp_fields',
        extension: ((extensions as any) || {}).log_var_samp_fields,
      },
    );
  },
  get log_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'log_var_samp_order_by' },
    );
  },
  get log_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'log_variance_fields',
        extension: ((extensions as any) || {}).log_variance_fields,
      },
    );
  },
  get log_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'log_variance_order_by' },
    );
  },
  get media_author() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(schema.String, undefined, true);
        },
        get facebook() {
          return new FieldNode(schema.String, undefined, true);
        },
        get food_item_media() {
          return new FieldNode(
            new ArrayNode(schema.food_item_media, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.food_item_media_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get food_item_media_aggregate() {
          return new FieldNode(
            schema.food_item_media_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.food_item_media_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get instagram() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get personalWebsite() {
          return new FieldNode(schema.String, undefined, true);
        },
        get twitter() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'media_author',
        extension: ((extensions as any) || {}).media_author,
      },
    );
  },
  get media_author_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.media_author_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.media_author, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'media_author_aggregate',
        extension: ((extensions as any) || {}).media_author_aggregate,
      },
    );
  },
  get media_author_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.media_author_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.media_author_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.media_author_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.media_author_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(
            schema.media_author_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.media_author_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.media_author_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(schema.media_author_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(
            schema.media_author_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.media_author_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.media_author_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'media_author_aggregate_fields',
        extension: ((extensions as any) || {}).media_author_aggregate_fields,
      },
    );
  },
  get media_author_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.media_author_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.media_author_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.media_author_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.media_author_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.media_author_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.media_author_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.media_author_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.media_author_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(
            schema.media_author_var_samp_order_by,
            true,
          );
        },
        get variance() {
          return new InputNodeField(
            schema.media_author_variance_order_by,
            true,
          );
        },
      },
      { name: 'media_author_aggregate_order_by' },
    );
  },
  get media_author_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.media_author_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.media_author_on_conflict, true);
        },
      },
      { name: 'media_author_arr_rel_insert_input' },
    );
  },
  get media_author_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'media_author_avg_fields',
        extension: ((extensions as any) || {}).media_author_avg_fields,
      },
    );
  },
  get media_author_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'media_author_avg_order_by' },
    );
  },
  get media_author_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.media_author_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.media_author_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.media_author_bool_exp, true),
            true,
          );
        },
        get email() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get facebook() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get food_item_media() {
          return new InputNodeField(schema.food_item_media_bool_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get instagram() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get personalWebsite() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get twitter() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
      },
      { name: 'media_author_bool_exp' },
    );
  },
  get media_author_constraint() {
    return new EnumNode({ name: 'media_author_constraint' });
  },
  get media_author_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'media_author_inc_input' },
    );
  },
  get media_author_insert_input() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.String, true);
        },
        get facebook() {
          return new InputNodeField(schema.String, true);
        },
        get food_item_media() {
          return new InputNodeField(
            schema.food_item_media_arr_rel_insert_input,
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get instagram() {
          return new InputNodeField(schema.String, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get personalWebsite() {
          return new InputNodeField(schema.String, true);
        },
        get twitter() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'media_author_insert_input' },
    );
  },
  get media_author_max_fields() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(schema.String, undefined, true);
        },
        get facebook() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get instagram() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get personalWebsite() {
          return new FieldNode(schema.String, undefined, true);
        },
        get twitter() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'media_author_max_fields',
        extension: ((extensions as any) || {}).media_author_max_fields,
      },
    );
  },
  get media_author_max_order_by() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.order_by, true);
        },
        get facebook() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get instagram() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get personalWebsite() {
          return new InputNodeField(schema.order_by, true);
        },
        get twitter() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'media_author_max_order_by' },
    );
  },
  get media_author_min_fields() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(schema.String, undefined, true);
        },
        get facebook() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get instagram() {
          return new FieldNode(schema.String, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get personalWebsite() {
          return new FieldNode(schema.String, undefined, true);
        },
        get twitter() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'media_author_min_fields',
        extension: ((extensions as any) || {}).media_author_min_fields,
      },
    );
  },
  get media_author_min_order_by() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.order_by, true);
        },
        get facebook() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get instagram() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get personalWebsite() {
          return new InputNodeField(schema.order_by, true);
        },
        get twitter() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'media_author_min_order_by' },
    );
  },
  get media_author_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.media_author, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'media_author_mutation_response',
        extension: ((extensions as any) || {}).media_author_mutation_response,
      },
    );
  },
  get media_author_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.media_author_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.media_author_on_conflict, true);
        },
      },
      { name: 'media_author_obj_rel_insert_input' },
    );
  },
  get media_author_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.media_author_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.media_author_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.media_author_bool_exp, true);
        },
      },
      { name: 'media_author_on_conflict' },
    );
  },
  get media_author_order_by() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.order_by, true);
        },
        get facebook() {
          return new InputNodeField(schema.order_by, true);
        },
        get food_item_media_aggregate() {
          return new InputNodeField(
            schema.food_item_media_aggregate_order_by,
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get instagram() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get personalWebsite() {
          return new InputNodeField(schema.order_by, true);
        },
        get twitter() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'media_author_order_by' },
    );
  },
  get media_author_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'media_author_pk_columns_input' },
    );
  },
  get media_author_select_column() {
    return new EnumNode({ name: 'media_author_select_column' });
  },
  get media_author_set_input() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.String, true);
        },
        get facebook() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get instagram() {
          return new InputNodeField(schema.String, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get personalWebsite() {
          return new InputNodeField(schema.String, true);
        },
        get twitter() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'media_author_set_input' },
    );
  },
  get media_author_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'media_author_stddev_fields',
        extension: ((extensions as any) || {}).media_author_stddev_fields,
      },
    );
  },
  get media_author_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'media_author_stddev_order_by' },
    );
  },
  get media_author_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'media_author_stddev_pop_fields',
        extension: ((extensions as any) || {}).media_author_stddev_pop_fields,
      },
    );
  },
  get media_author_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'media_author_stddev_pop_order_by' },
    );
  },
  get media_author_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'media_author_stddev_samp_fields',
        extension: ((extensions as any) || {}).media_author_stddev_samp_fields,
      },
    );
  },
  get media_author_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'media_author_stddev_samp_order_by' },
    );
  },
  get media_author_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'media_author_sum_fields',
        extension: ((extensions as any) || {}).media_author_sum_fields,
      },
    );
  },
  get media_author_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'media_author_sum_order_by' },
    );
  },
  get media_author_update_column() {
    return new EnumNode({ name: 'media_author_update_column' });
  },
  get media_author_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'media_author_var_pop_fields',
        extension: ((extensions as any) || {}).media_author_var_pop_fields,
      },
    );
  },
  get media_author_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'media_author_var_pop_order_by' },
    );
  },
  get media_author_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'media_author_var_samp_fields',
        extension: ((extensions as any) || {}).media_author_var_samp_fields,
      },
    );
  },
  get media_author_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'media_author_var_samp_order_by' },
    );
  },
  get media_author_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'media_author_variance_fields',
        extension: ((extensions as any) || {}).media_author_variance_fields,
      },
    );
  },
  get media_author_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'media_author_variance_order_by' },
    );
  },
  get menu() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get is_game_ready() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get restaurant_items() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_item, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_items_aggregate() {
          return new FieldNode(
            schema.restaurant_item_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
      },
      { name: 'menu', extension: ((extensions as any) || {}).menu },
    );
  },
  get menu_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.menu_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.menu, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'menu_aggregate',
        extension: ((extensions as any) || {}).menu_aggregate,
      },
    );
  },
  get menu_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.menu_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.menu_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.menu_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.menu_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(schema.menu_stddev_pop_fields, undefined, true);
        },
        get stddev_samp() {
          return new FieldNode(schema.menu_stddev_samp_fields, undefined, true);
        },
        get sum() {
          return new FieldNode(schema.menu_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(schema.menu_var_pop_fields, undefined, true);
        },
        get var_samp() {
          return new FieldNode(schema.menu_var_samp_fields, undefined, true);
        },
        get variance() {
          return new FieldNode(schema.menu_variance_fields, undefined, true);
        },
      },
      {
        name: 'menu_aggregate_fields',
        extension: ((extensions as any) || {}).menu_aggregate_fields,
      },
    );
  },
  get menu_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.menu_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.menu_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.menu_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.menu_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.menu_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(schema.menu_stddev_samp_order_by, true);
        },
        get sum() {
          return new InputNodeField(schema.menu_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.menu_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.menu_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.menu_variance_order_by, true);
        },
      },
      { name: 'menu_aggregate_order_by' },
    );
  },
  get menu_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.menu_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.menu_on_conflict, true);
        },
      },
      { name: 'menu_arr_rel_insert_input' },
    );
  },
  get menu_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_avg_fields',
        extension: ((extensions as any) || {}).menu_avg_fields,
      },
    );
  },
  get menu_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_avg_order_by' },
    );
  },
  get menu_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.menu_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.menu_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.menu_bool_exp, true),
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get restaurant_items() {
          return new InputNodeField(schema.restaurant_item_bool_exp, true);
        },
      },
      { name: 'menu_bool_exp' },
    );
  },
  get menu_constraint() {
    return new EnumNode({ name: 'menu_constraint' });
  },
  get menu_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'menu_inc_input' },
    );
  },
  get menu_insert_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get restaurant_items() {
          return new InputNodeField(
            schema.restaurant_item_arr_rel_insert_input,
            true,
          );
        },
      },
      { name: 'menu_insert_input' },
    );
  },
  get menu_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'menu_max_fields',
        extension: ((extensions as any) || {}).menu_max_fields,
      },
    );
  },
  get menu_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_max_order_by' },
    );
  },
  get menu_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'menu_min_fields',
        extension: ((extensions as any) || {}).menu_min_fields,
      },
    );
  },
  get menu_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_min_order_by' },
    );
  },
  get menu_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.menu, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'menu_mutation_response',
        extension: ((extensions as any) || {}).menu_mutation_response,
      },
    );
  },
  get menu_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.menu_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.menu_on_conflict, true);
        },
      },
      { name: 'menu_obj_rel_insert_input' },
    );
  },
  get menu_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.menu_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.menu_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.menu_bool_exp, true);
        },
      },
      { name: 'menu_on_conflict' },
    );
  },
  get menu_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_items_aggregate() {
          return new InputNodeField(
            schema.restaurant_item_aggregate_order_by,
            true,
          );
        },
      },
      { name: 'menu_order_by' },
    );
  },
  get menu_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'menu_pk_columns_input' },
    );
  },
  get menu_section() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get is_dessert() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get is_drink() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get is_game_ready() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get is_kids() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get restaurant_items() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_item, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_items_aggregate() {
          return new FieldNode(
            schema.restaurant_item_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
      },
      {
        name: 'menu_section',
        extension: ((extensions as any) || {}).menu_section,
      },
    );
  },
  get menu_section_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.menu_section_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.menu_section, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'menu_section_aggregate',
        extension: ((extensions as any) || {}).menu_section_aggregate,
      },
    );
  },
  get menu_section_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.menu_section_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_section_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.menu_section_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.menu_section_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(
            schema.menu_section_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.menu_section_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.menu_section_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(schema.menu_section_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(
            schema.menu_section_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.menu_section_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.menu_section_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'menu_section_aggregate_fields',
        extension: ((extensions as any) || {}).menu_section_aggregate_fields,
      },
    );
  },
  get menu_section_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.menu_section_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.menu_section_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.menu_section_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.menu_section_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.menu_section_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.menu_section_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.menu_section_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.menu_section_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(
            schema.menu_section_var_samp_order_by,
            true,
          );
        },
        get variance() {
          return new InputNodeField(
            schema.menu_section_variance_order_by,
            true,
          );
        },
      },
      { name: 'menu_section_aggregate_order_by' },
    );
  },
  get menu_section_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.menu_section_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.menu_section_on_conflict, true);
        },
      },
      { name: 'menu_section_arr_rel_insert_input' },
    );
  },
  get menu_section_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_section_avg_fields',
        extension: ((extensions as any) || {}).menu_section_avg_fields,
      },
    );
  },
  get menu_section_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_section_avg_order_by' },
    );
  },
  get menu_section_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.menu_section_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.menu_section_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.menu_section_bool_exp, true),
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get is_dessert() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get is_drink() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get is_kids() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get restaurant_items() {
          return new InputNodeField(schema.restaurant_item_bool_exp, true);
        },
      },
      { name: 'menu_section_bool_exp' },
    );
  },
  get menu_section_constraint() {
    return new EnumNode({ name: 'menu_section_constraint' });
  },
  get menu_section_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'menu_section_inc_input' },
    );
  },
  get menu_section_insert_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_dessert() {
          return new InputNodeField(schema.Boolean, true);
        },
        get is_drink() {
          return new InputNodeField(schema.Boolean, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean, true);
        },
        get is_kids() {
          return new InputNodeField(schema.Boolean, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get restaurant_items() {
          return new InputNodeField(
            schema.restaurant_item_arr_rel_insert_input,
            true,
          );
        },
      },
      { name: 'menu_section_insert_input' },
    );
  },
  get menu_section_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'menu_section_max_fields',
        extension: ((extensions as any) || {}).menu_section_max_fields,
      },
    );
  },
  get menu_section_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_section_max_order_by' },
    );
  },
  get menu_section_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'menu_section_min_fields',
        extension: ((extensions as any) || {}).menu_section_min_fields,
      },
    );
  },
  get menu_section_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_section_min_order_by' },
    );
  },
  get menu_section_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.menu_section, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'menu_section_mutation_response',
        extension: ((extensions as any) || {}).menu_section_mutation_response,
      },
    );
  },
  get menu_section_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.menu_section_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.menu_section_on_conflict, true);
        },
      },
      { name: 'menu_section_obj_rel_insert_input' },
    );
  },
  get menu_section_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.menu_section_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.menu_section_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.menu_section_bool_exp, true);
        },
      },
      { name: 'menu_section_on_conflict' },
    );
  },
  get menu_section_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get is_dessert() {
          return new InputNodeField(schema.order_by, true);
        },
        get is_drink() {
          return new InputNodeField(schema.order_by, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.order_by, true);
        },
        get is_kids() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_items_aggregate() {
          return new InputNodeField(
            schema.restaurant_item_aggregate_order_by,
            true,
          );
        },
      },
      { name: 'menu_section_order_by' },
    );
  },
  get menu_section_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'menu_section_pk_columns_input' },
    );
  },
  get menu_section_select_column() {
    return new EnumNode({ name: 'menu_section_select_column' });
  },
  get menu_section_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_dessert() {
          return new InputNodeField(schema.Boolean, true);
        },
        get is_drink() {
          return new InputNodeField(schema.Boolean, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean, true);
        },
        get is_kids() {
          return new InputNodeField(schema.Boolean, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'menu_section_set_input' },
    );
  },
  get menu_section_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_section_stddev_fields',
        extension: ((extensions as any) || {}).menu_section_stddev_fields,
      },
    );
  },
  get menu_section_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_section_stddev_order_by' },
    );
  },
  get menu_section_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_section_stddev_pop_fields',
        extension: ((extensions as any) || {}).menu_section_stddev_pop_fields,
      },
    );
  },
  get menu_section_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_section_stddev_pop_order_by' },
    );
  },
  get menu_section_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_section_stddev_samp_fields',
        extension: ((extensions as any) || {}).menu_section_stddev_samp_fields,
      },
    );
  },
  get menu_section_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_section_stddev_samp_order_by' },
    );
  },
  get menu_section_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'menu_section_sum_fields',
        extension: ((extensions as any) || {}).menu_section_sum_fields,
      },
    );
  },
  get menu_section_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_section_sum_order_by' },
    );
  },
  get menu_section_update_column() {
    return new EnumNode({ name: 'menu_section_update_column' });
  },
  get menu_section_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_section_var_pop_fields',
        extension: ((extensions as any) || {}).menu_section_var_pop_fields,
      },
    );
  },
  get menu_section_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_section_var_pop_order_by' },
    );
  },
  get menu_section_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_section_var_samp_fields',
        extension: ((extensions as any) || {}).menu_section_var_samp_fields,
      },
    );
  },
  get menu_section_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_section_var_samp_order_by' },
    );
  },
  get menu_section_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_section_variance_fields',
        extension: ((extensions as any) || {}).menu_section_variance_fields,
      },
    );
  },
  get menu_section_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_section_variance_order_by' },
    );
  },
  get menu_select_column() {
    return new EnumNode({ name: 'menu_select_column' });
  },
  get menu_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'menu_set_input' },
    );
  },
  get menu_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_stddev_fields',
        extension: ((extensions as any) || {}).menu_stddev_fields,
      },
    );
  },
  get menu_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_stddev_order_by' },
    );
  },
  get menu_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_stddev_pop_fields',
        extension: ((extensions as any) || {}).menu_stddev_pop_fields,
      },
    );
  },
  get menu_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_stddev_pop_order_by' },
    );
  },
  get menu_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_stddev_samp_fields',
        extension: ((extensions as any) || {}).menu_stddev_samp_fields,
      },
    );
  },
  get menu_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_stddev_samp_order_by' },
    );
  },
  get menu_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'menu_sum_fields',
        extension: ((extensions as any) || {}).menu_sum_fields,
      },
    );
  },
  get menu_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_sum_order_by' },
    );
  },
  get menu_update_column() {
    return new EnumNode({ name: 'menu_update_column' });
  },
  get menu_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_var_pop_fields',
        extension: ((extensions as any) || {}).menu_var_pop_fields,
      },
    );
  },
  get menu_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_var_pop_order_by' },
    );
  },
  get menu_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_var_samp_fields',
        extension: ((extensions as any) || {}).menu_var_samp_fields,
      },
    );
  },
  get menu_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_var_samp_order_by' },
    );
  },
  get menu_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'menu_variance_fields',
        extension: ((extensions as any) || {}).menu_variance_fields,
      },
    );
  },
  get menu_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'menu_variance_order_by' },
    );
  },
  get metric() {
    return new ObjectNode(
      {
        get created_at() {
          return new FieldNode(schema.timestamp, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get payload() {
          return new FieldNode(schema.String, undefined, false);
        },
      },
      { name: 'metric', extension: ((extensions as any) || {}).metric },
    );
  },
  get metric_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.metric_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.metric, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'metric_aggregate',
        extension: ((extensions as any) || {}).metric_aggregate,
      },
    );
  },
  get metric_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.metric_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.metric_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.metric_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.metric_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.metric_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(
            schema.metric_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.metric_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(schema.metric_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(schema.metric_var_pop_fields, undefined, true);
        },
        get var_samp() {
          return new FieldNode(schema.metric_var_samp_fields, undefined, true);
        },
        get variance() {
          return new FieldNode(schema.metric_variance_fields, undefined, true);
        },
      },
      {
        name: 'metric_aggregate_fields',
        extension: ((extensions as any) || {}).metric_aggregate_fields,
      },
    );
  },
  get metric_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.metric_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.metric_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.metric_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.metric_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.metric_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(schema.metric_stddev_samp_order_by, true);
        },
        get sum() {
          return new InputNodeField(schema.metric_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.metric_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.metric_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.metric_variance_order_by, true);
        },
      },
      { name: 'metric_aggregate_order_by' },
    );
  },
  get metric_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.metric_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.metric_on_conflict, true);
        },
      },
      { name: 'metric_arr_rel_insert_input' },
    );
  },
  get metric_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'metric_avg_fields',
        extension: ((extensions as any) || {}).metric_avg_fields,
      },
    );
  },
  get metric_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'metric_avg_order_by' },
    );
  },
  get metric_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.metric_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.metric_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.metric_bool_exp, true),
            true,
          );
        },
        get created_at() {
          return new InputNodeField(schema.timestamp_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get payload() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
      },
      { name: 'metric_bool_exp' },
    );
  },
  get metric_constraint() {
    return new EnumNode({ name: 'metric_constraint' });
  },
  get metric_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'metric_inc_input' },
    );
  },
  get metric_insert_input() {
    return new InputNode(
      {
        get created_at() {
          return new InputNodeField(schema.timestamp, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get payload() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'metric_insert_input' },
    );
  },
  get metric_max_fields() {
    return new ObjectNode(
      {
        get created_at() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get payload() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'metric_max_fields',
        extension: ((extensions as any) || {}).metric_max_fields,
      },
    );
  },
  get metric_max_order_by() {
    return new InputNode(
      {
        get created_at() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get payload() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'metric_max_order_by' },
    );
  },
  get metric_min_fields() {
    return new ObjectNode(
      {
        get created_at() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get payload() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'metric_min_fields',
        extension: ((extensions as any) || {}).metric_min_fields,
      },
    );
  },
  get metric_min_order_by() {
    return new InputNode(
      {
        get created_at() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get payload() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'metric_min_order_by' },
    );
  },
  get metric_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.metric, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'metric_mutation_response',
        extension: ((extensions as any) || {}).metric_mutation_response,
      },
    );
  },
  get metric_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.metric_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.metric_on_conflict, true);
        },
      },
      { name: 'metric_obj_rel_insert_input' },
    );
  },
  get metric_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.metric_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.metric_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.metric_bool_exp, true);
        },
      },
      { name: 'metric_on_conflict' },
    );
  },
  get metric_order_by() {
    return new InputNode(
      {
        get created_at() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get payload() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'metric_order_by' },
    );
  },
  get metric_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'metric_pk_columns_input' },
    );
  },
  get metric_select_column() {
    return new EnumNode({ name: 'metric_select_column' });
  },
  get metric_set_input() {
    return new InputNode(
      {
        get created_at() {
          return new InputNodeField(schema.timestamp, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get payload() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'metric_set_input' },
    );
  },
  get metric_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'metric_stddev_fields',
        extension: ((extensions as any) || {}).metric_stddev_fields,
      },
    );
  },
  get metric_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'metric_stddev_order_by' },
    );
  },
  get metric_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'metric_stddev_pop_fields',
        extension: ((extensions as any) || {}).metric_stddev_pop_fields,
      },
    );
  },
  get metric_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'metric_stddev_pop_order_by' },
    );
  },
  get metric_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'metric_stddev_samp_fields',
        extension: ((extensions as any) || {}).metric_stddev_samp_fields,
      },
    );
  },
  get metric_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'metric_stddev_samp_order_by' },
    );
  },
  get metric_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'metric_sum_fields',
        extension: ((extensions as any) || {}).metric_sum_fields,
      },
    );
  },
  get metric_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'metric_sum_order_by' },
    );
  },
  get metric_update_column() {
    return new EnumNode({ name: 'metric_update_column' });
  },
  get metric_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'metric_var_pop_fields',
        extension: ((extensions as any) || {}).metric_var_pop_fields,
      },
    );
  },
  get metric_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'metric_var_pop_order_by' },
    );
  },
  get metric_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'metric_var_samp_fields',
        extension: ((extensions as any) || {}).metric_var_samp_fields,
      },
    );
  },
  get metric_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'metric_var_samp_order_by' },
    );
  },
  get metric_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'metric_variance_fields',
        extension: ((extensions as any) || {}).metric_variance_fields,
      },
    );
  },
  get metric_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'metric_variance_order_by' },
    );
  },
  get mike_table() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, false);
        },
      },
      { name: 'mike_table', extension: ((extensions as any) || {}).mike_table },
    );
  },
  get mike_table_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.mike_table_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.mike_table, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'mike_table_aggregate',
        extension: ((extensions as any) || {}).mike_table_aggregate,
      },
    );
  },
  get mike_table_aggregate_fields() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.mike_table_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.mike_table_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.mike_table_min_fields, undefined, true);
        },
      },
      {
        name: 'mike_table_aggregate_fields',
        extension: ((extensions as any) || {}).mike_table_aggregate_fields,
      },
    );
  },
  get mike_table_aggregate_order_by() {
    return new InputNode(
      {
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.mike_table_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.mike_table_min_order_by, true);
        },
      },
      { name: 'mike_table_aggregate_order_by' },
    );
  },
  get mike_table_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.mike_table_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.mike_table_on_conflict, true);
        },
      },
      { name: 'mike_table_arr_rel_insert_input' },
    );
  },
  get mike_table_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.mike_table_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.mike_table_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.mike_table_bool_exp, true),
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
      },
      { name: 'mike_table_bool_exp' },
    );
  },
  get mike_table_constraint() {
    return new EnumNode({ name: 'mike_table_constraint' });
  },
  get mike_table_insert_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
      },
      { name: 'mike_table_insert_input' },
    );
  },
  get mike_table_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
      },
      {
        name: 'mike_table_max_fields',
        extension: ((extensions as any) || {}).mike_table_max_fields,
      },
    );
  },
  get mike_table_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'mike_table_max_order_by' },
    );
  },
  get mike_table_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
      },
      {
        name: 'mike_table_min_fields',
        extension: ((extensions as any) || {}).mike_table_min_fields,
      },
    );
  },
  get mike_table_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'mike_table_min_order_by' },
    );
  },
  get mike_table_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.mike_table, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'mike_table_mutation_response',
        extension: ((extensions as any) || {}).mike_table_mutation_response,
      },
    );
  },
  get mike_table_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.mike_table_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.mike_table_on_conflict, true);
        },
      },
      { name: 'mike_table_obj_rel_insert_input' },
    );
  },
  get mike_table_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.mike_table_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.mike_table_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.mike_table_bool_exp, true);
        },
      },
      { name: 'mike_table_on_conflict' },
    );
  },
  get mike_table_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'mike_table_order_by' },
    );
  },
  get mike_table_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, false);
        },
      },
      { name: 'mike_table_pk_columns_input' },
    );
  },
  get mike_table_select_column() {
    return new EnumNode({ name: 'mike_table_select_column' });
  },
  get mike_table_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
      },
      { name: 'mike_table_set_input' },
    );
  },
  get mike_table_update_column() {
    return new EnumNode({ name: 'mike_table_update_column' });
  },
  get mutation_root() {
    return new ObjectNode(
      {
        get Login() {
          return new FieldNode(
            schema.LoginResponse,
            new Arguments(
              {
                get identifier() {
                  return new ArgumentsField(schema.String, false);
                },
                get password() {
                  return new ArgumentsField(schema.String, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get RegisterUser() {
          return new FieldNode(
            schema.LoginResponse,
            new Arguments(
              {
                get email() {
                  return new ArgumentsField(schema.String, false);
                },
                get firstName() {
                  return new ArgumentsField(schema.String, false);
                },
                get lastName() {
                  return new ArgumentsField(schema.String, false);
                },
                get password() {
                  return new ArgumentsField(schema.String, false);
                },
                get username() {
                  return new ArgumentsField(schema.String, false);
                },
              },
              true,
            ),
            false,
          );
        },
        get delete_authenticated() {
          return new FieldNode(
            schema.authenticated_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(
                    schema.authenticated_bool_exp,
                    false,
                  );
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_authenticated_by_pk() {
          return new FieldNode(
            schema.authenticated,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_contact() {
          return new FieldNode(
            schema.contact_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.contact_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_contact_by_pk() {
          return new FieldNode(
            schema.contact,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_cuisine() {
          return new FieldNode(
            schema.cuisine_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.cuisine_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_cuisine_by_pk() {
          return new FieldNode(
            schema.cuisine,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_favorite_item_entity() {
          return new FieldNode(
            schema.favorite_item_entity_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(
                    schema.favorite_item_entity_bool_exp,
                    false,
                  );
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_favorite_item_entity_by_pk() {
          return new FieldNode(
            schema.favorite_item_entity,
            new Arguments(
              {
                get foodItemId() {
                  return new ArgumentsField(schema.Int, false);
                },
                get userId() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_food_item() {
          return new FieldNode(
            schema.food_item_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.food_item_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_food_item_by_pk() {
          return new FieldNode(
            schema.food_item,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_food_item_media() {
          return new FieldNode(
            schema.food_item_media_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(
                    schema.food_item_media_bool_exp,
                    false,
                  );
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_food_item_media_by_pk() {
          return new FieldNode(
            schema.food_item_media,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_game() {
          return new FieldNode(
            schema.game_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.game_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_game_by_pk() {
          return new FieldNode(
            schema.game,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_game_choice() {
          return new FieldNode(
            schema.game_choice_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.game_choice_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_game_choice_by_pk() {
          return new FieldNode(
            schema.game_choice,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_game_cuisine() {
          return new FieldNode(
            schema.game_cuisine_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(
                    schema.game_cuisine_bool_exp,
                    false,
                  );
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_game_cuisine_by_pk() {
          return new FieldNode(
            schema.game_cuisine,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_game_player() {
          return new FieldNode(
            schema.game_player_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.game_player_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_game_player_by_pk() {
          return new FieldNode(
            schema.game_player,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_log() {
          return new FieldNode(
            schema.log_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.log_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_log_by_pk() {
          return new FieldNode(
            schema.log,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_media_author() {
          return new FieldNode(
            schema.media_author_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(
                    schema.media_author_bool_exp,
                    false,
                  );
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_media_author_by_pk() {
          return new FieldNode(
            schema.media_author,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_menu() {
          return new FieldNode(
            schema.menu_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.menu_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_menu_by_pk() {
          return new FieldNode(
            schema.menu,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_menu_section() {
          return new FieldNode(
            schema.menu_section_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(
                    schema.menu_section_bool_exp,
                    false,
                  );
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_menu_section_by_pk() {
          return new FieldNode(
            schema.menu_section,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_metric() {
          return new FieldNode(
            schema.metric_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.metric_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_metric_by_pk() {
          return new FieldNode(
            schema.metric,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_mike_table() {
          return new FieldNode(
            schema.mike_table_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.mike_table_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_mike_table_by_pk() {
          return new FieldNode(
            schema.mike_table,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_restaurant() {
          return new FieldNode(
            schema.restaurant_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.restaurant_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_restaurant_by_pk() {
          return new FieldNode(
            schema.restaurant,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_restaurant_chain() {
          return new FieldNode(
            schema.restaurant_chain_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(
                    schema.restaurant_chain_bool_exp,
                    false,
                  );
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_restaurant_chain_by_pk() {
          return new FieldNode(
            schema.restaurant_chain,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_restaurant_cuisine() {
          return new FieldNode(
            schema.restaurant_cuisine_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(
                    schema.restaurant_cuisine_bool_exp,
                    false,
                  );
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_restaurant_cuisine_by_pk() {
          return new FieldNode(
            schema.restaurant_cuisine,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_restaurant_item() {
          return new FieldNode(
            schema.restaurant_item_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(
                    schema.restaurant_item_bool_exp,
                    false,
                  );
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_restaurant_item_by_pk() {
          return new FieldNode(
            schema.restaurant_item,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_restaurants_visited_entity() {
          return new FieldNode(
            schema.restaurants_visited_entity_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(
                    schema.restaurants_visited_entity_bool_exp,
                    false,
                  );
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_restaurants_visited_entity_by_pk() {
          return new FieldNode(
            schema.restaurants_visited_entity,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_test_table() {
          return new FieldNode(
            schema.test_table_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.test_table_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_test_table_by_pk() {
          return new FieldNode(
            schema.test_table,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_user() {
          return new FieldNode(
            schema.user_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.user_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_user_by_pk() {
          return new FieldNode(
            schema.user,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_user_device() {
          return new FieldNode(
            schema.user_device_mutation_response,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.user_device_bool_exp, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get delete_user_device_by_pk() {
          return new FieldNode(
            schema.user_device,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get insert_authenticated() {
          return new FieldNode(
            schema.authenticated_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.authenticated_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.authenticated_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_authenticated_one() {
          return new FieldNode(
            schema.authenticated,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.authenticated_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.authenticated_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_contact() {
          return new FieldNode(
            schema.contact_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.contact_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_contact_one() {
          return new FieldNode(
            schema.contact,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.contact_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.contact_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_cuisine() {
          return new FieldNode(
            schema.cuisine_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.cuisine_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.cuisine_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_cuisine_one() {
          return new FieldNode(
            schema.cuisine,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.cuisine_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.cuisine_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_favorite_item_entity() {
          return new FieldNode(
            schema.favorite_item_entity_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.favorite_item_entity_insert_input,
                    false,
                  ),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.favorite_item_entity_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_favorite_item_entity_one() {
          return new FieldNode(
            schema.favorite_item_entity,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.favorite_item_entity_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.favorite_item_entity_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_food_item() {
          return new FieldNode(
            schema.food_item_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.food_item_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_food_item_media() {
          return new FieldNode(
            schema.food_item_media_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.food_item_media_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_food_item_media_one() {
          return new FieldNode(
            schema.food_item_media,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.food_item_media_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.food_item_media_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_food_item_one() {
          return new FieldNode(
            schema.food_item,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.food_item_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.food_item_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_game() {
          return new FieldNode(
            schema.game_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.game_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_game_choice() {
          return new FieldNode(
            schema.game_choice_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.game_choice_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_game_choice_one() {
          return new FieldNode(
            schema.game_choice,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.game_choice_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.game_choice_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_game_cuisine() {
          return new FieldNode(
            schema.game_cuisine_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.game_cuisine_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_game_cuisine_one() {
          return new FieldNode(
            schema.game_cuisine,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.game_cuisine_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.game_cuisine_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_game_one() {
          return new FieldNode(
            schema.game,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.game_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.game_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_game_player() {
          return new FieldNode(
            schema.game_player_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.game_player_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_game_player_one() {
          return new FieldNode(
            schema.game_player,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.game_player_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.game_player_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_log() {
          return new FieldNode(
            schema.log_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.log_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.log_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_log_one() {
          return new FieldNode(
            schema.log,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.log_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.log_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_media_author() {
          return new FieldNode(
            schema.media_author_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.media_author_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.media_author_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_media_author_one() {
          return new FieldNode(
            schema.media_author,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.media_author_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.media_author_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_menu() {
          return new FieldNode(
            schema.menu_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.menu_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_menu_one() {
          return new FieldNode(
            schema.menu,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.menu_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.menu_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_menu_section() {
          return new FieldNode(
            schema.menu_section_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_section_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.menu_section_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_menu_section_one() {
          return new FieldNode(
            schema.menu_section,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.menu_section_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.menu_section_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_metric() {
          return new FieldNode(
            schema.metric_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.metric_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.metric_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_metric_one() {
          return new FieldNode(
            schema.metric,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.metric_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.metric_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_mike_table() {
          return new FieldNode(
            schema.mike_table_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.mike_table_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.mike_table_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_mike_table_one() {
          return new FieldNode(
            schema.mike_table,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.mike_table_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.mike_table_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_restaurant() {
          return new FieldNode(
            schema.restaurant_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.restaurant_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_restaurant_chain() {
          return new FieldNode(
            schema.restaurant_chain_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_chain_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.restaurant_chain_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_restaurant_chain_one() {
          return new FieldNode(
            schema.restaurant_chain,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.restaurant_chain_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.restaurant_chain_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_restaurant_cuisine() {
          return new FieldNode(
            schema.restaurant_cuisine_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_restaurant_cuisine_one() {
          return new FieldNode(
            schema.restaurant_cuisine,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_restaurant_item() {
          return new FieldNode(
            schema.restaurant_item_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.restaurant_item_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_restaurant_item_one() {
          return new FieldNode(
            schema.restaurant_item,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.restaurant_item_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.restaurant_item_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_restaurant_one() {
          return new FieldNode(
            schema.restaurant,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.restaurant_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.restaurant_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_restaurants_visited_entity() {
          return new FieldNode(
            schema.restaurants_visited_entity_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.restaurants_visited_entity_insert_input,
                    false,
                  ),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_restaurants_visited_entity_one() {
          return new FieldNode(
            schema.restaurants_visited_entity,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_on_conflict,
                  true,
                );
              },
            }),
            true,
          );
        },
        get insert_test_table() {
          return new FieldNode(
            schema.test_table_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.test_table_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.test_table_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_test_table_one() {
          return new FieldNode(
            schema.test_table,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.test_table_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.test_table_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_user() {
          return new FieldNode(
            schema.user_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.user_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_user_device() {
          return new FieldNode(
            schema.user_device_mutation_response,
            new Arguments({
              get objects() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_insert_input, false),
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.user_device_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_user_device_one() {
          return new FieldNode(
            schema.user_device,
            new Arguments({
              get object() {
                return new ArgumentsField(
                  schema.user_device_insert_input,
                  false,
                );
              },
              get on_conflict() {
                return new ArgumentsField(schema.user_device_on_conflict, true);
              },
            }),
            true,
          );
        },
        get insert_user_one() {
          return new FieldNode(
            schema.user,
            new Arguments({
              get object() {
                return new ArgumentsField(schema.user_insert_input, false);
              },
              get on_conflict() {
                return new ArgumentsField(schema.user_on_conflict, true);
              },
            }),
            true,
          );
        },
        get update_authenticated() {
          return new FieldNode(
            schema.authenticated_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.authenticated_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.authenticated_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.authenticated_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_authenticated_by_pk() {
          return new FieldNode(
            schema.authenticated,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.authenticated_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.authenticated_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.authenticated_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_contact() {
          return new FieldNode(
            schema.contact_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.contact_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.contact_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.contact_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_contact_by_pk() {
          return new FieldNode(
            schema.contact,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.contact_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.contact_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.contact_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_cuisine() {
          return new FieldNode(
            schema.cuisine_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.cuisine_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.cuisine_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.cuisine_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_cuisine_by_pk() {
          return new FieldNode(
            schema.cuisine,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.cuisine_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.cuisine_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.cuisine_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_favorite_item_entity() {
          return new FieldNode(
            schema.favorite_item_entity_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.favorite_item_entity_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.favorite_item_entity_set_input,
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.favorite_item_entity_bool_exp,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_favorite_item_entity_by_pk() {
          return new FieldNode(
            schema.favorite_item_entity,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.favorite_item_entity_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.favorite_item_entity_set_input,
                  true,
                );
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.favorite_item_entity_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_food_item() {
          return new FieldNode(
            schema.food_item_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.food_item_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.food_item_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.food_item_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_food_item_by_pk() {
          return new FieldNode(
            schema.food_item,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.food_item_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.food_item_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.food_item_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_food_item_media() {
          return new FieldNode(
            schema.food_item_media_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.food_item_media_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.food_item_media_set_input,
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.food_item_media_bool_exp,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_food_item_media_by_pk() {
          return new FieldNode(
            schema.food_item_media,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.food_item_media_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.food_item_media_set_input,
                  true,
                );
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.food_item_media_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_game() {
          return new FieldNode(
            schema.game_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.game_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.game_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.game_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_game_by_pk() {
          return new FieldNode(
            schema.game,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.game_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.game_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(schema.game_pk_columns_input, false);
              },
            }),
            true,
          );
        },
        get update_game_choice() {
          return new FieldNode(
            schema.game_choice_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.game_choice_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.game_choice_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_game_choice_by_pk() {
          return new FieldNode(
            schema.game_choice,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.game_choice_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.game_choice_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.game_choice_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_game_cuisine() {
          return new FieldNode(
            schema.game_cuisine_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.game_cuisine_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.game_cuisine_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.game_cuisine_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_game_cuisine_by_pk() {
          return new FieldNode(
            schema.game_cuisine,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.game_cuisine_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.game_cuisine_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.game_cuisine_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_game_player() {
          return new FieldNode(
            schema.game_player_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.game_player_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.game_player_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.game_player_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_game_player_by_pk() {
          return new FieldNode(
            schema.game_player,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.game_player_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.game_player_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.game_player_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_log() {
          return new FieldNode(
            schema.log_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.log_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.log_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.log_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_log_by_pk() {
          return new FieldNode(
            schema.log,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.log_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.log_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(schema.log_pk_columns_input, false);
              },
            }),
            true,
          );
        },
        get update_media_author() {
          return new FieldNode(
            schema.media_author_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.media_author_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.media_author_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.media_author_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_media_author_by_pk() {
          return new FieldNode(
            schema.media_author,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.media_author_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.media_author_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.media_author_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_menu() {
          return new FieldNode(
            schema.menu_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.menu_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.menu_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.menu_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_menu_by_pk() {
          return new FieldNode(
            schema.menu,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.menu_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.menu_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(schema.menu_pk_columns_input, false);
              },
            }),
            true,
          );
        },
        get update_menu_section() {
          return new FieldNode(
            schema.menu_section_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.menu_section_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.menu_section_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.menu_section_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_menu_section_by_pk() {
          return new FieldNode(
            schema.menu_section,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.menu_section_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.menu_section_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.menu_section_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_metric() {
          return new FieldNode(
            schema.metric_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.metric_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.metric_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.metric_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_metric_by_pk() {
          return new FieldNode(
            schema.metric,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.metric_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.metric_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.metric_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_mike_table() {
          return new FieldNode(
            schema.mike_table_mutation_response,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.mike_table_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.mike_table_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_mike_table_by_pk() {
          return new FieldNode(
            schema.mike_table,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.mike_table_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.mike_table_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_restaurant() {
          return new FieldNode(
            schema.restaurant_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.restaurant_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.restaurant_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.restaurant_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_restaurant_by_pk() {
          return new FieldNode(
            schema.restaurant,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.restaurant_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.restaurant_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.restaurant_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_restaurant_chain() {
          return new FieldNode(
            schema.restaurant_chain_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.restaurant_chain_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.restaurant_chain_set_input,
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_chain_bool_exp,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_restaurant_chain_by_pk() {
          return new FieldNode(
            schema.restaurant_chain,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.restaurant_chain_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.restaurant_chain_set_input,
                  true,
                );
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.restaurant_chain_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_restaurant_cuisine() {
          return new FieldNode(
            schema.restaurant_cuisine_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_set_input,
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_bool_exp,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_restaurant_cuisine_by_pk() {
          return new FieldNode(
            schema.restaurant_cuisine,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_set_input,
                  true,
                );
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_restaurant_item() {
          return new FieldNode(
            schema.restaurant_item_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.restaurant_item_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.restaurant_item_set_input,
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_restaurant_item_by_pk() {
          return new FieldNode(
            schema.restaurant_item,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.restaurant_item_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.restaurant_item_set_input,
                  true,
                );
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.restaurant_item_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_restaurants_visited_entity() {
          return new FieldNode(
            schema.restaurants_visited_entity_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_set_input,
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_bool_exp,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_restaurants_visited_entity_by_pk() {
          return new FieldNode(
            schema.restaurants_visited_entity,
            new Arguments({
              get _inc() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_inc_input,
                  true,
                );
              },
              get _set() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_set_input,
                  true,
                );
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_test_table() {
          return new FieldNode(
            schema.test_table_mutation_response,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.test_table_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.test_table_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_test_table_by_pk() {
          return new FieldNode(
            schema.test_table,
            new Arguments({
              get _set() {
                return new ArgumentsField(schema.test_table_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.test_table_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
        get update_user() {
          return new FieldNode(
            schema.user_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.user_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.user_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.user_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_user_by_pk() {
          return new FieldNode(
            schema.user,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.user_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.user_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(schema.user_pk_columns_input, false);
              },
            }),
            true,
          );
        },
        get update_user_device() {
          return new FieldNode(
            schema.user_device_mutation_response,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.user_device_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.user_device_set_input, true);
              },
              get where() {
                return new ArgumentsField(schema.user_device_bool_exp, false);
              },
            }),
            true,
          );
        },
        get update_user_device_by_pk() {
          return new FieldNode(
            schema.user_device,
            new Arguments({
              get _inc() {
                return new ArgumentsField(schema.user_device_inc_input, true);
              },
              get _set() {
                return new ArgumentsField(schema.user_device_set_input, true);
              },
              get pk_columns() {
                return new ArgumentsField(
                  schema.user_device_pk_columns_input,
                  false,
                );
              },
            }),
            true,
          );
        },
      },
      {
        name: 'mutation_root',
        extension: ((extensions as any) || {}).mutation_root,
      },
    );
  },
  get order_by() {
    return new EnumNode({ name: 'order_by' });
  },
  get query_root() {
    return new ObjectNode(
      {
        get authenticated() {
          return new FieldNode(
            new ArrayNode(schema.authenticated, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.authenticated_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.authenticated_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.authenticated_bool_exp, true);
              },
            }),
            false,
          );
        },
        get authenticated_aggregate() {
          return new FieldNode(
            schema.authenticated_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.authenticated_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.authenticated_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.authenticated_bool_exp, true);
              },
            }),
            false,
          );
        },
        get authenticated_by_pk() {
          return new FieldNode(
            schema.authenticated,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get contact() {
          return new FieldNode(
            new ArrayNode(schema.contact, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.contact_bool_exp, true);
              },
            }),
            false,
          );
        },
        get contact_aggregate() {
          return new FieldNode(
            schema.contact_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.contact_bool_exp, true);
              },
            }),
            false,
          );
        },
        get contact_by_pk() {
          return new FieldNode(
            schema.contact,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get cuisine() {
          return new FieldNode(
            new ArrayNode(schema.cuisine, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get cuisine_aggregate() {
          return new FieldNode(
            schema.cuisine_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get cuisine_by_pk() {
          return new FieldNode(
            schema.cuisine,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get favorite_item_entity() {
          return new FieldNode(
            new ArrayNode(schema.favorite_item_entity, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.favorite_item_entity_select_column,
                    true,
                  ),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.favorite_item_entity_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.favorite_item_entity_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get favorite_item_entity_aggregate() {
          return new FieldNode(
            schema.favorite_item_entity_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.favorite_item_entity_select_column,
                    true,
                  ),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.favorite_item_entity_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.favorite_item_entity_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get favorite_item_entity_by_pk() {
          return new FieldNode(
            schema.favorite_item_entity,
            new Arguments(
              {
                get foodItemId() {
                  return new ArgumentsField(schema.Int, false);
                },
                get userId() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get food_item() {
          return new FieldNode(
            new ArrayNode(schema.food_item, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.food_item_bool_exp, true);
              },
            }),
            false,
          );
        },
        get food_item_aggregate() {
          return new FieldNode(
            schema.food_item_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.food_item_bool_exp, true);
              },
            }),
            false,
          );
        },
        get food_item_by_pk() {
          return new FieldNode(
            schema.food_item,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get food_item_media() {
          return new FieldNode(
            new ArrayNode(schema.food_item_media, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.food_item_media_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get food_item_media_aggregate() {
          return new FieldNode(
            schema.food_item_media_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.food_item_media_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get food_item_media_by_pk() {
          return new FieldNode(
            schema.food_item_media,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get game() {
          return new FieldNode(
            new ArrayNode(schema.game, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_aggregate() {
          return new FieldNode(
            schema.game_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_by_pk() {
          return new FieldNode(
            schema.game,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get game_choice() {
          return new FieldNode(
            new ArrayNode(schema.game_choice, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_choice_aggregate() {
          return new FieldNode(
            schema.game_choice_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_choice_by_pk() {
          return new FieldNode(
            schema.game_choice,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get game_cuisine() {
          return new FieldNode(
            new ArrayNode(schema.game_cuisine, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_cuisine_aggregate() {
          return new FieldNode(
            schema.game_cuisine_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_cuisine_by_pk() {
          return new FieldNode(
            schema.game_cuisine,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get game_player() {
          return new FieldNode(
            new ArrayNode(schema.game_player, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_player_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_player_aggregate() {
          return new FieldNode(
            schema.game_player_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_player_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_player_by_pk() {
          return new FieldNode(
            schema.game_player,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get log() {
          return new FieldNode(
            new ArrayNode(schema.log, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.log_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.log_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.log_bool_exp, true);
              },
            }),
            false,
          );
        },
        get log_aggregate() {
          return new FieldNode(
            schema.log_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.log_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.log_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.log_bool_exp, true);
              },
            }),
            false,
          );
        },
        get log_by_pk() {
          return new FieldNode(
            schema.log,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get media_author() {
          return new FieldNode(
            new ArrayNode(schema.media_author, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.media_author_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.media_author_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.media_author_bool_exp, true);
              },
            }),
            false,
          );
        },
        get media_author_aggregate() {
          return new FieldNode(
            schema.media_author_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.media_author_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.media_author_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.media_author_bool_exp, true);
              },
            }),
            false,
          );
        },
        get media_author_by_pk() {
          return new FieldNode(
            schema.media_author,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get menu() {
          return new FieldNode(
            new ArrayNode(schema.menu, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.menu_bool_exp, true);
              },
            }),
            false,
          );
        },
        get menu_aggregate() {
          return new FieldNode(
            schema.menu_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.menu_bool_exp, true);
              },
            }),
            false,
          );
        },
        get menu_by_pk() {
          return new FieldNode(
            schema.menu,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get menu_section() {
          return new FieldNode(
            new ArrayNode(schema.menu_section, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_section_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_section_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.menu_section_bool_exp, true);
              },
            }),
            false,
          );
        },
        get menu_section_aggregate() {
          return new FieldNode(
            schema.menu_section_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_section_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_section_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.menu_section_bool_exp, true);
              },
            }),
            false,
          );
        },
        get menu_section_by_pk() {
          return new FieldNode(
            schema.menu_section,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get metric() {
          return new FieldNode(
            new ArrayNode(schema.metric, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.metric_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.metric_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.metric_bool_exp, true);
              },
            }),
            false,
          );
        },
        get metric_aggregate() {
          return new FieldNode(
            schema.metric_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.metric_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.metric_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.metric_bool_exp, true);
              },
            }),
            false,
          );
        },
        get metric_by_pk() {
          return new FieldNode(
            schema.metric,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get mike_table() {
          return new FieldNode(
            new ArrayNode(schema.mike_table, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.mike_table_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.mike_table_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.mike_table_bool_exp, true);
              },
            }),
            false,
          );
        },
        get mike_table_aggregate() {
          return new FieldNode(
            schema.mike_table_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.mike_table_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.mike_table_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.mike_table_bool_exp, true);
              },
            }),
            false,
          );
        },
        get mike_table_by_pk() {
          return new FieldNode(
            schema.mike_table,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get restaurant() {
          return new FieldNode(
            new ArrayNode(schema.restaurant, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.restaurant_bool_exp, true);
              },
            }),
            false,
          );
        },
        get restaurant_aggregate() {
          return new FieldNode(
            schema.restaurant_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.restaurant_bool_exp, true);
              },
            }),
            false,
          );
        },
        get restaurant_by_pk() {
          return new FieldNode(
            schema.restaurant,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get restaurant_chain() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_chain, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_chain_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_chain_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_chain_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_chain_aggregate() {
          return new FieldNode(
            schema.restaurant_chain_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_chain_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_chain_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_chain_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_chain_by_pk() {
          return new FieldNode(
            schema.restaurant_chain,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get restaurant_cuisine() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_cuisine, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_cuisine_aggregate() {
          return new FieldNode(
            schema.restaurant_cuisine_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_cuisine_by_pk() {
          return new FieldNode(
            schema.restaurant_cuisine,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get restaurant_item() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_item, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_item_aggregate() {
          return new FieldNode(
            schema.restaurant_item_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_item_by_pk() {
          return new FieldNode(
            schema.restaurant_item,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get restaurants_visited_entity() {
          return new FieldNode(
            new ArrayNode(schema.restaurants_visited_entity, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.restaurants_visited_entity_select_column,
                    true,
                  ),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.restaurants_visited_entity_order_by,
                    true,
                  ),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurants_visited_entity_aggregate() {
          return new FieldNode(
            schema.restaurants_visited_entity_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.restaurants_visited_entity_select_column,
                    true,
                  ),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.restaurants_visited_entity_order_by,
                    true,
                  ),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurants_visited_entity_by_pk() {
          return new FieldNode(
            schema.restaurants_visited_entity,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get test_table() {
          return new FieldNode(
            new ArrayNode(schema.test_table, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.test_table_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.test_table_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.test_table_bool_exp, true);
              },
            }),
            false,
          );
        },
        get test_table_aggregate() {
          return new FieldNode(
            schema.test_table_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.test_table_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.test_table_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.test_table_bool_exp, true);
              },
            }),
            false,
          );
        },
        get test_table_by_pk() {
          return new FieldNode(
            schema.test_table,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get user() {
          return new FieldNode(
            new ArrayNode(schema.user, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.user_bool_exp, true);
              },
            }),
            false,
          );
        },
        get user_aggregate() {
          return new FieldNode(
            schema.user_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.user_bool_exp, true);
              },
            }),
            false,
          );
        },
        get user_by_pk() {
          return new FieldNode(
            schema.user,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get user_device() {
          return new FieldNode(
            new ArrayNode(schema.user_device, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.user_device_bool_exp, true);
              },
            }),
            false,
          );
        },
        get user_device_aggregate() {
          return new FieldNode(
            schema.user_device_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.user_device_bool_exp, true);
              },
            }),
            false,
          );
        },
        get user_device_by_pk() {
          return new FieldNode(
            schema.user_device,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
      },
      { name: 'query_root', extension: ((extensions as any) || {}).query_root },
    );
  },
  get restaurant() {
    return new ObjectNode(
      {
        get chain_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get city() {
          return new FieldNode(schema.String, undefined, false);
        },
        get game_choices() {
          return new FieldNode(
            new ArrayNode(schema.game_choice, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_choices_aggregate() {
          return new FieldNode(
            schema.game_choice_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get games() {
          return new FieldNode(
            new ArrayNode(schema.game, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_bool_exp, true);
              },
            }),
            false,
          );
        },
        get games_aggregate() {
          return new FieldNode(
            schema.game_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_bool_exp, true);
              },
            }),
            false,
          );
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get is_game_ready() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get latitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get place_id() {
          return new FieldNode(schema.String, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurant_chain() {
          return new FieldNode(schema.restaurant_chain, undefined, false);
        },
        get restaurant_cuisines() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_cuisine, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_cuisines_aggregate() {
          return new FieldNode(
            schema.restaurant_cuisine_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_items() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_item, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_items_aggregate() {
          return new FieldNode(
            schema.restaurant_item_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurants_visited_entity() {
          return new FieldNode(
            schema.restaurants_visited_entity,
            undefined,
            true,
          );
        },
        get state() {
          return new FieldNode(schema.String, undefined, false);
        },
        get street_address() {
          return new FieldNode(schema.String, undefined, false);
        },
        get takeout_url() {
          return new FieldNode(schema.String, undefined, false);
        },
        get zip_code() {
          return new FieldNode(schema.String, undefined, false);
        },
      },
      { name: 'restaurant', extension: ((extensions as any) || {}).restaurant },
    );
  },
  get restaurant_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.restaurant_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.restaurant, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'restaurant_aggregate',
        extension: ((extensions as any) || {}).restaurant_aggregate,
      },
    );
  },
  get restaurant_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.restaurant_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.restaurant_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.restaurant_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(
            schema.restaurant_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.restaurant_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.restaurant_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(schema.restaurant_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(
            schema.restaurant_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.restaurant_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.restaurant_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'restaurant_aggregate_fields',
        extension: ((extensions as any) || {}).restaurant_aggregate_fields,
      },
    );
  },
  get restaurant_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.restaurant_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.restaurant_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.restaurant_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.restaurant_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.restaurant_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.restaurant_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.restaurant_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.restaurant_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.restaurant_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.restaurant_variance_order_by, true);
        },
      },
      { name: 'restaurant_aggregate_order_by' },
    );
  },
  get restaurant_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.restaurant_on_conflict, true);
        },
      },
      { name: 'restaurant_arr_rel_insert_input' },
    );
  },
  get restaurant_avg_fields() {
    return new ObjectNode(
      {
        get chain_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_avg_fields',
        extension: ((extensions as any) || {}).restaurant_avg_fields,
      },
    );
  },
  get restaurant_avg_order_by() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_avg_order_by' },
    );
  },
  get restaurant_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.restaurant_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_bool_exp, true),
            true,
          );
        },
        get chain_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get city() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get game_choices() {
          return new InputNodeField(schema.game_choice_bool_exp, true);
        },
        get games() {
          return new InputNodeField(schema.game_bool_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get latitude() {
          return new InputNodeField(schema.float8_comparison_exp, true);
        },
        get longitude() {
          return new InputNodeField(schema.float8_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get place_id() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get price() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get restaurant_chain() {
          return new InputNodeField(schema.restaurant_chain_bool_exp, true);
        },
        get restaurant_cuisines() {
          return new InputNodeField(schema.restaurant_cuisine_bool_exp, true);
        },
        get restaurant_items() {
          return new InputNodeField(schema.restaurant_item_bool_exp, true);
        },
        get restaurants_visited_entity() {
          return new InputNodeField(
            schema.restaurants_visited_entity_bool_exp,
            true,
          );
        },
        get state() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get street_address() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get takeout_url() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get zip_code() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
      },
      { name: 'restaurant_bool_exp' },
    );
  },
  get restaurant_chain() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get restaurants() {
          return new FieldNode(
            new ArrayNode(schema.restaurant, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.restaurant_bool_exp, true);
              },
            }),
            false,
          );
        },
        get restaurants_aggregate() {
          return new FieldNode(
            schema.restaurant_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.restaurant_bool_exp, true);
              },
            }),
            false,
          );
        },
      },
      {
        name: 'restaurant_chain',
        extension: ((extensions as any) || {}).restaurant_chain,
      },
    );
  },
  get restaurant_chain_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.restaurant_chain_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_chain, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'restaurant_chain_aggregate',
        extension: ((extensions as any) || {}).restaurant_chain_aggregate,
      },
    );
  },
  get restaurant_chain_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(
            schema.restaurant_chain_avg_fields,
            undefined,
            true,
          );
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_chain_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(
            schema.restaurant_chain_max_fields,
            undefined,
            true,
          );
        },
        get min() {
          return new FieldNode(
            schema.restaurant_chain_min_fields,
            undefined,
            true,
          );
        },
        get stddev() {
          return new FieldNode(
            schema.restaurant_chain_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.restaurant_chain_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.restaurant_chain_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(
            schema.restaurant_chain_sum_fields,
            undefined,
            true,
          );
        },
        get var_pop() {
          return new FieldNode(
            schema.restaurant_chain_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.restaurant_chain_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.restaurant_chain_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'restaurant_chain_aggregate_fields',
        extension: ((extensions as any) || {})
          .restaurant_chain_aggregate_fields,
      },
    );
  },
  get restaurant_chain_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.restaurant_chain_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.restaurant_chain_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.restaurant_chain_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(
            schema.restaurant_chain_stddev_order_by,
            true,
          );
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.restaurant_chain_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.restaurant_chain_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.restaurant_chain_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(
            schema.restaurant_chain_var_pop_order_by,
            true,
          );
        },
        get var_samp() {
          return new InputNodeField(
            schema.restaurant_chain_var_samp_order_by,
            true,
          );
        },
        get variance() {
          return new InputNodeField(
            schema.restaurant_chain_variance_order_by,
            true,
          );
        },
      },
      { name: 'restaurant_chain_aggregate_order_by' },
    );
  },
  get restaurant_chain_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_chain_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.restaurant_chain_on_conflict, true);
        },
      },
      { name: 'restaurant_chain_arr_rel_insert_input' },
    );
  },
  get restaurant_chain_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_chain_avg_fields',
        extension: ((extensions as any) || {}).restaurant_chain_avg_fields,
      },
    );
  },
  get restaurant_chain_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_chain_avg_order_by' },
    );
  },
  get restaurant_chain_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_chain_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.restaurant_chain_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_chain_bool_exp, true),
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get restaurants() {
          return new InputNodeField(schema.restaurant_bool_exp, true);
        },
      },
      { name: 'restaurant_chain_bool_exp' },
    );
  },
  get restaurant_chain_constraint() {
    return new EnumNode({ name: 'restaurant_chain_constraint' });
  },
  get restaurant_chain_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'restaurant_chain_inc_input' },
    );
  },
  get restaurant_chain_insert_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get restaurants() {
          return new InputNodeField(
            schema.restaurant_arr_rel_insert_input,
            true,
          );
        },
      },
      { name: 'restaurant_chain_insert_input' },
    );
  },
  get restaurant_chain_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'restaurant_chain_max_fields',
        extension: ((extensions as any) || {}).restaurant_chain_max_fields,
      },
    );
  },
  get restaurant_chain_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_chain_max_order_by' },
    );
  },
  get restaurant_chain_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'restaurant_chain_min_fields',
        extension: ((extensions as any) || {}).restaurant_chain_min_fields,
      },
    );
  },
  get restaurant_chain_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_chain_min_order_by' },
    );
  },
  get restaurant_chain_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_chain, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'restaurant_chain_mutation_response',
        extension: ((extensions as any) || {})
          .restaurant_chain_mutation_response,
      },
    );
  },
  get restaurant_chain_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            schema.restaurant_chain_insert_input,
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.restaurant_chain_on_conflict, true);
        },
      },
      { name: 'restaurant_chain_obj_rel_insert_input' },
    );
  },
  get restaurant_chain_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.restaurant_chain_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_chain_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.restaurant_chain_bool_exp, true);
        },
      },
      { name: 'restaurant_chain_on_conflict' },
    );
  },
  get restaurant_chain_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurants_aggregate() {
          return new InputNodeField(schema.restaurant_aggregate_order_by, true);
        },
      },
      { name: 'restaurant_chain_order_by' },
    );
  },
  get restaurant_chain_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'restaurant_chain_pk_columns_input' },
    );
  },
  get restaurant_chain_select_column() {
    return new EnumNode({ name: 'restaurant_chain_select_column' });
  },
  get restaurant_chain_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'restaurant_chain_set_input' },
    );
  },
  get restaurant_chain_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_chain_stddev_fields',
        extension: ((extensions as any) || {}).restaurant_chain_stddev_fields,
      },
    );
  },
  get restaurant_chain_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_chain_stddev_order_by' },
    );
  },
  get restaurant_chain_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_chain_stddev_pop_fields',
        extension: ((extensions as any) || {})
          .restaurant_chain_stddev_pop_fields,
      },
    );
  },
  get restaurant_chain_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_chain_stddev_pop_order_by' },
    );
  },
  get restaurant_chain_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_chain_stddev_samp_fields',
        extension: ((extensions as any) || {})
          .restaurant_chain_stddev_samp_fields,
      },
    );
  },
  get restaurant_chain_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_chain_stddev_samp_order_by' },
    );
  },
  get restaurant_chain_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurant_chain_sum_fields',
        extension: ((extensions as any) || {}).restaurant_chain_sum_fields,
      },
    );
  },
  get restaurant_chain_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_chain_sum_order_by' },
    );
  },
  get restaurant_chain_update_column() {
    return new EnumNode({ name: 'restaurant_chain_update_column' });
  },
  get restaurant_chain_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_chain_var_pop_fields',
        extension: ((extensions as any) || {}).restaurant_chain_var_pop_fields,
      },
    );
  },
  get restaurant_chain_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_chain_var_pop_order_by' },
    );
  },
  get restaurant_chain_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_chain_var_samp_fields',
        extension: ((extensions as any) || {}).restaurant_chain_var_samp_fields,
      },
    );
  },
  get restaurant_chain_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_chain_var_samp_order_by' },
    );
  },
  get restaurant_chain_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_chain_variance_fields',
        extension: ((extensions as any) || {}).restaurant_chain_variance_fields,
      },
    );
  },
  get restaurant_chain_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_chain_variance_order_by' },
    );
  },
  get restaurant_constraint() {
    return new EnumNode({ name: 'restaurant_constraint' });
  },
  get restaurant_cuisine() {
    return new ObjectNode(
      {
        get cuisine() {
          return new FieldNode(schema.cuisine, undefined, false);
        },
        get cuisine_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get restaurant() {
          return new FieldNode(schema.restaurant, undefined, false);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
      },
      {
        name: 'restaurant_cuisine',
        extension: ((extensions as any) || {}).restaurant_cuisine,
      },
    );
  },
  get restaurant_cuisine_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.restaurant_cuisine_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_cuisine, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'restaurant_cuisine_aggregate',
        extension: ((extensions as any) || {}).restaurant_cuisine_aggregate,
      },
    );
  },
  get restaurant_cuisine_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(
            schema.restaurant_cuisine_avg_fields,
            undefined,
            true,
          );
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(
            schema.restaurant_cuisine_max_fields,
            undefined,
            true,
          );
        },
        get min() {
          return new FieldNode(
            schema.restaurant_cuisine_min_fields,
            undefined,
            true,
          );
        },
        get stddev() {
          return new FieldNode(
            schema.restaurant_cuisine_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.restaurant_cuisine_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.restaurant_cuisine_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(
            schema.restaurant_cuisine_sum_fields,
            undefined,
            true,
          );
        },
        get var_pop() {
          return new FieldNode(
            schema.restaurant_cuisine_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.restaurant_cuisine_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.restaurant_cuisine_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'restaurant_cuisine_aggregate_fields',
        extension: ((extensions as any) || {})
          .restaurant_cuisine_aggregate_fields,
      },
    );
  },
  get restaurant_cuisine_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(
            schema.restaurant_cuisine_avg_order_by,
            true,
          );
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(
            schema.restaurant_cuisine_max_order_by,
            true,
          );
        },
        get min() {
          return new InputNodeField(
            schema.restaurant_cuisine_min_order_by,
            true,
          );
        },
        get stddev() {
          return new InputNodeField(
            schema.restaurant_cuisine_stddev_order_by,
            true,
          );
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.restaurant_cuisine_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.restaurant_cuisine_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(
            schema.restaurant_cuisine_sum_order_by,
            true,
          );
        },
        get var_pop() {
          return new InputNodeField(
            schema.restaurant_cuisine_var_pop_order_by,
            true,
          );
        },
        get var_samp() {
          return new InputNodeField(
            schema.restaurant_cuisine_var_samp_order_by,
            true,
          );
        },
        get variance() {
          return new InputNodeField(
            schema.restaurant_cuisine_variance_order_by,
            true,
          );
        },
      },
      { name: 'restaurant_cuisine_aggregate_order_by' },
    );
  },
  get restaurant_cuisine_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_cuisine_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(
            schema.restaurant_cuisine_on_conflict,
            true,
          );
        },
      },
      { name: 'restaurant_cuisine_arr_rel_insert_input' },
    );
  },
  get restaurant_cuisine_avg_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_cuisine_avg_fields',
        extension: ((extensions as any) || {}).restaurant_cuisine_avg_fields,
      },
    );
  },
  get restaurant_cuisine_avg_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_cuisine_avg_order_by' },
    );
  },
  get restaurant_cuisine_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_cuisine_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.restaurant_cuisine_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_cuisine_bool_exp, true),
            true,
          );
        },
        get cuisine() {
          return new InputNodeField(schema.cuisine_bool_exp, true);
        },
        get cuisine_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get restaurant() {
          return new InputNodeField(schema.restaurant_bool_exp, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
      },
      { name: 'restaurant_cuisine_bool_exp' },
    );
  },
  get restaurant_cuisine_constraint() {
    return new EnumNode({ name: 'restaurant_cuisine_constraint' });
  },
  get restaurant_cuisine_inc_input() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'restaurant_cuisine_inc_input' },
    );
  },
  get restaurant_cuisine_insert_input() {
    return new InputNode(
      {
        get cuisine() {
          return new InputNodeField(schema.cuisine_obj_rel_insert_input, true);
        },
        get cuisine_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurant() {
          return new InputNodeField(
            schema.restaurant_obj_rel_insert_input,
            true,
          );
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'restaurant_cuisine_insert_input' },
    );
  },
  get restaurant_cuisine_max_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurant_cuisine_max_fields',
        extension: ((extensions as any) || {}).restaurant_cuisine_max_fields,
      },
    );
  },
  get restaurant_cuisine_max_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_cuisine_max_order_by' },
    );
  },
  get restaurant_cuisine_min_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurant_cuisine_min_fields',
        extension: ((extensions as any) || {}).restaurant_cuisine_min_fields,
      },
    );
  },
  get restaurant_cuisine_min_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_cuisine_min_order_by' },
    );
  },
  get restaurant_cuisine_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_cuisine, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'restaurant_cuisine_mutation_response',
        extension: ((extensions as any) || {})
          .restaurant_cuisine_mutation_response,
      },
    );
  },
  get restaurant_cuisine_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            schema.restaurant_cuisine_insert_input,
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(
            schema.restaurant_cuisine_on_conflict,
            true,
          );
        },
      },
      { name: 'restaurant_cuisine_obj_rel_insert_input' },
    );
  },
  get restaurant_cuisine_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(
            schema.restaurant_cuisine_constraint,
            false,
          );
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_cuisine_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.restaurant_cuisine_bool_exp, true);
        },
      },
      { name: 'restaurant_cuisine_on_conflict' },
    );
  },
  get restaurant_cuisine_order_by() {
    return new InputNode(
      {
        get cuisine() {
          return new InputNodeField(schema.cuisine_order_by, true);
        },
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant() {
          return new InputNodeField(schema.restaurant_order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_cuisine_order_by' },
    );
  },
  get restaurant_cuisine_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'restaurant_cuisine_pk_columns_input' },
    );
  },
  get restaurant_cuisine_select_column() {
    return new EnumNode({ name: 'restaurant_cuisine_select_column' });
  },
  get restaurant_cuisine_set_input() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'restaurant_cuisine_set_input' },
    );
  },
  get restaurant_cuisine_stddev_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_cuisine_stddev_fields',
        extension: ((extensions as any) || {}).restaurant_cuisine_stddev_fields,
      },
    );
  },
  get restaurant_cuisine_stddev_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_cuisine_stddev_order_by' },
    );
  },
  get restaurant_cuisine_stddev_pop_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_cuisine_stddev_pop_fields',
        extension: ((extensions as any) || {})
          .restaurant_cuisine_stddev_pop_fields,
      },
    );
  },
  get restaurant_cuisine_stddev_pop_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_cuisine_stddev_pop_order_by' },
    );
  },
  get restaurant_cuisine_stddev_samp_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_cuisine_stddev_samp_fields',
        extension: ((extensions as any) || {})
          .restaurant_cuisine_stddev_samp_fields,
      },
    );
  },
  get restaurant_cuisine_stddev_samp_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_cuisine_stddev_samp_order_by' },
    );
  },
  get restaurant_cuisine_sum_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurant_cuisine_sum_fields',
        extension: ((extensions as any) || {}).restaurant_cuisine_sum_fields,
      },
    );
  },
  get restaurant_cuisine_sum_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_cuisine_sum_order_by' },
    );
  },
  get restaurant_cuisine_update_column() {
    return new EnumNode({ name: 'restaurant_cuisine_update_column' });
  },
  get restaurant_cuisine_var_pop_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_cuisine_var_pop_fields',
        extension: ((extensions as any) || {})
          .restaurant_cuisine_var_pop_fields,
      },
    );
  },
  get restaurant_cuisine_var_pop_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_cuisine_var_pop_order_by' },
    );
  },
  get restaurant_cuisine_var_samp_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_cuisine_var_samp_fields',
        extension: ((extensions as any) || {})
          .restaurant_cuisine_var_samp_fields,
      },
    );
  },
  get restaurant_cuisine_var_samp_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_cuisine_var_samp_order_by' },
    );
  },
  get restaurant_cuisine_variance_fields() {
    return new ObjectNode(
      {
        get cuisine_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_cuisine_variance_fields',
        extension: ((extensions as any) || {})
          .restaurant_cuisine_variance_fields,
      },
    );
  },
  get restaurant_cuisine_variance_order_by() {
    return new InputNode(
      {
        get cuisine_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_cuisine_variance_order_by' },
    );
  },
  get restaurant_inc_input() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get latitude() {
          return new InputNodeField(schema.float8, true);
        },
        get longitude() {
          return new InputNodeField(schema.float8, true);
        },
        get price() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'restaurant_inc_input' },
    );
  },
  get restaurant_insert_input() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.Int, true);
        },
        get city() {
          return new InputNodeField(schema.String, true);
        },
        get game_choices() {
          return new InputNodeField(
            schema.game_choice_arr_rel_insert_input,
            true,
          );
        },
        get games() {
          return new InputNodeField(schema.game_arr_rel_insert_input, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean, true);
        },
        get latitude() {
          return new InputNodeField(schema.float8, true);
        },
        get longitude() {
          return new InputNodeField(schema.float8, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get place_id() {
          return new InputNodeField(schema.String, true);
        },
        get price() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurant_chain() {
          return new InputNodeField(
            schema.restaurant_chain_obj_rel_insert_input,
            true,
          );
        },
        get restaurant_cuisines() {
          return new InputNodeField(
            schema.restaurant_cuisine_arr_rel_insert_input,
            true,
          );
        },
        get restaurant_items() {
          return new InputNodeField(
            schema.restaurant_item_arr_rel_insert_input,
            true,
          );
        },
        get restaurants_visited_entity() {
          return new InputNodeField(
            schema.restaurants_visited_entity_obj_rel_insert_input,
            true,
          );
        },
        get state() {
          return new InputNodeField(schema.String, true);
        },
        get street_address() {
          return new InputNodeField(schema.String, true);
        },
        get takeout_url() {
          return new InputNodeField(schema.String, true);
        },
        get zip_code() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'restaurant_insert_input' },
    );
  },
  get restaurant_item() {
    return new ObjectNode(
      {
        get food_item() {
          return new FieldNode(schema.food_item, undefined, false);
        },
        get food_item_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get game_choices() {
          return new FieldNode(
            new ArrayNode(schema.game_choice, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_choices_aggregate() {
          return new FieldNode(
            schema.game_choice_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get is_game_ready() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get menu() {
          return new FieldNode(schema.menu, undefined, false);
        },
        get menu_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get menu_section() {
          return new FieldNode(schema.menu_section, undefined, false);
        },
        get menu_section_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get price() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get restaurant() {
          return new FieldNode(schema.restaurant, undefined, false);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get times_served() {
          return new FieldNode(schema._varchar, undefined, false);
        },
      },
      {
        name: 'restaurant_item',
        extension: ((extensions as any) || {}).restaurant_item,
      },
    );
  },
  get restaurant_item_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.restaurant_item_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_item, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'restaurant_item_aggregate',
        extension: ((extensions as any) || {}).restaurant_item_aggregate,
      },
    );
  },
  get restaurant_item_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(
            schema.restaurant_item_avg_fields,
            undefined,
            true,
          );
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(
            schema.restaurant_item_max_fields,
            undefined,
            true,
          );
        },
        get min() {
          return new FieldNode(
            schema.restaurant_item_min_fields,
            undefined,
            true,
          );
        },
        get stddev() {
          return new FieldNode(
            schema.restaurant_item_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.restaurant_item_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.restaurant_item_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(
            schema.restaurant_item_sum_fields,
            undefined,
            true,
          );
        },
        get var_pop() {
          return new FieldNode(
            schema.restaurant_item_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.restaurant_item_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.restaurant_item_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'restaurant_item_aggregate_fields',
        extension: ((extensions as any) || {}).restaurant_item_aggregate_fields,
      },
    );
  },
  get restaurant_item_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.restaurant_item_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.restaurant_item_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.restaurant_item_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(
            schema.restaurant_item_stddev_order_by,
            true,
          );
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.restaurant_item_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.restaurant_item_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.restaurant_item_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(
            schema.restaurant_item_var_pop_order_by,
            true,
          );
        },
        get var_samp() {
          return new InputNodeField(
            schema.restaurant_item_var_samp_order_by,
            true,
          );
        },
        get variance() {
          return new InputNodeField(
            schema.restaurant_item_variance_order_by,
            true,
          );
        },
      },
      { name: 'restaurant_item_aggregate_order_by' },
    );
  },
  get restaurant_item_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_item_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.restaurant_item_on_conflict, true);
        },
      },
      { name: 'restaurant_item_arr_rel_insert_input' },
    );
  },
  get restaurant_item_avg_fields() {
    return new ObjectNode(
      {
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_section_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_item_avg_fields',
        extension: ((extensions as any) || {}).restaurant_item_avg_fields,
      },
    );
  },
  get restaurant_item_avg_order_by() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_item_avg_order_by' },
    );
  },
  get restaurant_item_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_item_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.restaurant_item_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_item_bool_exp, true),
            true,
          );
        },
        get food_item() {
          return new InputNodeField(schema.food_item_bool_exp, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get game_choices() {
          return new InputNodeField(schema.game_choice_bool_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get menu() {
          return new InputNodeField(schema.menu_bool_exp, true);
        },
        get menu_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get menu_section() {
          return new InputNodeField(schema.menu_section_bool_exp, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get price() {
          return new InputNodeField(schema.float8_comparison_exp, true);
        },
        get restaurant() {
          return new InputNodeField(schema.restaurant_bool_exp, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get times_served() {
          return new InputNodeField(schema._varchar_comparison_exp, true);
        },
      },
      { name: 'restaurant_item_bool_exp' },
    );
  },
  get restaurant_item_constraint() {
    return new EnumNode({ name: 'restaurant_item_constraint' });
  },
  get restaurant_item_inc_input() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get menu_id() {
          return new InputNodeField(schema.Int, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.Int, true);
        },
        get price() {
          return new InputNodeField(schema.float8, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'restaurant_item_inc_input' },
    );
  },
  get restaurant_item_insert_input() {
    return new InputNode(
      {
        get food_item() {
          return new InputNodeField(
            schema.food_item_obj_rel_insert_input,
            true,
          );
        },
        get food_item_id() {
          return new InputNodeField(schema.Int, true);
        },
        get game_choices() {
          return new InputNodeField(
            schema.game_choice_arr_rel_insert_input,
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean, true);
        },
        get menu() {
          return new InputNodeField(schema.menu_obj_rel_insert_input, true);
        },
        get menu_id() {
          return new InputNodeField(schema.Int, true);
        },
        get menu_section() {
          return new InputNodeField(
            schema.menu_section_obj_rel_insert_input,
            true,
          );
        },
        get menu_section_id() {
          return new InputNodeField(schema.Int, true);
        },
        get price() {
          return new InputNodeField(schema.float8, true);
        },
        get restaurant() {
          return new InputNodeField(
            schema.restaurant_obj_rel_insert_input,
            true,
          );
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
        get times_served() {
          return new InputNodeField(schema._varchar, true);
        },
      },
      { name: 'restaurant_item_insert_input' },
    );
  },
  get restaurant_item_max_fields() {
    return new ObjectNode(
      {
        get food_item_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get menu_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get menu_section_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get price() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurant_item_max_fields',
        extension: ((extensions as any) || {}).restaurant_item_max_fields,
      },
    );
  },
  get restaurant_item_max_order_by() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_item_max_order_by' },
    );
  },
  get restaurant_item_min_fields() {
    return new ObjectNode(
      {
        get food_item_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get menu_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get menu_section_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get price() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurant_item_min_fields',
        extension: ((extensions as any) || {}).restaurant_item_min_fields,
      },
    );
  },
  get restaurant_item_min_order_by() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_item_min_order_by' },
    );
  },
  get restaurant_item_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_item, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'restaurant_item_mutation_response',
        extension: ((extensions as any) || {})
          .restaurant_item_mutation_response,
      },
    );
  },
  get restaurant_item_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.restaurant_item_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.restaurant_item_on_conflict, true);
        },
      },
      { name: 'restaurant_item_obj_rel_insert_input' },
    );
  },
  get restaurant_item_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.restaurant_item_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_item_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.restaurant_item_bool_exp, true);
        },
      },
      { name: 'restaurant_item_on_conflict' },
    );
  },
  get restaurant_item_order_by() {
    return new InputNode(
      {
        get food_item() {
          return new InputNodeField(schema.food_item_order_by, true);
        },
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_choices_aggregate() {
          return new InputNodeField(
            schema.game_choice_aggregate_order_by,
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu() {
          return new InputNodeField(schema.menu_order_by, true);
        },
        get menu_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_section() {
          return new InputNodeField(schema.menu_section_order_by, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant() {
          return new InputNodeField(schema.restaurant_order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get times_served() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_item_order_by' },
    );
  },
  get restaurant_item_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'restaurant_item_pk_columns_input' },
    );
  },
  get restaurant_item_select_column() {
    return new EnumNode({ name: 'restaurant_item_select_column' });
  },
  get restaurant_item_set_input() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.Int, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean, true);
        },
        get menu_id() {
          return new InputNodeField(schema.Int, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.Int, true);
        },
        get price() {
          return new InputNodeField(schema.float8, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.Int, true);
        },
        get times_served() {
          return new InputNodeField(schema._varchar, true);
        },
      },
      { name: 'restaurant_item_set_input' },
    );
  },
  get restaurant_item_stddev_fields() {
    return new ObjectNode(
      {
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_section_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_item_stddev_fields',
        extension: ((extensions as any) || {}).restaurant_item_stddev_fields,
      },
    );
  },
  get restaurant_item_stddev_order_by() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_item_stddev_order_by' },
    );
  },
  get restaurant_item_stddev_pop_fields() {
    return new ObjectNode(
      {
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_section_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_item_stddev_pop_fields',
        extension: ((extensions as any) || {})
          .restaurant_item_stddev_pop_fields,
      },
    );
  },
  get restaurant_item_stddev_pop_order_by() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_item_stddev_pop_order_by' },
    );
  },
  get restaurant_item_stddev_samp_fields() {
    return new ObjectNode(
      {
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_section_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_item_stddev_samp_fields',
        extension: ((extensions as any) || {})
          .restaurant_item_stddev_samp_fields,
      },
    );
  },
  get restaurant_item_stddev_samp_order_by() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_item_stddev_samp_order_by' },
    );
  },
  get restaurant_item_sum_fields() {
    return new ObjectNode(
      {
        get food_item_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get menu_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get menu_section_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get price() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurant_item_sum_fields',
        extension: ((extensions as any) || {}).restaurant_item_sum_fields,
      },
    );
  },
  get restaurant_item_sum_order_by() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_item_sum_order_by' },
    );
  },
  get restaurant_item_update_column() {
    return new EnumNode({ name: 'restaurant_item_update_column' });
  },
  get restaurant_item_var_pop_fields() {
    return new ObjectNode(
      {
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_section_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_item_var_pop_fields',
        extension: ((extensions as any) || {}).restaurant_item_var_pop_fields,
      },
    );
  },
  get restaurant_item_var_pop_order_by() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_item_var_pop_order_by' },
    );
  },
  get restaurant_item_var_samp_fields() {
    return new ObjectNode(
      {
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_section_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_item_var_samp_fields',
        extension: ((extensions as any) || {}).restaurant_item_var_samp_fields,
      },
    );
  },
  get restaurant_item_var_samp_order_by() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_item_var_samp_order_by' },
    );
  },
  get restaurant_item_variance_fields() {
    return new ObjectNode(
      {
        get food_item_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get menu_section_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurant_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_item_variance_fields',
        extension: ((extensions as any) || {}).restaurant_item_variance_fields,
      },
    );
  },
  get restaurant_item_variance_order_by() {
    return new InputNode(
      {
        get food_item_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get menu_section_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_item_variance_order_by' },
    );
  },
  get restaurant_max_fields() {
    return new ObjectNode(
      {
        get chain_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get city() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get place_id() {
          return new FieldNode(schema.String, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get state() {
          return new FieldNode(schema.String, undefined, true);
        },
        get street_address() {
          return new FieldNode(schema.String, undefined, true);
        },
        get takeout_url() {
          return new FieldNode(schema.String, undefined, true);
        },
        get zip_code() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'restaurant_max_fields',
        extension: ((extensions as any) || {}).restaurant_max_fields,
      },
    );
  },
  get restaurant_max_order_by() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get city() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get place_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get state() {
          return new InputNodeField(schema.order_by, true);
        },
        get street_address() {
          return new InputNodeField(schema.order_by, true);
        },
        get takeout_url() {
          return new InputNodeField(schema.order_by, true);
        },
        get zip_code() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_max_order_by' },
    );
  },
  get restaurant_min_fields() {
    return new ObjectNode(
      {
        get chain_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get city() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get place_id() {
          return new FieldNode(schema.String, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get state() {
          return new FieldNode(schema.String, undefined, true);
        },
        get street_address() {
          return new FieldNode(schema.String, undefined, true);
        },
        get takeout_url() {
          return new FieldNode(schema.String, undefined, true);
        },
        get zip_code() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'restaurant_min_fields',
        extension: ((extensions as any) || {}).restaurant_min_fields,
      },
    );
  },
  get restaurant_min_order_by() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get city() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get place_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get state() {
          return new InputNodeField(schema.order_by, true);
        },
        get street_address() {
          return new InputNodeField(schema.order_by, true);
        },
        get takeout_url() {
          return new InputNodeField(schema.order_by, true);
        },
        get zip_code() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_min_order_by' },
    );
  },
  get restaurant_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.restaurant, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'restaurant_mutation_response',
        extension: ((extensions as any) || {}).restaurant_mutation_response,
      },
    );
  },
  get restaurant_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.restaurant_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.restaurant_on_conflict, true);
        },
      },
      { name: 'restaurant_obj_rel_insert_input' },
    );
  },
  get restaurant_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.restaurant_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.restaurant_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.restaurant_bool_exp, true);
        },
      },
      { name: 'restaurant_on_conflict' },
    );
  },
  get restaurant_order_by() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get city() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_choices_aggregate() {
          return new InputNodeField(
            schema.game_choice_aggregate_order_by,
            true,
          );
        },
        get games_aggregate() {
          return new InputNodeField(schema.game_aggregate_order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get name() {
          return new InputNodeField(schema.order_by, true);
        },
        get place_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant_chain() {
          return new InputNodeField(schema.restaurant_chain_order_by, true);
        },
        get restaurant_cuisines_aggregate() {
          return new InputNodeField(
            schema.restaurant_cuisine_aggregate_order_by,
            true,
          );
        },
        get restaurant_items_aggregate() {
          return new InputNodeField(
            schema.restaurant_item_aggregate_order_by,
            true,
          );
        },
        get restaurants_visited_entity() {
          return new InputNodeField(
            schema.restaurants_visited_entity_order_by,
            true,
          );
        },
        get state() {
          return new InputNodeField(schema.order_by, true);
        },
        get street_address() {
          return new InputNodeField(schema.order_by, true);
        },
        get takeout_url() {
          return new InputNodeField(schema.order_by, true);
        },
        get zip_code() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_order_by' },
    );
  },
  get restaurant_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'restaurant_pk_columns_input' },
    );
  },
  get restaurant_select_column() {
    return new EnumNode({ name: 'restaurant_select_column' });
  },
  get restaurant_set_input() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.Int, true);
        },
        get city() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get is_game_ready() {
          return new InputNodeField(schema.Boolean, true);
        },
        get latitude() {
          return new InputNodeField(schema.float8, true);
        },
        get longitude() {
          return new InputNodeField(schema.float8, true);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get place_id() {
          return new InputNodeField(schema.String, true);
        },
        get price() {
          return new InputNodeField(schema.Int, true);
        },
        get state() {
          return new InputNodeField(schema.String, true);
        },
        get street_address() {
          return new InputNodeField(schema.String, true);
        },
        get takeout_url() {
          return new InputNodeField(schema.String, true);
        },
        get zip_code() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'restaurant_set_input' },
    );
  },
  get restaurant_stddev_fields() {
    return new ObjectNode(
      {
        get chain_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_stddev_fields',
        extension: ((extensions as any) || {}).restaurant_stddev_fields,
      },
    );
  },
  get restaurant_stddev_order_by() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_stddev_order_by' },
    );
  },
  get restaurant_stddev_pop_fields() {
    return new ObjectNode(
      {
        get chain_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_stddev_pop_fields',
        extension: ((extensions as any) || {}).restaurant_stddev_pop_fields,
      },
    );
  },
  get restaurant_stddev_pop_order_by() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_stddev_pop_order_by' },
    );
  },
  get restaurant_stddev_samp_fields() {
    return new ObjectNode(
      {
        get chain_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_stddev_samp_fields',
        extension: ((extensions as any) || {}).restaurant_stddev_samp_fields,
      },
    );
  },
  get restaurant_stddev_samp_order_by() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_stddev_samp_order_by' },
    );
  },
  get restaurant_sum_fields() {
    return new ObjectNode(
      {
        get chain_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.float8, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurant_sum_fields',
        extension: ((extensions as any) || {}).restaurant_sum_fields,
      },
    );
  },
  get restaurant_sum_order_by() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_sum_order_by' },
    );
  },
  get restaurant_update_column() {
    return new EnumNode({ name: 'restaurant_update_column' });
  },
  get restaurant_var_pop_fields() {
    return new ObjectNode(
      {
        get chain_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_var_pop_fields',
        extension: ((extensions as any) || {}).restaurant_var_pop_fields,
      },
    );
  },
  get restaurant_var_pop_order_by() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_var_pop_order_by' },
    );
  },
  get restaurant_var_samp_fields() {
    return new ObjectNode(
      {
        get chain_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_var_samp_fields',
        extension: ((extensions as any) || {}).restaurant_var_samp_fields,
      },
    );
  },
  get restaurant_var_samp_order_by() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_var_samp_order_by' },
    );
  },
  get restaurant_variance_fields() {
    return new ObjectNode(
      {
        get chain_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get latitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get longitude() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurant_variance_fields',
        extension: ((extensions as any) || {}).restaurant_variance_fields,
      },
    );
  },
  get restaurant_variance_order_by() {
    return new InputNode(
      {
        get chain_id() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get latitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get longitude() {
          return new InputNodeField(schema.order_by, true);
        },
        get price() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurant_variance_order_by' },
    );
  },
  get restaurants_visited_entity() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get numTimesEaten() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get restaurant() {
          return new FieldNode(schema.restaurant, undefined, true);
        },
        get restaurantId() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurants_visited_entity',
        extension: ((extensions as any) || {}).restaurants_visited_entity,
      },
    );
  },
  get restaurants_visited_entity_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.restaurants_visited_entity_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.restaurants_visited_entity, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'restaurants_visited_entity_aggregate',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_aggregate,
      },
    );
  },
  get restaurants_visited_entity_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(
            schema.restaurants_visited_entity_avg_fields,
            undefined,
            true,
          );
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.restaurants_visited_entity_select_column,
                    true,
                  ),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(
            schema.restaurants_visited_entity_max_fields,
            undefined,
            true,
          );
        },
        get min() {
          return new FieldNode(
            schema.restaurants_visited_entity_min_fields,
            undefined,
            true,
          );
        },
        get stddev() {
          return new FieldNode(
            schema.restaurants_visited_entity_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.restaurants_visited_entity_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.restaurants_visited_entity_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(
            schema.restaurants_visited_entity_sum_fields,
            undefined,
            true,
          );
        },
        get var_pop() {
          return new FieldNode(
            schema.restaurants_visited_entity_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.restaurants_visited_entity_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.restaurants_visited_entity_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'restaurants_visited_entity_aggregate_fields',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_aggregate_fields,
      },
    );
  },
  get restaurants_visited_entity_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(
            schema.restaurants_visited_entity_avg_order_by,
            true,
          );
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(
            schema.restaurants_visited_entity_max_order_by,
            true,
          );
        },
        get min() {
          return new InputNodeField(
            schema.restaurants_visited_entity_min_order_by,
            true,
          );
        },
        get stddev() {
          return new InputNodeField(
            schema.restaurants_visited_entity_stddev_order_by,
            true,
          );
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.restaurants_visited_entity_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.restaurants_visited_entity_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(
            schema.restaurants_visited_entity_sum_order_by,
            true,
          );
        },
        get var_pop() {
          return new InputNodeField(
            schema.restaurants_visited_entity_var_pop_order_by,
            true,
          );
        },
        get var_samp() {
          return new InputNodeField(
            schema.restaurants_visited_entity_var_samp_order_by,
            true,
          );
        },
        get variance() {
          return new InputNodeField(
            schema.restaurants_visited_entity_variance_order_by,
            true,
          );
        },
      },
      { name: 'restaurants_visited_entity_aggregate_order_by' },
    );
  },
  get restaurants_visited_entity_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(
              schema.restaurants_visited_entity_insert_input,
              false,
            ),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(
            schema.restaurants_visited_entity_on_conflict,
            true,
          );
        },
      },
      { name: 'restaurants_visited_entity_arr_rel_insert_input' },
    );
  },
  get restaurants_visited_entity_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get numTimesEaten() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurantId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurants_visited_entity_avg_fields',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_avg_fields,
      },
    );
  },
  get restaurants_visited_entity_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurants_visited_entity_avg_order_by' },
    );
  },
  get restaurants_visited_entity_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.restaurants_visited_entity_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(
            schema.restaurants_visited_entity_bool_exp,
            true,
          );
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.restaurants_visited_entity_bool_exp, true),
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get restaurant() {
          return new InputNodeField(schema.restaurant_bool_exp, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
      },
      { name: 'restaurants_visited_entity_bool_exp' },
    );
  },
  get restaurants_visited_entity_constraint() {
    return new EnumNode({ name: 'restaurants_visited_entity_constraint' });
  },
  get restaurants_visited_entity_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'restaurants_visited_entity_inc_input' },
    );
  },
  get restaurants_visited_entity_insert_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurant() {
          return new InputNodeField(
            schema.restaurant_obj_rel_insert_input,
            true,
          );
        },
        get restaurantId() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'restaurants_visited_entity_insert_input' },
    );
  },
  get restaurants_visited_entity_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get numTimesEaten() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurantId() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurants_visited_entity_max_fields',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_max_fields,
      },
    );
  },
  get restaurants_visited_entity_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurants_visited_entity_max_order_by' },
    );
  },
  get restaurants_visited_entity_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get numTimesEaten() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurantId() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurants_visited_entity_min_fields',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_min_fields,
      },
    );
  },
  get restaurants_visited_entity_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurants_visited_entity_min_order_by' },
    );
  },
  get restaurants_visited_entity_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.restaurants_visited_entity, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'restaurants_visited_entity_mutation_response',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_mutation_response,
      },
    );
  },
  get restaurants_visited_entity_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            schema.restaurants_visited_entity_insert_input,
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(
            schema.restaurants_visited_entity_on_conflict,
            true,
          );
        },
      },
      { name: 'restaurants_visited_entity_obj_rel_insert_input' },
    );
  },
  get restaurants_visited_entity_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(
            schema.restaurants_visited_entity_constraint,
            false,
          );
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(
              schema.restaurants_visited_entity_update_column,
              false,
            ),
            false,
          );
        },
        get where() {
          return new InputNodeField(
            schema.restaurants_visited_entity_bool_exp,
            true,
          );
        },
      },
      { name: 'restaurants_visited_entity_on_conflict' },
    );
  },
  get restaurants_visited_entity_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurant() {
          return new InputNodeField(schema.restaurant_order_by, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurants_visited_entity_order_by' },
    );
  },
  get restaurants_visited_entity_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'restaurants_visited_entity_pk_columns_input' },
    );
  },
  get restaurants_visited_entity_select_column() {
    return new EnumNode({ name: 'restaurants_visited_entity_select_column' });
  },
  get restaurants_visited_entity_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.Int, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'restaurants_visited_entity_set_input' },
    );
  },
  get restaurants_visited_entity_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get numTimesEaten() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurantId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurants_visited_entity_stddev_fields',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_stddev_fields,
      },
    );
  },
  get restaurants_visited_entity_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurants_visited_entity_stddev_order_by' },
    );
  },
  get restaurants_visited_entity_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get numTimesEaten() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurantId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurants_visited_entity_stddev_pop_fields',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_stddev_pop_fields,
      },
    );
  },
  get restaurants_visited_entity_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurants_visited_entity_stddev_pop_order_by' },
    );
  },
  get restaurants_visited_entity_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get numTimesEaten() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurantId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurants_visited_entity_stddev_samp_fields',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_stddev_samp_fields,
      },
    );
  },
  get restaurants_visited_entity_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurants_visited_entity_stddev_samp_order_by' },
    );
  },
  get restaurants_visited_entity_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get numTimesEaten() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get restaurantId() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'restaurants_visited_entity_sum_fields',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_sum_fields,
      },
    );
  },
  get restaurants_visited_entity_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurants_visited_entity_sum_order_by' },
    );
  },
  get restaurants_visited_entity_update_column() {
    return new EnumNode({ name: 'restaurants_visited_entity_update_column' });
  },
  get restaurants_visited_entity_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get numTimesEaten() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurantId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurants_visited_entity_var_pop_fields',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_var_pop_fields,
      },
    );
  },
  get restaurants_visited_entity_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurants_visited_entity_var_pop_order_by' },
    );
  },
  get restaurants_visited_entity_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get numTimesEaten() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurantId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurants_visited_entity_var_samp_fields',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_var_samp_fields,
      },
    );
  },
  get restaurants_visited_entity_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurants_visited_entity_var_samp_order_by' },
    );
  },
  get restaurants_visited_entity_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get numTimesEaten() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get restaurantId() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'restaurants_visited_entity_variance_fields',
        extension: ((extensions as any) || {})
          .restaurants_visited_entity_variance_fields,
      },
    );
  },
  get restaurants_visited_entity_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get numTimesEaten() {
          return new InputNodeField(schema.order_by, true);
        },
        get restaurantId() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'restaurants_visited_entity_variance_order_by' },
    );
  },
  get subscription_root() {
    return new ObjectNode(
      {
        get authenticated() {
          return new FieldNode(
            new ArrayNode(schema.authenticated, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.authenticated_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.authenticated_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.authenticated_bool_exp, true);
              },
            }),
            false,
          );
        },
        get authenticated_aggregate() {
          return new FieldNode(
            schema.authenticated_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.authenticated_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.authenticated_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.authenticated_bool_exp, true);
              },
            }),
            false,
          );
        },
        get authenticated_by_pk() {
          return new FieldNode(
            schema.authenticated,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get contact() {
          return new FieldNode(
            new ArrayNode(schema.contact, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.contact_bool_exp, true);
              },
            }),
            false,
          );
        },
        get contact_aggregate() {
          return new FieldNode(
            schema.contact_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.contact_bool_exp, true);
              },
            }),
            false,
          );
        },
        get contact_by_pk() {
          return new FieldNode(
            schema.contact,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get cuisine() {
          return new FieldNode(
            new ArrayNode(schema.cuisine, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get cuisine_aggregate() {
          return new FieldNode(
            schema.cuisine_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get cuisine_by_pk() {
          return new FieldNode(
            schema.cuisine,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get favorite_item_entity() {
          return new FieldNode(
            new ArrayNode(schema.favorite_item_entity, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.favorite_item_entity_select_column,
                    true,
                  ),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.favorite_item_entity_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.favorite_item_entity_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get favorite_item_entity_aggregate() {
          return new FieldNode(
            schema.favorite_item_entity_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.favorite_item_entity_select_column,
                    true,
                  ),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.favorite_item_entity_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.favorite_item_entity_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get favorite_item_entity_by_pk() {
          return new FieldNode(
            schema.favorite_item_entity,
            new Arguments(
              {
                get foodItemId() {
                  return new ArgumentsField(schema.Int, false);
                },
                get userId() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get food_item() {
          return new FieldNode(
            new ArrayNode(schema.food_item, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.food_item_bool_exp, true);
              },
            }),
            false,
          );
        },
        get food_item_aggregate() {
          return new FieldNode(
            schema.food_item_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.food_item_bool_exp, true);
              },
            }),
            false,
          );
        },
        get food_item_by_pk() {
          return new FieldNode(
            schema.food_item,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get food_item_media() {
          return new FieldNode(
            new ArrayNode(schema.food_item_media, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.food_item_media_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get food_item_media_aggregate() {
          return new FieldNode(
            schema.food_item_media_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.food_item_media_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.food_item_media_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get food_item_media_by_pk() {
          return new FieldNode(
            schema.food_item_media,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get game() {
          return new FieldNode(
            new ArrayNode(schema.game, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_aggregate() {
          return new FieldNode(
            schema.game_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_by_pk() {
          return new FieldNode(
            schema.game,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get game_choice() {
          return new FieldNode(
            new ArrayNode(schema.game_choice, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_choice_aggregate() {
          return new FieldNode(
            schema.game_choice_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_choice_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_choice_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_choice_by_pk() {
          return new FieldNode(
            schema.game_choice,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get game_cuisine() {
          return new FieldNode(
            new ArrayNode(schema.game_cuisine, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_cuisine_aggregate() {
          return new FieldNode(
            schema.game_cuisine_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_cuisine_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_cuisine_by_pk() {
          return new FieldNode(
            schema.game_cuisine,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get game_player() {
          return new FieldNode(
            new ArrayNode(schema.game_player, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_player_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_player_aggregate() {
          return new FieldNode(
            schema.game_player_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_player_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_player_by_pk() {
          return new FieldNode(
            schema.game_player,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get log() {
          return new FieldNode(
            new ArrayNode(schema.log, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.log_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.log_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.log_bool_exp, true);
              },
            }),
            false,
          );
        },
        get log_aggregate() {
          return new FieldNode(
            schema.log_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.log_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.log_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.log_bool_exp, true);
              },
            }),
            false,
          );
        },
        get log_by_pk() {
          return new FieldNode(
            schema.log,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get media_author() {
          return new FieldNode(
            new ArrayNode(schema.media_author, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.media_author_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.media_author_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.media_author_bool_exp, true);
              },
            }),
            false,
          );
        },
        get media_author_aggregate() {
          return new FieldNode(
            schema.media_author_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.media_author_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.media_author_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.media_author_bool_exp, true);
              },
            }),
            false,
          );
        },
        get media_author_by_pk() {
          return new FieldNode(
            schema.media_author,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get menu() {
          return new FieldNode(
            new ArrayNode(schema.menu, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.menu_bool_exp, true);
              },
            }),
            false,
          );
        },
        get menu_aggregate() {
          return new FieldNode(
            schema.menu_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.menu_bool_exp, true);
              },
            }),
            false,
          );
        },
        get menu_by_pk() {
          return new FieldNode(
            schema.menu,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get menu_section() {
          return new FieldNode(
            new ArrayNode(schema.menu_section, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_section_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_section_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.menu_section_bool_exp, true);
              },
            }),
            false,
          );
        },
        get menu_section_aggregate() {
          return new FieldNode(
            schema.menu_section_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_section_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.menu_section_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.menu_section_bool_exp, true);
              },
            }),
            false,
          );
        },
        get menu_section_by_pk() {
          return new FieldNode(
            schema.menu_section,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get metric() {
          return new FieldNode(
            new ArrayNode(schema.metric, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.metric_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.metric_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.metric_bool_exp, true);
              },
            }),
            false,
          );
        },
        get metric_aggregate() {
          return new FieldNode(
            schema.metric_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.metric_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.metric_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.metric_bool_exp, true);
              },
            }),
            false,
          );
        },
        get metric_by_pk() {
          return new FieldNode(
            schema.metric,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get mike_table() {
          return new FieldNode(
            new ArrayNode(schema.mike_table, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.mike_table_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.mike_table_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.mike_table_bool_exp, true);
              },
            }),
            false,
          );
        },
        get mike_table_aggregate() {
          return new FieldNode(
            schema.mike_table_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.mike_table_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.mike_table_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.mike_table_bool_exp, true);
              },
            }),
            false,
          );
        },
        get mike_table_by_pk() {
          return new FieldNode(
            schema.mike_table,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get restaurant() {
          return new FieldNode(
            new ArrayNode(schema.restaurant, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.restaurant_bool_exp, true);
              },
            }),
            false,
          );
        },
        get restaurant_aggregate() {
          return new FieldNode(
            schema.restaurant_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.restaurant_bool_exp, true);
              },
            }),
            false,
          );
        },
        get restaurant_by_pk() {
          return new FieldNode(
            schema.restaurant,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get restaurant_chain() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_chain, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_chain_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_chain_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_chain_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_chain_aggregate() {
          return new FieldNode(
            schema.restaurant_chain_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_chain_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_chain_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_chain_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_chain_by_pk() {
          return new FieldNode(
            schema.restaurant_chain,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get restaurant_cuisine() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_cuisine, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_cuisine_aggregate() {
          return new FieldNode(
            schema.restaurant_cuisine_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_cuisine_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_cuisine_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_cuisine_by_pk() {
          return new FieldNode(
            schema.restaurant_cuisine,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get restaurant_item() {
          return new FieldNode(
            new ArrayNode(schema.restaurant_item, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_item_aggregate() {
          return new FieldNode(
            schema.restaurant_item_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.restaurant_item_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurant_item_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurant_item_by_pk() {
          return new FieldNode(
            schema.restaurant_item,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get restaurants_visited_entity() {
          return new FieldNode(
            new ArrayNode(schema.restaurants_visited_entity, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.restaurants_visited_entity_select_column,
                    true,
                  ),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.restaurants_visited_entity_order_by,
                    true,
                  ),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurants_visited_entity_aggregate() {
          return new FieldNode(
            schema.restaurants_visited_entity_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.restaurants_visited_entity_select_column,
                    true,
                  ),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(
                    schema.restaurants_visited_entity_order_by,
                    true,
                  ),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(
                  schema.restaurants_visited_entity_bool_exp,
                  true,
                );
              },
            }),
            false,
          );
        },
        get restaurants_visited_entity_by_pk() {
          return new FieldNode(
            schema.restaurants_visited_entity,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get test_table() {
          return new FieldNode(
            new ArrayNode(schema.test_table, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.test_table_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.test_table_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.test_table_bool_exp, true);
              },
            }),
            false,
          );
        },
        get test_table_aggregate() {
          return new FieldNode(
            schema.test_table_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.test_table_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.test_table_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.test_table_bool_exp, true);
              },
            }),
            false,
          );
        },
        get test_table_by_pk() {
          return new FieldNode(
            schema.test_table,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.uuid, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get user() {
          return new FieldNode(
            new ArrayNode(schema.user, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.user_bool_exp, true);
              },
            }),
            false,
          );
        },
        get user_aggregate() {
          return new FieldNode(
            schema.user_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.user_bool_exp, true);
              },
            }),
            false,
          );
        },
        get user_by_pk() {
          return new FieldNode(
            schema.user,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get user_device() {
          return new FieldNode(
            new ArrayNode(schema.user_device, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.user_device_bool_exp, true);
              },
            }),
            false,
          );
        },
        get user_device_aggregate() {
          return new FieldNode(
            schema.user_device_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.user_device_bool_exp, true);
              },
            }),
            false,
          );
        },
        get user_device_by_pk() {
          return new FieldNode(
            schema.user_device,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.Int, false);
                },
              },
              true,
            ),
            true,
          );
        },
      },
      {
        name: 'subscription_root',
        extension: ((extensions as any) || {}).subscription_root,
      },
    );
  },
  get test_table() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, false);
        },
        get testcolumn() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      { name: 'test_table', extension: ((extensions as any) || {}).test_table },
    );
  },
  get test_table_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.test_table_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.test_table, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'test_table_aggregate',
        extension: ((extensions as any) || {}).test_table_aggregate,
      },
    );
  },
  get test_table_aggregate_fields() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.test_table_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.test_table_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.test_table_min_fields, undefined, true);
        },
      },
      {
        name: 'test_table_aggregate_fields',
        extension: ((extensions as any) || {}).test_table_aggregate_fields,
      },
    );
  },
  get test_table_aggregate_order_by() {
    return new InputNode(
      {
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.test_table_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.test_table_min_order_by, true);
        },
      },
      { name: 'test_table_aggregate_order_by' },
    );
  },
  get test_table_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.test_table_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.test_table_on_conflict, true);
        },
      },
      { name: 'test_table_arr_rel_insert_input' },
    );
  },
  get test_table_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.test_table_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.test_table_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.test_table_bool_exp, true),
            true,
          );
        },
        get id() {
          return new InputNodeField(schema.uuid_comparison_exp, true);
        },
        get testcolumn() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
      },
      { name: 'test_table_bool_exp' },
    );
  },
  get test_table_constraint() {
    return new EnumNode({ name: 'test_table_constraint' });
  },
  get test_table_insert_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get testcolumn() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'test_table_insert_input' },
    );
  },
  get test_table_max_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get testcolumn() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'test_table_max_fields',
        extension: ((extensions as any) || {}).test_table_max_fields,
      },
    );
  },
  get test_table_max_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get testcolumn() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'test_table_max_order_by' },
    );
  },
  get test_table_min_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.uuid, undefined, true);
        },
        get testcolumn() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'test_table_min_fields',
        extension: ((extensions as any) || {}).test_table_min_fields,
      },
    );
  },
  get test_table_min_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get testcolumn() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'test_table_min_order_by' },
    );
  },
  get test_table_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.test_table, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'test_table_mutation_response',
        extension: ((extensions as any) || {}).test_table_mutation_response,
      },
    );
  },
  get test_table_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.test_table_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.test_table_on_conflict, true);
        },
      },
      { name: 'test_table_obj_rel_insert_input' },
    );
  },
  get test_table_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.test_table_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.test_table_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.test_table_bool_exp, true);
        },
      },
      { name: 'test_table_on_conflict' },
    );
  },
  get test_table_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get testcolumn() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'test_table_order_by' },
    );
  },
  get test_table_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, false);
        },
      },
      { name: 'test_table_pk_columns_input' },
    );
  },
  get test_table_select_column() {
    return new EnumNode({ name: 'test_table_select_column' });
  },
  get test_table_set_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.uuid, true);
        },
        get testcolumn() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: 'test_table_set_input' },
    );
  },
  get test_table_update_column() {
    return new EnumNode({ name: 'test_table_update_column' });
  },
  get timestamp() {
    return new ScalarNode({
      name: 'timestamp',
      extension: ((extensions as any) || {}).timestamp,
    });
  },
  get timestamp_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _gt() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _gte() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema.timestamp, true),
            true,
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _lte() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _neq() {
          return new InputNodeField(schema.timestamp, true);
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema.timestamp, true),
            true,
          );
        },
      },
      { name: 'timestamp_comparison_exp' },
    );
  },
  get timestamptz() {
    return new ScalarNode({
      name: 'timestamptz',
      extension: ((extensions as any) || {}).timestamptz,
    });
  },
  get user() {
    return new ObjectNode(
      {
        get active() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get animal_products() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get beef() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get chicken() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get contacts() {
          return new FieldNode(
            new ArrayNode(schema.contact, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.contact_bool_exp, true);
              },
            }),
            false,
          );
        },
        get contactsByContactId() {
          return new FieldNode(
            new ArrayNode(schema.contact, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.contact_bool_exp, true);
              },
            }),
            false,
          );
        },
        get contactsByContactId_aggregate() {
          return new FieldNode(
            schema.contact_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.contact_bool_exp, true);
              },
            }),
            false,
          );
        },
        get contacts_aggregate() {
          return new FieldNode(
            schema.contact_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.contact_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.contact_bool_exp, true);
              },
            }),
            false,
          );
        },
        get created_at() {
          return new FieldNode(schema.timestamp, undefined, false);
        },
        get diet() {
          return new FieldNode(schema.user_diet_enum, undefined, false);
        },
        get email() {
          return new FieldNode(schema.String, undefined, false);
        },
        get exotic() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get first_name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get fish() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get game_players() {
          return new FieldNode(
            new ArrayNode(schema.game_player, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_player_bool_exp, true);
              },
            }),
            false,
          );
        },
        get game_players_aggregate() {
          return new FieldNode(
            schema.game_player_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_player_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_player_bool_exp, true);
              },
            }),
            false,
          );
        },
        get games() {
          return new FieldNode(
            new ArrayNode(schema.game, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_bool_exp, true);
              },
            }),
            false,
          );
        },
        get games_aggregate() {
          return new FieldNode(
            schema.game_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.game_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.game_bool_exp, true);
              },
            }),
            false,
          );
        },
        get gluten() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get last_name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get password() {
          return new FieldNode(schema.String, undefined, false);
        },
        get phone_number() {
          return new FieldNode(schema.String, undefined, true);
        },
        get pork() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get shellfish() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get turkey() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get user_devices() {
          return new FieldNode(
            new ArrayNode(schema.user_device, false),
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.user_device_bool_exp, true);
              },
            }),
            false,
          );
        },
        get user_devices_aggregate() {
          return new FieldNode(
            schema.user_device_aggregate,
            new Arguments({
              get distinct_on() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_select_column, true),
                  true,
                );
              },
              get limit() {
                return new ArgumentsField(schema.Int, true);
              },
              get offset() {
                return new ArgumentsField(schema.Int, true);
              },
              get order_by() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_order_by, true),
                  true,
                );
              },
              get where() {
                return new ArgumentsField(schema.user_device_bool_exp, true);
              },
            }),
            false,
          );
        },
        get username() {
          return new FieldNode(schema.String, undefined, false);
        },
        get vegan() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get vegetables() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get vegetarian() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
      },
      { name: 'user', extension: ((extensions as any) || {}).user },
    );
  },
  get user_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(schema.user_aggregate_fields, undefined, true);
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.user, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'user_aggregate',
        extension: ((extensions as any) || {}).user_aggregate,
      },
    );
  },
  get user_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.user_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.user_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.user_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(schema.user_stddev_fields, undefined, true);
        },
        get stddev_pop() {
          return new FieldNode(schema.user_stddev_pop_fields, undefined, true);
        },
        get stddev_samp() {
          return new FieldNode(schema.user_stddev_samp_fields, undefined, true);
        },
        get sum() {
          return new FieldNode(schema.user_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(schema.user_var_pop_fields, undefined, true);
        },
        get var_samp() {
          return new FieldNode(schema.user_var_samp_fields, undefined, true);
        },
        get variance() {
          return new FieldNode(schema.user_variance_fields, undefined, true);
        },
      },
      {
        name: 'user_aggregate_fields',
        extension: ((extensions as any) || {}).user_aggregate_fields,
      },
    );
  },
  get user_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.user_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.user_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.user_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.user_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(schema.user_stddev_pop_order_by, true);
        },
        get stddev_samp() {
          return new InputNodeField(schema.user_stddev_samp_order_by, true);
        },
        get sum() {
          return new InputNodeField(schema.user_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.user_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.user_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.user_variance_order_by, true);
        },
      },
      { name: 'user_aggregate_order_by' },
    );
  },
  get user_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.user_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.user_on_conflict, true);
        },
      },
      { name: 'user_arr_rel_insert_input' },
    );
  },
  get user_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_avg_fields',
        extension: ((extensions as any) || {}).user_avg_fields,
      },
    );
  },
  get user_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_avg_order_by' },
    );
  },
  get user_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.user_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.user_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.user_bool_exp, true),
            true,
          );
        },
        get active() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get animal_products() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get beef() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get chicken() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get contacts() {
          return new InputNodeField(schema.contact_bool_exp, true);
        },
        get contactsByContactId() {
          return new InputNodeField(schema.contact_bool_exp, true);
        },
        get created_at() {
          return new InputNodeField(schema.timestamp_comparison_exp, true);
        },
        get diet() {
          return new InputNodeField(schema.user_diet_enum_comparison_exp, true);
        },
        get email() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get exotic() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get first_name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get fish() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get game_players() {
          return new InputNodeField(schema.game_player_bool_exp, true);
        },
        get games() {
          return new InputNodeField(schema.game_bool_exp, true);
        },
        get gluten() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get last_name() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get password() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get phone_number() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get pork() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get shellfish() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get turkey() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get user_devices() {
          return new InputNodeField(schema.user_device_bool_exp, true);
        },
        get username() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get vegan() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get vegetables() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get vegetarian() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
      },
      { name: 'user_bool_exp' },
    );
  },
  get user_constraint() {
    return new EnumNode({ name: 'user_constraint' });
  },
  get user_device() {
    return new ObjectNode(
      {
        get active() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get createdOn() {
          return new FieldNode(schema.timestamp, undefined, false);
        },
        get device_token() {
          return new FieldNode(schema.String, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get user() {
          return new FieldNode(schema.user, undefined, false);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, false);
        },
      },
      {
        name: 'user_device',
        extension: ((extensions as any) || {}).user_device,
      },
    );
  },
  get user_device_aggregate() {
    return new ObjectNode(
      {
        get aggregate() {
          return new FieldNode(
            schema.user_device_aggregate_fields,
            undefined,
            true,
          );
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.user_device, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'user_device_aggregate',
        extension: ((extensions as any) || {}).user_device_aggregate,
      },
    );
  },
  get user_device_aggregate_fields() {
    return new ObjectNode(
      {
        get avg() {
          return new FieldNode(schema.user_device_avg_fields, undefined, true);
        },
        get count() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get columns() {
                return new ArgumentsField(
                  new ArrayNode(schema.user_device_select_column, true),
                  true,
                );
              },
              get distinct() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get max() {
          return new FieldNode(schema.user_device_max_fields, undefined, true);
        },
        get min() {
          return new FieldNode(schema.user_device_min_fields, undefined, true);
        },
        get stddev() {
          return new FieldNode(
            schema.user_device_stddev_fields,
            undefined,
            true,
          );
        },
        get stddev_pop() {
          return new FieldNode(
            schema.user_device_stddev_pop_fields,
            undefined,
            true,
          );
        },
        get stddev_samp() {
          return new FieldNode(
            schema.user_device_stddev_samp_fields,
            undefined,
            true,
          );
        },
        get sum() {
          return new FieldNode(schema.user_device_sum_fields, undefined, true);
        },
        get var_pop() {
          return new FieldNode(
            schema.user_device_var_pop_fields,
            undefined,
            true,
          );
        },
        get var_samp() {
          return new FieldNode(
            schema.user_device_var_samp_fields,
            undefined,
            true,
          );
        },
        get variance() {
          return new FieldNode(
            schema.user_device_variance_fields,
            undefined,
            true,
          );
        },
      },
      {
        name: 'user_device_aggregate_fields',
        extension: ((extensions as any) || {}).user_device_aggregate_fields,
      },
    );
  },
  get user_device_aggregate_order_by() {
    return new InputNode(
      {
        get avg() {
          return new InputNodeField(schema.user_device_avg_order_by, true);
        },
        get count() {
          return new InputNodeField(schema.order_by, true);
        },
        get max() {
          return new InputNodeField(schema.user_device_max_order_by, true);
        },
        get min() {
          return new InputNodeField(schema.user_device_min_order_by, true);
        },
        get stddev() {
          return new InputNodeField(schema.user_device_stddev_order_by, true);
        },
        get stddev_pop() {
          return new InputNodeField(
            schema.user_device_stddev_pop_order_by,
            true,
          );
        },
        get stddev_samp() {
          return new InputNodeField(
            schema.user_device_stddev_samp_order_by,
            true,
          );
        },
        get sum() {
          return new InputNodeField(schema.user_device_sum_order_by, true);
        },
        get var_pop() {
          return new InputNodeField(schema.user_device_var_pop_order_by, true);
        },
        get var_samp() {
          return new InputNodeField(schema.user_device_var_samp_order_by, true);
        },
        get variance() {
          return new InputNodeField(schema.user_device_variance_order_by, true);
        },
      },
      { name: 'user_device_aggregate_order_by' },
    );
  },
  get user_device_arr_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(
            new ArrayNode(schema.user_device_insert_input, false),
            false,
          );
        },
        get on_conflict() {
          return new InputNodeField(schema.user_device_on_conflict, true);
        },
      },
      { name: 'user_device_arr_rel_insert_input' },
    );
  },
  get user_device_avg_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_device_avg_fields',
        extension: ((extensions as any) || {}).user_device_avg_fields,
      },
    );
  },
  get user_device_avg_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_device_avg_order_by' },
    );
  },
  get user_device_bool_exp() {
    return new InputNode(
      {
        get _and() {
          return new InputNodeField(
            new ArrayNode(schema.user_device_bool_exp, true),
            true,
          );
        },
        get _not() {
          return new InputNodeField(schema.user_device_bool_exp, true);
        },
        get _or() {
          return new InputNodeField(
            new ArrayNode(schema.user_device_bool_exp, true),
            true,
          );
        },
        get active() {
          return new InputNodeField(schema.Boolean_comparison_exp, true);
        },
        get createdOn() {
          return new InputNodeField(schema.timestamp_comparison_exp, true);
        },
        get device_token() {
          return new InputNodeField(schema.String_comparison_exp, true);
        },
        get id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
        get user() {
          return new InputNodeField(schema.user_bool_exp, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int_comparison_exp, true);
        },
      },
      { name: 'user_device_bool_exp' },
    );
  },
  get user_device_constraint() {
    return new EnumNode({ name: 'user_device_constraint' });
  },
  get user_device_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'user_device_inc_input' },
    );
  },
  get user_device_insert_input() {
    return new InputNode(
      {
        get active() {
          return new InputNodeField(schema.Boolean, true);
        },
        get createdOn() {
          return new InputNodeField(schema.timestamp, true);
        },
        get device_token() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get user() {
          return new InputNodeField(schema.user_obj_rel_insert_input, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'user_device_insert_input' },
    );
  },
  get user_device_max_fields() {
    return new ObjectNode(
      {
        get createdOn() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get device_token() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'user_device_max_fields',
        extension: ((extensions as any) || {}).user_device_max_fields,
      },
    );
  },
  get user_device_max_order_by() {
    return new InputNode(
      {
        get createdOn() {
          return new InputNodeField(schema.order_by, true);
        },
        get device_token() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_device_max_order_by' },
    );
  },
  get user_device_min_fields() {
    return new ObjectNode(
      {
        get createdOn() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get device_token() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'user_device_min_fields',
        extension: ((extensions as any) || {}).user_device_min_fields,
      },
    );
  },
  get user_device_min_order_by() {
    return new InputNode(
      {
        get createdOn() {
          return new InputNodeField(schema.order_by, true);
        },
        get device_token() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_device_min_order_by' },
    );
  },
  get user_device_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.user_device, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'user_device_mutation_response',
        extension: ((extensions as any) || {}).user_device_mutation_response,
      },
    );
  },
  get user_device_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.user_device_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.user_device_on_conflict, true);
        },
      },
      { name: 'user_device_obj_rel_insert_input' },
    );
  },
  get user_device_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.user_device_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.user_device_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.user_device_bool_exp, true);
        },
      },
      { name: 'user_device_on_conflict' },
    );
  },
  get user_device_order_by() {
    return new InputNode(
      {
        get active() {
          return new InputNodeField(schema.order_by, true);
        },
        get createdOn() {
          return new InputNodeField(schema.order_by, true);
        },
        get device_token() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user() {
          return new InputNodeField(schema.user_order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_device_order_by' },
    );
  },
  get user_device_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'user_device_pk_columns_input' },
    );
  },
  get user_device_select_column() {
    return new EnumNode({ name: 'user_device_select_column' });
  },
  get user_device_set_input() {
    return new InputNode(
      {
        get active() {
          return new InputNodeField(schema.Boolean, true);
        },
        get createdOn() {
          return new InputNodeField(schema.timestamp, true);
        },
        get device_token() {
          return new InputNodeField(schema.String, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get user_id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'user_device_set_input' },
    );
  },
  get user_device_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_device_stddev_fields',
        extension: ((extensions as any) || {}).user_device_stddev_fields,
      },
    );
  },
  get user_device_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_device_stddev_order_by' },
    );
  },
  get user_device_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_device_stddev_pop_fields',
        extension: ((extensions as any) || {}).user_device_stddev_pop_fields,
      },
    );
  },
  get user_device_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_device_stddev_pop_order_by' },
    );
  },
  get user_device_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_device_stddev_samp_fields',
        extension: ((extensions as any) || {}).user_device_stddev_samp_fields,
      },
    );
  },
  get user_device_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_device_stddev_samp_order_by' },
    );
  },
  get user_device_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'user_device_sum_fields',
        extension: ((extensions as any) || {}).user_device_sum_fields,
      },
    );
  },
  get user_device_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_device_sum_order_by' },
    );
  },
  get user_device_update_column() {
    return new EnumNode({ name: 'user_device_update_column' });
  },
  get user_device_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_device_var_pop_fields',
        extension: ((extensions as any) || {}).user_device_var_pop_fields,
      },
    );
  },
  get user_device_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_device_var_pop_order_by' },
    );
  },
  get user_device_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_device_var_samp_fields',
        extension: ((extensions as any) || {}).user_device_var_samp_fields,
      },
    );
  },
  get user_device_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_device_var_samp_order_by' },
    );
  },
  get user_device_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
        get user_id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_device_variance_fields',
        extension: ((extensions as any) || {}).user_device_variance_fields,
      },
    );
  },
  get user_device_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_device_variance_order_by' },
    );
  },
  get user_diet_enum() {
    return new ScalarNode({
      name: 'user_diet_enum',
      extension: ((extensions as any) || {}).user_diet_enum,
    });
  },
  get user_diet_enum_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.user_diet_enum, true);
        },
        get _gt() {
          return new InputNodeField(schema.user_diet_enum, true);
        },
        get _gte() {
          return new InputNodeField(schema.user_diet_enum, true);
        },
        get _in() {
          return new InputNodeField(
            new ArrayNode(schema.user_diet_enum, true),
            true,
          );
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.user_diet_enum, true);
        },
        get _lte() {
          return new InputNodeField(schema.user_diet_enum, true);
        },
        get _neq() {
          return new InputNodeField(schema.user_diet_enum, true);
        },
        get _nin() {
          return new InputNodeField(
            new ArrayNode(schema.user_diet_enum, true),
            true,
          );
        },
      },
      { name: 'user_diet_enum_comparison_exp' },
    );
  },
  get user_inc_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: 'user_inc_input' },
    );
  },
  get user_insert_input() {
    return new InputNode(
      {
        get active() {
          return new InputNodeField(schema.Boolean, true);
        },
        get animal_products() {
          return new InputNodeField(schema.Boolean, true);
        },
        get beef() {
          return new InputNodeField(schema.Boolean, true);
        },
        get chicken() {
          return new InputNodeField(schema.Boolean, true);
        },
        get contacts() {
          return new InputNodeField(schema.contact_arr_rel_insert_input, true);
        },
        get contactsByContactId() {
          return new InputNodeField(schema.contact_arr_rel_insert_input, true);
        },
        get created_at() {
          return new InputNodeField(schema.timestamp, true);
        },
        get diet() {
          return new InputNodeField(schema.user_diet_enum, true);
        },
        get email() {
          return new InputNodeField(schema.String, true);
        },
        get exotic() {
          return new InputNodeField(schema.Boolean, true);
        },
        get first_name() {
          return new InputNodeField(schema.String, true);
        },
        get fish() {
          return new InputNodeField(schema.Boolean, true);
        },
        get game_players() {
          return new InputNodeField(
            schema.game_player_arr_rel_insert_input,
            true,
          );
        },
        get games() {
          return new InputNodeField(schema.game_arr_rel_insert_input, true);
        },
        get gluten() {
          return new InputNodeField(schema.Boolean, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get last_name() {
          return new InputNodeField(schema.String, true);
        },
        get password() {
          return new InputNodeField(schema.String, true);
        },
        get phone_number() {
          return new InputNodeField(schema.String, true);
        },
        get pork() {
          return new InputNodeField(schema.Boolean, true);
        },
        get shellfish() {
          return new InputNodeField(schema.Boolean, true);
        },
        get turkey() {
          return new InputNodeField(schema.Boolean, true);
        },
        get user_devices() {
          return new InputNodeField(
            schema.user_device_arr_rel_insert_input,
            true,
          );
        },
        get username() {
          return new InputNodeField(schema.String, true);
        },
        get vegan() {
          return new InputNodeField(schema.Boolean, true);
        },
        get vegetables() {
          return new InputNodeField(schema.Boolean, true);
        },
        get vegetarian() {
          return new InputNodeField(schema.Boolean, true);
        },
      },
      { name: 'user_insert_input' },
    );
  },
  get user_max_fields() {
    return new ObjectNode(
      {
        get created_at() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get email() {
          return new FieldNode(schema.String, undefined, true);
        },
        get first_name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get last_name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get password() {
          return new FieldNode(schema.String, undefined, true);
        },
        get phone_number() {
          return new FieldNode(schema.String, undefined, true);
        },
        get username() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'user_max_fields',
        extension: ((extensions as any) || {}).user_max_fields,
      },
    );
  },
  get user_max_order_by() {
    return new InputNode(
      {
        get created_at() {
          return new InputNodeField(schema.order_by, true);
        },
        get email() {
          return new InputNodeField(schema.order_by, true);
        },
        get first_name() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get last_name() {
          return new InputNodeField(schema.order_by, true);
        },
        get password() {
          return new InputNodeField(schema.order_by, true);
        },
        get phone_number() {
          return new InputNodeField(schema.order_by, true);
        },
        get username() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_max_order_by' },
    );
  },
  get user_min_fields() {
    return new ObjectNode(
      {
        get created_at() {
          return new FieldNode(schema.timestamp, undefined, true);
        },
        get email() {
          return new FieldNode(schema.String, undefined, true);
        },
        get first_name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get last_name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get password() {
          return new FieldNode(schema.String, undefined, true);
        },
        get phone_number() {
          return new FieldNode(schema.String, undefined, true);
        },
        get username() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'user_min_fields',
        extension: ((extensions as any) || {}).user_min_fields,
      },
    );
  },
  get user_min_order_by() {
    return new InputNode(
      {
        get created_at() {
          return new InputNodeField(schema.order_by, true);
        },
        get email() {
          return new InputNodeField(schema.order_by, true);
        },
        get first_name() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get last_name() {
          return new InputNodeField(schema.order_by, true);
        },
        get password() {
          return new InputNodeField(schema.order_by, true);
        },
        get phone_number() {
          return new InputNodeField(schema.order_by, true);
        },
        get username() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_min_order_by' },
    );
  },
  get user_mutation_response() {
    return new ObjectNode(
      {
        get affected_rows() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get returning() {
          return new FieldNode(
            new ArrayNode(schema.user, false),
            undefined,
            false,
          );
        },
      },
      {
        name: 'user_mutation_response',
        extension: ((extensions as any) || {}).user_mutation_response,
      },
    );
  },
  get user_obj_rel_insert_input() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.user_insert_input, false);
        },
        get on_conflict() {
          return new InputNodeField(schema.user_on_conflict, true);
        },
      },
      { name: 'user_obj_rel_insert_input' },
    );
  },
  get user_on_conflict() {
    return new InputNode(
      {
        get constraint() {
          return new InputNodeField(schema.user_constraint, false);
        },
        get update_columns() {
          return new InputNodeField(
            new ArrayNode(schema.user_update_column, false),
            false,
          );
        },
        get where() {
          return new InputNodeField(schema.user_bool_exp, true);
        },
      },
      { name: 'user_on_conflict' },
    );
  },
  get user_order_by() {
    return new InputNode(
      {
        get active() {
          return new InputNodeField(schema.order_by, true);
        },
        get animal_products() {
          return new InputNodeField(schema.order_by, true);
        },
        get beef() {
          return new InputNodeField(schema.order_by, true);
        },
        get chicken() {
          return new InputNodeField(schema.order_by, true);
        },
        get contactsByContactId_aggregate() {
          return new InputNodeField(schema.contact_aggregate_order_by, true);
        },
        get contacts_aggregate() {
          return new InputNodeField(schema.contact_aggregate_order_by, true);
        },
        get created_at() {
          return new InputNodeField(schema.order_by, true);
        },
        get diet() {
          return new InputNodeField(schema.order_by, true);
        },
        get email() {
          return new InputNodeField(schema.order_by, true);
        },
        get exotic() {
          return new InputNodeField(schema.order_by, true);
        },
        get first_name() {
          return new InputNodeField(schema.order_by, true);
        },
        get fish() {
          return new InputNodeField(schema.order_by, true);
        },
        get game_players_aggregate() {
          return new InputNodeField(
            schema.game_player_aggregate_order_by,
            true,
          );
        },
        get games_aggregate() {
          return new InputNodeField(schema.game_aggregate_order_by, true);
        },
        get gluten() {
          return new InputNodeField(schema.order_by, true);
        },
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
        get last_name() {
          return new InputNodeField(schema.order_by, true);
        },
        get password() {
          return new InputNodeField(schema.order_by, true);
        },
        get phone_number() {
          return new InputNodeField(schema.order_by, true);
        },
        get pork() {
          return new InputNodeField(schema.order_by, true);
        },
        get shellfish() {
          return new InputNodeField(schema.order_by, true);
        },
        get turkey() {
          return new InputNodeField(schema.order_by, true);
        },
        get user_devices_aggregate() {
          return new InputNodeField(
            schema.user_device_aggregate_order_by,
            true,
          );
        },
        get username() {
          return new InputNodeField(schema.order_by, true);
        },
        get vegan() {
          return new InputNodeField(schema.order_by, true);
        },
        get vegetables() {
          return new InputNodeField(schema.order_by, true);
        },
        get vegetarian() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_order_by' },
    );
  },
  get user_pk_columns_input() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'user_pk_columns_input' },
    );
  },
  get user_select_column() {
    return new EnumNode({ name: 'user_select_column' });
  },
  get user_set_input() {
    return new InputNode(
      {
        get active() {
          return new InputNodeField(schema.Boolean, true);
        },
        get animal_products() {
          return new InputNodeField(schema.Boolean, true);
        },
        get beef() {
          return new InputNodeField(schema.Boolean, true);
        },
        get chicken() {
          return new InputNodeField(schema.Boolean, true);
        },
        get created_at() {
          return new InputNodeField(schema.timestamp, true);
        },
        get diet() {
          return new InputNodeField(schema.user_diet_enum, true);
        },
        get email() {
          return new InputNodeField(schema.String, true);
        },
        get exotic() {
          return new InputNodeField(schema.Boolean, true);
        },
        get first_name() {
          return new InputNodeField(schema.String, true);
        },
        get fish() {
          return new InputNodeField(schema.Boolean, true);
        },
        get gluten() {
          return new InputNodeField(schema.Boolean, true);
        },
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get last_name() {
          return new InputNodeField(schema.String, true);
        },
        get password() {
          return new InputNodeField(schema.String, true);
        },
        get phone_number() {
          return new InputNodeField(schema.String, true);
        },
        get pork() {
          return new InputNodeField(schema.Boolean, true);
        },
        get shellfish() {
          return new InputNodeField(schema.Boolean, true);
        },
        get turkey() {
          return new InputNodeField(schema.Boolean, true);
        },
        get username() {
          return new InputNodeField(schema.String, true);
        },
        get vegan() {
          return new InputNodeField(schema.Boolean, true);
        },
        get vegetables() {
          return new InputNodeField(schema.Boolean, true);
        },
        get vegetarian() {
          return new InputNodeField(schema.Boolean, true);
        },
      },
      { name: 'user_set_input' },
    );
  },
  get user_stddev_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_stddev_fields',
        extension: ((extensions as any) || {}).user_stddev_fields,
      },
    );
  },
  get user_stddev_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_stddev_order_by' },
    );
  },
  get user_stddev_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_stddev_pop_fields',
        extension: ((extensions as any) || {}).user_stddev_pop_fields,
      },
    );
  },
  get user_stddev_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_stddev_pop_order_by' },
    );
  },
  get user_stddev_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_stddev_samp_fields',
        extension: ((extensions as any) || {}).user_stddev_samp_fields,
      },
    );
  },
  get user_stddev_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_stddev_samp_order_by' },
    );
  },
  get user_sum_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
      },
      {
        name: 'user_sum_fields',
        extension: ((extensions as any) || {}).user_sum_fields,
      },
    );
  },
  get user_sum_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_sum_order_by' },
    );
  },
  get user_update_column() {
    return new EnumNode({ name: 'user_update_column' });
  },
  get user_var_pop_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_var_pop_fields',
        extension: ((extensions as any) || {}).user_var_pop_fields,
      },
    );
  },
  get user_var_pop_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_var_pop_order_by' },
    );
  },
  get user_var_samp_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_var_samp_fields',
        extension: ((extensions as any) || {}).user_var_samp_fields,
      },
    );
  },
  get user_var_samp_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_var_samp_order_by' },
    );
  },
  get user_variance_fields() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Float, undefined, true);
        },
      },
      {
        name: 'user_variance_fields',
        extension: ((extensions as any) || {}).user_variance_fields,
      },
    );
  },
  get user_variance_order_by() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.order_by, true);
        },
      },
      { name: 'user_variance_order_by' },
    );
  },
  get uuid() {
    return new ScalarNode({
      name: 'uuid',
      extension: ((extensions as any) || {}).uuid,
    });
  },
  get uuid_comparison_exp() {
    return new InputNode(
      {
        get _eq() {
          return new InputNodeField(schema.uuid, true);
        },
        get _gt() {
          return new InputNodeField(schema.uuid, true);
        },
        get _gte() {
          return new InputNodeField(schema.uuid, true);
        },
        get _in() {
          return new InputNodeField(new ArrayNode(schema.uuid, true), true);
        },
        get _is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get _lt() {
          return new InputNodeField(schema.uuid, true);
        },
        get _lte() {
          return new InputNodeField(schema.uuid, true);
        },
        get _neq() {
          return new InputNodeField(schema.uuid, true);
        },
        get _nin() {
          return new InputNodeField(new ArrayNode(schema.uuid, true), true);
        },
      },
      { name: 'uuid_comparison_exp' },
    );
  },
};

lazyGetters(schema);
