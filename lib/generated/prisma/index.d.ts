
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
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model course
 * 
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>
/**
 * Model courseprogress
 * 
 */
export type courseprogress = $Result.DefaultSelection<Prisma.$courseprogressPayload>
/**
 * Model enrollment
 * 
 */
export type enrollment = $Result.DefaultSelection<Prisma.$enrollmentPayload>
/**
 * Model exam
 * 
 */
export type exam = $Result.DefaultSelection<Prisma.$examPayload>
/**
 * Model examattempt
 * 
 */
export type examattempt = $Result.DefaultSelection<Prisma.$examattemptPayload>
/**
 * Model module
 * 
 */
export type module = $Result.DefaultSelection<Prisma.$modulePayload>
/**
 * Model moduleprogress
 * 
 */
export type moduleprogress = $Result.DefaultSelection<Prisma.$moduleprogressPayload>
/**
 * Model question
 * 
 */
export type question = $Result.DefaultSelection<Prisma.$questionPayload>
/**
 * Model questionoption
 * 
 */
export type questionoption = $Result.DefaultSelection<Prisma.$questionoptionPayload>
/**
 * Model student
 * 
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>
/**
 * Model teacher
 * 
 */
export type teacher = $Result.DefaultSelection<Prisma.$teacherPayload>
/**
 * Model wpos_wpdatatable_23
 * 
 */
