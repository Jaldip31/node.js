// soursc code : Tutorials Point

const moment = require("moment")
console.log(moment().format("[Today's Date is ] D MMM YYYY"));          //  Today's Date is  8 Jul 2022   //https://www.tutorialspoint.com/momentjs/momentjs_format.htm
// console.log(moment().creationData());
// console.log(moment().creationData().locale._weekdays);

//  ######################################  MomentJS - Parsing Date and Time  #############################################
//  #######################################################################################################################
//-----------------------------------------------------------------------------------------------------------------------------------
// 1 Now    
// var now = moment();
// console.log(now);                                       //  Moment<2022-07-08T08:57:07+05:30>
// console.log(now._d);                                    //  2022-07-08T03:27:07.516Z

//-----------------------------------------------------------------------------------------------------------------------------------
// 2	String      => Syntax : moment(string)
// console.log(moment("2017-04-15"));                                          //  Moment<2017-04-15T00:00:00+05:30>
// console.log(moment("2017-06-08 06:30:26"));                                 //  Moment<2017-06-08T06:30:26+05:30>
// console.log(moment('2018.05.25', 'YYYY-MM-DD').isValid());                  // true
// console.log(moment('05.25', 'YYYY-MM-DD').isValid());                       // false
// console.log(moment('2018/05/25').format("YYYY-MM-DD"));                     // 2018-05-25
// console.log(moment('20170608T063026').format("YYYY-MM-DD HH:mm:ss"));       // 2017-06-08 06:30:26
// console.log(moment("634", "Hmm").format("HH:mm"));                          // 06:34

//-----------------------------------------------------------------------------------------------------------------------------------
// 3	Object              => Syntax : moment({unit: value, ...});
// console.log(moment({ year :2017, month :10, day :3, hour :15, minute :10, second :3, millisecond :123}));           //  Moment<2017-11-03T15:10:03+05:30>
//-----------------------------------------------------------------------------------------------------------------------------------
// 4	Date                => Syntax : moment(Date);
// console.log(moment(new Date(2018,10,08)));              //  Moment<2018-11-08T00:00:00+05:30>

//-----------------------------------------------------------------------------------------------------------------------------------
// 5	Array               => Syntax : moment(Number[]);
// console.log(moment([2018,10,08, 10, 30,40]));           //  Moment<2018-11-08T10:30:40+05:30>

//-----------------------------------------------------------------------------------------------------------------------------------
// 6	Unix Timestamp      => Syntax : moment.unix(Number);
// console.log(moment(1315681876406));                         //  Moment<2011-09-11T00:41:16+05:30>
// console.log(moment.unix(1968781876));                       //  Moment<2032-05-22T01:21:16+05:30>

//-----------------------------------------------------------------------------------------------------------------------------------
// 7	Moment Clone        => Syntax : moment(Number[]);
// console.log( moment(Moment));

//-----------------------------------------------------------------------------------------------------------------------------------
// 8	UTC                 => Syntax : moment.utc();
// console.log(moment.utc());                                  //  Moment<2022-07-08T03:48:29Z>
// console.log(moment().hours());                              //  9
// console.log(moment.utc().hours());                          //  3
// console.log(moment().minutes());                            //  21
// console.log(moment.utc().minutes());                        //  51
// console.log(moment().seconds());                            //  47
// console.log(moment.utc().seconds());                        //  47
// console.log(moment().format());                             //  2022-07-08T09:20:32+05:30
// console.log(moment.utc().format());                         //  2022-07-08T03:50:32Z

//-----------------------------------------------------------------------------------------------------------------------------------
// 9	parseZone           => Syntax : moment(Number[]);
// console.log( moment.parseZone());

//-----------------------------------------------------------------------------------------------------------------------------------
// 10	Creation Data       => Syntax : moment().creationData();
// var m = moment("2013-01-02", "YYYY-MM-DD").creationData()
// console.log(m.input);                                           //  2013-01-02
// console.log(m.format);                                          //  YYYY-MM-DD
//-----------------------------------------------------------------------------------------------------------------------------------


//  ############################################  MomentJS - Date Validation  #############################################
//  #######################################################################################################################

