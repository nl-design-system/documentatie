Wat doen we met backporting? Als er een versie 2.x.x is gereleased van een package, gaat het dan nog voorkomen dat er ooit iets gereleased gaat worden in de 1.x.x serie?

Met een normaal repository per package is dat mogelijk. Je kunt de `main` branch gebruiken voor huidige en toekomstige releases.

Als er een 2.x.x release is geweest wordt er meteen ook een 1.x.x branch met branch protection afgetakt voor fixes op de 1.x.x serie.

Met een mono repo waarin alle packages hun eigen versie hebben is dat niet echt realistisch, er zouden potentieel tientallen branches moeten worden bijgehouden voor alle packages waarbij het een nachtmerrie is om al die packages onderling nog aan elkaar te linken.
