
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Recommendations
 * 
 */
export type Recommendations = $Result.DefaultSelection<Prisma.$RecommendationsPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.products.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendations`: Exposes CRUD operations for the **Recommendations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendations.findMany()
    * ```
    */
  get recommendations(): Prisma.RecommendationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Products: 'Products',
    Recommendations: 'Recommendations',
    Reviews: 'Reviews',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "products" | "recommendations" | "reviews" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Recommendations: {
        payload: Prisma.$RecommendationsPayload<ExtArgs>
        fields: Prisma.RecommendationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          findFirst: {
            args: Prisma.RecommendationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          findMany: {
            args: Prisma.RecommendationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>[]
          }
          create: {
            args: Prisma.RecommendationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          createMany: {
            args: Prisma.RecommendationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>[]
          }
          delete: {
            args: Prisma.RecommendationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          update: {
            args: Prisma.RecommendationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>[]
          }
          upsert: {
            args: Prisma.RecommendationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          aggregate: {
            args: Prisma.RecommendationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendations>
          }
          groupBy: {
            args: Prisma.RecommendationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationsCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationsCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    products?: ProductsOmit
    recommendations?: RecommendationsOmit
    reviews?: ReviewsOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    Recommendations: number
    Reviews: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recommendations?: boolean | ProductsCountOutputTypeCountRecommendationsArgs
    Reviews?: boolean | ProductsCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Recommendations: number
    Reviews: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recommendations?: boolean | UsersCountOutputTypeCountRecommendationsArgs
    Reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    average_rating: number | null
    rating_number: number | null
    price: number | null
  }

  export type ProductsSumAggregateOutputType = {
    average_rating: number | null
    rating_number: number | null
    price: number | null
  }

  export type ProductsMinAggregateOutputType = {
    product_id: string | null
    title: string | null
    main_category: string | null
    average_rating: number | null
    rating_number: number | null
    price: number | null
    store: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    product_id: string | null
    title: string | null
    main_category: string | null
    average_rating: number | null
    rating_number: number | null
    price: number | null
    store: string | null
  }

  export type ProductsCountAggregateOutputType = {
    product_id: number
    title: number
    main_category: number
    average_rating: number
    rating_number: number
    price: number
    store: number
    details: number
    images: number
    videos: number
    features: number
    descriptions: number
    categories: number
    bought_together: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    average_rating?: true
    rating_number?: true
    price?: true
  }

  export type ProductsSumAggregateInputType = {
    average_rating?: true
    rating_number?: true
    price?: true
  }

  export type ProductsMinAggregateInputType = {
    product_id?: true
    title?: true
    main_category?: true
    average_rating?: true
    rating_number?: true
    price?: true
    store?: true
  }

  export type ProductsMaxAggregateInputType = {
    product_id?: true
    title?: true
    main_category?: true
    average_rating?: true
    rating_number?: true
    price?: true
    store?: true
  }

  export type ProductsCountAggregateInputType = {
    product_id?: true
    title?: true
    main_category?: true
    average_rating?: true
    rating_number?: true
    price?: true
    store?: true
    details?: true
    images?: true
    videos?: true
    features?: true
    descriptions?: true
    categories?: true
    bought_together?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    product_id: string
    title: string
    main_category: string | null
    average_rating: number | null
    rating_number: number | null
    price: number | null
    store: string | null
    details: JsonValue | null
    images: JsonValue | null
    videos: JsonValue | null
    features: JsonValue | null
    descriptions: JsonValue | null
    categories: JsonValue | null
    bought_together: JsonValue | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    title?: boolean
    main_category?: boolean
    average_rating?: boolean
    rating_number?: boolean
    price?: boolean
    store?: boolean
    details?: boolean
    images?: boolean
    videos?: boolean
    features?: boolean
    descriptions?: boolean
    categories?: boolean
    bought_together?: boolean
    Recommendations?: boolean | Products$RecommendationsArgs<ExtArgs>
    Reviews?: boolean | Products$ReviewsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    title?: boolean
    main_category?: boolean
    average_rating?: boolean
    rating_number?: boolean
    price?: boolean
    store?: boolean
    details?: boolean
    images?: boolean
    videos?: boolean
    features?: boolean
    descriptions?: boolean
    categories?: boolean
    bought_together?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    title?: boolean
    main_category?: boolean
    average_rating?: boolean
    rating_number?: boolean
    price?: boolean
    store?: boolean
    details?: boolean
    images?: boolean
    videos?: boolean
    features?: boolean
    descriptions?: boolean
    categories?: boolean
    bought_together?: boolean
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    product_id?: boolean
    title?: boolean
    main_category?: boolean
    average_rating?: boolean
    rating_number?: boolean
    price?: boolean
    store?: boolean
    details?: boolean
    images?: boolean
    videos?: boolean
    features?: boolean
    descriptions?: boolean
    categories?: boolean
    bought_together?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "title" | "main_category" | "average_rating" | "rating_number" | "price" | "store" | "details" | "images" | "videos" | "features" | "descriptions" | "categories" | "bought_together", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recommendations?: boolean | Products$RecommendationsArgs<ExtArgs>
    Reviews?: boolean | Products$ReviewsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      Recommendations: Prisma.$RecommendationsPayload<ExtArgs>[]
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: string
      title: string
      main_category: string | null
      average_rating: number | null
      rating_number: number | null
      price: number | null
      store: string | null
      details: Prisma.JsonValue | null
      images: Prisma.JsonValue | null
      videos: Prisma.JsonValue | null
      features: Prisma.JsonValue | null
      descriptions: Prisma.JsonValue | null
      categories: Prisma.JsonValue | null
      bought_together: Prisma.JsonValue | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Recommendations<T extends Products$RecommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Products$RecommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reviews<T extends Products$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Products$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly product_id: FieldRef<"Products", 'String'>
    readonly title: FieldRef<"Products", 'String'>
    readonly main_category: FieldRef<"Products", 'String'>
    readonly average_rating: FieldRef<"Products", 'Float'>
    readonly rating_number: FieldRef<"Products", 'Int'>
    readonly price: FieldRef<"Products", 'Float'>
    readonly store: FieldRef<"Products", 'String'>
    readonly details: FieldRef<"Products", 'Json'>
    readonly images: FieldRef<"Products", 'Json'>
    readonly videos: FieldRef<"Products", 'Json'>
    readonly features: FieldRef<"Products", 'Json'>
    readonly descriptions: FieldRef<"Products", 'Json'>
    readonly categories: FieldRef<"Products", 'Json'>
    readonly bought_together: FieldRef<"Products", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.Recommendations
   */
  export type Products$RecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    where?: RecommendationsWhereInput
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    cursor?: RecommendationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationsScalarFieldEnum | RecommendationsScalarFieldEnum[]
  }

  /**
   * Products.Reviews
   */
  export type Products$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Recommendations
   */

  export type AggregateRecommendations = {
    _count: RecommendationsCountAggregateOutputType | null
    _avg: RecommendationsAvgAggregateOutputType | null
    _sum: RecommendationsSumAggregateOutputType | null
    _min: RecommendationsMinAggregateOutputType | null
    _max: RecommendationsMaxAggregateOutputType | null
  }

  export type RecommendationsAvgAggregateOutputType = {
    recommendation_id: number | null
    score: number | null
    timestamp: number | null
  }

  export type RecommendationsSumAggregateOutputType = {
    recommendation_id: number | null
    score: number | null
    timestamp: bigint | null
  }

  export type RecommendationsMinAggregateOutputType = {
    recommendation_id: number | null
    user_id: string | null
    product_id: string | null
    score: number | null
    timestamp: bigint | null
  }

  export type RecommendationsMaxAggregateOutputType = {
    recommendation_id: number | null
    user_id: string | null
    product_id: string | null
    score: number | null
    timestamp: bigint | null
  }

  export type RecommendationsCountAggregateOutputType = {
    recommendation_id: number
    user_id: number
    product_id: number
    score: number
    timestamp: number
    _all: number
  }


  export type RecommendationsAvgAggregateInputType = {
    recommendation_id?: true
    score?: true
    timestamp?: true
  }

  export type RecommendationsSumAggregateInputType = {
    recommendation_id?: true
    score?: true
    timestamp?: true
  }

  export type RecommendationsMinAggregateInputType = {
    recommendation_id?: true
    user_id?: true
    product_id?: true
    score?: true
    timestamp?: true
  }

  export type RecommendationsMaxAggregateInputType = {
    recommendation_id?: true
    user_id?: true
    product_id?: true
    score?: true
    timestamp?: true
  }

  export type RecommendationsCountAggregateInputType = {
    recommendation_id?: true
    user_id?: true
    product_id?: true
    score?: true
    timestamp?: true
    _all?: true
  }

  export type RecommendationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to aggregate.
     */
    where?: RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationsMaxAggregateInputType
  }

  export type GetRecommendationsAggregateType<T extends RecommendationsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendations[P]>
      : GetScalarType<T[P], AggregateRecommendations[P]>
  }




  export type RecommendationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationsWhereInput
    orderBy?: RecommendationsOrderByWithAggregationInput | RecommendationsOrderByWithAggregationInput[]
    by: RecommendationsScalarFieldEnum[] | RecommendationsScalarFieldEnum
    having?: RecommendationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationsCountAggregateInputType | true
    _avg?: RecommendationsAvgAggregateInputType
    _sum?: RecommendationsSumAggregateInputType
    _min?: RecommendationsMinAggregateInputType
    _max?: RecommendationsMaxAggregateInputType
  }

  export type RecommendationsGroupByOutputType = {
    recommendation_id: number
    user_id: string
    product_id: string
    score: number
    timestamp: bigint
    _count: RecommendationsCountAggregateOutputType | null
    _avg: RecommendationsAvgAggregateOutputType | null
    _sum: RecommendationsSumAggregateOutputType | null
    _min: RecommendationsMinAggregateOutputType | null
    _max: RecommendationsMaxAggregateOutputType | null
  }

  type GetRecommendationsGroupByPayload<T extends RecommendationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationsGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationsGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recommendation_id?: boolean
    user_id?: boolean
    product_id?: boolean
    score?: boolean
    timestamp?: boolean
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendations"]>

  export type RecommendationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recommendation_id?: boolean
    user_id?: boolean
    product_id?: boolean
    score?: boolean
    timestamp?: boolean
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendations"]>

  export type RecommendationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recommendation_id?: boolean
    user_id?: boolean
    product_id?: boolean
    score?: boolean
    timestamp?: boolean
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendations"]>

  export type RecommendationsSelectScalar = {
    recommendation_id?: boolean
    user_id?: boolean
    product_id?: boolean
    score?: boolean
    timestamp?: boolean
  }

  export type RecommendationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recommendation_id" | "user_id" | "product_id" | "score" | "timestamp", ExtArgs["result"]["recommendations"]>
  export type RecommendationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type RecommendationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type RecommendationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $RecommendationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendations"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      recommendation_id: number
      user_id: string
      product_id: string
      score: number
      timestamp: bigint
    }, ExtArgs["result"]["recommendations"]>
    composites: {}
  }

  type RecommendationsGetPayload<S extends boolean | null | undefined | RecommendationsDefaultArgs> = $Result.GetResult<Prisma.$RecommendationsPayload, S>

  type RecommendationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendationsCountAggregateInputType | true
    }

  export interface RecommendationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendations'], meta: { name: 'Recommendations' } }
    /**
     * Find zero or one Recommendations that matches the filter.
     * @param {RecommendationsFindUniqueArgs} args - Arguments to find a Recommendations
     * @example
     * // Get one Recommendations
     * const recommendations = await prisma.recommendations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationsFindUniqueArgs>(args: SelectSubset<T, RecommendationsFindUniqueArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recommendations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendationsFindUniqueOrThrowArgs} args - Arguments to find a Recommendations
     * @example
     * // Get one Recommendations
     * const recommendations = await prisma.recommendations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationsFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsFindFirstArgs} args - Arguments to find a Recommendations
     * @example
     * // Get one Recommendations
     * const recommendations = await prisma.recommendations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationsFindFirstArgs>(args?: SelectSubset<T, RecommendationsFindFirstArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsFindFirstOrThrowArgs} args - Arguments to find a Recommendations
     * @example
     * // Get one Recommendations
     * const recommendations = await prisma.recommendations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationsFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendations.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendations.findMany({ take: 10 })
     * 
     * // Only select the `recommendation_id`
     * const recommendationsWithRecommendation_idOnly = await prisma.recommendations.findMany({ select: { recommendation_id: true } })
     * 
     */
    findMany<T extends RecommendationsFindManyArgs>(args?: SelectSubset<T, RecommendationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recommendations.
     * @param {RecommendationsCreateArgs} args - Arguments to create a Recommendations.
     * @example
     * // Create one Recommendations
     * const Recommendations = await prisma.recommendations.create({
     *   data: {
     *     // ... data to create a Recommendations
     *   }
     * })
     * 
     */
    create<T extends RecommendationsCreateArgs>(args: SelectSubset<T, RecommendationsCreateArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recommendations.
     * @param {RecommendationsCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendations = await prisma.recommendations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationsCreateManyArgs>(args?: SelectSubset<T, RecommendationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationsCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendations = await prisma.recommendations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `recommendation_id`
     * const recommendationsWithRecommendation_idOnly = await prisma.recommendations.createManyAndReturn({
     *   select: { recommendation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationsCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recommendations.
     * @param {RecommendationsDeleteArgs} args - Arguments to delete one Recommendations.
     * @example
     * // Delete one Recommendations
     * const Recommendations = await prisma.recommendations.delete({
     *   where: {
     *     // ... filter to delete one Recommendations
     *   }
     * })
     * 
     */
    delete<T extends RecommendationsDeleteArgs>(args: SelectSubset<T, RecommendationsDeleteArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recommendations.
     * @param {RecommendationsUpdateArgs} args - Arguments to update one Recommendations.
     * @example
     * // Update one Recommendations
     * const recommendations = await prisma.recommendations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationsUpdateArgs>(args: SelectSubset<T, RecommendationsUpdateArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationsDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationsDeleteManyArgs>(args?: SelectSubset<T, RecommendationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendations = await prisma.recommendations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationsUpdateManyArgs>(args: SelectSubset<T, RecommendationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations and returns the data updated in the database.
     * @param {RecommendationsUpdateManyAndReturnArgs} args - Arguments to update many Recommendations.
     * @example
     * // Update many Recommendations
     * const recommendations = await prisma.recommendations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recommendations and only return the `recommendation_id`
     * const recommendationsWithRecommendation_idOnly = await prisma.recommendations.updateManyAndReturn({
     *   select: { recommendation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecommendationsUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recommendations.
     * @param {RecommendationsUpsertArgs} args - Arguments to update or create a Recommendations.
     * @example
     * // Update or create a Recommendations
     * const recommendations = await prisma.recommendations.upsert({
     *   create: {
     *     // ... data to create a Recommendations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendations we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationsUpsertArgs>(args: SelectSubset<T, RecommendationsUpsertArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendations.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationsCountArgs>(
      args?: Subset<T, RecommendationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecommendationsAggregateArgs>(args: Subset<T, RecommendationsAggregateArgs>): Prisma.PrismaPromise<GetRecommendationsAggregateType<T>>

    /**
     * Group by Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecommendationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationsGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecommendationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendations model
   */
  readonly fields: RecommendationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recommendations model
   */
  interface RecommendationsFieldRefs {
    readonly recommendation_id: FieldRef<"Recommendations", 'Int'>
    readonly user_id: FieldRef<"Recommendations", 'String'>
    readonly product_id: FieldRef<"Recommendations", 'String'>
    readonly score: FieldRef<"Recommendations", 'Float'>
    readonly timestamp: FieldRef<"Recommendations", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Recommendations findUnique
   */
  export type RecommendationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where: RecommendationsWhereUniqueInput
  }

  /**
   * Recommendations findUniqueOrThrow
   */
  export type RecommendationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where: RecommendationsWhereUniqueInput
  }

  /**
   * Recommendations findFirst
   */
  export type RecommendationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationsScalarFieldEnum | RecommendationsScalarFieldEnum[]
  }

  /**
   * Recommendations findFirstOrThrow
   */
  export type RecommendationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationsScalarFieldEnum | RecommendationsScalarFieldEnum[]
  }

  /**
   * Recommendations findMany
   */
  export type RecommendationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationsScalarFieldEnum | RecommendationsScalarFieldEnum[]
  }

  /**
   * Recommendations create
   */
  export type RecommendationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Recommendations.
     */
    data: XOR<RecommendationsCreateInput, RecommendationsUncheckedCreateInput>
  }

  /**
   * Recommendations createMany
   */
  export type RecommendationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationsCreateManyInput | RecommendationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendations createManyAndReturn
   */
  export type RecommendationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationsCreateManyInput | RecommendationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendations update
   */
  export type RecommendationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Recommendations.
     */
    data: XOR<RecommendationsUpdateInput, RecommendationsUncheckedUpdateInput>
    /**
     * Choose, which Recommendations to update.
     */
    where: RecommendationsWhereUniqueInput
  }

  /**
   * Recommendations updateMany
   */
  export type RecommendationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationsUpdateManyMutationInput, RecommendationsUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationsWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
  }

  /**
   * Recommendations updateManyAndReturn
   */
  export type RecommendationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationsUpdateManyMutationInput, RecommendationsUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationsWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendations upsert
   */
  export type RecommendationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Recommendations to update in case it exists.
     */
    where: RecommendationsWhereUniqueInput
    /**
     * In case the Recommendations found by the `where` argument doesn't exist, create a new Recommendations with this data.
     */
    create: XOR<RecommendationsCreateInput, RecommendationsUncheckedCreateInput>
    /**
     * In case the Recommendations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationsUpdateInput, RecommendationsUncheckedUpdateInput>
  }

  /**
   * Recommendations delete
   */
  export type RecommendationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter which Recommendations to delete.
     */
    where: RecommendationsWhereUniqueInput
  }

  /**
   * Recommendations deleteMany
   */
  export type RecommendationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationsWhereInput
    /**
     * Limit how many Recommendations to delete.
     */
    limit?: number
  }

  /**
   * Recommendations without action
   */
  export type RecommendationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    review_id: number | null
    rating: number | null
    timestamp: number | null
    helpful_vote: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    review_id: number | null
    rating: number | null
    timestamp: bigint | null
    helpful_vote: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    review_id: number | null
    product_id: string | null
    user_id: string | null
    rating: number | null
    title: string | null
    text: string | null
    timestamp: bigint | null
    helpful_vote: number | null
    verified_purchase: boolean | null
    asin: string | null
  }

  export type ReviewsMaxAggregateOutputType = {
    review_id: number | null
    product_id: string | null
    user_id: string | null
    rating: number | null
    title: string | null
    text: string | null
    timestamp: bigint | null
    helpful_vote: number | null
    verified_purchase: boolean | null
    asin: string | null
  }

  export type ReviewsCountAggregateOutputType = {
    review_id: number
    product_id: number
    user_id: number
    rating: number
    title: number
    text: number
    timestamp: number
    helpful_vote: number
    verified_purchase: number
    asin: number
    images: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    review_id?: true
    rating?: true
    timestamp?: true
    helpful_vote?: true
  }

  export type ReviewsSumAggregateInputType = {
    review_id?: true
    rating?: true
    timestamp?: true
    helpful_vote?: true
  }

  export type ReviewsMinAggregateInputType = {
    review_id?: true
    product_id?: true
    user_id?: true
    rating?: true
    title?: true
    text?: true
    timestamp?: true
    helpful_vote?: true
    verified_purchase?: true
    asin?: true
  }

  export type ReviewsMaxAggregateInputType = {
    review_id?: true
    product_id?: true
    user_id?: true
    rating?: true
    title?: true
    text?: true
    timestamp?: true
    helpful_vote?: true
    verified_purchase?: true
    asin?: true
  }

  export type ReviewsCountAggregateInputType = {
    review_id?: true
    product_id?: true
    user_id?: true
    rating?: true
    title?: true
    text?: true
    timestamp?: true
    helpful_vote?: true
    verified_purchase?: true
    asin?: true
    images?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    review_id: number
    product_id: string
    user_id: string
    rating: number
    title: string | null
    text: string
    timestamp: bigint
    helpful_vote: number | null
    verified_purchase: boolean | null
    asin: string | null
    images: JsonValue | null
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    product_id?: boolean
    user_id?: boolean
    rating?: boolean
    title?: boolean
    text?: boolean
    timestamp?: boolean
    helpful_vote?: boolean
    verified_purchase?: boolean
    asin?: boolean
    images?: boolean
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    product_id?: boolean
    user_id?: boolean
    rating?: boolean
    title?: boolean
    text?: boolean
    timestamp?: boolean
    helpful_vote?: boolean
    verified_purchase?: boolean
    asin?: boolean
    images?: boolean
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    product_id?: boolean
    user_id?: boolean
    rating?: boolean
    title?: boolean
    text?: boolean
    timestamp?: boolean
    helpful_vote?: boolean
    verified_purchase?: boolean
    asin?: boolean
    images?: boolean
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    review_id?: boolean
    product_id?: boolean
    user_id?: boolean
    rating?: boolean
    title?: boolean
    text?: boolean
    timestamp?: boolean
    helpful_vote?: boolean
    verified_purchase?: boolean
    asin?: boolean
    images?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "product_id" | "user_id" | "rating" | "title" | "text" | "timestamp" | "helpful_vote" | "verified_purchase" | "asin" | "images", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      product_id: string
      user_id: string
      rating: number
      title: string | null
      text: string
      timestamp: bigint
      helpful_vote: number | null
      verified_purchase: boolean | null
      asin: string | null
      images: Prisma.JsonValue | null
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.createManyAndReturn({
     *   select: { review_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.updateManyAndReturn({
     *   select: { review_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly review_id: FieldRef<"Reviews", 'Int'>
    readonly product_id: FieldRef<"Reviews", 'String'>
    readonly user_id: FieldRef<"Reviews", 'String'>
    readonly rating: FieldRef<"Reviews", 'Float'>
    readonly title: FieldRef<"Reviews", 'String'>
    readonly text: FieldRef<"Reviews", 'String'>
    readonly timestamp: FieldRef<"Reviews", 'BigInt'>
    readonly helpful_vote: FieldRef<"Reviews", 'Int'>
    readonly verified_purchase: FieldRef<"Reviews", 'Boolean'>
    readonly asin: FieldRef<"Reviews", 'String'>
    readonly images: FieldRef<"Reviews", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    username: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    username: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    username: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_id?: true
    username?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    username?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    username?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    username: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    Recommendations?: boolean | Users$RecommendationsArgs<ExtArgs>
    Reviews?: boolean | Users$ReviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_id?: boolean
    username?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recommendations?: boolean | Users$RecommendationsArgs<ExtArgs>
    Reviews?: boolean | Users$ReviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Recommendations: Prisma.$RecommendationsPayload<ExtArgs>[]
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      username: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Recommendations<T extends Users$RecommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$RecommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reviews<T extends Users$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Users$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Recommendations
   */
  export type Users$RecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendations
     */
    omit?: RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    where?: RecommendationsWhereInput
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    cursor?: RecommendationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationsScalarFieldEnum | RecommendationsScalarFieldEnum[]
  }

  /**
   * Users.Reviews
   */
  export type Users$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductsScalarFieldEnum: {
    product_id: 'product_id',
    title: 'title',
    main_category: 'main_category',
    average_rating: 'average_rating',
    rating_number: 'rating_number',
    price: 'price',
    store: 'store',
    details: 'details',
    images: 'images',
    videos: 'videos',
    features: 'features',
    descriptions: 'descriptions',
    categories: 'categories',
    bought_together: 'bought_together'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const RecommendationsScalarFieldEnum: {
    recommendation_id: 'recommendation_id',
    user_id: 'user_id',
    product_id: 'product_id',
    score: 'score',
    timestamp: 'timestamp'
  };

  export type RecommendationsScalarFieldEnum = (typeof RecommendationsScalarFieldEnum)[keyof typeof RecommendationsScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    review_id: 'review_id',
    product_id: 'product_id',
    user_id: 'user_id',
    rating: 'rating',
    title: 'title',
    text: 'text',
    timestamp: 'timestamp',
    helpful_vote: 'helpful_vote',
    verified_purchase: 'verified_purchase',
    asin: 'asin',
    images: 'images'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    product_id?: StringFilter<"Products"> | string
    title?: StringFilter<"Products"> | string
    main_category?: StringNullableFilter<"Products"> | string | null
    average_rating?: FloatNullableFilter<"Products"> | number | null
    rating_number?: IntNullableFilter<"Products"> | number | null
    price?: FloatNullableFilter<"Products"> | number | null
    store?: StringNullableFilter<"Products"> | string | null
    details?: JsonNullableFilter<"Products">
    images?: JsonNullableFilter<"Products">
    videos?: JsonNullableFilter<"Products">
    features?: JsonNullableFilter<"Products">
    descriptions?: JsonNullableFilter<"Products">
    categories?: JsonNullableFilter<"Products">
    bought_together?: JsonNullableFilter<"Products">
    Recommendations?: RecommendationsListRelationFilter
    Reviews?: ReviewsListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    product_id?: SortOrder
    title?: SortOrder
    main_category?: SortOrderInput | SortOrder
    average_rating?: SortOrderInput | SortOrder
    rating_number?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    store?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    videos?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    descriptions?: SortOrderInput | SortOrder
    categories?: SortOrderInput | SortOrder
    bought_together?: SortOrderInput | SortOrder
    Recommendations?: RecommendationsOrderByRelationAggregateInput
    Reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    product_id?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    title?: StringFilter<"Products"> | string
    main_category?: StringNullableFilter<"Products"> | string | null
    average_rating?: FloatNullableFilter<"Products"> | number | null
    rating_number?: IntNullableFilter<"Products"> | number | null
    price?: FloatNullableFilter<"Products"> | number | null
    store?: StringNullableFilter<"Products"> | string | null
    details?: JsonNullableFilter<"Products">
    images?: JsonNullableFilter<"Products">
    videos?: JsonNullableFilter<"Products">
    features?: JsonNullableFilter<"Products">
    descriptions?: JsonNullableFilter<"Products">
    categories?: JsonNullableFilter<"Products">
    bought_together?: JsonNullableFilter<"Products">
    Recommendations?: RecommendationsListRelationFilter
    Reviews?: ReviewsListRelationFilter
  }, "product_id">

  export type ProductsOrderByWithAggregationInput = {
    product_id?: SortOrder
    title?: SortOrder
    main_category?: SortOrderInput | SortOrder
    average_rating?: SortOrderInput | SortOrder
    rating_number?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    store?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    videos?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    descriptions?: SortOrderInput | SortOrder
    categories?: SortOrderInput | SortOrder
    bought_together?: SortOrderInput | SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    product_id?: StringWithAggregatesFilter<"Products"> | string
    title?: StringWithAggregatesFilter<"Products"> | string
    main_category?: StringNullableWithAggregatesFilter<"Products"> | string | null
    average_rating?: FloatNullableWithAggregatesFilter<"Products"> | number | null
    rating_number?: IntNullableWithAggregatesFilter<"Products"> | number | null
    price?: FloatNullableWithAggregatesFilter<"Products"> | number | null
    store?: StringNullableWithAggregatesFilter<"Products"> | string | null
    details?: JsonNullableWithAggregatesFilter<"Products">
    images?: JsonNullableWithAggregatesFilter<"Products">
    videos?: JsonNullableWithAggregatesFilter<"Products">
    features?: JsonNullableWithAggregatesFilter<"Products">
    descriptions?: JsonNullableWithAggregatesFilter<"Products">
    categories?: JsonNullableWithAggregatesFilter<"Products">
    bought_together?: JsonNullableWithAggregatesFilter<"Products">
  }

  export type RecommendationsWhereInput = {
    AND?: RecommendationsWhereInput | RecommendationsWhereInput[]
    OR?: RecommendationsWhereInput[]
    NOT?: RecommendationsWhereInput | RecommendationsWhereInput[]
    recommendation_id?: IntFilter<"Recommendations"> | number
    user_id?: StringFilter<"Recommendations"> | string
    product_id?: StringFilter<"Recommendations"> | string
    score?: FloatFilter<"Recommendations"> | number
    timestamp?: BigIntFilter<"Recommendations"> | bigint | number
    Products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type RecommendationsOrderByWithRelationInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    score?: SortOrder
    timestamp?: SortOrder
    Products?: ProductsOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
  }

  export type RecommendationsWhereUniqueInput = Prisma.AtLeast<{
    recommendation_id?: number
    user_id_product_id_timestamp?: RecommendationsUser_idProduct_idTimestampCompoundUniqueInput
    AND?: RecommendationsWhereInput | RecommendationsWhereInput[]
    OR?: RecommendationsWhereInput[]
    NOT?: RecommendationsWhereInput | RecommendationsWhereInput[]
    user_id?: StringFilter<"Recommendations"> | string
    product_id?: StringFilter<"Recommendations"> | string
    score?: FloatFilter<"Recommendations"> | number
    timestamp?: BigIntFilter<"Recommendations"> | bigint | number
    Products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "recommendation_id" | "user_id_product_id_timestamp">

  export type RecommendationsOrderByWithAggregationInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    score?: SortOrder
    timestamp?: SortOrder
    _count?: RecommendationsCountOrderByAggregateInput
    _avg?: RecommendationsAvgOrderByAggregateInput
    _max?: RecommendationsMaxOrderByAggregateInput
    _min?: RecommendationsMinOrderByAggregateInput
    _sum?: RecommendationsSumOrderByAggregateInput
  }

  export type RecommendationsScalarWhereWithAggregatesInput = {
    AND?: RecommendationsScalarWhereWithAggregatesInput | RecommendationsScalarWhereWithAggregatesInput[]
    OR?: RecommendationsScalarWhereWithAggregatesInput[]
    NOT?: RecommendationsScalarWhereWithAggregatesInput | RecommendationsScalarWhereWithAggregatesInput[]
    recommendation_id?: IntWithAggregatesFilter<"Recommendations"> | number
    user_id?: StringWithAggregatesFilter<"Recommendations"> | string
    product_id?: StringWithAggregatesFilter<"Recommendations"> | string
    score?: FloatWithAggregatesFilter<"Recommendations"> | number
    timestamp?: BigIntWithAggregatesFilter<"Recommendations"> | bigint | number
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    review_id?: IntFilter<"Reviews"> | number
    product_id?: StringFilter<"Reviews"> | string
    user_id?: StringFilter<"Reviews"> | string
    rating?: FloatFilter<"Reviews"> | number
    title?: StringNullableFilter<"Reviews"> | string | null
    text?: StringFilter<"Reviews"> | string
    timestamp?: BigIntFilter<"Reviews"> | bigint | number
    helpful_vote?: IntNullableFilter<"Reviews"> | number | null
    verified_purchase?: BoolNullableFilter<"Reviews"> | boolean | null
    asin?: StringNullableFilter<"Reviews"> | string | null
    images?: JsonNullableFilter<"Reviews">
    Products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    helpful_vote?: SortOrderInput | SortOrder
    verified_purchase?: SortOrderInput | SortOrder
    asin?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    Products?: ProductsOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    product_id_user_id_timestamp?: ReviewsProduct_idUser_idTimestampCompoundUniqueInput
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    product_id?: StringFilter<"Reviews"> | string
    user_id?: StringFilter<"Reviews"> | string
    rating?: FloatFilter<"Reviews"> | number
    title?: StringNullableFilter<"Reviews"> | string | null
    text?: StringFilter<"Reviews"> | string
    timestamp?: BigIntFilter<"Reviews"> | bigint | number
    helpful_vote?: IntNullableFilter<"Reviews"> | number | null
    verified_purchase?: BoolNullableFilter<"Reviews"> | boolean | null
    asin?: StringNullableFilter<"Reviews"> | string | null
    images?: JsonNullableFilter<"Reviews">
    Products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "review_id" | "product_id_user_id_timestamp">

  export type ReviewsOrderByWithAggregationInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    helpful_vote?: SortOrderInput | SortOrder
    verified_purchase?: SortOrderInput | SortOrder
    asin?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"Reviews"> | number
    product_id?: StringWithAggregatesFilter<"Reviews"> | string
    user_id?: StringWithAggregatesFilter<"Reviews"> | string
    rating?: FloatWithAggregatesFilter<"Reviews"> | number
    title?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    text?: StringWithAggregatesFilter<"Reviews"> | string
    timestamp?: BigIntWithAggregatesFilter<"Reviews"> | bigint | number
    helpful_vote?: IntNullableWithAggregatesFilter<"Reviews"> | number | null
    verified_purchase?: BoolNullableWithAggregatesFilter<"Reviews"> | boolean | null
    asin?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    images?: JsonNullableWithAggregatesFilter<"Reviews">
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    Recommendations?: RecommendationsListRelationFilter
    Reviews?: ReviewsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    Recommendations?: RecommendationsOrderByRelationAggregateInput
    Reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    username?: StringFilter<"Users"> | string
    Recommendations?: RecommendationsListRelationFilter
    Reviews?: ReviewsListRelationFilter
  }, "user_id">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
  }

  export type ProductsCreateInput = {
    product_id: string
    title: string
    main_category?: string | null
    average_rating?: number | null
    rating_number?: number | null
    price?: number | null
    store?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Recommendations?: RecommendationsCreateNestedManyWithoutProductsInput
    Reviews?: ReviewsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateInput = {
    product_id: string
    title: string
    main_category?: string | null
    average_rating?: number | null
    rating_number?: number | null
    price?: number | null
    store?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Recommendations?: RecommendationsUncheckedCreateNestedManyWithoutProductsInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    main_category?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_number?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Recommendations?: RecommendationsUpdateManyWithoutProductsNestedInput
    Reviews?: ReviewsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    main_category?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_number?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Recommendations?: RecommendationsUncheckedUpdateManyWithoutProductsNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsCreateManyInput = {
    product_id: string
    title: string
    main_category?: string | null
    average_rating?: number | null
    rating_number?: number | null
    price?: number | null
    store?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductsUpdateManyMutationInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    main_category?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_number?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductsUncheckedUpdateManyInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    main_category?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_number?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendationsCreateInput = {
    score: number
    timestamp: bigint | number
    Products: ProductsCreateNestedOneWithoutRecommendationsInput
    Users: UsersCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationsUncheckedCreateInput = {
    recommendation_id?: number
    user_id: string
    product_id: string
    score: number
    timestamp: bigint | number
  }

  export type RecommendationsUpdateInput = {
    score?: FloatFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    Products?: ProductsUpdateOneRequiredWithoutRecommendationsNestedInput
    Users?: UsersUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationsUncheckedUpdateInput = {
    recommendation_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type RecommendationsCreateManyInput = {
    recommendation_id?: number
    user_id: string
    product_id: string
    score: number
    timestamp: bigint | number
  }

  export type RecommendationsUpdateManyMutationInput = {
    score?: FloatFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type RecommendationsUncheckedUpdateManyInput = {
    recommendation_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReviewsCreateInput = {
    rating: number
    title?: string | null
    text: string
    timestamp: bigint | number
    helpful_vote?: number | null
    verified_purchase?: boolean | null
    asin?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    Products: ProductsCreateNestedOneWithoutReviewsInput
    Users: UsersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    review_id?: number
    product_id: string
    user_id: string
    rating: number
    title?: string | null
    text: string
    timestamp: bigint | number
    helpful_vote?: number | null
    verified_purchase?: boolean | null
    asin?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewsUpdateInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    helpful_vote?: NullableIntFieldUpdateOperationsInput | number | null
    verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    asin?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    Products?: ProductsUpdateOneRequiredWithoutReviewsNestedInput
    Users?: UsersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    helpful_vote?: NullableIntFieldUpdateOperationsInput | number | null
    verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    asin?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewsCreateManyInput = {
    review_id?: number
    product_id: string
    user_id: string
    rating: number
    title?: string | null
    text: string
    timestamp: bigint | number
    helpful_vote?: number | null
    verified_purchase?: boolean | null
    asin?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewsUpdateManyMutationInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    helpful_vote?: NullableIntFieldUpdateOperationsInput | number | null
    verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    asin?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewsUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    helpful_vote?: NullableIntFieldUpdateOperationsInput | number | null
    verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    asin?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsersCreateInput = {
    user_id: string
    username: string
    Recommendations?: RecommendationsCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    user_id: string
    username: string
    Recommendations?: RecommendationsUncheckedCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    Recommendations?: RecommendationsUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    Recommendations?: RecommendationsUncheckedUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    user_id: string
    username: string
  }

  export type UsersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RecommendationsListRelationFilter = {
    every?: RecommendationsWhereInput
    some?: RecommendationsWhereInput
    none?: RecommendationsWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecommendationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    product_id?: SortOrder
    title?: SortOrder
    main_category?: SortOrder
    average_rating?: SortOrder
    rating_number?: SortOrder
    price?: SortOrder
    store?: SortOrder
    details?: SortOrder
    images?: SortOrder
    videos?: SortOrder
    features?: SortOrder
    descriptions?: SortOrder
    categories?: SortOrder
    bought_together?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    average_rating?: SortOrder
    rating_number?: SortOrder
    price?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    title?: SortOrder
    main_category?: SortOrder
    average_rating?: SortOrder
    rating_number?: SortOrder
    price?: SortOrder
    store?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    product_id?: SortOrder
    title?: SortOrder
    main_category?: SortOrder
    average_rating?: SortOrder
    rating_number?: SortOrder
    price?: SortOrder
    store?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    average_rating?: SortOrder
    rating_number?: SortOrder
    price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type RecommendationsUser_idProduct_idTimestampCompoundUniqueInput = {
    user_id: string
    product_id: string
    timestamp: bigint | number
  }

  export type RecommendationsCountOrderByAggregateInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    score?: SortOrder
    timestamp?: SortOrder
  }

  export type RecommendationsAvgOrderByAggregateInput = {
    recommendation_id?: SortOrder
    score?: SortOrder
    timestamp?: SortOrder
  }

  export type RecommendationsMaxOrderByAggregateInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    score?: SortOrder
    timestamp?: SortOrder
  }

  export type RecommendationsMinOrderByAggregateInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    score?: SortOrder
    timestamp?: SortOrder
  }

  export type RecommendationsSumOrderByAggregateInput = {
    recommendation_id?: SortOrder
    score?: SortOrder
    timestamp?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ReviewsProduct_idUser_idTimestampCompoundUniqueInput = {
    product_id: string
    user_id: string
    timestamp: bigint | number
  }

  export type ReviewsCountOrderByAggregateInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    helpful_vote?: SortOrder
    verified_purchase?: SortOrder
    asin?: SortOrder
    images?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    timestamp?: SortOrder
    helpful_vote?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    helpful_vote?: SortOrder
    verified_purchase?: SortOrder
    asin?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    review_id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    text?: SortOrder
    timestamp?: SortOrder
    helpful_vote?: SortOrder
    verified_purchase?: SortOrder
    asin?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    timestamp?: SortOrder
    helpful_vote?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
  }

  export type RecommendationsCreateNestedManyWithoutProductsInput = {
    create?: XOR<RecommendationsCreateWithoutProductsInput, RecommendationsUncheckedCreateWithoutProductsInput> | RecommendationsCreateWithoutProductsInput[] | RecommendationsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutProductsInput | RecommendationsCreateOrConnectWithoutProductsInput[]
    createMany?: RecommendationsCreateManyProductsInputEnvelope
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutProductsInput = {
    create?: XOR<ReviewsCreateWithoutProductsInput, ReviewsUncheckedCreateWithoutProductsInput> | ReviewsCreateWithoutProductsInput[] | ReviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductsInput | ReviewsCreateOrConnectWithoutProductsInput[]
    createMany?: ReviewsCreateManyProductsInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type RecommendationsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<RecommendationsCreateWithoutProductsInput, RecommendationsUncheckedCreateWithoutProductsInput> | RecommendationsCreateWithoutProductsInput[] | RecommendationsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutProductsInput | RecommendationsCreateOrConnectWithoutProductsInput[]
    createMany?: RecommendationsCreateManyProductsInputEnvelope
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ReviewsCreateWithoutProductsInput, ReviewsUncheckedCreateWithoutProductsInput> | ReviewsCreateWithoutProductsInput[] | ReviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductsInput | ReviewsCreateOrConnectWithoutProductsInput[]
    createMany?: ReviewsCreateManyProductsInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecommendationsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<RecommendationsCreateWithoutProductsInput, RecommendationsUncheckedCreateWithoutProductsInput> | RecommendationsCreateWithoutProductsInput[] | RecommendationsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutProductsInput | RecommendationsCreateOrConnectWithoutProductsInput[]
    upsert?: RecommendationsUpsertWithWhereUniqueWithoutProductsInput | RecommendationsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: RecommendationsCreateManyProductsInputEnvelope
    set?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    disconnect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    delete?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    update?: RecommendationsUpdateWithWhereUniqueWithoutProductsInput | RecommendationsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: RecommendationsUpdateManyWithWhereWithoutProductsInput | RecommendationsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ReviewsCreateWithoutProductsInput, ReviewsUncheckedCreateWithoutProductsInput> | ReviewsCreateWithoutProductsInput[] | ReviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductsInput | ReviewsCreateOrConnectWithoutProductsInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutProductsInput | ReviewsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ReviewsCreateManyProductsInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutProductsInput | ReviewsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutProductsInput | ReviewsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type RecommendationsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<RecommendationsCreateWithoutProductsInput, RecommendationsUncheckedCreateWithoutProductsInput> | RecommendationsCreateWithoutProductsInput[] | RecommendationsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutProductsInput | RecommendationsCreateOrConnectWithoutProductsInput[]
    upsert?: RecommendationsUpsertWithWhereUniqueWithoutProductsInput | RecommendationsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: RecommendationsCreateManyProductsInputEnvelope
    set?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    disconnect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    delete?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    update?: RecommendationsUpdateWithWhereUniqueWithoutProductsInput | RecommendationsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: RecommendationsUpdateManyWithWhereWithoutProductsInput | RecommendationsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ReviewsCreateWithoutProductsInput, ReviewsUncheckedCreateWithoutProductsInput> | ReviewsCreateWithoutProductsInput[] | ReviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductsInput | ReviewsCreateOrConnectWithoutProductsInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutProductsInput | ReviewsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ReviewsCreateManyProductsInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutProductsInput | ReviewsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutProductsInput | ReviewsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<ProductsCreateWithoutRecommendationsInput, ProductsUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutRecommendationsInput
    connect?: ProductsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<UsersCreateWithoutRecommendationsInput, UsersUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRecommendationsInput
    connect?: UsersWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ProductsUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<ProductsCreateWithoutRecommendationsInput, ProductsUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutRecommendationsInput
    upsert?: ProductsUpsertWithoutRecommendationsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutRecommendationsInput, ProductsUpdateWithoutRecommendationsInput>, ProductsUncheckedUpdateWithoutRecommendationsInput>
  }

  export type UsersUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<UsersCreateWithoutRecommendationsInput, UsersUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRecommendationsInput
    upsert?: UsersUpsertWithoutRecommendationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRecommendationsInput, UsersUpdateWithoutRecommendationsInput>, UsersUncheckedUpdateWithoutRecommendationsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutReviewsInput
    connect?: ProductsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ProductsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutReviewsInput
    upsert?: ProductsUpsertWithoutReviewsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutReviewsInput, ProductsUpdateWithoutReviewsInput>, ProductsUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    upsert?: UsersUpsertWithoutReviewsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReviewsInput, UsersUpdateWithoutReviewsInput>, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type RecommendationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<RecommendationsCreateWithoutUsersInput, RecommendationsUncheckedCreateWithoutUsersInput> | RecommendationsCreateWithoutUsersInput[] | RecommendationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutUsersInput | RecommendationsCreateOrConnectWithoutUsersInput[]
    createMany?: RecommendationsCreateManyUsersInputEnvelope
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUsersInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type RecommendationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RecommendationsCreateWithoutUsersInput, RecommendationsUncheckedCreateWithoutUsersInput> | RecommendationsCreateWithoutUsersInput[] | RecommendationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutUsersInput | RecommendationsCreateOrConnectWithoutUsersInput[]
    createMany?: RecommendationsCreateManyUsersInputEnvelope
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type RecommendationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RecommendationsCreateWithoutUsersInput, RecommendationsUncheckedCreateWithoutUsersInput> | RecommendationsCreateWithoutUsersInput[] | RecommendationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutUsersInput | RecommendationsCreateOrConnectWithoutUsersInput[]
    upsert?: RecommendationsUpsertWithWhereUniqueWithoutUsersInput | RecommendationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: RecommendationsCreateManyUsersInputEnvelope
    set?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    disconnect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    delete?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    update?: RecommendationsUpdateWithWhereUniqueWithoutUsersInput | RecommendationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RecommendationsUpdateManyWithWhereWithoutUsersInput | RecommendationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUsersInput | ReviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUsersInput | ReviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUsersInput | ReviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type RecommendationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RecommendationsCreateWithoutUsersInput, RecommendationsUncheckedCreateWithoutUsersInput> | RecommendationsCreateWithoutUsersInput[] | RecommendationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutUsersInput | RecommendationsCreateOrConnectWithoutUsersInput[]
    upsert?: RecommendationsUpsertWithWhereUniqueWithoutUsersInput | RecommendationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: RecommendationsCreateManyUsersInputEnvelope
    set?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    disconnect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    delete?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    update?: RecommendationsUpdateWithWhereUniqueWithoutUsersInput | RecommendationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RecommendationsUpdateManyWithWhereWithoutUsersInput | RecommendationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUsersInput | ReviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUsersInput | ReviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUsersInput | ReviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type RecommendationsCreateWithoutProductsInput = {
    score: number
    timestamp: bigint | number
    Users: UsersCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationsUncheckedCreateWithoutProductsInput = {
    recommendation_id?: number
    user_id: string
    score: number
    timestamp: bigint | number
  }

  export type RecommendationsCreateOrConnectWithoutProductsInput = {
    where: RecommendationsWhereUniqueInput
    create: XOR<RecommendationsCreateWithoutProductsInput, RecommendationsUncheckedCreateWithoutProductsInput>
  }

  export type RecommendationsCreateManyProductsInputEnvelope = {
    data: RecommendationsCreateManyProductsInput | RecommendationsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutProductsInput = {
    rating: number
    title?: string | null
    text: string
    timestamp: bigint | number
    helpful_vote?: number | null
    verified_purchase?: boolean | null
    asin?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    Users: UsersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutProductsInput = {
    review_id?: number
    user_id: string
    rating: number
    title?: string | null
    text: string
    timestamp: bigint | number
    helpful_vote?: number | null
    verified_purchase?: boolean | null
    asin?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewsCreateOrConnectWithoutProductsInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutProductsInput, ReviewsUncheckedCreateWithoutProductsInput>
  }

  export type ReviewsCreateManyProductsInputEnvelope = {
    data: ReviewsCreateManyProductsInput | ReviewsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationsUpsertWithWhereUniqueWithoutProductsInput = {
    where: RecommendationsWhereUniqueInput
    update: XOR<RecommendationsUpdateWithoutProductsInput, RecommendationsUncheckedUpdateWithoutProductsInput>
    create: XOR<RecommendationsCreateWithoutProductsInput, RecommendationsUncheckedCreateWithoutProductsInput>
  }

  export type RecommendationsUpdateWithWhereUniqueWithoutProductsInput = {
    where: RecommendationsWhereUniqueInput
    data: XOR<RecommendationsUpdateWithoutProductsInput, RecommendationsUncheckedUpdateWithoutProductsInput>
  }

  export type RecommendationsUpdateManyWithWhereWithoutProductsInput = {
    where: RecommendationsScalarWhereInput
    data: XOR<RecommendationsUpdateManyMutationInput, RecommendationsUncheckedUpdateManyWithoutProductsInput>
  }

  export type RecommendationsScalarWhereInput = {
    AND?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
    OR?: RecommendationsScalarWhereInput[]
    NOT?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
    recommendation_id?: IntFilter<"Recommendations"> | number
    user_id?: StringFilter<"Recommendations"> | string
    product_id?: StringFilter<"Recommendations"> | string
    score?: FloatFilter<"Recommendations"> | number
    timestamp?: BigIntFilter<"Recommendations"> | bigint | number
  }

  export type ReviewsUpsertWithWhereUniqueWithoutProductsInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutProductsInput, ReviewsUncheckedUpdateWithoutProductsInput>
    create: XOR<ReviewsCreateWithoutProductsInput, ReviewsUncheckedCreateWithoutProductsInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutProductsInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutProductsInput, ReviewsUncheckedUpdateWithoutProductsInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutProductsInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutProductsInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    review_id?: IntFilter<"Reviews"> | number
    product_id?: StringFilter<"Reviews"> | string
    user_id?: StringFilter<"Reviews"> | string
    rating?: FloatFilter<"Reviews"> | number
    title?: StringNullableFilter<"Reviews"> | string | null
    text?: StringFilter<"Reviews"> | string
    timestamp?: BigIntFilter<"Reviews"> | bigint | number
    helpful_vote?: IntNullableFilter<"Reviews"> | number | null
    verified_purchase?: BoolNullableFilter<"Reviews"> | boolean | null
    asin?: StringNullableFilter<"Reviews"> | string | null
    images?: JsonNullableFilter<"Reviews">
  }

  export type ProductsCreateWithoutRecommendationsInput = {
    product_id: string
    title: string
    main_category?: string | null
    average_rating?: number | null
    rating_number?: number | null
    price?: number | null
    store?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Reviews?: ReviewsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutRecommendationsInput = {
    product_id: string
    title: string
    main_category?: string | null
    average_rating?: number | null
    rating_number?: number | null
    price?: number | null
    store?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutRecommendationsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutRecommendationsInput, ProductsUncheckedCreateWithoutRecommendationsInput>
  }

  export type UsersCreateWithoutRecommendationsInput = {
    user_id: string
    username: string
    Reviews?: ReviewsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutRecommendationsInput = {
    user_id: string
    username: string
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutRecommendationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRecommendationsInput, UsersUncheckedCreateWithoutRecommendationsInput>
  }

  export type ProductsUpsertWithoutRecommendationsInput = {
    update: XOR<ProductsUpdateWithoutRecommendationsInput, ProductsUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<ProductsCreateWithoutRecommendationsInput, ProductsUncheckedCreateWithoutRecommendationsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutRecommendationsInput, ProductsUncheckedUpdateWithoutRecommendationsInput>
  }

  export type ProductsUpdateWithoutRecommendationsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    main_category?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_number?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Reviews?: ReviewsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutRecommendationsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    main_category?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_number?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Reviews?: ReviewsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type UsersUpsertWithoutRecommendationsInput = {
    update: XOR<UsersUpdateWithoutRecommendationsInput, UsersUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<UsersCreateWithoutRecommendationsInput, UsersUncheckedCreateWithoutRecommendationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRecommendationsInput, UsersUncheckedUpdateWithoutRecommendationsInput>
  }

  export type UsersUpdateWithoutRecommendationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    Reviews?: ReviewsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutRecommendationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    Reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ProductsCreateWithoutReviewsInput = {
    product_id: string
    title: string
    main_category?: string | null
    average_rating?: number | null
    rating_number?: number | null
    price?: number | null
    store?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Recommendations?: RecommendationsCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutReviewsInput = {
    product_id: string
    title: string
    main_category?: string | null
    average_rating?: number | null
    rating_number?: number | null
    price?: number | null
    store?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Recommendations?: RecommendationsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutReviewsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
  }

  export type UsersCreateWithoutReviewsInput = {
    user_id: string
    username: string
    Recommendations?: RecommendationsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutReviewsInput = {
    user_id: string
    username: string
    Recommendations?: RecommendationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutReviewsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
  }

  export type ProductsUpsertWithoutReviewsInput = {
    update: XOR<ProductsUpdateWithoutReviewsInput, ProductsUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutReviewsInput, ProductsUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductsUpdateWithoutReviewsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    main_category?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_number?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Recommendations?: RecommendationsUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutReviewsInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    main_category?: NullableStringFieldUpdateOperationsInput | string | null
    average_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_number?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    store?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    images?: NullableJsonNullValueInput | InputJsonValue
    videos?: NullableJsonNullValueInput | InputJsonValue
    features?: NullableJsonNullValueInput | InputJsonValue
    descriptions?: NullableJsonNullValueInput | InputJsonValue
    categories?: NullableJsonNullValueInput | InputJsonValue
    bought_together?: NullableJsonNullValueInput | InputJsonValue
    Recommendations?: RecommendationsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type UsersUpsertWithoutReviewsInput = {
    update: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersUpdateWithoutReviewsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    Recommendations?: RecommendationsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutReviewsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    Recommendations?: RecommendationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type RecommendationsCreateWithoutUsersInput = {
    score: number
    timestamp: bigint | number
    Products: ProductsCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationsUncheckedCreateWithoutUsersInput = {
    recommendation_id?: number
    product_id: string
    score: number
    timestamp: bigint | number
  }

  export type RecommendationsCreateOrConnectWithoutUsersInput = {
    where: RecommendationsWhereUniqueInput
    create: XOR<RecommendationsCreateWithoutUsersInput, RecommendationsUncheckedCreateWithoutUsersInput>
  }

  export type RecommendationsCreateManyUsersInputEnvelope = {
    data: RecommendationsCreateManyUsersInput | RecommendationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUsersInput = {
    rating: number
    title?: string | null
    text: string
    timestamp: bigint | number
    helpful_vote?: number | null
    verified_purchase?: boolean | null
    asin?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    Products: ProductsCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutUsersInput = {
    review_id?: number
    product_id: string
    rating: number
    title?: string | null
    text: string
    timestamp: bigint | number
    helpful_vote?: number | null
    verified_purchase?: boolean | null
    asin?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewsCreateOrConnectWithoutUsersInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput>
  }

  export type ReviewsCreateManyUsersInputEnvelope = {
    data: ReviewsCreateManyUsersInput | ReviewsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: RecommendationsWhereUniqueInput
    update: XOR<RecommendationsUpdateWithoutUsersInput, RecommendationsUncheckedUpdateWithoutUsersInput>
    create: XOR<RecommendationsCreateWithoutUsersInput, RecommendationsUncheckedCreateWithoutUsersInput>
  }

  export type RecommendationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: RecommendationsWhereUniqueInput
    data: XOR<RecommendationsUpdateWithoutUsersInput, RecommendationsUncheckedUpdateWithoutUsersInput>
  }

  export type RecommendationsUpdateManyWithWhereWithoutUsersInput = {
    where: RecommendationsScalarWhereInput
    data: XOR<RecommendationsUpdateManyMutationInput, RecommendationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUsersInput, ReviewsUncheckedUpdateWithoutUsersInput>
    create: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUsersInput, ReviewsUncheckedUpdateWithoutUsersInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUsersInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUsersInput>
  }

  export type RecommendationsCreateManyProductsInput = {
    recommendation_id?: number
    user_id: string
    score: number
    timestamp: bigint | number
  }

  export type ReviewsCreateManyProductsInput = {
    review_id?: number
    user_id: string
    rating: number
    title?: string | null
    text: string
    timestamp: bigint | number
    helpful_vote?: number | null
    verified_purchase?: boolean | null
    asin?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendationsUpdateWithoutProductsInput = {
    score?: FloatFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    Users?: UsersUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationsUncheckedUpdateWithoutProductsInput = {
    recommendation_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type RecommendationsUncheckedUpdateManyWithoutProductsInput = {
    recommendation_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReviewsUpdateWithoutProductsInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    helpful_vote?: NullableIntFieldUpdateOperationsInput | number | null
    verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    asin?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    Users?: UsersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutProductsInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    helpful_vote?: NullableIntFieldUpdateOperationsInput | number | null
    verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    asin?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewsUncheckedUpdateManyWithoutProductsInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    helpful_vote?: NullableIntFieldUpdateOperationsInput | number | null
    verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    asin?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendationsCreateManyUsersInput = {
    recommendation_id?: number
    product_id: string
    score: number
    timestamp: bigint | number
  }

  export type ReviewsCreateManyUsersInput = {
    review_id?: number
    product_id: string
    rating: number
    title?: string | null
    text: string
    timestamp: bigint | number
    helpful_vote?: number | null
    verified_purchase?: boolean | null
    asin?: string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RecommendationsUpdateWithoutUsersInput = {
    score?: FloatFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    Products?: ProductsUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationsUncheckedUpdateWithoutUsersInput = {
    recommendation_id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type RecommendationsUncheckedUpdateManyWithoutUsersInput = {
    recommendation_id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ReviewsUpdateWithoutUsersInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    helpful_vote?: NullableIntFieldUpdateOperationsInput | number | null
    verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    asin?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
    Products?: ProductsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUsersInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    helpful_vote?: NullableIntFieldUpdateOperationsInput | number | null
    verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    asin?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewsUncheckedUpdateManyWithoutUsersInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    helpful_vote?: NullableIntFieldUpdateOperationsInput | number | null
    verified_purchase?: NullableBoolFieldUpdateOperationsInput | boolean | null
    asin?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}