//-----------------------------------------------------------------------------------------------------------------------------------
// var a = moment("2018-18-10T10:20:25");
// console.log(a.isValid());                           //  false
// console.log(a.invalidAt());                         //  1
// 0	years
// 1	months
// 2	days
// 3	hours
// 4	minutes
// 5	seconds
// 6	milliseconds
//-----------------------------------------------------------------------------------------------------------------------------------


//  ########################################  MomentJS - Manipulate Date and Time  ########################################
//  #######################################################################################################################

//-----------------------------------------------------------------------------------------------------------------------------------
// 1  Add     => Syntax : moment().add(Number, String);
//                        moment().add(Object);
//                        moment().add(Duration);
// Key	       | Shorthand|
// years	   |    y     |
// quarters	   |    Q     |
// months	   |    M     |
// weeks	   |    w     |
// days	       |    d     |
// hours	   |    h     |
// minutes	   |    m     |
// seconds	   |    s     |
// milliseconds|    ms    |

// Examples :
// console.log(moment().add(5, 'days').add(2, 'months'));                   //  Moment<2022-09-13T10:40:24+05:30>
// console.log(moment().add(5, 'd').add(2, 'M'));                           //  Moment<2022-09-13T10:40:24+05:30>
// console.log(moment().add({ d: 5, M: 2 }));                               //  Moment<2022-09-13T10:40:24+05:30>
// console.log(moment([2017, 2, 31]).add(5, 'hours'));                      //  Moment<2022-07-13T10:37:33+05:30>

// var duration = moment.duration({ 'weeks': 5 });
// console.log(moment([2012, 0, 31]).add(duration));                        //  Moment<2012-03-06T00:00:00+05:30>

//-----------------------------------------------------------------------------------------------------------------------------------
// 2  Subtract        => Syntax : moment.subtract()
// Examples :
// console.log(moment().subtract(5, 'days').subtract(2, 'months'));         //  Moment<2022-05-03T10:44:18+05:30>
// console.log(moment().subtract(5, 'd').subtract(2, 'M'));                 //  Moment<2022-05-03T10:44:18+05:30>
// console.log(moment().subtract({ d: 5, M: 2 }));                          //  Moment<2022-05-03T10:44:18+05:30>
// console.log(moment([2017, 2, 31]).subtract(5, 'hours'));                 //  Moment<2017-03-30T19:00:00+05:30>

// var duration = moment.duration({ 'weeks': 5 });
// console.log(moment([2012, 0, 31]).subtract(duration));                   //  Moment<2011-12-27T00:00:00+05:30>

//-----------------------------------------------------------------------------------------------------------------------------------
// 3  Start of Time       => Syntax : moment.startof()
// Examples :
// console.log(moment().startOf('year'));                                   //  Moment<2022-01-01T00:00:00+05:30>
// console.log(moment().startOf('month'));                                  //  Moment<2022-07-01T00:00:00+05:30>
// console.log(moment().startOf('quarter'));                                //  Moment<2022-07-01T00:00:00+05:30>
// console.log(moment().startOf('week'));                                   //  Moment<2022-07-03T00:00:00+05:30>

//-----------------------------------------------------------------------------------------------------------------------------------
// 4  End of Time     => Syntax : moment.endOf()
// Examples :
// console.log(moment().endOf('year'));                                   //  Moment<2022-12-31T23:59:59+05:30>
// console.log(moment().endOf('month'));                                  //  Moment<2022-07-31T23:59:59+05:30>
// console.log(moment().endOf('quarter'));                                //  Moment<2022-09-30T23:59:59+05:30>
// console.log(moment().endOf('week'));                                   //  Moment<2022-07-09T23:59:59+05:30>

//-----------------------------------------------------------------------------------------------------------------------------------
// 5  Local       => Syntax : moment.local()
// Examples :
// console.log(moment().local());                                          //  Moment<2022-07-08T10:52:56+05:30>

//-----------------------------------------------------------------------------------------------------------------------------------
// 6  UTC     => Syntax : moment.utc()
// Examples :
// console.log( moment().utc());                                            //  Moment<2022-07-08T05:24:31Z>

