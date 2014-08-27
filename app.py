import json
import requests

f = open('lib');
lines = f.readlines()

library_data = []

for l in lines:
  d = l.split('|');  
  print("d2: "+d[2]);
  url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + d[2].strip()
  r = requests.get(url)
  lng = r.json()["results"][0]["geometry"]["location"]["lng"]
  lat = r.json()["results"][0]["geometry"]["location"]["lat"]
  print lat
  print lng 
  library_data.append({"city": d[0].strip(), "name": d[1].strip(), "phone": d[4].strip(), "zip": d[3].strip(), "location": d[2].strip(), "pos" : [lng, lat]});

fd = open("data.txt", 'w');
json.dump(library_data, fd, indent=4, separators=(',', ': '));
fd.close();

