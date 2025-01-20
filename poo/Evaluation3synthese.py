iot_devices = {
    "device1" : {"mac": "00:1A:C2:7B:00:47", "status": "actif", "last_seen": "2025-01-01", "battery": 85},
    "device2" : {"mac": "00:1B:C3:8C:00:48", "status": "inactif", "last_seen": "2024-12-20", "battery": 20},
    "device3" : {"mac": "00:1C:C4:9D:00:49", "status": "actif", "last_seen": "2025-01-04", "battery": 50},
}



def afficher_statut(parc):
    actifs = [f"{id}: {infos['mac']} (État: {infos['status']})" for id, infos in parc.items() if infos["status"] == "actif"]
    inactifs = [f"{id}: {infos['mac']} (État: {infos['status']})" for id, infos in parc.items() if infos["status"] == "inactif"]
    if actifs:
        print("Périphériques actifs :")
        for actif in actifs:
            print(actif)
    elif inactifs :
        print("Périphériques inactifs : ")
        for inactif in inactifs:
            print(inactif)
def ajouter_appareil(parc, device_id, mac, status, last_seen, battery):
        iot_devices[parc] = {"device_id": device_id,"mac": mac, "status": status,"last_seen": last_seen,"battery": battery}
        print(f"Le {parc} a été ajouté")


def mettre_a_jour_statut(parc, device_id, nv_statut):
        iot_devices[parc]["status"] = nv_statut
        print(f"L'état {parc} a été modifié en '{device_id}'.")
        #print (iot_devices)


def batterie_faible(parc,seuil):
    seuil = [f"{id}: {infos['mac']} (seuil: {infos['status']})" for id, infos in parc.items() if infos["battery"] >= 25]
    for seuil in seuil:
            print(seuil)
def menu():
         while True:
             print ("--- Gestion de Parc IoT---")
             print("\n1.Afficher le statut du parc")
             print("\n2.Ajouter un nouvel appareil")
             print("\n3.Mettre a jour le statut d'un appareil")
             print("\n4.Lister les appareils avec une batterie faible")
             print("\n5.Détecter les appareils inactifs depuis trop longtemps")
             print("\n6.Quitter")
             
menu()

#batterie_faible( 40, iot_devices)            
#mettre_a_jour_statut("device3", "inactif", iot_devices)
# ajouter_appareil("device7", "00:1C:C4:9D:00:43", "actif","2025-01-08",50, iot_devices)
#afficher_statut(iot_devices)