//-----------------------------------------------------------------------------------------------------------------------------------
// 7  UTC offset      => Syntax : moment().utcOffset();
//                                moment().utcOffset(Number|String);
// Examples :
// console.log( moment().utc());                                            //  Moment<2022-07-08T05:26:56Z>
// console.log(moment().utcOffset());                                       //  330
// console.log(moment().utcOffset(330));                                    //  Moment<2022-07-08T10:58:22+05:30>
// console.log(moment().utcOffset("+05:30"));                               //  Moment<2022-07-08T10:58:22+05:30>
//-----------------------------------------------------------------------------------------------------------------------------------


//  ########################################  MomentJS - Formatting Date and Time  ########################################
//  #######################################################################################################################

// Method               // Syntax
//-----------------------------------------------------------------------------------------------------------------------------------
// Format	            => Syntax : moment().format();         // https://www.tutorialspoint.com/momentjs/momentjs_format.htm
//                                  moment().format(String);
// Examples :
// console.log(moment().format("[Current Time is ] LTS"));

//-----------------------------------------------------------------------------------------------------------------------------------
// Time from now	    => Syntax : moment().fromNow();
//                                  moment().fromNow(Boolean);
// Examples :
// console.log(moment([2022, 06, 1]).fromNow());                               //  7 days ago
// console.log(moment([2022, 0, 1]).fromNow());                                //  6 months ago
// console.log(moment([2018, 0, 1]).fromNow());                                //  5 years ago
// console.log(moment([2018, 0, 1]).fromNow(true));                            //  5 years 

//-----------------------------------------------------------------------------------------------------------------------------------
// Time from X	        => Syntax : moment().from (Moment|String|Number|Date|Array);
// Examples :
// var a = moment([2000, 05, 01]);
// var b = moment([2015, 10, 01]);
// console.log(a.from(b));                                                     //  15 years ago
// console.log(a.from(b, true));                                               //  15 years
// console.log(a.from(new Date()));                                            //  22 years ago

//-----------------------------------------------------------------------------------------------------------------------------------
// Time to now	        => Syntax : moment().toNow();
//                               moment().toNow(Boolean);
// Examples :
// console.log(moment([2015, 3, 15]).toNow());                                 //  in 7 years
// console.log(moment([2015, 3, 15]).toNow(true));                             //  7 years

//-----------------------------------------------------------------------------------------------------------------------------------
// Time to X	        => Syntax : moment().to(Moment|String| Number|Date|Array);
//                               moment().to(Moment|String| Number|Date|Array, Boolean);
// Examples :
// var a = moment([2000, 05, 01]);
// var b = moment([2015, 10, 01]);
// console.log(a.to(b));                                                     //  in 15 years 
// console.log(a.to(b, true));                                               //  15 years
// console.log(a.to(new Date()));                                            //  in 22 years 


//-----------------------------------------------------------------------------------------------------------------------------------
// Calendar Time	    => Syntax : moment().calendar();
//                               moment().calendar(referenceTime);
//                               moment().calendar(referenceTime, formats);
// Examples :
// console.log(moment().calendar());                                            //   Today at 11:49 AM
// console.log(moment().add(24, 'h').calendar());                               //  Tomorrow at 11:49 AM
// console.log(moment().subtract(24, 'h').calendar());                          //  Yesterday at 11:49 AM
// console.log(moment().subtract(48, 'h').calendar());                          //  Last Wednesday at 11:51 AM
// console.log(moment().subtract(30, 'd').calendar());                          //  06/08/2022
// console.log(moment().subtract(30, 'd').format('DD/MM/YYYY'));                //  08/06/2022

//-----------------------------------------------------------------------------------------------------------------------------------
// Difference	        => Syntax : moment().diff(Moment|String| Number|Date|Array);
//                               moment().diff(Moment|String| Number|Date|Array, String);
//                               moment().diff(Moment|String| Number|Date|Array, String, Boolean);
// Examples :
// var a = moment([2000, 1, 16]);
// var b = moment([2000, 1, 15]);
// console.log("seconds : ",a.diff(b)/1000);                                                       //  86400   <-- seconds
// console.log("minutes : ",a.diff(b)/1000/60);                                                    //  1440    <-- minutes
// console.log("hour    : ",a.diff(b)/1000/60/60);                                                 //  24      <-- hour

