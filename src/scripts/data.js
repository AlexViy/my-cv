var profile = {
  name: 'Alex',
  photo: "https://lh3.googleusercontent.com/fJMFXTaMQctWoe6gUREUg8gynbFG08gfDtXfMWnmRn26FLIs5D6hYiOLs2wcqAiz8ZMcwPutVrUbMvE7kzcQRlwI9HUO0kjn7evgQ1-A-sEkmAK8_xMJZoCIy3ZHMp8QJKgJEamOl1ZwQMVFUlC5Q70-5b2JxwIiOuu0SBw0mSfBkFQdtZDv6nE7AJg56g0KfYOflQAnJQ-DOckF-1jNlATW4FSdO4_nkTN18DLUvWvW_aLZF6bzNoYhXGYlBI1NM1qJcvKaFRDHkU1lD6Xc2ZaES5R2KYdvojLYShs5VsXXotkV96gTo7DkADO92IiIHslVVG9YRX9CVuYS6XGCAcYgXM1CxD3bsnA9udzmt7Y-E1kYVM02zQEZDhldAUqmioNPt6X3VPwCyhRKxSLKuhgyeEYZhkXgL0jRjiyerO8h8PTSkhVVQFlfLq7nmEKXopEkWCk_mwqahr5gxqCTCgGmaqyIcNoUlw6APYq93nBWHnAUr_na6HqPUvOH43q9b84MQbRMYKIf_cgb6qWIEp15JUy5vIunPwSuot3BHUEiDTuf5XhD-25kisFeGSqGljtMZhNaylqqJbosRp-QOqzmWGHkdif7WyxEsc3k7Uowl_bTvfcNhGIldx-i7VwjVUi06fXsAUHWs72ZCdbgX0AOOgGMtsGjqag=w919-h918-no",
  bio: "BIO My biography should be here..."
}
var coursesList = [
  {
    provider: "Coursera",
    provider_link: 'https://www.coursera.org/',
    logo: "http://rhymeswithcroatia.com/wp-content/uploads/2015/07/coursera.png",
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
    logo: "https://d125fmws0bore1.cloudfront.net/assets/udacity_share-317a7f82552763598a5c91e1550b7cd83663ce02d6d475d703e25a873cd3b574.png",
    courses: [
      {
        name: "Intro to JavaScript",
        course_url: "https://www.udacity.com/course/intro-to-javascript--ud803",
        logo: "https://d125fmws0bore1.cloudfront.net/assets/udacity_share-317a7f82552763598a5c91e1550b7cd83663ce02d6d475d703e25a873cd3b574.png",
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
        logo: "https://i.ytimg.com/vi/__IJKMzilQo/hqdefault.jpg",
        status: "100"
      },
      {
        name: "Responsive Design With Bootstrap",
        course_url: "https://www.freecodecamp.org/map-aside#nested-collapseResponsiveDesignwithBootstrap",
        logo: "https://i.ytimg.com/vi/2QCPy522Afw/maxresdefault.jpg",
        status: "100"
      },
      {
        name: "jQuery",
        course_url: "https://www.freecodecamp.org/map-aside#nested-collapsejQuery",
        logo: "https://i.ytimg.com/vi/o3pZhyLfRY0/maxresdefault.jpg",
        status: "100"
      },
      {
        name: "Basic JavaScript",
        course_url: "https://www.freecodecamp.org/map-aside#nested-collapseBasicJavaScript",
        logo: "https://i.ytimg.com/vi/DM9o0eZCA8A/maxresdefault.jpg",
        status: "85"
      }
    ]
  },
  {
    provider: "w3schools",
    provider_link: 'https://www.w3schools.com/',
    logo: "https://vignette.wikia.nocookie.net/howtoprogram/images/c/ce/W3Schools.png/revision/latest?cb=20130601232401",
    courses: [
      {
        name: "HTML5 Tutorial",
        course_url: "https://www.w3schools.com/html/default.asp",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png",
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
        logo: "https://www.sololearn.com/Icons/Courses/1014.png",
        status: "100"
      },
      {
        name: "CSS Fundamentals",
        course_url: "https://www.sololearn.com/Course/CSS/",
        logo: "https://www.sololearn.com/Icons/Courses/1023.png",
        status: "100"
      },
      {
        name: "JavaScript Tutorial",
        course_url: "https://www.sololearn.com/Course/JavaScript/",
        logo: "https://www.sololearn.com/Icons/Courses/1024.png",
        status: "100"
      },
      {
        name: "jQuery Tutorial",
        course_url: "https://www.sololearn.com/Course/jQuery/",
        logo: "https://www.sololearn.com/Icons/Courses/1082.png",
        status: "100"
      },
      {
        name: "Python 3 Tutorial",
        course_url: "https://www.sololearn.com/Course/Python/",
        logo: "https://www.sololearn.com/Icons/Courses/1073.png",
        status: "25"
      },
      {
        name: "SQL Fundamentals",
        course_url: "https://www.sololearn.com/Course/SQL/",
        logo: "https://www.sololearn.com/Icons/Courses/1060.png",
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
        logo: "https://courses.prometheus.org.ua/asset-v1:LITS+115+2017_T4+type@asset+block@_0CECDB714CA2EE29B6C9284FE2AF718E3502C6EF60D7C749E9_pimgpsh_fullsize_distr.png",
        status: "100"
      }
    ]
  },
  {
    provider: "SkillUp",
    provider_link: 'http://skillup.ua/',
    logo: "https://comers.com.ua/wp-content/uploads/2016/09/logo-skillup-kiev.jpg",
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
      },
      {
        name: "CSS Fundamentals course",
        url: "https://www.sololearn.com/Certificate/1023-3600883/pdf/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEhYgSizzS0Kd9ipoii5yPg%3D%3D",
      },
      {
        name: "JavaScript Tutorial Course",
        url: "https://www.sololearn.com/Certificate/1024-3600883/pdf/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEhYgSizzS0Kd9ipoii5yPg%3D%3D",
      },
      {
        name: "SQL Tutorials Course",
        url: "https://www.sololearn.com/Certificate/1060-3600883/pdf/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEhYgSizzS0Kd9ipoii5yPg%3D%3D",
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
      }
    ]
  }
];
