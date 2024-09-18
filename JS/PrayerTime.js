let sbh = document.getElementById("sbh")
let dhr = document.getElementById("dhr");
let asor = document.getElementById("asor");
let mgrb = document.getElementById("mgrb");
let ish = document.getElementById("ish");
let mecity = document.getElementById("city")
function convertTo12Hour(time24) {
  if (typeof time24 !== "string" || !time24.includes(":")) {
    console.error(`Invalid time format: ${time24}`);
    return "Invalid time"; 
  }

  const [hours, minutes] = time24.split(":");
  let hours12 = parseInt(hours) % 12 || 12; 
  const ampm = parseInt(hours) >= 12 ? " م" : " ص";
  return `${hours12}:${minutes} ${ampm}`;
}

function prayerTime(country1,city1,date1){
    const prayer = `https://api.aladhan.com/v1/timingsByCity/{date}?date=${date1}&city=${city1}&country=${country1}`;

    fetch(prayer)
      .then((res) => res.json())
      .then((data) => {
        
        sbh.textContent = convertTo12Hour(data.data.timings.Fajr) 
        dhr.textContent = convertTo12Hour(data.data.timings.Dhuhr)
        asor.textContent = convertTo12Hour(data.data.timings.Asr)
        mgrb.textContent = convertTo12Hour(data.data.timings.Maghrib)
        ish.textContent = convertTo12Hour(data.data.timings.Isha) 
        mecity.textContent = city;
      });
}

