type subject = 'OOPS' | '.NET' | 'SQL' | 'HTML & CSS';
export interface schedule {
    name: subject;
    date: string;
    topic: string[];
    category: string[];
    description: string[];
    trainer: string[];
    timing: [string,string][];
    duration: number[];
    activeLearning: number;
}

export const mockData: schedule[] = [
    {
        name : 'OOPS',
        date : '2025-06-02',
        topic : ['What is OOP', 'Class & Object', 'Fields and Variables', 'Provide controlled access on fields', 'Constructors', "'this' Keyword", 'Access Modifiers', 'Static Members','break', 'Object Initializers', 'Excercise', 'Private fields', 'Auto-implemented Properties', 'Read-only properties'],
        category : ['Basics of OOP', '', '', '', '', '', '', '','', '', '', 'Encapsulation', '', ''],
        description : ['Understanding the four pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction.','Blueprint vs.Instance', 'Store data in Objects', 'Blueprint vs.Instance', 'Initialize ojects during creation', 'Refers to current instance.', '`public`, `private`, `protected`, `internal`', 'Belong to the class not the instance','break', 'Assign values to properties/fields during installation', 'Hands-on Practice with OOPS basics', 'Rediret direct access', 'Simplify property definitons', 'Make data immutable after construction'],
        trainer : ['TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD','TBD'],
        timing : [['09:30', '09:45'], ['09:45', '10:00'], ['10:00', '10:15'], ['10:15', '10:30'],['10:30','10:45'],['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
        duration : [15,15,15,15,15,15,15,15,15,15,10,15,15,15],
        activeLearning : 140
    },{
        name: 'OOPS',
        date: '2025-06-03',
        topic: [
            'Inheritance Introduction', 'Types of Inheritance', 'Base and Derived Classes', 'Method Overriding', 'Virtual and Override Keywords', 'Object Class', 'Polymorphism Overview', 'Runtime Polymorphism', 'break', 'Interfaces vs Abstract Classes', 'Excercise', 'Abstract Classes', 'Interface Implementation', 'IS-A vs HAS-A Relationships'
        ],
        category: ['Inheritance', '', '', '', '', '', 'Polymorphism', '', '', '', '', '', '', ''],
        description: [
            'Sharing functionality between classes.', 'Single, Multiple, Hierarchical, Hybrid.', 'Common members moved to base.', 'Override behavior in derived classes.', '`virtual`, `override`, `new` keywords explained.', 'Every class is derived from Object class.', 'One interface, multiple implementations.', 'Achieved through method overriding.', 'break', 'When to use abstract vs interface.', 'Hands-on Inheritance & Polymorphism', 'Define non-instantiable base class.', 'Code contracts with interfaces.', 'Difference between composition and inheritance.'
        ],
        trainer: Array(14).fill('TBD'),
        timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
        duration: Array(14).fill(15),
        activeLearning: 145
    },{
        name: 'OOPS',
        date: '2025-06-04',
        topic: [
            'Encapsulation Deep Dive', 'Properties vs Fields', 'Accessors (get/set)', 'Backing Fields', 'Auto-Properties', 'Access Modifiers Recap', 'Constructors Overloading', 'Static Constructors', 'break', 'Object Lifecycle', 'Excercise', 'Garbage Collection', 'Dispose Pattern', 'IDisposable Interface'
        ],
        category: ['Encapsulation', '', '', '', '', '', 'Construction', '', '', '', '', 'Memory Management', '', ''],
        description: [
            'Hiding implementation and exposing behavior.', 'Difference and usage of each.', 'Control property access.', 'Backing field logic.', 'Short syntax for properties.', 'Refresher on access levels.', 'Multiple constructors in a class.', 'Initialize static members once.', 'break', 'Object creation to destruction.', 'Build an Encapsulation Model', 'Automatic memory handling in .NET.', 'Manual cleanup pattern.', 'Used for unmanaged resource handling.'
        ],
        trainer: Array(14).fill('TBD'),
        timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
        duration: Array(14).fill(15),
        activeLearning: 150
    },{
    name: 'OOPS',
    date: '2025-06-05',
    topic: [
        'Polymorphism Deep Dive', 'Method Overloading', 'Compile-time Polymorphism', 'Late Binding', 'Covariance & Contravariance', 'Dynamic Types', 'Reflection Intro', 'System.Type Class', 'break', 'Assembly Metadata', 'Excercise', 'Type Inspection', 'Custom Attributes', 'Practical Polymorphism'
    ],
    category: ['Polymorphism', '', '', '', '', '', 'Reflection', '', '', '', '', '', '', ''],
    description: [
        'Understanding multiple forms of behavior.', 'Same method, different signatures.', 'Decided at compile time.', 'Resolved at runtime.', 'Parameter substitution flexibility.', 'Working with types dynamically.', 'Runtime type info and inspection.', 'Obtain metadata about types.', 'break', 'Understanding assembly and module.', 'Hands-on with Reflection API', 'Explore object properties via code.', 'Annotate code with metadata.', 'Real-world OOP flexibility use-cases.'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 155
    },
  {
    name: '.NET',
    date: '2025-06-06',
    topic: [
      'Introduction to .NET', 'CLR & CTS', '.NET CLI Basics', 'Projects & Solutions', 'Namespaces', 'Assemblies & DLLs', 'break',
      'NuGet Packages', 'Dependency Injection', 'Excercise', 'Middleware', 'Logging', 'Configuration Files', 'Hosting Models'
    ],
    category: ['Fundamentals','','','','','','','Packages','','','Practice','Infrastructure','','',''],
    description: [
      'What is .NET and its ecosystem',
      'Common Language Runtime and type system',
      'dotnet commands: new, build, run',
      'Organizing code with projects',
      'Logical code grouping',
      'Reusing compiled code',
      'break',
      'Manage external libraries',
      'Inject services',
      'Hands‑on DI and service registration',
      'Middleware pipeline',
      'Logging frameworks overview',
      'appsettings.json usage',
      'Compare hosting: IIS vs Kestrel'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 150
  },
  {
    name: '.NET',
    date: '2025-06-07',
    topic: [
      'C# Language Overview','Value vs Reference Types','Strings & Collections','LINQ Basics','LINQ Query Syntax','Async & Await','break',
      'Tasks & Threading','Error Handling','Excercise','Nullable Types','Generics','Expression Trees','Delegates & Events'
    ],
    category: ['C#','','','','','Async','','','','Practice','','','',''],
    description: [
      'Core syntax and structure',
      'Memory behavior of types',
      'Working with arrays, lists',
      'Query collections',
      'LINQ in declarative style',
      'Asynchronous patterns in C#',
      'break',
      'Parallelism fundamentals',
      'try‑catch–finally patterns',
      'Hands‑on async/task patterns',
      'Handling nullables',
      'Type-safe collections',
      'Building LINQ providers',
      'Event subscription & callbacks'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 155
  },
  {
    name: '.NET',
    date: '2025-06-08',
    topic: [
      'Entity Framework Core','DbContext & Models','Migrations','LINQ to Entities','Change Tracking','Performance & Caching','break',
      'Transactions & Concurrency','Stored Procedures','Excercise','Query Optimization','Seeding Data','Lazy vs Eager Loading','Tracking vs No‑Tracking'
    ],
    category: ['Data','','','','','','','','Practice','','','','',''],
    description: [
      'ORM for relational databases',
      'Database modelling in code',
      'Schema evolution',
      'Query translating to SQL',
      'Detecting updates',
      'Improve EF performance',
      'break',
      'Concurrency control strategies',
      'Execute stored operations',
      'Hands‑on EF CRUD operations',
      'Improve query speed',
      'Pre-populate test data',
      'Loading strategies explained',
      'Read-only contexts'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 160
  },
  {
    name: '.NET',
    date: '2025-06-09',
    topic: [
      'ASP.NET Core Intro','Controllers & Routing','MVC Pattern','Razor Pages','Model Binding','Tag Helpers','break',
      'API Controllers','Swagger Integration','Excercise','Authentication','Authorization','Middleware Pipeline Deep Dive','Health Checks'
    ],
    category: ['Web','','','','','','','','Practice','','','','',''],
    description: [
      'Building web apps with ASP.NET Core',
      'Route-to-controller mapping',
      'Views, Models, Controllers',
      'Page‑based rendering',
      'Binding form/query data',
      'Reusable view components',
      'break',
      'REST API endpoints',
      'Document APIs automatically',
      'Build and test a basic API',
      'User sign-in flows',
      'Role and policy‑based access',
      'Customize request pipeline',
      'App health and readiness'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 165
  },{
    name: 'SQL',
    date: '2025-06-10',
    topic: [
      'Relational Database Concepts','SQL Data Types','DDL vs DML','CREATE & DROP Tables','INSERT, UPDATE, DELETE','break',
      'SELECT Basics','WHERE Clause','Sorting & Filtering','Excercise','Primary & Foreign Keys','Normalization','Joins Intro','Data Integrity'
    ],
    category: ['Basics','','','','','','','','Practice','','','','',''],
    description: [
      'RDBMS principles',
      'Numeric, text, date types',
      'Schema vs data operations',
      'Define structure',
      'Modify records',
      'break',
      'Retrieve data',
      'Filter rows',
      'ORDER BY, HAVING',
      'Hands‑on basic queries',
      'Relating tables',
      'First to third normal form',
      'INNER/LEFT/RIGHT joins',
      'Maintaining consistency'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 140
  },
  {
    name: 'SQL',
    date: '2025-06-11',
    topic: [
      'Advanced Joins','UNION vs UNION ALL','Subqueries','Aggregate Functions','GROUP BY','HAVING','break',
      'Views & Indexes','Stored Procedures','Excercise','Functions & Triggers','Transaction Control','Backup & Restore','Performance Tuning'
    ],
    category: ['Advanced','','','','','Aggregates','','','','Practice','','','',''],
    description: [
      'Complex joins types',
      'Combine result sets',
      'Nested query usage',
      'COUNT, SUM, AVG, etc',
      'Group query results',
      'Filter grouped results',
      'break',
      'Logical abstractions & speed ups',
      'Reusable DB logic',
      'Hands‑on views and SPs',
      'Automate DB events',
      'Commit, rollback usage',
      'DB recovery strategies',
      'Indexing & query planning'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 145
  },
  {
    name: 'SQL',
    date: '2025-06-12',
    topic: [
      'Window Functions','Ranking Functions','Cursors','Common Table Expressions','Recursive Queries','Temporary Tables','break',
      'Partitioning','Query Performance','Excercise','Query Profiling','Execution Plans','Optimizer Stats','Concurrency Control'
    ],
    category: ['Advanced','','','','','','','','Practice','','','','',''],
    description: [
      'ROW_NUMBER, RANK, DENSE_RANK',
      'Result ranking usage',
      'Row-by-row processing',
      'WITH clauses',
      'Recursive hierarchical data',
      'Session-specific tables',
      'break',
      'Segment large tables',
      'Speeding up queries',
      'Hands‑on window/logical queries',
      'Analyze performance metrics',
      'Reading EXPLAIN output',
      'Auto‑update statistics',
      'Locking and isolation levels'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 150
  },
  {
    name: 'SQL',
    date: '2025-06-13',
    topic: [
      'Security & Permissions','Roles & Schemas','Dynamic SQL','Full‑Text Search','JSON Data Handling','break',
      'Data Warehousing Intro','ETL Concepts','Excercise','Partitioned Tables','Star & Snowflake Schemas','Data Reporting Tools','Query Optimization Techniques'
    ],
    category: ['Security','','','','','Advanced','','Practice','','','','',''],
    description: [
      'Granting and revoking access',
      'Logical DB grouping',
      'Exec from string SQL',
      'Text search ops',
      'Storing queries in JSON',
      'break',
      'DW fundamentals',
      'Extract‑Transform‑Load',
      'Hands‑on partitioned tables',
      'Dimensional modeling',
      'BI/report generation basics',
      'Further tuning strategies'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 155
  },{
    name: 'HTML & CSS',
    date: '2025-06-16',
    topic: [
      'HTML Basics','Headings & Paragraphs','Lists & Links','Images & Media','Tables','Forms','break',
      'Semantic Tags','Meta & SEO','Excercise','Forms Validation','Accessibility Basics','Attributes & Global Tags','Block vs Inline'
    ],
    category: ['HTML','','','','','','','','Practice','','','','',''],
    description: [
      'Structure of an HTML document',
      'Using headings, <p>',
      'Ordered/unordered lists and anchors',
      'Embedding images & videos',
      'Tabular data',
      'Form elements: input, select, textarea',
      'break',
      'Meaningful HTML5 elements',
      'SEO-related tags',
      'Hands‑on form building',
      'Client‑side validation rules',
      'ARIA, alt text, roles',
      'Universal attributes usage',
      'Layout-level semantics'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 145
  },
  {
    name: 'HTML & CSS',
    date: '2025-06-17',
    topic: [
      'CSS Syntax & Selectors','Box Model','Margin, Padding, Border','Display & Visibility','Colors & Backgrounds','Fonts & Typography','break',
      'Flexbox Fundamentals','Grid Layout Basics','Excercise','Responsive Design','Media Queries','CSS Variables','CSS Specificity & Inheritance'
    ],
    category: ['CSS','','','','','','','','Practice','','','','',''],
    description: [
      'How CSS works',
      'Content, padding, border, margin',
      'Space properties',
      'display: none vs hidden',
      'Using color, gradients',
      'Web typography principles',
      'break',
      'One-dimensional layout control',
      'Two-dimensional layout with grid',
      'Hands‑on layout coding',
      'Adapt layouts to screen sizes',
      'Custom properties usage',
      'Selector precedence'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 150
  },
  {
    name: 'HTML & CSS',
    date: '2025-06-18',
    topic: [
      'Box Alignment','Positioning','Z‑index & Stacking','Pseudo‑classes & Elements','Transitions & Animations','Responsive Units','break',
      'Flex/Grid Advanced','Media Query Features','Excercise','Dark Mode Theme','CSS Frameworks Intro','Bootstrap Basic','Utility‑First CSS'
    ],
    category: ['CSS','','','','','','','','Practice','','','','',''],
    description: [
      'Align items and containers',
      'static, relative, absolute, fixed',
      'Layer rendering order',
      ':hover, ::before usage',
      'Simple animations',
      'rem, vh, vw usage',
      'break',
      'Complex layout combos',
      'Query-specific rules',
      'Hands‑on dynamic layout',
      'Dark vs light theme switching',
      'Intro to Bootstrap, Tailwind',
      'Simple scaffolding usage',
      'Utility concepts explained'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 155
  },
  {
    name: 'HTML & CSS',
    date: '2025-06-19',
    topic: [
      'Forms Styling','Custom Inputs','Responsive Images','Flex + Grid Combined','CSS Grid Areas','break',
      'CSS Transforms','Clip‑path & Masking','Excercise','Accessibility in CSS','Print Stylesheets','Debugging CSS','Final Project Overview'
    ],
    category: ['CSS','','','','','','','Practice','','','','',''],
    description: [
      'Styling form controls',
      'Checkboxes, radios styled',
      'Fluid images techniques',
      'Hybrid layout examples',
      'Define layout regions',
      'break',
      'Rotations, scales',
      'Shape clipping and masks',
      'Hands‑on CSS styling tasks',
      'Visual accessibility considerations',
      'Styles for print view',
      'Debug selectors and box layout',
      'Build project combining HTML/CSS skills'
    ],
    trainer: Array(14).fill('TBD'),
    timing: [['09:30','09:45'],['09:45','10:00'],['10:00','10:15'],['10:15','10:30'],['10:30','10:45'],
             ['10:45','11:00'],['11:00','11:15'],['11:15','11:30'],['11:30','11:45'],['11:45','11:45'],
             ['11:45','11:55'],['11:55','12:10'],['12:10','12:25'],['12:25','12:40']],
    duration: Array(14).fill(15),
    activeLearning: 160
  }
]
export const subject = [...new Set(mockData.map(e => e.name))]
console.log(subject);