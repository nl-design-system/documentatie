<!-- @license CC0-1.0 -->

# Screenreaderfeedback

Vertel een gebruiker van hulptechnologieën (zoals [screenreaders](/woordenlijst/#screenreader)) dat een veld verplicht is met het ARIA-attribuut `aria-required="true"`.

Je kunt ook het HTML-attribuut `required` gebruiken in plaats van `aria-required`, maar dit vereist ook het attribuut [novalidate](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate) in het `<form>` element.
Novalidate voorkomt dat de formuliervalidatie van de browser in werking treedt. Voor aria-required="true" hoeft dit niet. Alhoewel het gebruik van required in plaats van aria-required niet fout is, geven we daarom de voorkeur aan aria-required.
