const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
const year = today.getFullYear();

let datee = `${day}-${month}-${year}`;
let city = "";
let country = "";

const findMystate = () => {
  const success = (pos) => {
    
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const geo = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    fetch(geo)
      .then((res) => res.json())
      .then((data) => {
        
        
        city = data.city;
        
        prayerTime(data.countryCode, data.city, datee);
      });
  };
  const error = () => {
    console.log("error");
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

findMystate();
