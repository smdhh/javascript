const fs = require('fs');

fs.readFile('nmap.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Erreur lecture", err);
    return;
  }

 
  const regex = /Nmap scan report for ([\d\.]+)[\s\S]+?MAC Address: ([\w:]+) \((.*?)\)/g;
  const sortie = [];
  let match;

  while ((match = regex.exec(data))) {
    const ip = match[1];
    const mac = match[2];
    const host = match[3];

    sortie.push({ ip, mac, host });
  }


  console.table(sortie);
 
});