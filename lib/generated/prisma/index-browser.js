
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  name: 'name',
  passcode: 'passcode',
  phoneno: 'phoneno',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  teacherId: 'teacherId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  imageUrl: 'imageUrl'
};

exports.Prisma.CourseprogressScalarFieldEnum = {
  id: 'id',
  progress: 'progress',
  studentId: 'studentId',
  courseId: 'courseId',
  lastUpdated: 'lastUpdated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EnrollmentScalarFieldEnum = {
  id: 'id',
  enrolledAt: 'enrolledAt',
  courseId: 'courseId',
  studentId: 'studentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  url: 'url'
};

exports.Prisma.ExamScalarFieldEnum = {
  id: 'id',
  title: 'title',
  moduleId: 'moduleId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ExamattemptScalarFieldEnum = {
  id: 'id',
  score: 'score',
  attemptDate: 'attemptDate',
  studentId: 'studentId',
  examId: 'examId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ModuleScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  courseId: 'courseId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ModuleprogressScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  moduleId: 'moduleId',
  progress: 'progress',
  lastUpdated: 'lastUpdated',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.QuestionScalarFieldEnum = {
  id: 'id',
  questionNo: 'questionNo',
  content: 'content',
  examId: 'examId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.QuestionoptionScalarFieldEnum = {
  id: 'id',
  option: 'option',
  content: 'content',
  questionId: 'questionId',
  isCorrect: 'isCorrect',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TeacherScalarFieldEnum = {
  id: 'id',
  name: 'name',
  passcode: 'passcode',
  phoneno: 'phoneno',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Wpos_wpdatatable_23ScalarFieldEnum = {
  wdt_ID: 'wdt_ID',
  name: 'name',
  passcode: 'passcode',
  phoneno: 'phoneno',
  status: 'status',
  startdate: 'startdate',
  chat_id: 'chat_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.adminOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  passcode: 'passcode',
  phoneno: 'phoneno'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.courseOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  teacherId: 'teacherId',
  imageUrl: 'imageUrl'
};

exports.Prisma.courseprogressOrderByRelevanceFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  courseId: 'courseId'
};

exports.Prisma.enrollmentOrderByRelevanceFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  studentId: 'studentId',
  url: 'url'
};

exports.Prisma.examOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  moduleId: 'moduleId'
};

exports.Prisma.examattemptOrderByRelevanceFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  examId: 'examId'
};

exports.Prisma.moduleOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  courseId: 'courseId'
};

exports.Prisma.moduleprogressOrderByRelevanceFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  moduleId: 'moduleId'
};

exports.Prisma.questionOrderByRelevanceFieldEnum = {
  id: 'id',
  questionNo: 'questionNo',
  content: 'content',
  examId: 'examId'
};

exports.Prisma.questionoptionOrderByRelevanceFieldEnum = {
  id: 'id',
  option: 'option',
  content: 'content',
  questionId: 'questionId'
};

exports.Prisma.studentOrderByRelevanceFieldEnum = {
  id: 'id',
  studentId: 'studentId'
};

exports.Prisma.teacherOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  passcode: 'passcode',
  phoneno: 'phoneno'
};

exports.Prisma.wpos_wpdatatable_23OrderByRelevanceFieldEnum = {
  wdt_ID: 'wdt_ID',
  name: 'name',
  passcode: 'passcode',
  phoneno: 'phoneno',
  status: 'status',
  chat_id: 'chat_id'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
