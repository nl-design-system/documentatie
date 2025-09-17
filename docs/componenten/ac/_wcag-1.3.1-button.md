<!-- @license CC0-1.0 -->

Als de button in relatie staat tot andere componenten, zoals een menu of een dialog, is deze informatie ook beschikbaar voor bezoekers die gebruik maken van hulpsoftware.

Dit doe je door het `aria-haspopup` attribuut te gebruiken en in te stellen als `"menu"`, `"listbox"`, `"tree"`, `"grid"`, `"dialog"` of `"true"`. Geef daarnaast de relatie aan met `aria-controls`. Als waarde stel je daar één of meerdere `id`'s in van de specifieke onderdelen die worden aangestuurd door de button.
