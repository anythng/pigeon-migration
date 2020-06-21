import { RequestHandler } from 'express';

export interface HasuraRequest<ActionArgs> {
  input: ActionArgs;
}

export type HasuraResponse<ActionData> =
  | ActionData
  | {
      message?: unknown;
    };

export type ActionHandler<
  Data = unknown,
  Args = unknown,
  Params extends string[] | Record<string, string> = Record<string, string>
> = RequestHandler<Params, HasuraResponse<Data>, HasuraRequest<Args>>;