export type wpos_wpdatatable_23 = $Result.DefaultSelection<Prisma.$wpos_wpdatatable_23Payload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.courseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseprogress`: Exposes CRUD operations for the **courseprogress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courseprogresses
    * const courseprogresses = await prisma.courseprogress.findMany()
    * ```
    */
  get courseprogress(): Prisma.courseprogressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.enrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.examDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examattempt`: Exposes CRUD operations for the **examattempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Examattempts
    * const examattempts = await prisma.examattempt.findMany()
    * ```
    */
  get examattempt(): Prisma.examattemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.moduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moduleprogress`: Exposes CRUD operations for the **moduleprogress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moduleprogresses
    * const moduleprogresses = await prisma.moduleprogress.findMany()
    * ```
    */
  get moduleprogress(): Prisma.moduleprogressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.questionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionoption`: Exposes CRUD operations for the **questionoption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questionoptions
    * const questionoptions = await prisma.questionoption.findMany()
    * ```
    */
  get questionoption(): Prisma.questionoptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.teacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wpos_wpdatatable_23`: Exposes CRUD operations for the **wpos_wpdatatable_23** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wpos_wpdatatable_23s
    * const wpos_wpdatatable_23s = await prisma.wpos_wpdatatable_23.findMany()
    * ```
    */
  get wpos_wpdatatable_23(): Prisma.wpos_wpdatatable_23Delegate<ExtArgs, ClientOptions>;
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
    admin: 'admin',
    course: 'course',
    courseprogress: 'courseprogress',
    enrollment: 'enrollment',
    exam: 'exam',
    examattempt: 'examattempt',
    module: 'module',
    moduleprogress: 'moduleprogress',
    question: 'question',
    questionoption: 'questionoption',
    student: 'student',
    teacher: 'teacher',
    wpos_wpdatatable_23: 'wpos_wpdatatable_23'
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
      modelProps: "admin" | "course" | "courseprogress" | "enrollment" | "exam" | "examattempt" | "module" | "moduleprogress" | "question" | "questionoption" | "student" | "teacher" | "wpos_wpdatatable_23"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      course: {
        payload: Prisma.$coursePayload<ExtArgs>
        fields: Prisma.courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      courseprogress: {
        payload: Prisma.$courseprogressPayload<ExtArgs>
        fields: Prisma.courseprogressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseprogressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseprogressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseprogressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseprogressPayload>
          }
          findFirst: {
            args: Prisma.courseprogressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseprogressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseprogressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseprogressPayload>
          }
          findMany: {
            args: Prisma.courseprogressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseprogressPayload>[]
          }
          create: {
            args: Prisma.courseprogressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseprogressPayload>
          }
          createMany: {
            args: Prisma.courseprogressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.courseprogressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseprogressPayload>
          }
          update: {
            args: Prisma.courseprogressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseprogressPayload>
          }
          deleteMany: {
            args: Prisma.courseprogressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courseprogressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.courseprogressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseprogressPayload>
          }
          aggregate: {
            args: Prisma.CourseprogressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseprogress>
          }
          groupBy: {
            args: Prisma.courseprogressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseprogressGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseprogressCountArgs<ExtArgs>
            result: $Utils.Optional<CourseprogressCountAggregateOutputType> | number
          }
        }
      }
      enrollment: {
        payload: Prisma.$enrollmentPayload<ExtArgs>
        fields: Prisma.enrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          findFirst: {
            args: Prisma.enrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          findMany: {
            args: Prisma.enrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>[]
          }
          create: {
            args: Prisma.enrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          createMany: {
            args: Prisma.enrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.enrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          update: {
            args: Prisma.enrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          deleteMany: {
            args: Prisma.enrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.enrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.enrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.enrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      exam: {
        payload: Prisma.$examPayload<ExtArgs>
        fields: Prisma.examFieldRefs
        operations: {
          findUnique: {
            args: Prisma.examFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.examFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examPayload>
          }
          findFirst: {
            args: Prisma.examFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.examFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examPayload>
          }
          findMany: {
            args: Prisma.examFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examPayload>[]
          }
          create: {
            args: Prisma.examCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examPayload>
          }
          createMany: {
            args: Prisma.examCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.examDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examPayload>
          }
          update: {
            args: Prisma.examUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examPayload>
          }
          deleteMany: {
            args: Prisma.examDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.examUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.examUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.examGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.examCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      examattempt: {
        payload: Prisma.$examattemptPayload<ExtArgs>
        fields: Prisma.examattemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.examattemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examattemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.examattemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examattemptPayload>
          }
          findFirst: {
            args: Prisma.examattemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examattemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.examattemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examattemptPayload>
          }
          findMany: {
            args: Prisma.examattemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examattemptPayload>[]
          }
          create: {
            args: Prisma.examattemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examattemptPayload>
          }
          createMany: {
            args: Prisma.examattemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.examattemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examattemptPayload>
          }
          update: {
            args: Prisma.examattemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examattemptPayload>
          }
          deleteMany: {
            args: Prisma.examattemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.examattemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.examattemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examattemptPayload>
          }
          aggregate: {
            args: Prisma.ExamattemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamattempt>
          }
          groupBy: {
            args: Prisma.examattemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamattemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.examattemptCountArgs<ExtArgs>
            result: $Utils.Optional<ExamattemptCountAggregateOutputType> | number
          }
        }
      }
      module: {
        payload: Prisma.$modulePayload<ExtArgs>
        fields: Prisma.moduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          findFirst: {
            args: Prisma.moduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          findMany: {
            args: Prisma.moduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[]
          }
          create: {
            args: Prisma.moduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          createMany: {
            args: Prisma.moduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.moduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          update: {
            args: Prisma.moduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          deleteMany: {
            args: Prisma.moduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.moduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.moduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.moduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.moduleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      moduleprogress: {
        payload: Prisma.$moduleprogressPayload<ExtArgs>
        fields: Prisma.moduleprogressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moduleprogressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduleprogressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moduleprogressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduleprogressPayload>
          }
          findFirst: {
            args: Prisma.moduleprogressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduleprogressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moduleprogressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduleprogressPayload>
          }
          findMany: {
            args: Prisma.moduleprogressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduleprogressPayload>[]
          }
          create: {
            args: Prisma.moduleprogressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduleprogressPayload>
          }
          createMany: {
            args: Prisma.moduleprogressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.moduleprogressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduleprogressPayload>
          }
          update: {
            args: Prisma.moduleprogressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduleprogressPayload>
          }
          deleteMany: {
            args: Prisma.moduleprogressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.moduleprogressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.moduleprogressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moduleprogressPayload>
          }
          aggregate: {
            args: Prisma.ModuleprogressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModuleprogress>
          }
          groupBy: {
            args: Prisma.moduleprogressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleprogressGroupByOutputType>[]
          }
          count: {
            args: Prisma.moduleprogressCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleprogressCountAggregateOutputType> | number
          }
        }
      }
      question: {
        payload: Prisma.$questionPayload<ExtArgs>
        fields: Prisma.questionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          findFirst: {
            args: Prisma.questionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          findMany: {
            args: Prisma.questionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>[]
          }
          create: {
            args: Prisma.questionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          createMany: {
            args: Prisma.questionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.questionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          update: {
            args: Prisma.questionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          deleteMany: {
            args: Prisma.questionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.questionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.questionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.questionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      questionoption: {
        payload: Prisma.$questionoptionPayload<ExtArgs>
        fields: Prisma.questionoptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionoptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionoptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionoptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionoptionPayload>
          }
          findFirst: {
            args: Prisma.questionoptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionoptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionoptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionoptionPayload>
          }
          findMany: {
            args: Prisma.questionoptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionoptionPayload>[]
          }
          create: {
            args: Prisma.questionoptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionoptionPayload>
          }
          createMany: {
            args: Prisma.questionoptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.questionoptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionoptionPayload>
          }
          update: {
            args: Prisma.questionoptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionoptionPayload>
          }
          deleteMany: {
            args: Prisma.questionoptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionoptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.questionoptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionoptionPayload>
          }
          aggregate: {
            args: Prisma.QuestionoptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionoption>
          }
          groupBy: {
            args: Prisma.questionoptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionoptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.questionoptionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionoptionCountAggregateOutputType> | number
          }
        }
      }
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      teacher: {
        payload: Prisma.$teacherPayload<ExtArgs>
        fields: Prisma.teacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          findFirst: {
            args: Prisma.teacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          findMany: {
            args: Prisma.teacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>[]
          }
          create: {
            args: Prisma.teacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          createMany: {
            args: Prisma.teacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.teacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          update: {
            args: Prisma.teacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          deleteMany: {
            args: Prisma.teacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.teacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.teacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.teacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      wpos_wpdatatable_23: {
        payload: Prisma.$wpos_wpdatatable_23Payload<ExtArgs>
        fields: Prisma.wpos_wpdatatable_23FieldRefs
        operations: {
          findUnique: {
            args: Prisma.wpos_wpdatatable_23FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wpos_wpdatatable_23Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.wpos_wpdatatable_23FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wpos_wpdatatable_23Payload>
          }
          findFirst: {
            args: Prisma.wpos_wpdatatable_23FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wpos_wpdatatable_23Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.wpos_wpdatatable_23FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wpos_wpdatatable_23Payload>
          }
          findMany: {
            args: Prisma.wpos_wpdatatable_23FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wpos_wpdatatable_23Payload>[]
          }
          create: {
            args: Prisma.wpos_wpdatatable_23CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wpos_wpdatatable_23Payload>
          }
          createMany: {
            args: Prisma.wpos_wpdatatable_23CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.wpos_wpdatatable_23DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wpos_wpdatatable_23Payload>
          }
          update: {
            args: Prisma.wpos_wpdatatable_23UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wpos_wpdatatable_23Payload>
          }
          deleteMany: {
            args: Prisma.wpos_wpdatatable_23DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.wpos_wpdatatable_23UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.wpos_wpdatatable_23UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wpos_wpdatatable_23Payload>
          }
          aggregate: {
            args: Prisma.Wpos_wpdatatable_23AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWpos_wpdatatable_23>
          }
          groupBy: {
            args: Prisma.wpos_wpdatatable_23GroupByArgs<ExtArgs>
            result: $Utils.Optional<Wpos_wpdatatable_23GroupByOutputType>[]
          }
          count: {
            args: Prisma.wpos_wpdatatable_23CountArgs<ExtArgs>
            result: $Utils.Optional<Wpos_wpdatatable_23CountAggregateOutputType> | number
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
    admin?: adminOmit
    course?: courseOmit
    courseprogress?: courseprogressOmit
    enrollment?: enrollmentOmit
    exam?: examOmit
    examattempt?: examattemptOmit
    module?: moduleOmit
    moduleprogress?: moduleprogressOmit
    question?: questionOmit
    questionoption?: questionoptionOmit
    student?: studentOmit
    teacher?: teacherOmit
    wpos_wpdatatable_23?: wpos_wpdatatable_23Omit
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
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    courseprogress: number
    enrollment: number
    module: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseprogress?: boolean | CourseCountOutputTypeCountCourseprogressArgs
    enrollment?: boolean | CourseCountOutputTypeCountEnrollmentArgs
    module?: boolean | CourseCountOutputTypeCountModuleArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseprogressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseprogressWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    examattempt: number
    question: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examattempt?: boolean | ExamCountOutputTypeCountExamattemptArgs
    question?: boolean | ExamCountOutputTypeCountQuestionArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountExamattemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: examattemptWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    exam: number
    moduleprogress: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ModuleCountOutputTypeCountExamArgs
    moduleprogress?: boolean | ModuleCountOutputTypeCountModuleprogressArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: examWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountModuleprogressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleprogressWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    questionoption: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionoption?: boolean | QuestionCountOutputTypeCountQuestionoptionArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountQuestionoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionoptionWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    courseprogress: number
    enrollment: number
    examattempt: number
    moduleprogress: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseprogress?: boolean | StudentCountOutputTypeCountCourseprogressArgs
    enrollment?: boolean | StudentCountOutputTypeCountEnrollmentArgs
    examattempt?: boolean | StudentCountOutputTypeCountExamattemptArgs
    moduleprogress?: boolean | StudentCountOutputTypeCountModuleprogressArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCourseprogressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseprogressWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountExamattemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: examattemptWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountModuleprogressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleprogressWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    course: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | TeacherCountOutputTypeCountCourseArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    passcode: string | null
    phoneno: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    passcode: string | null
    phoneno: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    passcode: number
    phoneno: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    passcode?: true
    phoneno?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    passcode?: true
    phoneno?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    passcode?: true
    phoneno?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    passcode: string
    phoneno: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    passcode?: boolean
    phoneno?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    id?: boolean
    name?: boolean
    passcode?: boolean
    phoneno?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "passcode" | "phoneno" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      passcode: string
      phoneno: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'String'>
    readonly name: FieldRef<"admin", 'String'>
    readonly passcode: FieldRef<"admin", 'String'>
    readonly phoneno: FieldRef<"admin", 'String'>
    readonly createdAt: FieldRef<"admin", 'DateTime'>
    readonly updatedAt: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    teacherId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    teacherId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    teacherId: number
    createdAt: number
    updatedAt: number
    imageUrl: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    teacherId?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string | null
    teacherId: string | null
    createdAt: Date
    updatedAt: Date
    imageUrl: string | null
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    teacher?: boolean | course$teacherArgs<ExtArgs>
    courseprogress?: boolean | course$courseprogressArgs<ExtArgs>
    enrollment?: boolean | course$enrollmentArgs<ExtArgs>
    module?: boolean | course$moduleArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>



  export type courseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    teacherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
  }

  export type courseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "teacherId" | "createdAt" | "updatedAt" | "imageUrl", ExtArgs["result"]["course"]>
  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | course$teacherArgs<ExtArgs>
    courseprogress?: boolean | course$courseprogressArgs<ExtArgs>
    enrollment?: boolean | course$enrollmentArgs<ExtArgs>
    module?: boolean | course$moduleArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course"
    objects: {
      teacher: Prisma.$teacherPayload<ExtArgs> | null
      courseprogress: Prisma.$courseprogressPayload<ExtArgs>[]
      enrollment: Prisma.$enrollmentPayload<ExtArgs>[]
      module: Prisma.$modulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      teacherId: string | null
      createdAt: Date
      updatedAt: Date
      imageUrl: string | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<Prisma.$coursePayload, S>

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course'], meta: { name: 'course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courseFindUniqueArgs>(args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs>(args: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courseFindFirstArgs>(args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs>(args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends courseFindManyArgs>(args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends courseCreateArgs>(args: SelectSubset<T, courseCreateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {courseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courseCreateManyArgs>(args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends courseDeleteArgs>(args: SelectSubset<T, courseDeleteArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courseUpdateArgs>(args: SelectSubset<T, courseUpdateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courseDeleteManyArgs>(args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courseUpdateManyArgs>(args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends courseUpsertArgs>(args: SelectSubset<T, courseUpsertArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
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
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course model
   */
  readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends course$teacherArgs<ExtArgs> = {}>(args?: Subset<T, course$teacherArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    courseprogress<T extends course$courseprogressArgs<ExtArgs> = {}>(args?: Subset<T, course$courseprogressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$courseprogressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollment<T extends course$enrollmentArgs<ExtArgs> = {}>(args?: Subset<T, course$enrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    module<T extends course$moduleArgs<ExtArgs> = {}>(args?: Subset<T, course$moduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly id: FieldRef<"course", 'String'>
    readonly title: FieldRef<"course", 'String'>
    readonly description: FieldRef<"course", 'String'>
    readonly teacherId: FieldRef<"course", 'String'>
    readonly createdAt: FieldRef<"course", 'DateTime'>
    readonly updatedAt: FieldRef<"course", 'DateTime'>
    readonly imageUrl: FieldRef<"course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>
  }

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>
  }

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * course.teacher
   */
  export type course$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    where?: teacherWhereInput
  }

  /**
   * course.courseprogress
   */
  export type course$courseprogressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
    where?: courseprogressWhereInput
    orderBy?: courseprogressOrderByWithRelationInput | courseprogressOrderByWithRelationInput[]
    cursor?: courseprogressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseprogressScalarFieldEnum | CourseprogressScalarFieldEnum[]
  }

  /**
   * course.enrollment
   */
  export type course$enrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    where?: enrollmentWhereInput
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    cursor?: enrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * course.module
   */
  export type course$moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    where?: moduleWhereInput
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    cursor?: moduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
  }


  /**
   * Model courseprogress
   */

  export type AggregateCourseprogress = {
    _count: CourseprogressCountAggregateOutputType | null
    _avg: CourseprogressAvgAggregateOutputType | null
    _sum: CourseprogressSumAggregateOutputType | null
    _min: CourseprogressMinAggregateOutputType | null
    _max: CourseprogressMaxAggregateOutputType | null
  }

  export type CourseprogressAvgAggregateOutputType = {
    progress: number | null
  }

  export type CourseprogressSumAggregateOutputType = {
    progress: number | null
  }

  export type CourseprogressMinAggregateOutputType = {
    id: string | null
    progress: number | null
    studentId: string | null
    courseId: string | null
    lastUpdated: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseprogressMaxAggregateOutputType = {
    id: string | null
    progress: number | null
    studentId: string | null
    courseId: string | null
    lastUpdated: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseprogressCountAggregateOutputType = {
    id: number
    progress: number
    studentId: number
    courseId: number
    lastUpdated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseprogressAvgAggregateInputType = {
    progress?: true
  }

  export type CourseprogressSumAggregateInputType = {
    progress?: true
  }

  export type CourseprogressMinAggregateInputType = {
    id?: true
    progress?: true
    studentId?: true
    courseId?: true
    lastUpdated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseprogressMaxAggregateInputType = {
    id?: true
    progress?: true
    studentId?: true
    courseId?: true
    lastUpdated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseprogressCountAggregateInputType = {
    id?: true
    progress?: true
    studentId?: true
    courseId?: true
    lastUpdated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseprogressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courseprogress to aggregate.
     */
    where?: courseprogressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courseprogresses to fetch.
     */
    orderBy?: courseprogressOrderByWithRelationInput | courseprogressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseprogressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courseprogresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courseprogresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courseprogresses
    **/
    _count?: true | CourseprogressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseprogressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseprogressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseprogressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseprogressMaxAggregateInputType
  }

  export type GetCourseprogressAggregateType<T extends CourseprogressAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseprogress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseprogress[P]>
      : GetScalarType<T[P], AggregateCourseprogress[P]>
  }




  export type courseprogressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseprogressWhereInput
    orderBy?: courseprogressOrderByWithAggregationInput | courseprogressOrderByWithAggregationInput[]
    by: CourseprogressScalarFieldEnum[] | CourseprogressScalarFieldEnum
    having?: courseprogressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseprogressCountAggregateInputType | true
    _avg?: CourseprogressAvgAggregateInputType
    _sum?: CourseprogressSumAggregateInputType
    _min?: CourseprogressMinAggregateInputType
    _max?: CourseprogressMaxAggregateInputType
  }

  export type CourseprogressGroupByOutputType = {
    id: string
    progress: number
    studentId: string
    courseId: string
    lastUpdated: Date
    createdAt: Date
    updatedAt: Date
    _count: CourseprogressCountAggregateOutputType | null
    _avg: CourseprogressAvgAggregateOutputType | null
    _sum: CourseprogressSumAggregateOutputType | null
    _min: CourseprogressMinAggregateOutputType | null
    _max: CourseprogressMaxAggregateOutputType | null
  }

  type GetCourseprogressGroupByPayload<T extends courseprogressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseprogressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseprogressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseprogressGroupByOutputType[P]>
            : GetScalarType<T[P], CourseprogressGroupByOutputType[P]>
        }
      >
    >


  export type courseprogressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    progress?: boolean
    studentId?: boolean
    courseId?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseprogress"]>



  export type courseprogressSelectScalar = {
    id?: boolean
    progress?: boolean
    studentId?: boolean
    courseId?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type courseprogressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "progress" | "studentId" | "courseId" | "lastUpdated" | "createdAt" | "updatedAt", ExtArgs["result"]["courseprogress"]>
  export type courseprogressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }

  export type $courseprogressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "courseprogress"
    objects: {
      course: Prisma.$coursePayload<ExtArgs>
      student: Prisma.$studentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      progress: number
      studentId: string
      courseId: string
      lastUpdated: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseprogress"]>
    composites: {}
  }

  type courseprogressGetPayload<S extends boolean | null | undefined | courseprogressDefaultArgs> = $Result.GetResult<Prisma.$courseprogressPayload, S>

  type courseprogressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courseprogressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseprogressCountAggregateInputType | true
    }

  export interface courseprogressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['courseprogress'], meta: { name: 'courseprogress' } }
    /**
     * Find zero or one Courseprogress that matches the filter.
     * @param {courseprogressFindUniqueArgs} args - Arguments to find a Courseprogress
     * @example
     * // Get one Courseprogress
     * const courseprogress = await prisma.courseprogress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courseprogressFindUniqueArgs>(args: SelectSubset<T, courseprogressFindUniqueArgs<ExtArgs>>): Prisma__courseprogressClient<$Result.GetResult<Prisma.$courseprogressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courseprogress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courseprogressFindUniqueOrThrowArgs} args - Arguments to find a Courseprogress
     * @example
     * // Get one Courseprogress
     * const courseprogress = await prisma.courseprogress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courseprogressFindUniqueOrThrowArgs>(args: SelectSubset<T, courseprogressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courseprogressClient<$Result.GetResult<Prisma.$courseprogressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courseprogress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseprogressFindFirstArgs} args - Arguments to find a Courseprogress
     * @example
     * // Get one Courseprogress
     * const courseprogress = await prisma.courseprogress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courseprogressFindFirstArgs>(args?: SelectSubset<T, courseprogressFindFirstArgs<ExtArgs>>): Prisma__courseprogressClient<$Result.GetResult<Prisma.$courseprogressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courseprogress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseprogressFindFirstOrThrowArgs} args - Arguments to find a Courseprogress
     * @example
     * // Get one Courseprogress
     * const courseprogress = await prisma.courseprogress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courseprogressFindFirstOrThrowArgs>(args?: SelectSubset<T, courseprogressFindFirstOrThrowArgs<ExtArgs>>): Prisma__courseprogressClient<$Result.GetResult<Prisma.$courseprogressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courseprogresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseprogressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courseprogresses
     * const courseprogresses = await prisma.courseprogress.findMany()
     * 
     * // Get first 10 Courseprogresses
     * const courseprogresses = await prisma.courseprogress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseprogressWithIdOnly = await prisma.courseprogress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends courseprogressFindManyArgs>(args?: SelectSubset<T, courseprogressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$courseprogressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courseprogress.
     * @param {courseprogressCreateArgs} args - Arguments to create a Courseprogress.
     * @example
     * // Create one Courseprogress
     * const Courseprogress = await prisma.courseprogress.create({
     *   data: {
     *     // ... data to create a Courseprogress
     *   }
     * })
     * 
     */
    create<T extends courseprogressCreateArgs>(args: SelectSubset<T, courseprogressCreateArgs<ExtArgs>>): Prisma__courseprogressClient<$Result.GetResult<Prisma.$courseprogressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courseprogresses.
     * @param {courseprogressCreateManyArgs} args - Arguments to create many Courseprogresses.
     * @example
     * // Create many Courseprogresses
     * const courseprogress = await prisma.courseprogress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courseprogressCreateManyArgs>(args?: SelectSubset<T, courseprogressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Courseprogress.
     * @param {courseprogressDeleteArgs} args - Arguments to delete one Courseprogress.
     * @example
     * // Delete one Courseprogress
     * const Courseprogress = await prisma.courseprogress.delete({
     *   where: {
     *     // ... filter to delete one Courseprogress
     *   }
     * })
     * 
     */
    delete<T extends courseprogressDeleteArgs>(args: SelectSubset<T, courseprogressDeleteArgs<ExtArgs>>): Prisma__courseprogressClient<$Result.GetResult<Prisma.$courseprogressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courseprogress.
     * @param {courseprogressUpdateArgs} args - Arguments to update one Courseprogress.
     * @example
     * // Update one Courseprogress
     * const courseprogress = await prisma.courseprogress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courseprogressUpdateArgs>(args: SelectSubset<T, courseprogressUpdateArgs<ExtArgs>>): Prisma__courseprogressClient<$Result.GetResult<Prisma.$courseprogressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courseprogresses.
     * @param {courseprogressDeleteManyArgs} args - Arguments to filter Courseprogresses to delete.
     * @example
     * // Delete a few Courseprogresses
     * const { count } = await prisma.courseprogress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courseprogressDeleteManyArgs>(args?: SelectSubset<T, courseprogressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courseprogresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseprogressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courseprogresses
     * const courseprogress = await prisma.courseprogress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courseprogressUpdateManyArgs>(args: SelectSubset<T, courseprogressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Courseprogress.
     * @param {courseprogressUpsertArgs} args - Arguments to update or create a Courseprogress.
     * @example
     * // Update or create a Courseprogress
     * const courseprogress = await prisma.courseprogress.upsert({
     *   create: {
     *     // ... data to create a Courseprogress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courseprogress we want to update
     *   }
     * })
     */
    upsert<T extends courseprogressUpsertArgs>(args: SelectSubset<T, courseprogressUpsertArgs<ExtArgs>>): Prisma__courseprogressClient<$Result.GetResult<Prisma.$courseprogressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courseprogresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseprogressCountArgs} args - Arguments to filter Courseprogresses to count.
     * @example
     * // Count the number of Courseprogresses
     * const count = await prisma.courseprogress.count({
     *   where: {
     *     // ... the filter for the Courseprogresses we want to count
     *   }
     * })
    **/
    count<T extends courseprogressCountArgs>(
      args?: Subset<T, courseprogressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseprogressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courseprogress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseprogressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseprogressAggregateArgs>(args: Subset<T, CourseprogressAggregateArgs>): Prisma.PrismaPromise<GetCourseprogressAggregateType<T>>

    /**
     * Group by Courseprogress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseprogressGroupByArgs} args - Group by arguments.
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
      T extends courseprogressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseprogressGroupByArgs['orderBy'] }
        : { orderBy?: courseprogressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, courseprogressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseprogressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the courseprogress model
   */
  readonly fields: courseprogressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for courseprogress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseprogressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the courseprogress model
   */
  interface courseprogressFieldRefs {
    readonly id: FieldRef<"courseprogress", 'String'>
    readonly progress: FieldRef<"courseprogress", 'Float'>
    readonly studentId: FieldRef<"courseprogress", 'String'>
    readonly courseId: FieldRef<"courseprogress", 'String'>
    readonly lastUpdated: FieldRef<"courseprogress", 'DateTime'>
    readonly createdAt: FieldRef<"courseprogress", 'DateTime'>
    readonly updatedAt: FieldRef<"courseprogress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * courseprogress findUnique
   */
  export type courseprogressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
    /**
     * Filter, which courseprogress to fetch.
     */
    where: courseprogressWhereUniqueInput
  }

  /**
   * courseprogress findUniqueOrThrow
   */
  export type courseprogressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
    /**
     * Filter, which courseprogress to fetch.
     */
    where: courseprogressWhereUniqueInput
  }

  /**
   * courseprogress findFirst
   */
  export type courseprogressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
    /**
     * Filter, which courseprogress to fetch.
     */
    where?: courseprogressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courseprogresses to fetch.
     */
    orderBy?: courseprogressOrderByWithRelationInput | courseprogressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courseprogresses.
     */
    cursor?: courseprogressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courseprogresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courseprogresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courseprogresses.
     */
    distinct?: CourseprogressScalarFieldEnum | CourseprogressScalarFieldEnum[]
  }

  /**
   * courseprogress findFirstOrThrow
   */
  export type courseprogressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
    /**
     * Filter, which courseprogress to fetch.
     */
    where?: courseprogressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courseprogresses to fetch.
     */
    orderBy?: courseprogressOrderByWithRelationInput | courseprogressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courseprogresses.
     */
    cursor?: courseprogressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courseprogresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courseprogresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courseprogresses.
     */
    distinct?: CourseprogressScalarFieldEnum | CourseprogressScalarFieldEnum[]
  }

  /**
   * courseprogress findMany
   */
  export type courseprogressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
    /**
     * Filter, which courseprogresses to fetch.
     */
    where?: courseprogressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courseprogresses to fetch.
     */
    orderBy?: courseprogressOrderByWithRelationInput | courseprogressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courseprogresses.
     */
    cursor?: courseprogressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courseprogresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courseprogresses.
     */
    skip?: number
    distinct?: CourseprogressScalarFieldEnum | CourseprogressScalarFieldEnum[]
  }

  /**
   * courseprogress create
   */
  export type courseprogressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
    /**
     * The data needed to create a courseprogress.
     */
    data: XOR<courseprogressCreateInput, courseprogressUncheckedCreateInput>
  }

  /**
   * courseprogress createMany
   */
  export type courseprogressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courseprogresses.
     */
    data: courseprogressCreateManyInput | courseprogressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * courseprogress update
   */
  export type courseprogressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
    /**
     * The data needed to update a courseprogress.
     */
    data: XOR<courseprogressUpdateInput, courseprogressUncheckedUpdateInput>
    /**
     * Choose, which courseprogress to update.
     */
    where: courseprogressWhereUniqueInput
  }

  /**
   * courseprogress updateMany
   */
  export type courseprogressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courseprogresses.
     */
    data: XOR<courseprogressUpdateManyMutationInput, courseprogressUncheckedUpdateManyInput>
    /**
     * Filter which courseprogresses to update
     */
    where?: courseprogressWhereInput
    /**
     * Limit how many courseprogresses to update.
     */
    limit?: number
  }

  /**
   * courseprogress upsert
   */
  export type courseprogressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
    /**
     * The filter to search for the courseprogress to update in case it exists.
     */
    where: courseprogressWhereUniqueInput
    /**
     * In case the courseprogress found by the `where` argument doesn't exist, create a new courseprogress with this data.
     */
    create: XOR<courseprogressCreateInput, courseprogressUncheckedCreateInput>
    /**
     * In case the courseprogress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseprogressUpdateInput, courseprogressUncheckedUpdateInput>
  }

  /**
   * courseprogress delete
   */
  export type courseprogressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
    /**
     * Filter which courseprogress to delete.
     */
    where: courseprogressWhereUniqueInput
  }

  /**
   * courseprogress deleteMany
   */
  export type courseprogressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courseprogresses to delete
     */
    where?: courseprogressWhereInput
    /**
     * Limit how many courseprogresses to delete.
     */
    limit?: number
  }

  /**
   * courseprogress without action
   */
  export type courseprogressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
  }


  /**
   * Model enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    enrolledAt: Date | null
    courseId: string | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    enrolledAt: Date | null
    courseId: string | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    enrolledAt: number
    courseId: number
    studentId: number
    createdAt: number
    updatedAt: number
    url: number
    _all: number
  }


  export type EnrollmentMinAggregateInputType = {
    id?: true
    enrolledAt?: true
    courseId?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
    url?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    enrolledAt?: true
    courseId?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
    url?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    enrolledAt?: true
    courseId?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollment to aggregate.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type enrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentWhereInput
    orderBy?: enrollmentOrderByWithAggregationInput | enrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: enrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    enrolledAt: Date
    courseId: string
    studentId: string
    createdAt: Date
    updatedAt: Date
    url: string
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends enrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type enrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrolledAt?: boolean
    courseId?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>



  export type enrollmentSelectScalar = {
    id?: boolean
    enrolledAt?: boolean
    courseId?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
  }

  export type enrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enrolledAt" | "courseId" | "studentId" | "createdAt" | "updatedAt" | "url", ExtArgs["result"]["enrollment"]>
  export type enrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }

  export type $enrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enrollment"
    objects: {
      course: Prisma.$coursePayload<ExtArgs>
      student: Prisma.$studentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enrolledAt: Date
      courseId: string
      studentId: string
      createdAt: Date
      updatedAt: Date
      url: string
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type enrollmentGetPayload<S extends boolean | null | undefined | enrollmentDefaultArgs> = $Result.GetResult<Prisma.$enrollmentPayload, S>

  type enrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface enrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enrollment'], meta: { name: 'enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {enrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enrollmentFindUniqueArgs>(args: SelectSubset<T, enrollmentFindUniqueArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, enrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enrollmentFindFirstArgs>(args?: SelectSubset<T, enrollmentFindFirstArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, enrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends enrollmentFindManyArgs>(args?: SelectSubset<T, enrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {enrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends enrollmentCreateArgs>(args: SelectSubset<T, enrollmentCreateArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {enrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enrollmentCreateManyArgs>(args?: SelectSubset<T, enrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enrollment.
     * @param {enrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends enrollmentDeleteArgs>(args: SelectSubset<T, enrollmentDeleteArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {enrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enrollmentUpdateArgs>(args: SelectSubset<T, enrollmentUpdateArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {enrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enrollmentDeleteManyArgs>(args?: SelectSubset<T, enrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enrollmentUpdateManyArgs>(args: SelectSubset<T, enrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enrollment.
     * @param {enrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends enrollmentUpsertArgs>(args: SelectSubset<T, enrollmentUpsertArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends enrollmentCountArgs>(
      args?: Subset<T, enrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentGroupByArgs} args - Group by arguments.
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
      T extends enrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enrollmentGroupByArgs['orderBy'] }
        : { orderBy?: enrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enrollment model
   */
  readonly fields: enrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the enrollment model
   */
  interface enrollmentFieldRefs {
    readonly id: FieldRef<"enrollment", 'String'>
    readonly enrolledAt: FieldRef<"enrollment", 'DateTime'>
    readonly courseId: FieldRef<"enrollment", 'String'>
    readonly studentId: FieldRef<"enrollment", 'String'>
    readonly createdAt: FieldRef<"enrollment", 'DateTime'>
    readonly updatedAt: FieldRef<"enrollment", 'DateTime'>
    readonly url: FieldRef<"enrollment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * enrollment findUnique
   */
  export type enrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment findUniqueOrThrow
   */
  export type enrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment findFirst
   */
  export type enrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * enrollment findFirstOrThrow
   */
  export type enrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * enrollment findMany
   */
  export type enrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enrollments.
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * enrollment create
   */
  export type enrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a enrollment.
     */
    data: XOR<enrollmentCreateInput, enrollmentUncheckedCreateInput>
  }

  /**
   * enrollment createMany
   */
  export type enrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enrollments.
     */
    data: enrollmentCreateManyInput | enrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enrollment update
   */
  export type enrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a enrollment.
     */
    data: XOR<enrollmentUpdateInput, enrollmentUncheckedUpdateInput>
    /**
     * Choose, which enrollment to update.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment updateMany
   */
  export type enrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enrollments.
     */
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyInput>
    /**
     * Filter which enrollments to update
     */
    where?: enrollmentWhereInput
    /**
     * Limit how many enrollments to update.
     */
    limit?: number
  }

  /**
   * enrollment upsert
   */
  export type enrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the enrollment to update in case it exists.
     */
    where: enrollmentWhereUniqueInput
    /**
     * In case the enrollment found by the `where` argument doesn't exist, create a new enrollment with this data.
     */
    create: XOR<enrollmentCreateInput, enrollmentUncheckedCreateInput>
    /**
     * In case the enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enrollmentUpdateInput, enrollmentUncheckedUpdateInput>
  }

  /**
   * enrollment delete
   */
  export type enrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter which enrollment to delete.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment deleteMany
   */
  export type enrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollments to delete
     */
    where?: enrollmentWhereInput
    /**
     * Limit how many enrollments to delete.
     */
    limit?: number
  }

  /**
   * enrollment without action
   */
  export type enrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
  }


  /**
   * Model exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    title: string | null
    moduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    title: string | null
    moduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    title: number
    moduleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExamMinAggregateInputType = {
    id?: true
    title?: true
    moduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    title?: true
    moduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    title?: true
    moduleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exam to aggregate.
     */
    where?: examWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exams to fetch.
     */
    orderBy?: examOrderByWithRelationInput | examOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: examWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type examGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: examWhereInput
    orderBy?: examOrderByWithAggregationInput | examOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: examScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    title: string
    moduleId: string
    createdAt: Date
    updatedAt: Date
    _count: ExamCountAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends examGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type examSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    moduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | moduleDefaultArgs<ExtArgs>
    examattempt?: boolean | exam$examattemptArgs<ExtArgs>
    question?: boolean | exam$questionArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>



  export type examSelectScalar = {
    id?: boolean
    title?: boolean
    moduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type examOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "moduleId" | "createdAt" | "updatedAt", ExtArgs["result"]["exam"]>
  export type examInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | moduleDefaultArgs<ExtArgs>
    examattempt?: boolean | exam$examattemptArgs<ExtArgs>
    question?: boolean | exam$questionArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $examPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exam"
    objects: {
      module: Prisma.$modulePayload<ExtArgs>
      examattempt: Prisma.$examattemptPayload<ExtArgs>[]
      question: Prisma.$questionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      moduleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type examGetPayload<S extends boolean | null | undefined | examDefaultArgs> = $Result.GetResult<Prisma.$examPayload, S>

  type examCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<examFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface examDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exam'], meta: { name: 'exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {examFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends examFindUniqueArgs>(args: SelectSubset<T, examFindUniqueArgs<ExtArgs>>): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {examFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends examFindUniqueOrThrowArgs>(args: SelectSubset<T, examFindUniqueOrThrowArgs<ExtArgs>>): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends examFindFirstArgs>(args?: SelectSubset<T, examFindFirstArgs<ExtArgs>>): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends examFindFirstOrThrowArgs>(args?: SelectSubset<T, examFindFirstOrThrowArgs<ExtArgs>>): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends examFindManyArgs>(args?: SelectSubset<T, examFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam.
     * @param {examCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends examCreateArgs>(args: SelectSubset<T, examCreateArgs<ExtArgs>>): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {examCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends examCreateManyArgs>(args?: SelectSubset<T, examCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exam.
     * @param {examDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends examDeleteArgs>(args: SelectSubset<T, examDeleteArgs<ExtArgs>>): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam.
     * @param {examUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends examUpdateArgs>(args: SelectSubset<T, examUpdateArgs<ExtArgs>>): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {examDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends examDeleteManyArgs>(args?: SelectSubset<T, examDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends examUpdateManyArgs>(args: SelectSubset<T, examUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam.
     * @param {examUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends examUpsertArgs>(args: SelectSubset<T, examUpsertArgs<ExtArgs>>): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends examCountArgs>(
      args?: Subset<T, examCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examGroupByArgs} args - Group by arguments.
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
      T extends examGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: examGroupByArgs['orderBy'] }
        : { orderBy?: examGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, examGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exam model
   */
  readonly fields: examFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__examClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends moduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduleDefaultArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    examattempt<T extends exam$examattemptArgs<ExtArgs> = {}>(args?: Subset<T, exam$examattemptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$examattemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    question<T extends exam$questionArgs<ExtArgs> = {}>(args?: Subset<T, exam$questionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the exam model
   */
  interface examFieldRefs {
    readonly id: FieldRef<"exam", 'String'>
    readonly title: FieldRef<"exam", 'String'>
    readonly moduleId: FieldRef<"exam", 'String'>
    readonly createdAt: FieldRef<"exam", 'DateTime'>
    readonly updatedAt: FieldRef<"exam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * exam findUnique
   */
  export type examFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam
     */
    omit?: examOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examInclude<ExtArgs> | null
    /**
     * Filter, which exam to fetch.
     */
    where: examWhereUniqueInput
  }

  /**
   * exam findUniqueOrThrow
   */
  export type examFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam
     */
    omit?: examOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examInclude<ExtArgs> | null
    /**
     * Filter, which exam to fetch.
     */
    where: examWhereUniqueInput
  }

  /**
   * exam findFirst
   */
  export type examFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam
     */
    omit?: examOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examInclude<ExtArgs> | null
    /**
     * Filter, which exam to fetch.
     */
    where?: examWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exams to fetch.
     */
    orderBy?: examOrderByWithRelationInput | examOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exams.
     */
    cursor?: examWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * exam findFirstOrThrow
   */
  export type examFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam
     */
    omit?: examOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examInclude<ExtArgs> | null
    /**
     * Filter, which exam to fetch.
     */
    where?: examWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exams to fetch.
     */
    orderBy?: examOrderByWithRelationInput | examOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exams.
     */
    cursor?: examWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * exam findMany
   */
  export type examFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam
     */
    omit?: examOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examInclude<ExtArgs> | null
    /**
     * Filter, which exams to fetch.
     */
    where?: examWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exams to fetch.
     */
    orderBy?: examOrderByWithRelationInput | examOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exams.
     */
    cursor?: examWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * exam create
   */
  export type examCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam
     */
    omit?: examOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examInclude<ExtArgs> | null
    /**
     * The data needed to create a exam.
     */
    data: XOR<examCreateInput, examUncheckedCreateInput>
  }

  /**
   * exam createMany
   */
  export type examCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exams.
     */
    data: examCreateManyInput | examCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exam update
   */
  export type examUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam
     */
    omit?: examOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examInclude<ExtArgs> | null
    /**
     * The data needed to update a exam.
     */
    data: XOR<examUpdateInput, examUncheckedUpdateInput>
    /**
     * Choose, which exam to update.
     */
    where: examWhereUniqueInput
  }

  /**
   * exam updateMany
   */
  export type examUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exams.
     */
    data: XOR<examUpdateManyMutationInput, examUncheckedUpdateManyInput>
    /**
     * Filter which exams to update
     */
    where?: examWhereInput
    /**
     * Limit how many exams to update.
     */
    limit?: number
  }

  /**
   * exam upsert
   */
  export type examUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam
     */
    omit?: examOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examInclude<ExtArgs> | null
    /**
     * The filter to search for the exam to update in case it exists.
     */
    where: examWhereUniqueInput
    /**
     * In case the exam found by the `where` argument doesn't exist, create a new exam with this data.
     */
    create: XOR<examCreateInput, examUncheckedCreateInput>
    /**
     * In case the exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<examUpdateInput, examUncheckedUpdateInput>
  }

  /**
   * exam delete
   */
  export type examDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam
     */
    omit?: examOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examInclude<ExtArgs> | null
    /**
     * Filter which exam to delete.
     */
    where: examWhereUniqueInput
  }

  /**
   * exam deleteMany
   */
  export type examDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exams to delete
     */
    where?: examWhereInput
    /**
     * Limit how many exams to delete.
     */
    limit?: number
  }

  /**
   * exam.examattempt
   */
  export type exam$examattemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
    where?: examattemptWhereInput
    orderBy?: examattemptOrderByWithRelationInput | examattemptOrderByWithRelationInput[]
    cursor?: examattemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamattemptScalarFieldEnum | ExamattemptScalarFieldEnum[]
  }

  /**
   * exam.question
   */
  export type exam$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    where?: questionWhereInput
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    cursor?: questionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * exam without action
   */
  export type examDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam
     */
    omit?: examOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examInclude<ExtArgs> | null
  }


  /**
   * Model examattempt
   */

  export type AggregateExamattempt = {
    _count: ExamattemptCountAggregateOutputType | null
    _avg: ExamattemptAvgAggregateOutputType | null
    _sum: ExamattemptSumAggregateOutputType | null
    _min: ExamattemptMinAggregateOutputType | null
    _max: ExamattemptMaxAggregateOutputType | null
  }

  export type ExamattemptAvgAggregateOutputType = {
    score: number | null
  }

  export type ExamattemptSumAggregateOutputType = {
    score: number | null
  }

  export type ExamattemptMinAggregateOutputType = {
    id: string | null
    score: number | null
    attemptDate: Date | null
    studentId: string | null
    examId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamattemptMaxAggregateOutputType = {
    id: string | null
    score: number | null
    attemptDate: Date | null
    studentId: string | null
    examId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamattemptCountAggregateOutputType = {
    id: number
    score: number
    attemptDate: number
    studentId: number
    examId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExamattemptAvgAggregateInputType = {
    score?: true
  }

  export type ExamattemptSumAggregateInputType = {
    score?: true
  }

  export type ExamattemptMinAggregateInputType = {
    id?: true
    score?: true
    attemptDate?: true
    studentId?: true
    examId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamattemptMaxAggregateInputType = {
    id?: true
    score?: true
    attemptDate?: true
    studentId?: true
    examId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamattemptCountAggregateInputType = {
    id?: true
    score?: true
    attemptDate?: true
    studentId?: true
    examId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExamattemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which examattempt to aggregate.
     */
    where?: examattemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of examattempts to fetch.
     */
    orderBy?: examattemptOrderByWithRelationInput | examattemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: examattemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` examattempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` examattempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned examattempts
    **/
    _count?: true | ExamattemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamattemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamattemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamattemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamattemptMaxAggregateInputType
  }

  export type GetExamattemptAggregateType<T extends ExamattemptAggregateArgs> = {
        [P in keyof T & keyof AggregateExamattempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamattempt[P]>
      : GetScalarType<T[P], AggregateExamattempt[P]>
  }




  export type examattemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: examattemptWhereInput
    orderBy?: examattemptOrderByWithAggregationInput | examattemptOrderByWithAggregationInput[]
    by: ExamattemptScalarFieldEnum[] | ExamattemptScalarFieldEnum
    having?: examattemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamattemptCountAggregateInputType | true
    _avg?: ExamattemptAvgAggregateInputType
    _sum?: ExamattemptSumAggregateInputType
    _min?: ExamattemptMinAggregateInputType
    _max?: ExamattemptMaxAggregateInputType
  }

  export type ExamattemptGroupByOutputType = {
    id: string
    score: number
    attemptDate: Date
    studentId: string
    examId: string
    createdAt: Date
    updatedAt: Date
    _count: ExamattemptCountAggregateOutputType | null
    _avg: ExamattemptAvgAggregateOutputType | null
    _sum: ExamattemptSumAggregateOutputType | null
    _min: ExamattemptMinAggregateOutputType | null
    _max: ExamattemptMaxAggregateOutputType | null
  }

  type GetExamattemptGroupByPayload<T extends examattemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamattemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamattemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamattemptGroupByOutputType[P]>
            : GetScalarType<T[P], ExamattemptGroupByOutputType[P]>
        }
      >
    >


  export type examattemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    attemptDate?: boolean
    studentId?: boolean
    examId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exam?: boolean | examDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examattempt"]>



  export type examattemptSelectScalar = {
    id?: boolean
    score?: boolean
    attemptDate?: boolean
    studentId?: boolean
    examId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type examattemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "attemptDate" | "studentId" | "examId" | "createdAt" | "updatedAt", ExtArgs["result"]["examattempt"]>
  export type examattemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | examDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }

  export type $examattemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "examattempt"
    objects: {
      exam: Prisma.$examPayload<ExtArgs>
      student: Prisma.$studentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      score: number
      attemptDate: Date
      studentId: string
      examId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["examattempt"]>
    composites: {}
  }

  type examattemptGetPayload<S extends boolean | null | undefined | examattemptDefaultArgs> = $Result.GetResult<Prisma.$examattemptPayload, S>

  type examattemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<examattemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamattemptCountAggregateInputType | true
    }

  export interface examattemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['examattempt'], meta: { name: 'examattempt' } }
    /**
     * Find zero or one Examattempt that matches the filter.
     * @param {examattemptFindUniqueArgs} args - Arguments to find a Examattempt
     * @example
     * // Get one Examattempt
     * const examattempt = await prisma.examattempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends examattemptFindUniqueArgs>(args: SelectSubset<T, examattemptFindUniqueArgs<ExtArgs>>): Prisma__examattemptClient<$Result.GetResult<Prisma.$examattemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Examattempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {examattemptFindUniqueOrThrowArgs} args - Arguments to find a Examattempt
     * @example
     * // Get one Examattempt
     * const examattempt = await prisma.examattempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends examattemptFindUniqueOrThrowArgs>(args: SelectSubset<T, examattemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__examattemptClient<$Result.GetResult<Prisma.$examattemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examattempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examattemptFindFirstArgs} args - Arguments to find a Examattempt
     * @example
     * // Get one Examattempt
     * const examattempt = await prisma.examattempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends examattemptFindFirstArgs>(args?: SelectSubset<T, examattemptFindFirstArgs<ExtArgs>>): Prisma__examattemptClient<$Result.GetResult<Prisma.$examattemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Examattempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examattemptFindFirstOrThrowArgs} args - Arguments to find a Examattempt
     * @example
     * // Get one Examattempt
     * const examattempt = await prisma.examattempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends examattemptFindFirstOrThrowArgs>(args?: SelectSubset<T, examattemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__examattemptClient<$Result.GetResult<Prisma.$examattemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Examattempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examattemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Examattempts
     * const examattempts = await prisma.examattempt.findMany()
     * 
     * // Get first 10 Examattempts
     * const examattempts = await prisma.examattempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examattemptWithIdOnly = await prisma.examattempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends examattemptFindManyArgs>(args?: SelectSubset<T, examattemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$examattemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Examattempt.
     * @param {examattemptCreateArgs} args - Arguments to create a Examattempt.
     * @example
     * // Create one Examattempt
     * const Examattempt = await prisma.examattempt.create({
     *   data: {
     *     // ... data to create a Examattempt
     *   }
     * })
     * 
     */
    create<T extends examattemptCreateArgs>(args: SelectSubset<T, examattemptCreateArgs<ExtArgs>>): Prisma__examattemptClient<$Result.GetResult<Prisma.$examattemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Examattempts.
     * @param {examattemptCreateManyArgs} args - Arguments to create many Examattempts.
     * @example
     * // Create many Examattempts
     * const examattempt = await prisma.examattempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends examattemptCreateManyArgs>(args?: SelectSubset<T, examattemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Examattempt.
     * @param {examattemptDeleteArgs} args - Arguments to delete one Examattempt.
     * @example
     * // Delete one Examattempt
     * const Examattempt = await prisma.examattempt.delete({
     *   where: {
     *     // ... filter to delete one Examattempt
     *   }
     * })
     * 
     */
    delete<T extends examattemptDeleteArgs>(args: SelectSubset<T, examattemptDeleteArgs<ExtArgs>>): Prisma__examattemptClient<$Result.GetResult<Prisma.$examattemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Examattempt.
     * @param {examattemptUpdateArgs} args - Arguments to update one Examattempt.
     * @example
     * // Update one Examattempt
     * const examattempt = await prisma.examattempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends examattemptUpdateArgs>(args: SelectSubset<T, examattemptUpdateArgs<ExtArgs>>): Prisma__examattemptClient<$Result.GetResult<Prisma.$examattemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Examattempts.
     * @param {examattemptDeleteManyArgs} args - Arguments to filter Examattempts to delete.
     * @example
     * // Delete a few Examattempts
     * const { count } = await prisma.examattempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends examattemptDeleteManyArgs>(args?: SelectSubset<T, examattemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examattempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examattemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Examattempts
     * const examattempt = await prisma.examattempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends examattemptUpdateManyArgs>(args: SelectSubset<T, examattemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Examattempt.
     * @param {examattemptUpsertArgs} args - Arguments to update or create a Examattempt.
     * @example
     * // Update or create a Examattempt
     * const examattempt = await prisma.examattempt.upsert({
     *   create: {
     *     // ... data to create a Examattempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Examattempt we want to update
     *   }
     * })
     */
    upsert<T extends examattemptUpsertArgs>(args: SelectSubset<T, examattemptUpsertArgs<ExtArgs>>): Prisma__examattemptClient<$Result.GetResult<Prisma.$examattemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Examattempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examattemptCountArgs} args - Arguments to filter Examattempts to count.
     * @example
     * // Count the number of Examattempts
     * const count = await prisma.examattempt.count({
     *   where: {
     *     // ... the filter for the Examattempts we want to count
     *   }
     * })
    **/
    count<T extends examattemptCountArgs>(
      args?: Subset<T, examattemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamattemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Examattempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamattemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamattemptAggregateArgs>(args: Subset<T, ExamattemptAggregateArgs>): Prisma.PrismaPromise<GetExamattemptAggregateType<T>>

    /**
     * Group by Examattempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examattemptGroupByArgs} args - Group by arguments.
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
      T extends examattemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: examattemptGroupByArgs['orderBy'] }
        : { orderBy?: examattemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, examattemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamattemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the examattempt model
   */
  readonly fields: examattemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for examattempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__examattemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends examDefaultArgs<ExtArgs> = {}>(args?: Subset<T, examDefaultArgs<ExtArgs>>): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the examattempt model
   */
  interface examattemptFieldRefs {
    readonly id: FieldRef<"examattempt", 'String'>
    readonly score: FieldRef<"examattempt", 'Float'>
    readonly attemptDate: FieldRef<"examattempt", 'DateTime'>
    readonly studentId: FieldRef<"examattempt", 'String'>
    readonly examId: FieldRef<"examattempt", 'String'>
    readonly createdAt: FieldRef<"examattempt", 'DateTime'>
    readonly updatedAt: FieldRef<"examattempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * examattempt findUnique
   */
  export type examattemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
    /**
     * Filter, which examattempt to fetch.
     */
    where: examattemptWhereUniqueInput
  }

  /**
   * examattempt findUniqueOrThrow
   */
  export type examattemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
    /**
     * Filter, which examattempt to fetch.
     */
    where: examattemptWhereUniqueInput
  }

  /**
   * examattempt findFirst
   */
  export type examattemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
    /**
     * Filter, which examattempt to fetch.
     */
    where?: examattemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of examattempts to fetch.
     */
    orderBy?: examattemptOrderByWithRelationInput | examattemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for examattempts.
     */
    cursor?: examattemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` examattempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` examattempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of examattempts.
     */
    distinct?: ExamattemptScalarFieldEnum | ExamattemptScalarFieldEnum[]
  }

  /**
   * examattempt findFirstOrThrow
   */
  export type examattemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
    /**
     * Filter, which examattempt to fetch.
     */
    where?: examattemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of examattempts to fetch.
     */
    orderBy?: examattemptOrderByWithRelationInput | examattemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for examattempts.
     */
    cursor?: examattemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` examattempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` examattempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of examattempts.
     */
    distinct?: ExamattemptScalarFieldEnum | ExamattemptScalarFieldEnum[]
  }

  /**
   * examattempt findMany
   */
  export type examattemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
    /**
     * Filter, which examattempts to fetch.
     */
    where?: examattemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of examattempts to fetch.
     */
    orderBy?: examattemptOrderByWithRelationInput | examattemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing examattempts.
     */
    cursor?: examattemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` examattempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` examattempts.
     */
    skip?: number
    distinct?: ExamattemptScalarFieldEnum | ExamattemptScalarFieldEnum[]
  }

  /**
   * examattempt create
   */
  export type examattemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
    /**
     * The data needed to create a examattempt.
     */
    data: XOR<examattemptCreateInput, examattemptUncheckedCreateInput>
  }

  /**
   * examattempt createMany
   */
  export type examattemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many examattempts.
     */
    data: examattemptCreateManyInput | examattemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * examattempt update
   */
  export type examattemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
    /**
     * The data needed to update a examattempt.
     */
    data: XOR<examattemptUpdateInput, examattemptUncheckedUpdateInput>
    /**
     * Choose, which examattempt to update.
     */
    where: examattemptWhereUniqueInput
  }

  /**
   * examattempt updateMany
   */
  export type examattemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update examattempts.
     */
    data: XOR<examattemptUpdateManyMutationInput, examattemptUncheckedUpdateManyInput>
    /**
     * Filter which examattempts to update
     */
    where?: examattemptWhereInput
    /**
     * Limit how many examattempts to update.
     */
    limit?: number
  }

  /**
   * examattempt upsert
   */
  export type examattemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
    /**
     * The filter to search for the examattempt to update in case it exists.
     */
    where: examattemptWhereUniqueInput
    /**
     * In case the examattempt found by the `where` argument doesn't exist, create a new examattempt with this data.
     */
    create: XOR<examattemptCreateInput, examattemptUncheckedCreateInput>
    /**
     * In case the examattempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<examattemptUpdateInput, examattemptUncheckedUpdateInput>
  }

  /**
   * examattempt delete
   */
  export type examattemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
    /**
     * Filter which examattempt to delete.
     */
    where: examattemptWhereUniqueInput
  }

  /**
   * examattempt deleteMany
   */
  export type examattemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which examattempts to delete
     */
    where?: examattemptWhereInput
    /**
     * Limit how many examattempts to delete.
     */
    limit?: number
  }

  /**
   * examattempt without action
   */
  export type examattemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
  }


  /**
   * Model module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    title: number
    content: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which module to aggregate.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type moduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleWhereInput
    orderBy?: moduleOrderByWithAggregationInput | moduleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: moduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    title: string
    content: string
    courseId: string
    createdAt: Date
    updatedAt: Date
    _count: ModuleCountAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends moduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type moduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exam?: boolean | module$examArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    moduleprogress?: boolean | module$moduleprogressArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>



  export type moduleSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type moduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["module"]>
  export type moduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | module$examArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    moduleprogress?: boolean | module$moduleprogressArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $modulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "module"
    objects: {
      exam: Prisma.$examPayload<ExtArgs>[]
      course: Prisma.$coursePayload<ExtArgs>
      moduleprogress: Prisma.$moduleprogressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      courseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type moduleGetPayload<S extends boolean | null | undefined | moduleDefaultArgs> = $Result.GetResult<Prisma.$modulePayload, S>

  type moduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<moduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface moduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['module'], meta: { name: 'module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {moduleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends moduleFindUniqueArgs>(args: SelectSubset<T, moduleFindUniqueArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {moduleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends moduleFindUniqueOrThrowArgs>(args: SelectSubset<T, moduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends moduleFindFirstArgs>(args?: SelectSubset<T, moduleFindFirstArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends moduleFindFirstOrThrowArgs>(args?: SelectSubset<T, moduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends moduleFindManyArgs>(args?: SelectSubset<T, moduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {moduleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends moduleCreateArgs>(args: SelectSubset<T, moduleCreateArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {moduleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends moduleCreateManyArgs>(args?: SelectSubset<T, moduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Module.
     * @param {moduleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends moduleDeleteArgs>(args: SelectSubset<T, moduleDeleteArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {moduleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends moduleUpdateArgs>(args: SelectSubset<T, moduleUpdateArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {moduleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends moduleDeleteManyArgs>(args?: SelectSubset<T, moduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends moduleUpdateManyArgs>(args: SelectSubset<T, moduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Module.
     * @param {moduleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends moduleUpsertArgs>(args: SelectSubset<T, moduleUpsertArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends moduleCountArgs>(
      args?: Subset<T, moduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleGroupByArgs} args - Group by arguments.
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
      T extends moduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moduleGroupByArgs['orderBy'] }
        : { orderBy?: moduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, moduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the module model
   */
  readonly fields: moduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends module$examArgs<ExtArgs> = {}>(args?: Subset<T, module$examArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    moduleprogress<T extends module$moduleprogressArgs<ExtArgs> = {}>(args?: Subset<T, module$moduleprogressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moduleprogressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the module model
   */
  interface moduleFieldRefs {
    readonly id: FieldRef<"module", 'String'>
    readonly title: FieldRef<"module", 'String'>
    readonly content: FieldRef<"module", 'String'>
    readonly courseId: FieldRef<"module", 'String'>
    readonly createdAt: FieldRef<"module", 'DateTime'>
    readonly updatedAt: FieldRef<"module", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * module findUnique
   */
  export type moduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module findUniqueOrThrow
   */
  export type moduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module findFirst
   */
  export type moduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module findFirstOrThrow
   */
  export type moduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module findMany
   */
  export type moduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module create
   */
  export type moduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The data needed to create a module.
     */
    data: XOR<moduleCreateInput, moduleUncheckedCreateInput>
  }

  /**
   * module createMany
   */
  export type moduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modules.
     */
    data: moduleCreateManyInput | moduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * module update
   */
  export type moduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The data needed to update a module.
     */
    data: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>
    /**
     * Choose, which module to update.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module updateMany
   */
  export type moduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modules.
     */
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyInput>
    /**
     * Filter which modules to update
     */
    where?: moduleWhereInput
    /**
     * Limit how many modules to update.
     */
    limit?: number
  }

  /**
   * module upsert
   */
  export type moduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The filter to search for the module to update in case it exists.
     */
    where: moduleWhereUniqueInput
    /**
     * In case the module found by the `where` argument doesn't exist, create a new module with this data.
     */
    create: XOR<moduleCreateInput, moduleUncheckedCreateInput>
    /**
     * In case the module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>
  }

  /**
   * module delete
   */
  export type moduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter which module to delete.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module deleteMany
   */
  export type moduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modules to delete
     */
    where?: moduleWhereInput
    /**
     * Limit how many modules to delete.
     */
    limit?: number
  }

  /**
   * module.exam
   */
  export type module$examArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam
     */
    omit?: examOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examInclude<ExtArgs> | null
    where?: examWhereInput
    orderBy?: examOrderByWithRelationInput | examOrderByWithRelationInput[]
    cursor?: examWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * module.moduleprogress
   */
  export type module$moduleprogressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
    where?: moduleprogressWhereInput
    orderBy?: moduleprogressOrderByWithRelationInput | moduleprogressOrderByWithRelationInput[]
    cursor?: moduleprogressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleprogressScalarFieldEnum | ModuleprogressScalarFieldEnum[]
  }

  /**
   * module without action
   */
  export type moduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
  }


  /**
   * Model moduleprogress
   */

  export type AggregateModuleprogress = {
    _count: ModuleprogressCountAggregateOutputType | null
    _avg: ModuleprogressAvgAggregateOutputType | null
    _sum: ModuleprogressSumAggregateOutputType | null
    _min: ModuleprogressMinAggregateOutputType | null
    _max: ModuleprogressMaxAggregateOutputType | null
  }

  export type ModuleprogressAvgAggregateOutputType = {
    progress: number | null
  }

  export type ModuleprogressSumAggregateOutputType = {
    progress: number | null
  }

  export type ModuleprogressMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    moduleId: string | null
    progress: number | null
    lastUpdated: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleprogressMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    moduleId: string | null
    progress: number | null
    lastUpdated: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleprogressCountAggregateOutputType = {
    id: number
    studentId: number
    moduleId: number
    progress: number
    lastUpdated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleprogressAvgAggregateInputType = {
    progress?: true
  }

  export type ModuleprogressSumAggregateInputType = {
    progress?: true
  }

  export type ModuleprogressMinAggregateInputType = {
    id?: true
    studentId?: true
    moduleId?: true
    progress?: true
    lastUpdated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleprogressMaxAggregateInputType = {
    id?: true
    studentId?: true
    moduleId?: true
    progress?: true
    lastUpdated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleprogressCountAggregateInputType = {
    id?: true
    studentId?: true
    moduleId?: true
    progress?: true
    lastUpdated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleprogressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which moduleprogress to aggregate.
     */
    where?: moduleprogressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of moduleprogresses to fetch.
     */
    orderBy?: moduleprogressOrderByWithRelationInput | moduleprogressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moduleprogressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` moduleprogresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` moduleprogresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned moduleprogresses
    **/
    _count?: true | ModuleprogressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleprogressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleprogressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleprogressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleprogressMaxAggregateInputType
  }

  export type GetModuleprogressAggregateType<T extends ModuleprogressAggregateArgs> = {
        [P in keyof T & keyof AggregateModuleprogress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModuleprogress[P]>
      : GetScalarType<T[P], AggregateModuleprogress[P]>
  }




  export type moduleprogressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleprogressWhereInput
    orderBy?: moduleprogressOrderByWithAggregationInput | moduleprogressOrderByWithAggregationInput[]
    by: ModuleprogressScalarFieldEnum[] | ModuleprogressScalarFieldEnum
    having?: moduleprogressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleprogressCountAggregateInputType | true
    _avg?: ModuleprogressAvgAggregateInputType
    _sum?: ModuleprogressSumAggregateInputType
    _min?: ModuleprogressMinAggregateInputType
    _max?: ModuleprogressMaxAggregateInputType
  }

  export type ModuleprogressGroupByOutputType = {
    id: string
    studentId: string
    moduleId: string
    progress: number
    lastUpdated: Date
    createdAt: Date
    updatedAt: Date
    _count: ModuleprogressCountAggregateOutputType | null
    _avg: ModuleprogressAvgAggregateOutputType | null
    _sum: ModuleprogressSumAggregateOutputType | null
    _min: ModuleprogressMinAggregateOutputType | null
    _max: ModuleprogressMaxAggregateOutputType | null
  }

  type GetModuleprogressGroupByPayload<T extends moduleprogressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleprogressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleprogressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleprogressGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleprogressGroupByOutputType[P]>
        }
      >
    >


  export type moduleprogressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    moduleId?: boolean
    progress?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | moduleDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moduleprogress"]>



  export type moduleprogressSelectScalar = {
    id?: boolean
    studentId?: boolean
    moduleId?: boolean
    progress?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type moduleprogressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "moduleId" | "progress" | "lastUpdated" | "createdAt" | "updatedAt", ExtArgs["result"]["moduleprogress"]>
  export type moduleprogressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | moduleDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }

  export type $moduleprogressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "moduleprogress"
    objects: {
      module: Prisma.$modulePayload<ExtArgs>
      student: Prisma.$studentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      moduleId: string
      progress: number
      lastUpdated: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["moduleprogress"]>
    composites: {}
  }

  type moduleprogressGetPayload<S extends boolean | null | undefined | moduleprogressDefaultArgs> = $Result.GetResult<Prisma.$moduleprogressPayload, S>

  type moduleprogressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<moduleprogressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleprogressCountAggregateInputType | true
    }

  export interface moduleprogressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['moduleprogress'], meta: { name: 'moduleprogress' } }
    /**
     * Find zero or one Moduleprogress that matches the filter.
     * @param {moduleprogressFindUniqueArgs} args - Arguments to find a Moduleprogress
     * @example
     * // Get one Moduleprogress
     * const moduleprogress = await prisma.moduleprogress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends moduleprogressFindUniqueArgs>(args: SelectSubset<T, moduleprogressFindUniqueArgs<ExtArgs>>): Prisma__moduleprogressClient<$Result.GetResult<Prisma.$moduleprogressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Moduleprogress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {moduleprogressFindUniqueOrThrowArgs} args - Arguments to find a Moduleprogress
     * @example
     * // Get one Moduleprogress
     * const moduleprogress = await prisma.moduleprogress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends moduleprogressFindUniqueOrThrowArgs>(args: SelectSubset<T, moduleprogressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__moduleprogressClient<$Result.GetResult<Prisma.$moduleprogressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moduleprogress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleprogressFindFirstArgs} args - Arguments to find a Moduleprogress
     * @example
     * // Get one Moduleprogress
     * const moduleprogress = await prisma.moduleprogress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends moduleprogressFindFirstArgs>(args?: SelectSubset<T, moduleprogressFindFirstArgs<ExtArgs>>): Prisma__moduleprogressClient<$Result.GetResult<Prisma.$moduleprogressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Moduleprogress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleprogressFindFirstOrThrowArgs} args - Arguments to find a Moduleprogress
     * @example
     * // Get one Moduleprogress
     * const moduleprogress = await prisma.moduleprogress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends moduleprogressFindFirstOrThrowArgs>(args?: SelectSubset<T, moduleprogressFindFirstOrThrowArgs<ExtArgs>>): Prisma__moduleprogressClient<$Result.GetResult<Prisma.$moduleprogressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moduleprogresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleprogressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moduleprogresses
     * const moduleprogresses = await prisma.moduleprogress.findMany()
     * 
     * // Get first 10 Moduleprogresses
     * const moduleprogresses = await prisma.moduleprogress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleprogressWithIdOnly = await prisma.moduleprogress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends moduleprogressFindManyArgs>(args?: SelectSubset<T, moduleprogressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moduleprogressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Moduleprogress.
     * @param {moduleprogressCreateArgs} args - Arguments to create a Moduleprogress.
     * @example
     * // Create one Moduleprogress
     * const Moduleprogress = await prisma.moduleprogress.create({
     *   data: {
     *     // ... data to create a Moduleprogress
     *   }
     * })
     * 
     */
    create<T extends moduleprogressCreateArgs>(args: SelectSubset<T, moduleprogressCreateArgs<ExtArgs>>): Prisma__moduleprogressClient<$Result.GetResult<Prisma.$moduleprogressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moduleprogresses.
     * @param {moduleprogressCreateManyArgs} args - Arguments to create many Moduleprogresses.
     * @example
     * // Create many Moduleprogresses
     * const moduleprogress = await prisma.moduleprogress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends moduleprogressCreateManyArgs>(args?: SelectSubset<T, moduleprogressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Moduleprogress.
     * @param {moduleprogressDeleteArgs} args - Arguments to delete one Moduleprogress.
     * @example
     * // Delete one Moduleprogress
     * const Moduleprogress = await prisma.moduleprogress.delete({
     *   where: {
     *     // ... filter to delete one Moduleprogress
     *   }
     * })
     * 
     */
    delete<T extends moduleprogressDeleteArgs>(args: SelectSubset<T, moduleprogressDeleteArgs<ExtArgs>>): Prisma__moduleprogressClient<$Result.GetResult<Prisma.$moduleprogressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Moduleprogress.
     * @param {moduleprogressUpdateArgs} args - Arguments to update one Moduleprogress.
     * @example
     * // Update one Moduleprogress
     * const moduleprogress = await prisma.moduleprogress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends moduleprogressUpdateArgs>(args: SelectSubset<T, moduleprogressUpdateArgs<ExtArgs>>): Prisma__moduleprogressClient<$Result.GetResult<Prisma.$moduleprogressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moduleprogresses.
     * @param {moduleprogressDeleteManyArgs} args - Arguments to filter Moduleprogresses to delete.
     * @example
     * // Delete a few Moduleprogresses
     * const { count } = await prisma.moduleprogress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends moduleprogressDeleteManyArgs>(args?: SelectSubset<T, moduleprogressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moduleprogresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleprogressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moduleprogresses
     * const moduleprogress = await prisma.moduleprogress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends moduleprogressUpdateManyArgs>(args: SelectSubset<T, moduleprogressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Moduleprogress.
     * @param {moduleprogressUpsertArgs} args - Arguments to update or create a Moduleprogress.
     * @example
     * // Update or create a Moduleprogress
     * const moduleprogress = await prisma.moduleprogress.upsert({
     *   create: {
     *     // ... data to create a Moduleprogress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Moduleprogress we want to update
     *   }
     * })
     */
    upsert<T extends moduleprogressUpsertArgs>(args: SelectSubset<T, moduleprogressUpsertArgs<ExtArgs>>): Prisma__moduleprogressClient<$Result.GetResult<Prisma.$moduleprogressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moduleprogresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleprogressCountArgs} args - Arguments to filter Moduleprogresses to count.
     * @example
     * // Count the number of Moduleprogresses
     * const count = await prisma.moduleprogress.count({
     *   where: {
     *     // ... the filter for the Moduleprogresses we want to count
     *   }
     * })
    **/
    count<T extends moduleprogressCountArgs>(
      args?: Subset<T, moduleprogressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleprogressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Moduleprogress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleprogressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleprogressAggregateArgs>(args: Subset<T, ModuleprogressAggregateArgs>): Prisma.PrismaPromise<GetModuleprogressAggregateType<T>>

    /**
     * Group by Moduleprogress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleprogressGroupByArgs} args - Group by arguments.
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
      T extends moduleprogressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moduleprogressGroupByArgs['orderBy'] }
        : { orderBy?: moduleprogressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, moduleprogressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleprogressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the moduleprogress model
   */
  readonly fields: moduleprogressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for moduleprogress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moduleprogressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends moduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduleDefaultArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the moduleprogress model
   */
  interface moduleprogressFieldRefs {
    readonly id: FieldRef<"moduleprogress", 'String'>
    readonly studentId: FieldRef<"moduleprogress", 'String'>
    readonly moduleId: FieldRef<"moduleprogress", 'String'>
    readonly progress: FieldRef<"moduleprogress", 'Float'>
    readonly lastUpdated: FieldRef<"moduleprogress", 'DateTime'>
    readonly createdAt: FieldRef<"moduleprogress", 'DateTime'>
    readonly updatedAt: FieldRef<"moduleprogress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * moduleprogress findUnique
   */
  export type moduleprogressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
    /**
     * Filter, which moduleprogress to fetch.
     */
    where: moduleprogressWhereUniqueInput
  }

  /**
   * moduleprogress findUniqueOrThrow
   */
  export type moduleprogressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
    /**
     * Filter, which moduleprogress to fetch.
     */
    where: moduleprogressWhereUniqueInput
  }

  /**
   * moduleprogress findFirst
   */
  export type moduleprogressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
    /**
     * Filter, which moduleprogress to fetch.
     */
    where?: moduleprogressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of moduleprogresses to fetch.
     */
    orderBy?: moduleprogressOrderByWithRelationInput | moduleprogressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for moduleprogresses.
     */
    cursor?: moduleprogressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` moduleprogresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` moduleprogresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of moduleprogresses.
     */
    distinct?: ModuleprogressScalarFieldEnum | ModuleprogressScalarFieldEnum[]
  }

  /**
   * moduleprogress findFirstOrThrow
   */
  export type moduleprogressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
    /**
     * Filter, which moduleprogress to fetch.
     */
    where?: moduleprogressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of moduleprogresses to fetch.
     */
    orderBy?: moduleprogressOrderByWithRelationInput | moduleprogressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for moduleprogresses.
     */
    cursor?: moduleprogressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` moduleprogresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` moduleprogresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of moduleprogresses.
     */
    distinct?: ModuleprogressScalarFieldEnum | ModuleprogressScalarFieldEnum[]
  }

  /**
   * moduleprogress findMany
   */
  export type moduleprogressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
    /**
     * Filter, which moduleprogresses to fetch.
     */
    where?: moduleprogressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of moduleprogresses to fetch.
     */
    orderBy?: moduleprogressOrderByWithRelationInput | moduleprogressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing moduleprogresses.
     */
    cursor?: moduleprogressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` moduleprogresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` moduleprogresses.
     */
    skip?: number
    distinct?: ModuleprogressScalarFieldEnum | ModuleprogressScalarFieldEnum[]
  }

  /**
   * moduleprogress create
   */
  export type moduleprogressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
    /**
     * The data needed to create a moduleprogress.
     */
    data: XOR<moduleprogressCreateInput, moduleprogressUncheckedCreateInput>
  }

  /**
   * moduleprogress createMany
   */
  export type moduleprogressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many moduleprogresses.
     */
    data: moduleprogressCreateManyInput | moduleprogressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * moduleprogress update
   */
  export type moduleprogressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
    /**
     * The data needed to update a moduleprogress.
     */
    data: XOR<moduleprogressUpdateInput, moduleprogressUncheckedUpdateInput>
    /**
     * Choose, which moduleprogress to update.
     */
    where: moduleprogressWhereUniqueInput
  }

  /**
   * moduleprogress updateMany
   */
  export type moduleprogressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update moduleprogresses.
     */
    data: XOR<moduleprogressUpdateManyMutationInput, moduleprogressUncheckedUpdateManyInput>
    /**
     * Filter which moduleprogresses to update
     */
    where?: moduleprogressWhereInput
    /**
     * Limit how many moduleprogresses to update.
     */
    limit?: number
  }

  /**
   * moduleprogress upsert
   */
  export type moduleprogressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
    /**
     * The filter to search for the moduleprogress to update in case it exists.
     */
    where: moduleprogressWhereUniqueInput
    /**
     * In case the moduleprogress found by the `where` argument doesn't exist, create a new moduleprogress with this data.
     */
    create: XOR<moduleprogressCreateInput, moduleprogressUncheckedCreateInput>
    /**
     * In case the moduleprogress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moduleprogressUpdateInput, moduleprogressUncheckedUpdateInput>
  }

  /**
   * moduleprogress delete
   */
  export type moduleprogressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
    /**
     * Filter which moduleprogress to delete.
     */
    where: moduleprogressWhereUniqueInput
  }

  /**
   * moduleprogress deleteMany
   */
  export type moduleprogressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which moduleprogresses to delete
     */
    where?: moduleprogressWhereInput
    /**
     * Limit how many moduleprogresses to delete.
     */
    limit?: number
  }

  /**
   * moduleprogress without action
   */
  export type moduleprogressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
  }


  /**
   * Model question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    questionNo: string | null
    content: string | null
    examId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    questionNo: string | null
    content: string | null
    examId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    questionNo: number
    content: number
    examId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    questionNo?: true
    content?: true
    examId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    questionNo?: true
    content?: true
    examId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    questionNo?: true
    content?: true
    examId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which question to aggregate.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type questionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionWhereInput
    orderBy?: questionOrderByWithAggregationInput | questionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: questionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    questionNo: string
    content: string
    examId: string
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends questionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type questionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionNo?: boolean
    content?: boolean
    examId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exam?: boolean | examDefaultArgs<ExtArgs>
    questionoption?: boolean | question$questionoptionArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type questionSelectScalar = {
    id?: boolean
    questionNo?: boolean
    content?: boolean
    examId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type questionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionNo" | "content" | "examId" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type questionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | examDefaultArgs<ExtArgs>
    questionoption?: boolean | question$questionoptionArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $questionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "question"
    objects: {
      exam: Prisma.$examPayload<ExtArgs>
      questionoption: Prisma.$questionoptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionNo: string
      content: string
      examId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type questionGetPayload<S extends boolean | null | undefined | questionDefaultArgs> = $Result.GetResult<Prisma.$questionPayload, S>

  type questionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface questionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['question'], meta: { name: 'question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {questionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionFindUniqueArgs>(args: SelectSubset<T, questionFindUniqueArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionFindUniqueOrThrowArgs>(args: SelectSubset<T, questionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionFindFirstArgs>(args?: SelectSubset<T, questionFindFirstArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionFindFirstOrThrowArgs>(args?: SelectSubset<T, questionFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questionFindManyArgs>(args?: SelectSubset<T, questionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {questionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends questionCreateArgs>(args: SelectSubset<T, questionCreateArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {questionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionCreateManyArgs>(args?: SelectSubset<T, questionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {questionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends questionDeleteArgs>(args: SelectSubset<T, questionDeleteArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {questionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionUpdateArgs>(args: SelectSubset<T, questionUpdateArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {questionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionDeleteManyArgs>(args?: SelectSubset<T, questionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionUpdateManyArgs>(args: SelectSubset<T, questionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {questionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends questionUpsertArgs>(args: SelectSubset<T, questionUpsertArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends questionCountArgs>(
      args?: Subset<T, questionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionGroupByArgs} args - Group by arguments.
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
      T extends questionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionGroupByArgs['orderBy'] }
        : { orderBy?: questionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, questionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the question model
   */
  readonly fields: questionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends examDefaultArgs<ExtArgs> = {}>(args?: Subset<T, examDefaultArgs<ExtArgs>>): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questionoption<T extends question$questionoptionArgs<ExtArgs> = {}>(args?: Subset<T, question$questionoptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the question model
   */
  interface questionFieldRefs {
    readonly id: FieldRef<"question", 'String'>
    readonly questionNo: FieldRef<"question", 'String'>
    readonly content: FieldRef<"question", 'String'>
    readonly examId: FieldRef<"question", 'String'>
    readonly createdAt: FieldRef<"question", 'DateTime'>
    readonly updatedAt: FieldRef<"question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * question findUnique
   */
  export type questionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question findUniqueOrThrow
   */
  export type questionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question findFirst
   */
  export type questionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * question findFirstOrThrow
   */
  export type questionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * question findMany
   */
  export type questionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questions.
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * question create
   */
  export type questionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * The data needed to create a question.
     */
    data: XOR<questionCreateInput, questionUncheckedCreateInput>
  }

  /**
   * question createMany
   */
  export type questionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questions.
     */
    data: questionCreateManyInput | questionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * question update
   */
  export type questionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * The data needed to update a question.
     */
    data: XOR<questionUpdateInput, questionUncheckedUpdateInput>
    /**
     * Choose, which question to update.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question updateMany
   */
  export type questionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questions.
     */
    data: XOR<questionUpdateManyMutationInput, questionUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
  }

  /**
   * question upsert
   */
  export type questionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * The filter to search for the question to update in case it exists.
     */
    where: questionWhereUniqueInput
    /**
     * In case the question found by the `where` argument doesn't exist, create a new question with this data.
     */
    create: XOR<questionCreateInput, questionUncheckedCreateInput>
    /**
     * In case the question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionUpdateInput, questionUncheckedUpdateInput>
  }

  /**
   * question delete
   */
  export type questionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter which question to delete.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question deleteMany
   */
  export type questionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to delete
     */
    where?: questionWhereInput
    /**
     * Limit how many questions to delete.
     */
    limit?: number
  }

  /**
   * question.questionoption
   */
  export type question$questionoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionoption
     */
    select?: questionoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionoption
     */
    omit?: questionoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionoptionInclude<ExtArgs> | null
    where?: questionoptionWhereInput
    orderBy?: questionoptionOrderByWithRelationInput | questionoptionOrderByWithRelationInput[]
    cursor?: questionoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionoptionScalarFieldEnum | QuestionoptionScalarFieldEnum[]
  }

  /**
   * question without action
   */
  export type questionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
  }


  /**
   * Model questionoption
   */

  export type AggregateQuestionoption = {
    _count: QuestionoptionCountAggregateOutputType | null
    _min: QuestionoptionMinAggregateOutputType | null
    _max: QuestionoptionMaxAggregateOutputType | null
  }

  export type QuestionoptionMinAggregateOutputType = {
    id: string | null
    option: string | null
    content: string | null
    questionId: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionoptionMaxAggregateOutputType = {
    id: string | null
    option: string | null
    content: string | null
    questionId: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionoptionCountAggregateOutputType = {
    id: number
    option: number
    content: number
    questionId: number
    isCorrect: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionoptionMinAggregateInputType = {
    id?: true
    option?: true
    content?: true
    questionId?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionoptionMaxAggregateInputType = {
    id?: true
    option?: true
    content?: true
    questionId?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionoptionCountAggregateInputType = {
    id?: true
    option?: true
    content?: true
    questionId?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionoptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questionoption to aggregate.
     */
    where?: questionoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questionoptions to fetch.
     */
    orderBy?: questionoptionOrderByWithRelationInput | questionoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questionoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questionoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questionoptions
    **/
    _count?: true | QuestionoptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionoptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionoptionMaxAggregateInputType
  }

  export type GetQuestionoptionAggregateType<T extends QuestionoptionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionoption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionoption[P]>
      : GetScalarType<T[P], AggregateQuestionoption[P]>
  }




  export type questionoptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionoptionWhereInput
    orderBy?: questionoptionOrderByWithAggregationInput | questionoptionOrderByWithAggregationInput[]
    by: QuestionoptionScalarFieldEnum[] | QuestionoptionScalarFieldEnum
    having?: questionoptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionoptionCountAggregateInputType | true
    _min?: QuestionoptionMinAggregateInputType
    _max?: QuestionoptionMaxAggregateInputType
  }

  export type QuestionoptionGroupByOutputType = {
    id: string
    option: string
    content: string
    questionId: string
    isCorrect: boolean
    createdAt: Date
    updatedAt: Date
    _count: QuestionoptionCountAggregateOutputType | null
    _min: QuestionoptionMinAggregateOutputType | null
    _max: QuestionoptionMaxAggregateOutputType | null
  }

  type GetQuestionoptionGroupByPayload<T extends questionoptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionoptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionoptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionoptionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionoptionGroupByOutputType[P]>
        }
      >
    >


  export type questionoptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    option?: boolean
    content?: boolean
    questionId?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | questionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionoption"]>



  export type questionoptionSelectScalar = {
    id?: boolean
    option?: boolean
    content?: boolean
    questionId?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type questionoptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "option" | "content" | "questionId" | "isCorrect" | "createdAt" | "updatedAt", ExtArgs["result"]["questionoption"]>
  export type questionoptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | questionDefaultArgs<ExtArgs>
  }

  export type $questionoptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "questionoption"
    objects: {
      question: Prisma.$questionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      option: string
      content: string
      questionId: string
      isCorrect: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["questionoption"]>
    composites: {}
  }

  type questionoptionGetPayload<S extends boolean | null | undefined | questionoptionDefaultArgs> = $Result.GetResult<Prisma.$questionoptionPayload, S>

  type questionoptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionoptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionoptionCountAggregateInputType | true
    }

  export interface questionoptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['questionoption'], meta: { name: 'questionoption' } }
    /**
     * Find zero or one Questionoption that matches the filter.
     * @param {questionoptionFindUniqueArgs} args - Arguments to find a Questionoption
     * @example
     * // Get one Questionoption
     * const questionoption = await prisma.questionoption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionoptionFindUniqueArgs>(args: SelectSubset<T, questionoptionFindUniqueArgs<ExtArgs>>): Prisma__questionoptionClient<$Result.GetResult<Prisma.$questionoptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questionoption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionoptionFindUniqueOrThrowArgs} args - Arguments to find a Questionoption
     * @example
     * // Get one Questionoption
     * const questionoption = await prisma.questionoption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionoptionFindUniqueOrThrowArgs>(args: SelectSubset<T, questionoptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionoptionClient<$Result.GetResult<Prisma.$questionoptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questionoption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionoptionFindFirstArgs} args - Arguments to find a Questionoption
     * @example
     * // Get one Questionoption
     * const questionoption = await prisma.questionoption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionoptionFindFirstArgs>(args?: SelectSubset<T, questionoptionFindFirstArgs<ExtArgs>>): Prisma__questionoptionClient<$Result.GetResult<Prisma.$questionoptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questionoption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionoptionFindFirstOrThrowArgs} args - Arguments to find a Questionoption
     * @example
     * // Get one Questionoption
     * const questionoption = await prisma.questionoption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionoptionFindFirstOrThrowArgs>(args?: SelectSubset<T, questionoptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionoptionClient<$Result.GetResult<Prisma.$questionoptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questionoptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionoptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questionoptions
     * const questionoptions = await prisma.questionoption.findMany()
     * 
     * // Get first 10 Questionoptions
     * const questionoptions = await prisma.questionoption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionoptionWithIdOnly = await prisma.questionoption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questionoptionFindManyArgs>(args?: SelectSubset<T, questionoptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questionoption.
     * @param {questionoptionCreateArgs} args - Arguments to create a Questionoption.
     * @example
     * // Create one Questionoption
     * const Questionoption = await prisma.questionoption.create({
     *   data: {
     *     // ... data to create a Questionoption
     *   }
     * })
     * 
     */
    create<T extends questionoptionCreateArgs>(args: SelectSubset<T, questionoptionCreateArgs<ExtArgs>>): Prisma__questionoptionClient<$Result.GetResult<Prisma.$questionoptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questionoptions.
     * @param {questionoptionCreateManyArgs} args - Arguments to create many Questionoptions.
     * @example
     * // Create many Questionoptions
     * const questionoption = await prisma.questionoption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionoptionCreateManyArgs>(args?: SelectSubset<T, questionoptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Questionoption.
     * @param {questionoptionDeleteArgs} args - Arguments to delete one Questionoption.
     * @example
     * // Delete one Questionoption
     * const Questionoption = await prisma.questionoption.delete({
     *   where: {
     *     // ... filter to delete one Questionoption
     *   }
     * })
     * 
     */
    delete<T extends questionoptionDeleteArgs>(args: SelectSubset<T, questionoptionDeleteArgs<ExtArgs>>): Prisma__questionoptionClient<$Result.GetResult<Prisma.$questionoptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questionoption.
     * @param {questionoptionUpdateArgs} args - Arguments to update one Questionoption.
     * @example
     * // Update one Questionoption
     * const questionoption = await prisma.questionoption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionoptionUpdateArgs>(args: SelectSubset<T, questionoptionUpdateArgs<ExtArgs>>): Prisma__questionoptionClient<$Result.GetResult<Prisma.$questionoptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questionoptions.
     * @param {questionoptionDeleteManyArgs} args - Arguments to filter Questionoptions to delete.
     * @example
     * // Delete a few Questionoptions
     * const { count } = await prisma.questionoption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionoptionDeleteManyArgs>(args?: SelectSubset<T, questionoptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questionoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionoptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questionoptions
     * const questionoption = await prisma.questionoption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionoptionUpdateManyArgs>(args: SelectSubset<T, questionoptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questionoption.
     * @param {questionoptionUpsertArgs} args - Arguments to update or create a Questionoption.
     * @example
     * // Update or create a Questionoption
     * const questionoption = await prisma.questionoption.upsert({
     *   create: {
     *     // ... data to create a Questionoption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questionoption we want to update
     *   }
     * })
     */
    upsert<T extends questionoptionUpsertArgs>(args: SelectSubset<T, questionoptionUpsertArgs<ExtArgs>>): Prisma__questionoptionClient<$Result.GetResult<Prisma.$questionoptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questionoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionoptionCountArgs} args - Arguments to filter Questionoptions to count.
     * @example
     * // Count the number of Questionoptions
     * const count = await prisma.questionoption.count({
     *   where: {
     *     // ... the filter for the Questionoptions we want to count
     *   }
     * })
    **/
    count<T extends questionoptionCountArgs>(
      args?: Subset<T, questionoptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionoptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questionoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionoptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionoptionAggregateArgs>(args: Subset<T, QuestionoptionAggregateArgs>): Prisma.PrismaPromise<GetQuestionoptionAggregateType<T>>

    /**
     * Group by Questionoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionoptionGroupByArgs} args - Group by arguments.
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
      T extends questionoptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionoptionGroupByArgs['orderBy'] }
        : { orderBy?: questionoptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, questionoptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionoptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the questionoption model
   */
  readonly fields: questionoptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for questionoption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionoptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends questionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionDefaultArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the questionoption model
   */
  interface questionoptionFieldRefs {
    readonly id: FieldRef<"questionoption", 'String'>
    readonly option: FieldRef<"questionoption", 'String'>
    readonly content: FieldRef<"questionoption", 'String'>
    readonly questionId: FieldRef<"questionoption", 'String'>
    readonly isCorrect: FieldRef<"questionoption", 'Boolean'>
    readonly createdAt: FieldRef<"questionoption", 'DateTime'>
    readonly updatedAt: FieldRef<"questionoption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * questionoption findUnique
   */
  export type questionoptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionoption
     */
    select?: questionoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionoption
     */
    omit?: questionoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionoptionInclude<ExtArgs> | null
    /**
     * Filter, which questionoption to fetch.
     */
    where: questionoptionWhereUniqueInput
  }

  /**
   * questionoption findUniqueOrThrow
   */
  export type questionoptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionoption
     */
    select?: questionoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionoption
     */
    omit?: questionoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionoptionInclude<ExtArgs> | null
    /**
     * Filter, which questionoption to fetch.
     */
    where: questionoptionWhereUniqueInput
  }

  /**
   * questionoption findFirst
   */
  export type questionoptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionoption
     */
    select?: questionoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionoption
     */
    omit?: questionoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionoptionInclude<ExtArgs> | null
    /**
     * Filter, which questionoption to fetch.
     */
    where?: questionoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questionoptions to fetch.
     */
    orderBy?: questionoptionOrderByWithRelationInput | questionoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questionoptions.
     */
    cursor?: questionoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questionoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questionoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questionoptions.
     */
    distinct?: QuestionoptionScalarFieldEnum | QuestionoptionScalarFieldEnum[]
  }

  /**
   * questionoption findFirstOrThrow
   */
  export type questionoptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionoption
     */
    select?: questionoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionoption
     */
    omit?: questionoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionoptionInclude<ExtArgs> | null
    /**
     * Filter, which questionoption to fetch.
     */
    where?: questionoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questionoptions to fetch.
     */
    orderBy?: questionoptionOrderByWithRelationInput | questionoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questionoptions.
     */
    cursor?: questionoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questionoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questionoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questionoptions.
     */
    distinct?: QuestionoptionScalarFieldEnum | QuestionoptionScalarFieldEnum[]
  }

  /**
   * questionoption findMany
   */
  export type questionoptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionoption
     */
    select?: questionoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionoption
     */
    omit?: questionoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionoptionInclude<ExtArgs> | null
    /**
     * Filter, which questionoptions to fetch.
     */
    where?: questionoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questionoptions to fetch.
     */
    orderBy?: questionoptionOrderByWithRelationInput | questionoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questionoptions.
     */
    cursor?: questionoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questionoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questionoptions.
     */
    skip?: number
    distinct?: QuestionoptionScalarFieldEnum | QuestionoptionScalarFieldEnum[]
  }

  /**
   * questionoption create
   */
  export type questionoptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionoption
     */
    select?: questionoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionoption
     */
    omit?: questionoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionoptionInclude<ExtArgs> | null
    /**
     * The data needed to create a questionoption.
     */
    data: XOR<questionoptionCreateInput, questionoptionUncheckedCreateInput>
  }

  /**
   * questionoption createMany
   */
  export type questionoptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questionoptions.
     */
    data: questionoptionCreateManyInput | questionoptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * questionoption update
   */
  export type questionoptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionoption
     */
    select?: questionoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionoption
     */
    omit?: questionoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionoptionInclude<ExtArgs> | null
    /**
     * The data needed to update a questionoption.
     */
    data: XOR<questionoptionUpdateInput, questionoptionUncheckedUpdateInput>
    /**
     * Choose, which questionoption to update.
     */
    where: questionoptionWhereUniqueInput
  }

  /**
   * questionoption updateMany
   */
  export type questionoptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questionoptions.
     */
    data: XOR<questionoptionUpdateManyMutationInput, questionoptionUncheckedUpdateManyInput>
    /**
     * Filter which questionoptions to update
     */
    where?: questionoptionWhereInput
    /**
     * Limit how many questionoptions to update.
     */
    limit?: number
  }

  /**
   * questionoption upsert
   */
  export type questionoptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionoption
     */
    select?: questionoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionoption
     */
    omit?: questionoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionoptionInclude<ExtArgs> | null
    /**
     * The filter to search for the questionoption to update in case it exists.
     */
    where: questionoptionWhereUniqueInput
    /**
     * In case the questionoption found by the `where` argument doesn't exist, create a new questionoption with this data.
     */
    create: XOR<questionoptionCreateInput, questionoptionUncheckedCreateInput>
    /**
     * In case the questionoption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionoptionUpdateInput, questionoptionUncheckedUpdateInput>
  }

  /**
   * questionoption delete
   */
  export type questionoptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionoption
     */
    select?: questionoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionoption
     */
    omit?: questionoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionoptionInclude<ExtArgs> | null
    /**
     * Filter which questionoption to delete.
     */
    where: questionoptionWhereUniqueInput
  }

  /**
   * questionoption deleteMany
   */
  export type questionoptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questionoptions to delete
     */
    where?: questionoptionWhereInput
    /**
     * Limit how many questionoptions to delete.
     */
    limit?: number
  }

  /**
   * questionoption without action
   */
  export type questionoptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questionoption
     */
    select?: questionoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questionoption
     */
    omit?: questionoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionoptionInclude<ExtArgs> | null
  }


  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    studentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    studentId: string
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseprogress?: boolean | student$courseprogressArgs<ExtArgs>
    enrollment?: boolean | student$enrollmentArgs<ExtArgs>
    examattempt?: boolean | student$examattemptArgs<ExtArgs>
    moduleprogress?: boolean | student$moduleprogressArgs<ExtArgs>
    wpos_wpdatatable_23?: boolean | wpos_wpdatatable_23DefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type studentSelectScalar = {
    id?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type studentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseprogress?: boolean | student$courseprogressArgs<ExtArgs>
    enrollment?: boolean | student$enrollmentArgs<ExtArgs>
    examattempt?: boolean | student$examattemptArgs<ExtArgs>
    moduleprogress?: boolean | student$moduleprogressArgs<ExtArgs>
    wpos_wpdatatable_23?: boolean | wpos_wpdatatable_23DefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      courseprogress: Prisma.$courseprogressPayload<ExtArgs>[]
      enrollment: Prisma.$enrollmentPayload<ExtArgs>[]
      examattempt: Prisma.$examattemptPayload<ExtArgs>[]
      moduleprogress: Prisma.$moduleprogressPayload<ExtArgs>[]
      wpos_wpdatatable_23: Prisma.$wpos_wpdatatable_23Payload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentFindUniqueArgs>(args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(args: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentFindFirstArgs>(args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends studentFindManyArgs>(args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends studentCreateArgs>(args: SelectSubset<T, studentCreateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCreateManyArgs>(args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends studentDeleteArgs>(args: SelectSubset<T, studentDeleteArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentUpdateArgs>(args: SelectSubset<T, studentUpdateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentDeleteManyArgs>(args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentUpdateManyArgs>(args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends studentUpsertArgs>(args: SelectSubset<T, studentUpsertArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
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
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseprogress<T extends student$courseprogressArgs<ExtArgs> = {}>(args?: Subset<T, student$courseprogressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$courseprogressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollment<T extends student$enrollmentArgs<ExtArgs> = {}>(args?: Subset<T, student$enrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examattempt<T extends student$examattemptArgs<ExtArgs> = {}>(args?: Subset<T, student$examattemptArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$examattemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moduleprogress<T extends student$moduleprogressArgs<ExtArgs> = {}>(args?: Subset<T, student$moduleprogressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moduleprogressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wpos_wpdatatable_23<T extends wpos_wpdatatable_23DefaultArgs<ExtArgs> = {}>(args?: Subset<T, wpos_wpdatatable_23DefaultArgs<ExtArgs>>): Prisma__wpos_wpdatatable_23Client<$Result.GetResult<Prisma.$wpos_wpdatatable_23Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly id: FieldRef<"student", 'String'>
    readonly studentId: FieldRef<"student", 'String'>
    readonly createdAt: FieldRef<"student", 'DateTime'>
    readonly updatedAt: FieldRef<"student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * student.courseprogress
   */
  export type student$courseprogressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseprogress
     */
    select?: courseprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseprogress
     */
    omit?: courseprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseprogressInclude<ExtArgs> | null
    where?: courseprogressWhereInput
    orderBy?: courseprogressOrderByWithRelationInput | courseprogressOrderByWithRelationInput[]
    cursor?: courseprogressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseprogressScalarFieldEnum | CourseprogressScalarFieldEnum[]
  }

  /**
   * student.enrollment
   */
  export type student$enrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    where?: enrollmentWhereInput
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    cursor?: enrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * student.examattempt
   */
  export type student$examattemptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the examattempt
     */
    select?: examattemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the examattempt
     */
    omit?: examattemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examattemptInclude<ExtArgs> | null
    where?: examattemptWhereInput
    orderBy?: examattemptOrderByWithRelationInput | examattemptOrderByWithRelationInput[]
    cursor?: examattemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamattemptScalarFieldEnum | ExamattemptScalarFieldEnum[]
  }

  /**
   * student.moduleprogress
   */
  export type student$moduleprogressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the moduleprogress
     */
    select?: moduleprogressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the moduleprogress
     */
    omit?: moduleprogressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleprogressInclude<ExtArgs> | null
    where?: moduleprogressWhereInput
    orderBy?: moduleprogressOrderByWithRelationInput | moduleprogressOrderByWithRelationInput[]
    cursor?: moduleprogressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleprogressScalarFieldEnum | ModuleprogressScalarFieldEnum[]
  }

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
  }


  /**
   * Model teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    name: string | null
    passcode: string | null
    phoneno: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    name: string | null
    passcode: string | null
    phoneno: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    passcode: number
    phoneno: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    passcode?: true
    phoneno?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    passcode?: true
    phoneno?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    passcode?: true
    phoneno?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher to aggregate.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type teacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacherWhereInput
    orderBy?: teacherOrderByWithAggregationInput | teacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: teacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    name: string
    passcode: string
    phoneno: string
    createdAt: Date
    updatedAt: Date
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends teacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type teacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    passcode?: boolean
    phoneno?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | teacher$courseArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>



  export type teacherSelectScalar = {
    id?: boolean
    name?: boolean
    passcode?: boolean
    phoneno?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type teacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "passcode" | "phoneno" | "createdAt" | "updatedAt", ExtArgs["result"]["teacher"]>
  export type teacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | teacher$courseArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $teacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teacher"
    objects: {
      course: Prisma.$coursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      passcode: string
      phoneno: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type teacherGetPayload<S extends boolean | null | undefined | teacherDefaultArgs> = $Result.GetResult<Prisma.$teacherPayload, S>

  type teacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface teacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teacher'], meta: { name: 'teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {teacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teacherFindUniqueArgs>(args: SelectSubset<T, teacherFindUniqueArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teacherFindUniqueOrThrowArgs>(args: SelectSubset<T, teacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teacherFindFirstArgs>(args?: SelectSubset<T, teacherFindFirstArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teacherFindFirstOrThrowArgs>(args?: SelectSubset<T, teacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teacherFindManyArgs>(args?: SelectSubset<T, teacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {teacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends teacherCreateArgs>(args: SelectSubset<T, teacherCreateArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {teacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teacherCreateManyArgs>(args?: SelectSubset<T, teacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {teacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends teacherDeleteArgs>(args: SelectSubset<T, teacherDeleteArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {teacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teacherUpdateArgs>(args: SelectSubset<T, teacherUpdateArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {teacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teacherDeleteManyArgs>(args?: SelectSubset<T, teacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teacherUpdateManyArgs>(args: SelectSubset<T, teacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {teacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends teacherUpsertArgs>(args: SelectSubset<T, teacherUpsertArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends teacherCountArgs>(
      args?: Subset<T, teacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherGroupByArgs} args - Group by arguments.
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
      T extends teacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacherGroupByArgs['orderBy'] }
        : { orderBy?: teacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, teacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teacher model
   */
  readonly fields: teacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends teacher$courseArgs<ExtArgs> = {}>(args?: Subset<T, teacher$courseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the teacher model
   */
  interface teacherFieldRefs {
    readonly id: FieldRef<"teacher", 'String'>
    readonly name: FieldRef<"teacher", 'String'>
    readonly passcode: FieldRef<"teacher", 'String'>
    readonly phoneno: FieldRef<"teacher", 'String'>
    readonly createdAt: FieldRef<"teacher", 'DateTime'>
    readonly updatedAt: FieldRef<"teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * teacher findUnique
   */
  export type teacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher findUniqueOrThrow
   */
  export type teacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher findFirst
   */
  export type teacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher findFirstOrThrow
   */
  export type teacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher findMany
   */
  export type teacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teachers to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher create
   */
  export type teacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The data needed to create a teacher.
     */
    data: XOR<teacherCreateInput, teacherUncheckedCreateInput>
  }

  /**
   * teacher createMany
   */
  export type teacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teachers.
     */
    data: teacherCreateManyInput | teacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teacher update
   */
  export type teacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The data needed to update a teacher.
     */
    data: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>
    /**
     * Choose, which teacher to update.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher updateMany
   */
  export type teacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teachers.
     */
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyInput>
    /**
     * Filter which teachers to update
     */
    where?: teacherWhereInput
    /**
     * Limit how many teachers to update.
     */
    limit?: number
  }

  /**
   * teacher upsert
   */
  export type teacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The filter to search for the teacher to update in case it exists.
     */
    where: teacherWhereUniqueInput
    /**
     * In case the teacher found by the `where` argument doesn't exist, create a new teacher with this data.
     */
    create: XOR<teacherCreateInput, teacherUncheckedCreateInput>
    /**
     * In case the teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>
  }

  /**
   * teacher delete
   */
  export type teacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter which teacher to delete.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher deleteMany
   */
  export type teacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers to delete
     */
    where?: teacherWhereInput
    /**
     * Limit how many teachers to delete.
     */
    limit?: number
  }

  /**
   * teacher.course
   */
  export type teacher$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    where?: courseWhereInput
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    cursor?: courseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * teacher without action
   */
  export type teacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
  }


  /**
   * Model wpos_wpdatatable_23
   */

  export type AggregateWpos_wpdatatable_23 = {
    _count: Wpos_wpdatatable_23CountAggregateOutputType | null
    _min: Wpos_wpdatatable_23MinAggregateOutputType | null
    _max: Wpos_wpdatatable_23MaxAggregateOutputType | null
  }

  export type Wpos_wpdatatable_23MinAggregateOutputType = {
    wdt_ID: string | null
    name: string | null
    passcode: string | null
    phoneno: string | null
    status: string | null
    startdate: Date | null
    chat_id: string | null
  }

  export type Wpos_wpdatatable_23MaxAggregateOutputType = {
    wdt_ID: string | null
    name: string | null
    passcode: string | null
    phoneno: string | null
    status: string | null
    startdate: Date | null
    chat_id: string | null
  }

  export type Wpos_wpdatatable_23CountAggregateOutputType = {
    wdt_ID: number
    name: number
    passcode: number
    phoneno: number
    status: number
    startdate: number
    chat_id: number
    _all: number
  }


  export type Wpos_wpdatatable_23MinAggregateInputType = {
    wdt_ID?: true
    name?: true
    passcode?: true
    phoneno?: true
    status?: true
    startdate?: true
    chat_id?: true
  }

  export type Wpos_wpdatatable_23MaxAggregateInputType = {
    wdt_ID?: true
    name?: true
    passcode?: true
    phoneno?: true
    status?: true
    startdate?: true
    chat_id?: true
  }

  export type Wpos_wpdatatable_23CountAggregateInputType = {
    wdt_ID?: true
    name?: true
    passcode?: true
    phoneno?: true
    status?: true
    startdate?: true
    chat_id?: true
    _all?: true
  }

  export type Wpos_wpdatatable_23AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wpos_wpdatatable_23 to aggregate.
     */
    where?: wpos_wpdatatable_23WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wpos_wpdatatable_23s to fetch.
     */
    orderBy?: wpos_wpdatatable_23OrderByWithRelationInput | wpos_wpdatatable_23OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: wpos_wpdatatable_23WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wpos_wpdatatable_23s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wpos_wpdatatable_23s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wpos_wpdatatable_23s
    **/
    _count?: true | Wpos_wpdatatable_23CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Wpos_wpdatatable_23MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Wpos_wpdatatable_23MaxAggregateInputType
  }

  export type GetWpos_wpdatatable_23AggregateType<T extends Wpos_wpdatatable_23AggregateArgs> = {
        [P in keyof T & keyof AggregateWpos_wpdatatable_23]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWpos_wpdatatable_23[P]>
      : GetScalarType<T[P], AggregateWpos_wpdatatable_23[P]>
  }




  export type wpos_wpdatatable_23GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wpos_wpdatatable_23WhereInput
    orderBy?: wpos_wpdatatable_23OrderByWithAggregationInput | wpos_wpdatatable_23OrderByWithAggregationInput[]
    by: Wpos_wpdatatable_23ScalarFieldEnum[] | Wpos_wpdatatable_23ScalarFieldEnum
    having?: wpos_wpdatatable_23ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Wpos_wpdatatable_23CountAggregateInputType | true
    _min?: Wpos_wpdatatable_23MinAggregateInputType
    _max?: Wpos_wpdatatable_23MaxAggregateInputType
  }

  export type Wpos_wpdatatable_23GroupByOutputType = {
    wdt_ID: string
    name: string
    passcode: string
    phoneno: string
    status: string
    startdate: Date
    chat_id: string
    _count: Wpos_wpdatatable_23CountAggregateOutputType | null
    _min: Wpos_wpdatatable_23MinAggregateOutputType | null
    _max: Wpos_wpdatatable_23MaxAggregateOutputType | null
  }

  type GetWpos_wpdatatable_23GroupByPayload<T extends wpos_wpdatatable_23GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Wpos_wpdatatable_23GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Wpos_wpdatatable_23GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Wpos_wpdatatable_23GroupByOutputType[P]>
            : GetScalarType<T[P], Wpos_wpdatatable_23GroupByOutputType[P]>
        }
      >
    >


  export type wpos_wpdatatable_23Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wdt_ID?: boolean
    name?: boolean
    passcode?: boolean
    phoneno?: boolean
    status?: boolean
    startdate?: boolean
    chat_id?: boolean
    student?: boolean | wpos_wpdatatable_23$studentArgs<ExtArgs>
  }, ExtArgs["result"]["wpos_wpdatatable_23"]>



  export type wpos_wpdatatable_23SelectScalar = {
    wdt_ID?: boolean
    name?: boolean
    passcode?: boolean
    phoneno?: boolean
    status?: boolean
    startdate?: boolean
    chat_id?: boolean
  }

  export type wpos_wpdatatable_23Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"wdt_ID" | "name" | "passcode" | "phoneno" | "status" | "startdate" | "chat_id", ExtArgs["result"]["wpos_wpdatatable_23"]>
  export type wpos_wpdatatable_23Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | wpos_wpdatatable_23$studentArgs<ExtArgs>
  }

  export type $wpos_wpdatatable_23Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wpos_wpdatatable_23"
    objects: {
      student: Prisma.$studentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      wdt_ID: string
      name: string
      passcode: string
      phoneno: string
      status: string
      startdate: Date
      chat_id: string
    }, ExtArgs["result"]["wpos_wpdatatable_23"]>
    composites: {}
  }

  type wpos_wpdatatable_23GetPayload<S extends boolean | null | undefined | wpos_wpdatatable_23DefaultArgs> = $Result.GetResult<Prisma.$wpos_wpdatatable_23Payload, S>

  type wpos_wpdatatable_23CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<wpos_wpdatatable_23FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Wpos_wpdatatable_23CountAggregateInputType | true
    }

  export interface wpos_wpdatatable_23Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wpos_wpdatatable_23'], meta: { name: 'wpos_wpdatatable_23' } }
    /**
     * Find zero or one Wpos_wpdatatable_23 that matches the filter.
     * @param {wpos_wpdatatable_23FindUniqueArgs} args - Arguments to find a Wpos_wpdatatable_23
     * @example
     * // Get one Wpos_wpdatatable_23
     * const wpos_wpdatatable_23 = await prisma.wpos_wpdatatable_23.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wpos_wpdatatable_23FindUniqueArgs>(args: SelectSubset<T, wpos_wpdatatable_23FindUniqueArgs<ExtArgs>>): Prisma__wpos_wpdatatable_23Client<$Result.GetResult<Prisma.$wpos_wpdatatable_23Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wpos_wpdatatable_23 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wpos_wpdatatable_23FindUniqueOrThrowArgs} args - Arguments to find a Wpos_wpdatatable_23
     * @example
     * // Get one Wpos_wpdatatable_23
     * const wpos_wpdatatable_23 = await prisma.wpos_wpdatatable_23.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wpos_wpdatatable_23FindUniqueOrThrowArgs>(args: SelectSubset<T, wpos_wpdatatable_23FindUniqueOrThrowArgs<ExtArgs>>): Prisma__wpos_wpdatatable_23Client<$Result.GetResult<Prisma.$wpos_wpdatatable_23Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wpos_wpdatatable_23 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wpos_wpdatatable_23FindFirstArgs} args - Arguments to find a Wpos_wpdatatable_23
     * @example
     * // Get one Wpos_wpdatatable_23
     * const wpos_wpdatatable_23 = await prisma.wpos_wpdatatable_23.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wpos_wpdatatable_23FindFirstArgs>(args?: SelectSubset<T, wpos_wpdatatable_23FindFirstArgs<ExtArgs>>): Prisma__wpos_wpdatatable_23Client<$Result.GetResult<Prisma.$wpos_wpdatatable_23Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wpos_wpdatatable_23 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wpos_wpdatatable_23FindFirstOrThrowArgs} args - Arguments to find a Wpos_wpdatatable_23
     * @example
     * // Get one Wpos_wpdatatable_23
     * const wpos_wpdatatable_23 = await prisma.wpos_wpdatatable_23.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wpos_wpdatatable_23FindFirstOrThrowArgs>(args?: SelectSubset<T, wpos_wpdatatable_23FindFirstOrThrowArgs<ExtArgs>>): Prisma__wpos_wpdatatable_23Client<$Result.GetResult<Prisma.$wpos_wpdatatable_23Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wpos_wpdatatable_23s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wpos_wpdatatable_23FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wpos_wpdatatable_23s
     * const wpos_wpdatatable_23s = await prisma.wpos_wpdatatable_23.findMany()
     * 
     * // Get first 10 Wpos_wpdatatable_23s
     * const wpos_wpdatatable_23s = await prisma.wpos_wpdatatable_23.findMany({ take: 10 })
     * 
     * // Only select the `wdt_ID`
     * const wpos_wpdatatable_23WithWdt_IDOnly = await prisma.wpos_wpdatatable_23.findMany({ select: { wdt_ID: true } })
     * 
     */
    findMany<T extends wpos_wpdatatable_23FindManyArgs>(args?: SelectSubset<T, wpos_wpdatatable_23FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wpos_wpdatatable_23Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wpos_wpdatatable_23.
     * @param {wpos_wpdatatable_23CreateArgs} args - Arguments to create a Wpos_wpdatatable_23.
     * @example
     * // Create one Wpos_wpdatatable_23
     * const Wpos_wpdatatable_23 = await prisma.wpos_wpdatatable_23.create({
     *   data: {
     *     // ... data to create a Wpos_wpdatatable_23
     *   }
     * })
     * 
     */
    create<T extends wpos_wpdatatable_23CreateArgs>(args: SelectSubset<T, wpos_wpdatatable_23CreateArgs<ExtArgs>>): Prisma__wpos_wpdatatable_23Client<$Result.GetResult<Prisma.$wpos_wpdatatable_23Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wpos_wpdatatable_23s.
     * @param {wpos_wpdatatable_23CreateManyArgs} args - Arguments to create many Wpos_wpdatatable_23s.
     * @example
     * // Create many Wpos_wpdatatable_23s
     * const wpos_wpdatatable_23 = await prisma.wpos_wpdatatable_23.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends wpos_wpdatatable_23CreateManyArgs>(args?: SelectSubset<T, wpos_wpdatatable_23CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wpos_wpdatatable_23.
     * @param {wpos_wpdatatable_23DeleteArgs} args - Arguments to delete one Wpos_wpdatatable_23.
     * @example
     * // Delete one Wpos_wpdatatable_23
     * const Wpos_wpdatatable_23 = await prisma.wpos_wpdatatable_23.delete({
     *   where: {
     *     // ... filter to delete one Wpos_wpdatatable_23
     *   }
     * })
     * 
     */
    delete<T extends wpos_wpdatatable_23DeleteArgs>(args: SelectSubset<T, wpos_wpdatatable_23DeleteArgs<ExtArgs>>): Prisma__wpos_wpdatatable_23Client<$Result.GetResult<Prisma.$wpos_wpdatatable_23Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wpos_wpdatatable_23.
     * @param {wpos_wpdatatable_23UpdateArgs} args - Arguments to update one Wpos_wpdatatable_23.
     * @example
     * // Update one Wpos_wpdatatable_23
     * const wpos_wpdatatable_23 = await prisma.wpos_wpdatatable_23.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends wpos_wpdatatable_23UpdateArgs>(args: SelectSubset<T, wpos_wpdatatable_23UpdateArgs<ExtArgs>>): Prisma__wpos_wpdatatable_23Client<$Result.GetResult<Prisma.$wpos_wpdatatable_23Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wpos_wpdatatable_23s.
     * @param {wpos_wpdatatable_23DeleteManyArgs} args - Arguments to filter Wpos_wpdatatable_23s to delete.
     * @example
     * // Delete a few Wpos_wpdatatable_23s
     * const { count } = await prisma.wpos_wpdatatable_23.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends wpos_wpdatatable_23DeleteManyArgs>(args?: SelectSubset<T, wpos_wpdatatable_23DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wpos_wpdatatable_23s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wpos_wpdatatable_23UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wpos_wpdatatable_23s
     * const wpos_wpdatatable_23 = await prisma.wpos_wpdatatable_23.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends wpos_wpdatatable_23UpdateManyArgs>(args: SelectSubset<T, wpos_wpdatatable_23UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wpos_wpdatatable_23.
     * @param {wpos_wpdatatable_23UpsertArgs} args - Arguments to update or create a Wpos_wpdatatable_23.
     * @example
     * // Update or create a Wpos_wpdatatable_23
     * const wpos_wpdatatable_23 = await prisma.wpos_wpdatatable_23.upsert({
     *   create: {
     *     // ... data to create a Wpos_wpdatatable_23
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wpos_wpdatatable_23 we want to update
     *   }
     * })
     */
    upsert<T extends wpos_wpdatatable_23UpsertArgs>(args: SelectSubset<T, wpos_wpdatatable_23UpsertArgs<ExtArgs>>): Prisma__wpos_wpdatatable_23Client<$Result.GetResult<Prisma.$wpos_wpdatatable_23Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wpos_wpdatatable_23s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wpos_wpdatatable_23CountArgs} args - Arguments to filter Wpos_wpdatatable_23s to count.
     * @example
     * // Count the number of Wpos_wpdatatable_23s
     * const count = await prisma.wpos_wpdatatable_23.count({
     *   where: {
     *     // ... the filter for the Wpos_wpdatatable_23s we want to count
     *   }
     * })
    **/
    count<T extends wpos_wpdatatable_23CountArgs>(
      args?: Subset<T, wpos_wpdatatable_23CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Wpos_wpdatatable_23CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wpos_wpdatatable_23.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wpos_wpdatatable_23AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Wpos_wpdatatable_23AggregateArgs>(args: Subset<T, Wpos_wpdatatable_23AggregateArgs>): Prisma.PrismaPromise<GetWpos_wpdatatable_23AggregateType<T>>

    /**
     * Group by Wpos_wpdatatable_23.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wpos_wpdatatable_23GroupByArgs} args - Group by arguments.
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
      T extends wpos_wpdatatable_23GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: wpos_wpdatatable_23GroupByArgs['orderBy'] }
        : { orderBy?: wpos_wpdatatable_23GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, wpos_wpdatatable_23GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWpos_wpdatatable_23GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wpos_wpdatatable_23 model
   */
  readonly fields: wpos_wpdatatable_23FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wpos_wpdatatable_23.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__wpos_wpdatatable_23Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends wpos_wpdatatable_23$studentArgs<ExtArgs> = {}>(args?: Subset<T, wpos_wpdatatable_23$studentArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the wpos_wpdatatable_23 model
   */
  interface wpos_wpdatatable_23FieldRefs {
    readonly wdt_ID: FieldRef<"wpos_wpdatatable_23", 'String'>
    readonly name: FieldRef<"wpos_wpdatatable_23", 'String'>
    readonly passcode: FieldRef<"wpos_wpdatatable_23", 'String'>
    readonly phoneno: FieldRef<"wpos_wpdatatable_23", 'String'>
    readonly status: FieldRef<"wpos_wpdatatable_23", 'String'>
    readonly startdate: FieldRef<"wpos_wpdatatable_23", 'DateTime'>
    readonly chat_id: FieldRef<"wpos_wpdatatable_23", 'String'>
  }
    

  // Custom InputTypes
  /**
   * wpos_wpdatatable_23 findUnique
   */
  export type wpos_wpdatatable_23FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wpos_wpdatatable_23
     */
    select?: wpos_wpdatatable_23Select<ExtArgs> | null
    /**
     * Omit specific fields from the wpos_wpdatatable_23
     */
    omit?: wpos_wpdatatable_23Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wpos_wpdatatable_23Include<ExtArgs> | null
    /**
     * Filter, which wpos_wpdatatable_23 to fetch.
     */
    where: wpos_wpdatatable_23WhereUniqueInput
  }

  /**
   * wpos_wpdatatable_23 findUniqueOrThrow
   */
  export type wpos_wpdatatable_23FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wpos_wpdatatable_23
     */
    select?: wpos_wpdatatable_23Select<ExtArgs> | null
    /**
     * Omit specific fields from the wpos_wpdatatable_23
     */
    omit?: wpos_wpdatatable_23Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wpos_wpdatatable_23Include<ExtArgs> | null
    /**
     * Filter, which wpos_wpdatatable_23 to fetch.
     */
    where: wpos_wpdatatable_23WhereUniqueInput
  }

  /**
   * wpos_wpdatatable_23 findFirst
   */
  export type wpos_wpdatatable_23FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wpos_wpdatatable_23
     */
    select?: wpos_wpdatatable_23Select<ExtArgs> | null
    /**
     * Omit specific fields from the wpos_wpdatatable_23
     */
    omit?: wpos_wpdatatable_23Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wpos_wpdatatable_23Include<ExtArgs> | null
    /**
     * Filter, which wpos_wpdatatable_23 to fetch.
     */
    where?: wpos_wpdatatable_23WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wpos_wpdatatable_23s to fetch.
     */
    orderBy?: wpos_wpdatatable_23OrderByWithRelationInput | wpos_wpdatatable_23OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wpos_wpdatatable_23s.
     */
    cursor?: wpos_wpdatatable_23WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wpos_wpdatatable_23s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wpos_wpdatatable_23s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wpos_wpdatatable_23s.
     */
    distinct?: Wpos_wpdatatable_23ScalarFieldEnum | Wpos_wpdatatable_23ScalarFieldEnum[]
  }

  /**
   * wpos_wpdatatable_23 findFirstOrThrow
   */
  export type wpos_wpdatatable_23FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wpos_wpdatatable_23
     */
    select?: wpos_wpdatatable_23Select<ExtArgs> | null
    /**
     * Omit specific fields from the wpos_wpdatatable_23
     */
    omit?: wpos_wpdatatable_23Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wpos_wpdatatable_23Include<ExtArgs> | null
    /**
     * Filter, which wpos_wpdatatable_23 to fetch.
     */
    where?: wpos_wpdatatable_23WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wpos_wpdatatable_23s to fetch.
     */
    orderBy?: wpos_wpdatatable_23OrderByWithRelationInput | wpos_wpdatatable_23OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wpos_wpdatatable_23s.
     */
    cursor?: wpos_wpdatatable_23WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wpos_wpdatatable_23s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wpos_wpdatatable_23s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wpos_wpdatatable_23s.
     */
    distinct?: Wpos_wpdatatable_23ScalarFieldEnum | Wpos_wpdatatable_23ScalarFieldEnum[]
  }

  /**
   * wpos_wpdatatable_23 findMany
   */
  export type wpos_wpdatatable_23FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wpos_wpdatatable_23
     */
    select?: wpos_wpdatatable_23Select<ExtArgs> | null
    /**
     * Omit specific fields from the wpos_wpdatatable_23
     */
    omit?: wpos_wpdatatable_23Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wpos_wpdatatable_23Include<ExtArgs> | null
    /**
     * Filter, which wpos_wpdatatable_23s to fetch.
     */
    where?: wpos_wpdatatable_23WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wpos_wpdatatable_23s to fetch.
     */
    orderBy?: wpos_wpdatatable_23OrderByWithRelationInput | wpos_wpdatatable_23OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wpos_wpdatatable_23s.
     */
    cursor?: wpos_wpdatatable_23WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wpos_wpdatatable_23s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wpos_wpdatatable_23s.
     */
    skip?: number
    distinct?: Wpos_wpdatatable_23ScalarFieldEnum | Wpos_wpdatatable_23ScalarFieldEnum[]
  }

  /**
   * wpos_wpdatatable_23 create
   */
  export type wpos_wpdatatable_23CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wpos_wpdatatable_23
     */
    select?: wpos_wpdatatable_23Select<ExtArgs> | null
    /**
     * Omit specific fields from the wpos_wpdatatable_23
     */
    omit?: wpos_wpdatatable_23Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wpos_wpdatatable_23Include<ExtArgs> | null
    /**
     * The data needed to create a wpos_wpdatatable_23.
     */
    data: XOR<wpos_wpdatatable_23CreateInput, wpos_wpdatatable_23UncheckedCreateInput>
  }

  /**
   * wpos_wpdatatable_23 createMany
   */
  export type wpos_wpdatatable_23CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wpos_wpdatatable_23s.
     */
    data: wpos_wpdatatable_23CreateManyInput | wpos_wpdatatable_23CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wpos_wpdatatable_23 update
   */
  export type wpos_wpdatatable_23UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wpos_wpdatatable_23
     */
    select?: wpos_wpdatatable_23Select<ExtArgs> | null
    /**
     * Omit specific fields from the wpos_wpdatatable_23
     */
    omit?: wpos_wpdatatable_23Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wpos_wpdatatable_23Include<ExtArgs> | null
    /**
     * The data needed to update a wpos_wpdatatable_23.
     */
    data: XOR<wpos_wpdatatable_23UpdateInput, wpos_wpdatatable_23UncheckedUpdateInput>
    /**
     * Choose, which wpos_wpdatatable_23 to update.
     */
    where: wpos_wpdatatable_23WhereUniqueInput
  }

  /**
   * wpos_wpdatatable_23 updateMany
   */
  export type wpos_wpdatatable_23UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wpos_wpdatatable_23s.
     */
    data: XOR<wpos_wpdatatable_23UpdateManyMutationInput, wpos_wpdatatable_23UncheckedUpdateManyInput>
    /**
     * Filter which wpos_wpdatatable_23s to update
     */
    where?: wpos_wpdatatable_23WhereInput
    /**
     * Limit how many wpos_wpdatatable_23s to update.
     */
    limit?: number
  }

  /**
   * wpos_wpdatatable_23 upsert
   */
  export type wpos_wpdatatable_23UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wpos_wpdatatable_23
     */
    select?: wpos_wpdatatable_23Select<ExtArgs> | null
    /**
     * Omit specific fields from the wpos_wpdatatable_23
     */
    omit?: wpos_wpdatatable_23Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wpos_wpdatatable_23Include<ExtArgs> | null
    /**
     * The filter to search for the wpos_wpdatatable_23 to update in case it exists.
     */
    where: wpos_wpdatatable_23WhereUniqueInput
    /**
     * In case the wpos_wpdatatable_23 found by the `where` argument doesn't exist, create a new wpos_wpdatatable_23 with this data.
     */
    create: XOR<wpos_wpdatatable_23CreateInput, wpos_wpdatatable_23UncheckedCreateInput>
    /**
     * In case the wpos_wpdatatable_23 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<wpos_wpdatatable_23UpdateInput, wpos_wpdatatable_23UncheckedUpdateInput>
  }

  /**
   * wpos_wpdatatable_23 delete
   */
  export type wpos_wpdatatable_23DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wpos_wpdatatable_23
     */
    select?: wpos_wpdatatable_23Select<ExtArgs> | null
    /**
     * Omit specific fields from the wpos_wpdatatable_23
     */
    omit?: wpos_wpdatatable_23Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wpos_wpdatatable_23Include<ExtArgs> | null
    /**
     * Filter which wpos_wpdatatable_23 to delete.
     */
    where: wpos_wpdatatable_23WhereUniqueInput
  }

  /**
   * wpos_wpdatatable_23 deleteMany
   */
  export type wpos_wpdatatable_23DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wpos_wpdatatable_23s to delete
     */
    where?: wpos_wpdatatable_23WhereInput
    /**
     * Limit how many wpos_wpdatatable_23s to delete.
     */
    limit?: number
  }

  /**
   * wpos_wpdatatable_23.student
   */
  export type wpos_wpdatatable_23$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
  }

  /**
   * wpos_wpdatatable_23 without action
   */
  export type wpos_wpdatatable_23DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wpos_wpdatatable_23
     */
    select?: wpos_wpdatatable_23Select<ExtArgs> | null
    /**
     * Omit specific fields from the wpos_wpdatatable_23
     */
    omit?: wpos_wpdatatable_23Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wpos_wpdatatable_23Include<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    passcode: 'passcode',
    phoneno: 'phoneno',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    teacherId: 'teacherId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imageUrl: 'imageUrl'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseprogressScalarFieldEnum: {
    id: 'id',
    progress: 'progress',
    studentId: 'studentId',
    courseId: 'courseId',
    lastUpdated: 'lastUpdated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseprogressScalarFieldEnum = (typeof CourseprogressScalarFieldEnum)[keyof typeof CourseprogressScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    enrolledAt: 'enrolledAt',
    courseId: 'courseId',
    studentId: 'studentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    url: 'url'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    moduleId: 'moduleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const ExamattemptScalarFieldEnum: {
    id: 'id',
    score: 'score',
    attemptDate: 'attemptDate',
    studentId: 'studentId',
    examId: 'examId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExamattemptScalarFieldEnum = (typeof ExamattemptScalarFieldEnum)[keyof typeof ExamattemptScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const ModuleprogressScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    moduleId: 'moduleId',
    progress: 'progress',
    lastUpdated: 'lastUpdated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleprogressScalarFieldEnum = (typeof ModuleprogressScalarFieldEnum)[keyof typeof ModuleprogressScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    questionNo: 'questionNo',
    content: 'content',
    examId: 'examId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const QuestionoptionScalarFieldEnum: {
    id: 'id',
    option: 'option',
    content: 'content',
    questionId: 'questionId',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionoptionScalarFieldEnum = (typeof QuestionoptionScalarFieldEnum)[keyof typeof QuestionoptionScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    passcode: 'passcode',
    phoneno: 'phoneno',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const Wpos_wpdatatable_23ScalarFieldEnum: {
    wdt_ID: 'wdt_ID',
    name: 'name',
    passcode: 'passcode',
    phoneno: 'phoneno',
    status: 'status',
    startdate: 'startdate',
    chat_id: 'chat_id'
  };

  export type Wpos_wpdatatable_23ScalarFieldEnum = (typeof Wpos_wpdatatable_23ScalarFieldEnum)[keyof typeof Wpos_wpdatatable_23ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const adminOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    passcode: 'passcode',
    phoneno: 'phoneno'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const courseOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    teacherId: 'teacherId',
    imageUrl: 'imageUrl'
  };

  export type courseOrderByRelevanceFieldEnum = (typeof courseOrderByRelevanceFieldEnum)[keyof typeof courseOrderByRelevanceFieldEnum]


  export const courseprogressOrderByRelevanceFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    courseId: 'courseId'
  };

  export type courseprogressOrderByRelevanceFieldEnum = (typeof courseprogressOrderByRelevanceFieldEnum)[keyof typeof courseprogressOrderByRelevanceFieldEnum]


  export const enrollmentOrderByRelevanceFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    studentId: 'studentId',
    url: 'url'
  };

  export type enrollmentOrderByRelevanceFieldEnum = (typeof enrollmentOrderByRelevanceFieldEnum)[keyof typeof enrollmentOrderByRelevanceFieldEnum]


  export const examOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    moduleId: 'moduleId'
  };

  export type examOrderByRelevanceFieldEnum = (typeof examOrderByRelevanceFieldEnum)[keyof typeof examOrderByRelevanceFieldEnum]


  export const examattemptOrderByRelevanceFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    examId: 'examId'
  };

  export type examattemptOrderByRelevanceFieldEnum = (typeof examattemptOrderByRelevanceFieldEnum)[keyof typeof examattemptOrderByRelevanceFieldEnum]


  export const moduleOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    courseId: 'courseId'
  };

  export type moduleOrderByRelevanceFieldEnum = (typeof moduleOrderByRelevanceFieldEnum)[keyof typeof moduleOrderByRelevanceFieldEnum]


  export const moduleprogressOrderByRelevanceFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    moduleId: 'moduleId'
  };

  export type moduleprogressOrderByRelevanceFieldEnum = (typeof moduleprogressOrderByRelevanceFieldEnum)[keyof typeof moduleprogressOrderByRelevanceFieldEnum]


  export const questionOrderByRelevanceFieldEnum: {
    id: 'id',
    questionNo: 'questionNo',
    content: 'content',
    examId: 'examId'
  };

  export type questionOrderByRelevanceFieldEnum = (typeof questionOrderByRelevanceFieldEnum)[keyof typeof questionOrderByRelevanceFieldEnum]


  export const questionoptionOrderByRelevanceFieldEnum: {
    id: 'id',
    option: 'option',
    content: 'content',
    questionId: 'questionId'
  };

  export type questionoptionOrderByRelevanceFieldEnum = (typeof questionoptionOrderByRelevanceFieldEnum)[keyof typeof questionoptionOrderByRelevanceFieldEnum]


  export const studentOrderByRelevanceFieldEnum: {
    id: 'id',
    studentId: 'studentId'
  };

  export type studentOrderByRelevanceFieldEnum = (typeof studentOrderByRelevanceFieldEnum)[keyof typeof studentOrderByRelevanceFieldEnum]


  export const teacherOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    passcode: 'passcode',
    phoneno: 'phoneno'
  };

  export type teacherOrderByRelevanceFieldEnum = (typeof teacherOrderByRelevanceFieldEnum)[keyof typeof teacherOrderByRelevanceFieldEnum]


  export const wpos_wpdatatable_23OrderByRelevanceFieldEnum: {
    wdt_ID: 'wdt_ID',
    name: 'name',
    passcode: 'passcode',
    phoneno: 'phoneno',
    status: 'status',
    chat_id: 'chat_id'
  };

  export type wpos_wpdatatable_23OrderByRelevanceFieldEnum = (typeof wpos_wpdatatable_23OrderByRelevanceFieldEnum)[keyof typeof wpos_wpdatatable_23OrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: StringFilter<"admin"> | string
    name?: StringFilter<"admin"> | string
    passcode?: StringFilter<"admin"> | string
    phoneno?: StringFilter<"admin"> | string
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneno?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    name?: StringFilter<"admin"> | string
    passcode?: StringFilter<"admin"> | string
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
  }, "id" | "phoneno">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"admin"> | string
    name?: StringWithAggregatesFilter<"admin"> | string
    passcode?: StringWithAggregatesFilter<"admin"> | string
    phoneno?: StringWithAggregatesFilter<"admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    id?: StringFilter<"course"> | string
    title?: StringFilter<"course"> | string
    description?: StringNullableFilter<"course"> | string | null
    teacherId?: StringNullableFilter<"course"> | string | null
    createdAt?: DateTimeFilter<"course"> | Date | string
    updatedAt?: DateTimeFilter<"course"> | Date | string
    imageUrl?: StringNullableFilter<"course"> | string | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, teacherWhereInput> | null
    courseprogress?: CourseprogressListRelationFilter
    enrollment?: EnrollmentListRelationFilter
    module?: ModuleListRelationFilter
  }

  export type courseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    teacherId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    teacher?: teacherOrderByWithRelationInput
    courseprogress?: courseprogressOrderByRelationAggregateInput
    enrollment?: enrollmentOrderByRelationAggregateInput
    module?: moduleOrderByRelationAggregateInput
    _relevance?: courseOrderByRelevanceInput
  }

  export type courseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    title?: StringFilter<"course"> | string
    description?: StringNullableFilter<"course"> | string | null
    teacherId?: StringNullableFilter<"course"> | string | null
    createdAt?: DateTimeFilter<"course"> | Date | string
    updatedAt?: DateTimeFilter<"course"> | Date | string
    imageUrl?: StringNullableFilter<"course"> | string | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, teacherWhereInput> | null
    courseprogress?: CourseprogressListRelationFilter
    enrollment?: EnrollmentListRelationFilter
    module?: ModuleListRelationFilter
  }, "id">

  export type courseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    teacherId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: courseCountOrderByAggregateInput
    _max?: courseMaxOrderByAggregateInput
    _min?: courseMinOrderByAggregateInput
  }

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    OR?: courseScalarWhereWithAggregatesInput[]
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"course"> | string
    title?: StringWithAggregatesFilter<"course"> | string
    description?: StringNullableWithAggregatesFilter<"course"> | string | null
    teacherId?: StringNullableWithAggregatesFilter<"course"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"course"> | Date | string
    imageUrl?: StringNullableWithAggregatesFilter<"course"> | string | null
  }

  export type courseprogressWhereInput = {
    AND?: courseprogressWhereInput | courseprogressWhereInput[]
    OR?: courseprogressWhereInput[]
    NOT?: courseprogressWhereInput | courseprogressWhereInput[]
    id?: StringFilter<"courseprogress"> | string
    progress?: FloatFilter<"courseprogress"> | number
    studentId?: StringFilter<"courseprogress"> | string
    courseId?: StringFilter<"courseprogress"> | string
    lastUpdated?: DateTimeFilter<"courseprogress"> | Date | string
    createdAt?: DateTimeFilter<"courseprogress"> | Date | string
    updatedAt?: DateTimeFilter<"courseprogress"> | Date | string
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }

  export type courseprogressOrderByWithRelationInput = {
    id?: SortOrder
    progress?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: courseOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
    _relevance?: courseprogressOrderByRelevanceInput
  }

  export type courseprogressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: courseprogressWhereInput | courseprogressWhereInput[]
    OR?: courseprogressWhereInput[]
    NOT?: courseprogressWhereInput | courseprogressWhereInput[]
    progress?: FloatFilter<"courseprogress"> | number
    studentId?: StringFilter<"courseprogress"> | string
    courseId?: StringFilter<"courseprogress"> | string
    lastUpdated?: DateTimeFilter<"courseprogress"> | Date | string
    createdAt?: DateTimeFilter<"courseprogress"> | Date | string
    updatedAt?: DateTimeFilter<"courseprogress"> | Date | string
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }, "id">

  export type courseprogressOrderByWithAggregationInput = {
    id?: SortOrder
    progress?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: courseprogressCountOrderByAggregateInput
    _avg?: courseprogressAvgOrderByAggregateInput
    _max?: courseprogressMaxOrderByAggregateInput
    _min?: courseprogressMinOrderByAggregateInput
    _sum?: courseprogressSumOrderByAggregateInput
  }

  export type courseprogressScalarWhereWithAggregatesInput = {
    AND?: courseprogressScalarWhereWithAggregatesInput | courseprogressScalarWhereWithAggregatesInput[]
    OR?: courseprogressScalarWhereWithAggregatesInput[]
    NOT?: courseprogressScalarWhereWithAggregatesInput | courseprogressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"courseprogress"> | string
    progress?: FloatWithAggregatesFilter<"courseprogress"> | number
    studentId?: StringWithAggregatesFilter<"courseprogress"> | string
    courseId?: StringWithAggregatesFilter<"courseprogress"> | string
    lastUpdated?: DateTimeWithAggregatesFilter<"courseprogress"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"courseprogress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"courseprogress"> | Date | string
  }

  export type enrollmentWhereInput = {
    AND?: enrollmentWhereInput | enrollmentWhereInput[]
    OR?: enrollmentWhereInput[]
    NOT?: enrollmentWhereInput | enrollmentWhereInput[]
    id?: StringFilter<"enrollment"> | string
    enrolledAt?: DateTimeFilter<"enrollment"> | Date | string
    courseId?: StringFilter<"enrollment"> | string
    studentId?: StringFilter<"enrollment"> | string
    createdAt?: DateTimeFilter<"enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"enrollment"> | Date | string
    url?: StringFilter<"enrollment"> | string
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }

  export type enrollmentOrderByWithRelationInput = {
    id?: SortOrder
    enrolledAt?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    course?: courseOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
    _relevance?: enrollmentOrderByRelevanceInput
  }

  export type enrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: enrollmentWhereInput | enrollmentWhereInput[]
    OR?: enrollmentWhereInput[]
    NOT?: enrollmentWhereInput | enrollmentWhereInput[]
    enrolledAt?: DateTimeFilter<"enrollment"> | Date | string
    courseId?: StringFilter<"enrollment"> | string
    studentId?: StringFilter<"enrollment"> | string
    createdAt?: DateTimeFilter<"enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"enrollment"> | Date | string
    url?: StringFilter<"enrollment"> | string
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }, "id">

  export type enrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    enrolledAt?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
    _count?: enrollmentCountOrderByAggregateInput
    _max?: enrollmentMaxOrderByAggregateInput
    _min?: enrollmentMinOrderByAggregateInput
  }

  export type enrollmentScalarWhereWithAggregatesInput = {
    AND?: enrollmentScalarWhereWithAggregatesInput | enrollmentScalarWhereWithAggregatesInput[]
    OR?: enrollmentScalarWhereWithAggregatesInput[]
    NOT?: enrollmentScalarWhereWithAggregatesInput | enrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"enrollment"> | string
    enrolledAt?: DateTimeWithAggregatesFilter<"enrollment"> | Date | string
    courseId?: StringWithAggregatesFilter<"enrollment"> | string
    studentId?: StringWithAggregatesFilter<"enrollment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"enrollment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"enrollment"> | Date | string
    url?: StringWithAggregatesFilter<"enrollment"> | string
  }

  export type examWhereInput = {
    AND?: examWhereInput | examWhereInput[]
    OR?: examWhereInput[]
    NOT?: examWhereInput | examWhereInput[]
    id?: StringFilter<"exam"> | string
    title?: StringFilter<"exam"> | string
    moduleId?: StringFilter<"exam"> | string
    createdAt?: DateTimeFilter<"exam"> | Date | string
    updatedAt?: DateTimeFilter<"exam"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
    examattempt?: ExamattemptListRelationFilter
    question?: QuestionListRelationFilter
  }

  export type examOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    module?: moduleOrderByWithRelationInput
    examattempt?: examattemptOrderByRelationAggregateInput
    question?: questionOrderByRelationAggregateInput
    _relevance?: examOrderByRelevanceInput
  }

  export type examWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: examWhereInput | examWhereInput[]
    OR?: examWhereInput[]
    NOT?: examWhereInput | examWhereInput[]
    title?: StringFilter<"exam"> | string
    moduleId?: StringFilter<"exam"> | string
    createdAt?: DateTimeFilter<"exam"> | Date | string
    updatedAt?: DateTimeFilter<"exam"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
    examattempt?: ExamattemptListRelationFilter
    question?: QuestionListRelationFilter
  }, "id">

  export type examOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: examCountOrderByAggregateInput
    _max?: examMaxOrderByAggregateInput
    _min?: examMinOrderByAggregateInput
  }

  export type examScalarWhereWithAggregatesInput = {
    AND?: examScalarWhereWithAggregatesInput | examScalarWhereWithAggregatesInput[]
    OR?: examScalarWhereWithAggregatesInput[]
    NOT?: examScalarWhereWithAggregatesInput | examScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"exam"> | string
    title?: StringWithAggregatesFilter<"exam"> | string
    moduleId?: StringWithAggregatesFilter<"exam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"exam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"exam"> | Date | string
  }

  export type examattemptWhereInput = {
    AND?: examattemptWhereInput | examattemptWhereInput[]
    OR?: examattemptWhereInput[]
    NOT?: examattemptWhereInput | examattemptWhereInput[]
    id?: StringFilter<"examattempt"> | string
    score?: FloatFilter<"examattempt"> | number
    attemptDate?: DateTimeFilter<"examattempt"> | Date | string
    studentId?: StringFilter<"examattempt"> | string
    examId?: StringFilter<"examattempt"> | string
    createdAt?: DateTimeFilter<"examattempt"> | Date | string
    updatedAt?: DateTimeFilter<"examattempt"> | Date | string
    exam?: XOR<ExamScalarRelationFilter, examWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }

  export type examattemptOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    attemptDate?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exam?: examOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
    _relevance?: examattemptOrderByRelevanceInput
  }

  export type examattemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: examattemptWhereInput | examattemptWhereInput[]
    OR?: examattemptWhereInput[]
    NOT?: examattemptWhereInput | examattemptWhereInput[]
    score?: FloatFilter<"examattempt"> | number
    attemptDate?: DateTimeFilter<"examattempt"> | Date | string
    studentId?: StringFilter<"examattempt"> | string
    examId?: StringFilter<"examattempt"> | string
    createdAt?: DateTimeFilter<"examattempt"> | Date | string
    updatedAt?: DateTimeFilter<"examattempt"> | Date | string
    exam?: XOR<ExamScalarRelationFilter, examWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }, "id">

  export type examattemptOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    attemptDate?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: examattemptCountOrderByAggregateInput
    _avg?: examattemptAvgOrderByAggregateInput
    _max?: examattemptMaxOrderByAggregateInput
    _min?: examattemptMinOrderByAggregateInput
    _sum?: examattemptSumOrderByAggregateInput
  }

  export type examattemptScalarWhereWithAggregatesInput = {
    AND?: examattemptScalarWhereWithAggregatesInput | examattemptScalarWhereWithAggregatesInput[]
    OR?: examattemptScalarWhereWithAggregatesInput[]
    NOT?: examattemptScalarWhereWithAggregatesInput | examattemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"examattempt"> | string
    score?: FloatWithAggregatesFilter<"examattempt"> | number
    attemptDate?: DateTimeWithAggregatesFilter<"examattempt"> | Date | string
    studentId?: StringWithAggregatesFilter<"examattempt"> | string
    examId?: StringWithAggregatesFilter<"examattempt"> | string
    createdAt?: DateTimeWithAggregatesFilter<"examattempt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"examattempt"> | Date | string
  }

  export type moduleWhereInput = {
    AND?: moduleWhereInput | moduleWhereInput[]
    OR?: moduleWhereInput[]
    NOT?: moduleWhereInput | moduleWhereInput[]
    id?: StringFilter<"module"> | string
    title?: StringFilter<"module"> | string
    content?: StringFilter<"module"> | string
    courseId?: StringFilter<"module"> | string
    createdAt?: DateTimeFilter<"module"> | Date | string
    updatedAt?: DateTimeFilter<"module"> | Date | string
    exam?: ExamListRelationFilter
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    moduleprogress?: ModuleprogressListRelationFilter
  }

  export type moduleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exam?: examOrderByRelationAggregateInput
    course?: courseOrderByWithRelationInput
    moduleprogress?: moduleprogressOrderByRelationAggregateInput
    _relevance?: moduleOrderByRelevanceInput
  }

  export type moduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: moduleWhereInput | moduleWhereInput[]
    OR?: moduleWhereInput[]
    NOT?: moduleWhereInput | moduleWhereInput[]
    title?: StringFilter<"module"> | string
    content?: StringFilter<"module"> | string
    courseId?: StringFilter<"module"> | string
    createdAt?: DateTimeFilter<"module"> | Date | string
    updatedAt?: DateTimeFilter<"module"> | Date | string
    exam?: ExamListRelationFilter
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    moduleprogress?: ModuleprogressListRelationFilter
  }, "id">

  export type moduleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: moduleCountOrderByAggregateInput
    _max?: moduleMaxOrderByAggregateInput
    _min?: moduleMinOrderByAggregateInput
  }

  export type moduleScalarWhereWithAggregatesInput = {
    AND?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[]
    OR?: moduleScalarWhereWithAggregatesInput[]
    NOT?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"module"> | string
    title?: StringWithAggregatesFilter<"module"> | string
    content?: StringWithAggregatesFilter<"module"> | string
    courseId?: StringWithAggregatesFilter<"module"> | string
    createdAt?: DateTimeWithAggregatesFilter<"module"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"module"> | Date | string
  }

  export type moduleprogressWhereInput = {
    AND?: moduleprogressWhereInput | moduleprogressWhereInput[]
    OR?: moduleprogressWhereInput[]
    NOT?: moduleprogressWhereInput | moduleprogressWhereInput[]
    id?: StringFilter<"moduleprogress"> | string
    studentId?: StringFilter<"moduleprogress"> | string
    moduleId?: StringFilter<"moduleprogress"> | string
    progress?: FloatFilter<"moduleprogress"> | number
    lastUpdated?: DateTimeFilter<"moduleprogress"> | Date | string
    createdAt?: DateTimeFilter<"moduleprogress"> | Date | string
    updatedAt?: DateTimeFilter<"moduleprogress"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }

  export type moduleprogressOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
    progress?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    module?: moduleOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
    _relevance?: moduleprogressOrderByRelevanceInput
  }

  export type moduleprogressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: moduleprogressWhereInput | moduleprogressWhereInput[]
    OR?: moduleprogressWhereInput[]
    NOT?: moduleprogressWhereInput | moduleprogressWhereInput[]
    studentId?: StringFilter<"moduleprogress"> | string
    moduleId?: StringFilter<"moduleprogress"> | string
    progress?: FloatFilter<"moduleprogress"> | number
    lastUpdated?: DateTimeFilter<"moduleprogress"> | Date | string
    createdAt?: DateTimeFilter<"moduleprogress"> | Date | string
    updatedAt?: DateTimeFilter<"moduleprogress"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }, "id">

  export type moduleprogressOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
    progress?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: moduleprogressCountOrderByAggregateInput
    _avg?: moduleprogressAvgOrderByAggregateInput
    _max?: moduleprogressMaxOrderByAggregateInput
    _min?: moduleprogressMinOrderByAggregateInput
    _sum?: moduleprogressSumOrderByAggregateInput
  }

  export type moduleprogressScalarWhereWithAggregatesInput = {
    AND?: moduleprogressScalarWhereWithAggregatesInput | moduleprogressScalarWhereWithAggregatesInput[]
    OR?: moduleprogressScalarWhereWithAggregatesInput[]
    NOT?: moduleprogressScalarWhereWithAggregatesInput | moduleprogressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"moduleprogress"> | string
    studentId?: StringWithAggregatesFilter<"moduleprogress"> | string
    moduleId?: StringWithAggregatesFilter<"moduleprogress"> | string
    progress?: FloatWithAggregatesFilter<"moduleprogress"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"moduleprogress"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"moduleprogress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"moduleprogress"> | Date | string
  }

  export type questionWhereInput = {
    AND?: questionWhereInput | questionWhereInput[]
    OR?: questionWhereInput[]
    NOT?: questionWhereInput | questionWhereInput[]
    id?: StringFilter<"question"> | string
    questionNo?: StringFilter<"question"> | string
    content?: StringFilter<"question"> | string
    examId?: StringFilter<"question"> | string
    createdAt?: DateTimeFilter<"question"> | Date | string
    updatedAt?: DateTimeFilter<"question"> | Date | string
    exam?: XOR<ExamScalarRelationFilter, examWhereInput>
    questionoption?: QuestionoptionListRelationFilter
  }

  export type questionOrderByWithRelationInput = {
    id?: SortOrder
    questionNo?: SortOrder
    content?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exam?: examOrderByWithRelationInput
    questionoption?: questionoptionOrderByRelationAggregateInput
    _relevance?: questionOrderByRelevanceInput
  }

  export type questionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: questionWhereInput | questionWhereInput[]
    OR?: questionWhereInput[]
    NOT?: questionWhereInput | questionWhereInput[]
    questionNo?: StringFilter<"question"> | string
    content?: StringFilter<"question"> | string
    examId?: StringFilter<"question"> | string
    createdAt?: DateTimeFilter<"question"> | Date | string
    updatedAt?: DateTimeFilter<"question"> | Date | string
    exam?: XOR<ExamScalarRelationFilter, examWhereInput>
    questionoption?: QuestionoptionListRelationFilter
  }, "id">

  export type questionOrderByWithAggregationInput = {
    id?: SortOrder
    questionNo?: SortOrder
    content?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: questionCountOrderByAggregateInput
    _max?: questionMaxOrderByAggregateInput
    _min?: questionMinOrderByAggregateInput
  }

  export type questionScalarWhereWithAggregatesInput = {
    AND?: questionScalarWhereWithAggregatesInput | questionScalarWhereWithAggregatesInput[]
    OR?: questionScalarWhereWithAggregatesInput[]
    NOT?: questionScalarWhereWithAggregatesInput | questionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"question"> | string
    questionNo?: StringWithAggregatesFilter<"question"> | string
    content?: StringWithAggregatesFilter<"question"> | string
    examId?: StringWithAggregatesFilter<"question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"question"> | Date | string
  }

  export type questionoptionWhereInput = {
    AND?: questionoptionWhereInput | questionoptionWhereInput[]
    OR?: questionoptionWhereInput[]
    NOT?: questionoptionWhereInput | questionoptionWhereInput[]
    id?: StringFilter<"questionoption"> | string
    option?: StringFilter<"questionoption"> | string
    content?: StringFilter<"questionoption"> | string
    questionId?: StringFilter<"questionoption"> | string
    isCorrect?: BoolFilter<"questionoption"> | boolean
    createdAt?: DateTimeFilter<"questionoption"> | Date | string
    updatedAt?: DateTimeFilter<"questionoption"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, questionWhereInput>
  }

  export type questionoptionOrderByWithRelationInput = {
    id?: SortOrder
    option?: SortOrder
    content?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: questionOrderByWithRelationInput
    _relevance?: questionoptionOrderByRelevanceInput
  }

  export type questionoptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: questionoptionWhereInput | questionoptionWhereInput[]
    OR?: questionoptionWhereInput[]
    NOT?: questionoptionWhereInput | questionoptionWhereInput[]
    option?: StringFilter<"questionoption"> | string
    content?: StringFilter<"questionoption"> | string
    questionId?: StringFilter<"questionoption"> | string
    isCorrect?: BoolFilter<"questionoption"> | boolean
    createdAt?: DateTimeFilter<"questionoption"> | Date | string
    updatedAt?: DateTimeFilter<"questionoption"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, questionWhereInput>
  }, "id">

  export type questionoptionOrderByWithAggregationInput = {
    id?: SortOrder
    option?: SortOrder
    content?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: questionoptionCountOrderByAggregateInput
    _max?: questionoptionMaxOrderByAggregateInput
    _min?: questionoptionMinOrderByAggregateInput
  }

  export type questionoptionScalarWhereWithAggregatesInput = {
    AND?: questionoptionScalarWhereWithAggregatesInput | questionoptionScalarWhereWithAggregatesInput[]
    OR?: questionoptionScalarWhereWithAggregatesInput[]
    NOT?: questionoptionScalarWhereWithAggregatesInput | questionoptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"questionoption"> | string
    option?: StringWithAggregatesFilter<"questionoption"> | string
    content?: StringWithAggregatesFilter<"questionoption"> | string
    questionId?: StringWithAggregatesFilter<"questionoption"> | string
    isCorrect?: BoolWithAggregatesFilter<"questionoption"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"questionoption"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"questionoption"> | Date | string
  }

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    id?: StringFilter<"student"> | string
    studentId?: StringFilter<"student"> | string
    createdAt?: DateTimeFilter<"student"> | Date | string
    updatedAt?: DateTimeFilter<"student"> | Date | string
    courseprogress?: CourseprogressListRelationFilter
    enrollment?: EnrollmentListRelationFilter
    examattempt?: ExamattemptListRelationFilter
    moduleprogress?: ModuleprogressListRelationFilter
    wpos_wpdatatable_23?: XOR<Wpos_wpdatatable_23ScalarRelationFilter, wpos_wpdatatable_23WhereInput>
  }

  export type studentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseprogress?: courseprogressOrderByRelationAggregateInput
    enrollment?: enrollmentOrderByRelationAggregateInput
    examattempt?: examattemptOrderByRelationAggregateInput
    moduleprogress?: moduleprogressOrderByRelationAggregateInput
    wpos_wpdatatable_23?: wpos_wpdatatable_23OrderByWithRelationInput
    _relevance?: studentOrderByRelevanceInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    createdAt?: DateTimeFilter<"student"> | Date | string
    updatedAt?: DateTimeFilter<"student"> | Date | string
    courseprogress?: CourseprogressListRelationFilter
    enrollment?: EnrollmentListRelationFilter
    examattempt?: ExamattemptListRelationFilter
    moduleprogress?: ModuleprogressListRelationFilter
    wpos_wpdatatable_23?: XOR<Wpos_wpdatatable_23ScalarRelationFilter, wpos_wpdatatable_23WhereInput>
  }, "id" | "studentId">

  export type studentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: studentCountOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"student"> | string
    studentId?: StringWithAggregatesFilter<"student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"student"> | Date | string
  }

  export type teacherWhereInput = {
    AND?: teacherWhereInput | teacherWhereInput[]
    OR?: teacherWhereInput[]
    NOT?: teacherWhereInput | teacherWhereInput[]
    id?: StringFilter<"teacher"> | string
    name?: StringFilter<"teacher"> | string
    passcode?: StringFilter<"teacher"> | string
    phoneno?: StringFilter<"teacher"> | string
    createdAt?: DateTimeFilter<"teacher"> | Date | string
    updatedAt?: DateTimeFilter<"teacher"> | Date | string
    course?: CourseListRelationFilter
  }

  export type teacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: courseOrderByRelationAggregateInput
    _relevance?: teacherOrderByRelevanceInput
  }

  export type teacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneno?: string
    AND?: teacherWhereInput | teacherWhereInput[]
    OR?: teacherWhereInput[]
    NOT?: teacherWhereInput | teacherWhereInput[]
    name?: StringFilter<"teacher"> | string
    passcode?: StringFilter<"teacher"> | string
    createdAt?: DateTimeFilter<"teacher"> | Date | string
    updatedAt?: DateTimeFilter<"teacher"> | Date | string
    course?: CourseListRelationFilter
  }, "id" | "phoneno">

  export type teacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: teacherCountOrderByAggregateInput
    _max?: teacherMaxOrderByAggregateInput
    _min?: teacherMinOrderByAggregateInput
  }

  export type teacherScalarWhereWithAggregatesInput = {
    AND?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[]
    OR?: teacherScalarWhereWithAggregatesInput[]
    NOT?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"teacher"> | string
    name?: StringWithAggregatesFilter<"teacher"> | string
    passcode?: StringWithAggregatesFilter<"teacher"> | string
    phoneno?: StringWithAggregatesFilter<"teacher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"teacher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"teacher"> | Date | string
  }

  export type wpos_wpdatatable_23WhereInput = {
    AND?: wpos_wpdatatable_23WhereInput | wpos_wpdatatable_23WhereInput[]
    OR?: wpos_wpdatatable_23WhereInput[]
    NOT?: wpos_wpdatatable_23WhereInput | wpos_wpdatatable_23WhereInput[]
    wdt_ID?: StringFilter<"wpos_wpdatatable_23"> | string
    name?: StringFilter<"wpos_wpdatatable_23"> | string
    passcode?: StringFilter<"wpos_wpdatatable_23"> | string
    phoneno?: StringFilter<"wpos_wpdatatable_23"> | string
    status?: StringFilter<"wpos_wpdatatable_23"> | string
    startdate?: DateTimeFilter<"wpos_wpdatatable_23"> | Date | string
    chat_id?: StringFilter<"wpos_wpdatatable_23"> | string
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
  }

  export type wpos_wpdatatable_23OrderByWithRelationInput = {
    wdt_ID?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    status?: SortOrder
    startdate?: SortOrder
    chat_id?: SortOrder
    student?: studentOrderByWithRelationInput
    _relevance?: wpos_wpdatatable_23OrderByRelevanceInput
  }

  export type wpos_wpdatatable_23WhereUniqueInput = Prisma.AtLeast<{
    wdt_ID?: string
    phoneno?: string
    AND?: wpos_wpdatatable_23WhereInput | wpos_wpdatatable_23WhereInput[]
    OR?: wpos_wpdatatable_23WhereInput[]
    NOT?: wpos_wpdatatable_23WhereInput | wpos_wpdatatable_23WhereInput[]
    name?: StringFilter<"wpos_wpdatatable_23"> | string
    passcode?: StringFilter<"wpos_wpdatatable_23"> | string
    status?: StringFilter<"wpos_wpdatatable_23"> | string
    startdate?: DateTimeFilter<"wpos_wpdatatable_23"> | Date | string
    chat_id?: StringFilter<"wpos_wpdatatable_23"> | string
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
  }, "wdt_ID" | "phoneno">

  export type wpos_wpdatatable_23OrderByWithAggregationInput = {
    wdt_ID?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    status?: SortOrder
    startdate?: SortOrder
    chat_id?: SortOrder
    _count?: wpos_wpdatatable_23CountOrderByAggregateInput
    _max?: wpos_wpdatatable_23MaxOrderByAggregateInput
    _min?: wpos_wpdatatable_23MinOrderByAggregateInput
  }

  export type wpos_wpdatatable_23ScalarWhereWithAggregatesInput = {
    AND?: wpos_wpdatatable_23ScalarWhereWithAggregatesInput | wpos_wpdatatable_23ScalarWhereWithAggregatesInput[]
    OR?: wpos_wpdatatable_23ScalarWhereWithAggregatesInput[]
    NOT?: wpos_wpdatatable_23ScalarWhereWithAggregatesInput | wpos_wpdatatable_23ScalarWhereWithAggregatesInput[]
    wdt_ID?: StringWithAggregatesFilter<"wpos_wpdatatable_23"> | string
    name?: StringWithAggregatesFilter<"wpos_wpdatatable_23"> | string
    passcode?: StringWithAggregatesFilter<"wpos_wpdatatable_23"> | string
    phoneno?: StringWithAggregatesFilter<"wpos_wpdatatable_23"> | string
    status?: StringWithAggregatesFilter<"wpos_wpdatatable_23"> | string
    startdate?: DateTimeWithAggregatesFilter<"wpos_wpdatatable_23"> | Date | string
    chat_id?: StringWithAggregatesFilter<"wpos_wpdatatable_23"> | string
  }

  export type adminCreateInput = {
    id: string
    name: string
    passcode: string
    phoneno: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type adminUncheckedCreateInput = {
    id: string
    name: string
    passcode: string
    phoneno: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type adminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id: string
    name: string
    passcode: string
    phoneno: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type adminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseCreateInput = {
    id: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
    teacher?: teacherCreateNestedOneWithoutCourseInput
    courseprogress?: courseprogressCreateNestedManyWithoutCourseInput
    enrollment?: enrollmentCreateNestedManyWithoutCourseInput
    module?: moduleCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateInput = {
    id: string
    title: string
    description?: string | null
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
    courseprogress?: courseprogressUncheckedCreateNestedManyWithoutCourseInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutCourseInput
    module?: moduleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: teacherUpdateOneWithoutCourseNestedInput
    courseprogress?: courseprogressUpdateManyWithoutCourseNestedInput
    enrollment?: enrollmentUpdateManyWithoutCourseNestedInput
    module?: moduleUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courseprogress?: courseprogressUncheckedUpdateManyWithoutCourseNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput
    module?: moduleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateManyInput = {
    id: string
    title: string
    description?: string | null
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
  }

  export type courseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type courseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type courseprogressCreateInput = {
    id: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    course: courseCreateNestedOneWithoutCourseprogressInput
    student: studentCreateNestedOneWithoutCourseprogressInput
  }

  export type courseprogressUncheckedCreateInput = {
    id: string
    progress?: number
    studentId: string
    courseId: string
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type courseprogressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: courseUpdateOneRequiredWithoutCourseprogressNestedInput
    student?: studentUpdateOneRequiredWithoutCourseprogressNestedInput
  }

  export type courseprogressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseprogressCreateManyInput = {
    id: string
    progress?: number
    studentId: string
    courseId: string
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type courseprogressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseprogressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enrollmentCreateInput = {
    id: string
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    url: string
    course: courseCreateNestedOneWithoutEnrollmentInput
    student: studentCreateNestedOneWithoutEnrollmentInput
  }

  export type enrollmentUncheckedCreateInput = {
    id: string
    enrolledAt?: Date | string
    courseId: string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
    url: string
  }

  export type enrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    course?: courseUpdateOneRequiredWithoutEnrollmentNestedInput
    student?: studentUpdateOneRequiredWithoutEnrollmentNestedInput
  }

  export type enrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type enrollmentCreateManyInput = {
    id: string
    enrolledAt?: Date | string
    courseId: string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
    url: string
  }

  export type enrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type enrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type examCreateInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt: Date | string
    module: moduleCreateNestedOneWithoutExamInput
    examattempt?: examattemptCreateNestedManyWithoutExamInput
    question?: questionCreateNestedManyWithoutExamInput
  }

  export type examUncheckedCreateInput = {
    id: string
    title: string
    moduleId: string
    createdAt?: Date | string
    updatedAt: Date | string
    examattempt?: examattemptUncheckedCreateNestedManyWithoutExamInput
    question?: questionUncheckedCreateNestedManyWithoutExamInput
  }

  export type examUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: moduleUpdateOneRequiredWithoutExamNestedInput
    examattempt?: examattemptUpdateManyWithoutExamNestedInput
    question?: questionUpdateManyWithoutExamNestedInput
  }

  export type examUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examattempt?: examattemptUncheckedUpdateManyWithoutExamNestedInput
    question?: questionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type examCreateManyInput = {
    id: string
    title: string
    moduleId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type examUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type examUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type examattemptCreateInput = {
    id: string
    score: number
    attemptDate?: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    exam: examCreateNestedOneWithoutExamattemptInput
    student: studentCreateNestedOneWithoutExamattemptInput
  }

  export type examattemptUncheckedCreateInput = {
    id: string
    score: number
    attemptDate?: Date | string
    studentId: string
    examId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type examattemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    attemptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: examUpdateOneRequiredWithoutExamattemptNestedInput
    student?: studentUpdateOneRequiredWithoutExamattemptNestedInput
  }

  export type examattemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    attemptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type examattemptCreateManyInput = {
    id: string
    score: number
    attemptDate?: Date | string
    studentId: string
    examId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type examattemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    attemptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type examattemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    attemptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type moduleCreateInput = {
    id: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    exam?: examCreateNestedManyWithoutModuleInput
    course: courseCreateNestedOneWithoutModuleInput
    moduleprogress?: moduleprogressCreateNestedManyWithoutModuleInput
  }

  export type moduleUncheckedCreateInput = {
    id: string
    title: string
    content: string
    courseId: string
    createdAt?: Date | string
    updatedAt: Date | string
    exam?: examUncheckedCreateNestedManyWithoutModuleInput
    moduleprogress?: moduleprogressUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: examUpdateManyWithoutModuleNestedInput
    course?: courseUpdateOneRequiredWithoutModuleNestedInput
    moduleprogress?: moduleprogressUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: examUncheckedUpdateManyWithoutModuleNestedInput
    moduleprogress?: moduleprogressUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type moduleCreateManyInput = {
    id: string
    title: string
    content: string
    courseId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type moduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type moduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type moduleprogressCreateInput = {
    id: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    module: moduleCreateNestedOneWithoutModuleprogressInput
    student: studentCreateNestedOneWithoutModuleprogressInput
  }

  export type moduleprogressUncheckedCreateInput = {
    id: string
    studentId: string
    moduleId: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type moduleprogressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: moduleUpdateOneRequiredWithoutModuleprogressNestedInput
    student?: studentUpdateOneRequiredWithoutModuleprogressNestedInput
  }

  export type moduleprogressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type moduleprogressCreateManyInput = {
    id: string
    studentId: string
    moduleId: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type moduleprogressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type moduleprogressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionCreateInput = {
    id: string
    questionNo: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    exam: examCreateNestedOneWithoutQuestionInput
    questionoption?: questionoptionCreateNestedManyWithoutQuestionInput
  }

  export type questionUncheckedCreateInput = {
    id: string
    questionNo: string
    content: string
    examId: string
    createdAt?: Date | string
    updatedAt: Date | string
    questionoption?: questionoptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type questionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionNo?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: examUpdateOneRequiredWithoutQuestionNestedInput
    questionoption?: questionoptionUpdateManyWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionNo?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionoption?: questionoptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type questionCreateManyInput = {
    id: string
    questionNo: string
    content: string
    examId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type questionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionNo?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionNo?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionoptionCreateInput = {
    id: string
    option: string
    content: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
    question: questionCreateNestedOneWithoutQuestionoptionInput
  }

  export type questionoptionUncheckedCreateInput = {
    id: string
    option: string
    content: string
    questionId: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type questionoptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: questionUpdateOneRequiredWithoutQuestionoptionNestedInput
  }

  export type questionoptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionoptionCreateManyInput = {
    id: string
    option: string
    content: string
    questionId: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type questionoptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionoptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    courseprogress?: courseprogressCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput
    examattempt?: examattemptCreateNestedManyWithoutStudentInput
    moduleprogress?: moduleprogressCreateNestedManyWithoutStudentInput
    wpos_wpdatatable_23: wpos_wpdatatable_23CreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateInput = {
    id: string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
    courseprogress?: courseprogressUncheckedCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput
    examattempt?: examattemptUncheckedCreateNestedManyWithoutStudentInput
    moduleprogress?: moduleprogressUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseprogress?: courseprogressUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput
    examattempt?: examattemptUpdateManyWithoutStudentNestedInput
    moduleprogress?: moduleprogressUpdateManyWithoutStudentNestedInput
    wpos_wpdatatable_23?: wpos_wpdatatable_23UpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseprogress?: courseprogressUncheckedUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput
    examattempt?: examattemptUncheckedUpdateManyWithoutStudentNestedInput
    moduleprogress?: moduleprogressUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    id: string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type studentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teacherCreateInput = {
    id: string
    name: string
    passcode: string
    phoneno: string
    createdAt?: Date | string
    updatedAt: Date | string
    course?: courseCreateNestedManyWithoutTeacherInput
  }

  export type teacherUncheckedCreateInput = {
    id: string
    name: string
    passcode: string
    phoneno: string
    createdAt?: Date | string
    updatedAt: Date | string
    course?: courseUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type teacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: courseUpdateManyWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: courseUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type teacherCreateManyInput = {
    id: string
    name: string
    passcode: string
    phoneno: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type teacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type wpos_wpdatatable_23CreateInput = {
    wdt_ID: string
    name: string
    passcode: string
    phoneno: string
    status: string
    startdate?: Date | string
    chat_id: string
    student?: studentCreateNestedOneWithoutWpos_wpdatatable_23Input
  }

  export type wpos_wpdatatable_23UncheckedCreateInput = {
    wdt_ID: string
    name: string
    passcode: string
    phoneno: string
    status: string
    startdate?: Date | string
    chat_id: string
    student?: studentUncheckedCreateNestedOneWithoutWpos_wpdatatable_23Input
  }

  export type wpos_wpdatatable_23UpdateInput = {
    wdt_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_id?: StringFieldUpdateOperationsInput | string
    student?: studentUpdateOneWithoutWpos_wpdatatable_23NestedInput
  }

  export type wpos_wpdatatable_23UncheckedUpdateInput = {
    wdt_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_id?: StringFieldUpdateOperationsInput | string
    student?: studentUncheckedUpdateOneWithoutWpos_wpdatatable_23NestedInput
  }

  export type wpos_wpdatatable_23CreateManyInput = {
    wdt_ID: string
    name: string
    passcode: string
    phoneno: string
    status: string
    startdate?: Date | string
    chat_id: string
  }

  export type wpos_wpdatatable_23UpdateManyMutationInput = {
    wdt_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_id?: StringFieldUpdateOperationsInput | string
  }

  export type wpos_wpdatatable_23UncheckedUpdateManyInput = {
    wdt_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: teacherWhereInput | null
    isNot?: teacherWhereInput | null
  }

  export type CourseprogressListRelationFilter = {
    every?: courseprogressWhereInput
    some?: courseprogressWhereInput
    none?: courseprogressWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: enrollmentWhereInput
    some?: enrollmentWhereInput
    none?: enrollmentWhereInput
  }

  export type ModuleListRelationFilter = {
    every?: moduleWhereInput
    some?: moduleWhereInput
    none?: moduleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type courseprogressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type enrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type moduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type courseOrderByRelevanceInput = {
    fields: courseOrderByRelevanceFieldEnum | courseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type courseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type courseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type courseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CourseScalarRelationFilter = {
    is?: courseWhereInput
    isNot?: courseWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type courseprogressOrderByRelevanceInput = {
    fields: courseprogressOrderByRelevanceFieldEnum | courseprogressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type courseprogressCountOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type courseprogressAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type courseprogressMaxOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type courseprogressMinOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type courseprogressSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type enrollmentOrderByRelevanceInput = {
    fields: enrollmentOrderByRelevanceFieldEnum | enrollmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type enrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    enrolledAt?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
  }

  export type enrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    enrolledAt?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
  }

  export type enrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    enrolledAt?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
  }

  export type ModuleScalarRelationFilter = {
    is?: moduleWhereInput
    isNot?: moduleWhereInput
  }

  export type ExamattemptListRelationFilter = {
    every?: examattemptWhereInput
    some?: examattemptWhereInput
    none?: examattemptWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: questionWhereInput
    some?: questionWhereInput
    none?: questionWhereInput
  }

  export type examattemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type examOrderByRelevanceInput = {
    fields: examOrderByRelevanceFieldEnum | examOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type examCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type examMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type examMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamScalarRelationFilter = {
    is?: examWhereInput
    isNot?: examWhereInput
  }

  export type examattemptOrderByRelevanceInput = {
    fields: examattemptOrderByRelevanceFieldEnum | examattemptOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type examattemptCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    attemptDate?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type examattemptAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type examattemptMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    attemptDate?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type examattemptMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    attemptDate?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type examattemptSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type ExamListRelationFilter = {
    every?: examWhereInput
    some?: examWhereInput
    none?: examWhereInput
  }

  export type ModuleprogressListRelationFilter = {
    every?: moduleprogressWhereInput
    some?: moduleprogressWhereInput
    none?: moduleprogressWhereInput
  }

  export type examOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type moduleprogressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type moduleOrderByRelevanceInput = {
    fields: moduleOrderByRelevanceFieldEnum | moduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type moduleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type moduleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type moduleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type moduleprogressOrderByRelevanceInput = {
    fields: moduleprogressOrderByRelevanceFieldEnum | moduleprogressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type moduleprogressCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
    progress?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type moduleprogressAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type moduleprogressMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
    progress?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type moduleprogressMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    moduleId?: SortOrder
    progress?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type moduleprogressSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type QuestionoptionListRelationFilter = {
    every?: questionoptionWhereInput
    some?: questionoptionWhereInput
    none?: questionoptionWhereInput
  }

  export type questionoptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionOrderByRelevanceInput = {
    fields: questionOrderByRelevanceFieldEnum | questionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type questionCountOrderByAggregateInput = {
    id?: SortOrder
    questionNo?: SortOrder
    content?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type questionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionNo?: SortOrder
    content?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type questionMinOrderByAggregateInput = {
    id?: SortOrder
    questionNo?: SortOrder
    content?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestionScalarRelationFilter = {
    is?: questionWhereInput
    isNot?: questionWhereInput
  }

  export type questionoptionOrderByRelevanceInput = {
    fields: questionoptionOrderByRelevanceFieldEnum | questionoptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type questionoptionCountOrderByAggregateInput = {
    id?: SortOrder
    option?: SortOrder
    content?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type questionoptionMaxOrderByAggregateInput = {
    id?: SortOrder
    option?: SortOrder
    content?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type questionoptionMinOrderByAggregateInput = {
    id?: SortOrder
    option?: SortOrder
    content?: SortOrder
    questionId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Wpos_wpdatatable_23ScalarRelationFilter = {
    is?: wpos_wpdatatable_23WhereInput
    isNot?: wpos_wpdatatable_23WhereInput
  }

  export type studentOrderByRelevanceInput = {
    fields: studentOrderByRelevanceFieldEnum | studentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type studentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseListRelationFilter = {
    every?: courseWhereInput
    some?: courseWhereInput
    none?: courseWhereInput
  }

  export type courseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teacherOrderByRelevanceInput = {
    fields: teacherOrderByRelevanceFieldEnum | teacherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type teacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type teacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type teacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentNullableScalarRelationFilter = {
    is?: studentWhereInput | null
    isNot?: studentWhereInput | null
  }

  export type wpos_wpdatatable_23OrderByRelevanceInput = {
    fields: wpos_wpdatatable_23OrderByRelevanceFieldEnum | wpos_wpdatatable_23OrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type wpos_wpdatatable_23CountOrderByAggregateInput = {
    wdt_ID?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    status?: SortOrder
    startdate?: SortOrder
    chat_id?: SortOrder
  }

  export type wpos_wpdatatable_23MaxOrderByAggregateInput = {
    wdt_ID?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    status?: SortOrder
    startdate?: SortOrder
    chat_id?: SortOrder
  }

  export type wpos_wpdatatable_23MinOrderByAggregateInput = {
    wdt_ID?: SortOrder
    name?: SortOrder
    passcode?: SortOrder
    phoneno?: SortOrder
    status?: SortOrder
    startdate?: SortOrder
    chat_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type teacherCreateNestedOneWithoutCourseInput = {
    create?: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>
    connectOrCreate?: teacherCreateOrConnectWithoutCourseInput
    connect?: teacherWhereUniqueInput
  }

  export type courseprogressCreateNestedManyWithoutCourseInput = {
    create?: XOR<courseprogressCreateWithoutCourseInput, courseprogressUncheckedCreateWithoutCourseInput> | courseprogressCreateWithoutCourseInput[] | courseprogressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: courseprogressCreateOrConnectWithoutCourseInput | courseprogressCreateOrConnectWithoutCourseInput[]
    createMany?: courseprogressCreateManyCourseInputEnvelope
    connect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
  }

  export type enrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput> | enrollmentCreateWithoutCourseInput[] | enrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: enrollmentCreateManyCourseInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type moduleCreateNestedManyWithoutCourseInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
  }

  export type courseprogressUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<courseprogressCreateWithoutCourseInput, courseprogressUncheckedCreateWithoutCourseInput> | courseprogressCreateWithoutCourseInput[] | courseprogressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: courseprogressCreateOrConnectWithoutCourseInput | courseprogressCreateOrConnectWithoutCourseInput[]
    createMany?: courseprogressCreateManyCourseInputEnvelope
    connect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
  }

  export type enrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput> | enrollmentCreateWithoutCourseInput[] | enrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: enrollmentCreateManyCourseInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type moduleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type teacherUpdateOneWithoutCourseNestedInput = {
    create?: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>
    connectOrCreate?: teacherCreateOrConnectWithoutCourseInput
    upsert?: teacherUpsertWithoutCourseInput
    disconnect?: teacherWhereInput | boolean
    delete?: teacherWhereInput | boolean
    connect?: teacherWhereUniqueInput
    update?: XOR<XOR<teacherUpdateToOneWithWhereWithoutCourseInput, teacherUpdateWithoutCourseInput>, teacherUncheckedUpdateWithoutCourseInput>
  }

  export type courseprogressUpdateManyWithoutCourseNestedInput = {
    create?: XOR<courseprogressCreateWithoutCourseInput, courseprogressUncheckedCreateWithoutCourseInput> | courseprogressCreateWithoutCourseInput[] | courseprogressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: courseprogressCreateOrConnectWithoutCourseInput | courseprogressCreateOrConnectWithoutCourseInput[]
    upsert?: courseprogressUpsertWithWhereUniqueWithoutCourseInput | courseprogressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: courseprogressCreateManyCourseInputEnvelope
    set?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    disconnect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    delete?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    connect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    update?: courseprogressUpdateWithWhereUniqueWithoutCourseInput | courseprogressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: courseprogressUpdateManyWithWhereWithoutCourseInput | courseprogressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: courseprogressScalarWhereInput | courseprogressScalarWhereInput[]
  }

  export type enrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput> | enrollmentCreateWithoutCourseInput[] | enrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutCourseInput | enrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: enrollmentCreateManyCourseInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutCourseInput | enrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutCourseInput | enrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type moduleUpdateManyWithoutCourseNestedInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    upsert?: moduleUpsertWithWhereUniqueWithoutCourseInput | moduleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    update?: moduleUpdateWithWhereUniqueWithoutCourseInput | moduleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: moduleUpdateManyWithWhereWithoutCourseInput | moduleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[]
  }

  export type courseprogressUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<courseprogressCreateWithoutCourseInput, courseprogressUncheckedCreateWithoutCourseInput> | courseprogressCreateWithoutCourseInput[] | courseprogressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: courseprogressCreateOrConnectWithoutCourseInput | courseprogressCreateOrConnectWithoutCourseInput[]
    upsert?: courseprogressUpsertWithWhereUniqueWithoutCourseInput | courseprogressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: courseprogressCreateManyCourseInputEnvelope
    set?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    disconnect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    delete?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    connect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    update?: courseprogressUpdateWithWhereUniqueWithoutCourseInput | courseprogressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: courseprogressUpdateManyWithWhereWithoutCourseInput | courseprogressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: courseprogressScalarWhereInput | courseprogressScalarWhereInput[]
  }

  export type enrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput> | enrollmentCreateWithoutCourseInput[] | enrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutCourseInput | enrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: enrollmentCreateManyCourseInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutCourseInput | enrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutCourseInput | enrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type moduleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    upsert?: moduleUpsertWithWhereUniqueWithoutCourseInput | moduleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    update?: moduleUpdateWithWhereUniqueWithoutCourseInput | moduleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: moduleUpdateManyWithWhereWithoutCourseInput | moduleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[]
  }

  export type courseCreateNestedOneWithoutCourseprogressInput = {
    create?: XOR<courseCreateWithoutCourseprogressInput, courseUncheckedCreateWithoutCourseprogressInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseprogressInput
    connect?: courseWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutCourseprogressInput = {
    create?: XOR<studentCreateWithoutCourseprogressInput, studentUncheckedCreateWithoutCourseprogressInput>
    connectOrCreate?: studentCreateOrConnectWithoutCourseprogressInput
    connect?: studentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type courseUpdateOneRequiredWithoutCourseprogressNestedInput = {
    create?: XOR<courseCreateWithoutCourseprogressInput, courseUncheckedCreateWithoutCourseprogressInput>
    connectOrCreate?: courseCreateOrConnectWithoutCourseprogressInput
    upsert?: courseUpsertWithoutCourseprogressInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutCourseprogressInput, courseUpdateWithoutCourseprogressInput>, courseUncheckedUpdateWithoutCourseprogressInput>
  }

  export type studentUpdateOneRequiredWithoutCourseprogressNestedInput = {
    create?: XOR<studentCreateWithoutCourseprogressInput, studentUncheckedCreateWithoutCourseprogressInput>
    connectOrCreate?: studentCreateOrConnectWithoutCourseprogressInput
    upsert?: studentUpsertWithoutCourseprogressInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutCourseprogressInput, studentUpdateWithoutCourseprogressInput>, studentUncheckedUpdateWithoutCourseprogressInput>
  }

  export type courseCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<courseCreateWithoutEnrollmentInput, courseUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: courseCreateOrConnectWithoutEnrollmentInput
    connect?: courseWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: studentCreateOrConnectWithoutEnrollmentInput
    connect?: studentWhereUniqueInput
  }

  export type courseUpdateOneRequiredWithoutEnrollmentNestedInput = {
    create?: XOR<courseCreateWithoutEnrollmentInput, courseUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: courseCreateOrConnectWithoutEnrollmentInput
    upsert?: courseUpsertWithoutEnrollmentInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutEnrollmentInput, courseUpdateWithoutEnrollmentInput>, courseUncheckedUpdateWithoutEnrollmentInput>
  }

  export type studentUpdateOneRequiredWithoutEnrollmentNestedInput = {
    create?: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: studentCreateOrConnectWithoutEnrollmentInput
    upsert?: studentUpsertWithoutEnrollmentInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutEnrollmentInput, studentUpdateWithoutEnrollmentInput>, studentUncheckedUpdateWithoutEnrollmentInput>
  }

  export type moduleCreateNestedOneWithoutExamInput = {
    create?: XOR<moduleCreateWithoutExamInput, moduleUncheckedCreateWithoutExamInput>
    connectOrCreate?: moduleCreateOrConnectWithoutExamInput
    connect?: moduleWhereUniqueInput
  }

  export type examattemptCreateNestedManyWithoutExamInput = {
    create?: XOR<examattemptCreateWithoutExamInput, examattemptUncheckedCreateWithoutExamInput> | examattemptCreateWithoutExamInput[] | examattemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: examattemptCreateOrConnectWithoutExamInput | examattemptCreateOrConnectWithoutExamInput[]
    createMany?: examattemptCreateManyExamInputEnvelope
    connect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
  }

  export type questionCreateNestedManyWithoutExamInput = {
    create?: XOR<questionCreateWithoutExamInput, questionUncheckedCreateWithoutExamInput> | questionCreateWithoutExamInput[] | questionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: questionCreateOrConnectWithoutExamInput | questionCreateOrConnectWithoutExamInput[]
    createMany?: questionCreateManyExamInputEnvelope
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
  }

  export type examattemptUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<examattemptCreateWithoutExamInput, examattemptUncheckedCreateWithoutExamInput> | examattemptCreateWithoutExamInput[] | examattemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: examattemptCreateOrConnectWithoutExamInput | examattemptCreateOrConnectWithoutExamInput[]
    createMany?: examattemptCreateManyExamInputEnvelope
    connect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
  }

  export type questionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<questionCreateWithoutExamInput, questionUncheckedCreateWithoutExamInput> | questionCreateWithoutExamInput[] | questionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: questionCreateOrConnectWithoutExamInput | questionCreateOrConnectWithoutExamInput[]
    createMany?: questionCreateManyExamInputEnvelope
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
  }

  export type moduleUpdateOneRequiredWithoutExamNestedInput = {
    create?: XOR<moduleCreateWithoutExamInput, moduleUncheckedCreateWithoutExamInput>
    connectOrCreate?: moduleCreateOrConnectWithoutExamInput
    upsert?: moduleUpsertWithoutExamInput
    connect?: moduleWhereUniqueInput
    update?: XOR<XOR<moduleUpdateToOneWithWhereWithoutExamInput, moduleUpdateWithoutExamInput>, moduleUncheckedUpdateWithoutExamInput>
  }

  export type examattemptUpdateManyWithoutExamNestedInput = {
    create?: XOR<examattemptCreateWithoutExamInput, examattemptUncheckedCreateWithoutExamInput> | examattemptCreateWithoutExamInput[] | examattemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: examattemptCreateOrConnectWithoutExamInput | examattemptCreateOrConnectWithoutExamInput[]
    upsert?: examattemptUpsertWithWhereUniqueWithoutExamInput | examattemptUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: examattemptCreateManyExamInputEnvelope
    set?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    disconnect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    delete?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    connect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    update?: examattemptUpdateWithWhereUniqueWithoutExamInput | examattemptUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: examattemptUpdateManyWithWhereWithoutExamInput | examattemptUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: examattemptScalarWhereInput | examattemptScalarWhereInput[]
  }

  export type questionUpdateManyWithoutExamNestedInput = {
    create?: XOR<questionCreateWithoutExamInput, questionUncheckedCreateWithoutExamInput> | questionCreateWithoutExamInput[] | questionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: questionCreateOrConnectWithoutExamInput | questionCreateOrConnectWithoutExamInput[]
    upsert?: questionUpsertWithWhereUniqueWithoutExamInput | questionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: questionCreateManyExamInputEnvelope
    set?: questionWhereUniqueInput | questionWhereUniqueInput[]
    disconnect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    delete?: questionWhereUniqueInput | questionWhereUniqueInput[]
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    update?: questionUpdateWithWhereUniqueWithoutExamInput | questionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: questionUpdateManyWithWhereWithoutExamInput | questionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: questionScalarWhereInput | questionScalarWhereInput[]
  }

  export type examattemptUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<examattemptCreateWithoutExamInput, examattemptUncheckedCreateWithoutExamInput> | examattemptCreateWithoutExamInput[] | examattemptUncheckedCreateWithoutExamInput[]
    connectOrCreate?: examattemptCreateOrConnectWithoutExamInput | examattemptCreateOrConnectWithoutExamInput[]
    upsert?: examattemptUpsertWithWhereUniqueWithoutExamInput | examattemptUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: examattemptCreateManyExamInputEnvelope
    set?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    disconnect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    delete?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    connect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    update?: examattemptUpdateWithWhereUniqueWithoutExamInput | examattemptUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: examattemptUpdateManyWithWhereWithoutExamInput | examattemptUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: examattemptScalarWhereInput | examattemptScalarWhereInput[]
  }

  export type questionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<questionCreateWithoutExamInput, questionUncheckedCreateWithoutExamInput> | questionCreateWithoutExamInput[] | questionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: questionCreateOrConnectWithoutExamInput | questionCreateOrConnectWithoutExamInput[]
    upsert?: questionUpsertWithWhereUniqueWithoutExamInput | questionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: questionCreateManyExamInputEnvelope
    set?: questionWhereUniqueInput | questionWhereUniqueInput[]
    disconnect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    delete?: questionWhereUniqueInput | questionWhereUniqueInput[]
    connect?: questionWhereUniqueInput | questionWhereUniqueInput[]
    update?: questionUpdateWithWhereUniqueWithoutExamInput | questionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: questionUpdateManyWithWhereWithoutExamInput | questionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: questionScalarWhereInput | questionScalarWhereInput[]
  }

  export type examCreateNestedOneWithoutExamattemptInput = {
    create?: XOR<examCreateWithoutExamattemptInput, examUncheckedCreateWithoutExamattemptInput>
    connectOrCreate?: examCreateOrConnectWithoutExamattemptInput
    connect?: examWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutExamattemptInput = {
    create?: XOR<studentCreateWithoutExamattemptInput, studentUncheckedCreateWithoutExamattemptInput>
    connectOrCreate?: studentCreateOrConnectWithoutExamattemptInput
    connect?: studentWhereUniqueInput
  }

  export type examUpdateOneRequiredWithoutExamattemptNestedInput = {
    create?: XOR<examCreateWithoutExamattemptInput, examUncheckedCreateWithoutExamattemptInput>
    connectOrCreate?: examCreateOrConnectWithoutExamattemptInput
    upsert?: examUpsertWithoutExamattemptInput
    connect?: examWhereUniqueInput
    update?: XOR<XOR<examUpdateToOneWithWhereWithoutExamattemptInput, examUpdateWithoutExamattemptInput>, examUncheckedUpdateWithoutExamattemptInput>
  }

  export type studentUpdateOneRequiredWithoutExamattemptNestedInput = {
    create?: XOR<studentCreateWithoutExamattemptInput, studentUncheckedCreateWithoutExamattemptInput>
    connectOrCreate?: studentCreateOrConnectWithoutExamattemptInput
    upsert?: studentUpsertWithoutExamattemptInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutExamattemptInput, studentUpdateWithoutExamattemptInput>, studentUncheckedUpdateWithoutExamattemptInput>
  }

  export type examCreateNestedManyWithoutModuleInput = {
    create?: XOR<examCreateWithoutModuleInput, examUncheckedCreateWithoutModuleInput> | examCreateWithoutModuleInput[] | examUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: examCreateOrConnectWithoutModuleInput | examCreateOrConnectWithoutModuleInput[]
    createMany?: examCreateManyModuleInputEnvelope
    connect?: examWhereUniqueInput | examWhereUniqueInput[]
  }

  export type courseCreateNestedOneWithoutModuleInput = {
    create?: XOR<courseCreateWithoutModuleInput, courseUncheckedCreateWithoutModuleInput>
    connectOrCreate?: courseCreateOrConnectWithoutModuleInput
    connect?: courseWhereUniqueInput
  }

  export type moduleprogressCreateNestedManyWithoutModuleInput = {
    create?: XOR<moduleprogressCreateWithoutModuleInput, moduleprogressUncheckedCreateWithoutModuleInput> | moduleprogressCreateWithoutModuleInput[] | moduleprogressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: moduleprogressCreateOrConnectWithoutModuleInput | moduleprogressCreateOrConnectWithoutModuleInput[]
    createMany?: moduleprogressCreateManyModuleInputEnvelope
    connect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
  }

  export type examUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<examCreateWithoutModuleInput, examUncheckedCreateWithoutModuleInput> | examCreateWithoutModuleInput[] | examUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: examCreateOrConnectWithoutModuleInput | examCreateOrConnectWithoutModuleInput[]
    createMany?: examCreateManyModuleInputEnvelope
    connect?: examWhereUniqueInput | examWhereUniqueInput[]
  }

  export type moduleprogressUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<moduleprogressCreateWithoutModuleInput, moduleprogressUncheckedCreateWithoutModuleInput> | moduleprogressCreateWithoutModuleInput[] | moduleprogressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: moduleprogressCreateOrConnectWithoutModuleInput | moduleprogressCreateOrConnectWithoutModuleInput[]
    createMany?: moduleprogressCreateManyModuleInputEnvelope
    connect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
  }

  export type examUpdateManyWithoutModuleNestedInput = {
    create?: XOR<examCreateWithoutModuleInput, examUncheckedCreateWithoutModuleInput> | examCreateWithoutModuleInput[] | examUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: examCreateOrConnectWithoutModuleInput | examCreateOrConnectWithoutModuleInput[]
    upsert?: examUpsertWithWhereUniqueWithoutModuleInput | examUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: examCreateManyModuleInputEnvelope
    set?: examWhereUniqueInput | examWhereUniqueInput[]
    disconnect?: examWhereUniqueInput | examWhereUniqueInput[]
    delete?: examWhereUniqueInput | examWhereUniqueInput[]
    connect?: examWhereUniqueInput | examWhereUniqueInput[]
    update?: examUpdateWithWhereUniqueWithoutModuleInput | examUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: examUpdateManyWithWhereWithoutModuleInput | examUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: examScalarWhereInput | examScalarWhereInput[]
  }

  export type courseUpdateOneRequiredWithoutModuleNestedInput = {
    create?: XOR<courseCreateWithoutModuleInput, courseUncheckedCreateWithoutModuleInput>
    connectOrCreate?: courseCreateOrConnectWithoutModuleInput
    upsert?: courseUpsertWithoutModuleInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutModuleInput, courseUpdateWithoutModuleInput>, courseUncheckedUpdateWithoutModuleInput>
  }

  export type moduleprogressUpdateManyWithoutModuleNestedInput = {
    create?: XOR<moduleprogressCreateWithoutModuleInput, moduleprogressUncheckedCreateWithoutModuleInput> | moduleprogressCreateWithoutModuleInput[] | moduleprogressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: moduleprogressCreateOrConnectWithoutModuleInput | moduleprogressCreateOrConnectWithoutModuleInput[]
    upsert?: moduleprogressUpsertWithWhereUniqueWithoutModuleInput | moduleprogressUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: moduleprogressCreateManyModuleInputEnvelope
    set?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    disconnect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    delete?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    connect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    update?: moduleprogressUpdateWithWhereUniqueWithoutModuleInput | moduleprogressUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: moduleprogressUpdateManyWithWhereWithoutModuleInput | moduleprogressUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: moduleprogressScalarWhereInput | moduleprogressScalarWhereInput[]
  }

  export type examUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<examCreateWithoutModuleInput, examUncheckedCreateWithoutModuleInput> | examCreateWithoutModuleInput[] | examUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: examCreateOrConnectWithoutModuleInput | examCreateOrConnectWithoutModuleInput[]
    upsert?: examUpsertWithWhereUniqueWithoutModuleInput | examUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: examCreateManyModuleInputEnvelope
    set?: examWhereUniqueInput | examWhereUniqueInput[]
    disconnect?: examWhereUniqueInput | examWhereUniqueInput[]
    delete?: examWhereUniqueInput | examWhereUniqueInput[]
    connect?: examWhereUniqueInput | examWhereUniqueInput[]
    update?: examUpdateWithWhereUniqueWithoutModuleInput | examUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: examUpdateManyWithWhereWithoutModuleInput | examUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: examScalarWhereInput | examScalarWhereInput[]
  }

  export type moduleprogressUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<moduleprogressCreateWithoutModuleInput, moduleprogressUncheckedCreateWithoutModuleInput> | moduleprogressCreateWithoutModuleInput[] | moduleprogressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: moduleprogressCreateOrConnectWithoutModuleInput | moduleprogressCreateOrConnectWithoutModuleInput[]
    upsert?: moduleprogressUpsertWithWhereUniqueWithoutModuleInput | moduleprogressUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: moduleprogressCreateManyModuleInputEnvelope
    set?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    disconnect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    delete?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    connect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    update?: moduleprogressUpdateWithWhereUniqueWithoutModuleInput | moduleprogressUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: moduleprogressUpdateManyWithWhereWithoutModuleInput | moduleprogressUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: moduleprogressScalarWhereInput | moduleprogressScalarWhereInput[]
  }

  export type moduleCreateNestedOneWithoutModuleprogressInput = {
    create?: XOR<moduleCreateWithoutModuleprogressInput, moduleUncheckedCreateWithoutModuleprogressInput>
    connectOrCreate?: moduleCreateOrConnectWithoutModuleprogressInput
    connect?: moduleWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutModuleprogressInput = {
    create?: XOR<studentCreateWithoutModuleprogressInput, studentUncheckedCreateWithoutModuleprogressInput>
    connectOrCreate?: studentCreateOrConnectWithoutModuleprogressInput
    connect?: studentWhereUniqueInput
  }

  export type moduleUpdateOneRequiredWithoutModuleprogressNestedInput = {
    create?: XOR<moduleCreateWithoutModuleprogressInput, moduleUncheckedCreateWithoutModuleprogressInput>
    connectOrCreate?: moduleCreateOrConnectWithoutModuleprogressInput
    upsert?: moduleUpsertWithoutModuleprogressInput
    connect?: moduleWhereUniqueInput
    update?: XOR<XOR<moduleUpdateToOneWithWhereWithoutModuleprogressInput, moduleUpdateWithoutModuleprogressInput>, moduleUncheckedUpdateWithoutModuleprogressInput>
  }

  export type studentUpdateOneRequiredWithoutModuleprogressNestedInput = {
    create?: XOR<studentCreateWithoutModuleprogressInput, studentUncheckedCreateWithoutModuleprogressInput>
    connectOrCreate?: studentCreateOrConnectWithoutModuleprogressInput
    upsert?: studentUpsertWithoutModuleprogressInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutModuleprogressInput, studentUpdateWithoutModuleprogressInput>, studentUncheckedUpdateWithoutModuleprogressInput>
  }

  export type examCreateNestedOneWithoutQuestionInput = {
    create?: XOR<examCreateWithoutQuestionInput, examUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: examCreateOrConnectWithoutQuestionInput
    connect?: examWhereUniqueInput
  }

  export type questionoptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<questionoptionCreateWithoutQuestionInput, questionoptionUncheckedCreateWithoutQuestionInput> | questionoptionCreateWithoutQuestionInput[] | questionoptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: questionoptionCreateOrConnectWithoutQuestionInput | questionoptionCreateOrConnectWithoutQuestionInput[]
    createMany?: questionoptionCreateManyQuestionInputEnvelope
    connect?: questionoptionWhereUniqueInput | questionoptionWhereUniqueInput[]
  }

  export type questionoptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<questionoptionCreateWithoutQuestionInput, questionoptionUncheckedCreateWithoutQuestionInput> | questionoptionCreateWithoutQuestionInput[] | questionoptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: questionoptionCreateOrConnectWithoutQuestionInput | questionoptionCreateOrConnectWithoutQuestionInput[]
    createMany?: questionoptionCreateManyQuestionInputEnvelope
    connect?: questionoptionWhereUniqueInput | questionoptionWhereUniqueInput[]
  }

  export type examUpdateOneRequiredWithoutQuestionNestedInput = {
    create?: XOR<examCreateWithoutQuestionInput, examUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: examCreateOrConnectWithoutQuestionInput
    upsert?: examUpsertWithoutQuestionInput
    connect?: examWhereUniqueInput
    update?: XOR<XOR<examUpdateToOneWithWhereWithoutQuestionInput, examUpdateWithoutQuestionInput>, examUncheckedUpdateWithoutQuestionInput>
  }

  export type questionoptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<questionoptionCreateWithoutQuestionInput, questionoptionUncheckedCreateWithoutQuestionInput> | questionoptionCreateWithoutQuestionInput[] | questionoptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: questionoptionCreateOrConnectWithoutQuestionInput | questionoptionCreateOrConnectWithoutQuestionInput[]
    upsert?: questionoptionUpsertWithWhereUniqueWithoutQuestionInput | questionoptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: questionoptionCreateManyQuestionInputEnvelope
    set?: questionoptionWhereUniqueInput | questionoptionWhereUniqueInput[]
    disconnect?: questionoptionWhereUniqueInput | questionoptionWhereUniqueInput[]
    delete?: questionoptionWhereUniqueInput | questionoptionWhereUniqueInput[]
    connect?: questionoptionWhereUniqueInput | questionoptionWhereUniqueInput[]
    update?: questionoptionUpdateWithWhereUniqueWithoutQuestionInput | questionoptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: questionoptionUpdateManyWithWhereWithoutQuestionInput | questionoptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: questionoptionScalarWhereInput | questionoptionScalarWhereInput[]
  }

  export type questionoptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<questionoptionCreateWithoutQuestionInput, questionoptionUncheckedCreateWithoutQuestionInput> | questionoptionCreateWithoutQuestionInput[] | questionoptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: questionoptionCreateOrConnectWithoutQuestionInput | questionoptionCreateOrConnectWithoutQuestionInput[]
    upsert?: questionoptionUpsertWithWhereUniqueWithoutQuestionInput | questionoptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: questionoptionCreateManyQuestionInputEnvelope
    set?: questionoptionWhereUniqueInput | questionoptionWhereUniqueInput[]
    disconnect?: questionoptionWhereUniqueInput | questionoptionWhereUniqueInput[]
    delete?: questionoptionWhereUniqueInput | questionoptionWhereUniqueInput[]
    connect?: questionoptionWhereUniqueInput | questionoptionWhereUniqueInput[]
    update?: questionoptionUpdateWithWhereUniqueWithoutQuestionInput | questionoptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: questionoptionUpdateManyWithWhereWithoutQuestionInput | questionoptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: questionoptionScalarWhereInput | questionoptionScalarWhereInput[]
  }

  export type questionCreateNestedOneWithoutQuestionoptionInput = {
    create?: XOR<questionCreateWithoutQuestionoptionInput, questionUncheckedCreateWithoutQuestionoptionInput>
    connectOrCreate?: questionCreateOrConnectWithoutQuestionoptionInput
    connect?: questionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type questionUpdateOneRequiredWithoutQuestionoptionNestedInput = {
    create?: XOR<questionCreateWithoutQuestionoptionInput, questionUncheckedCreateWithoutQuestionoptionInput>
    connectOrCreate?: questionCreateOrConnectWithoutQuestionoptionInput
    upsert?: questionUpsertWithoutQuestionoptionInput
    connect?: questionWhereUniqueInput
    update?: XOR<XOR<questionUpdateToOneWithWhereWithoutQuestionoptionInput, questionUpdateWithoutQuestionoptionInput>, questionUncheckedUpdateWithoutQuestionoptionInput>
  }

  export type courseprogressCreateNestedManyWithoutStudentInput = {
    create?: XOR<courseprogressCreateWithoutStudentInput, courseprogressUncheckedCreateWithoutStudentInput> | courseprogressCreateWithoutStudentInput[] | courseprogressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: courseprogressCreateOrConnectWithoutStudentInput | courseprogressCreateOrConnectWithoutStudentInput[]
    createMany?: courseprogressCreateManyStudentInputEnvelope
    connect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
  }

  export type enrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput> | enrollmentCreateWithoutStudentInput[] | enrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: enrollmentCreateManyStudentInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type examattemptCreateNestedManyWithoutStudentInput = {
    create?: XOR<examattemptCreateWithoutStudentInput, examattemptUncheckedCreateWithoutStudentInput> | examattemptCreateWithoutStudentInput[] | examattemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: examattemptCreateOrConnectWithoutStudentInput | examattemptCreateOrConnectWithoutStudentInput[]
    createMany?: examattemptCreateManyStudentInputEnvelope
    connect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
  }

  export type moduleprogressCreateNestedManyWithoutStudentInput = {
    create?: XOR<moduleprogressCreateWithoutStudentInput, moduleprogressUncheckedCreateWithoutStudentInput> | moduleprogressCreateWithoutStudentInput[] | moduleprogressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: moduleprogressCreateOrConnectWithoutStudentInput | moduleprogressCreateOrConnectWithoutStudentInput[]
    createMany?: moduleprogressCreateManyStudentInputEnvelope
    connect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
  }

  export type wpos_wpdatatable_23CreateNestedOneWithoutStudentInput = {
    create?: XOR<wpos_wpdatatable_23CreateWithoutStudentInput, wpos_wpdatatable_23UncheckedCreateWithoutStudentInput>
    connectOrCreate?: wpos_wpdatatable_23CreateOrConnectWithoutStudentInput
    connect?: wpos_wpdatatable_23WhereUniqueInput
  }

  export type courseprogressUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<courseprogressCreateWithoutStudentInput, courseprogressUncheckedCreateWithoutStudentInput> | courseprogressCreateWithoutStudentInput[] | courseprogressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: courseprogressCreateOrConnectWithoutStudentInput | courseprogressCreateOrConnectWithoutStudentInput[]
    createMany?: courseprogressCreateManyStudentInputEnvelope
    connect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
  }

  export type enrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput> | enrollmentCreateWithoutStudentInput[] | enrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: enrollmentCreateManyStudentInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type examattemptUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<examattemptCreateWithoutStudentInput, examattemptUncheckedCreateWithoutStudentInput> | examattemptCreateWithoutStudentInput[] | examattemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: examattemptCreateOrConnectWithoutStudentInput | examattemptCreateOrConnectWithoutStudentInput[]
    createMany?: examattemptCreateManyStudentInputEnvelope
    connect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
  }

  export type moduleprogressUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<moduleprogressCreateWithoutStudentInput, moduleprogressUncheckedCreateWithoutStudentInput> | moduleprogressCreateWithoutStudentInput[] | moduleprogressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: moduleprogressCreateOrConnectWithoutStudentInput | moduleprogressCreateOrConnectWithoutStudentInput[]
    createMany?: moduleprogressCreateManyStudentInputEnvelope
    connect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
  }

  export type courseprogressUpdateManyWithoutStudentNestedInput = {
    create?: XOR<courseprogressCreateWithoutStudentInput, courseprogressUncheckedCreateWithoutStudentInput> | courseprogressCreateWithoutStudentInput[] | courseprogressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: courseprogressCreateOrConnectWithoutStudentInput | courseprogressCreateOrConnectWithoutStudentInput[]
    upsert?: courseprogressUpsertWithWhereUniqueWithoutStudentInput | courseprogressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: courseprogressCreateManyStudentInputEnvelope
    set?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    disconnect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    delete?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    connect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    update?: courseprogressUpdateWithWhereUniqueWithoutStudentInput | courseprogressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: courseprogressUpdateManyWithWhereWithoutStudentInput | courseprogressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: courseprogressScalarWhereInput | courseprogressScalarWhereInput[]
  }

  export type enrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput> | enrollmentCreateWithoutStudentInput[] | enrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutStudentInput | enrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: enrollmentCreateManyStudentInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutStudentInput | enrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutStudentInput | enrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type examattemptUpdateManyWithoutStudentNestedInput = {
    create?: XOR<examattemptCreateWithoutStudentInput, examattemptUncheckedCreateWithoutStudentInput> | examattemptCreateWithoutStudentInput[] | examattemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: examattemptCreateOrConnectWithoutStudentInput | examattemptCreateOrConnectWithoutStudentInput[]
    upsert?: examattemptUpsertWithWhereUniqueWithoutStudentInput | examattemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: examattemptCreateManyStudentInputEnvelope
    set?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    disconnect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    delete?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    connect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    update?: examattemptUpdateWithWhereUniqueWithoutStudentInput | examattemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: examattemptUpdateManyWithWhereWithoutStudentInput | examattemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: examattemptScalarWhereInput | examattemptScalarWhereInput[]
  }

  export type moduleprogressUpdateManyWithoutStudentNestedInput = {
    create?: XOR<moduleprogressCreateWithoutStudentInput, moduleprogressUncheckedCreateWithoutStudentInput> | moduleprogressCreateWithoutStudentInput[] | moduleprogressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: moduleprogressCreateOrConnectWithoutStudentInput | moduleprogressCreateOrConnectWithoutStudentInput[]
    upsert?: moduleprogressUpsertWithWhereUniqueWithoutStudentInput | moduleprogressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: moduleprogressCreateManyStudentInputEnvelope
    set?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    disconnect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    delete?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    connect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    update?: moduleprogressUpdateWithWhereUniqueWithoutStudentInput | moduleprogressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: moduleprogressUpdateManyWithWhereWithoutStudentInput | moduleprogressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: moduleprogressScalarWhereInput | moduleprogressScalarWhereInput[]
  }

  export type wpos_wpdatatable_23UpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<wpos_wpdatatable_23CreateWithoutStudentInput, wpos_wpdatatable_23UncheckedCreateWithoutStudentInput>
    connectOrCreate?: wpos_wpdatatable_23CreateOrConnectWithoutStudentInput
    upsert?: wpos_wpdatatable_23UpsertWithoutStudentInput
    connect?: wpos_wpdatatable_23WhereUniqueInput
    update?: XOR<XOR<wpos_wpdatatable_23UpdateToOneWithWhereWithoutStudentInput, wpos_wpdatatable_23UpdateWithoutStudentInput>, wpos_wpdatatable_23UncheckedUpdateWithoutStudentInput>
  }

  export type courseprogressUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<courseprogressCreateWithoutStudentInput, courseprogressUncheckedCreateWithoutStudentInput> | courseprogressCreateWithoutStudentInput[] | courseprogressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: courseprogressCreateOrConnectWithoutStudentInput | courseprogressCreateOrConnectWithoutStudentInput[]
    upsert?: courseprogressUpsertWithWhereUniqueWithoutStudentInput | courseprogressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: courseprogressCreateManyStudentInputEnvelope
    set?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    disconnect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    delete?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    connect?: courseprogressWhereUniqueInput | courseprogressWhereUniqueInput[]
    update?: courseprogressUpdateWithWhereUniqueWithoutStudentInput | courseprogressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: courseprogressUpdateManyWithWhereWithoutStudentInput | courseprogressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: courseprogressScalarWhereInput | courseprogressScalarWhereInput[]
  }

  export type enrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput> | enrollmentCreateWithoutStudentInput[] | enrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutStudentInput | enrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: enrollmentCreateManyStudentInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutStudentInput | enrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutStudentInput | enrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type examattemptUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<examattemptCreateWithoutStudentInput, examattemptUncheckedCreateWithoutStudentInput> | examattemptCreateWithoutStudentInput[] | examattemptUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: examattemptCreateOrConnectWithoutStudentInput | examattemptCreateOrConnectWithoutStudentInput[]
    upsert?: examattemptUpsertWithWhereUniqueWithoutStudentInput | examattemptUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: examattemptCreateManyStudentInputEnvelope
    set?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    disconnect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    delete?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    connect?: examattemptWhereUniqueInput | examattemptWhereUniqueInput[]
    update?: examattemptUpdateWithWhereUniqueWithoutStudentInput | examattemptUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: examattemptUpdateManyWithWhereWithoutStudentInput | examattemptUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: examattemptScalarWhereInput | examattemptScalarWhereInput[]
  }

  export type moduleprogressUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<moduleprogressCreateWithoutStudentInput, moduleprogressUncheckedCreateWithoutStudentInput> | moduleprogressCreateWithoutStudentInput[] | moduleprogressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: moduleprogressCreateOrConnectWithoutStudentInput | moduleprogressCreateOrConnectWithoutStudentInput[]
    upsert?: moduleprogressUpsertWithWhereUniqueWithoutStudentInput | moduleprogressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: moduleprogressCreateManyStudentInputEnvelope
    set?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    disconnect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    delete?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    connect?: moduleprogressWhereUniqueInput | moduleprogressWhereUniqueInput[]
    update?: moduleprogressUpdateWithWhereUniqueWithoutStudentInput | moduleprogressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: moduleprogressUpdateManyWithWhereWithoutStudentInput | moduleprogressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: moduleprogressScalarWhereInput | moduleprogressScalarWhereInput[]
  }

  export type courseCreateNestedManyWithoutTeacherInput = {
    create?: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput> | courseCreateWithoutTeacherInput[] | courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[]
    createMany?: courseCreateManyTeacherInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type courseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput> | courseCreateWithoutTeacherInput[] | courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[]
    createMany?: courseCreateManyTeacherInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type courseUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput> | courseCreateWithoutTeacherInput[] | courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutTeacherInput | courseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: courseCreateManyTeacherInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutTeacherInput | courseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: courseUpdateManyWithWhereWithoutTeacherInput | courseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type courseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput> | courseCreateWithoutTeacherInput[] | courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutTeacherInput | courseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: courseCreateManyTeacherInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutTeacherInput | courseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: courseUpdateManyWithWhereWithoutTeacherInput | courseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type studentCreateNestedOneWithoutWpos_wpdatatable_23Input = {
    create?: XOR<studentCreateWithoutWpos_wpdatatable_23Input, studentUncheckedCreateWithoutWpos_wpdatatable_23Input>
    connectOrCreate?: studentCreateOrConnectWithoutWpos_wpdatatable_23Input
    connect?: studentWhereUniqueInput
  }

  export type studentUncheckedCreateNestedOneWithoutWpos_wpdatatable_23Input = {
    create?: XOR<studentCreateWithoutWpos_wpdatatable_23Input, studentUncheckedCreateWithoutWpos_wpdatatable_23Input>
    connectOrCreate?: studentCreateOrConnectWithoutWpos_wpdatatable_23Input
    connect?: studentWhereUniqueInput
  }

  export type studentUpdateOneWithoutWpos_wpdatatable_23NestedInput = {
    create?: XOR<studentCreateWithoutWpos_wpdatatable_23Input, studentUncheckedCreateWithoutWpos_wpdatatable_23Input>
    connectOrCreate?: studentCreateOrConnectWithoutWpos_wpdatatable_23Input
    upsert?: studentUpsertWithoutWpos_wpdatatable_23Input
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutWpos_wpdatatable_23Input, studentUpdateWithoutWpos_wpdatatable_23Input>, studentUncheckedUpdateWithoutWpos_wpdatatable_23Input>
  }

  export type studentUncheckedUpdateOneWithoutWpos_wpdatatable_23NestedInput = {
    create?: XOR<studentCreateWithoutWpos_wpdatatable_23Input, studentUncheckedCreateWithoutWpos_wpdatatable_23Input>
    connectOrCreate?: studentCreateOrConnectWithoutWpos_wpdatatable_23Input
    upsert?: studentUpsertWithoutWpos_wpdatatable_23Input
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutWpos_wpdatatable_23Input, studentUpdateWithoutWpos_wpdatatable_23Input>, studentUncheckedUpdateWithoutWpos_wpdatatable_23Input>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type teacherCreateWithoutCourseInput = {
    id: string
    name: string
    passcode: string
    phoneno: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type teacherUncheckedCreateWithoutCourseInput = {
    id: string
    name: string
    passcode: string
    phoneno: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type teacherCreateOrConnectWithoutCourseInput = {
    where: teacherWhereUniqueInput
    create: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>
  }

  export type courseprogressCreateWithoutCourseInput = {
    id: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    student: studentCreateNestedOneWithoutCourseprogressInput
  }

  export type courseprogressUncheckedCreateWithoutCourseInput = {
    id: string
    progress?: number
    studentId: string
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type courseprogressCreateOrConnectWithoutCourseInput = {
    where: courseprogressWhereUniqueInput
    create: XOR<courseprogressCreateWithoutCourseInput, courseprogressUncheckedCreateWithoutCourseInput>
  }

  export type courseprogressCreateManyCourseInputEnvelope = {
    data: courseprogressCreateManyCourseInput | courseprogressCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type enrollmentCreateWithoutCourseInput = {
    id: string
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    url: string
    student: studentCreateNestedOneWithoutEnrollmentInput
  }

  export type enrollmentUncheckedCreateWithoutCourseInput = {
    id: string
    enrolledAt?: Date | string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
    url: string
  }

  export type enrollmentCreateOrConnectWithoutCourseInput = {
    where: enrollmentWhereUniqueInput
    create: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput>
  }

  export type enrollmentCreateManyCourseInputEnvelope = {
    data: enrollmentCreateManyCourseInput | enrollmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type moduleCreateWithoutCourseInput = {
    id: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    exam?: examCreateNestedManyWithoutModuleInput
    moduleprogress?: moduleprogressCreateNestedManyWithoutModuleInput
  }

  export type moduleUncheckedCreateWithoutCourseInput = {
    id: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    exam?: examUncheckedCreateNestedManyWithoutModuleInput
    moduleprogress?: moduleprogressUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutCourseInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput>
  }

  export type moduleCreateManyCourseInputEnvelope = {
    data: moduleCreateManyCourseInput | moduleCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type teacherUpsertWithoutCourseInput = {
    update: XOR<teacherUpdateWithoutCourseInput, teacherUncheckedUpdateWithoutCourseInput>
    create: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>
    where?: teacherWhereInput
  }

  export type teacherUpdateToOneWithWhereWithoutCourseInput = {
    where?: teacherWhereInput
    data: XOR<teacherUpdateWithoutCourseInput, teacherUncheckedUpdateWithoutCourseInput>
  }

  export type teacherUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teacherUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseprogressUpsertWithWhereUniqueWithoutCourseInput = {
    where: courseprogressWhereUniqueInput
    update: XOR<courseprogressUpdateWithoutCourseInput, courseprogressUncheckedUpdateWithoutCourseInput>
    create: XOR<courseprogressCreateWithoutCourseInput, courseprogressUncheckedCreateWithoutCourseInput>
  }

  export type courseprogressUpdateWithWhereUniqueWithoutCourseInput = {
    where: courseprogressWhereUniqueInput
    data: XOR<courseprogressUpdateWithoutCourseInput, courseprogressUncheckedUpdateWithoutCourseInput>
  }

  export type courseprogressUpdateManyWithWhereWithoutCourseInput = {
    where: courseprogressScalarWhereInput
    data: XOR<courseprogressUpdateManyMutationInput, courseprogressUncheckedUpdateManyWithoutCourseInput>
  }

  export type courseprogressScalarWhereInput = {
    AND?: courseprogressScalarWhereInput | courseprogressScalarWhereInput[]
    OR?: courseprogressScalarWhereInput[]
    NOT?: courseprogressScalarWhereInput | courseprogressScalarWhereInput[]
    id?: StringFilter<"courseprogress"> | string
    progress?: FloatFilter<"courseprogress"> | number
    studentId?: StringFilter<"courseprogress"> | string
    courseId?: StringFilter<"courseprogress"> | string
    lastUpdated?: DateTimeFilter<"courseprogress"> | Date | string
    createdAt?: DateTimeFilter<"courseprogress"> | Date | string
    updatedAt?: DateTimeFilter<"courseprogress"> | Date | string
  }

  export type enrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: enrollmentWhereUniqueInput
    update: XOR<enrollmentUpdateWithoutCourseInput, enrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput>
  }

  export type enrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: enrollmentWhereUniqueInput
    data: XOR<enrollmentUpdateWithoutCourseInput, enrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type enrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: enrollmentScalarWhereInput
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type enrollmentScalarWhereInput = {
    AND?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
    OR?: enrollmentScalarWhereInput[]
    NOT?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
    id?: StringFilter<"enrollment"> | string
    enrolledAt?: DateTimeFilter<"enrollment"> | Date | string
    courseId?: StringFilter<"enrollment"> | string
    studentId?: StringFilter<"enrollment"> | string
    createdAt?: DateTimeFilter<"enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"enrollment"> | Date | string
    url?: StringFilter<"enrollment"> | string
  }

  export type moduleUpsertWithWhereUniqueWithoutCourseInput = {
    where: moduleWhereUniqueInput
    update: XOR<moduleUpdateWithoutCourseInput, moduleUncheckedUpdateWithoutCourseInput>
    create: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput>
  }

  export type moduleUpdateWithWhereUniqueWithoutCourseInput = {
    where: moduleWhereUniqueInput
    data: XOR<moduleUpdateWithoutCourseInput, moduleUncheckedUpdateWithoutCourseInput>
  }

  export type moduleUpdateManyWithWhereWithoutCourseInput = {
    where: moduleScalarWhereInput
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyWithoutCourseInput>
  }

  export type moduleScalarWhereInput = {
    AND?: moduleScalarWhereInput | moduleScalarWhereInput[]
    OR?: moduleScalarWhereInput[]
    NOT?: moduleScalarWhereInput | moduleScalarWhereInput[]
    id?: StringFilter<"module"> | string
    title?: StringFilter<"module"> | string
    content?: StringFilter<"module"> | string
    courseId?: StringFilter<"module"> | string
    createdAt?: DateTimeFilter<"module"> | Date | string
    updatedAt?: DateTimeFilter<"module"> | Date | string
  }

  export type courseCreateWithoutCourseprogressInput = {
    id: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
    teacher?: teacherCreateNestedOneWithoutCourseInput
    enrollment?: enrollmentCreateNestedManyWithoutCourseInput
    module?: moduleCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutCourseprogressInput = {
    id: string
    title: string
    description?: string | null
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutCourseInput
    module?: moduleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutCourseprogressInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutCourseprogressInput, courseUncheckedCreateWithoutCourseprogressInput>
  }

  export type studentCreateWithoutCourseprogressInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput
    examattempt?: examattemptCreateNestedManyWithoutStudentInput
    moduleprogress?: moduleprogressCreateNestedManyWithoutStudentInput
    wpos_wpdatatable_23: wpos_wpdatatable_23CreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutCourseprogressInput = {
    id: string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput
    examattempt?: examattemptUncheckedCreateNestedManyWithoutStudentInput
    moduleprogress?: moduleprogressUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutCourseprogressInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutCourseprogressInput, studentUncheckedCreateWithoutCourseprogressInput>
  }

  export type courseUpsertWithoutCourseprogressInput = {
    update: XOR<courseUpdateWithoutCourseprogressInput, courseUncheckedUpdateWithoutCourseprogressInput>
    create: XOR<courseCreateWithoutCourseprogressInput, courseUncheckedCreateWithoutCourseprogressInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutCourseprogressInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutCourseprogressInput, courseUncheckedUpdateWithoutCourseprogressInput>
  }

  export type courseUpdateWithoutCourseprogressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: teacherUpdateOneWithoutCourseNestedInput
    enrollment?: enrollmentUpdateManyWithoutCourseNestedInput
    module?: moduleUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutCourseprogressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    enrollment?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput
    module?: moduleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type studentUpsertWithoutCourseprogressInput = {
    update: XOR<studentUpdateWithoutCourseprogressInput, studentUncheckedUpdateWithoutCourseprogressInput>
    create: XOR<studentCreateWithoutCourseprogressInput, studentUncheckedCreateWithoutCourseprogressInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutCourseprogressInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutCourseprogressInput, studentUncheckedUpdateWithoutCourseprogressInput>
  }

  export type studentUpdateWithoutCourseprogressInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput
    examattempt?: examattemptUpdateManyWithoutStudentNestedInput
    moduleprogress?: moduleprogressUpdateManyWithoutStudentNestedInput
    wpos_wpdatatable_23?: wpos_wpdatatable_23UpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutCourseprogressInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput
    examattempt?: examattemptUncheckedUpdateManyWithoutStudentNestedInput
    moduleprogress?: moduleprogressUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type courseCreateWithoutEnrollmentInput = {
    id: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
    teacher?: teacherCreateNestedOneWithoutCourseInput
    courseprogress?: courseprogressCreateNestedManyWithoutCourseInput
    module?: moduleCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutEnrollmentInput = {
    id: string
    title: string
    description?: string | null
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
    courseprogress?: courseprogressUncheckedCreateNestedManyWithoutCourseInput
    module?: moduleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutEnrollmentInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutEnrollmentInput, courseUncheckedCreateWithoutEnrollmentInput>
  }

  export type studentCreateWithoutEnrollmentInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    courseprogress?: courseprogressCreateNestedManyWithoutStudentInput
    examattempt?: examattemptCreateNestedManyWithoutStudentInput
    moduleprogress?: moduleprogressCreateNestedManyWithoutStudentInput
    wpos_wpdatatable_23: wpos_wpdatatable_23CreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutEnrollmentInput = {
    id: string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
    courseprogress?: courseprogressUncheckedCreateNestedManyWithoutStudentInput
    examattempt?: examattemptUncheckedCreateNestedManyWithoutStudentInput
    moduleprogress?: moduleprogressUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutEnrollmentInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>
  }

  export type courseUpsertWithoutEnrollmentInput = {
    update: XOR<courseUpdateWithoutEnrollmentInput, courseUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<courseCreateWithoutEnrollmentInput, courseUncheckedCreateWithoutEnrollmentInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutEnrollmentInput, courseUncheckedUpdateWithoutEnrollmentInput>
  }

  export type courseUpdateWithoutEnrollmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: teacherUpdateOneWithoutCourseNestedInput
    courseprogress?: courseprogressUpdateManyWithoutCourseNestedInput
    module?: moduleUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutEnrollmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courseprogress?: courseprogressUncheckedUpdateManyWithoutCourseNestedInput
    module?: moduleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type studentUpsertWithoutEnrollmentInput = {
    update: XOR<studentUpdateWithoutEnrollmentInput, studentUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutEnrollmentInput, studentUncheckedUpdateWithoutEnrollmentInput>
  }

  export type studentUpdateWithoutEnrollmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseprogress?: courseprogressUpdateManyWithoutStudentNestedInput
    examattempt?: examattemptUpdateManyWithoutStudentNestedInput
    moduleprogress?: moduleprogressUpdateManyWithoutStudentNestedInput
    wpos_wpdatatable_23?: wpos_wpdatatable_23UpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutEnrollmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseprogress?: courseprogressUncheckedUpdateManyWithoutStudentNestedInput
    examattempt?: examattemptUncheckedUpdateManyWithoutStudentNestedInput
    moduleprogress?: moduleprogressUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type moduleCreateWithoutExamInput = {
    id: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    course: courseCreateNestedOneWithoutModuleInput
    moduleprogress?: moduleprogressCreateNestedManyWithoutModuleInput
  }

  export type moduleUncheckedCreateWithoutExamInput = {
    id: string
    title: string
    content: string
    courseId: string
    createdAt?: Date | string
    updatedAt: Date | string
    moduleprogress?: moduleprogressUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutExamInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutExamInput, moduleUncheckedCreateWithoutExamInput>
  }

  export type examattemptCreateWithoutExamInput = {
    id: string
    score: number
    attemptDate?: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    student: studentCreateNestedOneWithoutExamattemptInput
  }

  export type examattemptUncheckedCreateWithoutExamInput = {
    id: string
    score: number
    attemptDate?: Date | string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type examattemptCreateOrConnectWithoutExamInput = {
    where: examattemptWhereUniqueInput
    create: XOR<examattemptCreateWithoutExamInput, examattemptUncheckedCreateWithoutExamInput>
  }

  export type examattemptCreateManyExamInputEnvelope = {
    data: examattemptCreateManyExamInput | examattemptCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type questionCreateWithoutExamInput = {
    id: string
    questionNo: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    questionoption?: questionoptionCreateNestedManyWithoutQuestionInput
  }

  export type questionUncheckedCreateWithoutExamInput = {
    id: string
    questionNo: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    questionoption?: questionoptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type questionCreateOrConnectWithoutExamInput = {
    where: questionWhereUniqueInput
    create: XOR<questionCreateWithoutExamInput, questionUncheckedCreateWithoutExamInput>
  }

  export type questionCreateManyExamInputEnvelope = {
    data: questionCreateManyExamInput | questionCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type moduleUpsertWithoutExamInput = {
    update: XOR<moduleUpdateWithoutExamInput, moduleUncheckedUpdateWithoutExamInput>
    create: XOR<moduleCreateWithoutExamInput, moduleUncheckedCreateWithoutExamInput>
    where?: moduleWhereInput
  }

  export type moduleUpdateToOneWithWhereWithoutExamInput = {
    where?: moduleWhereInput
    data: XOR<moduleUpdateWithoutExamInput, moduleUncheckedUpdateWithoutExamInput>
  }

  export type moduleUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: courseUpdateOneRequiredWithoutModuleNestedInput
    moduleprogress?: moduleprogressUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleprogress?: moduleprogressUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type examattemptUpsertWithWhereUniqueWithoutExamInput = {
    where: examattemptWhereUniqueInput
    update: XOR<examattemptUpdateWithoutExamInput, examattemptUncheckedUpdateWithoutExamInput>
    create: XOR<examattemptCreateWithoutExamInput, examattemptUncheckedCreateWithoutExamInput>
  }

  export type examattemptUpdateWithWhereUniqueWithoutExamInput = {
    where: examattemptWhereUniqueInput
    data: XOR<examattemptUpdateWithoutExamInput, examattemptUncheckedUpdateWithoutExamInput>
  }

  export type examattemptUpdateManyWithWhereWithoutExamInput = {
    where: examattemptScalarWhereInput
    data: XOR<examattemptUpdateManyMutationInput, examattemptUncheckedUpdateManyWithoutExamInput>
  }

  export type examattemptScalarWhereInput = {
    AND?: examattemptScalarWhereInput | examattemptScalarWhereInput[]
    OR?: examattemptScalarWhereInput[]
    NOT?: examattemptScalarWhereInput | examattemptScalarWhereInput[]
    id?: StringFilter<"examattempt"> | string
    score?: FloatFilter<"examattempt"> | number
    attemptDate?: DateTimeFilter<"examattempt"> | Date | string
    studentId?: StringFilter<"examattempt"> | string
    examId?: StringFilter<"examattempt"> | string
    createdAt?: DateTimeFilter<"examattempt"> | Date | string
    updatedAt?: DateTimeFilter<"examattempt"> | Date | string
  }

  export type questionUpsertWithWhereUniqueWithoutExamInput = {
    where: questionWhereUniqueInput
    update: XOR<questionUpdateWithoutExamInput, questionUncheckedUpdateWithoutExamInput>
    create: XOR<questionCreateWithoutExamInput, questionUncheckedCreateWithoutExamInput>
  }

  export type questionUpdateWithWhereUniqueWithoutExamInput = {
    where: questionWhereUniqueInput
    data: XOR<questionUpdateWithoutExamInput, questionUncheckedUpdateWithoutExamInput>
  }

  export type questionUpdateManyWithWhereWithoutExamInput = {
    where: questionScalarWhereInput
    data: XOR<questionUpdateManyMutationInput, questionUncheckedUpdateManyWithoutExamInput>
  }

  export type questionScalarWhereInput = {
    AND?: questionScalarWhereInput | questionScalarWhereInput[]
    OR?: questionScalarWhereInput[]
    NOT?: questionScalarWhereInput | questionScalarWhereInput[]
    id?: StringFilter<"question"> | string
    questionNo?: StringFilter<"question"> | string
    content?: StringFilter<"question"> | string
    examId?: StringFilter<"question"> | string
    createdAt?: DateTimeFilter<"question"> | Date | string
    updatedAt?: DateTimeFilter<"question"> | Date | string
  }

  export type examCreateWithoutExamattemptInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt: Date | string
    module: moduleCreateNestedOneWithoutExamInput
    question?: questionCreateNestedManyWithoutExamInput
  }

  export type examUncheckedCreateWithoutExamattemptInput = {
    id: string
    title: string
    moduleId: string
    createdAt?: Date | string
    updatedAt: Date | string
    question?: questionUncheckedCreateNestedManyWithoutExamInput
  }

  export type examCreateOrConnectWithoutExamattemptInput = {
    where: examWhereUniqueInput
    create: XOR<examCreateWithoutExamattemptInput, examUncheckedCreateWithoutExamattemptInput>
  }

  export type studentCreateWithoutExamattemptInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    courseprogress?: courseprogressCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput
    moduleprogress?: moduleprogressCreateNestedManyWithoutStudentInput
    wpos_wpdatatable_23: wpos_wpdatatable_23CreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutExamattemptInput = {
    id: string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
    courseprogress?: courseprogressUncheckedCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput
    moduleprogress?: moduleprogressUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutExamattemptInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutExamattemptInput, studentUncheckedCreateWithoutExamattemptInput>
  }

  export type examUpsertWithoutExamattemptInput = {
    update: XOR<examUpdateWithoutExamattemptInput, examUncheckedUpdateWithoutExamattemptInput>
    create: XOR<examCreateWithoutExamattemptInput, examUncheckedCreateWithoutExamattemptInput>
    where?: examWhereInput
  }

  export type examUpdateToOneWithWhereWithoutExamattemptInput = {
    where?: examWhereInput
    data: XOR<examUpdateWithoutExamattemptInput, examUncheckedUpdateWithoutExamattemptInput>
  }

  export type examUpdateWithoutExamattemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: moduleUpdateOneRequiredWithoutExamNestedInput
    question?: questionUpdateManyWithoutExamNestedInput
  }

  export type examUncheckedUpdateWithoutExamattemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: questionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type studentUpsertWithoutExamattemptInput = {
    update: XOR<studentUpdateWithoutExamattemptInput, studentUncheckedUpdateWithoutExamattemptInput>
    create: XOR<studentCreateWithoutExamattemptInput, studentUncheckedCreateWithoutExamattemptInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutExamattemptInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutExamattemptInput, studentUncheckedUpdateWithoutExamattemptInput>
  }

  export type studentUpdateWithoutExamattemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseprogress?: courseprogressUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput
    moduleprogress?: moduleprogressUpdateManyWithoutStudentNestedInput
    wpos_wpdatatable_23?: wpos_wpdatatable_23UpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutExamattemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseprogress?: courseprogressUncheckedUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput
    moduleprogress?: moduleprogressUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type examCreateWithoutModuleInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt: Date | string
    examattempt?: examattemptCreateNestedManyWithoutExamInput
    question?: questionCreateNestedManyWithoutExamInput
  }

  export type examUncheckedCreateWithoutModuleInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt: Date | string
    examattempt?: examattemptUncheckedCreateNestedManyWithoutExamInput
    question?: questionUncheckedCreateNestedManyWithoutExamInput
  }

  export type examCreateOrConnectWithoutModuleInput = {
    where: examWhereUniqueInput
    create: XOR<examCreateWithoutModuleInput, examUncheckedCreateWithoutModuleInput>
  }

  export type examCreateManyModuleInputEnvelope = {
    data: examCreateManyModuleInput | examCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type courseCreateWithoutModuleInput = {
    id: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
    teacher?: teacherCreateNestedOneWithoutCourseInput
    courseprogress?: courseprogressCreateNestedManyWithoutCourseInput
    enrollment?: enrollmentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutModuleInput = {
    id: string
    title: string
    description?: string | null
    teacherId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
    courseprogress?: courseprogressUncheckedCreateNestedManyWithoutCourseInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutModuleInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutModuleInput, courseUncheckedCreateWithoutModuleInput>
  }

  export type moduleprogressCreateWithoutModuleInput = {
    id: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    student: studentCreateNestedOneWithoutModuleprogressInput
  }

  export type moduleprogressUncheckedCreateWithoutModuleInput = {
    id: string
    studentId: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type moduleprogressCreateOrConnectWithoutModuleInput = {
    where: moduleprogressWhereUniqueInput
    create: XOR<moduleprogressCreateWithoutModuleInput, moduleprogressUncheckedCreateWithoutModuleInput>
  }

  export type moduleprogressCreateManyModuleInputEnvelope = {
    data: moduleprogressCreateManyModuleInput | moduleprogressCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type examUpsertWithWhereUniqueWithoutModuleInput = {
    where: examWhereUniqueInput
    update: XOR<examUpdateWithoutModuleInput, examUncheckedUpdateWithoutModuleInput>
    create: XOR<examCreateWithoutModuleInput, examUncheckedCreateWithoutModuleInput>
  }

  export type examUpdateWithWhereUniqueWithoutModuleInput = {
    where: examWhereUniqueInput
    data: XOR<examUpdateWithoutModuleInput, examUncheckedUpdateWithoutModuleInput>
  }

  export type examUpdateManyWithWhereWithoutModuleInput = {
    where: examScalarWhereInput
    data: XOR<examUpdateManyMutationInput, examUncheckedUpdateManyWithoutModuleInput>
  }

  export type examScalarWhereInput = {
    AND?: examScalarWhereInput | examScalarWhereInput[]
    OR?: examScalarWhereInput[]
    NOT?: examScalarWhereInput | examScalarWhereInput[]
    id?: StringFilter<"exam"> | string
    title?: StringFilter<"exam"> | string
    moduleId?: StringFilter<"exam"> | string
    createdAt?: DateTimeFilter<"exam"> | Date | string
    updatedAt?: DateTimeFilter<"exam"> | Date | string
  }

  export type courseUpsertWithoutModuleInput = {
    update: XOR<courseUpdateWithoutModuleInput, courseUncheckedUpdateWithoutModuleInput>
    create: XOR<courseCreateWithoutModuleInput, courseUncheckedCreateWithoutModuleInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutModuleInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutModuleInput, courseUncheckedUpdateWithoutModuleInput>
  }

  export type courseUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: teacherUpdateOneWithoutCourseNestedInput
    courseprogress?: courseprogressUpdateManyWithoutCourseNestedInput
    enrollment?: enrollmentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courseprogress?: courseprogressUncheckedUpdateManyWithoutCourseNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type moduleprogressUpsertWithWhereUniqueWithoutModuleInput = {
    where: moduleprogressWhereUniqueInput
    update: XOR<moduleprogressUpdateWithoutModuleInput, moduleprogressUncheckedUpdateWithoutModuleInput>
    create: XOR<moduleprogressCreateWithoutModuleInput, moduleprogressUncheckedCreateWithoutModuleInput>
  }

  export type moduleprogressUpdateWithWhereUniqueWithoutModuleInput = {
    where: moduleprogressWhereUniqueInput
    data: XOR<moduleprogressUpdateWithoutModuleInput, moduleprogressUncheckedUpdateWithoutModuleInput>
  }

  export type moduleprogressUpdateManyWithWhereWithoutModuleInput = {
    where: moduleprogressScalarWhereInput
    data: XOR<moduleprogressUpdateManyMutationInput, moduleprogressUncheckedUpdateManyWithoutModuleInput>
  }

  export type moduleprogressScalarWhereInput = {
    AND?: moduleprogressScalarWhereInput | moduleprogressScalarWhereInput[]
    OR?: moduleprogressScalarWhereInput[]
    NOT?: moduleprogressScalarWhereInput | moduleprogressScalarWhereInput[]
    id?: StringFilter<"moduleprogress"> | string
    studentId?: StringFilter<"moduleprogress"> | string
    moduleId?: StringFilter<"moduleprogress"> | string
    progress?: FloatFilter<"moduleprogress"> | number
    lastUpdated?: DateTimeFilter<"moduleprogress"> | Date | string
    createdAt?: DateTimeFilter<"moduleprogress"> | Date | string
    updatedAt?: DateTimeFilter<"moduleprogress"> | Date | string
  }

  export type moduleCreateWithoutModuleprogressInput = {
    id: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    exam?: examCreateNestedManyWithoutModuleInput
    course: courseCreateNestedOneWithoutModuleInput
  }

  export type moduleUncheckedCreateWithoutModuleprogressInput = {
    id: string
    title: string
    content: string
    courseId: string
    createdAt?: Date | string
    updatedAt: Date | string
    exam?: examUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutModuleprogressInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutModuleprogressInput, moduleUncheckedCreateWithoutModuleprogressInput>
  }

  export type studentCreateWithoutModuleprogressInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    courseprogress?: courseprogressCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput
    examattempt?: examattemptCreateNestedManyWithoutStudentInput
    wpos_wpdatatable_23: wpos_wpdatatable_23CreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutModuleprogressInput = {
    id: string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
    courseprogress?: courseprogressUncheckedCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput
    examattempt?: examattemptUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutModuleprogressInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutModuleprogressInput, studentUncheckedCreateWithoutModuleprogressInput>
  }

  export type moduleUpsertWithoutModuleprogressInput = {
    update: XOR<moduleUpdateWithoutModuleprogressInput, moduleUncheckedUpdateWithoutModuleprogressInput>
    create: XOR<moduleCreateWithoutModuleprogressInput, moduleUncheckedCreateWithoutModuleprogressInput>
    where?: moduleWhereInput
  }

  export type moduleUpdateToOneWithWhereWithoutModuleprogressInput = {
    where?: moduleWhereInput
    data: XOR<moduleUpdateWithoutModuleprogressInput, moduleUncheckedUpdateWithoutModuleprogressInput>
  }

  export type moduleUpdateWithoutModuleprogressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: examUpdateManyWithoutModuleNestedInput
    course?: courseUpdateOneRequiredWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateWithoutModuleprogressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: examUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type studentUpsertWithoutModuleprogressInput = {
    update: XOR<studentUpdateWithoutModuleprogressInput, studentUncheckedUpdateWithoutModuleprogressInput>
    create: XOR<studentCreateWithoutModuleprogressInput, studentUncheckedCreateWithoutModuleprogressInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutModuleprogressInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutModuleprogressInput, studentUncheckedUpdateWithoutModuleprogressInput>
  }

  export type studentUpdateWithoutModuleprogressInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseprogress?: courseprogressUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput
    examattempt?: examattemptUpdateManyWithoutStudentNestedInput
    wpos_wpdatatable_23?: wpos_wpdatatable_23UpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutModuleprogressInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseprogress?: courseprogressUncheckedUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput
    examattempt?: examattemptUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type examCreateWithoutQuestionInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt: Date | string
    module: moduleCreateNestedOneWithoutExamInput
    examattempt?: examattemptCreateNestedManyWithoutExamInput
  }

  export type examUncheckedCreateWithoutQuestionInput = {
    id: string
    title: string
    moduleId: string
    createdAt?: Date | string
    updatedAt: Date | string
    examattempt?: examattemptUncheckedCreateNestedManyWithoutExamInput
  }

  export type examCreateOrConnectWithoutQuestionInput = {
    where: examWhereUniqueInput
    create: XOR<examCreateWithoutQuestionInput, examUncheckedCreateWithoutQuestionInput>
  }

  export type questionoptionCreateWithoutQuestionInput = {
    id: string
    option: string
    content: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type questionoptionUncheckedCreateWithoutQuestionInput = {
    id: string
    option: string
    content: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type questionoptionCreateOrConnectWithoutQuestionInput = {
    where: questionoptionWhereUniqueInput
    create: XOR<questionoptionCreateWithoutQuestionInput, questionoptionUncheckedCreateWithoutQuestionInput>
  }

  export type questionoptionCreateManyQuestionInputEnvelope = {
    data: questionoptionCreateManyQuestionInput | questionoptionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type examUpsertWithoutQuestionInput = {
    update: XOR<examUpdateWithoutQuestionInput, examUncheckedUpdateWithoutQuestionInput>
    create: XOR<examCreateWithoutQuestionInput, examUncheckedCreateWithoutQuestionInput>
    where?: examWhereInput
  }

  export type examUpdateToOneWithWhereWithoutQuestionInput = {
    where?: examWhereInput
    data: XOR<examUpdateWithoutQuestionInput, examUncheckedUpdateWithoutQuestionInput>
  }

  export type examUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: moduleUpdateOneRequiredWithoutExamNestedInput
    examattempt?: examattemptUpdateManyWithoutExamNestedInput
  }

  export type examUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examattempt?: examattemptUncheckedUpdateManyWithoutExamNestedInput
  }

  export type questionoptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: questionoptionWhereUniqueInput
    update: XOR<questionoptionUpdateWithoutQuestionInput, questionoptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<questionoptionCreateWithoutQuestionInput, questionoptionUncheckedCreateWithoutQuestionInput>
  }

  export type questionoptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: questionoptionWhereUniqueInput
    data: XOR<questionoptionUpdateWithoutQuestionInput, questionoptionUncheckedUpdateWithoutQuestionInput>
  }

  export type questionoptionUpdateManyWithWhereWithoutQuestionInput = {
    where: questionoptionScalarWhereInput
    data: XOR<questionoptionUpdateManyMutationInput, questionoptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type questionoptionScalarWhereInput = {
    AND?: questionoptionScalarWhereInput | questionoptionScalarWhereInput[]
    OR?: questionoptionScalarWhereInput[]
    NOT?: questionoptionScalarWhereInput | questionoptionScalarWhereInput[]
    id?: StringFilter<"questionoption"> | string
    option?: StringFilter<"questionoption"> | string
    content?: StringFilter<"questionoption"> | string
    questionId?: StringFilter<"questionoption"> | string
    isCorrect?: BoolFilter<"questionoption"> | boolean
    createdAt?: DateTimeFilter<"questionoption"> | Date | string
    updatedAt?: DateTimeFilter<"questionoption"> | Date | string
  }

  export type questionCreateWithoutQuestionoptionInput = {
    id: string
    questionNo: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    exam: examCreateNestedOneWithoutQuestionInput
  }

  export type questionUncheckedCreateWithoutQuestionoptionInput = {
    id: string
    questionNo: string
    content: string
    examId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type questionCreateOrConnectWithoutQuestionoptionInput = {
    where: questionWhereUniqueInput
    create: XOR<questionCreateWithoutQuestionoptionInput, questionUncheckedCreateWithoutQuestionoptionInput>
  }

  export type questionUpsertWithoutQuestionoptionInput = {
    update: XOR<questionUpdateWithoutQuestionoptionInput, questionUncheckedUpdateWithoutQuestionoptionInput>
    create: XOR<questionCreateWithoutQuestionoptionInput, questionUncheckedCreateWithoutQuestionoptionInput>
    where?: questionWhereInput
  }

  export type questionUpdateToOneWithWhereWithoutQuestionoptionInput = {
    where?: questionWhereInput
    data: XOR<questionUpdateWithoutQuestionoptionInput, questionUncheckedUpdateWithoutQuestionoptionInput>
  }

  export type questionUpdateWithoutQuestionoptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionNo?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: examUpdateOneRequiredWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateWithoutQuestionoptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionNo?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseprogressCreateWithoutStudentInput = {
    id: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    course: courseCreateNestedOneWithoutCourseprogressInput
  }

  export type courseprogressUncheckedCreateWithoutStudentInput = {
    id: string
    progress?: number
    courseId: string
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type courseprogressCreateOrConnectWithoutStudentInput = {
    where: courseprogressWhereUniqueInput
    create: XOR<courseprogressCreateWithoutStudentInput, courseprogressUncheckedCreateWithoutStudentInput>
  }

  export type courseprogressCreateManyStudentInputEnvelope = {
    data: courseprogressCreateManyStudentInput | courseprogressCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type enrollmentCreateWithoutStudentInput = {
    id: string
    enrolledAt?: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    url: string
    course: courseCreateNestedOneWithoutEnrollmentInput
  }

  export type enrollmentUncheckedCreateWithoutStudentInput = {
    id: string
    enrolledAt?: Date | string
    courseId: string
    createdAt?: Date | string
    updatedAt: Date | string
    url: string
  }

  export type enrollmentCreateOrConnectWithoutStudentInput = {
    where: enrollmentWhereUniqueInput
    create: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput>
  }

  export type enrollmentCreateManyStudentInputEnvelope = {
    data: enrollmentCreateManyStudentInput | enrollmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type examattemptCreateWithoutStudentInput = {
    id: string
    score: number
    attemptDate?: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    exam: examCreateNestedOneWithoutExamattemptInput
  }

  export type examattemptUncheckedCreateWithoutStudentInput = {
    id: string
    score: number
    attemptDate?: Date | string
    examId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type examattemptCreateOrConnectWithoutStudentInput = {
    where: examattemptWhereUniqueInput
    create: XOR<examattemptCreateWithoutStudentInput, examattemptUncheckedCreateWithoutStudentInput>
  }

  export type examattemptCreateManyStudentInputEnvelope = {
    data: examattemptCreateManyStudentInput | examattemptCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type moduleprogressCreateWithoutStudentInput = {
    id: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    module: moduleCreateNestedOneWithoutModuleprogressInput
  }

  export type moduleprogressUncheckedCreateWithoutStudentInput = {
    id: string
    moduleId: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type moduleprogressCreateOrConnectWithoutStudentInput = {
    where: moduleprogressWhereUniqueInput
    create: XOR<moduleprogressCreateWithoutStudentInput, moduleprogressUncheckedCreateWithoutStudentInput>
  }

  export type moduleprogressCreateManyStudentInputEnvelope = {
    data: moduleprogressCreateManyStudentInput | moduleprogressCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type wpos_wpdatatable_23CreateWithoutStudentInput = {
    wdt_ID: string
    name: string
    passcode: string
    phoneno: string
    status: string
    startdate?: Date | string
    chat_id: string
  }

  export type wpos_wpdatatable_23UncheckedCreateWithoutStudentInput = {
    wdt_ID: string
    name: string
    passcode: string
    phoneno: string
    status: string
    startdate?: Date | string
    chat_id: string
  }

  export type wpos_wpdatatable_23CreateOrConnectWithoutStudentInput = {
    where: wpos_wpdatatable_23WhereUniqueInput
    create: XOR<wpos_wpdatatable_23CreateWithoutStudentInput, wpos_wpdatatable_23UncheckedCreateWithoutStudentInput>
  }

  export type courseprogressUpsertWithWhereUniqueWithoutStudentInput = {
    where: courseprogressWhereUniqueInput
    update: XOR<courseprogressUpdateWithoutStudentInput, courseprogressUncheckedUpdateWithoutStudentInput>
    create: XOR<courseprogressCreateWithoutStudentInput, courseprogressUncheckedCreateWithoutStudentInput>
  }

  export type courseprogressUpdateWithWhereUniqueWithoutStudentInput = {
    where: courseprogressWhereUniqueInput
    data: XOR<courseprogressUpdateWithoutStudentInput, courseprogressUncheckedUpdateWithoutStudentInput>
  }

  export type courseprogressUpdateManyWithWhereWithoutStudentInput = {
    where: courseprogressScalarWhereInput
    data: XOR<courseprogressUpdateManyMutationInput, courseprogressUncheckedUpdateManyWithoutStudentInput>
  }

  export type enrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: enrollmentWhereUniqueInput
    update: XOR<enrollmentUpdateWithoutStudentInput, enrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput>
  }

  export type enrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: enrollmentWhereUniqueInput
    data: XOR<enrollmentUpdateWithoutStudentInput, enrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type enrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: enrollmentScalarWhereInput
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type examattemptUpsertWithWhereUniqueWithoutStudentInput = {
    where: examattemptWhereUniqueInput
    update: XOR<examattemptUpdateWithoutStudentInput, examattemptUncheckedUpdateWithoutStudentInput>
    create: XOR<examattemptCreateWithoutStudentInput, examattemptUncheckedCreateWithoutStudentInput>
  }

  export type examattemptUpdateWithWhereUniqueWithoutStudentInput = {
    where: examattemptWhereUniqueInput
    data: XOR<examattemptUpdateWithoutStudentInput, examattemptUncheckedUpdateWithoutStudentInput>
  }

  export type examattemptUpdateManyWithWhereWithoutStudentInput = {
    where: examattemptScalarWhereInput
    data: XOR<examattemptUpdateManyMutationInput, examattemptUncheckedUpdateManyWithoutStudentInput>
  }

  export type moduleprogressUpsertWithWhereUniqueWithoutStudentInput = {
    where: moduleprogressWhereUniqueInput
    update: XOR<moduleprogressUpdateWithoutStudentInput, moduleprogressUncheckedUpdateWithoutStudentInput>
    create: XOR<moduleprogressCreateWithoutStudentInput, moduleprogressUncheckedCreateWithoutStudentInput>
  }

  export type moduleprogressUpdateWithWhereUniqueWithoutStudentInput = {
    where: moduleprogressWhereUniqueInput
    data: XOR<moduleprogressUpdateWithoutStudentInput, moduleprogressUncheckedUpdateWithoutStudentInput>
  }

  export type moduleprogressUpdateManyWithWhereWithoutStudentInput = {
    where: moduleprogressScalarWhereInput
    data: XOR<moduleprogressUpdateManyMutationInput, moduleprogressUncheckedUpdateManyWithoutStudentInput>
  }

  export type wpos_wpdatatable_23UpsertWithoutStudentInput = {
    update: XOR<wpos_wpdatatable_23UpdateWithoutStudentInput, wpos_wpdatatable_23UncheckedUpdateWithoutStudentInput>
    create: XOR<wpos_wpdatatable_23CreateWithoutStudentInput, wpos_wpdatatable_23UncheckedCreateWithoutStudentInput>
    where?: wpos_wpdatatable_23WhereInput
  }

  export type wpos_wpdatatable_23UpdateToOneWithWhereWithoutStudentInput = {
    where?: wpos_wpdatatable_23WhereInput
    data: XOR<wpos_wpdatatable_23UpdateWithoutStudentInput, wpos_wpdatatable_23UncheckedUpdateWithoutStudentInput>
  }

  export type wpos_wpdatatable_23UpdateWithoutStudentInput = {
    wdt_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_id?: StringFieldUpdateOperationsInput | string
  }

  export type wpos_wpdatatable_23UncheckedUpdateWithoutStudentInput = {
    wdt_ID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    phoneno?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startdate?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_id?: StringFieldUpdateOperationsInput | string
  }

  export type courseCreateWithoutTeacherInput = {
    id: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
    courseprogress?: courseprogressCreateNestedManyWithoutCourseInput
    enrollment?: enrollmentCreateNestedManyWithoutCourseInput
    module?: moduleCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutTeacherInput = {
    id: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
    courseprogress?: courseprogressUncheckedCreateNestedManyWithoutCourseInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutCourseInput
    module?: moduleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutTeacherInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
  }

  export type courseCreateManyTeacherInputEnvelope = {
    data: courseCreateManyTeacherInput | courseCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type courseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: courseWhereUniqueInput
    update: XOR<courseUpdateWithoutTeacherInput, courseUncheckedUpdateWithoutTeacherInput>
    create: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
  }

  export type courseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: courseWhereUniqueInput
    data: XOR<courseUpdateWithoutTeacherInput, courseUncheckedUpdateWithoutTeacherInput>
  }

  export type courseUpdateManyWithWhereWithoutTeacherInput = {
    where: courseScalarWhereInput
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutTeacherInput>
  }

  export type courseScalarWhereInput = {
    AND?: courseScalarWhereInput | courseScalarWhereInput[]
    OR?: courseScalarWhereInput[]
    NOT?: courseScalarWhereInput | courseScalarWhereInput[]
    id?: StringFilter<"course"> | string
    title?: StringFilter<"course"> | string
    description?: StringNullableFilter<"course"> | string | null
    teacherId?: StringNullableFilter<"course"> | string | null
    createdAt?: DateTimeFilter<"course"> | Date | string
    updatedAt?: DateTimeFilter<"course"> | Date | string
    imageUrl?: StringNullableFilter<"course"> | string | null
  }

  export type studentCreateWithoutWpos_wpdatatable_23Input = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    courseprogress?: courseprogressCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput
    examattempt?: examattemptCreateNestedManyWithoutStudentInput
    moduleprogress?: moduleprogressCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutWpos_wpdatatable_23Input = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    courseprogress?: courseprogressUncheckedCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput
    examattempt?: examattemptUncheckedCreateNestedManyWithoutStudentInput
    moduleprogress?: moduleprogressUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutWpos_wpdatatable_23Input = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutWpos_wpdatatable_23Input, studentUncheckedCreateWithoutWpos_wpdatatable_23Input>
  }

  export type studentUpsertWithoutWpos_wpdatatable_23Input = {
    update: XOR<studentUpdateWithoutWpos_wpdatatable_23Input, studentUncheckedUpdateWithoutWpos_wpdatatable_23Input>
    create: XOR<studentCreateWithoutWpos_wpdatatable_23Input, studentUncheckedCreateWithoutWpos_wpdatatable_23Input>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutWpos_wpdatatable_23Input = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutWpos_wpdatatable_23Input, studentUncheckedUpdateWithoutWpos_wpdatatable_23Input>
  }

  export type studentUpdateWithoutWpos_wpdatatable_23Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseprogress?: courseprogressUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput
    examattempt?: examattemptUpdateManyWithoutStudentNestedInput
    moduleprogress?: moduleprogressUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutWpos_wpdatatable_23Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseprogress?: courseprogressUncheckedUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput
    examattempt?: examattemptUncheckedUpdateManyWithoutStudentNestedInput
    moduleprogress?: moduleprogressUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type courseprogressCreateManyCourseInput = {
    id: string
    progress?: number
    studentId: string
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type enrollmentCreateManyCourseInput = {
    id: string
    enrolledAt?: Date | string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
    url: string
  }

  export type moduleCreateManyCourseInput = {
    id: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type courseprogressUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUpdateOneRequiredWithoutCourseprogressNestedInput
  }

  export type courseprogressUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseprogressUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enrollmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    student?: studentUpdateOneRequiredWithoutEnrollmentNestedInput
  }

  export type enrollmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type enrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type moduleUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: examUpdateManyWithoutModuleNestedInput
    moduleprogress?: moduleprogressUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: examUncheckedUpdateManyWithoutModuleNestedInput
    moduleprogress?: moduleprogressUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type examattemptCreateManyExamInput = {
    id: string
    score: number
    attemptDate?: Date | string
    studentId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type questionCreateManyExamInput = {
    id: string
    questionNo: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type examattemptUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    attemptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUpdateOneRequiredWithoutExamattemptNestedInput
  }

  export type examattemptUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    attemptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type examattemptUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    attemptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionNo?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionoption?: questionoptionUpdateManyWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionNo?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionoption?: questionoptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionNo?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type examCreateManyModuleInput = {
    id: string
    title: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type moduleprogressCreateManyModuleInput = {
    id: string
    studentId: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type examUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examattempt?: examattemptUpdateManyWithoutExamNestedInput
    question?: questionUpdateManyWithoutExamNestedInput
  }

  export type examUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    examattempt?: examattemptUncheckedUpdateManyWithoutExamNestedInput
    question?: questionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type examUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type moduleprogressUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUpdateOneRequiredWithoutModuleprogressNestedInput
  }

  export type moduleprogressUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type moduleprogressUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionoptionCreateManyQuestionInput = {
    id: string
    option: string
    content: string
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type questionoptionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionoptionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionoptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    option?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseprogressCreateManyStudentInput = {
    id: string
    progress?: number
    courseId: string
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type enrollmentCreateManyStudentInput = {
    id: string
    enrolledAt?: Date | string
    courseId: string
    createdAt?: Date | string
    updatedAt: Date | string
    url: string
  }

  export type examattemptCreateManyStudentInput = {
    id: string
    score: number
    attemptDate?: Date | string
    examId: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type moduleprogressCreateManyStudentInput = {
    id: string
    moduleId: string
    progress?: number
    lastUpdated: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type courseprogressUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: courseUpdateOneRequiredWithoutCourseprogressNestedInput
  }

  export type courseprogressUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseprogressUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enrollmentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    course?: courseUpdateOneRequiredWithoutEnrollmentNestedInput
  }

  export type enrollmentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type enrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type examattemptUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    attemptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: examUpdateOneRequiredWithoutExamattemptNestedInput
  }

  export type examattemptUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    attemptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type examattemptUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    attemptDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type moduleprogressUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: moduleUpdateOneRequiredWithoutModuleprogressNestedInput
  }

  export type moduleprogressUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type moduleprogressUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    progress?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseCreateManyTeacherInput = {
    id: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    imageUrl?: string | null
  }

  export type courseUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courseprogress?: courseprogressUpdateManyWithoutCourseNestedInput
    enrollment?: enrollmentUpdateManyWithoutCourseNestedInput
    module?: moduleUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courseprogress?: courseprogressUncheckedUpdateManyWithoutCourseNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput
    module?: moduleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
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