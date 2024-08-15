<!-- @license CC0-1.0 -->

# Informeer gebruikers van screenreaders over het statusbericht

Als de statusmelding dynamisch wordt gegenereerd en zichtbaar is, maar geen toetsenbordfocus krijgt, moet de melding worden voorgelezen aan een screenreadergebruiker.

Dit kan door van de statusmelding een live-region te maken.

Let op: de live-region moet al in de DOM (de gegenereerde HTML-code) aanwezig zijn, de browser geeft vaak alleen wijzigingen binnen deze (al bestaande) live-region door.

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

Het instellen van role="alert" is gelijk aan het instellen van [aria-live="assertive"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) en [aria-atomic="true"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic).  
Het onderbreekt de gebruiker bij wat ze aan het doen is en geeft de melding onmiddellijk door.

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

Veel CMS'en en frameworks hebben iets ingebouwd om screenreaderfeedback makkelijker te maken: ze plaatsen onderaan de pagina een vaste live-regions, waaraan je als ontwikkelaar meldingen kan toevoegen die dan worden voorgelezen.

Voorbeelden van dit soort functionaliteit:

- [wp-a11y-speak()](https://make.wordpress.org/accessibility/handbook/markup/wp-a11y-speak/) voor WordPress.
- [drupal.accounce](https://www.drupal.org/node/1973218) voor Drupal.
- [live-announcer](https://www.npmjs.com/package/@react-aria/live-announcer) voor react-aria.

Het informeren van alle gebruikers over een statusbericht is nodig om te voldoen aan het WCAG-succescriterium [4.1.3 Statusberichten](https://nldesignsystem.nl/wcag/4.1.3) (niveau AA).

Bronnen:

- [https://adrianroselli.com/2020/01/defining-toast-messages.html](https://adrianroselli.com/2020/01/defining-toast-messages.html)
- [https://tetralogical.com/blog/2024/05/01/why-are-my-live-regions-not-working/](https://tetralogical.com/blog/2024/05/01/why-are-my-live-regions-not-working/)