// console.log("years   : ",a.diff(b, "years"));                               // years   :  0
// console.log("years   : ",a.diff(b, "years",true));                          //  years   :  0.0026881720430107525
// console.log("month   : ", a.diff(b, "month"));                              //  month   :  0
// console.log("days    : ", a.diff(b, "days"));                               //  days    :  1
// console.log("hours   : ", a.diff(b, "hours"));                              //  hours   :  24
// console.log("minutes : ", a.diff(b, "minutes"));                            //  minutes :  1440
// console.log("seconds : ", a.diff(b, "seconds"));                            //  seconds :  86400

//-----------------------------------------------------------------------------------------------------------------------------------
// Unix Timestamp(milliseconds)	    => Syntax : moment().valueOf();
//                                            +moment();
// Examples :
// console.log();

//-----------------------------------------------------------------------------------------------------------------------------------
// Unix Timestamp(seconds)	        => Syntax : moment().unix();
// Examples :
// console.log();

//-----------------------------------------------------------------------------------------------------------------------------------
// Days in Month	                => Syntax : moment().daysInMonth();
// Examples :
// console.log(moment().daysInMonth());                                        //  31
// console.log(moment([2016, 1]).daysInMonth());                               //  29
// console.log(moment([2017, 1]).daysInMonth());                               //  28
// console.log(moment([2017, 2]).daysInMonth());                               //  31

//-----------------------------------------------------------------------------------------------------------------------------------
// As JavaScript Date	            => Syntax : moment().toDate();
// Examples :
// console.log(new Date());                                                    //  2022-07-08T07:10:14.065Z
// console.log(moment().toDate());                                             //  2022-07-08T07:10:14.065Z

//-----------------------------------------------------------------------------------------------------------------------------------
// As Array	                        => Syntax : moment().toArray();
// Examples :
// console.log(moment().toArray());                                             // [ 2022, 6, 8, 12, 40, 54, 482 ]

//-----------------------------------------------------------------------------------------------------------------------------------
// As JSON	                        => Syntax : moment().toJSON();
// Examples :
// console.log(moment().toJSON());                                              //  2022-07-08T07:12:23.343Z

//-----------------------------------------------------------------------------------------------------------------------------------
// As ISO 8601 String	            => Syntax : moment().toISOString();
//                                              moment().toISOString(keepOffset);
// Examples :
// console.log( moment().toISOString());                                        //  2022-07-08T07:13:47.076Z
// console.log( moment().toISOString(true));                                    //  2022-07-08T12:44:20.349+05:30

//-----------------------------------------------------------------------------------------------------------------------------------
// As Object	                    => Syntax : moment().toObject();
// Examples :
// console.log(moment().toObject());                                           //  { years: 2022, months: 6, date: 8, hours: 12, minutes: 47, seconds: 16, milliseconds: 385}

//-----------------------------------------------------------------------------------------------------------------------------------
// As String	                    => Syntax : moment().toString();
// Examples :
// console.log(moment().toString());                                           //  Fri Jul 08 2022 12:49:26 GMT+0530

//-----------------------------------------------------------------------------------------------------------------------------------
// Inspect	                        => Syntax : moment().inspect();
// Examples :
// console.log(moment().inspect());                                            //  moment("2022-07-08T12:51:55.772")
// console.log(moment(new Date("18/10")).inspect());                           //  moment.invalid(/* Invalid Date */)
//-----------------------------------------------------------------------------------------------------------------------------------



//  ############################################# MomentJS - Date Queries  ################################################
//  #######################################################################################################################

//-----------------------------------------------------------------------------------------------------------------------------------
// Is Before	                => Syntax : moment().isBefore(Moment|String|Number|Date|Array);
//                                          moment().isBefore(Moment|String|Number|Date|Array, String);
// Example :
// console.log(moment().isBefore('2022-10-21'));                                    // true
// console.log(moment([2015, 10, 01]).isBefore([2000, 10, 21]));                    // false
// console.log(moment([2015, 10, 01]).isBefore([2010, 10, 21], 'year'));            // false

