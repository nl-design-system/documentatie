<!-- @license CC0-1.0 -->

# Maak toetsenbordfocus goed zichtbaar

Voor gebruikers van een toetsenbord of van spraakherkenning moet duidelijk zijn welk formulierveld de focus heeft. Maak de focusstijl makkelijk te herkennen en geef het voldoende kleurcontrast. Dan kunnen ook slechtziende of kleurenblinde bezoekers het element met focus goed herkennen.

Dit doe je door een minimale dikte van **2 pixels** en een **minimaal contrast van 3:1** ten opzichte van aangrenzende kleuren. En daarmee bedoelen we de kleur van de component dat focus heeft, maar ook de achtergrond waar de component ‘bovenop’ ligt.

Een button of link komt namelijk misschien het meest voor op een witte achtergrond, maar houdt ook het scenario’s in gedachten waarbij de link of button op een getinte achtergrond staat zoals bijvoorbeeld een footer.

Zorg er ook voor dat de focusring een kleurcontrast heeft van ten minste 3:1 tussen dezelfde pixels in de **gefocuste** en **niet-gefocuste** staat.

Op niveau AA vraagt [succescriterium 2.4.7 Focus zichtbaar](/wcag/2.4.7/) alleen dat de focusindicator zichtbaar is, zonder een dikte of een contrastwaarde. De 2 pixels en het contrast van 3:1 tussen de gefocuste en de niet-gefocuste staat komen uit [succescriterium 2.4.13 Focusweergave](/wcag/2.4.13), niveau AAA. NL Design System kiest hier voor die strengere eis. Het contrast van 3:1 tegenover aangrenzende kleuren vraagt [succescriterium 1.4.11 Contrast van niet-tekstuele content](/wcag/1.4.11/), niveau AA.
