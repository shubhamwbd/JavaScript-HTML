function min_date(all_dates) {
    var min_dt = all_dates[0],
     min_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function(dt, index)
     {
     if ( new Date( dt ) < min_dtObj)
     {
     min_dt = dt;
     min_dtObj = new Date(dt);
     }
     });
    return min_dt;
     }
   console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));