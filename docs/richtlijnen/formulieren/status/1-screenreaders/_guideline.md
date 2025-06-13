<!-- @license CC0-1.0 -->

# Informeer gebruikers van screenreaders over het statusbericht

Als het statusbericht dynamisch wordt gegenereerd en zichtbaar is, maar geen toetsenbordfocus krijgt, moet de melding worden voorgelezen aan een gebruiker van een [screenreader](/woordenlijst/#screenreader).

Dit kan door van het statusbericht een live-region te maken.

Let op: de live-region moet al in de DOM (de door de browser verwerkte HTML-code) aanwezig zijn voor je er iets in zet. Vaak verwerkt de browser alleen wijzigingen in al bestaande live-regions.

## Live-region met `role="alert"`

Gebruik [role="alert"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) om belangrijke en/of tijdgevoelige berichten aan gebruikers van hulptechnologie direct over te brengen.

Bijvoorbeeld:

- Je inlogsessie loopt bijna af.
- De verbinding met de server is verbroken, lokale wijzigingen worden nu niet opgeslagen.
- Je hebt nog 20 seconden om het formulier te verzenden.

```markup
<div role="alert">
  Waarschuwing: Je hebt nog 20 seconden
  om het formulier te verzenden.
</div>
```

Een element met `role="alert"` is een ‘assertive’ live region, en functioneel gelijk aan het gebruiken van de combinatie [aria-live="assertive"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) en [aria-atomic="true"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic).  
Het onderbreekt de gebruiker bij wat die doet en geeft de melding onmiddellijk door.

**Let op**: gebruik alert spaarzaam, alleen in situaties waarin de onmiddellijke aandacht van de gebruiker vereist is.

## Live-region met `role="status"`

Een live-region met de [role="status"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) geeft de gebruiker informatie die niet belangrijk genoeg is om een 'alert' te zijn.

Bijvoorbeeld:

- Het aanmeldformulier is succesvol verzonden.
- Je hebt nu 3 producten in je winkelmandje.
- Er zijn 5 zoekresultaten gevonden voor 'eikenprocessierups'.

```markup
<div role="status">
  Er zijn 5 zoekresultaten gevonden
  voor 'eikenprocessierups'.
</div>
```

Het instellen van role="status" is gelijk aan het instellen van [aria-live="polite"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) en [aria-atomic="true"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic).

Deze `role="status"` onderbreekt de gebruiker niet, maar de melding wordt pas doorgegeven als de gebruiker geen interactie met de hulptechnologie meer heeft.

Met andere woorden, 'status' wacht op zijn beurt, 'alert' dringt voor.

Veel CMS'en en frameworks hebben iets ingebouwd om screenreaderfeedback makkelijker te maken: ze plaatsen onderaan de pagina een vaste live-region, waaraan je als ontwikkelaar meldingen kan toevoegen die dan worden voorgelezen.

Voorbeelden van dit soort functionaliteit:

- [wp-a11y-speak()](https://make.wordpress.org/accessibility/handbook/markup/wp-a11y-speak/) voor WordPress.
- [drupal.accounce](https://www.drupal.org/node/1973218) voor Drupal.
- [live-announcer](https://www.npmjs.com/package/@react-aria/live-announcer) voor react-aria.

Het informeren van alle gebruikers over een statusbericht is verplicht om te voldoen aan het WCAG-succescriterium [4.1.3 Statusberichten](https://nldesignsystem.nl/wcag/4.1.3) (niveau AA).

Bronnen:

- [<span lang="en">Defining toast messages</span>](https://adrianroselli.com/2020/01/defining-toast-messages.html) van Adrian Roselli.
- [<span lang="en">Patrick H. Lauke</span>](https://tetralogical.com/blog/2024/05/01/why-are-my-live-regions-not-working/) van Patrick H. Lauke.
