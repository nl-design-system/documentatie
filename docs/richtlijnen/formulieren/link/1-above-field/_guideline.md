<!-- @license CC0-1.0 -->

# Plaats de link boven het gerelateerde formulierveld

Gebruikers lezen van boven naar beneden. Dan is het fijn als eerst de link met meer informatie komt, en daarna pas het gerelateerde formulierveld. Geef dus eerst de link met de informatie die nodig is om een keuze te maken en dan pas het formulierveld waarop deze informatie van toepassing is.

Je kunt informatie ook boven het formulier vermelden, zodat gebruikers alvast voorbereid zijn.
Bijvoorbeeld als de gebruiker een paspoort- of burgerservicenummer nodig heeft, of als er een tijdslimiet op het invullen van het formulier staat ingesteld.

**Let op**: de link moet niet alleen visueel, maar ook in de DOM (Document Object Modal) in de goede volgorde staan.
Dus een link visueel verplaatsen via bijvoorbeeld flex-order is niet voldoende. De DOM-order is echt belangrijk voor gebruikers van [screenreaders](/woordenlijst/#screenreader).
