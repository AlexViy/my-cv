var profile = {
  name: 'Alex',
  photo: "https://lh3.googleusercontent.com/fJMFXTaMQctWoe6gUREUg8gynbFG08gfDtXfMWnmRn26FLIs5D6hYiOLs2wcqAiz8ZMcwPutVrUbMvE7kzcQRlwI9HUO0kjn7evgQ1-A-sEkmAK8_xMJZoCIy3ZHMp8QJKgJEamOl1ZwQMVFUlC5Q70-5b2JxwIiOuu0SBw0mSfBkFQdtZDv6nE7AJg56g0KfYOflQAnJQ-DOckF-1jNlATW4FSdO4_nkTN18DLUvWvW_aLZF6bzNoYhXGYlBI1NM1qJcvKaFRDHkU1lD6Xc2ZaES5R2KYdvojLYShs5VsXXotkV96gTo7DkADO92IiIHslVVG9YRX9CVuYS6XGCAcYgXM1CxD3bsnA9udzmt7Y-E1kYVM02zQEZDhldAUqmioNPt6X3VPwCyhRKxSLKuhgyeEYZhkXgL0jRjiyerO8h8PTSkhVVQFlfLq7nmEKXopEkWCk_mwqahr5gxqCTCgGmaqyIcNoUlw6APYq93nBWHnAUr_na6HqPUvOH43q9b84MQbRMYKIf_cgb6qWIEp15JUy5vIunPwSuot3BHUEiDTuf5XhD-25kisFeGSqGljtMZhNaylqqJbosRp-QOqzmWGHkdif7WyxEsc3k7Uowl_bTvfcNhGIldx-i7VwjVUi06fXsAUHWs72ZCdbgX0AOOgGMtsGjqag=w919-h918-no",
  bio: "BIO My biography should be here..."
}
var coursesList = [
  {
    provider: "Coursera",
    provider_link: 'https://www.coursera.org/',
    logo: "https://images-na.ssl-images-amazon.com/images/I/31dVKrUBBVL.png",
    courses: [
      {
        name: "HTML, CSS, and Javascript for Web Developers",
        course_url: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
        logo: "http://raemacias.com/images/HTML5-CSS3-JS.jpg",
        status: "70"
      }
    ]
  },
  {
    provider: "CodeSchool",
    provider_link: 'https://www.codeschool.com/',
    logo: "https://codeschool-discuss.s3-us-west-2.amazonaws.com/original/3X/5/5/55803fb8fb313f83ecd18f45af67e23e7adb34fb.png",
    courses: [
      {
        name: "Front End Foundaitions",
        course_url: "https://www.codeschool.com/courses/front-end-foundations",
        logo: "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/448/course-complete-81fb30908f005de5c75e5376d041f05f.png",
        status: "100"
      },
      {
        name: "Try Python",
        course_url: "https://www.codeschool.com/courses/try-python",
        logo: "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/596/try-python-d2bdf771d5ce179c7b198432f349d481.png",
        status: "100"
      },
      {
        name: "Flying Through Python",
        course_url: "https://www.codeschool.com/courses/flying-through-python",
        logo: "https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/600/flying-through-python-a7c45e7b86f55b47ab2b6d62fc81012c.png",
        status: "100"
      }
    ]
  },
  {
    provider: "Udacity",
    provider_link: 'https://www.udacity.com/',
    logo: "https://d9tyu2epg3boq.cloudfront.net/providers/udacity-blue.png",
    courses: [
      {
        name: "Intro to JavaScript",
        course_url: "https://www.udacity.com/course/intro-to-javascript--ud803",
        logo: "https://vignette.wikia.nocookie.net/dreadnought/images/f/fd/Js-logo.png/revision/latest?cb=20160509122720",
        status: "31"
      }
    ]
  },
  {
    provider: "FreeCodeCamp",
    provider_link: 'https://www.freecodecamp.org/',
    logo: "https://avatars0.githubusercontent.com/u/9892522?s=400&v=4",
    courses: [
      {
        name: "HTML5 and CSS",
        course_url: "https://www.freecodecamp.org/map-aside#nested-collapseHTML5andCSS",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWPtfCYCBhWGHlW-98CTwNCzVTgdz1KfuhrXbJ1ck9ifDHIz4",
        status: "100"
      },
      {
        name: "Responsive Design With Bootstrap",
        course_url: "https://www.freecodecamp.org/map-aside#nested-collapseResponsiveDesignwithBootstrap",
        logo: "https://www.morpht.com/sites/morpht/files/bootstrap_solid.png",
        status: "100"
      },
      {
        name: "jQuery",
        course_url: "https://www.freecodecamp.org/map-aside#nested-collapsejQuery",
        logo: "http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif",
        status: "100"
      },
      {
        name: "Basic JavaScript",
        course_url: "https://www.freecodecamp.org/map-aside#nested-collapseBasicJavaScript",
        logo: "https://vignette.wikia.nocookie.net/dreadnought/images/f/fd/Js-logo.png/revision/latest?cb=20160509122720",
        status: "85"
      }
    ]
  },
  {
    provider: "w3schools",
    provider_link: 'https://www.w3schools.com/',
    logo: "https://uappexplorer.com/api/icon/1c93d2a3dda3dc8a564a212a1ac6b379/w3schools.panders.png",
    courses: [
      {
        name: "HTML5 Tutorial",
        course_url: "https://www.w3schools.com/html/default.asp",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png",
        status: "100"
      }
    ]
  },
  {
    provider: "SoloLearn",
    provider_link: 'https://www.sololearn.com/',
    logo: "http://www.thedailystar.net/sites/default/files/styles/big_6/public/feature/images/sololearn.jpg?itok=Gqt21bHB",
    courses: [
      {
        name: "HTML Fundamentals",
        course_url: "https://www.sololearn.com/Course/HTML/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png",
        status: "100"
      },
      {
        name: "CSS Fundamentals",
        course_url: "https://www.sololearn.com/Course/CSS/",
        logo: "https://cdn.worldvectorlogo.com/logos/css3.svg",
        status: "100"
      },
      {
        name: "JavaScript Tutorial",
        course_url: "https://www.sololearn.com/Course/JavaScript/",
        logo: "https://vignette.wikia.nocookie.net/dreadnought/images/f/fd/Js-logo.png/revision/latest?cb=20160509122720",
        status: "100"
      },
      {
        name: "jQuery Tutorial",
        course_url: "https://www.sololearn.com/Course/jQuery/",
        logo: "http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif",
        status: "100"
      },
      {
        name: "Python 3 Tutorial",
        course_url: "https://www.sololearn.com/Course/Python/",
        logo: "http://languageinstituteoftheamericas.com/wp-content/uploads/2016/11/python.png",
        status: "25"
      },
      {
        name: "SQL Fundamentals",
        course_url: "https://www.sololearn.com/Course/SQL/",
        logo: "https://powerbicdn.azureedge.net/cvt-deb73394c27483f569564c66c274c50a768118465e62d51875fc55059dce4f1e/pictures/shared/integrations/2x/sql-server@2x.png",
        status: "85"
      }
    ]
  },
  {
    provider: "Prometheus",
    provider_link: 'https://prometheus.org.ua/',
    logo: "http://job.ssm.in.ua/wp-content/uploads/2015/08/prometheus.png",
    courses: [
      {
        name: "Software Testing Fundamentals",
        course_url: "https://courses.prometheus.org.ua/courses/course-v1:LITS+115+2017_T4/about",
        logo: "https://stephenchukumba.files.wordpress.com/2015/07/qa.gif",
        status: "100"
      }
    ]
  },
  {
    provider: "SkillUp",
    provider_link: 'http://skillup.ua/',
    logo: "https://s.dou.ua/CACHE/images/img/static/companies/SkillUP-logo_315-153_V1.0/c2c6d5b0f07cf152a5da980a402559a9.jpg",
    courses: [
      {
        name: "HTML Fundamentals",
        course_url: "http://skillup.ua/lp/qa-lviv/?utm_medium=referal&utm_campaign=button&utm_source=site",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png",
        status: "100"
      },
      {
        name: "SQL Fundamentals",
        course_url: "http://skillup.ua/lp/qa-lviv/?utm_medium=referal&utm_campaign=button&utm_source=site",
        logo: "https://powerbicdn.azureedge.net/cvt-deb73394c27483f569564c66c274c50a768118465e62d51875fc55059dce4f1e/pictures/shared/integrations/2x/sql-server@2x.png",
        status: "100"
      }
    ]
  },
];

