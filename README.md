SexyDatesJS
===========

SexyDates is an Javascript extends library on Number object that allows you to create dates (Date objects) in a sexy, like way: `(3).days().ago()`.

Usage examples
--------------
```
(0).second().ago() // now
(1).second().ago() // a second ago from now

(1).second().since((1).day().ago()) // passed a second from yesterday"
(3).second().fromNow() // passed 3 second from now

(1).year().fromNow() // a year ago from now
```

TODO
----
- Sync with realworld calendar.