//-----------------------------------------------------------------------------------------------------------------------------------
// Is Same	                    => Syntax : moment().isSame(Moment|String|Number|Date|Array);
//                                          moment().isSame(Moment|String|Number|Date|Array, String);
// Example :
// console.log(moment([2015, 10, 01]).isSame([2015, 10, 01]));                         // true
// console.log(moment([2015, 10, 01]).isSame([2015, 05, 10], 'year'));                 // true
// console.log(moment([2015, 10, 01]).isSame([2015, 05, 10], 'month'));                // false
// console.log(moment('2015-05-01').isSame(moment('2015-05-01'), 'month'));            // true

//-----------------------------------------------------------------------------------------------------------------------------------
// Is After	                    => Syntax : moment().isAfter(Moment|String|Number|Date|Array);
//                                          moment().isAfter(Moment|String|Number|Date|Array, String);
// Example :
// console.log(moment().isAfter('2022-10-21'));                                    // false
// console.log(moment([2015, 10, 01]).isAfter([2000, 10, 21]));                    // true
// console.log(moment([2015, 10, 01]).isAfter([2010, 10, 21], 'year'));            // true

//-----------------------------------------------------------------------------------------------------------------------------------
// Is Same or Before	        => Syntax : moment().isSameOrBefore(Moment|String|Number|Date|Array);
//                                          moment().isSameOrBefore(Moment|String|Number|Date|Array, String);
// Example :
// console.log(moment('2017-10-10').isSameOrBefore('2017-11-21'));                 //  true
// console.log(moment('2017-11-21').isSameOrBefore('2017-11-21'));                 //  true
// console.log(moment('2017-10-10').isSameOrBefore('2017-08-21'));                 //  false
// console.log(moment('2017-10-10').isSameOrBefore('2017-08-21', 'year'));         //  true
// console.log(moment('2017-10-10').isSameOrBefore('2017-10-21', 'month'));        //  true
// console.log(moment('2017-10-25').isSameOrBefore('2017-10-21', 'day'));          //  false

//-----------------------------------------------------------------------------------------------------------------------------------
// Is Same or After	            => Syntax : moment().isSameOrAfter(Moment|String|Number|Date|Array);
//                                          moment().isSameOrAfter(Moment|String|Number|Date|Array, String);
// Example :
// console.log(moment('2017-10-10').isSameOrAfter('2017-11-21'));                 //  false
// console.log(moment('2017-11-21').isSameOrAfter('2017-11-21'));                 //  true
// console.log(moment('2017-10-10').isSameOrAfter('2017-08-21'));                 //  true
// console.log(moment('2017-10-10').isSameOrAfter('2017-08-21', 'year'));         //  true
// console.log(moment('2017-10-10').isSameOrAfter('2017-10-21', 'month'));        //  true
// console.log(moment('2017-10-25').isSameOrAfter('2017-10-21', 'day'));          //  true

//-----------------------------------------------------------------------------------------------------------------------------------
// Is Between	                => Syntax : moment().isBetween(moment-like, moment-like);
//                                          moment().isBetween(moment-like, moment-like, String);
// Example :
// console.log(moment('2015-05-01').isBetween('2009-10-19', '2018-10-25'));                // true
// console.log(moment('2015-05-01').isBetween('2009-10-19', '2018-10-25', 'year'));        // true

//-----------------------------------------------------------------------------------------------------------------------------------
// Is Daylight Saving Time	    => Syntax : moment().isDST();
// Example :
// console.log();

//-----------------------------------------------------------------------------------------------------------------------------------
// Is Leap Year	                => Syntax : moment().isLeapYear();
// Example :
// console.log( moment([2000]).isLeapYear());                                      // true

//-----------------------------------------------------------------------------------------------------------------------------------
// Is a Moment	                => Syntax : moment.isMoment(obj);
// Example :
// console.log();

//-----------------------------------------------------------------------------------------------------------------------------------
// Is a Date	                => Syntax : moment.isDate(obj);