var certificatesList = [
  {
    provider: "SoloLearn",
    logo: "http://www.thedailystar.net/sites/default/files/styles/big_6/public/feature/images/sololearn.jpg?itok=Gqt21bHB",
    certificates: [
      {
        name: "HTML Fundamentals course",
        url: "https://www.sololearn.com/Certificate/1060-3600883/pdf/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEhYgSizzS0Kd9ipoii5yPg%3D%3D",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Gold_seal_v2.svg/2000px-Gold_seal_v2.svg.png",
      },
      {
        name: "CSS Fundamentals course",
        url: "https://www.sololearn.com/Certificate/1023-3600883/pdf/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEhYgSizzS0Kd9ipoii5yPg%3D%3D",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Gold_seal_v2.svg/2000px-Gold_seal_v2.svg.png",
      },
      {
        name: "JavaScript Tutorial Course",
        url: "https://www.sololearn.com/Certificate/1024-3600883/pdf/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEhYgSizzS0Kd9ipoii5yPg%3D%3D",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Gold_seal_v2.svg/2000px-Gold_seal_v2.svg.png",
      },
      {
        name: "SQL Tutorials Course",
        url: "https://www.sololearn.com/Certificate/1060-3600883/pdf/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEhYgSizzS0Kd9ipoii5yPg%3D%3D",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Gold_seal_v2.svg/2000px-Gold_seal_v2.svg.png",
      }
    ]
  },
  {
    provider: "Prometheus",
    logo: "http://job.ssm.in.ua/wp-content/uploads/2015/08/prometheus.png",
    certificates: [
      {
        name: "Software Testing Fundamentals",
        url: "https://courses.prometheus.org.ua:18090/downloads/de6dfb5263074260b274b42f7a190e9d/Certificate.pdf?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEhYgSizzS0Kd9ipoii5yPg%3D%3D",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Gold_seal_v2.svg/2000px-Gold_seal_v2.svg.png",
      }
    ]
  }
];
