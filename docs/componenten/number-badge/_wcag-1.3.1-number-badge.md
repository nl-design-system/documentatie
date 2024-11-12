Visueel heeft de Number Badge een betekenis die duidelijk is. Deze betekenis moet ook duidelijk zijn voor screenreadergebruikers. Het volstaat daarom meestal niet als de Number Badge alleen een cijfer toevoegt aan bijvoorbeeld een tekst 'Inbox'. De visuele layout maakt namelijk duidelijk dat het om nieuwe berichten gaat.

Geeft dan extra tekstuele context, bijvoorbeeld met een visueel verborgen tekst:

```html
<a href="/inbox">
  Inbox
  <data class="utrecht-number-badge" value="4">4</data>
  <span class="screenreader-only">nieuwe berichten</span>
</a>
```