//  ############################################# MomentJS - Date Queries  ################################################
//  #######################################################################################################################
//-----------------------------------------------------------------------------------------------------------------------------------
//  1  Global locale        => We can assign locale globally and all the date /time details will be available in the locale assigned.
// Syntxa : moment.locale(String);
//          moment.locale(String[]);
//          moment.locale(String, Object);
// Example : 
// moment.locale("hi");
// console.log(moment.duration(1, 'days').humanize());                         //  एक दिन
// console.log(moment.duration(1, 'week').humanize());                         //  ७ दिन
// console.log(moment().fromNow());                                            // कुछ ही क्षण पहले

//-----------------------------------------------------------------------------------------------------------------------------------
//  2  Changing Locale Locally          => We need locale to applied locally in case we need to handle many locales in an application.
// Example : 
// console.log(moment.locale());                                               //  en
// console.log(moment().format('LLLL'))                                        //  Friday, July 8, 2022 3:40 PM
// console.log(moment.locale("gu"));                                           //  gu
// console.log(moment().format('LLLL'))                                        //  શુક્રવાર, ૮ જુલાઈ ૨૦૨૨, બપોર ૩:૪૦ વાગ્યે
// console.log(moment.locale("hi"));                                           //  hi
// console.log(moment().format('LLLL'))                                        //  शुक्रवार, ८ जुलाई २०२२, दोपहर ३:४० बजे
// console.log();

//-----------------------------------------------------------------------------------------------------------------------------------
//  3  Using Locale in Browser          => We can start working with locale by including the locale file in script tag.
// Example : 
// console.log();

//-----------------------------------------------------------------------------------------------------------------------------------
//  4  Using Locale using Node.js           => If you happen to use Node.js , you will have the locale files already in moment when you do npm install moment.
// Example : 
// console.log();

//-----------------------------------------------------------------------------------------------------------------------------------
//  5  momentjs_Listing date/time details of current locale         => You can set the locale and check the details like months, weekdays etc.
// Example : 
// console.log();

//-----------------------------------------------------------------------------------------------------------------------------------
//  6  Checking current locale          => We can check the current locale using moment.locale().
// Example : 
// console.log();

//-----------------------------------------------------------------------------------------------------------------------------------
//  7  Accessing Locale Specific Functionality          => Here will see the methods and properties available on currently loaded locale.
// Example : 
// console.log();



// var k = moment.duration(500);
// console.log(k._data);
// console.log(moment.duration(5, 'seconds')._data);
// console.log(moment.duration(13, 'months')._data);
// console.log(moment.duration(2, 'year')._data);
// console.log(moment.duration(3, 'weeks')._data);
// console.log(moment.duration('6.23:50:40')._data);


// console.log(moment.duration().humanize());
// console.log(moment.duration(24, "hours").humanize());
// console.log(moment().subtract(8, 'hours').short());
























// console.log(moment())                                   //  Moment<2022-07-08T08:29:26+05:30>
// console.log(moment().format())                          //  2022-07-08T08:28:47+05:30
// console.log(moment().format("MMM Do YY"))               //  Jul 8th 22
// console.log(moment().format(moment().format('LT')))     //  8:28 AM7

// console.log(new Date())
// console.log(moment(new Date(),"MMM Do YY"))

// var date1 = moment('2016-10-08 10:31:13');
// var date2 = moment('2016-10-08 10:32:23');
// var diff = date2.diff(date1);
// console.log('diff',diff/60000);                     //  1.1666666666666667

// var diffInMinutes = date2.diff(date1, 'minutes');
// console.log('diffInMinutes',diffInMinutes);         //  1

// var diffInMinutes = date2.diff(date1, 'seconds');
// console.log('diffInSeconds',diffInMinutes);         //  70

// console.log(moment().subtract(5, 'days'));                                      //  Moment<2022-07-03T08:33:52+05:30>
// console.log(moment().subtract(5, 'days').subtract(2, 'months'))                 //  Moment<2022-05-03T08:31:13+05:30>
// console.log(moment().subtract({ days: 5, months: 2 }))                          //  Moment<2022-05-03T08:31:13+05:30>

// var duration = moment.duration({ 'days': 2 });
// console.log(moment([2017, 11, 15]).add(duration));                              //  Moment<2017-12-17T00:00:00+05:30>
// console.log(moment([2017, 11, 15]).subtract(duration));                         //  Moment<2017-12-13T00:00:00+05:30>